"use client"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Pricing({ activeMode, pricingData, onSelect }: any) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div className="text-left space-y-1">
          <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">PRICING TIERS</p>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">Program Tuition Fee Grid</h2>
        </div>
      </div>

      <motion.div layout="position" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left items-stretch">
        <AnimatePresence mode="popLayout">
          {pricingData[activeMode].map((item: any) => (
            <motion.div 
              layout 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              key={item.plan} 
              className={`rounded-2xl border p-6 flex flex-col justify-between gap-8 ${
                item.popular 
                  ? 'border-orange-500 bg-orange-500/[0.02] shadow-xl' 
                  : 'border-white/10 bg-zinc-900/10'
              }`}
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-black text-white">{item.plan}</h4>
                  <p className="text-[11px] font-mono text-orange-400 font-bold tracking-wide">
                    ⚡ Highly Affordable Break down: ~ {item.perClass} / Class
                  </p>
                </div>
                <div className="flex gap-2 text-[11px] font-semibold text-zinc-300">
                  <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">{item.subjects}</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">{item.classes}</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block font-bold">Monthly Fee</span>
                  <p className="text-2xl sm:text-3xl font-black text-white mt-0.5 tracking-tight">{item.fee}</p>
                </div>
                <button 
                  type="button"
                  onClick={() => onSelect(item.plan)}
                  className="h-10 px-4 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-1 flex-shrink-0"
                >
                  Select Plan <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}