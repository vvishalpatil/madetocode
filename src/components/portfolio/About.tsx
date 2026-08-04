import { Reveal } from "../Reveal";

export function About() {
  return (
    <Reveal className="mt-16 sm:mt-20">
      <section aria-label="About">
        <div className="space-y-5 text-[16px] leading-relaxed text-text-2">
          <p>
            I'm a frontend engineer with six years of experience building{" "}
            <strong className="text-text">production web applications</strong> — customer-facing
            product journeys, internal platforms, and the component systems teams build them with.
            I'm currently at <strong className="text-text">PayPal</strong>, working on our
            enterprise Design System.
          </p>
          <p>
            Before that I shipped product: a loyalty programme journey built end to end for a
            bank's customers, a legacy payments platform migrated to React, and investment
            analytics dashboards with the data visualisation behind them.{" "}
            <strong className="text-text">
              That product experience is what shapes how I build components now
            </strong>{" "}
            — I know what it's like to be the team consuming a design system on a deadline.
          </p>
          <p>
            I care about{" "}
            <strong className="text-text">
              the details that decide whether an interface actually holds up
            </strong>{" "}
            — the API that stays intuitive as requirements change, the keyboard interaction nobody
            tested, the render that drops frames on a mid-range phone, the build step that takes
            ninety seconds too long.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
