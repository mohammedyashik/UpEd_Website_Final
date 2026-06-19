

"use client"

import { testimonials } from "@/data/academic-excellence/testimonials"

interface TestimonialsSectionProps {
  category?: "foundation" | "core" | "advance" | "elite"
}

export default function TestimonialsSection({
  category = "core",
}: TestimonialsSectionProps) {
  const reviews = testimonials[category]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-xl mb-12 text-left space-y-2">
        <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider font-mono">
          VERIFIED PARENT TRUST
        </p>

        <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
          What Parents Say About UpEd
        </h2>

        <p className="text-zinc-400 text-xs sm:text-sm">
          Real feedback from families who chose UpEd Academic Excellence™.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((item) => (
          <div
            key={item.parent}
            className="rounded-2xl border border-white/10 bg-zinc-900/[0.08] p-6 flex flex-col justify-between gap-6"
          >
            <p className="text-sm italic text-zinc-300 leading-relaxed">
              "{item.review}"
            </p>

            <div className="border-t border-white/5 pt-4">
              <h5 className="text-sm font-bold text-white">
                {item.parent}
              </h5>

              <span className="text-xs text-zinc-500 block mt-1">
                {item.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}