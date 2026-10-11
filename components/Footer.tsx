"use client";

import { Facebook, Instagram, Twitter, Linkedin, Plus } from "lucide-react";

const cols = [
  {
    title: "Company",
    links: ["About Medicare", "Careers", "Our Team", "Contact Us"],
  },
  {
    title: "Services",
    links: ["Consultations", "Vaccinations", "Lab Tests", "Home Care"],
  },
  {
    title: "Resources",
    links: ["Blog", "FAQs", "Support Center"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-teal-50/60 pt-16 pb-8 mt-10">
      <div className="section-max container-px grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-xl text-ink">
            <span className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">
              <Plus size={18} strokeWidth={3} />
            </span>
            Medicare
          </a>
          <p className="text-sm text-mist mt-4 max-w-xs">
            Nam posuere accumsan porta. Integer id tincidunt sit amet libero.
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink mb-4">
              {c.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-mist hover:text-teal-600 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-ink mb-4">Follow</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white shadow-card flex items-center justify-center text-teal-600 hover:bg-teal-500 hover:text-white transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <select className="mt-6 text-xs border border-teal-100 rounded-md px-3 py-2 bg-white text-mist">
            <option>English - En</option>
          </select>
        </div>
      </div>

      <div className="section-max container-px mt-12 pt-6 border-t border-teal-100 text-xs text-mist">
        © Skyone Theme 2021 — Rebuilt with Next.js
      </div>
    </footer>
  );
}
