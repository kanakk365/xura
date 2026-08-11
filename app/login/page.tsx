"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { ArrowUpRight } from "../components/icons";

type TabKey = "xura" | "advertisers";
type Mode = "signin" | "signup";

const TAB_KEYS: TabKey[] = ["xura", "advertisers"];

function isTabKey(value: string | null): value is TabKey {
  return value !== null && (TAB_KEYS as string[]).includes(value);
}

type TabDef = {
  key: TabKey;
  short: string;
  description: string;
  signupCta: string;
  signinCta: string;
};

const TABS: TabDef[] = [
  {
    key: "xura",
    short: "Xura",
    description:
      "For EPC partners, electrical contractors, integrators, and installation crews.",
    signupCta: "Apply as a partner",
    signinCta: "Sign in as partner",
  },
  {
    key: "advertisers",
    short: "Advertisers",
    description:
      "Brands and agencies running campaigns across the Xura station network.",
    signupCta: "Open advertiser account",
    signinCta: "Sign in to campaigns",
  },
];

export default function LoginPage() {
  return (
    <main className="relative isolate flex h-[100svh] w-full flex-col overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[55vh] bg-[radial-gradient(120%_70%_at_50%_0%,rgba(139,251,3,0.09)_0%,rgba(5,5,5,0)_55%)]"
      />
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
          href="/"
          className="group inline-flex h-10 items-center gap-2 rounded-full border border-line-strong bg-paper/[0.04] px-4 text-[10px] font-medium uppercase tracking-[0.18em] text-paper/75 backdrop-blur-md transition-colors hover:border-accent hover:text-paper"
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
          Back to site
        </Link>
      </header>

      <Suspense fallback={<LoginCardSkeleton />}>
        <LoginCard />
      </Suspense>
    </main>
  );
}

function LoginCard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get("tab");
  const modeParam = searchParams.get("mode");
  const initialTab: TabKey = isTabKey(tabParam) ? tabParam : "xura";
  const initialMode: Mode = modeParam === "signup" ? "signup" : "signin";

  const isVerified = searchParams.get("verified") === "1";
  const [showVerifiedBanner, setShowVerifiedBanner] = useState(isVerified);

  useEffect(() => {
    if (!isVerified) return;
    const p = new URLSearchParams(searchParams.toString());
    p.delete("verified");
    router.replace(`?${p.toString()}`, { scroll: false });
  }, []);

  const [activeTab, setActiveTab] = useState<TabKey>(initialTab);
  const [mode, setMode] = useState<Mode>(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState({
    firstname: "", lastname: "", email: "", mobile_no: "",
    password: "", c_password: "", username: "",
  });
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const tab = TABS.find((t) => t.key === activeTab) as TabDef;

  const updateSignup = (field: keyof typeof signup) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setSignup((prev) => ({ ...prev, [field]: e.target.value }));

  function switchTab(t: TabKey) {
    setActiveTab(t);
    setAuthError(null);
    const p = new URLSearchParams(searchParams.toString());
    p.set("tab", t);
    router.replace(`?${p.toString()}`, { scroll: false });
  }

  function switchMode(m: Mode) {
    setMode(m);
    setAuthError(null);
    const p = new URLSearchParams(searchParams.toString());
    p.set("mode", m);
    router.replace(`?${p.toString()}`, { scroll: false });
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuthError(null);

    const evPartnerUrl = process.env.NEXT_PUBLIC_EV_PARTNER_URL ?? "https://app.xura.co";
    const adEngineUrl = process.env.NEXT_PUBLIC_AD_ENGINE_URL ?? "https://ads.xura.co/";

    if (mode === "signin") {
      if (activeTab === "advertisers") {
        setLoading(true);
        try {
          const res = await fetch("/api/advertiser-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
          const data = await res.json();
          if (!data.status || !data.data?.token) throw new Error(data.message || "Login failed");
          const user = data.data;
          const encoded = encodeURIComponent(btoa(JSON.stringify({ user, token: user.token })));
          window.location.href = `${adEngineUrl}/auth-callback?data=${encoded}`;
        } catch (err: unknown) {
          setAuthError(err instanceof Error ? err.message : "Login failed. Try again.");
        } finally {
          setLoading(false);
        }
      } else if (activeTab === "xura") {
        setLoading(true);
        try {
          const res = await fetch("/api/partner-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
          const data = await res.json();
          if (!data.status || !data.data?.tokens?.access_token) throw new Error(data.message || "Login failed");
          const encoded = encodeURIComponent(btoa(JSON.stringify({ user: data.data.user, tokens: data.data.tokens })));
          window.location.href = `${evPartnerUrl}/auth-callback?data=${encoded}`;
        } catch (err: unknown) {
          setAuthError(err instanceof Error ? err.message : "Login failed. Try again.");
        } finally {
          setLoading(false);
        }
      }
    } else {
      if (activeTab === "advertisers") {
        setLoading(true);
        try {
          const res = await fetch("/api/advertiser-register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstname: signup.firstname, lastname: signup.lastname,
              email: signup.email, mobile_no: signup.mobile_no,
              password: signup.password, c_password: signup.c_password,
              user_type: 1,
            }),
          });
          const data = await res.json();
          if (!data.status) throw new Error(data.message || "Registration failed");
          sessionStorage.setItem("otp_email", signup.email);
          router.push(`/verify-otp?tab=advertisers&email=${encodeURIComponent(signup.email)}`);
        } catch (err: unknown) {
          setAuthError(err instanceof Error ? err.message : "Registration failed. Try again.");
        } finally {
          setLoading(false);
        }
      } else if (activeTab === "xura") {
        setLoading(true);
        try {
          const res = await fetch("/api/partner-register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              first_name: signup.firstname, last_name: signup.lastname,
              email: signup.email, username: signup.username,
              password: signup.password, user_type: 2,
            }),
          });
          const data = await res.json();
          if (!data.status) throw new Error(data.message || "Registration failed");
          sessionStorage.setItem("otp_email", signup.email);
          router.push(`/verify-otp?tab=partners&email=${encodeURIComponent(signup.email)}`);
        } catch (err: unknown) {
          setAuthError(err instanceof Error ? err.message : "Registration failed. Try again.");
        } finally {
          setLoading(false);
        }
      }
    }
  };

  return (
    <>
      <section className="relative z-10 mx-auto flex w-full max-w-[540px] flex-1 items-center justify-center px-5 py-4 sm:px-8 sm:py-6">
        <div
          className="rise w-full"
          style={{ ["--rise-delay" as string]: "200ms" }}
        >
          <div className="relative overflow-hidden rounded-[10px] border border-line bg-ink-2/60 backdrop-blur-md ">
            <div className="relative p-5 sm:p-7">
              {/* Post-verification banner */}
              <AnimatePresence>
                {showVerifiedBanner && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4 flex items-center gap-3 rounded-xl border border-accent/25 bg-accent/[0.07] px-4 py-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                      <svg viewBox="0 0 12 12" className="h-3 w-3 text-ink" fill="none">
                        <path d="M2 6.2l2.6 2.6L10 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="flex-1 text-[12.5px] leading-snug text-paper/90">
                      Your account is verified — sign in below to get started.
                    </p>
                    <button
                      type="button"
                      onClick={() => setShowVerifiedBanner(false)}
                      aria-label="Dismiss"
                      className="text-paper/40 transition-colors hover:text-paper"
                    >
                      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                        <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Top row — status */}
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                  </span>
                  Secure node
                </span>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mute">
                  {mode === "signin" ? "Sign in" : "Sign up"}
                </span>
              </div>

              {/* Channel tabs */}
              <div
                role="tablist"
                aria-label="Account type"
                className="relative flex items-stretch rounded-lg border border-line bg-ink-2 p-1"
              >
                {TABS.map((t) => {
                  const active = t.key === activeTab;
                  return (
                    <button
                      key={t.key}
                      role="tab"
                      aria-selected={active}
                      type="button"
                      onClick={() => switchTab(t.key)}
                      className={`relative flex-1 rounded-md px-2 py-2 text-[10.5px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 sm:text-[11px] ${
                        active ? "text-ink" : "text-paper/65 hover:text-paper"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="login-tab-bg"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                          className="absolute inset-0 -z-10 rounded-md bg-accent"
                        />
                      )}
                      <span className="relative z-10">{t.short}</span>
                    </button>
                  );
                })}
              </div>

              {/* Description */}
              <div className="mt-4">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={tab.key}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="text-[12.5px] leading-snug text-paper/65"
                  >
                    {tab.description}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Form */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.form
                  key={tab.key + mode}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 flex flex-col gap-3.5"
                  onSubmit={handleSubmit}
                >
                  <FormFields
                    tab={tab}
                    mode={mode}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    signup={signup}
                    updateSignup={updateSignup}
                  />

                  {mode === "signin" && (
                    <div className="flex items-center justify-between gap-3">
                      <RememberToggle />
                      <a
                        href="#"
                        className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mute transition-colors hover:text-accent"
                      >
                        Forgot password?
                      </a>
                    </div>
                  )}

                  {authError && (
                    <p className="text-center text-[12px] text-red-400">{authError}</p>
                  )}

                  <SubmitButton
                    label={
                      loading
                        ? mode === "signin" ? "Signing in…" : "Creating account…"
                        : mode === "signin" ? tab.signinCta : tab.signupCta
                    }
                    disabled={loading}
                  />
                </motion.form>
              </AnimatePresence>

              <div className="mt-5 border-t border-line pt-4 text-center text-[12.5px] text-paper/65">
                {mode === "signin" ? (
                  <>
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => switchMode("signup")}
                      className="cursor-pointer font-medium text-accent transition-colors hover:text-paper"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => switchMode("signin")}
                      className="cursor-pointer font-medium text-accent transition-colors hover:text-paper"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function LoginCardSkeleton() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-[540px] flex-1 items-center justify-center px-5 py-4 sm:px-8 sm:py-6">
      <div className="w-full">
        <div className="relative h-[520px] overflow-hidden rounded-[10px] border border-line bg-ink-2/40 backdrop-blur-md ">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ───── building blocks ───── */

type SignupData = {
  firstname: string; lastname: string; email: string;
  mobile_no: string; password: string; c_password: string; username: string;
};

function FormFields({
  tab, mode,
  email, setEmail, password, setPassword,
  signup, updateSignup,
}: {
  tab: TabDef;
  mode: Mode;
  email: string;
  setEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  signup: SignupData;
  updateSignup: (field: keyof SignupData) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  if (mode === "signin") {
    return (
      <>
        <Field
          label="Work email"
          id={`email-${tab.key}`}
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordField
          id={`pw-${tab.key}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </>
    );
  }

  if (tab.key === "xura") {
    return (
      <>
        <div className="grid grid-cols-2 gap-3">
          <Field label="First name" id="su-p-firstname" placeholder="Alex" autoComplete="given-name"
            value={signup.firstname} onChange={updateSignup("firstname")} />
          <Field label="Last name" id="su-p-lastname" placeholder="Reyes" autoComplete="family-name"
            value={signup.lastname} onChange={updateSignup("lastname")} />
        </div>
        <Field label="Work email" id="su-p-email" type="email" placeholder="alex@company.com"
          autoComplete="email" value={signup.email} onChange={updateSignup("email")} />
        <Field label="Username" id="su-p-username" placeholder="alex_reyes"
          autoComplete="username" value={signup.username} onChange={updateSignup("username")} />
        <PasswordField id="su-p-pw" label="Password"
          value={signup.password} onChange={updateSignup("password")} />
      </>
    );
  }

  // advertisers signup
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <Field label="First name" id="su-a-firstname" placeholder="Alex" autoComplete="given-name"
          value={signup.firstname} onChange={updateSignup("firstname")} />
        <Field label="Last name" id="su-a-lastname" placeholder="Reyes" autoComplete="family-name"
          value={signup.lastname} onChange={updateSignup("lastname")} />
      </div>
      <Field label="Work email" id="su-a-email" type="email" placeholder="alex@company.com"
        autoComplete="email" value={signup.email} onChange={updateSignup("email")} />
      <Field label="Mobile number" id="su-a-mobile" type="tel" placeholder="9876543210"
        autoComplete="tel" value={signup.mobile_no} onChange={updateSignup("mobile_no")} />
      <PasswordField id="su-a-pw" label="Password"
        value={signup.password} onChange={updateSignup("password")} />
      <PasswordField id="su-a-cpw" label="Confirm password"
        value={signup.c_password} onChange={updateSignup("c_password")} />
    </>
  );
}

function Field({
  label, id, type = "text", placeholder, autoComplete, hint, value, onChange,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  hint?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mute"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        className="h-11 rounded-lg border border-line bg-[#080808] px-4 text-[16px] text-paper transition-colors placeholder:text-mute focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm"
      />
      {hint && (
        <p className="text-[11px] leading-snug text-mute">{hint}</p>
      )}
    </div>
  );
}

function PasswordField({
  id,
  label = "Password",
  value,
  onChange,
}: {
  id: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mute"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={show ? "text" : "password"}
          placeholder="••••••••••"
          autoComplete="current-password"
          value={value}
          onChange={onChange}
          className="h-11 w-full rounded-lg border border-line bg-[#080808] pl-4 pr-16 text-[16px] text-paper transition-colors placeholder:text-mute focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm"
        />
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          aria-label={show ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mute transition-colors hover:text-paper"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

function RememberToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      aria-pressed={on}
      className="group flex items-center gap-2.5 text-[12px] text-paper/65 transition-colors hover:text-paper"
    >
      <span
        aria-hidden="true"
        className={`relative inline-flex h-4 w-4 items-center justify-center rounded border transition-colors ${
          on
            ? "border-accent bg-accent/15"
            : "border-line-strong bg-paper/[0.02] group-hover:border-accent"
        }`}
      >
        {on && (
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-accent" fill="none">
            <path
              d="M2 6.2l2.6 2.6L10 3.6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      Remember this device
    </button>
  );
}

function SubmitButton({ label, disabled }: { label: string; disabled?: boolean }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="group relative mt-2 inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-[11px] bg-accent px-6 font-display text-[0.95rem] font-extrabold text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
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
