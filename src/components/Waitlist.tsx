import { useState } from "react";
import type { FormEvent } from "react";
import { Reveal } from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

export function Waitlist() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="mx-auto max-w-[1200px] px-6 py-24 md:px-12">
      <Reveal>
        <div className="grid gap-10 rounded-[20px] bg-[#0A0A0A] p-8 md:grid-cols-2 md:p-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-accent">
              Stay in the loop
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-1px] text-white sm:text-4xl">
              Get the roadmap before it's public.
            </h2>
            <p className="mt-4 max-w-md text-[17px] text-white/55">
              Join the waitlist for early access to content drops, cohort invites, and the full
              discipline roadmap as it rolls out.
            </p>
          </div>

          <div>
            {status === "success" ? (
              <p className="rounded-btn border border-accent-border bg-accent-dim px-5 py-4 text-accent">
                You're on the list. We'll email you when it's ready.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  name="email"
                  required
                  disabled={status === "submitting"}
                  placeholder="your@email.com"
                  className="rounded-btn border border-white/15 bg-white/8 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-accent disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="rounded-btn bg-accent px-4 py-3 font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {status === "submitting" ? "Submitting…" : "Notify me when it's ready"}
                </button>
                {status === "error" && (
                  <p className="text-sm text-accent">
                    Something went wrong. Please try again in a moment.
                  </p>
                )}
                <p className="text-xs text-white/30">No spam. Unsubscribe anytime.</p>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
