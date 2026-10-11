"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

const specialists = [
  {
    name: "Dr. Travis Oman",
    role: "Opthalmologist",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Annah Ray",
    role: "Dentician",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Richard Brook",
    role: "Gastroenterlogist",
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Vivian Monroe",
    role: "Pediatry Surgeon",
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=600&auto=format&fit=crop",
  },
];

export default function TopSpecialists() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="specialists" className="py-20">
      <div className="section-max container-px">
        <Reveal className="flex items-center justify-between mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink">
            Top Specialist
          </h2>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-teal-100 flex items-center justify-center text-teal-600 hover:bg-teal-50 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white hover:bg-teal-600 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>

        <div
          ref={scroller}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {specialists.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08} className="snap-start shrink-0 w-[240px]">
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl overflow-hidden shadow-card bg-white border border-teal-50"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image src={s.img} alt={s.name} fill sizes="240px" className="object-cover" />
                  <span className="absolute top-3 left-3 bg-white/90 text-[11px] font-bold px-2 py-1 rounded-full flex items-center gap-1 text-ink">
                    <Star size={11} className="fill-teal-500 text-teal-500" /> 5.0
                  </span>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-ink text-sm">{s.name}</h3>
                  <p className="text-xs text-mist mt-1">{s.role}</p>
                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href="#appointment"
                    className="block mt-4 bg-teal-500 text-white text-xs font-semibold rounded-lg py-2.5 hover:bg-teal-600 transition-colors"
                  >
                    Book Now
                  </motion.a>
                  <p className="text-[11px] text-mist mt-2">120 Reviews</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
