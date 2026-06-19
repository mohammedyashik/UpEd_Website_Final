

"use client"

interface TrustMetricsProps {
  students?: string
  tutors?: string
  classes?: string
  satisfaction?: string
}

export default function TrustMetrics({
  students = "500+",
  tutors = "100+",
  classes = "10,000+",
  satisfaction = "95%",
}: TrustMetricsProps) {
  const metrics = [
    {
      value: students,
      label: "Students Supported",
    },
    {
      value: tutors,
      label: "Verified Tutors",
    },
    {
      value: classes,
      label: "Classes Delivered",
    },
    {
      value: satisfaction,
      label: "Parent Satisfaction",
    },
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-white/10 bg-zinc-900/[0.08] p-6 text-center"
          >
            <div className="text-3xl font-black text-orange-400">
              {metric.value}
            </div>

            <div className="mt-2 text-xs sm:text-sm text-zinc-400">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}