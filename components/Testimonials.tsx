"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Reveal from "./Reveal";

const reviews = [
  { name: "John Doe", role: "Engineer" },
  { name: "John Doe", role: "Engineer" },
  { name: "John Doe", role: "Engineer" },
  { name: "John Doe", role: "Engineer" },
];

const copy =
  "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......";

export default function Testimonials() {
  const [active, setActive] = useState(1);

  return (
    <section id="testimonials" className="py-20">
      <div className="section-max container-px">
        <Reveal className="max-w-lg mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink">Testimonials</h2>
          <p className="text-mist text-sm mt-3">
            Our team of skilled medical professionals and aids ensure that you
            get the care you need and deserve.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-teal-50/70 rounded-2xl p-6 h-full flex flex-col gap-4"
              >
                <div className="flex gap-1 text-teal-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} className="fill-teal-500" />
                  ))}
                </div>
                <p className="text-xs text-mist leading-relaxed">{copy}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <span className="w-9 h-9 rounded-full bg-teal-100" />
                  <div>
                    <div className="text-sm font-semibold text-ink">{r.name}</div>
                    <div className="text-xs text-mist">{r.role}</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative h-2 rounded-full bg-teal-100 overflow-hidden"
              style={{ width: active === i ? 28 : 8 }}
            >
              <AnimatePresence>
                {active === i && (
                  <motion.span
                    layoutId="dot"
                    className="absolute inset-0 bg-teal-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
