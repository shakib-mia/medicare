"use client";

import Reveal from "./Reveal";

const partners = ["World Health Organization", "Medilab Global", "Health Net", "HealthCare.gov"];

export default function PartnerLogos() {
  return (
    <section className="py-14 border-t border-teal-50">
      <div className="section-max container-px">
        <Reveal className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6 opacity-70">
          {partners.map((p) => (
            <span key={p} className="font-display font-bold text-mist text-lg tracking-tight">
              {p}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
