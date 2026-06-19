"use client"
import { CheckCircle2, XCircle } from "lucide-react"

export default function Comparison() {
  const comparisons = [
    { title: "Learning Focus", local: "Helps complete daily lessons but often misses deep underlying gaps", uped: "Provides complete personal attention fully tailored to your child's natural learning speed" },
    { title: "Safety & Verification", local: "Relies on casual neighborhood references with varying quality standards", uped: "Ensures rigorous background checks and verified subject expert matching parameters" },
    { title: "Study Pacing", local: "Pacing matches a standard timetable layout rather than child comfort", uped: "Adapts completely around your child's everyday confidence and understanding levels" },
    { title: "Error Support", local: "Corrects homework mistakes textually without logging root pattern confusion", uped: "Tracks repeating gaps supportively to make sure mistakes disappear permanently" },
    { title: "Parent Visibility", local: "Updates are rare, usually given only during terminal school card handovers", uped: "Dispatches regular, transparent progress updates directly to your mobile number" },
    { title: "Academic Backup", local: "Schedules can break down entirely if the teacher faces household disruption", uped: "Provides a dedicated support team backstop with immediate tutor replacement guarantee" }
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
      <div className="max-w-2xl mb-12 text-left">
        <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">THE UPED DIFFERENCE</p>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-1 text-white">Why Parents Choose UpEd</h2>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">A local tutor helps complete lessons. UpEd goes beyond tutoring to secure complete personal attention.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {comparisons.map((item, index) => (
          <div key={index} className="flex flex-col justify-between border border-white/10 bg-zinc-950 rounded-2xl p-5 space-y-4 shadow-xl">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-orange-400 font-bold block mb-1">Focus Parameter</span>
              <h4 className="text-sm font-black text-white font-sans">{item.title}</h4>
            </div>

            {/* LOCAL TUTOR TRACK */}
            <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-red-500 font-mono uppercase tracking-wide">
                <XCircle size={12} className="text-red-500" /> Local Tutor Track
              </div>
              <p className="text-xs text-red-100/70 mt-1 font-normal leading-normal">{item.local}</p>
            </div>

            {/* UPED ADVANTAGE CARD */}
            <div className="p-5 bg-orange-500/[0.04] border-2 border-orange-500 rounded-xl relative shadow-[0_0_20px_rgba(249,115,22,0.15)] scale-[1.02] transform transition-transform">
              <div className="absolute inset-0 rounded-xl bg-orange-500/[0.02] blur-xl pointer-events-none" />
              <div className="relative z-10 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-orange-400 font-mono uppercase tracking-wide">
                  <CheckCircle2 size={12} className="text-orange-500" /> UpEd Framework
                </div>
                <p className="text-xs sm:text-sm text-orange-100 font-bold leading-relaxed">{item.uped}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}