"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarCheck, Phone, MessageCircle, Star, Smile, Ear, HeartHandshake } from "lucide-react";
import { Doctor } from "@/lib/doctors";
import Reveal from "./Reveal";

const traitIcons: Record<string, typeof Smile> = {
  Friendly: Smile,
  "Good Listener": Ear,
  Patient: HeartHandshake,
};

export default function DoctorProfileSidebar({ doctor }: { doctor: Doctor }) {
  return (
    <Reveal>
      <div className="bg-teal-50/70 rounded-2xl p-8 flex flex-col items-center text-center">
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <Image src={doctor.img} alt={doctor.name} fill sizes="160px" className="object-cover" />
        </div>

        <span className="mt-4 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <Star size={11} className="fill-white" /> 5.0
        </span>

        <div className="flex gap-3 mt-7">
          <ActionIcon icon={CalendarCheck} />
          <ActionIcon icon={Phone} />
          <ActionIcon icon={MessageCircle} />
        </div>

        <div className="font-display font-bold text-2xl text-ink mt-7">{doctor.priceRange}</div>
        <p className="text-mist text-sm mt-1">Online / Offline</p>

        <motion.a
          href="#book"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-teal-500 hover:bg-teal-600 transition-colors text-white text-sm font-semibold rounded-lg py-3.5 mt-6"
        >
          Book Appointment
        </motion.a>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {doctor.traits?.map((t) => {
            const Icon = traitIcons[t] ?? Smile;
            return (
              <span
                key={t}
                className="flex items-center gap-2 border border-teal-100 bg-white text-ink text-xs font-medium px-3.5 py-2 rounded-lg"
              >
                <Icon size={14} className="text-teal-500" />
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

function ActionIcon({ icon: Icon }: { icon: typeof CalendarCheck }) {
  return (
    <span className="w-11 h-11 rounded-lg bg-teal-100/70 flex items-center justify-center text-teal-600">
      <Icon size={17} />
    </span>
  );
}
