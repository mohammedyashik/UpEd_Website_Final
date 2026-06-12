"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { submitAssessmentRequest } from "@/services/leads"
import { sendEmailNotification } from "@/services/notify"

export default function HowItWorksClient() {
  const router = useRouter()
  
  // Responsive Overlay Form State Parameters
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [parentName, setParentName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [loading, setLoading] = useState(false)

  const rawPath = typeof window !== "undefined" ? window.location.pathname : "/how-it-works"

  // Unified Lead Submission Pipeline
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!parentName.trim() || !whatsapp.trim()) {
      alert("Please fill out both Name and WhatsApp Phone Number fields.")
      return
    }

    try {
      setLoading(true)

      // 1. Log structural metrics directly to your clean "assessment_leads" folder
      await submitAssessmentRequest({
        parentName,
        phone: whatsapp,
        sourcePage: rawPath,
        notes: "Requested a Free Academic Assessment via Mobile/Desktop interface.",
      })

      // 2. Dispatch a clean real-time summary notification alert email right to your inbox
      await sendEmailNotification({
        formType: "How It Works - Free Assessment Lead",
        parentName,
        phone: whatsapp,
        sourcePage: rawPath,
      })

      alert("🎉 Request Received! Our lead mentor will message you on WhatsApp shortly to coordinate your slot.")
      
      // 3. Reset workspace context states and close view drawers cleanly
      setParentName("")
      setWhatsapp("")
      setIsModalOpen(false)
    } catch (err) {
      console.error("Submission error exception trace context:", err)
      alert("Something went wrong processing your request. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black">
      {/* GLOBAL INTERACTIVE NAVBAR */}
      <Navbar onBookClick={() => setIsModalOpen(true)} />

      {/* STICKY PROGRESS INDICATOR */}
      <div className="sticky top-0 z-20 border-b border-white/10 bg-black/90 py-4 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 overflow-x-auto pb-1 text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 md:gap-8 md:text-sm md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="text-orange-500 shrink-0">01 Concern</span>
            <span className="shrink-0 text-zinc-400">02 Assessment</span>
            <span className="shrink-0 text-zinc-400">03 Mentor</span>
            <span className="shrink-0 text-zinc-400">04 Learn</span>
            <span className="shrink-0 text-zinc-400">05 Practice</span>
            <span className="shrink-0 text-zinc-400">06 Test</span>
            <span className="shrink-0 text-zinc-400">07 Grow</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="absolute left-[-200px] top-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-orange-500/10 blur-[120px] md:blur-[180px]" />
        
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-left">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-orange-400">HOW UPED WORKS</p>

              <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] md:leading-[0.95] tracking-[-0.05em] text-white">
                Every Academic <span className="block text-orange-500 mt-1 md:mt-0">Success Story</span> Starts At Home.
              </h1>

              <p className="mt-6 md:mt-8 max-w-xl text-base md:text-xl leading-relaxed text-zinc-400">
                UpEd combines personalized mentoring, structured learning and continuous parent involvement to help students achieve consistent academic growth.
              </p>

              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto rounded-2xl bg-orange-500 px-8 py-4 font-bold text-black text-center active:scale-[0.98] transition-transform duration-100"
                >
                  Book Free Assessment
                </button>

                <button
                  onClick={() => router.push("/programs")}
                  className="w-full sm:w-auto rounded-2xl border border-white/10 px-8 py-4 font-bold text-white text-center active:scale-[0.98] transition-all duration-100 bg-white/[0.01] hover:bg-white/[0.03]"
                >
                  Explore Programs
                </button>
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <Image 
                src="/images/how-it-works/student-mentor.jpg" 
                alt="UpEd Learning Solutions Framework" 
                width={720}
                height={540}
                priority
                className="w-full rounded-[20px] md:rounded-[40px] object-cover aspect-[4/3] md:aspect-auto shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 1 */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
            <div>
              <Image 
                src="/images/how-it-works/parent-concern.jpg" 
                alt="Parent Academic Concern Tracking" 
                width={720}
                height={540}
                className="w-full rounded-[20px] md:rounded-[40px] object-cover aspect-[4/3] md:aspect-auto" 
              />
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-orange-400">Chapter 01</p>
              <h2 className="mt-3 text-2xl md:text-5xl font-black leading-tight text-white">It Usually Starts With Concern.</h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-400">
                Parents notice incomplete homework, inconsistent performance and growing exam stress. The effort is there, but the results often don't reflect it.
              </p>
              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-white/10 p-4 text-sm md:text-base text-white bg-white/[0.01]">Falling confidence in academics</div>
                <div className="rounded-xl border border-white/10 p-4 text-sm md:text-base text-white bg-white/[0.01]">Last-minute exam preparation</div>
                <div className="rounded-xl border border-white/10 p-4 text-sm md:text-base text-white bg-white/[0.01]">Lack of personalized attention</div>
                <div className="rounded-xl border border-white/10 p-4 text-sm md:text-base text-white bg-white/[0.01]">Difficulty understanding concepts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 2 */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-orange-400">Chapter 02</p>
              <h2 className="mt-3 text-2xl md:text-5xl font-black text-white">We Begin By Understanding The Child.</h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-400">
                Every child learns differently. Before classes begin, we understand academic strengths, weaknesses, goals and parent expectations.
              </p>
              <div className="mt-6 rounded-[24px] md:rounded-[32px] border border-orange-500/20 bg-orange-500/5 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white">Academic Assessment</h3>
                <ul className="mt-3 space-y-2 text-sm md:text-base text-zinc-300">
                  <li>✓ Subject-wise gap analysis</li>
                  <li>✓ Learning behaviour review</li>
                  <li>✓ Goal setting</li>
                  <li>✓ Parent consultation</li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image 
                src="/images/how-it-works/parent-review.jpg" 
                alt="Child Learning Metric Evaluation Assessment" 
                width={720}
                height={540}
                className="w-full rounded-[20px] md:rounded-[40px] object-cover aspect-[4/3] md:aspect-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 3 */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
            <div>
              <Image 
                src="/images/how-it-works/mentor-profile.jpg" 
                alt="Elite Subject Matter Expert Mentor Matching" 
                width={720}
                height={540}
                className="w-full rounded-[20px] md:rounded-[40px] object-cover aspect-[4/3] md:aspect-auto" 
              />
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-orange-400">Chapter 03</p>
              <h2 className="mt-3 text-2xl md:text-5xl font-black text-white">The Right Mentor Changes Everything.</h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-400">
                Great academic growth starts with the right mentor. UpEd carefully matches students with mentors based on subject expertise, learning style and goals.
              </p>
              <div className="mt-6 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/[0.03] p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white">Mentor Matching Framework</h3>
                <ul className="mt-3 space-y-2 text-sm md:text-base text-zinc-300">
                  <li>✓ Subject Expertise</li>
                  <li>✓ Teaching Style Alignment</li>
                  <li>✓ Goal-Based Mentor Allocation</li>
                  <li>✓ Long-Term Academic Guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 4 */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-orange-400">Chapter 04</p>
              <h2 className="mt-3 text-2xl md:text-5xl font-black text-white">Concepts First. Memorization Later.</h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-400">
                We focus on understanding before memorization. Every lesson is designed to help students develop conceptual clarity and confidence.
              </p>
              <div className="mt-6 rounded-[24px] md:rounded-[32px] border border-orange-500/20 bg-orange-500/5 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white">Concept Learning Framework</h3>
                <p className="mt-3 text-sm md:text-base text-zinc-300">
                  Up to 10 structured concept classes every month depending on the selected academic program.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image 
                src="/images/how-it-works/student-mentor.jpg" 
                alt="One to One Live Conceptual Classes" 
                width={720}
                height={540}
                className="w-full rounded-[20px] md:rounded-[40px] object-cover aspect-[4/3] md:aspect-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 5 */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
            <div>
              <Image 
                src="/images/how-it-works/guided-practice.jpg" 
                alt="Structured Homework Sheets Guided Practice" 
                width={720}
                height={540}
                className="w-full rounded-[20px] md:rounded-[40px] object-cover aspect-[4/3] md:aspect-auto" 
              />
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-orange-400">Chapter 05</p>
              <h2 className="mt-3 text-2xl md:text-5xl font-black text-white">Learning Happens During Practice.</h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-400">
                Students improve when concepts are applied repeatedly through guided worksheets, homework support and problem-solving activities.
              </p>
              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-white/10 p-4 text-sm md:text-base text-white bg-white/[0.01]">Worksheet Practice</div>
                <div className="rounded-xl border border-white/10 p-4 text-sm md:text-base text-white bg-white/[0.01]">Homework Support</div>
                <div className="rounded-xl border border-white/10 p-4 text-sm md:text-base text-white bg-white/[0.01]">Guided Problem Solving</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 6 */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-orange-400">Chapter 06</p>
              <h2 className="mt-3 text-2xl md:text-5xl font-black text-white">Progress Must Be Measured.</h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-400">
                Regular testing ensures students understand concepts and continuously improve academic performance.
              </p>
              <div className="mt-6 rounded-[24px] md:rounded-[32px] border border-green-500/20 bg-green-500/5 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-green-400">Test & Revision Framework</h3>
                <ul className="mt-3 space-y-2 text-sm md:text-base text-zinc-300">
                  <li>✓ Monthly Tests</li>
                  <li>✓ Revision Sessions</li>
                  <li>✓ Weak Area Analysis</li>
                  <li>✓ Improvement Planning</li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image 
                src="/images/how-it-works/student-assessment.jpg" 
                alt="Monthly Analytical Testing Review" 
                width={720}
                height={540}
                className="w-full rounded-[20px] md:rounded-[40px] object-cover aspect-[4/3] md:aspect-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 7 */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
            <div>
              <Image 
                src="/images/how-it-works/mentor-parent-review.jpg" 
                alt="Transparent Parent Mentor Consultation Meetings" 
                width={720}
                height={540}
                className="w-full rounded-[20px] md:rounded-[40px] object-cover aspect-[4/3] md:aspect-auto" 
              />
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-orange-400">Chapter 07</p>
              <h2 className="mt-3 text-2xl md:text-5xl font-black text-white">Parents Stay Involved.</h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-400">
                Academic growth works best when parents remain informed. UpEd provides transparent communication and progress tracking throughout the journey.
              </p>
              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-white/10 p-4 text-sm md:text-base text-white bg-white/[0.01]">Monthly Progress Reports</div>
                <div className="rounded-xl border border-white/10 p-4 text-sm md:text-base text-white bg-white/[0.01]">Mentor Review Meetings</div>
                <div className="rounded-xl border border-white/10 p-4 text-sm md:text-base text-white bg-white/[0.01]">Personalized Action Plans</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-12 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[20px] md:rounded-[40px] border border-orange-500/20 bg-orange-500/[0.05] p-6 md:p-12 text-center">
          <h2 className="text-2xl md:text-5xl font-black text-white">Confident Students.<br />Measurable Growth.</h2>
          <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-sm md:text-lg text-zinc-400">
            Every UpEd program is designed around personalized mentoring, structured learning and continuous academic progress.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 md:mt-8 w-full sm:w-auto rounded-2xl bg-orange-500 px-8 py-4 font-bold text-black active:scale-[0.98] transition-transform"
          >
            Book Free Academic Assessment
          </button>
        </div>
      </section>

      {/* OVERLAY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />

          <div className="relative w-full max-w-md rounded-t-[28px] sm:rounded-3xl border-t sm:border border-white/10 bg-[#0d0d0d] p-6 sm:p-8 text-left shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white text-xl p-2 font-bold transition-colors"
            >
              ✕
            </button>
            
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Assessment Booking</p>
            <h3 className="mt-1 text-xl sm:text-2xl font-black text-white">Secure Your Slot</h3>
            <p className="mt-1 text-xs sm:text-sm text-zinc-400">Enter your details below to schedule your child's free academic diagnosis call.</p>

            <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Parent Name</label>
                <input 
                  type="text" 
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. Mubeen"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-white focus:border-orange-500 focus:outline-none placeholder-zinc-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">WhatsApp Phone Number</label>
                <input 
                  type="tel" 
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="e.g. 9876543210"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-white focus:border-orange-500 focus:outline-none placeholder-zinc-600 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-xl bg-orange-500 py-4 font-extrabold text-black text-sm md:text-base hover:bg-orange-600 active:scale-[0.98] transition-all disabled:bg-zinc-800 disabled:text-zinc-500 disabled:scale-100 shadow-lg shadow-orange-500/10"
              >
                {loading ? "Registering Request..." : "Confirm Free Assessment Booking 🚀"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* GLOBAL FOOTER COMPONENT */}
      <Footer onBookClick={() => setIsModalOpen(true)} />
    </main>
  )
}