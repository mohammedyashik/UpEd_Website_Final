"use client"

import { useState } from "react"
import { submitGradeLead } from "@/services/leads"

import { sendEmailNotification } from "@/services/notify"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
  }
}

type Props = {
  open: boolean
  onClose: () => void
  gradeData: any
  mode: "online" | "home"
  plan: any
}

export default function LeadModal({
  open,
  onClose,
  gradeData,
  mode,
  plan,
}: Props) {
  const [parentName, setParentName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  console.log("LeadModal mode:", mode)
  console.log("PLAN DATA:", plan)

  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null

  const utmSource = searchParams?.get("utm_source") || "direct"
  const utmMedium = searchParams?.get("utm_medium") || "direct"
  const utmCampaign = searchParams?.get("utm_campaign") || "unknown"
  const utmContent = searchParams?.get("utm_content") || "unknown"


  const trackEvent = (eventName: string, data?: Record<string, any>) => {
    if (typeof window === "undefined") return
    window.gtag?.("event", eventName, data)
    window.fbq?.("trackCustom", eventName, data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const submittedAt = new Date().toISOString()

    trackEvent("submit_lead_attempt", {
      class: gradeData.className,
      plan: plan?.plan || "General Enquiry",
      mode,
    })

    setError("")

    if (parentName.trim().length < 3) {
      setError("Please enter a valid parent name")
      return
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Please enter a valid 10-digit mobile number")
      return
    }

    const lastLeadPhone = localStorage.getItem("uped_last_lead_phone")
    const lastLeadTime = localStorage.getItem("uped_last_lead_time")

    if (
      lastLeadPhone === phone &&
      lastLeadTime &&
      Date.now() - Number(lastLeadTime) < 1000 * 60 * 30
    ) {
      setError(
        "We've already received your request. Our advisor will contact you shortly."
      )
      return
    }

    try {
      setLoading(true)

      await submitGradeLead({
        parentName,
        phone,
        studentClass: gradeData.className,
        selectedPlan: plan?.plan || "General Enquiry",
        planPrice: plan?.fee || "Not Selected",
        learningMode:
          mode === "home"
            ? "Home Tuition"
            : "Online Tuition",
        leadTag: `${gradeData.className}_${mode}_${plan?.plan || "general"}`,
        sourcePage: window.location.pathname,
        utmSource,
        utmMedium,
        utmCampaign,
        utmContent,
        submittedAt,
      })

      await sendEmailNotification({
        formType: "Program Lead",
        parentName,
        phone,
        learningMode:
          mode === "home"
            ? "Home Tuition"
            : "Online Tuition",
        selectedPlan: plan?.plan || "General Enquiry",
        planPrice: plan?.fee || "Not Selected",
        studentClass: gradeData.className,
        leadTag: `${gradeData.className}_${mode}_${plan?.plan || "general"}`,
        sourcePage: window.location.pathname,
        utmSource,
        utmMedium,
        utmCampaign,
        utmContent,
        submittedAt,
      })

      localStorage.setItem("uped_last_lead_phone", phone)
      localStorage.setItem("uped_last_lead_time", Date.now().toString())

      trackEvent("submit_lead", {
        class: gradeData.className,
        plan: plan?.plan || "General Enquiry",
        mode,
        utmSource,
        utmCampaign,
      })
      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
        setParentName("")
        setPhone("")
        onClose()
      }, 3000)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    const whatsappMessage = encodeURIComponent(
      `Hello UpEd Team,

I'm interested in tuition for my child.

Parent Name: ${parentName}
Class: ${gradeData.className}
Learning Mode: ${mode === "home" ? "Home Tuition" : "Online Tuition"}
Selected Plan: ${plan?.plan || "General Enquiry"}
Plan Fee: ${plan?.fee || "To Be Discussed"}
Phone: ${phone}
UTM Source: ${utmSource}
UTM Campaign: ${utmCampaign}

Please help me get started with a free trial class.`
    )
    return (
      <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
        <div className="bg-zinc-950 p-8 rounded-3xl border border-white/10 text-center">
          <h3 className="text-3xl font-black">
            You're One Step Away From Your Free Trial Class
          </h3>

          <p className="text-zinc-400 mt-3">
            Our advisor can help you choose the right tutor and schedule your free trial class. Continue on WhatsApp to get started instantly.
          </p>

          <a
            href={`https://wa.me/919443594438?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-2xl bg-green-500 px-6 py-3 font-black text-black"
            onClick={() =>
              trackEvent("click_whatsapp", {
                class: gradeData.className,
                plan: plan?.plan || "General Enquiry",
                mode,
              })
            }
          >
            Continue on WhatsApp
          </a>
        </div>
      </div>
    )
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-[32px] border border-orange-500/20 bg-zinc-950 p-8 shadow-[0_0_60px_rgba(249,115,22,0.12)]">
        <button
          onClick={onClose}
          className="float-right text-zinc-500"
        >
          ✕
        </button>

        <div className="mb-6">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">
            Selected Program
          </p>

          <h3 className="text-3xl font-black mt-2">
            {gradeData.className}
          </h3>

          <p className="text-zinc-400 mt-1">
            {mode === "home" ? "Home Tuition" : "Online Tuition"}
          </p>

          <div className="rounded-2xl bg-zinc-900 p-4 border border-white/10 mt-4">
            <h4 className="font-black text-lg">
              {plan?.plan || "General Enquiry"}
            </h4>

            <p className="text-xs text-red-400 font-semibold mt-1">
              Limited seats available for this academic cycle
            </p>

            {plan?.subjects && (
              <p className="text-zinc-400 text-sm mt-2">
                {plan.subjects}
              </p>
            )}

            {plan?.classes && (
              <p className="text-zinc-500 text-sm">
                {plan.classes}
              </p>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Parent Name"
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            maxLength={10}
          />

          {error && (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-orange-500 py-3 font-black text-black disabled:opacity-50"
            onClick={() =>
              trackEvent("open_submit_flow", {
                class: gradeData.className,
                plan: plan?.plan || "General Enquiry",
              })
            }
          >
            {loading ? "Submitting..." : "Book Free Demo Class"}
          </button>
        </form>
      </div>
    </div>
  )
}