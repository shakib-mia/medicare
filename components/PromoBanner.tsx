"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <section className="relative h-[280px] sm:h-[340px] overflow-hidden mt-20">
      <Image
        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop"
        alt="Surgical team at work"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-teal-600/70"
      />
    </section>
  );
}
