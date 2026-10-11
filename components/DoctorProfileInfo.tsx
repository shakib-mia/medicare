"use client";

import { MapPin } from "lucide-react";
import { Doctor } from "@/lib/doctors";
import Reveal from "./Reveal";

export default function DoctorProfileInfo({ doctor }: { doctor: Doctor }) {
  return (
    <div>
      <Reveal>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink">{doctor.name}</h1>
        <p className="text-mist text-base sm:text-lg mt-2">Specialist of implants and cosmetic dentistry</p>
      </Reveal>

      <Reveal delay={0.08} className="mt-8">
        <div className="flex items-center gap-2 font-semibold text-ink">
          <MapPin size={18} className="text-teal-500" />
          {doctor.location}
        </div>
        <p className="text-mist text-sm mt-3 max-w-lg leading-relaxed">{doctor.address}</p>
      </Reveal>

      <Reveal delay={0.14} className="mt-10">
        <h2 className="font-display font-bold text-xl text-ink mb-4">Specialities</h2>
        <TagRow items={doctor.specialities ?? []} />
      </Reveal>

      <Reveal delay={0.18} className="mt-10">
        <h2 className="font-display font-bold text-xl text-ink mb-4">Issues</h2>
        <TagRow items={doctor.issues ?? []} />
      </Reveal>

      <Reveal delay={0.22} className="mt-10">
        <h2 className="font-display font-bold text-xl text-ink mb-3">Qualification</h2>
        <p className="text-sm text-ink">
          <span className="font-semibold">Licecnces:</span> of implant and cosmetic dentistry
        </p>
      </Reveal>

      <Reveal delay={0.26} className="mt-10">
        <h2 className="font-display font-bold text-xl text-ink mb-3">Experience</h2>
        <p className="text-sm text-ink">
          <span className="font-semibold">Licecnces</span>: of implant and cosmetic dentistry{" "}
          <span className="text-teal-600 font-semibold">
            ({doctor.experienceYears} years of Experience)
          </span>
        </p>
      </Reveal>
    </div>
  );
}

function TagRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((it) => (
        <span
          key={it}
          className="border border-teal-200 text-teal-600 font-semibold text-sm px-5 py-2.5 rounded-lg"
        >
          {it}
        </span>
      ))}
    </div>
  );
}
