"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { submitAssessmentRequest } from "@/services/leads"
import { sendEmailNotification } from "@/services/notify"

export default function AboutClient() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [parentName, setParentName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [loading, setLoading] = useState(false)

  const rawPath = typeof window !== "undefined" ? window.location.pathname : "/about"

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!parentName.trim() || !whatsapp.trim()) {
      alert("Please fill out both Name and WhatsApp Phone Number fields.")
      return
    }

    try {
      setLoading(true)
      await submitAssessmentRequest({
        parentName,
        phone: whatsapp,
        sourcePage: rawPath,
        notes: "Requested a Free Academic Assessment booking call via the About Us story page.",
      })

      await sendEmailNotification({
        formType: "About Us Page - Free Assessment Lead",
        parentName,
        phone: whatsapp,
        sourcePage: rawPath,
      })

      alert("🎉 Assessment Request Received! Our lead mentor will coordinate your scheduling slot over WhatsApp shortly.")
      setParentName("")
      setWhatsapp("")
      setIsModalOpen(false)
    } catch (err) {
      console.error("Transmission error:", err)
      alert("Something went wrong processing your request. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* OUR JOURNEY */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-16 text-center">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-orange-400">OUR JOURNEY</p>
            <h2 className="mt-4 text-3xl md:text-6xl font-black text-white">
              Building Trust <span className="block text-orange-500 mt-1 md:mt-0">One Family At A Time</span>
            </h2>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Image src="/images/about/vr-mall-uped.jpg" alt="UpEd at VR Mall Chennai" width={720} height={540} priority className="w-full rounded-[20px] md:rounded-[40px] border border-white/10 object-cover aspect-[4/3] md:aspect-auto" />
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-black text-white leading-snug">From Community Events To Personalized Learning</h3>
              <p className="mt-4 md:mt-6 text-sm md:text-lg text-zinc-400 leading-relaxed">
                Long before scaling our academic programs, we spent time meeting parents face-to-face, listening to their concerns and understanding the challenges students were experiencing.
              </p>
              <div className="mt-8 grid gap-4 grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <h4 className="text-2xl font-black text-orange-500">100+</h4>
                  <p className="text-xs text-zinc-400">Parent Conversations</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <h4 className="text-2xl font-black text-orange-500">1 Vision</h4>
                  <p className="text-xs text-zinc-400">Personalized Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[24px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-black p-6 md:p-16 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">OUR MISSION</p>
            <h2 className="mt-4 text-3xl md:text-7xl font-black text-white">Every Child <span className="block text-orange-500">Deserves A Mentor.</span></h2>
          </div>
        </div>
      </section>

      {/* HOW WE TEACH */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-orange-400">THE UPED FRAMEWORK</p>
            <h2 className="mt-4 text-2xl md:text-5xl font-black text-white">How We Teach</h2>
          </div>

          <div className="mt-8 md:mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "📘", title: "Concept Learning", desc: "Build deep understanding instead of memorizing answers." },
              { emoji: "✍️", title: "Guided Practice", desc: "Reinforce learning through worksheets, assignments, and problem solving." },
              { emoji: "📊", title: "Testing", desc: "Regular assessments help identify strengths and weak areas." },
              { emoji: "👨‍👩‍👧", title: "Parent Reviews", desc: "Transparent communication and continuous academic monitoring." }
            ].map((item, idx) => (
              <div key={idx} className="rounded-[20px] md:rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <div className="text-3xl md:text-5xl">{item.emoji}</div>
                <h3 className="mt-4 md:mt-6 text-lg md:text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-2 text-xs md:text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-orange-400">FOUNDER STORY</p>
              <h2 className="mt-4 text-2xl md:text-5xl font-black text-white leading-tight">Education Is Not About Teaching More.</h2>
              <h2 className="mt-1 text-2xl md:text-5xl font-black text-orange-500 leading-tight">It's About Guiding Better.</h2>
              <p className="mt-6 text-sm text-zinc-400 leading-relaxed">UpEd was founded with a simple mission: to ensure every student receives individualized guidance that helps them become confident, independent learners.</p>
            </div>
            <div className="order-1 lg:order-2">
              <Image src="/images/about/Founder.JPG" alt="Founder" width={720} height={540} className="w-full rounded-[20px] md:rounded-[40px] border border-white/10 object-cover aspect-[4/3] md:aspect-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[24px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-black to-black p-6 text-center">
          <h2 className="text-2xl md:text-7xl font-black text-white">Let's Build <span className="block text-orange-500">Your Child's</span> Success Story.</h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => setIsModalOpen(true)} className="rounded-2xl bg-orange-500 px-8 py-4 font-bold text-black active:scale-[0.98] transition-transform">
              Book Free Assessment
            </button>
            <button onClick={() => router.push("/programs")} className="rounded-2xl border border-white/10 px-8 py-4 font-bold text-white bg-white/[0.01] hover:bg-white/[0.04] active:scale-[0.98] transition-all">
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* DRAWER POPUP */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-md rounded-t-[28px] sm:rounded-3xl border-t sm:border border-white/10 bg-[#0d0d0d] p-6 text-left shadow-2xl z-10">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-zinc-500 font-bold">✕</button>
            <h3 className="text-xl font-black text-white">Secure Your Slot</h3>
            <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-[11px] text-zinc-400 mb-1">Parent Name</label>
                <input type="text" required value={parentName} onChange={(e) => setParentName(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-white text-sm focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-[11px] text-zinc-400 mb-1">WhatsApp Number</label>
                <input type="tel" required value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-white text-sm focus:outline-none focus:border-orange-500" />
              </div>
              <button type="submit" disabled={loading} className="w-full rounded-xl bg-orange-500 py-4 font-extrabold text-black active:scale-[0.98] transition-all">
                {loading ? "Registering..." : "Confirm Booking 🚀"}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
