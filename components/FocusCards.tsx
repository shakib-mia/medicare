"use client";

import { motion } from "framer-motion";
import { Headset, Stethoscope, MessageCircleHeart, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const cards = [
  {
    title: "Customer Support",
    icon: Headset,
    bg: "bg-peach-50",
  },
  {
    title: "Chamber Services",
    icon: Stethoscope,
    bg: "bg-peach-50",
  },
  {
    title: "Online Specialist",
    icon: MessageCircleHeart,
    bg: "bg-sand-50",
  },
  {
    title: "Privacy and Security",
    icon: ShieldCheck,
    bg: "bg-teal-50",
  },
];

export default function FocusCards() {
  return (
    <section className="py-20">
      <div className="section-max container-px">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink max-w-md">
            Your health requirements are our first focus.
          </h2>
          <p className="text-mist max-w-sm text-sm">
            Our team of skilled medical professionals and aids ensure that
            you get the care you need and deserve.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`${c.bg} rounded-2xl px-6 py-10 h-full flex flex-col items-center text-center gap-4 cursor-default`}
              >
                <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-teal-600 shadow-card">
                  <c.icon size={26} strokeWidth={1.6} />
                </span>
                <span className="font-semibold text-ink text-sm">{c.title}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
