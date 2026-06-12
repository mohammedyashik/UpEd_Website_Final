"use client"

import { useState } from "react"
import { submitHomepageAssessment } from "@/services/leads"
import { sendEmailNotification } from "@/services/notify"
export default function CTASection() {
  const [parentName, setParentName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)

  const handleFormSubmit = async () => {
    if (!parentName.trim() || !phone.trim()) {
      alert("Please provide both Parent Name and WhatsApp Number.")
      return
    }

    // Capture path context and translate root token into a clear human-readable label
    const rawPath = typeof window !== "undefined" ? window.location.pathname : "/"
    const currentPath = rawPath === "/" ? "Homepage" : rawPath

    try {
      setLoading(true)

      // 1. Log entry metrics to Firestore
      await submitHomepageAssessment({
        parentName,
        phone,
        sourcePage: `${currentPath} (Mid-Page CTA)`,
      })

      // 2. Trigger real-time server route notification dispatch
      await sendEmailNotification({
        formType: "Mid-Page Section Recap Form",
        parentName,
        phone,
        sourcePage: currentPath,
      })

      alert("Academic Consultation requested successfully!")
      setParentName("")
      setPhone("")
    } catch (err) {
      console.error(err)
      alert("Submission dropped due to a connection timeout. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-orange-500/10
            blur-[140px]
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[40px]
          border
          border-orange-500/10
          bg-[#0a0a0a]
          px-6
          py-16
          sm:px-10
          lg:px-16
          lg:py-24
        "
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <div>
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-orange-500/20
                bg-orange-500/10
                px-5
                py-2
                text-sm
                font-medium
                text-orange-300
              "
            >
              Start Your Child’s Academic Transformation
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.05em]
                text-white
                sm:text-5xl
                lg:text-7xl
              "
            >
              Give Your Child
              <span className="block text-orange-500">
                The Academic Edge
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-[1.9]
                text-zinc-400
                sm:text-xl
              "
            >
              Personal mentorship, structured learning systems, real academic
              monitoring, and measurable improvement designed for modern Indian
              students.
            </p>

            {/* TRUST POINTS */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Free Academic Consultation",
                "Personal Mentor Allocation",
                "Weekly Parent Updates",
                "Performance Tracking System",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-4
                  "
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <p className="text-sm font-medium text-zinc-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-gradient-to-b
              from-orange-500/10
              to-transparent
              p-8
              backdrop-blur-xl
            "
          >
            <div
              className="
                absolute
                right-0
                top-0
                h-40
                w-40
                rounded-full
                bg-orange-500/10
                blur-[90px]
              "
            />

            <div className="relative">
              <h3 className="text-3xl font-bold text-white">
                Book Free Demo
              </h3>

              <p className="mt-3 text-base leading-[1.8] text-zinc-400">
                Talk with our academic team and discover the right learning
                structure for your child.
              </p>

              {/* FORM */}
              <div className="mt-10 space-y-4">
                <input
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  disabled={loading}
                  placeholder="Parent Name"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/40
                    px-5
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-zinc-500
                    focus:border-orange-500/50
                    disabled:opacity-50
                  "
                />

                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={loading}
                  placeholder="WhatsApp Number"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/40
                    px-5
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-zinc-500
                    focus:border-orange-500/50
                    disabled:opacity-50
                  "
                />

                <button
                  onClick={handleFormSubmit}
                  disabled={loading}
                  className="
                    mt-2
                    h-14
                    w-full
                    rounded-2xl
                    bg-orange-500
                    text-lg
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:bg-orange-400
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >
                  {loading ? "Scheduling..." : "Schedule Free Demo"}
                </button>
              </div>

              <p className="mt-5 text-center text-sm text-zinc-500">
                No spam. Our academic advisor will contact you personally.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}