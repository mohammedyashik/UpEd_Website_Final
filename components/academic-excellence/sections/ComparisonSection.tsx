

"use client"

export default function ComparisonSection() {
  const comparisonRows = [
    {
      feature: "One-to-One Learning",
      localTutor: "✓",
      uped: "✓"
    },
    {
      feature: "Tutor Screening & Verification",
      localTutor: "✗",
      uped: "✓"
    },
    {
      feature: "Personalized Learning Plan",
      localTutor: "✗",
      uped: "✓"
    },
    {
      feature: "Progress Tracking & Reports",
      localTutor: "✗",
      uped: "✓"
    },
    {
      feature: "Regular Assessments",
      localTutor: "Limited",
      uped: "✓"
    },
    {
      feature: "Parent Progress Updates",
      localTutor: "Rarely",
      uped: "✓"
    },
    {
      feature: "Tutor Replacement Support",
      localTutor: "✗",
      uped: "✓"
    },
    {
      feature: "Online & Home Tuition",
      localTutor: "Limited",
      uped: "✓"
    },
    {
      feature: "Structured Academic Roadmap",
      localTutor: "✗",
      uped: "✓"
    },
    {
      feature: "Long-Term Academic Planning",
      localTutor: "✗",
      uped: "✓"
    }
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
      <div className="max-w-3xl mb-12 text-left space-y-2">
        <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
          WHY PARENTS CHOOSE UPED
        </p>

        <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
          UpEd vs Local Tutor
        </h2>

        <p className="text-xs sm:text-sm text-zinc-400">
          A local tutor teaches a subject. UpEd builds an academic journey.
        </p>
      </div>

      <div className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-zinc-900/[0.04] backdrop-blur-sm">
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02] text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
              <th className="p-4 sm:p-5">Academic Feature</th>
              <th className="p-4 sm:p-5 text-center">Local Tutor</th>
              <th className="p-4 sm:p-5 text-center text-orange-400">UpEd</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5 text-zinc-300">
            {comparisonRows.map((row) => (
              <tr key={row.feature}>
                <td className="p-4 font-medium text-white">{row.feature}</td>
                <td className="p-4 text-center">{row.localTutor}</td>
                <td className="p-4 text-center text-orange-400 font-bold">
                  {row.uped}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}