"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Zap, ChevronRight, CheckCircle2, ShieldCheck, X, User, Phone,
  Target, BarChart3, Layers, Award, Radio, HelpCircle, ArrowUpRight,
  ArrowRight
} from "lucide-react"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

// Native Firebase pipelines
import { submitContactPageForm } from "@/services/leads"
import { sendEmailNotification } from "@/services/notify"

const vectorJourney = [
  { 
    id: "vector-foundation", 
    step: "01", 
    name: "Vector Foundation™", 
    age: "Classes 6–8", 
    focus: "Build Strong PCM Foundations", 
    img: "/images/programs/Learning-Journey.png", // Bound from your explorer view
    description: "We help younger students master fundamental concepts before school pressure begins. Your child builds problem-solving habits, logical thinking skills, and academic confidence early on."
  },
  { 
    id: "vector-advance", 
    step: "02", 
    name: "Vector Advance™", 
    age: "Classes 9–10", 
    focus: "Competitive Aptitude & Logic", 
    img: "/images/how-it-works/student-assessment.jpg", // Bound from your explorer view
    description: "Preparing students for advanced competitive concepts by strengthening math and physics foundations. We build the conceptual speed and mental stamina needed for the upcoming JEE journey."
  },
  { 
    id: "vector-core", 
    step: "03", 
    name: "Vector Core™", 
    age: "Class 11", 
    focus: "JEE Foundation Tiers", 
    img: "/images/programs/Assignment-Tracking.png", // Bound from your explorer view
    description: "A focused deep dive into high-weightage topics across Physics, Chemistry, and Mathematics. Your child follows a step-by-step weekly milestone plan tailored to their exact learning pace."
  },
  { 
    id: "vector-rank", 
    step: "04", 
    name: "Vector Rank™", 
    age: "Class 12", 
    focus: "Exam Readiness & Revision", 
    img: "/images/programs/Progress-Analytics.png", // Bound from your explorer view
    description: "Turning student effort into peak exam scores. We identify persistent mistakes through clear tracking logs, refining time-management and test-taking strategies right before the exams."
  },
  { 
    id: "vector-elite", 
    step: "05", 
    name: "Vector Elite™", 
    age: "Repeaters / Dropouts", 
    focus: "Premium Mentorship & Rank Mastery", 
    img: "/images/how-it-works/student-mentor.jpg", // Bound from your explorer view
    description: "A comprehensive, high-intensity program designed for students dedicated to maximizing their final percentile. Focuses heavily on shortcuts, advanced problem analysis, and option elimination methods."
  }
]

export default function PremiumJeeFunnel() {
  const [activeJourneyStep, setActiveJourneyStep] = useState(0)
  const [parentName, setParentName] = useState("")
  const [phone, setPhone] = useState("")
  const [studentClass, setStudentClass] = useState("Class 11")
  const [loading, setLoading] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const rawPath = typeof window !== "undefined" ? window.location.pathname : "/programs/jee"

  const handlePipelineSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone.trim()) return

    try {
      setLoading(true)
      const payloadData = {
        parentName: parentName.trim() || "Premium Funnel Lead",
        phone: phone.trim(),
        studentName: "Not Provided (Admissions Hub Drop-In)",
        studentClass: studentClass,
        subjectsRequired: "UPED VECTOR™ JEE Comprehensive Track",
        learningMode: "Vector Dynamic Matrix",
        academicGoals: `Admissions Funnel Conversion. Active Interacted Track Focus: ${vectorJourney[activeJourneyStep].name}`,
        sourcePage: `${rawPath} [Master Funnel Component]`,
      }

      await submitContactPageForm(payloadData)
      await sendEmailNotification({
        formType: "UPED VECTOR™ Elite Admissions Funnel Submission",
        ...payloadData
      })

      setSubmitSuccess(true)
      setTimeout(() => {
        setSubmitSuccess(false)
        setParentName("")
        setPhone("")
      }, 4000)

    } catch (err) {
      console.error("Admissions Pipeline Failure:", err)
      alert("Something went wrong. Please verify and submit details again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500/30 overflow-x-hidden flex flex-col justify-between font-sans">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 w-full">
        <div className="absolute left-[-200px] top-[-100px] h-[500px] w-[500px] rounded-full bg-orange-500/[0.06] blur-[160px] pointer-events-none" />
        
        <div className="grid gap-16 lg:grid-cols-12 items-center w-full">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-xs font-mono font-bold tracking-widest text-orange-400 uppercase">
              UPED VECTOR™
            </span>
            <h1 className="text-5xl sm:text-7xl font-black leading-[0.95] tracking-[-0.05em] font-sans">
              From Class 6 <br />
              <span className="bg-gradient-to-r from-zinc-100 via-orange-500 to-zinc-400 bg-clip-text text-transparent">To IIT.</span>
            </h1>
            <div className="border-l-2 border-orange-500/40 pl-4 space-y-1 text-zinc-400 font-semibold tracking-tight text-base sm:text-lg">
              <p>One Student.</p>
              <p>One Mentor.</p>
              <p>One Roadmap.</p>
            </div>
            <p className="max-w-xl text-base text-zinc-400 leading-relaxed font-normal">
              Overcrowded coaching institutes waste your child's true potential. UpEd builds personal learning plans and maps 1-on-1 mentorship to guide them directly toward top-tier JEE success.
            </p>
          </div>

          {/* HERO IMAGE ALIGNED FROM EXTENSION EXPLORER */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent rounded-[32px] blur-2xl opacity-40 pointer-events-none" />
            <div className="relative rounded-[32px] border border-white/10 overflow-hidden aspect-[4/3] bg-zinc-900 shadow-2xl">
              <img 
                src="/images/hero/hero-student.png" 
                alt="UpEd Student Hero Blueprint Workspace" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY PARENTS CHOOSE UPED */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-3xl mb-12">
          <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">THE UPED WAY</p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1 font-sans">Why Parents Choose UpEd</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex gap-4 p-5 rounded-xl border border-white/5 bg-black/40">
            <CheckCircle2 size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-white text-base font-sans">✓ Dedicated Mentor</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-normal">A high-quality mentor tracks your child's daily habits, consistency, and motivation.</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 rounded-xl border border-white/5 bg-black/40">
            <CheckCircle2 size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-white text-base font-sans">✓ Personalized Learning Plan</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-normal">Custom milestones tuned to your child's target speed, accuracy, and board deadlines.</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 rounded-xl border border-white/5 bg-black/40">
            <CheckCircle2 size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-white text-base font-sans">✓ Weekly Progress Reports</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-normal">Complete transparency. Parents know exactly which areas are mastered and what requires focus.</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 rounded-xl border border-white/5 bg-black/40">
            <CheckCircle2 size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-white text-base font-sans">✓ Parent Review Meetings</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-normal">Regular feedback evaluations to review milestones and clear paths together.</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 rounded-xl border border-white/5 bg-black/40">
            <CheckCircle2 size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-white text-base font-sans">✓ Online & Home Tuition</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-normal">Background-verified subject teachers deployed straight to your home or active online portal.</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 rounded-xl border border-white/5 bg-black/40">
            <CheckCircle2 size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-white text-base font-sans">✓ JEE-Focused Roadmap</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-normal">Built entirely around target topics, practical short-cuts, and proper mock schedules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROBLEM */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-white/5">
        <div className="max-w-3xl mb-12">
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider font-mono">THE REALITY</p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1 font-sans">
            Most Students Don't Need More Tuition. <br />
            <span className="text-orange-500">They Need Direction.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 space-y-3">
            <h4 className="text-lg font-bold tracking-tight text-zinc-200 font-sans">No Roadmap</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">Students study hard but lack clear structure. They consume content endlessly without knowing their high-weightage practice goals.</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 space-y-3">
            <h4 className="text-lg font-bold tracking-tight text-zinc-200 font-sans">No Accountability</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">Nobody tracks personalized error loops in huge classrooms. Core conceptual mistakes stay uncorrected until exam day arrives.</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 space-y-3">
            <h4 className="text-lg font-bold tracking-tight text-zinc-200 font-sans">No Mentor</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">Nobody is there to help guide long-term performance decisions or maintain clear study confidence when the syllabus gets difficult.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE VECTOR JOURNEY SLIDER MAP */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 space-y-10">
        <div>
          <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">SIGNATURE BLUEPRINT</p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1 font-sans">The Vector Journey</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-2.5 justify-center">
            {vectorJourney.map((item, idx) => {
              const isActive = activeJourneyStep === idx
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveJourneyStep(idx)}
                  className={`flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 font-sans ${
                    isActive ? "border-orange-500 bg-white/[0.02] text-white shadow-xl" : "border-white/10 bg-white/[0.01] text-zinc-500 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${isActive ? 'bg-orange-500/20 text-orange-400' : 'bg-white/5 text-zinc-600'}`}>{item.step}</span>
                    <div>
                      <h4 className={`text-base font-bold ${isActive ? 'text-orange-500' : 'text-white'}`}>{item.name}</h4>
                      <span className="text-[11px] text-zinc-500 block mt-0.5">{item.age}</span>
                    </div>
                  </div>
                  <ChevronRight size={14} className={isActive ? "text-orange-500 translate-x-0.5" : "text-zinc-700"} />
                </button>
              )
            })}
          </div>

          <div className="lg:col-span-7 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJourneyStep}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="w-full rounded-[28px] border border-white/10 bg-white/[0.01] overflow-hidden flex flex-col justify-between font-sans shadow-2xl"
              >
                <div className="aspect-[21/9] bg-zinc-950 relative overflow-hidden border-b border-white/10">
                  <img src={vectorJourney[activeJourneyStep].img} alt="UpEd Pipeline Proof Visual" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                </div>
                <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-orange-400">Program Explorer</span>
                    <h3 className="text-2xl font-black tracking-tight">{vectorJourney[activeJourneyStep].name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Focus: <span className="text-zinc-300">{vectorJourney[activeJourneyStep].focus}</span></p>
                    <p className="text-sm text-zinc-400 leading-relaxed pt-2 border-t border-white/5 font-normal">{vectorJourney[activeJourneyStep].description}</p>
                  </div>
                  <div className="pt-4 flex items-center justify-between border-t border-white/5 text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-orange-500" /> Active Stage Track</div>
                    <Link href={`/programs/${vectorJourney[activeJourneyStep].id}`} className="text-orange-400 flex items-center gap-1 hover:text-orange-300 font-bold">Explore [ {vectorJourney[activeJourneyStep].name} ] <ArrowRight size={12} /></Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 5 & 6: WHAT DOES A STUDENT ACTUALLY RECEIVE FRAMEWORK */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-2xl mb-12 text-left space-y-2">
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider font-mono">PRODUCT CLARITY</p>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">What Does Your Child Receive?</h2>
          <p className="text-zinc-400 text-xs md:text-sm">Clear, tangible inclusions backing every single customized program package tier.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 font-sans">
          <div className="p-6 rounded-2xl border border-white/5 bg-black/40 space-y-2">
            <CheckCircle2 size={16} className="text-orange-500" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Live 1-on-1 Classes</h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-normal">Isolated, direct learning engagement with experienced subject-matter mentors without batch competition distractions.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-black/40 space-y-2">
            <CheckCircle2 size={16} className="text-orange-500" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Personalized Study Plan</h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-normal">A structured, custom-built micro syllabus configured according to your child's active milestone pacing thresholds.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-black/40 space-y-2">
            <CheckCircle2 size={16} className="text-orange-500" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Weekly Assessments</h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-normal">Regular performance tests mapped directly against competitive parameters to measure conceptual mastery.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-black/40 space-y-2">
            <CheckCircle2 size={16} className="text-orange-500" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Doubt Solving Support</h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-normal">Dedicated 24/7 prioritized communication access channels to clear academic hurdles immediately.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-black/40 space-y-2">
            <CheckCircle2 size={16} className="text-orange-500" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Parent Review Meetings</h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-normal">Consistent structural evaluations keeping families fully aware of timeline metrics and rank position improvements.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-black/40 space-y-2">
            <CheckCircle2 size={16} className="text-orange-500" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Performance Reports</h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-normal">Granular digital progress sheets charting accuracy updates, speed metrics, and targeted correction paths.</p>
          </div>
        </div>
      </section>

      {/* SECTION 7: RESULTS & OUTCOMES OUTLINE RENDERING FROM DIRECT ASSET LISTS */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 font-sans">
        <div className="bg-[#0A0A0A] rounded-[28px] border border-white/10 p-8 md:p-12 space-y-10">
          <h4 className="text-xl font-black tracking-tight text-center font-sans">The Student Evolution Journey</h4>
          
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 items-stretch">
            {[
              { label: "Anxious Student", img: "/images/results/student-1.png", desc: "Struggling without a clear study plan" },
              { label: "Confident Learner", img: "/images/results/student-2.png", desc: "Following clear weekly milestones" },
              { label: "Focused Aspirant", img: "/images/results/student-3.png", desc: "Fixing custom errors step-by-step" },
              { label: "IIT Candidate", img: "/images/results/student-4.png", desc: "Completely ready for exam day" }
            ].map((step, i) => (
              <div key={i} className="border border-white/5 bg-black/30 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl">
                <div className="aspect-square bg-zinc-950 overflow-hidden relative">
                  <img src={step.img} alt={step.label} className="w-full h-full object-cover grayscale brightness-90 contrast-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold text-orange-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">{step.label}</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-normal p-4 font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: PRICING MATRIX */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent text-center space-y-8 font-sans">
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">PRICING PHILOSOPHY</p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-sans">Personalized, Flexible Plans</h2>
          <p className="text-zinc-400 text-sm leading-relaxed font-normal">
            We don't force you into long-term, hardcoded lock-in contracts. UpEd customizes pricing blueprints based entirely on your target parameters:
          </p>
        </div>

        <div className="max-w-xl mx-auto rounded-2xl border border-white/10 bg-black/50 p-8 space-y-6">
          <div className="grid grid-cols-3 gap-2 text-[10px] font-mono tracking-wider text-zinc-400 uppercase text-center">
            <div className="bg-white/5 p-2 rounded border border-white/5">1 / 2 / 3 Subjects</div>
            <div className="bg-white/5 p-2 rounded border border-white/5">8 / 12 / 16 / 20 Classes</div>
            <div className="bg-white/5 p-2 rounded border border-white/5">Online & Home Tuition</div>
          </div>
          <div className="pt-2 border-t border-white/5">
            <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider font-sans">Flexible System Access</p>
            <p className="text-xl md:text-2xl font-black text-white mt-1 font-sans">Plans Start From <span className="text-orange-500">₹4,999 / Month</span></p>
          </div>
          <div className="pt-2">
            <button 
              onClick={() => {
                const el = document.getElementById("admissions-intake-form")
                el?.scrollIntoView({ behavior: "smooth" })
              }}
              className="h-12 px-6 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all font-sans w-full sm:w-auto"
            >
              Get Personalized Plan
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-y border-white/5">
        <div className="max-w-xl mb-12 text-left space-y-2">
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider font-mono">PARENT REVIEWS</p>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight font-sans">What Other Parents Say</h2>
          <p className="text-zinc-400 text-xs font-normal">Real outcomes from families who trusted UpEd with their child's board and competitive journey milestones.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-left">
          {[
            { p: "Dr. Arvinda Kumar", r: "The accountability loop is incredible. UpEd's micro-syllabus and error logs isolated precisely why my child's score dipped in integration math. Excellent rank correction.", c: "Parent of Class 12 Student", o: "Percentile Jump: 92% to 98.7%" },
            { p: "Meenakshi Sundaram", r: "We tried massive online coaching apps, but my son was completely lost in the crowd. UpEd's 1-on-1 concept separation changed everything. Highly recommend their Foundation track.", c: "Parent of Class 9 Student", o: "Excellent Progress Updates" },
            { p: "Rajesh K. Sharma", r: "Bespoke home tuition that actually works. The mentor assigned to my child coordinates directly with our timeline parameters. Absolute clarity and transparency.", c: "Parent of Class 11 Student", o: "Scores Increased by 35%" }
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between gap-6 backdrop-blur-sm font-sans">
              <p className="text-xs italic text-zinc-300 leading-relaxed font-normal">"{item.r}"</p>
              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-white">{item.p}</h5>
                  <span className="text-[10px] text-zinc-500 block mt-0.5 font-normal">{item.c}</span>
                </div>
                <span className="text-[9px] font-mono text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded font-bold uppercase tracking-wide">{item.o}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10 & 11: CLOSING ASSESSMENT FORMS */}
      <section id="admissions-intake-form" className="w-full max-w-4xl mx-auto px-6 py-20 text-center space-y-10 relative font-sans">
        <div className="space-y-3 max-w-xl mx-auto">
          <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">GET STARTED</p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-sans">Not Sure Which Vector Stage Fits Your Child?</h2>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-normal">
            Book a Free Academic Assessment below. Our senior advising mentor will lock an alignment call to map out custom diagnostic milestones.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8 md:p-12 shadow-2xl backdrop-blur-md text-left max-w-2xl mx-auto">
          {submitSuccess ? (
            <div className="py-12 text-center space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-orange-500"><ShieldCheck size={24} /></div>
              <h4 className="text-xl font-black tracking-tight text-white font-sans">Assessment Request Received!</h4>
              <p className="text-sm text-zinc-400 font-normal">Our advising coordinator will contact your mobile line within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handlePipelineSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input 
                  type="text" 
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="Parent Name" 
                  className="h-14 w-full rounded-xl border border-white/10 bg-black/50 px-5 text-sm text-white focus:outline-none focus:border-orange-500/60 placeholder-zinc-600 transition-colors font-sans" 
                />
                <input 
                  type="tel" 
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="WhatsApp Number *" 
                  className="h-14 w-full rounded-xl border border-white/10 bg-black/50 px-5 text-sm text-white focus:outline-none focus:border-orange-500/60 placeholder-zinc-600 transition-colors font-sans" 
                />
              </div>
              <select 
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                className="h-14 w-full rounded-xl border border-white/10 bg-black/50 px-5 text-sm text-zinc-400 focus:outline-none focus:border-orange-500/60 cursor-pointer appearance-none font-sans"
              >
                <option value="Classes 6-8" className="bg-zinc-950">Classes 6–8 (Foundation Track)</option>
                <option value="Classes 9-10" className="bg-zinc-950">Classes 9–10 (Advance Track)</option>
                <option value="Class 11" className="bg-zinc-950">Class 11 (Core Track)</option>
                <option value="Class 12" className="bg-zinc-950">Class 12 (Rank Track)</option>
                <option value="Repeaters" className="bg-zinc-950">Repeaters (Elite Track)</option>
              </select>
              <button 
                type="submit" 
                disabled={loading}
                className="h-14 w-full mt-2 rounded-xl bg-orange-500 font-extrabold text-black active:scale-[0.99] disabled:bg-zinc-800 disabled:text-zinc-500 shadow-lg shadow-orange-500/10 transition-all text-sm flex items-center justify-center font-sans"
              >
                {loading ? "Processing parameters..." : "Book Free Academic Assessment 🚀"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}