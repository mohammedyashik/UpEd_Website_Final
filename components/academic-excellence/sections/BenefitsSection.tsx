

"use client"

import { Users, Compass, Award, Laptop, Clock, Shield } from "lucide-react"

interface BenefitsSectionProps {
  benefits?: {
    title: string
    description: string
  }[]
}

const defaultBenefits = [
  {
    icon: Users,
    title: "One-to-One Personalized Learning",
    description:
      "Every student receives personalized attention based on their learning style and academic needs."
  },
  {
    icon: Compass,
    title: "Homework & Assignment Support",
    description:
      "Complete support for school homework, assignments, projects and revision activities."
  },
  {
    icon: Award,
    title: "Regular Assessments",
    description:
      "Track academic progress through structured assessments and performance reviews."
  },
  {
    icon: Laptop,
    title: "Parent Progress Reports",
    description:
      "Regular updates help parents stay informed about academic improvement and learning outcomes."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Choose class timings that fit comfortably into your family's routine."
  },
  {
    icon: Shield,
    title: "Academic Excellence™ Framework",
    description:
      "A structured approach focused on concept clarity, confidence building and academic growth."
  }
]

export default function BenefitsSection({}: BenefitsSectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-2xl mb-12 text-left space-y-1">
        <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
          TRUST MATRIX
        </p>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          Program Benefits
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left items-stretch">
        {defaultBenefits.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-white/5 bg-zinc-900/[0.08] rounded-2xl space-y-3 flex flex-col items-start hover:border-white/10 transition-colors duration-300"
          >
            <div className="h-9 w-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <item.icon size={16} />
            </div>

            <h5 className="font-extrabold text-white text-base leading-snug">
              {item.title}
            </h5>

            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}