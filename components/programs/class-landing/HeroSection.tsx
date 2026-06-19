"use client"
import { motion } from "framer-motion"
import { Sparkles, Zap, ChevronDown, ShieldCheck } from "lucide-react"

export default function Hero({ 
  activeMode, 
  setActiveMode, 
  onSubmit, 
  loading, 
  pricingData, 
  selectedPlan, 
  setSelectedPlan, 
  parentName, 
  setParentName, 
  phone, 
  setPhone, 
  submitSuccess,
  fadeInUpVariant, 
  staggerContainerVariant 
}: any) {

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full grid gap-12 lg:grid-cols-12 items-center min-h-[85vh]">
      <div className="absolute left-[-150px] top-[-100px] h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-orange-500/[0.05] blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial="hidden" animate="visible" variants={staggerContainerVariant}
        className="lg:col-span-7 space-y-8 text-left"
      >
        <motion.span variants={fadeInUpVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-xs font-mono font-bold tracking-widest text-orange-400 uppercase">
          <Sparkles size={12} className="text-orange-400 animate-pulse" /> TRUSTED EDUCATION PARTNER FOR PARENTS
        </motion.span>
        
        <motion.h1 variants={fadeInUpVariant} className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-[-0.04em]">
          Class 6 Home & <br />
          <span className="text-orange-500 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Online Tuition</span><br />
          Build Strong Concepts. <br />
          Improve Academic Confidence.
        </motion.h1>
        
        <motion.p variants={fadeInUpVariant} className="max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
          Class 6 is an important stage where students move from basic learning to deeper understanding in Mathematics, Science, and Languages. At UpEd, every student receives personalized one-to-one tuition designed to strengthen concepts, improve school performance, and build confidence for future academic success.
        </motion.p>

        <motion.div variants={fadeInUpVariant} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-y border-white/5 py-4">
          {["500+", "100+", "4.8/5", "1-on-1"].map((stat, i) => (
            <div key={i}>
              <p className={`text-2xl sm:text-3xl font-black ${i === 0 ? "text-orange-500" : "text-white"}`}>
                {stat}
              </p>
              <p className="text-[11px] text-zinc-500 font-medium">
                {["Students Supported", "Verified Tutors", "Parent Rating", "Personal Attention"][i]}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        className="lg:col-span-5 relative w-full max-w-md mx-auto space-y-6"
      >
        <div className="rounded-[24px] border border-white/10 overflow-hidden bg-zinc-950 aspect-[4/3] shadow-2xl relative">
          <img src="/images/testimonials/family-success.jpg" alt="UpEd family success" className="w-full h-full object-cover brightness-105 contrast-105 saturate-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 shadow-2xl space-y-4">
          <h3 className="text-base font-black tracking-tight flex items-center gap-2">
            <Zap size={16} className="text-orange-500 fill-orange-500/20" /> Help My Child Understand Concepts
          </h3>

          {submitSuccess ? (
            <div className="py-6 text-center space-y-2">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-orange-500"><ShieldCheck size={20} /></div>
              <h4 className="text-xs font-bold text-white">Consultation Block Booked!</h4>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-2 bg-black/40 p-1 rounded-xl border border-white/5">
                <button type="button" onClick={() => setActiveMode("online")} className={`py-1.5 px-2 rounded-lg text-[11px] font-bold ${activeMode === "online" ? "bg-orange-500 text-black shadow-sm font-black" : "text-zinc-400"}`}>Online</button>
                <button type="button" onClick={() => setActiveMode("home")} className={`py-1.5 px-2 rounded-lg text-[11px] font-bold ${activeMode === "home" ? "bg-orange-500 text-black shadow-sm font-black" : "text-zinc-400"}`}>Home</button>
              </div>

              <div className="relative">
                <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} className="h-10 w-full rounded-xl border border-white/10 bg-black/60 px-3 text-xs text-zinc-200 focus:outline-none appearance-none cursor-pointer">
                  {pricingData[activeMode].map((p: any) => <option key={p.plan} value={p.plan}>{p.plan}</option>)}
                </select>
                <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
              </div>

              <input type="text" required value={parentName} onChange={(e) => setParentName(e.target.value)} placeholder="Parent Name" className="h-10 w-full rounded-xl border border-white/10 bg-black/60 px-3 text-xs text-white" />
              <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Mobile Number *" className="h-10 w-full rounded-xl border border-white/10 bg-black/60 px-3 text-xs text-white" />

              <button type="submit" disabled={loading} className="h-11 w-full rounded-xl bg-orange-500 text-xs font-extrabold uppercase text-black hover:bg-orange-400 transition-all">
                {loading ? "Processing..." : "Help My Child Score Better"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  )
}