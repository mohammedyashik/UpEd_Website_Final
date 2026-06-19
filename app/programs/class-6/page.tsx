"use client"

import { useState } from "react"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import HeroSection from "@/components/programs/class-landing/HeroSection"
import PainPoints from "@/components/programs/class-landing/PainPoints"
import WhyUpEd from "@/components/programs/class-landing/WhyUpEd"
import HowItWorks from "@/components/programs/class-landing/HowItWorks"
import PricingGrid from "@/components/programs/class-landing/PricingGrid"
import LeadModal from "@/components/programs/class-landing/LeadModal"

import { submitClassSixLead } from "@/services/leads" 
import { sendEmailNotification } from "@/services/notify"

export default function ClassSixLanding() {
  const [activeMode, setActiveMode] = useState<"online" | "home">("online")
  const [selectedPlan, setSelectedPlan] = useState<string>("Growth Plan ⭐")
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Modal specific state
  const [modalParentName, setModalParentName] = useState("")
  const [modalPhone, setModalPhone] = useState("")
  const [modalSuccess, setModalSuccess] = useState(false)

  const pricingData = {
    online: [
      { plan: "Starter Plan", subjects: "1 Subject Focus", classes: "8 Classes / Month", fee: "₹2,999", desc: "Targeted subject help." },
      { plan: "Growth Plan ⭐", subjects: "2 Subjects Combo", classes: "16 Classes / Month", fee: "₹5,499", desc: "Best for Maths & Science." },
      { plan: "Excellence Plan", subjects: "Full 3-Subject Track", classes: "24 Classes / Month", fee: "₹7,499", desc: "Total academic support." }
    ],
    home: [
      { plan: "Starter Plan", subjects: "1 Subject Focus", classes: "8 Classes / Month", fee: "₹4,499", desc: "Doorstep guidance." },
      { plan: "Growth Plan ⭐", subjects: "2 Subjects Combo", classes: "16 Classes / Month", fee: "₹7,999", desc: "Strongest focus track." },
      { plan: "Excellence Plan", subjects: "Full 3-Subject Track", classes: "24 Classes / Month", fee: "₹10,999", desc: "Comprehensive support." }
    ]
  }

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    const payloadData = {
      parentName: modalParentName,
      phone: modalPhone,
      studentClass: "Class 6",
      subjectsRequired: "Combined",
      learningMode: activeMode === 'online' ? 'Class 6 Online Tuition' : 'Class 6 Home Tuition',
      selectedPlan: selectedPlan,
      sourcePage: "Class 6 Pricing Modal"
    }

    await submitClassSixLead(payloadData)
    await sendEmailNotification({ formType: "Pricing Lead", ...payloadData })
    
    setModalSuccess(true)
    setLoading(false)
    setTimeout(() => {
      setIsModalOpen(false)
      setModalSuccess(false)
      setModalParentName("")
      setModalPhone("")
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500/30">
      <Navbar />
      
      <HeroSection 
        activeMode={activeMode} 
        setActiveMode={setActiveMode} 
        pricingData={pricingData}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        onSubmit={handleModalSubmit} // You can reuse or split this logic
      />

      <PainPoints />
      <WhyUpEd />
      <HowItWorks />
      
      <PricingGrid 
        activeMode={activeMode} 
        pricingData={pricingData} 
        onSelectPlan={(plan: string) => { setSelectedPlan(plan); setIsModalOpen(true); }} 
      />

      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleModalSubmit}
        loading={loading}
        selectedPlan={selectedPlan}
        modalParentName={modalParentName}
        setModalParentName={setModalParentName}
        modalPhone={modalPhone}
        setModalPhone={setModalPhone}
        modalSuccess={modalSuccess}
        activeMode={activeMode}
      />

      <Footer />
    </main>
  )
}