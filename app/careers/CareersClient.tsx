"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { submitCandidateApplication } from "@/services/leads"
import { sendEmailNotification } from "@/services/notify"

export default function CareersClient() {
  const router = useRouter()
  const [appType, setAppType] = useState<"Specific Opening" | "General Interest">("Specific Opening")

  // Master Form State Management
  const [name, setName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [email, setEmail] = useState("")
  const [position, setPosition] = useState("Mathematics Tutor")
  const [employmentType, setEmploymentType] = useState("Part-Time")
  const [subjectsComfortable, setSubjectsComfortable] = useState("")
  const [classesComfortable, setClassesComfortable] = useState("")
  const [experience, setExperience] = useState("")
  const [targetBoards, setTargetBoards] = useState("CBSE Only")
  const [currentCity, setCurrentCity] = useState("")
  const [resumeLink, setResumeLink] = useState("")
  const [loading, setLoading] = useState(false)

  const rawPath = typeof window !== "undefined" ? window.location.pathname : "/careers"

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !whatsapp.trim() || !email.trim() || !resumeLink.trim()) {
      alert("Please complete all mandatory fields.")
      return
    }

    try {
      setLoading(true)

      const basePayload = {
        parentName: name,
        phone: whatsapp,
        email,
        applicationType: appType,
        experience: experience || "Fresh/Entry Level",
        resumeLink,
        sourcePage: rawPath,
      }

      const specificFields = appType === "Specific Opening"
        ? { position, employmentType }
        : { subjectsComfortable, classesComfortable, targetBoards, currentCity }

      const completedData = { ...basePayload, ...specificFields }

      // @ts-ignore
      await submitCandidateApplication(completedData)

      await sendEmailNotification({
        formType: `Career Submission - ${appType}`,
        parentName: name,
        phone: whatsapp,
        sourcePage: rawPath,
        candidateEmailId: email,
        yearsOfExperience: experience || "Fresh/Entry Level",
        resumeLinkUrl: resumeLink,
        ...specificFields
      })

      alert("🎉 Application Received! Our team will review your qualifications and coordinate with you over WhatsApp shortly.")
      
      // Reset layout states cleanly
      setName("")
      setWhatsapp("")
      setEmail("")
      setSubjectsComfortable("")
      setClassesComfortable("")
      setExperience("")
      setCurrentCity("")
      setResumeLink("")
    } catch (err) {
      console.error("Submission crash error context trace:", err)
      alert("Something went wrong processing your request. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-4 py-16 md:py-24 sm:px-6 lg:px-8">
        <div className="absolute left-[-200px] top-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-orange-500/10 blur-[120px] md:blur-[180px]" />
        
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-orange-400">JOIN THE MISSION</p>
              
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] md:leading-[0.95] tracking-[-0.05em] text-white">
                Build The Future Of <span className="block text-orange-500 mt-1 md:mt-0">Personalized Learning.</span>
              </h1>

              <p className="mt-6 md:mt-8 max-w-xl text-base md:text-xl leading-relaxed text-zinc-400">
                Join UpEd's network of top-tier educators, mentors, and operators helping CBSE students achieve measurable academic breakthroughs right from home.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#open-positions"
                  className="w-full sm:w-auto text-center rounded-2xl bg-orange-500 px-8 py-4 font-bold text-black active:scale-[0.98] transition-transform duration-100"
                >
                  View Open Positions
                </a>
                <a
                  href="#apply-portal"
                  className="w-full sm:w-auto text-center rounded-2xl border border-white/10 px-8 py-4 font-bold text-white bg-white/[0.01] hover:bg-white/[0.03] active:scale-[0.98] transition-all duration-100"
                >
                  Quick Apply Form
                </a>
              </div>
            </div>

            <div>
              <Image 
                src="/images/careers/team-culture.jpg" 
                alt="UpEd Team Culture" 
                width={720}
                height={540}
                priority
                className="w-full rounded-[20px] md:rounded-[40px] object-cover aspect-[4/3] md:aspect-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center md:text-left">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-orange-400">CURRENT OPENINGS</p>
            <h2 className="mt-2 text-2xl md:text-5xl font-black text-white">Explore Open Positions</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Mathematics Tutor", dept: "Academics", type: "Part-Time / Full-Time" },
              { title: "Science Tutor", dept: "Academics", type: "Part-Time / Full-Time" },
              { title: "English Tutor", dept: "Academics", type: "Part-Time" },
              { title: "Academic Mentor", dept: "Student Success", type: "Full-Time" },
              { title: "Operations Associate", dept: "Operations", type: "Full-Time" },
            ].map((job, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-orange-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">
                    {job.dept}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{job.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{job.type}</p>
                </div>
                <a
                  href="#apply-portal"
                  onClick={() => {
                    setAppType("Specific Opening")
                    setPosition(job.title)
                  }}
                  className="mt-6 inline-block text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC FORM PORTAL */}
      <section id="apply-portal" className="px-4 py-12 md:py-24 sm:px-6 lg:px-8 bg-white/[0.01] border-t border-b border-white/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-orange-400">APPLICATION PORTAL</p>
            <h2 className="mt-2 text-3xl font-black text-white">Join the UpEd Workspace</h2>
            
            <div className="mt-6 inline-flex p-1 bg-black rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setAppType("Specific Opening")}
                className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-all active:scale-[0.97] ${appType === "Specific Opening" ? "bg-orange-500 text-black font-black" : "text-zinc-500 hover:text-white"}`}
              >
                Apply for Specific Opening
              </button>
              <button
                type="button"
                onClick={() => setAppType("General Interest")}
                className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-all active:scale-[0.97] ${appType === "General Interest" ? "bg-orange-500 text-black font-black" : "text-zinc-500 hover:text-white"}`}
              >
                General Tutor Interest
              </button>
            </div>
          </div>

          <form onSubmit={handleApplicationSubmit} className="mt-12 space-y-6 border border-white/10 bg-white/[0.01] rounded-[24px] md:rounded-[40px] p-6 md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Full Name</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Mubeen" className="h-14 w-full rounded-xl border border-white/10 bg-black px-4 text-white text-sm outline-none focus:border-orange-500/50 transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">WhatsApp Number</label>
                <input type="tel" required value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="e.g. 9876543210" className="h-14 w-full rounded-xl border border-white/10 bg-black px-4 text-white text-sm outline-none focus:border-orange-500/50 transition-colors" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Email Address ID</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="h-14 w-full rounded-xl border border-white/10 bg-black px-4 text-white text-sm outline-none focus:border-orange-500/50 transition-colors" />
              </div>
            </div>

            {appType === "Specific Opening" && (
              <div className="grid gap-5 md:grid-cols-2 p-5 bg-white/[0.01] border border-white/5 rounded-2xl">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Target Open Position</label>
                  <select value={position} onChange={(e) => setPosition(e.target.value)} className="h-14 w-full rounded-xl border border-white/10 bg-black px-4 text-white text-sm outline-none focus:border-orange-500/50 cursor-pointer text-left">
                    <option value="Mathematics Tutor">Mathematics Tutor</option>
                    <option value="Science Tutor">Science Tutor</option>
                    <option value="English Tutor">English Tutor</option>
                    <option value="Academic Mentor">Academic Mentor</option>
                    <option value="Operations Associate">Operations Associate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Commitment Type</label>
                  <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value)} className="h-14 w-full rounded-xl border border-white/10 bg-black px-4 text-white text-sm outline-none focus:border-orange-500/50 cursor-pointer text-left">
                    <option value="Part-Time">Part-Time</option>
                    <option value="Full-Time">Full-Time</option>
                  </select>
                </div>
              </div>
            )}

            {appType === "General Interest" && (
              <div className="grid gap-5 md:grid-cols-2 p-5 bg-white/[0.01] border border-white/5 rounded-2xl">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Subject Taken / Expertise</label>
                  <input type="text" value={subjectsComfortable} onChange={(e) => setSubjectsComfortable(e.target.value)} placeholder="e.g. Mathematics, Physics" className="h-14 w-full rounded-xl border border-white/10 bg-black px-4 text-white text-sm outline-none focus:border-orange-500/50 transition-colors" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Classes Comfortable Teaching</label>
                  <input type="text" value={classesComfortable} onChange={(e) => setClassesComfortable(e.target.value)} placeholder="e.g. Class 9, Class 10, Class 11" className="h-14 w-full rounded-xl border border-white/10 bg-black px-4 text-white text-sm outline-none focus:border-orange-500/50 transition-colors" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Preferred Educational Board</label>
                  <select value={targetBoards} onChange={(e) => setTargetBoards(e.target.value)} className="h-14 w-full rounded-xl border border-white/10 bg-black px-4 text-white text-sm outline-none focus:border-orange-500/50 cursor-pointer text-left">
                    <option value="CBSE Only">CBSE Curriculum</option>
                    <option value="CBSE & ICSE">CBSE + ICSE Spectrum</option>
                    <option value="Multiple Boards">All Boards (Inc. State / IGCSE)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Current Location / City</label>
                  <input type="text" value={currentCity} onChange={(e) => setCurrentCity(e.target.value)} placeholder="e.g. Chennai, Tamil Nadu" className="h-14 w-full rounded-xl border border-white/10 bg-black px-4 text-white text-sm outline-none focus:border-orange-500/50 transition-colors" />
                </div>
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Total Years of Experience</label>
                <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="e.g. 3 Years teaching context" className="h-14 w-full rounded-xl border border-white/10 bg-black px-4 text-white text-sm outline-none focus:border-orange-500/50 transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Resume Link (Google Drive / LinkedIn)</label>
                <input type="url" required value={resumeLink} onChange={(e) => setResumeLink(e.target.value)} placeholder="Paste your shared folder URL here" className="h-14 w-full rounded-xl border border-white/10 bg-black px-4 text-white text-sm outline-none focus:border-orange-500/50 transition-colors placeholder-zinc-600" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 rounded-xl bg-orange-500 font-black text-black text-sm md:text-base hover:bg-orange-600 active:scale-[0.98] transition-all disabled:bg-zinc-800 disabled:text-zinc-500 shadow-lg shadow-orange-500/10"
            >
              {loading ? "Processing Profile Documents..." : "Submit Application Form 🚀"}
            </button>
          </form>
        </div>
      </section>

      {/* SELECTION PROCESS */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-orange-400">OUR PROCESS</p>
            <h2 className="mt-2 text-2xl md:text-5xl font-black text-white">How We Select Elite Tutors</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "01", title: "Profile Screening", desc: "We evaluate background credentials, past student tracking metrics, and board knowledge." },
              { num: "02", title: "Live Mock Session", desc: "Candidates present a 15-minute live concept lesson demonstrating interactive child engagement." },
              { num: "03", title: "Methodology Alignment", desc: "Tutors undergo orientation on UpEd's structured learning and progress reporting frameworks." },
              { num: "04", title: "Student Matching", desc: "Verified tutors are systematically matched with parents based on proximity, grade tier, and subject goals." }
            ].map((step, idx) => (
              <div key={idx} className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 text-left">
                <div className="text-3xl font-black text-orange-500/20">{step.num}</div>
                <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-zinc-400 text-xs md:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[20px] md:rounded-[40px] border border-orange-500/20 bg-orange-500/[0.05] p-6 md:p-12 text-center">
          <h2 className="text-2xl md:text-5xl font-black text-white">Shape The Future Of<br />CBSE Education.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-lg text-zinc-400">Join UpEd to work with premium families, enjoy competitive payouts, and guide students toward true board success.</p>
          <a href="#apply-portal" className="mt-6 md:mt-8 inline-block w-full sm:w-auto rounded-xl bg-orange-500 px-8 py-4 font-bold text-black active:scale-[0.98] transition-transform">Start Application Now</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}