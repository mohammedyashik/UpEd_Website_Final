

"use client"

import { images } from "@/data/academic-excellence/images"

const journeySteps = [
  {
    step: "01",
    title: "Student Assessment",
    description:
      "We begin by understanding the student's current academic level, strengths and improvement areas.",
    image: images.howItWorks.assessment,
  },
  {
    step: "02",
    title: "Parent Discussion",
    description:
      "Our academic advisors discuss learning goals, challenges and expectations with parents.",
    image: images.howItWorks.parentConcern,
  },
  {
    step: "03",
    title: "Tutor Matching",
    description:
      "Students are matched with the most suitable tutor based on subject needs and learning style.",
    image: images.howItWorks.mentorProfile,
  },
  {
    step: "04",
    title: "One-to-One Classes",
    description:
      "Personalized sessions focus on concept clarity, confidence building and academic improvement.",
    image: images.howItWorks.studentMentor,
  },
  {
    step: "05",
    title: "Practice & Reinforcement",
    description:
      "Students receive guided practice, homework support and continuous concept reinforcement.",
    image: images.howItWorks.guidedPractice,
  },
  {
    step: "06",
    title: "Progress Reviews",
    description:
      "Regular assessments and parent updates help track growth and identify improvement areas.",
    image: images.howItWorks.parentReview,
  },
  {
    step: "07",
    title: "Continuous Academic Growth",
    description:
      "Learning plans are refined continuously to ensure long-term academic success.",
    image: images.howItWorks.mentorParentReview,
  },
]

export default function JourneySection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
      <div className="max-w-3xl mb-16 text-left">
        <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
          HOW UPED WORKS
        </p>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2">
          The UpEd Learning Journey
        </h2>
      </div>

      <div className="space-y-20">
        {journeySteps.map((step, index) => (
          <div
            key={step.step}
            className="grid gap-8 lg:grid-cols-12 items-center"
          >
            <div className={`lg:col-span-5 ${index % 2 ? "lg:order-2" : ""}`}>
              <span className="inline-block text-xs font-mono font-bold tracking-widest text-orange-400">
                PHASE {step.step}
              </span>
              <h3 className="text-2xl font-black mt-3">{step.title}</h3>
              <p className="text-zinc-400 mt-3">{step.description}</p>
            </div>

            <div className={`lg:col-span-7 ${index % 2 ? "lg:order-1" : ""}`}>
              <img
                src={step.image}
                alt={step.title}
                className="w-full rounded-3xl border border-white/10"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}