

"use client"

import { images } from "@/data/academic-excellence/images"

const studentJourney = [
  {
    title: "Needs Academic Support",
    description: "Facing challenges in understanding concepts and keeping up with school expectations.",
    image: images.results[0],
  },
  {
    title: "Guided Learning",
    description: "Receives personalized one-to-one support and structured academic guidance.",
    image: images.results[1],
  },
  {
    title: "Improved Confidence",
    description: "Builds stronger subject understanding and becomes more confident in class.",
    image: images.results[2],
  },
  {
    title: "Academic Excellence",
    description: "Achieves better academic performance through consistent learning and support.",
    image: images.results[3],
  },
]

export default function ResultsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
      <div className="max-w-3xl mb-12 text-left">
        <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
          STUDENT OUTCOMES
        </p>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2">
          From Learning Gaps To Academic Confidence
        </h2>

        <p className="text-zinc-400 mt-4 max-w-2xl">
          Every student follows a unique journey. Our goal is to build confidence,
          strengthen concepts and help students achieve their academic potential.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {studentJourney.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 overflow-hidden bg-zinc-900/[0.08]"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}