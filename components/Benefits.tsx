"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, HandCoins, UserRound } from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
  {
    title: "Modern Clinic",
    icon: Building2,
    copy: "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh tristique quam.......",
  },
  {
    title: "Less Consultation Fees",
    icon: HandCoins,
    copy: "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh tristique quam.......",
  },
  {
    title: "Professional Treatment",
    icon: UserRound,
    copy: "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh tristique quam.......",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-teal-50/60">
      <div className="section-max container-px grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative h-[420px] hidden sm:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute top-0 left-0 w-[72%] h-[80%] rounded-2xl overflow-hidden shadow-soft"
          >
            <Image
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop"
              alt="Surgeons operating"
              fill
              sizes="400px"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-[45%] h-[45%] rounded-2xl overflow-hidden shadow-soft border-4 border-white"
          >
            <Image
              src="https://images.unsplash.com/photo-1580281658626-ee379f3cce93?q=80&w=600&auto=format&fit=crop"
              alt="Doctors consulting"
              fill
              sizes="220px"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-4 bg-white rounded-xl shadow-card p-4 w-44"
          >
            <div className="text-xs font-semibold text-ink">Emergency</div>
            <button className="mt-2 w-full bg-teal-500 text-white text-[11px] font-semibold rounded-md py-1.5">
              Consultation →
            </button>
            <div className="text-[11px] text-mist mt-2">Queue</div>
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-10">
              The Benefits of utilizing Medicare
            </h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.12} className="flex gap-5">
                <span className="w-12 h-12 shrink-0 rounded-full bg-white shadow-card flex items-center justify-center text-teal-600">
                  <b.icon size={20} strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{b.title}</h3>
                  <p className="text-sm text-mist mt-1.5 max-w-lg leading-relaxed">{b.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
