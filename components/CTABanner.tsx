"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function CTABanner() {
  return (
    <section id="appointment" className="py-4">
      <div className="section-max container-px">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="relative overflow-hidden bg-teal-500 rounded-2xl px-8 sm:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft"
          >
            <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-white/10" />
            <div className="absolute -right-16 bottom-0 w-56 h-56 rounded-full bg-white/5" />
            <div className="relative z-10 text-center sm:text-left">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Ready to get started ?
              </h3>
              <p className="text-teal-50/80 text-sm mt-2">
                Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#"
              className="relative z-10 bg-white text-teal-600 text-xs font-bold tracking-wide px-7 py-4 rounded-full whitespace-nowrap"
            >
              CREATE APPOINTMENT NOW!
            </motion.a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
