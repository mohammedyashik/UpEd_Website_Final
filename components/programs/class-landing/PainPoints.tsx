"use client"
import { XCircle } from "lucide-react"

export default function PainPoints() {
  const issues = [
    { text: "Difficulty understanding school lessons" },
    { text: "Incomplete homework" },
    { text: "Poor concentration during studies" },
    { text: "Fear of Mathematics" },
    { text: "Weak reading and writing skills" },
    { text: "Lack of confidence in class" },
    { text: "Low test scores" },
    { text: "Inconsistent study habits" }
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5 bg-zinc-950/30">
      <div className="max-w-2xl mb-12 text-left">
        <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
          COMMON CHALLENGES
        </p>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1 text-white">
          Is Your Child Facing These Challenges?
        </h2>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-left">
        {issues.map((item, index) => (
          <div 
            key={index} 
            className="p-5 border border-white/10 bg-black/40 rounded-2xl flex items-center gap-3 hover:border-orange-500/30 transition-colors duration-300 shadow-sm"
          >
            <div className="h-6 w-6 flex items-center justify-center shrink-0">
              <XCircle size={18} className="text-red-500" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-tight">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}