"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";

import { ArrowUpRight } from "../components/icons";

type ServiceKey = "partners" | "advertisers";

const OTP_LENGTH = 6;
const RESEND_COOLDOWN = 60;

const SERVICE_META: Record<ServiceKey, {
  badge: string;
  title: string;
  description: string;
  verifyEndpoint: string;
  resendEndpoint: string;
}> = {
  partners: {
    badge: "EV Xura Partner",
    title: "Verify your EV Partner account",
    description:
      "We emailed a 6-digit code to your registered address. Enter it below to activate your EV partner account and gain access to the Xura partner portal.",
    verifyEndpoint: "/api/auth/verify-email",
    resendEndpoint: "/api/partner-resend-otp",
  },
  advertisers: {
    badge: "Ad Engine",
    title: "Verify your Advertiser account",
    description:
      "We emailed a 6-digit code to your registered address. Enter it below to activate your advertiser account and start running campaigns on the Xura network.",
    verifyEndpoint: "/api/auth/verify-email",
    resendEndpoint: "/api/advertiser-resend-otp",
  },
};

export default function VerifyOtpPage() {
  return (
    <main className="relative isolate flex h-[100svh] w-full flex-col overflow-hidden bg-ink">
      {/* Top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[55vh] bg-[radial-gradient(120%_70%_at_50%_0%,rgba(139,251,3,0.09)_0%,rgba(5,5,5,0)_55%)]"
      />
      {/* Bottom glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-[40vh] bg-[radial-gradient(120%_60%_at_50%_100%,rgba(139,251,3,0.04)_0%,rgba(5,5,5,0)_60%)]"
      />

      <header className="relative z-30 mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 pt-5 sm:px-10 sm:pt-6 lg:px-16">
        <Link href="/" className="flex items-center" aria-label="Xura home">
          <Image
            src="/xura_logo.png"
            alt="Xura"
            width={875}
            height={200}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <Link
          href="/login"
          className="group inline-flex h-10 items-center gap-2 rounded-full border border-paper/15 bg-paper/[0.04] px-4 text-[10px] font-medium uppercase tracking-[0.18em] text-paper/75 backdrop-blur-md transition-colors hover:border-paper/30 hover:text-paper"
        >
          <span
            aria-hidden="true"
            className="grid h-3.5 w-3.5 place-items-center text-paper/70 transition-transform group-hover:-translate-x-0.5"
          >
            <svg viewBox="0 0 14 14" className="h-3 w-3" fill="none">
              <path
                d="M11.5 7h-9m0 0L7 11.5M2.5 7 7 2.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Back to sign in
        </Link>
      </header>

      <Suspense fallback={<OtpCardSkeleton />}>
        <OtpCard />
      </Suspense>
    </main>
  );
}

function OtpCard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get("tab") as ServiceKey | null;
  const service: ServiceKey | null = tabParam === "partners" || tabParam === "advertisers"
    ? tabParam
    : null;

  const queryEmail = searchParams.get("email") ?? "";

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [loading, setLoading] = useState(false);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [resendMsg, setResendMsg] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(RESEND_COOLDOWN);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Redirect when the tab is invalid or email is unavailable.
  useEffect(() => {
    if (!service) {
      router.replace("/login");
      return;
    }

    const stored = sessionStorage.getItem("otp_email");
    if (!stored && !queryEmail) {
      router.replace("/login");
    } else {
      setEmail(stored ?? queryEmail);
    }
  }, [router, queryEmail, service]);

  if (!service) return null;
  const meta = SERVICE_META[service];

  // Focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // Resend countdown
  useEffect(() => {
    if (countdown <= 0) { setCanResend(true); return; }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    setOtpError(null);
    if (digit && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;
    const next = [...otp];
    pasted.split("").forEach((char, i) => { next[i] = char; });
    setOtp(next);
    const nextFocus = Math.min(pasted.length, OTP_LENGTH - 1);
    inputRefs.current[nextFocus]?.focus();
  };

  const [verified, setVerified] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < OTP_LENGTH) return;
    setLoading(true);
    setOtpError(null);
    try {
      const res = await fetch(`${meta.verifyEndpoint}?tab=${service}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: code, tab: service }),
      });
      const data = await res.json();
      if (!data.status) throw new Error(data.message || "Verification failed");
      sessionStorage.removeItem("otp_email");
      setVerified(true);
      setTimeout(() => {
        router.push(`/login?tab=${service}&verified=1`);
      }, 2000);
    } catch (err: unknown) {
      setOtpError(err instanceof Error ? err.message : "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = useCallback(async () => {
    if (!canResend) return;
    setResendMsg(null);
    setOtpError(null);
    try {
      const res = await fetch(meta.resendEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!data.status) throw new Error(data.message || "Failed to resend OTP");
      setOtp(Array(OTP_LENGTH).fill(""));
      inputRefs.current[0]?.focus();
      setCountdown(RESEND_COOLDOWN);
      setCanResend(false);
      setResendMsg("A new code has been sent to your email.");
    } catch (err: unknown) {
      setOtpError(err instanceof Error ? err.message : "Failed to resend OTP.");
    }
  }, [canResend, email, meta.resendEndpoint]);

  const maskedEmail = email.replace(/(.{2}).+(@.+)/, "$1***$2");
  const filled = otp.every((d) => d !== "");

  if (!email) return null;

  const toastLabel =
    service === "partners"
      ? "Partner account verified — redirecting to sign in…"
      : "Advertiser account verified — redirecting to sign in…";

  return (
    <>
      {/* Verification success toast */}
      <AnimatePresence>
        {verified && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
          >
            <div className="flex items-center gap-3 rounded-full border border-accent/30 bg-ink-2/90 px-5 py-3 shadow-xl backdrop-blur-md">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                <svg viewBox="0 0 12 12" className="h-3 w-3 text-ink" fill="none">
                  <path d="M2 6.2l2.6 2.6L10 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[13px] font-medium text-paper">{toastLabel}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    <section className="relative z-10 mx-auto flex w-full max-w-[540px] flex-1 items-center justify-center px-5 py-4 sm:px-8 sm:py-6">
      <div
        className="rise w-full"
        style={{ ["--rise-delay" as string]: "200ms" }}
      >
        <div className="relative overflow-hidden rounded-3xl border border-paper/[0.08] bg-ink-2/60 backdrop-blur-md sm:rounded-[32px]">
          <div className="relative p-5 sm:p-7">

            {/* Top status bar */}
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                </span>
                Secure node
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mute">
                Verify OTP
              </span>
            </div>

            {/* Service badge — shows which platform the user is verifying for */}
            <div className="mb-4">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] ${
                  service === "partners"
                    ? "border-accent/40 bg-accent/8 text-accent"
                    : "border-accent/40 bg-accent/8 text-accent"
                }`}
              >
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
                {meta.badge}
              </span>
            </div>

            {/* Title + description */}
            <div className="mb-5">
              <motion.h1
                key={service}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mb-1.5 text-[17px] font-medium text-paper sm:text-lg"
              >
                {meta.title}
              </motion.h1>
              <motion.p
                key={service + "-desc"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.05 }}
                className="text-[12.5px] leading-snug text-paper/65"
              >
                {meta.description}
              </motion.p>
              {maskedEmail && (
                <p className="mt-2 font-mono text-[10.5px] text-mute">
                  Code sent to:{" "}
                  <span className="text-paper/80">{maskedEmail}</span>
                </p>
              )}
            </div>

            {/* OTP form */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Digit inputs */}
              <div>
                <span className="mb-2.5 block font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mute">
                  6-digit code
                </span>
                <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${OTP_LENGTH}, 1fr)` }}>
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => { inputRefs.current[i] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(i, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(i, e)}
                      onPaste={handlePaste}
                      aria-label={`OTP digit ${i + 1}`}
                      className={`h-12 w-full rounded-xl border text-center text-lg font-semibold text-paper transition-colors focus:outline-none focus:ring-1 ${
                        digit
                          ? "border-accent/50 bg-accent/[0.06] focus:border-accent/60 focus:ring-accent/30"
                          : "border-paper/[0.08] bg-paper/[0.02] focus:border-accent/40 focus:ring-accent/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Messages */}
              {otpError && (
                <p className="text-center text-[12px] text-red-400">{otpError}</p>
              )}
              {resendMsg && (
                <p className="text-center text-[12px] text-accent">{resendMsg}</p>
              )}

              <SubmitButton
                label={loading ? "Verifying…" : "Verify & continue"}
                disabled={loading || !filled}
              />
            </form>

            {/* Footer */}
            <div className="mt-5 border-t border-paper/[0.06] pt-4 space-y-2 text-center">
              <p className="text-[12.5px] text-paper/65">
                Didn&apos;t receive a code?{" "}
                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="cursor-pointer font-medium text-accent transition-colors hover:text-paper"
                  >
                    Resend code
                  </button>
                ) : (
                  <span className="text-paper/40">
                    Resend in {countdown}s
                  </span>
                )}
              </p>
              <p className="text-[12.5px] text-paper/65">
                Wrong account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    sessionStorage.removeItem("otp_email");
                    router.push(`/login?tab=${service}&mode=signup`);
                  }}
                  className="font-medium text-accent transition-colors hover:text-paper"
                >
                  Back to sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

function OtpCardSkeleton() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-[540px] flex-1 items-center justify-center px-5 py-4 sm:px-8 sm:py-6">
      <div className="w-full">
        <div className="relative h-[460px] overflow-hidden rounded-3xl border border-paper/[0.08] bg-ink-2/40 backdrop-blur-md sm:rounded-[32px]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function SubmitButton({ label, disabled }: { label: string; disabled?: boolean }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="group relative mt-1 inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-6 text-sm font-normal tracking-[0.1em] text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <span className="relative z-10">{label}</span>
      <span
        aria-hidden="true"
        className="relative z-10 grid h-7 w-7 place-items-center rounded-full bg-ink text-accent transition-transform group-hover:translate-x-0.5"
      >
        <ArrowUpRight />
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-paper transition-transform duration-500 group-hover:translate-x-0"
      />
    </button>
  );
}
