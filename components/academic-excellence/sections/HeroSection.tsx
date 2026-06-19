

"use client"

import { Sparkles, ChevronDown, Zap, ShieldCheck } from "lucide-react"

interface HeroSectionProps {
  gradeData: any
  activeMode: "online" | "home"
  setActiveMode: (mode: "online" | "home") => void
  selectedPlan: string
  setSelectedPlan: (plan: string) => void
  parentName: string
  setParentName: (value: string) => void
  phone: string
  setPhone: (value: string) => void
  loading: boolean
  submitSuccess: boolean
  onSubmit: (e: React.FormEvent) => void
}

export default function HeroSection({
  gradeData,
  activeMode,
  setActiveMode,
  selectedPlan,
  setSelectedPlan,
  parentName,
  setParentName,
  phone,
  setPhone,
  loading,
  submitSuccess,
  onSubmit,
}: HeroSectionProps) {
  return (
    <section>
      {/* MOVE YOUR EXISTING HERO SECTION JSX HERE */}
      {/* This component is intentionally prepared as the reusable */}
      {/* Academic Excellence Hero for Classes 1–12. */}

      <div>
        <h1>{gradeData?.hero?.title}</h1>
        <p>{gradeData?.hero?.subtitle}</p>

        <div>
          {gradeData?.subjects?.map((subject: string) => (
            <span key={subject}>{subject}</span>
          ))}
        </div>

        {submitSuccess ? (
          <div>
            <ShieldCheck />
            <p>Admissions Request Verified</p>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <button
              type="button"
              onClick={() => setActiveMode("online")}
            >
              Online Tuition
            </button>

            <button
              type="button"
              onClick={() => setActiveMode("home")}
            >
              Home Tuition
            </button>

            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
            >
              <option>Starter Plan</option>
              <option>Growth Plan</option>
              <option>Excellence Plan</option>
            </select>

            <input
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              placeholder="Parent Name"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="WhatsApp Number"
            />

            <button type="submit">
              {loading ? "Scheduling Assessment..." : "Book Free Consultation"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}