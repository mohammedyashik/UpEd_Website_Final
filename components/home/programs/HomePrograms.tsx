"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowUpRight, CheckCircle2, GraduationCap, Zap, ChevronRight, X,
  BookOpen, Laptop, Clock, MessageSquare 
} from "lucide-react"

// Native service hooks
import { submitContactPageForm } from "@/services/leads"
import { sendEmailNotification } from "@/services/notify"
import { classEcosystemData, ClassEcosystem, ProgramTier } from "./program-data"

export default function HomePrograms() {
  const [selectedGroup, setSelectedGroup] = useState<ClassEcosystem>(classEcosystemData[0])
  const [activeModalProgram, setActiveModalProgram] = useState<ProgramTier | null>(null)
  
  // Interactive Modal Form States
  const [parentName, setParentName] = useState("")
  const [parentPhone, setParentPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const rawPath = typeof window !== "undefined" ? window.location.pathname : "/"

  const handleOverlaySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!parentPhone.trim()) return

    try {
      setLoading(true)
      const isVectorTrack = activeModalProgram?.name.includes("VECTOR")

      const payloadData = {
        parentName: parentName.trim() || "Interested Parent",
        phone: parentPhone.trim(),
        studentName: "Not Provided (Dashboard Drop-in)",
        studentClass: selectedGroup.label,
        subjectsRequired: activeModalProgram?.name || "General Track Allocation",
        learningMode: isVectorTrack ? "Vector Competitive Track" : "Academic Tuition Track",
        academicGoals: `Curiosity Hook Portal Inquiry. Selected Program Track Tagline: ${activeModalProgram?.tagline}`,
        sourcePage: `${rawPath} [Ecosystem Slider Component]`,
      }

      await submitContactPageForm(payloadData)

      await sendEmailNotification({
        formType: `Home Programs Matrix - Live Demo Reservation [${activeModalProgram?.name}]`,
        ...payloadData
      })

      setSubmitSuccess(true)
      
      setTimeout(() => {
        setActiveModalProgram(null)
        setSubmitSuccess(false)
        setParentName("")
        setParentPhone("")
      }, 3000)

    } catch (err) {
      console.error("Dashboard Modular Overlay Pipeline Crash:", err)
      alert("Something went wrong. Please try again.")
    } finally {
      loading && setLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-12">
      
      {/* GLOW EFFECT */}
      <div className="absolute left-[-250px] top-[-100px] h-[400px] w-[400px] rounded-full bg-orange-500/[0.07] blur-[140px] pointer-events-none" />

      {/* ECOSYSTEM TITLE STATEMENT ROW */}
      <div className="flex flex-col items-start text-left space-y-4 max-w-3xl">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
          UPED ECOSYSTEM MATRIX
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-[-0.04em] text-white">
          Customized Pillars. <br />
          <span className="text-orange-500 block sm:inline">Transparent Infrastructure.</span>
        </h2>
        <p className="max-w-xl text-base md:text-lg leading-relaxed text-zinc-400">
          Select your child's current grade to view tailored learning systems. We map clear, rigorous operations so you know exactly how performance is driven.
        </p>
      </div>

      {/* DYNAMIC DASHBOARD ROW ASSEMBLY */}
      <div className="grid gap-8 lg:grid-cols-12 items-start pt-6">
        
        {/* LEFT SELECTOR: CLASS COLUMN SELECTORS (4 COLS) */}
        <div className="lg:col-span-4 grid gap-3">
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider px-1">
            Select Student Grade Stage
          </p>
          {classEcosystemData.map((group) => {
            const isSelected = selectedGroup.id === group.id
            return (
              <button
                key={group.id}
                onClick={() => setSelectedGroup(group)}
                className={`group flex items-center justify-between p-6 rounded-2xl border text-left transition-all duration-300 ${
                  isSelected
                    ? "border-orange-500 bg-white/[0.02] text-white shadow-lg"
                    : "border-white/10 bg-white/[0.01] text-zinc-400 hover:border-white/20 hover:bg-white/[0.03]"
                }`}
              >
                <div>
                  <h4 className={`text-lg font-bold transition-colors ${isSelected ? 'text-orange-500' : 'text-white group-hover:text-orange-400'}`}>
                    {group.label}
                  </h4>
                  <span className="text-xs text-zinc-500 block mt-1">
                    {group.range}
                  </span>
                </div>
                <ChevronRight size={16} className={`transition-all duration-300 ${isSelected ? "text-orange-500 translate-x-1" : "text-zinc-600 group-hover:text-zinc-400"}`} />
              </button>
            )
          })}
        </div>

        {/* RIGHT VIEWPORT: PROGRAM DETAILS DISPLAY (8 COLS) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedGroup.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid gap-6"
            >
              {selectedGroup.programs.map((program, index) => {
                const isVector = program.name.includes("VECTOR")
                
                return (
                  <div 
                    key={index}
                    className={`rounded-[24px] md:rounded-[32px] border border-white/10 p-8 flex flex-col justify-between gap-8 shadow-2xl backdrop-blur-md transition-all duration-300 ${
                      isVector ? "bg-gradient-to-br from-orange-950/10 to-white/[0.01]" : "bg-white/[0.02]"
                    }`}
                  >
                    {/* CARD DETAILS */}
                    <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${isVector ? "bg-orange-500/10 text-orange-500 border-orange-500/20" : "bg-white/5 text-zinc-400 border-white/10"}`}>
                            {isVector ? <Zap size={20} /> : <GraduationCap size={20} />}
                          </div>
                          <div>
                            <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider block">
                              {program.tagline}
                            </span>
                            <h3 className="text-xl md:text-2xl font-black tracking-tight text-white mt-1">
                              {program.name}
                            </h3>
                          </div>
                        </div>

                        <p className="mt-4 text-base leading-relaxed text-zinc-400">
                          {program.description}
                        </p>
                      </div>

                      {/* HOOK PRICE TAG */}
                      <div className="min-w-[200px] border-l border-white/5 pl-4 md:pl-6 md:text-right md:border-l-0 md:border-r-0">
                        <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider block">Premium Plan Access</p>
                        <p className="mt-1 text-lg font-bold text-zinc-200">
                          Starts from <span className="text-orange-500">{program.startsFrom}</span>
                        </p>
                      </div>
                    </div>

                    {/* FEATURES EXPLANATION GRID */}
                    <div className="grid gap-6 sm:grid-cols-2 border-t border-white/5 pt-6 rounded-2xl">
                      
                      <div className="flex gap-3">
                        <div className="mt-0.5 text-orange-500"><BookOpen size={16} /></div>
                        <div>
                          <h5 className="text-sm font-bold text-white tracking-tight">Structured Concept & Doubt Separation</h5>
                          <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Core academic curriculum learning models run independent from granular 1-on-1 dynamic personal diagnostic error clearing tiers.</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-0.5 text-orange-500"><Laptop size={16} /></div>
                        <div>
                          <h5 className="text-sm font-bold text-white tracking-tight">Dedicated Student Portal & Recordings Vault</h5>
                          <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Every child holds an isolated performance tracing configuration with automated analytics charting and 24/7 online class cloud backups.</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-0.5 text-orange-500"><Clock size={16} /></div>
                        <div>
                          <h5 className="text-sm font-bold text-white tracking-tight">Doorstep Home Tuition Logistics Tiers</h5>
                          <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Background-verified top tier subject master experts are deployed directly onto your physical doorstep location for zero-distraction mentorship.</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-0.5 text-orange-500"><MessageSquare size={16} /></div>
                        <div>
                          <h5 className="text-sm font-bold text-white tracking-tight">Continuous Parent Progress Tracking</h5>
                          <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Weekly evaluation matrices, past speed error analytics logs, and diagnostic scores are systematically sent over to parents.</p>
                        </div>
                      </div>

                    </div>

                    {/* CONVERSION PANEL FOOTER LAYER */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2">
                        {program.features.slice(0, 2).map((feat, idx) => (
                          <span key={idx} className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-zinc-500 bg-white/5 px-3 py-1 rounded-md border border-white/10">
                            {feat}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setActiveModalProgram(program)}
                        className={`h-12 px-6 rounded-xl font-bold active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 text-sm uppercase tracking-wider ${
                          isVector 
                            ? "bg-orange-500 text-black hover:bg-orange-400 shadow-lg shadow-orange-500/10" 
                            : "bg-white text-black hover:bg-zinc-200"
                        }`}
                      >
                        Book Free Live Demo
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                    
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* OVERLAY INTAKE MODAL */}
      <AnimatePresence>
        {activeModalProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProgram(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md overflow-hidden rounded-[24px] border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl z-10 space-y-6"
            >
              <button 
                onClick={() => setActiveModalProgram(null)}
                className="absolute right-4 top-4 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              {submitSuccess ? (
                <div className="py-12 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-orange-500">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-xl font-black tracking-tight text-white">Demo Verified & Saved!</h4>
                  <p className="text-sm text-zinc-400">Our Academic Director is compiling your metrics now.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-1">
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Intake Control Panel</p>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight text-white">
                      Schedule Free Trial Alignment
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Reserving demo slots for: <span className="text-white font-bold">{activeModalProgram.name}</span> ({selectedGroup.label}).
                    </p>
                  </div>

                  <form onSubmit={handleOverlaySubmit} className="space-y-4">
                    <input 
                      type="text" 
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="Parent Name *"
                      className="h-14 w-full rounded-xl border border-white/10 bg-black/50 px-5 text-white text-sm focus:outline-none focus:border-orange-500/60 placeholder-zinc-600 transition-colors"
                    />

                    <input 
                      type="tel" 
                      required
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                      placeholder="WhatsApp Number *"
                      className="h-14 w-full rounded-xl border border-white/10 bg-black/50 px-5 text-white text-sm focus:outline-none focus:border-orange-500/60 placeholder-zinc-600 transition-colors"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="h-14 w-full mt-2 rounded-xl bg-orange-500 font-extrabold text-black active:scale-[0.99] disabled:bg-zinc-800 disabled:text-zinc-500 shadow-lg shadow-orange-500/10 transition-all text-sm flex items-center justify-center"
                    >
                      {loading ? "Registering Parameters..." : "Confirm Free Alignment Booking 🚀"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}