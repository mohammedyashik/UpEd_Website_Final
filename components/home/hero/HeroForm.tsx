"use client"

import { useState } from "react"
import { submitHomepageAssessment } from "@/services/leads"
import { sendEmailNotification } from "@/services/notify"
export default function HeroForm() {
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

      // 1. Log entry metrics to Firestore with explicit context
      await submitHomepageAssessment({
        parentName,
        phone,
        sourcePage: currentPath,
      })

      // 2. Trigger real-time server route notification dispatch
      await sendEmailNotification({
        formType: "Homepage Hero Allocation Form",
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
    <div
      className="
        w-full
        rounded-[32px]
        border
        border-white/10
        bg-black/70
        p-5
        backdrop-blur-2xl
        sm:p-6
        lg:p-7
      "
    >
      <p
        className="
          text-[10px]
          font-medium
          uppercase
          tracking-[0.35em]
          text-orange-400
          sm:text-[11px]
        "
      >
        Free Academic Consultation
      </p>

      <h3
        className="
          mt-3
          text-[34px]
          font-black
          leading-[0.9]
          tracking-[-0.05em]
          text-white
          sm:text-[42px]
          lg:text-[48px]
        "
      >
        Want Better
        <br />
        Academic Results?
      </h3>

      <div className="mt-5 flex flex-col gap-3">
        <input
          type="text"
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
          disabled={loading}
          placeholder="Parent Name"
          className="
            h-[56px]
            rounded-[18px]
            border
            border-white/10
            bg-white/[0.04]
            px-5
            text-sm
            text-white
            outline-none
            placeholder:text-zinc-500
            focus:border-orange-500/40
            disabled:opacity-50
          "
        />

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={loading}
          placeholder="Enter WhatsApp Number"
          className="
            h-[56px]
            rounded-[18px]
            border
            border-white/10
            bg-white/[0.04]
            px-5
            text-sm
            text-white
            outline-none
            placeholder:text-zinc-500
            focus:border-orange-500/40
            disabled:opacity-50
          "
        />

        <button
          onClick={handleFormSubmit}
          disabled={loading}
          className="
            h-[58px]
            rounded-[18px]
            bg-orange-500
            text-base
            font-bold
            text-black
            shadow-[0_0_40px_rgba(249,115,22,0.35)]
            transition-all
            duration-300
            hover:bg-orange-400
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {loading ? "Submitting..." : "Book Free Demo"}
        </button>
      </div>
    </div>
  )
}