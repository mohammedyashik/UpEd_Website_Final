"use client"

import { useState } from "react"
import { submitProgramPageAssessment } from "@/services/leads"
import { sendEmailNotification } from "@/services/notify"

import ParentStep from "./ParentStep"
import ClassStep from "./ClassStep"
import SubjectStep from "./SubjectStep"
import ModeStep from "./ModeStep"
import ResultsStep from "./ResultsStep"

export default function AcademicJourney() {
  const [step, setStep] = useState(1)

  // Core Journey State Registers
  const [parentName, setParentName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [selectedClass, setSelectedClass] = useState("")
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [selectedMode, setSelectedMode] = useState("")
  const [loading, setLoading] = useState(false)

  const rawPath = typeof window !== "undefined" ? window.location.pathname : "/programs"
  const currentPath = rawPath === "/" ? "Homepage" : rawPath

  // STEP 1 HANDLER: Validates the profile and advances locally
  const handleParentStepSubmit = () => {
    if (!parentName.trim() || !whatsapp.trim()) {
      alert("Please provide both Parent Name and WhatsApp Number.")
      return
    }
    setStep(2)
  }

  // FINAL SEAT RESERVATION DISPATCHER
  const handleFinalPipelineSubmit = async (enrichedData: {
    program: string;
    plan: string;
    amount: number;
  }) => {
    try {
      setLoading(true)

      // 1. Log cleanly into your dedicated separate "program_leads" Firestore collection folder
      await submitProgramPageAssessment({
        parentName,
        phone: whatsapp,
        studentClass: selectedClass,
        subjects: selectedSubjects.join(", "),
        learningMode: selectedMode,
        sourcePage: currentPath,
        // @ts-ignore
        selectedProgram: enrichedData.program,
        selectedPricingPlan: enrichedData.plan || "1 Month (Default Selection)",
        calculatedAmount: `₹${enrichedData.amount}`,
      })

      // 2. Dispatch exactly ONE single, complete summary alert mail to your inbox
      await sendEmailNotification({
        formType: "Program Journey Completed Form",
        parentName,
        phone: whatsapp,
        sourcePage: currentPath,
        studentClass: selectedClass,
        subjects: selectedSubjects.join(", "),
        learningMode: selectedMode,
        recommendedProgram: enrichedData.program,
        selectedPricingPlan: enrichedData.plan || "1 Month (Default Selection)",
        totalAmount: `₹${enrichedData.amount}`,
      })

      alert("🎉 Seat Reservation Confirmed! We will contact you over WhatsApp shortly.")

      // 3. REBOOT INTERFACE SYSTEM: Clears out all old cache fields and resets back to step 1
      setParentName("")
      setWhatsapp("")
      setSelectedClass("")
      setSelectedSubjects([])
      setSelectedMode("")
      setStep(1)

      // Optional: Force windows layout to scroll back up smoothly to the top of the form layout container
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }

    } catch (err) {
      console.error("Final registration pipeline error context:", err)
      alert("Something went wrong processing your request. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute left-[-120px] top-[10%] h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[160px]" />

      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[#0b0b0b]">
          
          {step === 1 && (
            <ParentStep
              parentName={parentName}
              setParentName={setParentName}
              whatsapp={whatsapp}
              setWhatsapp={setWhatsapp}
              onNext={handleParentStepSubmit}
            />
          )}

          {step === 2 && (
            <ClassStep
              selectedClass={selectedClass}
              setSelectedClass={setSelectedClass}
              onNext={() => setStep(3)}
            />
          )}

          {step === 3 && (
            <SubjectStep
              selectedClass={selectedClass}
              selectedSubjects={selectedSubjects}
              setSelectedSubjects={setSelectedSubjects}
              onNext={() => setStep(4)}
            />
          )}

          {step === 4 && (
            <ModeStep
              selectedMode={selectedMode}
              setSelectedMode={setSelectedMode}
              onNext={() => setStep(5)}
            />
          )}

          {step === 5 && (
            <ResultsStep
              parentName={parentName}
              selectedClass={selectedClass}
              selectedSubjects={selectedSubjects}
              selectedMode={selectedMode}
              onReserve={handleFinalPipelineSubmit}
              loading={loading}
            />
          )}
        </div>
      </div>
    </section>
  )
}