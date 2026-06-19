"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { 
  CheckCircle2, ShieldCheck, X, User, Phone, ArrowRight,
  BookOpen, Clock, Laptop, Home, ChevronDown, Star, AlertCircle,
  Sparkles, Shield, Compass, Users, Award, Zap, XCircle
} from "lucide-react"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
// Firebase pipeline
import { submitClassSixLead } from "@/services/leads" 
import { sendEmailNotification } from "@/services/notify" // Matches your actual file path

const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainerVariant: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

type Props = {
  gradeData: any
  pricingData: any
  category: string
}

export default function ClassSixLanding({
  gradeData,
  pricingData,
  category,
}: Props) {
  const [parentName, setParentName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  // Dedicated Modal States for frictionless inline pricing leads
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalParentName, setModalParentName] = useState("")
  const [modalPhone, setModalPhone] = useState("")
  const [modalLoading, setModalLoading] = useState(false)
  const [modalSuccess, setModalSuccess] = useState(false)


  const [activeMode, setActiveMode] = useState<"online" | "home">("online")
  const [selectedPlan, setSelectedPlan] = useState<string>("Growth Plan ⭐")

  const rawPath = typeof window !== "undefined" ? window.location.pathname : "/programs/class-6"

  const handlePipelineSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone.trim()) return

    try {
      setLoading(true)
      const currentPlanDetails = pricingData[activeMode].find((p: any) => p.plan === selectedPlan)

      // Payload strictly matches ClassSixLeadData interface
      const payloadData = {
        parentName: parentName.trim() || "Class 6 Lead",
        phone: phone.trim(),
        studentClass: "Class 6",
        subjectsRequired: `${currentPlanDetails?.subjects} (${currentPlanDetails?.classes})`,
        learningMode: activeMode === 'online' ? 'Class 6 Online Tuition' : 'Class 6 Home Tuition',
        selectedPlan: selectedPlan, // REQUIRED
        sourcePage: `${rawPath} [Hero Intake]`,
      }

      await submitClassSixLead(payloadData)
      await sendEmailNotification({
        formType: "Class 6 Academic Growth Consultation Request",
        parentName: payloadData.parentName,
        phone: payloadData.phone,
        sourcePage: payloadData.sourcePage
      })

      setSubmitSuccess(true)
      setTimeout(() => { setSubmitSuccess(false); setParentName(""); setPhone(""); }, 4000)
    } catch (err) { console.error(err) } finally { setLoading(false) }
  }

  const handleModalPipelineSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!modalPhone.trim()) return

    try {
      setModalLoading(true)
      const currentPlanDetails = pricingData[activeMode].find((p: any) => p.plan === selectedPlan)

      // Payload strictly matches ClassSixLeadData interface
      const payloadData = {
        parentName: modalParentName.trim() || "Class 6 Pricing Lead",
        phone: modalPhone.trim(),
        studentClass: "Class 6",
        subjectsRequired: `${currentPlanDetails?.subjects} (${currentPlanDetails?.classes})`,
        learningMode: activeMode === 'online' ? 'Class 6 Online Tuition' : 'Class 6 Home Tuition',
        selectedPlan: selectedPlan, // REQUIRED
        sourcePage: `${rawPath} [Direct Grid Capture]`,
      }

      await submitClassSixLead(payloadData)
      await sendEmailNotification({
        formType: "Class 6 Package Explicit Selection Intent",
        parentName: payloadData.parentName,
        phone: payloadData.phone,
        sourcePage: payloadData.sourcePage
      })

      setModalSuccess(true)
      setTimeout(() => { setModalSuccess(false); setIsModalOpen(false); setModalParentName(""); setModalPhone(""); }, 3500)
    } catch (err) { console.error(err) } finally { setModalLoading(false) }
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col justify-between font-sans subpixel-antialiased selection:bg-orange-500/30">
      <Navbar />

      {/* SECTION 1: HERO & TRUST ENGINE */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full grid gap-12 lg:grid-cols-12 items-center min-h-[85vh]">
        <div className="absolute left-[-150px] top-[-100px] h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-orange-500/[0.05] blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainerVariant}
          className="lg:col-span-7 space-y-8 text-left"
        >
          <motion.span variants={fadeInUpVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-xs font-mono font-bold tracking-widest text-orange-400 uppercase">
            <Sparkles size={12} className="text-orange-400 animate-pulse" /> {gradeData.hero.badge}
          </motion.span>
          
          <motion.h1 variants={fadeInUpVariant} className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-[-0.04em]">
            {gradeData.hero.title[0]} <br />
            <span className="text-orange-500 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              {gradeData.hero.title[1]}
            </span>
            <br />
            {gradeData.hero.title[2]} <br />
            {gradeData.hero.title[3]}
          </motion.h1>
          
          <motion.p variants={fadeInUpVariant} className="max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            {gradeData.hero.description}
          </motion.p>

          {/* SOCIAL PROOF METRICS ROWS */}
          <motion.div variants={fadeInUpVariant} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-y border-white/5 py-4">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-orange-500">500+</p>
              <p className="text-[11px] text-zinc-500 font-medium">Students Supported</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">100+</p>
              <p className="text-[11px] text-zinc-500 font-medium">Verified Tutors</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">4.8/5</p>
              <p className="text-[11px] text-zinc-500 font-medium">Parent Rating</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">1-on-1</p>
              <p className="text-[11px] text-zinc-500 font-medium">Personal Attention</p>
            </div>
          </motion.div>

          {/* DYNAMIC SEARCH KEYWORD BUTTON CHIPS */}
          <motion.div variants={fadeInUpVariant} className="space-y-3 pt-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block font-bold">Personalized Tuition Options</span>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-zinc-200">
              {gradeData.hero.keywords.map((sub: string) => (
                <span key={sub} className="bg-zinc-900 border border-white/10 px-3 py-2 rounded-xl shadow-md backdrop-blur-sm hover:border-orange-500/30 transition-colors duration-300 cursor-default">
                  {sub}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* HERO IMAGE CONTAINER + INTAKE INTERFACE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 relative w-full max-w-md mx-auto space-y-6"
        >
          <div className="rounded-[24px] border border-white/10 overflow-hidden bg-zinc-950 aspect-[4/3] shadow-2xl relative">
            <img 
              src="/images/testimonials/family-success.jpg" 
              alt="UpEd learning journey setup with family" 
              className="w-full h-full object-cover brightness-105 contrast-105 saturate-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 shadow-2xl space-y-4">
            <div>
              <h3 className="text-base font-black tracking-tight flex items-center gap-2">
                <Zap size={16} className="text-orange-500 fill-orange-500/20" /> Help My Child Understand Concepts
              </h3>
              <p className="text-xs text-zinc-500 mt-1">Many students begin to struggle in Class 6 because subjects become more detailed and concept-based. Our experienced tutors help students understand lessons clearly, complete homework confidently, and perform better in school.</p>
            </div>

            {submitSuccess ? (
              <div className="py-6 text-center space-y-2">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-orange-500"><ShieldCheck size={20} /></div>
                <h4 className="text-xs font-bold text-white">Consultation Block Booked!</h4>
                <p className="text-[11px] text-zinc-400">Our academic advisor will call you within 2 hours to walk you through your child's track.</p>
              </div>
            ) : (
              <form onSubmit={handlePipelineSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2 bg-black/40 p-1 rounded-xl border border-white/5">
                  <button 
                    type="button" onClick={() => setActiveMode("online")}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all duration-200 ${activeMode === "online" ? "bg-orange-500 text-black shadow-sm font-black" : "bg-transparent text-zinc-400"}`}
                  >
                    Online Tuition
                  </button>
                  <button 
                    type="button" onClick={() => setActiveMode("home")}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all duration-200 ${activeMode === "home" ? "bg-orange-500 text-black shadow-sm font-black" : "bg-transparent text-zinc-400"}`}
                  >
                    Home Tuition
                  </button>
                </div>

                <div className="relative">
                  <select 
                    value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}
                    className="h-10 w-full rounded-xl border border-white/10 bg-black/60 px-3 pr-10 text-xs text-zinc-200 focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="Growth Plan ⭐">Growth Plan ⭐ (Recommended Plan)</option>
                    <option value="Starter Plan">Starter Plan (1 Subject Focus)</option>
                    <option value="Excellence Plan">Excellence Plan (Full Academic Support)</option>
                  </select>
                  <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                </div>

                <div className="grid gap-2 grid-cols-2">
                  <input 
                    type="text" required value={parentName} onChange={(e) => setParentName(e.target.value)}
                    placeholder="Parent Name" className="h-10 w-full rounded-xl border border-white/10 bg-black/60 px-3 text-xs text-white focus:outline-none placeholder-zinc-700 transition-colors" 
                  />
                  <input 
                    type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
                    placeholder="Mobile Number *" className="h-10 w-full rounded-xl border border-white/10 bg-black/60 px-3 text-xs text-white focus:outline-none placeholder-zinc-700 transition-colors" 
                  />
                </div>

                <button 
                  type="submit" disabled={loading}
                  className="h-11 w-full rounded-xl bg-orange-500 text-xs font-extrabold uppercase tracking-wider text-black hover:bg-orange-400 transition-all flex items-center justify-center shadow-lg shadow-orange-500/10"
                >
                  {loading ? "Processing Details..." : "Help My Child Score Better"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: NEW ESSENTIAL ADDITION — WHY CLASS 6 MATTERS MATRICES */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5 bg-zinc-950/30">
        <div className="grid gap-8 lg:grid-cols-12 items-center text-left">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block">FOUNDATION MILESTONE</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Why Class 6 Matters For Future Success</h2>
          </div>
          <div className="lg:col-span-7 text-sm text-zinc-400 space-y-4 font-normal leading-relaxed">
            <p>
              Class 6 is where students move from basic learning to concept-based learning. The simple facts of early primary school disappear, replaced by abstract logic trees, algebraic equations, and scientific formulas.
            </p>
            <p>
              Students who build strong foundations in <strong className="text-white">Mathematics, Science, and English</strong> during Class 6 find it much easier to perform well in higher classes. Our goal is to make sure your child enters Class 7, 8, 9 and beyond with total confidence and strong fundamentals.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: BALANCED COMPASSIONATE UPED VS LOCAL TUTOR PROFILE */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="max-w-2xl mb-12 text-left">
          <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">THE UPED DIFFERENCE</p>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-1">Why Parents Choose UpEd</h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">A local tutor helps complete lessons. UpEd goes beyond tutoring to secure complete personal attention.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Learning Focus", local: "Helps complete daily lessons but often misses deep underlying gaps", uped: "Provides complete personal attention fully tailored to your child's natural learning speed" },
            { title: "Safety & Verification", local: "Relies on casual neighborhood references with varying quality standards", uped: "Ensures rigorous background checks and verified subject expert matching parameters" },
            { title: "Study Pacing", local: "Pacing matches a standard timetable layout rather than child comfort", uped: "Adapts completely around your child's everyday confidence and understanding levels" },
            { title: "Error Support", local: "Corrects homework mistakes textually without logging root pattern confusion", uped: "Tracks repeating gaps supportively to make sure mistakes disappear permanently" },
            { title: "Parent Visibility", local: "Updates are rare, usually given only during terminal school card handovers", uped: "Dispatches regular, transparent progress updates directly to your mobile number" },
            { title: "Academic Backup", local: "Schedules can break down entirely if the teacher faces household disruption", uped: "Provides a dedicated support team backstop with immediate tutor replacement guarantee" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col justify-between border border-white/10 bg-zinc-950 rounded-2xl p-5 space-y-4 shadow-xl">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-orange-400 font-bold block mb-1">Focus Parameter</span>
                <h4 className="text-sm font-black text-white font-sans">{item.title}</h4>
              </div>

              {/* LOCAL TUTOR ACCENT TRACK */}
              <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-red-500 font-mono uppercase tracking-wide">
                  <XCircle size={12} className="text-red-500" /> Local Tutor Track
                </div>
                <p className="text-xs text-red-100/70 mt-1 font-normal leading-normal">{item.local}</p>
              </div>

              {/* UPED ADVANTAGE CARD GLOW */}
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

      {/* SECTION 4: SIMPLIFIED CHRONOLOGICAL FLOW TIERS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent">
        <div className="max-w-2xl mb-16 text-left">
          <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">THE COMFORTABLE STEPS</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">How We Build The Journey For Your Child</h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">We remove academic anxiety by laying a welcoming, step-by-step foundation of personal support and structural safety.</p>
        </div>

        <div className="space-y-24">
          {[
            { step: "01", title: "Understand Your Child's Current Level", desc: "We coordinate a quiet, friendly concept benchmark check to see where school text patterns or basic operations are experiencing blockages.", img: "/images/how-it-works/student-assessment.jpg" },
            { step: "02", title: "Discuss Your Child's Academic Needs", desc: "Our advisor listens closely to isolate core worries—whether it is exam fear, short focus loops, or school classroom rushing habits.", img: "/images/how-it-works/parent-concern.jpg" },
            { step: "03", title: "Get Matched With the Right Tutor", desc: "We pull from our verified subject expert network to assign an ideal teacher whose personal patience clicks natively with your child's rhythm.", img: "/images/how-it-works/mentor-profile.jpg" },
            { step: "04", title: "Start Personalized One-to-One Classes", desc: "Classes initiate inside a cozy private learning layer. The tutor delivers full personal attention to ensure your child can ask doubts with zero hesitation.", img: "/images/how-it-works/student-mentor.jpg" },
            { step: "05", title: "Practice, Homework & Concept Reinforcement", desc: "Tutors back up regular textbook lessons and daily assignments, fixing repeating errors supportively without adding any test pressure.", img: "/images/how-it-works/guided-practice.jpg" },
            { step: "06", title: "Regular Parent Progress Updates", desc: "Total transparency regarding academic updates. You receive clear metric notifications showing precisely what lessons have been verified and secured.", img: "/images/how-it-works/parent-review.jpg" },
            { step: "07", title: "Continuous Academic Improvement", desc: "Continuous mapping dynamically aligns learning tracks with midterm school board cycles to guarantee a confident rise in school marks.", img: "/images/how-it-works/mentor-parent-review.jpg" }
          ].map((block, i) => (
            <div key={i} className="grid gap-8 lg:grid-cols-12 items-center">
              <div className={`lg:col-span-5 space-y-3 text-left ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20 uppercase">Phase {block.step}</span>
                <h3 className="text-xl font-black text-white">{block.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">{block.desc}</p>
              </div>
              <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="rounded-2xl border border-white/10 overflow-hidden bg-zinc-950 aspect-[16/9] shadow-xl">
                  <img src={block.img} alt={block.title} className="w-full h-full object-cover brightness-105 contrast-105 saturate-110" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: NEW HIGH CONVERSION ADDITION — RESULTS PARENTS WANT */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-2xl mb-12 text-left space-y-1">
          <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">THE TARGET OUTCOMES</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">The Real Results Parents Want</h2>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left items-stretch">
          {[
            { icon: BookOpen, title: "Better Understanding", desc: "No more memorizing blanks. Your child will understand the core 'why' behind complex mathematical and scientific equations." },
            { icon: Award, title: "Better School Marks", desc: "Watch conceptual clarity translate directly into an upward trend on report cards during terminal school board exams." },
            { icon: Shield, title: "Stronger Concepts", desc: "Laying clear, unbreakable logic loops so that future learning phases in Class 7 and 8 feel entirely approachable." },
            { icon: Clock, title: "Homework Completed On Time", desc: "Eliminate evening study stress. Daily school homework and assignments are handled productively with expert tutor tracking." },
            { icon: Users, title: "More Confidence in Class", desc: "Your child will raise their hand to answer questions proudly, transitioning away from classroom isolation or shyness." },
            { icon: AlertCircle, title: "Less Exam Stress", desc: "Structured learning approach and causal mock checkpoints clear out nervous anxiety, making test days a breeze." }
          ].map((item, index) => (
            <div key={index} className="p-6 border border-white/5 bg-zinc-900/[0.08] rounded-2xl space-y-3 flex flex-col items-start hover:border-white/10 transition-colors duration-300">
              <div className="h-9 w-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <item.icon size={16} />
              </div>
              <h5 className="font-extrabold text-white text-base font-sans leading-snug">✓ {item.title}</h5>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: PACKAGES TUITION GRID */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="text-left space-y-1">
            <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">PRICING TIERS</p>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">Program Tuition Fee Grid</h2>
          </div>
          
          <div className="flex p-1 rounded-xl bg-zinc-900 border border-white/10 w-fit">
            <button type="button" onClick={() => setActiveMode("online")} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeMode === "online" ? "bg-orange-500 text-black shadow-sm font-black" : "text-zinc-400"}`}>Online Tuition</button>
            <button type="button" onClick={() => setActiveMode("home")} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeMode === "home" ? "bg-orange-500 text-black shadow-sm font-black" : "text-zinc-400"}`}>Home Tuition</button>
          </div>
        </div>

        <motion.div layout="position" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left items-stretch">
          <AnimatePresence mode="popLayout">
            {pricingData[activeMode].map((item: any) => (
              <motion.div 
                layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                key={item.plan} className={`rounded-2xl border p-6 flex flex-col justify-between gap-8 ${item.popular ? 'border-orange-500 bg-orange-500/[0.02] shadow-xl' : 'border-white/10 bg-zinc-900/10'}`}
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
                    onClick={() => { 
                      setSelectedPlan(item.plan)
                      setIsModalOpen(true) 
                    }}
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

      {/* SECTION 7: STUDENT EVOLUTION CONTEXT MATRICES */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="bg-[#0A0A0A] rounded-[24px] sm:rounded-[32px] border border-white/10 p-6 sm:p-10 text-center space-y-12 shadow-2xl">
          <h4 className="text-2xl sm:text-3xl font-black text-center">Watch Your Child's Academic Journey Transform</h4>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 items-stretch">
            {[
              { label: "Anxious Learner", img: "/images/results/student-1.png", desc: "Feeling stuck or left behind under fast school pressures." },
              { label: "Personal Attention", img: "/images/results/student-2.png", desc: "Discovering weak lessons through cozy, patient tutor tools." },
              { label: "Better Understanding", img: "/images/results/student-3.png", desc: "Completing school homework sets and regular tasks with ease." },
              { label: "Better Marks", img: "/images/results/student-4.png", desc: "Performing with verified confidence and securing high positions." }
            ].map((step, i) => (
              <div key={i} className="border border-white/5 bg-black/40 rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg">
                <div className="aspect-square bg-zinc-950 overflow-hidden relative">
                  <img src={step.img} alt={step.label} className="w-full h-full object-cover brightness-105 contrast-105 saturate-110" />
                  <span className="absolute bottom-3 left-3 text-[10px] sm:text-[11px] font-bold text-orange-400 bg-black/80 px-2 py-0.5 rounded border border-white/10">{step.label}</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-normal p-4 font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: HYPER-LOCAL REAL PARENT STORIES TIMELINE */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-xl mb-12 text-left space-y-2">
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider font-mono">WHAT PARENTS SAY ABOUT UPED</p>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">Real Improvements, Verified Families</h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-normal">Hear from parents who have seen real improvements in their child's academic performance and school confidence.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-left items-stretch">
          {[
            { p: "Parent of Class 6 Student", r: "My daughter was struggling heavily in Mathematics. Within 3 months of joining UpEd, we could see a clear improvement in her confidence and school marks. The tutor is incredibly patient.", c: "Anna Nagar, Chennai", o: "Marks Boosted" },
            { p: "Parent of Middle Schooler", r: "School exams used to bring so much evening stress to our household. UpEd's homework support and individual track completely cleared her blocks. Highly recommended.", c: "Adyar, Chennai", o: "Confidence Restored" },
            { p: "Parent of Class 6 Student", r: "We tried massive batch coaching programs first but my son felt lost. Moving to UpEd's one-to-one tuition format gave him the target attention he needed to succeed.", c: "KK Nagar, Madurai", o: "Highly Recommended" }
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-zinc-900/[0.08] p-6 flex flex-col justify-between gap-6 backdrop-blur-sm shadow-xl">
              <p className="text-xs sm:text-sm italic text-zinc-300 leading-relaxed font-normal">"{item.r}"</p>
              <div className="border-t border-white/5 pt-4 flex items-center justify-between gap-2">
                <div>
                  <h5 className="text-xs font-bold text-white">{item.p}</h5>
                  <span className="text-[10px] text-zinc-500 block mt-0.5 font-normal">{item.c}</span>
                </div>
                <span className="text-[9px] font-mono text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded font-bold uppercase tracking-wide flex-shrink-0">{item.o}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: VALUE PRESENTATION ENGINE */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-zinc-900/[0.08] border-t border-white/5 text-left mb-4 sm:rounded-3xl border sm:border-white/10 sm:p-8">
        <div className="grid gap-6 md:grid-cols-12 items-center">
          <div className="md:col-span-5 flex items-start gap-3">
            <AlertCircle size={20} className="text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-white text-base">Invest In Your Child's Future</h5>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-normal font-normal">
                A strong academic foundation today can create opportunities for a lifetime. With personalized guidance, regular support, and expert mentorship, your child receives the attention they need to succeed.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-7 grid gap-3 grid-cols-3 text-center text-xs font-medium font-mono">
            <div className="p-3 sm:p-4 border border-white/5 bg-black/40 rounded-xl flex flex-col justify-center shadow-inner">
              <span className="text-zinc-500 text-[9px] sm:text-[10px] uppercase block leading-tight">Daily Micro-Investment</span>
              <p className="text-orange-400 font-black text-base sm:text-xl mt-1 tracking-tight">~ ₹170 / Day</p>
              <span className="text-[8px] sm:text-[9px] text-zinc-600 mt-0.5 font-normal font-sans leading-none">Price of an everyday coffee</span>
            </div>
            <div className="p-3 sm:p-4 border border-white/5 bg-black/40 rounded-xl flex flex-col justify-center shadow-inner">
              <span className="text-zinc-500 text-[9px] sm:text-[10px] uppercase block leading-tight">Tuition Format</span>
              <p className="text-white font-bold text-xs sm:text-sm mt-1 uppercase tracking-wider font-sans truncate">One-to-One Track</p>
              <span className="text-[8px] sm:text-[9px] text-zinc-600 mt-0.5 font-normal font-sans leading-none">Concept Support</span>
            </div>
            <div className="p-3 sm:p-4 border border-white/5 bg-black/40 rounded-xl flex flex-col justify-center shadow-inner">
              <span className="text-zinc-500 text-[9px] sm:text-[10px] uppercase block leading-tight">Tutor Availability</span>
              <p className="text-white font-bold text-xs sm:text-sm mt-1 uppercase tracking-wider font-sans truncate">Personal Mentor</p>
              <span className="text-[8px] sm:text-[9px] text-zinc-600 mt-0.5 font-normal font-sans leading-none">Undivided Attention</span>
            </div>
          </div>
        </div>
      </section>

      {/* DATA-CAPTURE POPUP OVERLAY WINDOW MATRIX */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-md border border-white/10 bg-zinc-950 p-6 sm:p-8 rounded-[28px] shadow-2xl space-y-6"
            >
              <button 
                type="button" onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest">Plan Selected: {selectedPlan}</span>
                <h3 className="text-xl font-black tracking-tight text-white">Help My Child Understand Concepts</h3>
                <p className="text-xs text-zinc-500">Provide registration inputs to map your student's dedicated {activeMode === "online" ? "Online" : "Home"} subject tutor.</p>
              </div>

              {modalSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-orange-500"><ShieldCheck size={22} /></div>
                  <h4 className="text-sm font-bold text-white">Admissions Request Verified!</h4>
                  <p className="text-xs text-zinc-400">Our advisor will contact your mobile line within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleModalPipelineSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-zinc-400 font-bold">Parent Name</label>
                    <input 
                      type="text" required value={modalParentName} onChange={(e) => setModalParentName(e.target.value)}
                      placeholder="Enter parent name" className="h-11 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-xs text-white focus:outline-none focus:border-orange-500/60 placeholder-zinc-700" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-zinc-400 font-bold">Mobile Number</label>
                    <input 
                      type="tel" required value={modalPhone} onChange={(e) => setModalPhone(e.target.value)}
                      placeholder="WhatsApp Mobile Number *" className="h-11 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-xs text-white focus:outline-none focus:border-orange-500/60 placeholder-zinc-700" 
                    />
                  </div>

                  <button 
                    type="submit" disabled={modalLoading}
                    className="h-11 w-full rounded-xl bg-orange-500 text-xs font-extrabold uppercase tracking-wider text-black hover:bg-orange-400 transition-all flex items-center justify-center shadow-lg shadow-orange-500/10"
                  >
                    {modalLoading ? "Processing Request..." : "Help My Child Score Better 🚀"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
