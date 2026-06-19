

"use client"

interface PricingSectionProps {
  pricingData: any
  activeMode: "online" | "home"
  setActiveMode: (mode: "online" | "home") => void
  setSelectedPlan: (plan: string) => void
}

export default function PricingSection({
  pricingData,
  activeMode,
  setActiveMode,
  setSelectedPlan,
}: PricingSectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="text-left space-y-1">
          <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
            TRANSPARENT COST FRAMEWORK
          </p>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Program Tuition Grid
          </h2>
        </div>

        <div className="flex p-1 rounded-xl bg-zinc-900/60 border border-white/10 w-fit">
          <button
            type="button"
            onClick={() => setActiveMode("online")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeMode === "online"
                ? "bg-orange-500 text-black"
                : "text-zinc-400"
            }`}
          >
            Online Tuition
          </button>

          <button
            type="button"
            onClick={() => setActiveMode("home")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeMode === "home"
                ? "bg-orange-500 text-black"
                : "text-zinc-400"
            }`}
          >
            Home Tuition
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pricingData?.[activeMode]?.map((plan: any) => (
          <div
            key={plan.plan}
            className="rounded-2xl border border-white/10 bg-zinc-900/[0.08] p-6"
          >
            <h3 className="text-xl font-black text-white mb-4">
              {plan.plan}
            </h3>

            <div className="space-y-2 mb-6">
              <p className="text-zinc-400">{plan.subjects}</p>
              <p className="text-zinc-400">{plan.classes}</p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-black text-white">
                  {plan.fee}
                </p>
              </div>

              <button
                onClick={() => setSelectedPlan(plan.plan)}
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
              >
                Select Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}