"use client";

import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  Scissors,
  Microscope,
  Smile,
  Eye,
  Baby,
  Bone,
} from "lucide-react";
import Reveal from "./Reveal";

const depts = [
  { name: "Neurology", icon: Brain },
  { name: "Cardiology", icon: HeartPulse },
  { name: "Surgery", icon: Scissors },
  { name: "Gastroenterology", icon: Microscope },
  { name: "Dentist", icon: Smile },
  { name: "Opthalmology", icon: Eye },
  { name: "Pediatry", icon: Baby },
  { name: "Orthopaedics", icon: Bone },
];

const copy =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium.";

export default function Departments() {
  return (
    <section id="services" className="py-20 bg-teal-500">
      <div className="section-max container-px">
        <Reveal>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-12">
            Our Department
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {depts.map((d, i) => (
            <Reveal key={d.name} delay={(i % 4) * 0.06}>
              <motion.div
                whileHover={{ scale: 1.03, backgroundColor: "#0E8F86" }}
                className="bg-teal-600/60 border border-white/10 rounded-2xl p-6 h-full flex flex-col gap-4"
              >
                <span className="w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center text-white">
                  <d.icon size={20} strokeWidth={1.6} />
                </span>
                <h3 className="text-white font-semibold">{d.name}</h3>
                <p className="text-teal-50/70 text-xs leading-relaxed">{copy}</p>
                <a href="#" className="text-xs font-bold text-white tracking-wide mt-auto">
                  READ MORE
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
