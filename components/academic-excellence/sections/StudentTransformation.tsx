

"use client"

import { images } from "@/data/academic-excellence/images"

const transformationStages = [
  {
    title: "Struggling Student",
    description: "Facing learning gaps, low confidence and inconsistent academic performance.",
    image: images.results[0],
  },
  {
    title: "Supported Learner",
    description: "Receives personalized one-to-one guidance and structured academic support.",
    image: images.results[1],
  },
  {
    title: "Confident Performer",
    description: "Develops stronger concepts, better study habits and increased confidence.",
    image: images.results[2],
  },
  {
    title: "Academic Excellence",
    description: "Achieves consistent academic growth and performs at their full potential.",
    image: images.results[3],
  },
]

export default function StudentTransformation() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
      <div className="max-w-3xl mb-12 text-left">
        <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
          STUDENT TRANSFORMATION
        </p>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2">
          The UpEd Growth Journey
        </h2>

        <p className="text-zinc-400 mt-4 max-w-2xl">
          Every child can improve with the right mentor, the right learning plan and consistent support.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {transformationStages.map((stage) => (
          <div
            key={stage.title}
            className="rounded-2xl border border-white/10 bg-zinc-900/[0.08] overflow-hidden"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={stage.image}
                alt={stage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-white font-bold mb-2">{stage.title}</h3>
              <p className="text-sm text-zinc-400">{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}