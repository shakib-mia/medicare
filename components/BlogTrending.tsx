"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const trending = [
  {
    title: "Pumping Iron Improves Longevity in Older Adults",
    copy: "Those who report weightlifting show reductions in all-cause and cardiovascular disease-related mortality.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "Monkeypox Case Rates 5 Times Higher Among Black Americans",
    copy: "Events, exhibitions, publications, and initiatives led by, featuring members of the School of Art community.",
    img: "https://images.unsplash.com/photo-1591825381041-fddf2d75f9a1?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "The Happy Hormone: Why We Shouldn't Mess With Dopamine",
    copy: "Mailchimp emails and announcements sent out by the Yale School of Art's Communications Office.",
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=200&auto=format&fit=crop",
  },
];

export default function BlogTrending() {
  return (
    <section className="py-20">
      <div className="section-max container-px">
        <Reveal className="flex items-center justify-between mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink max-w-md">
            What you need to know about healthy living
          </h2>
          <a href="#" className="text-teal-600 text-sm font-semibold hidden sm:inline-flex items-center gap-1">
            See More →
          </a>
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12">
          <Reveal>
            <motion.div whileHover={{ y: -4 }} className="cursor-default">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=900&auto=format&fit=crop"
                  alt="Covid booster"
                  fill
                  sizes="600px"
                  className="object-cover"
                />
              </div>
              <div className="text-xs text-mist mt-4">April 26, 2022</div>
              <h3 className="font-semibold text-lg text-ink mt-2 max-w-md">
                Updated Covid boosters rolled out a month ago. Here&apos;s
                how many Americans have gotten them.
              </h3>
              <p className="text-sm text-mist mt-2 max-w-md">
                The CDC recommends that everyone over 12 get an updated
                booster as long as at least two months have passed since
                their last Covid shot.
              </p>
              <a href="#" className="text-teal-600 text-sm font-semibold mt-3 inline-block">
                Read More
              </a>
            </motion.div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="font-semibold text-ink mb-5">Whats Trending?</h3>
            </Reveal>
            <div className="flex flex-col gap-6">
              {trending.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.1} className="flex gap-4">
                  <div className="relative w-20 h-16 shrink-0 rounded-lg overflow-hidden">
                    <Image src={t.img} alt={t.title} fill sizes="80px" className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-teal-700 leading-snug">
                      {t.title}
                    </h4>
                    <p className="text-xs text-mist mt-1.5 leading-relaxed">{t.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
