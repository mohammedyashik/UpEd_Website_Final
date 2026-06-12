"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { submitContactPageForm } from "@/services/leads"
import { sendEmailNotification } from "@/services/notify"

export default function ContactClient() {
  const router = useRouter()
  const [parentName, setParentName] = useState("")
  const [phone, setPhone] = useState("")
  const [studentName, setStudentName] = useState("")
  const [studentClass, setStudentClass] = useState("Class 1")
  const [subjectsRequired, setSubjectsRequired] = useState("")
  const [learningMode, setLearningMode] = useState("Home Tuition")
  const [academicGoals, setAcademicGoals] = useState("")
  const [loading, setLoading] = useState(false)

  const rawPath = typeof window !== "undefined" ? window.location.pathname : "/contact"
  const whatsappNumber = "919443594438"

  const openWhatsAppWorkspace = () => {
    const customMessage = encodeURIComponent("Hello UpEd! I was exploring your contact page and would like to coordinate a free academic advisor consultation for my child.")
    window.open(`https://wa.me/${whatsappNumber}?text=${customMessage}`, "_blank")
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!parentName.trim() || !phone.trim() || !subjectsRequired.trim()) {
      alert("Please fill out Parent Name, Contact Number, and Required Subjects.")
      return
    }

    try {
      setLoading(true)
      const payloadData = {
        parentName,
        phone,
        studentName: studentName || "Not Provided",
        studentClass,
        subjectsRequired,
        learningMode,
        academicGoals: academicGoals || "Not Provided",
        sourcePage: rawPath,
      }

      await submitContactPageForm(payloadData)

      await sendEmailNotification({
        formType: "Contact Page - Comprehensive Assessment Form",
        ...payloadData
      })

      alert("🎉 Details Submitted Successfully! An UpEd advisor will connect with you on WhatsApp shortly.")
      setParentName("")
      setPhone("")
      setStudentName("")
      setSubjectsRequired("")
      setAcademicGoals("")
    } catch (err) {
      console.error("Contact Form Pipeline Failure:", err)
      alert("Something went wrong processing your submission. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black flex flex-col justify-between text-white selection:bg-orange-500/30">
      {/* GLOBAL NAVBAR COMPONENT */}
      <Navbar />

      {/* PRIMARY CENTRALIZED LAYOUT WRAPPER ENGINE */}
      <div className="flex-grow w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-20 md:space-y-28">
        
        {/* TOP COMPREHENSIVE HERO SECTION GRID GRID */}
        <section className="relative grid items-center gap-12 lg:grid-cols-12 overflow-hidden w-full">
          <div className="absolute left-[-250px] top-[-100px] h-[400px] w-[400px] rounded-full bg-orange-500/[0.07] blur-[140px] pointer-events-none" />
          
          {/* LEFT SIDE METRICS COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8 z-10">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-orange-400">CONTACT UPED</p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-[-0.04em]">
              Let's Talk About <span className="text-orange-500 block sm:inline">Your Child's Future.</span>
            </h1>

            <p className="max-w-xl text-base md:text-lg leading-relaxed text-zinc-400">
              Questions about specialized programs, custom pricing parameters, mentor matching frameworks, or dynamic scheduling options? Our senior advisors are standing by to clarify.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={openWhatsAppWorkspace} 
                className="w-full sm:w-auto rounded-xl bg-green-500 px-8 h-14 font-bold text-black hover:bg-green-600 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/10"
              >
                WhatsApp Us
              </button>
              <button 
                onClick={() => router.push("/programs")} 
                className="w-full sm:w-auto rounded-xl border border-white/10 px-8 h-14 font-bold text-white bg-white/[0.01] hover:bg-white/[0.04] active:scale-[0.98] transition-all flex items-center justify-center"
              >
                Explore Programs
              </button>
            </div>
          </div>

          {/* RIGHT SIDE QUICK CARD CONTAINER MODULE */}
          <div className="lg:col-span-5 w-full z-10">
            <div className="rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:p-10 space-y-6 shadow-2xl backdrop-blur-md">
              <h3 className="text-xl md:text-2xl font-black tracking-tight">Quick Contact Details</h3>
              <div className="space-y-4 border-t border-white/5 pt-5">
                <div>
                  <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Phone Support</p>
                  <p className="mt-1 text-lg font-bold text-zinc-200">+91 94435 94438</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Email Channels</p>
                  <p className="mt-1 text-lg font-bold text-zinc-200">support@uped.in</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM FORM LAYER MODULE CONFIG */}
        <section className="w-full z-10 relative">
          <div className="mx-auto max-w-4xl rounded-[28px] md:rounded-[40px] border border-white/10 bg-white/[0.02] p-8 md:p-12 shadow-2xl backdrop-blur-md">
            <div className="text-center space-y-3 mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">FREE ACADEMIC ASSESSMENT</p>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight">Tell Us About Your Child</h2>
              <p className="text-xs md:text-sm text-zinc-400 max-w-md mx-auto">Our academic mentors analyze your specific target descriptors below to isolate standard capability gaps within 10 minutes.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col space-y-1.5">
                  <input 
                    type="text" 
                    required 
                    value={parentName} 
                    onChange={(e) => setParentName(e.target.value)} 
                    placeholder="Parent Name *" 
                    className="h-14 w-full rounded-xl border border-white/10 bg-black/50 px-5 text-white text-sm focus:outline-none focus:border-orange-500/60 placeholder-zinc-600 transition-colors" 
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <input 
                    type="tel" 
                    required 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder="WhatsApp Number *" 
                    className="h-14 w-full rounded-xl border border-white/10 bg-black/50 px-5 text-white text-sm focus:outline-none focus:border-orange-500/60 placeholder-zinc-600 transition-colors" 
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <input 
                    type="text" 
                    value={studentName} 
                    onChange={(e) => setStudentName(e.target.value)} 
                    placeholder="Student Name" 
                    className="h-14 w-full rounded-xl border border-white/10 bg-black/50 px-5 text-white text-sm focus:outline-none focus:border-orange-500/60 placeholder-zinc-600 transition-colors" 
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <select 
                    value={studentClass} 
                    onChange={(e) => setStudentClass(e.target.value)} 
                    className="h-14 w-full rounded-xl border border-white/10 bg-black/50 px-5 text-white text-sm focus:outline-none focus:border-orange-500/60 cursor-pointer appearance-none"
                  >
                    {Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`).map((cls) => (
                      <option key={cls} value={cls} className="bg-zinc-950 text-white">{cls}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2 flex flex-col space-y-1.5">
                  <input 
                    type="text" 
                    required 
                    value={subjectsRequired} 
                    onChange={(e) => setSubjectsRequired(e.target.value)} 
                    placeholder="Subjects Required (e.g. Mathematics, Physics) *" 
                    className="h-14 w-full rounded-xl border border-white/10 bg-black/50 px-5 text-white text-sm focus:outline-none focus:border-orange-500/60 placeholder-zinc-600 transition-colors" 
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <textarea 
                  value={academicGoals} 
                  onChange={(e) => setAcademicGoals(e.target.value)} 
                  placeholder="Tell us about your child's specific academic challenges, target goals, or past performance metrics..." 
                  className="min-h-[140px] w-full rounded-xl border border-white/10 bg-black/50 p-5 text-white text-sm focus:outline-none focus:border-orange-500/60 resize-none placeholder-zinc-600 transition-colors" 
                />
              </div>

              <button 
                type="submit" 
                disabled={loading} 
                className="h-14 w-full rounded-xl bg-orange-500 font-extrabold text-black active:scale-[0.99] disabled:bg-zinc-800 disabled:text-zinc-500 shadow-lg shadow-orange-500/10 transition-all text-sm md:text-base flex items-center justify-center"
              >
                {loading ? "Registering Diagnosis Parameters..." : "Book Free Academic Assessment 🚀"}
              </button>
            </form>
          </div>
        </section>

      </div>

      {/* GLOBAL FOOTER COMPONENT */}
      <Footer />
    </main>
  )
}