"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Doctor } from "@/lib/doctors";
import Reveal from "./Reveal";

export default function OfficeAndAbout({ doctor }: { doctor: Doctor }) {
  const [expanded, setExpanded] = useState(false);
  const about = doctor.about ?? "";
  const short = about.length > 340 ? about.slice(0, 340).trim() + "…" : about;

  return (
    <div className="grid lg:grid-cols-[400px_1fr] gap-10 mt-16">
      <Reveal>
        <div className="bg-teal-50/70 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-xl text-ink">Office</h2>
            <span className="text-mist text-sm">15 Pictures</span>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=800&auto=format&fit=crop"
              alt="Doctor's office"
              fill
              sizes="400px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="font-display font-bold text-xl text-ink mb-4">About</h2>
        <p className="text-sm text-mist leading-relaxed max-w-2xl">
          {expanded ? about : short}
        </p>
        {about.length > 340 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 text-teal-600 text-sm font-semibold mt-4"
          >
            {expanded ? "Show Less" : "Load More"}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown size={16} />
            </motion.span>
          </button>
        )}
      </Reveal>
    </div>
  );
}
