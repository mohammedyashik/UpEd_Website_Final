"use client"

import { useState } from "react"

import { PROGRAMS } from "./program-data"
import PricingSelector from "./PricingSelector"
import EnrollmentSummary from "./EnrollmentSummary"
import ProgramCard from "./ProgramCard"

type Props = {
  parentName: string
  selectedClass: string
  selectedSubjects: string[]
  selectedMode: string
  onReserve: (enrichedData: {
    program: string
    plan: string
    amount: number
  }) => Promise<void>
  loading?: boolean
}

export default function ResultsStep({
  parentName,
  selectedClass,
  selectedSubjects,
  selectedMode,
  onReserve,
  loading,
}: Props) {

  const [selectedPlan, setSelectedPlan] = useState("")

  let recommendedProgram = "Single Subject Program"

  // Commerce
  if (selectedClass.includes("Commerce")) {
    recommendedProgram = "Commerce Success Program"
  }
  // Science Stream
  else if (selectedClass.includes("Science")) {
    const hasPhysics = selectedSubjects.includes("Physics")
    const hasChemistry = selectedSubjects.includes("Chemistry")
    const hasMaths = selectedSubjects.includes("Mathematics")
    const hasBiology = selectedSubjects.includes("Biology")

    if (hasPhysics && hasChemistry && hasMaths) {
      recommendedProgram = "PCM Package"
    } else if (hasPhysics && hasChemistry && hasBiology) {
      recommendedProgram = "PCB Package"
    } else {
      recommendedProgram = "Single Subject Program"
    }
  }
  // Classes 1-10
  else {
    if (selectedSubjects.length === 1) {
      recommendedProgram = "Single Subject Program"
    } else if (selectedSubjects.length === 2) {
      recommendedProgram = "Dual Subject Program"
    } else {
      recommendedProgram = "Full Academic Support Program"
    }
  }

  const programData = PROGRAMS[recommendedProgram as keyof typeof PROGRAMS]

  const { hours, weekly, concept, practice, tests } = programData

  const pricing = selectedMode === "Home Tuition" ? programData.home : programData.online

  const selectedAmount = selectedPlan ? pricing[selectedPlan as keyof typeof pricing] : 0

  return (
    <div className="p-6 md:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
        Recommendation Ready
      </p>

      <h2 className="mt-5 text-4xl font-black leading-[1] tracking-[-0.05em] text-white md:text-6xl">
        {parentName},
        <span className="block text-orange-500">Here’s Your Child's Best Program</span>
      </h2>

      <ProgramCard
        program={recommendedProgram}
        hours={hours}
        weekly={weekly}
        concept={concept}
        practice={practice}
        tests={tests}
      />

      <div className="mt-8 rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
        <h3 className="text-2xl font-black text-white">Student Snapshot</h3>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div>
            <p className="text-sm text-zinc-500">Academic Stage</p>
            <p className="mt-1 font-semibold text-white">{selectedClass}</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Learning Mode</p>
            <p className="mt-1 font-semibold text-white">{selectedMode}</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Subjects Selected</p>
            <p className="mt-1 font-semibold text-white">{selectedSubjects.length}</p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-black/30 p-5">
          <p className="text-sm text-zinc-500">Subjects</p>
          <p className="mt-2 text-white">{selectedSubjects.join(", ")}</p>
        </div>
      </div>

      <div className="mt-8 rounded-[32px] border border-green-500/20 bg-green-500/[0.04] p-6">
        <h3 className="text-2xl font-black text-white">Why This Program Is Recommended</h3>

        <div className="mt-6 space-y-4">
          <div className="flex gap-3">
            <span className="text-green-400">✓</span>
            <p className="text-zinc-300">
              Personalized one-to-one learning plan based on your child's class and subjects.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-green-400">✓</span>
            <p className="text-zinc-300">
              Structured concept, practice and assessment framework for measurable improvement.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-green-400">✓</span>
            <p className="text-zinc-300">Weekly mentor monitoring and academic progress tracking.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-green-400">✓</span>
            <p className="text-zinc-300">Parent progress reports and exam preparation guidance.</p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-white/10 p-5 text-center">
          <h3 className="text-3xl font-black text-orange-400">500+</h3>
          <p className="mt-2 text-sm text-zinc-400">Students Mentored</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-5 text-center">
          <h3 className="text-3xl font-black text-orange-400">1:1</h3>
          <p className="mt-2 text-sm text-zinc-400">Personalized Learning</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-5 text-center">
          <h3 className="text-3xl font-black text-orange-400">Weekly</h3>
          <p className="mt-2 text-sm text-zinc-400">Progress Tracking</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-5 text-center">
          <h3 className="text-3xl font-black text-orange-400">CBSE</h3>
          <p className="mt-2 text-sm text-zinc-400">Curriculum Focused</p>
        </div>
      </div>

      <div className="mt-10 rounded-[28px] border border-orange-500/20 bg-orange-500/[0.05] p-6">
        <p className="text-sm font-bold text-orange-300">Current Batch Status</p>
        <h3 className="mt-2 text-2xl font-black text-white">Limited Mentor Availability</h3>
        <p className="mt-3 text-zinc-400">
          New students are onboarded only after mentor availability review.
        </p>
      </div>

      <PricingSelector
        pricing={pricing}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />

      {/* FIX: We pass the action trigger into your original summary view component wrapper */}
      <div 
        onClick={() => onReserve({
          program: recommendedProgram,
          plan: selectedPlan || "No Plan Selected",
          amount: selectedAmount
        })}
        className="cursor-pointer"
      >
        <EnrollmentSummary
          parentName={parentName}
          selectedClass={selectedClass}
          selectedSubjects={selectedSubjects}
          selectedMode={selectedMode}
          program={recommendedProgram}
          selectedPlan={selectedPlan}
          amount={selectedAmount}
        />
      </div>
    </div>
  )
}