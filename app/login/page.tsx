"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { ArrowUpRight } from "../components/icons";

type TabKey = "people" | "partners" | "advertisers";
type Mode = "signin" | "signup";

const TAB_KEYS: TabKey[] = ["people", "partners", "advertisers"];

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
    key: "people",
    short: "People",
    description:
      "Operational access for the Xura team — engineering, deployment, ops, and leadership.",
    signupCta: "Request team access",
    signinCta: "Sign in to terminal",
  },
  {
    key: "partners",
    short: "Partners",
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
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialTab: TabKey = isTabKey(tabParam) ? tabParam : "people";
  const [activeTab, setActiveTab] = useState<TabKey>(initialTab);
  const [mode, setMode] = useState<Mode>("signin");
  const tab = TABS.find((t) => t.key === activeTab) as TabDef;

  return (
    <>
      <section className="relative z-10 mx-auto flex w-full max-w-[540px] flex-1 items-center justify-center px-5 py-4 sm:px-8 sm:py-6">
        <div
          className="rise w-full"
          style={{ ["--rise-delay" as string]: "200ms" }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-paper/[0.08] bg-ink-2/60 backdrop-blur-md sm:rounded-[32px]">
            <div className="relative p-5 sm:p-7">
              {/* Top row — status (left) + mode toggle (right) */}
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                  </span>
                  Secure node
                </span>

                <div
                  role="tablist"
                  aria-label="Authentication mode"
                  className="relative flex items-center rounded-full border border-paper/[0.08] bg-paper/[0.02] p-1"
                >
                  {(["signin", "signup"] as Mode[]).map((m) => {
                    const active = mode === m;
                    return (
                      <button
                        key={m}
                        role="tab"
                        aria-selected={active}
                        type="button"
                        onClick={() => setMode(m)}
                        className={`relative rounded-full px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                          active ? "text-ink" : "text-paper/65 hover:text-paper"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="login-mode-bg"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                            className="absolute inset-0 -z-10 rounded-full bg-accent"
                          />
                        )}
                        <span className="relative z-10">
                          {m === "signin" ? "Sign in" : "Sign up"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Channel tabs */}
              <div
                role="tablist"
                aria-label="Account type"
                className="relative flex items-stretch rounded-full border border-paper/[0.08] bg-paper/[0.02] p-1"
              >
                {TABS.map((t) => {
                  const active = t.key === activeTab;
                  return (
                    <button
                      key={t.key}
                      role="tab"
                      aria-selected={active}
                      type="button"
                      onClick={() => setActiveTab(t.key)}
                      className={`relative flex-1 rounded-full px-2 py-2 text-[10.5px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 sm:text-[11px] ${
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
                          className="absolute inset-0 -z-10 rounded-full bg-accent"
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
                  onSubmit={(e) => e.preventDefault()}
                >
                  <FormFields tab={tab} mode={mode} />

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

                  <SubmitButton
                    label={mode === "signin" ? tab.signinCta : tab.signupCta}
                  />
                </motion.form>
              </AnimatePresence>
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
        <div className="relative h-[520px] overflow-hidden rounded-3xl border border-paper/[0.08] bg-ink-2/40 backdrop-blur-md sm:rounded-[32px]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ───── building blocks ───── */

function FormFields({ tab, mode }: { tab: TabDef; mode: Mode }) {
  if (mode === "signin") {
    return (
      <>
        <Field
          label="Work email"
          id={`email-${tab.key}`}
          type="email"
          placeholder={
            tab.key === "people" ? "you@xura.com" : "you@company.com"
          }
          autoComplete="email"
        />
        <PasswordField id={`pw-${tab.key}`} />
      </>
    );
  }

  if (tab.key === "people") {
    return (
      <>
        <Field
          label="Full name"
          id="su-people-name"
          placeholder="Alex Reyes"
          autoComplete="name"
        />
        <Field
          label="Work email"
          id="su-people-email"
          type="email"
          placeholder="alex@xura.com"
          autoComplete="email"
          hint="Must be a verified @xura.com address."
        />
        <ChoiceField
          label="Department"
          id="su-people-dept"
          options={[
            "Engineering",
            "Field ops",
            "Commercial",
            "Finance",
            "Other",
          ]}
        />
      </>
    );
  }

  if (tab.key === "partners") {
    return (
      <>
        <Field
          label="Company"
          id="su-p-company"
          placeholder="Acme Electric"
          autoComplete="organization"
        />
        <Field
          label="Contact name"
          id="su-p-name"
          placeholder="Alex Reyes"
          autoComplete="name"
        />
        <Field
          label="Work email"
          id="su-p-email"
          type="email"
          placeholder="alex@acme.com"
          autoComplete="email"
        />
        <ChoiceField
          label="Service region"
          id="su-p-region"
          options={["West", "Central", "East", "Multi-region"]}
        />
      </>
    );
  }

  // advertisers
  return (
    <>
      <Field
        label="Brand / Agency"
        id="su-a-brand"
        placeholder="North Star Media"
        autoComplete="organization"
      />
      <Field
        label="Contact name"
        id="su-a-name"
        placeholder="Alex Reyes"
        autoComplete="name"
      />
      <Field
        label="Work email"
        id="su-a-email"
        type="email"
        placeholder="alex@northstar.co"
        autoComplete="email"
      />
      <ChoiceField
        label="Monthly spend"
        id="su-a-spend"
        options={["< $10k", "$10–50k", "$50–250k", "$250k+"]}
      />
    </>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  autoComplete,
  hint,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  hint?: string;
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
        className="h-11 rounded-xl border border-paper/[0.08] bg-paper/[0.02] px-4 text-[16px] text-paper transition-colors placeholder:text-mute focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/30 sm:text-sm"
      />
      {hint && (
        <p className="text-[11px] leading-snug text-mute">{hint}</p>
      )}
    </div>
  );
}

function PasswordField({ id }: { id: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mute"
      >
        Password
      </label>
      <div className="relative">
        <input
          id={id}
          type={show ? "text" : "password"}
          placeholder="••••••••••"
          autoComplete="current-password"
          className="h-11 w-full rounded-xl border border-paper/[0.08] bg-paper/[0.02] pl-4 pr-16 text-[16px] text-paper transition-colors placeholder:text-mute focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/30 sm:text-sm"
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

function ChoiceField({
  label,
  id,
  options,
}: {
  label: string;
  id: string;
  options: string[];
}) {
  const [value, setValue] = useState(options[0]);
  return (
    <div className="flex flex-col gap-2">
      <span
        id={`${id}-label`}
        className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mute"
      >
        {label}
      </span>
      <div
        role="radiogroup"
        aria-labelledby={`${id}-label`}
        className="flex flex-wrap gap-1.5"
      >
        {options.map((option) => {
          const active = option === value;
          return (
            <button
              key={option}
              role="radio"
              aria-checked={active}
              type="button"
              onClick={() => setValue(option)}
              className={`relative inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] transition-colors duration-200 ${
                active
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-paper/[0.08] bg-paper/[0.02] text-paper/65 hover:border-paper/20 hover:text-paper"
              }`}
            >
              <span
                aria-hidden="true"
                className={`h-1 w-1 rounded-full ${
                  active ? "bg-accent" : "bg-paper/35"
                }`}
              />
              {option}
            </button>
          );
        })}
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
            : "border-paper/15 bg-paper/[0.02] group-hover:border-paper/30"
        }`}
      >
        {on && (
          <svg
            viewBox="0 0 12 12"
            className="h-2.5 w-2.5 text-accent"
            fill="none"
          >
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

function SubmitButton({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className="group relative mt-2 inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-6 text-sm font-normal tracking-[0.1em] text-ink transition-transform hover:-translate-y-0.5"
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

