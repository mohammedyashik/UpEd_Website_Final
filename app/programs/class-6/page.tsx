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

// Native Firebase pipelines
import { submitContactPageForm } from "@/services/leads"
import { sendEmailNotification } from "@/services/notify"

const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainerVariant: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function ClassSixLanding() {
  const [parentName, setParentName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const pricingData = {
    online: [
      { plan: "Starter Plan", subjects: "1 Subject Focus", classes: "8 Classes / Month", fee: "₹2,999", perClass: "₹374", desc: "Perfect for giving your child targeted help to clear up confusion in their toughest subject." },
      { plan: "Growth Plan ⭐", subjects: "2 Subjects Combo", classes: "16 Classes / Month", fee: "₹5,499", perClass: "₹343", desc: "Our most loved plan. Builds complete concept confidence in both Mathematics and Science.", popular: true },
      { plan: "Excellence Plan", subjects: "Full 3-Subject Track", classes: "24 Classes / Month", fee: "₹7,499", perClass: "₹312", desc: "Total academic peace of mind. Full daily support across all core school board subjects." }
    ],
    home: [
      { plan: "Starter Plan", subjects: "1 Subject Focus", classes: "8 Classes / Month", fee: "₹4,499", perClass: "₹562", desc: "Dedicated home tutor doorstep guidance to pull your child out of any academic stress." },
      { plan: "Growth Plan ⭐", subjects: "2 Subjects Combo", classes: "16 Classes / Month", fee: "₹7,999", perClass: "₹499", desc: "Our most loved plan. Strongest focus track for deep Class 6 Maths and Science school board mastery.", popular: true },
      { plan: "Excellence Plan", subjects: "Full 3-Subject Track", classes: "24 Classes / Month", fee: "₹10,999", perClass: "₹458", desc: "Comprehensive home tuition support tailored completely across major school subjects." }
    ]
  }

  const [activeMode, setActiveMode] = useState<"online" | "home">("online")
  const [selectedPlan, setSelectedPlan] = useState<string>("Growth Plan ⭐")

  const rawPath = typeof window !== "undefined" ? window.location.pathname : "/programs/class-6"

  const handlePipelineSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone.trim()) return

    try {
      setLoading(true)
      const currentPlanDetails = pricingData[activeMode].find(p => p.plan === selectedPlan)

      const payloadData = {
        parentName: parentName.trim() || "Class 6 Lead",
        phone: phone.trim(),
        studentName: "Not Provided (Class VI Dedicated Hub)",
        studentClass: "Class 6",
        subjectsRequired: `${currentPlanDetails?.subjects} (${currentPlanDetails?.classes})`,
        learningMode: activeMode === 'online' ? 'Class 6 Online Tuition' : 'Class 6 Home Tuition',
        academicGoals: `Selected Plan: ${selectedPlan} (${currentPlanDetails?.fee}/month)`,
        sourcePage: `${rawPath} [Mobile Optimized Funnel]`,
      }

      await submitContactPageForm(payloadData)
      await sendEmailNotification({
        formType: "Class 6 Academic Growth Consultation Request",
        ...payloadData
      })

      setSubmitSuccess(true)
      setTimeout(() => {
        setSubmitSuccess(false)
        setParentName("")
        setPhone("")
      }, 4000)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col justify-between font-sans subpixel-antialiased selection:bg-orange-500/30">
      <Navbar />

      {/* SECTION 1: HERO & ADMISSIONS CONTAINER */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full grid gap-12 lg:grid-cols-12 items-center min-h-[85vh]">
        <div className="absolute left-[-150px] top-[-100px] h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-orange-500/[0.05] blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainerVariant}
          className="lg:col-span-7 space-y-8 text-left"
        >
          <motion.span variants={fadeInUpVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-xs font-mono font-bold tracking-widest text-orange-400 uppercase">
            <Sparkles size={12} className="text-orange-400 animate-pulse" /> UNLOCK YOUR CHILD'S TRUE POTENTIAL
          </motion.span>
          
          <motion.h1 variants={fadeInUpVariant} className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-[-0.04em]">
            Class 6 Home & <br />
            <span className="text-orange-500 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Online Tuition</span><br />
            Build Strong Concepts. <br />
            Improve Confidence.
          </motion.h1>
          
          <motion.div variants={fadeInUpVariant} className="space-y-4 max-w-xl">
            <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
              <AlertCircle size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                Class 6 is a critical turning point. Lessons shift quickly from simple facts to deeper, concept-based thinking in <strong className="text-white">Mathematics and Science</strong>.
              </p>
            </div>

            <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
              <CheckCircle2 size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                Our personalized <strong className="text-white">one-to-one tuition</strong> gives your child patient, undivided attention to master tough topics, clear homework stress, and perform beautifully at school.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpVariant} className="space-y-3 pt-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block font-bold">Specialized Learning Tracks Available</span>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-zinc-200">
              {["Class 6 Home Tuition", "Class 6 Online Tuition", "Class 6 Maths Tuition", "Class 6 Science Tuition", "CBSE Class 6 Tuition", "Personalized One-to-One Tuition"].map((sub) => (
                <span key={sub} className="bg-zinc-900 border border-white/10 px-3 py-2 rounded-xl shadow-md backdrop-blur-sm hover:border-orange-500/30 transition-colors duration-300 cursor-default">
                  {sub}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* HERO FAMILY ADMISSIONS INTERFACE */}
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 shadow-2xl space-y-4">
            <div>
              <h3 className="text-base font-black tracking-tight flex items-center gap-2">
                <Zap size={16} className="text-orange-500 fill-orange-500/20" /> Claim Your Free Consultation
              </h3>
            </div>

            {submitSuccess ? (
              <div className="py-6 text-center space-y-2">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-orange-500"><ShieldCheck size={20} /></div>
                <h4 className="text-xs font-bold text-white">Consultation Requested!</h4>
                <p className="text-[11px] text-zinc-400">Our academic advisor will call you within 2 hours to walk you through your child's personalized plan.</p>
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
                  {loading ? "Processing Details..." : "Help My Child Understand Concepts"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: WHY PARENTS CHOOSE UPED COMPONENT (SCROLL-FREE DESIGN WITH HIGH COLOR CONTRAST) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="max-w-2xl mb-12 text-left">
          <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">THE UPED DIFFERENCE</p>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-1">Why Parents Choose UpEd</h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">A tutor can help your child complete lessons. UpEd goes far beyond tutoring.</p>
        </div>

        {/* FULLY RESPONSIVE SCROLL-FREE CARD LAYOUT FOR SCREEN WIDTH READABILITY */}
        <div className="grid gap-4 w-full">
          {[
            { title: "One-to-One Personalized Learning Focus", local: "Crowded batches where quiet children get hidden", uped: "100% individual attention completely tailored to your child's natural learning speed" },
            { title: "Tutor Screening & Safety Verification", local: "Unverified neighborhood options with fluctuating quality", uped: "Rigorous background checks and multi-stage subject expert verification" },
            { title: "Structured Learning Roadmap", local: "Ad-hoc, lesson-by-lesson reactive explanation", uped: "Proactive lesson planning mapped closely with school terminal targets" },
            { title: "Progress Tracking & Analytics", local: "No clear data feedback or objective milestones", uped: "Deep, diagnostic evaluation logs to stop recurring error paths" },
            { f: "Regular Assessment Syncs", title: "Continuous Concept Checkpoints", local: "Assessments are rare or highly stressful", uped: "Warm, supportive checks to naturally measure learning growth" },
            { title: "Detailed Parent Progress Updates", local: "Rarely kept in the loop regarding actual performance", uped: "Regular transparent feedback matrices straight to your mobile" },
            { title: "Tutor Replacement & Continuous Team Support", local: "Left stranded or forced to search again if a tutor quits", uped: "Dedicated support specialists with immediate backup guarantee" }
          ].map((item, index) => (
            <div key={index} className="grid md:grid-cols-12 border border-white/5 bg-zinc-950 rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/5 shadow-md">
              <div className="md:col-span-4 p-4 bg-white/[0.01] flex items-center">
                <h4 className="text-xs sm:text-sm font-extrabold text-white leading-snug">{item.title}</h4>
              </div>
              <div className="md:col-span-4 p-4 text-zinc-600 opacity-40 bg-red-500/[0.005] flex items-center gap-2">
                <XCircle size={14} className="text-zinc-700 flex-shrink-0 mt-0.5" />
                <span className="text-xs font-normal leading-normal">{item.local}</span>
              </div>
              <div className="md:col-span-4 p-4 text-orange-400 bg-orange-500/[0.015] border border-orange-500/20 flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm leading-normal">{item.uped}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[24px] border border-white/5 bg-zinc-900/30 p-6 sm:p-8 grid gap-6 md:grid-cols-12 items-center text-left">
          <div className="md:col-span-5 space-y-1">
            <span className="text-[10px] font-mono text-orange-400 tracking-wider uppercase font-bold">HELPING EVERY STUDENT REACH POTENTIAL</span>
            <h4 className="text-lg font-black tracking-tight text-white font-sans">Our goal is simple: Help your child learn better, score better, and become more confident every day.</h4>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              We provide personalized learning plans, regular assessments, progress tracking, and dedicated academic support. Whether you choose an online tutor or an in-home mentor, our system guarantees continuous quality standards to protect your child's classroom scores.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS CHRONOLOGICAL JOURNEY (MAPPED WITH VIBRANT NATIVE MEDIA IMAGES) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent">
        <div className="max-w-2xl mb-16 text-left">
          <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">THE SYSTEM IN ACTION</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">How We Build The Journey For Your Child</h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">We remove academic anxiety by laying a welcoming, step-by-step foundation of deep concept guidance and structured safety.</p>
        </div>

        <div className="space-y-24">
          {[
            { step: "01", title: "Understand Your Child's Current Level", desc: "We run a quiet, friendly benchmark check to find exactly where core operations, formula foundations, or reading habits are experiencing blocks.", img: "/images/how-it-works/student-assessment.jpg" },
            { step: "02", title: "Discuss Your Child's Academic Needs", desc: "Our advisor uncovers real obstacles together with you—tackling exam fear, class pacing limits, or low test confidence caused by dense batch spaces.", img: "/images/how-it-works/parent-concern.jpg" },
            { step: "03", title: "Get Matched With the Right Tutor", desc: "We map your student with a screened, background-verified expert whose specific teaching temperament clicks naturally with your child's personality profile.", img: "/images/how-it-works/mentor-profile.jpg" },
            { step: "04", title: "Start Personalized One-to-One Classes", desc: "Tuitions launch inside a private, comfortable learning workspace. The tutor dedicates complete personal attention to answer questions safely at your student's unique speed.", img: "/images/how-it-works/student-mentor.jpg" },
            { step: "05", title: "Practice, Homework & Concept Reinforcement", desc: "Tutors support daily school assignments and textbook reinforcement, tracking common error loops to fix calculation skips without any test stress.", img: "/images/how-it-works/guided-practice.jpg" },
            { step: "06", title: "Regular Parent Progress Updates", desc: "Total transparency regarding academic performance tracking. You receive clear metric indicators showing exactly what has been understood and milestones achieved.", img: "/images/how-it-works/parent-review.jpg" },
            { step: "07", title: "Continuous Academic Improvement", desc: "Continuous planning adapts schedule lines around family calendars, school board dates, and rank acceleration tracks to ensure seamless concept mastery.", img: "/images/how-it-works/mentor-parent-review.jpg" }
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

      {/* SECTION 4: TUITION FEE GRIDS WITH HIGH AFFORDABILITY CLASS PRICE METRICS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="text-left space-y-1">
            <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">TRANSPARENT COST TIERS</p>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">Program Tuition Fee Grid</h2>
          </div>
          
          <div className="flex p-1 rounded-xl bg-zinc-900 border border-white/10 w-fit">
            <button type="button" onClick={() => setActiveMode("online")} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeMode === "online" ? "bg-orange-500 text-black shadow-sm font-black" : "text-zinc-400"}`}>Online Tuition</button>
            <button type="button" onClick={() => setActiveMode("home")} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeMode === "home" ? "bg-orange-500 text-black shadow-sm font-black" : "text-zinc-400"}`}>Home Tuition</button>
          </div>
        </div>

        <motion.div layout="position" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left items-stretch">
          <AnimatePresence mode="popLayout">
            {pricingData[activeMode].map((item) => (
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
                    onClick={() => { setSelectedPlan(item.plan); window.scrollTo({ top: 0, behavior: "smooth" }) }}
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

      {/* SECTION 5: WHY UPED WORKS PROGRAM BENEFITS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-2xl mb-12 text-left space-y-1">
          <p className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">WHY UPED WORKS</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Structured Academic Excellence</h2>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left items-stretch">
          {[
            { icon: Users, title: "One-to-One Tuition Focus", desc: "No batch pacing roadblocks. Attention remains locked entirely on your child's active understanding speed." },
            { icon: Compass, title: "Homework & Assignment Support", desc: "Daily school challenges, equations, and textbook tasks are supportively broken down by our tutors." },
            { icon: Award, title: "Regular Assessment Syncs", desc: "Periodic diagnostic check-ins to dissolve historical friction paths and clear way for upcoming school exams." },
            { icon: Laptop, title: "Parent Progress Reports", desc: "Absolute clarity. Regular data updates ensure you stay aligned with active score acceleration tracks." },
            { icon: Clock, title: "Flexible Scheduling Format", desc: "Classes match naturally with your domestic timeline and alternative weekend sports operations." },
            { icon: Shield, title: "Structured Learning Approach", desc: "Every class follows a structured learning plan designed to improve understanding, school performance, and real confidence." }
          ].map((item, index) => (
            <div key={index} className="p-6 border border-white/5 bg-zinc-900/[0.08] rounded-2xl space-y-3 flex flex-col items-start hover:border-white/10 transition-colors duration-300">
              <div className="h-9 w-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <item.icon size={16} />
              </div>
              <h5 className="font-extrabold text-white text-base font-sans leading-snug">{item.title}</h5>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: STUDENT PROGRESS EVOLUTION LOOP VISUALS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="bg-[#0A0A0A] rounded-[24px] sm:rounded-[32px] border border-white/10 p-6 sm:p-10 text-center space-y-12 shadow-2xl">
          <h4 className="text-2xl sm:text-3xl font-black text-center">Watch Your Child's Concept Mastery Accelerate</h4>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 items-stretch">
            {[
              { label: "Anxious Learner", img: "/images/results/student-1.png", desc: "Feeling lost or left behind under fast-moving classroom pressures." },
              { label: "Personalized Support", img: "/images/results/student-2.png", desc: "Discovering weak parameters through cozy, patient tutoring tools." },
              { label: "Concept Understanding", img: "/images/results/student-3.png", desc: "Completing textbook lessons and school tasks with clear mastery." },
              { label: "Confident Achiever", img: "/images/results/student-4.png", desc: "Performing better in school terms with verified, high self-belief indicators." }
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

      {/* SECTION 7: WHAT PARENTS SAY ABOUT UPED SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-xl mb-12 text-left space-y-2">
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider font-mono">VERIFIED ACCOUNTABILITY</p>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">What Parents Say About UpEd</h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-normal">Hear from parents who have seen real improvements in their child's academic performance and confidence.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-left items-stretch">
          {[
            { p: "Dr. Arvinda Kumar", r: "The personalized attention is exceptional. UpEd found exactly why my daughter's score dipped in Class 6 Maths Tuition assignments and cleared it up fast. Outstanding progress.", c: "Parent of Middle School Student", o: "Concept Growth: High" },
            { p: "Meenakshi Sundaram", r: "We tried neighborhood tutors but my child felt hidden or forced to rush. UpEd's custom pacing blueprint completely restored their academic confidence.", c: "Parent of Class 6 Student", o: "Marks Improved Sharply" },
            { p: "Rajesh K. Sharma", r: "Highly recommended online tutor matching process. Our mentor coordinates smoothly around family routines, providing excellent concept reinforcement.", c: "Parent of Class 6 Student", o: "Excellent Tutor Quality" }
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

      {/* SECTION 8: VALUE PSYCHOLOGY VALUE FRAMING */}
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
              <span className="text-zinc-500 text-[9px] sm:text-[10px] uppercase block font-bold leading-tight">Daily Micro-Investment</span>
              <p className="text-orange-400 font-black text-base sm:text-xl mt-1 tracking-tight">~ ₹170 / Day</p>
              <span className="text-[8px] sm:text-[9px] text-zinc-600 mt-0.5 font-normal font-sans leading-none">Price of a daily coffee</span>
            </div>
            <div className="p-3 sm:p-4 border border-white/5 bg-black/40 rounded-xl flex flex-col justify-center shadow-inner">
              <span className="text-zinc-500 text-[9px] sm:text-[10px] uppercase block font-bold leading-tight">Tuition Tier</span>
              <p className="text-white font-bold text-xs sm:text-sm mt-1 uppercase tracking-wider font-sans truncate">One-to-One Track</p>
              <span className="text-[8px] sm:text-[9px] text-zinc-600 mt-0.5 font-normal font-sans leading-none">Concept Support</span>
            </div>
            <div className="p-3 sm:p-4 border border-white/5 bg-black/40 rounded-xl flex flex-col justify-center shadow-inner">
              <span className="text-zinc-500 text-[9px] sm:text-[10px] uppercase block font-bold leading-tight">Tutor Availability</span>
              <p className="text-white font-bold text-xs sm:text-sm mt-1 uppercase tracking-wider font-sans truncate">Dedicated Expert</p>
              <span className="text-[8px] sm:text-[9px] text-zinc-600 mt-0.5 font-normal font-sans leading-none">Undivided Attention</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}