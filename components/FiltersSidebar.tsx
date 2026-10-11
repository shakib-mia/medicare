"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const initialTags = ["Neurologist", "Accra", "Komfo Anokye Hospital", "Republican"];

const specialities = [
  "Neurologist",
  "Surgeon",
  "Orthopaedics",
  "Internal Medicine",
  "Famili medicine",
  "Opthalmologist",
];

export default function FiltersSidebar() {
  const [tags, setTags] = useState(initialTags);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [checked, setChecked] = useState<string[]>([]);
  const [experience, setExperience] = useState(60);

  const removeTag = (t: string) => setTags((prev) => prev.filter((x) => x !== t));

  const toggleCheck = (s: string) =>
    setChecked((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  return (
    <Reveal className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-mist" />
          <input
            type="text"
            placeholder="Search doctor"
            className="w-full border border-teal-100 rounded-lg pl-9 pr-3 py-2.5 text-sm placeholder:text-gray-300 focus:outline-none focus:border-teal-400"
          />
        </div>
        <button className="w-10 h-10 shrink-0 bg-teal-500 hover:bg-teal-600 transition-colors rounded-lg flex items-center justify-center text-white">
          <Search size={16} />
        </button>
      </div>

      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-ink text-sm">Filters ({tags.length})</h3>
        <button onClick={() => setTags([])} className="text-red-400 text-xs font-medium">
          Cancel
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-7">
        <AnimatePresence>
          {tags.map((t) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1.5 bg-teal-50 text-teal-600 text-xs font-medium px-3 py-1.5 rounded-md"
            >
              {t}
              <button onClick={() => removeTag(t)} aria-label={`Remove ${t}`}>
                <X size={12} />
              </button>
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      <FilterSelect label="Country" placeholder="Select Country" />
      <FilterSelect label="District or State" placeholder="Select district or state" />

      <div className="mb-7">
        <h3 className="font-semibold text-ink text-sm mb-3">Gender of doctor</h3>
        <div className="flex items-center gap-6 text-sm text-ink">
          {(["male", "female"] as const).map((g) => (
            <label key={g} className="flex items-center gap-2 cursor-pointer capitalize">
              <span
                onClick={() => setGender(g)}
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  gender === g ? "border-teal-500" : "border-gray-300"
                }`}
              >
                {gender === g && <span className="w-2 h-2 rounded-full bg-teal-500" />}
              </span>
              {g}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-7">
        <h3 className="font-semibold text-ink text-sm mb-3">Speciality</h3>
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Search specialities"
            className="w-full border border-teal-100 rounded-lg px-3 py-2.5 text-sm placeholder:text-gray-300 focus:outline-none focus:border-teal-400"
          />
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-mist" />
        </div>
        <div className="flex flex-col gap-2.5">
          {specialities.map((s) => (
            <label key={s} className="flex items-center gap-2.5 text-sm text-ink cursor-pointer">
              <input
                type="checkbox"
                checked={checked.includes(s)}
                onChange={() => toggleCheck(s)}
                className="w-4 h-4 rounded border-gray-300 text-teal-500 focus:ring-teal-400"
              />
              {s}
            </label>
          ))}
        </div>
        <button className="text-teal-600 text-xs font-semibold mt-3">Load More</button>
      </div>

      <div className="mb-7">
        <h3 className="font-semibold text-ink text-sm mb-3">
          Experience : <span className="text-teal-500 font-normal">from {Math.round(experience / 6)} years</span>
        </h3>
        <input
          type="range"
          min={0}
          max={100}
          value={experience}
          onChange={(e) => setExperience(Number(e.target.value))}
          className="w-full accent-teal-500"
        />
      </div>

      <FilterSelect label="Select hospital" placeholder="Select hospital" noMargin />

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="mt-7 w-full bg-teal-500 hover:bg-teal-600 transition-colors text-white text-sm font-semibold rounded-lg py-3.5"
      >
        Show Doctors
      </motion.button>
    </Reveal>
  );
}

function FilterSelect({
  label,
  placeholder,
  noMargin,
}: {
  label: string;
  placeholder: string;
  noMargin?: boolean;
}) {
  return (
    <div className={noMargin ? "" : "mb-7"}>
      <h3 className="font-semibold text-ink text-sm mb-3">{label}</h3>
      <div className="relative">
        <select className="w-full appearance-none border border-teal-100 rounded-lg px-3 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-teal-400 bg-white">
          <option>{placeholder}</option>
        </select>
        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-mist pointer-events-none" />
      </div>
    </div>
  );
}
