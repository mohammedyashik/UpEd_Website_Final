"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

import { submitGradeLead } from "@/services/leads"
import { sendEmailNotification } from "@/services/notify"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export default function ProgramsPage() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null)
  const [offerUnlocked, setOfferUnlocked] = useState<string | null>(null)
  const [parentName, setParentName] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedClass, setSelectedClass] = useState<number | null>(null)

  const router = useRouter()

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Personalized Learning For Every Stage Of School
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl">
            Whether your child needs homework support, stronger concepts, exam preparation or academic confidence, UpEd provides one-to-one learning designed around their needs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="font-semibold">
                Falling Behind In School?
              </p>
            </div>

            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="font-semibold">
                Struggling With Homework?
              </p>
            </div>

            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="font-semibold">
                Losing Confidence In Studies?
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Class 1–5",
              subtitle: "Build Strong Foundations",
              image: "/images/program-page/class1-5.png",
              classes: [1, 2, 3, 4, 5],
            },
            {
              title: "Class 6–8",
              subtitle: "Improve Understanding & Confidence",
              image: "/images/program-page/class6-8.png",
              classes: [6, 7, 8],
            },
            {
              title: "Class 9–10",
              subtitle: "Board Exam Preparation",
              image: "/images/program-page/class9-10.png",
              classes: [9, 10],
            },
            {
              title: "Class 11–12",
              subtitle: "Academic & Career Readiness",
              image: "/images/program-page/class11-12.png",
              classes: [11, 12],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300 text-left"
            >
              <div className="relative h-[420px] md:h-[500px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedStage(
                        selectedStage === item.title ? null : item.title
                      )
                      setSelectedClass(null)
                    }}
                    className="text-left w-full"
                  >
                    <h3 className="text-3xl font-black text-orange-500">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-white/90">
                      {item.subtitle}
                    </p>
                    <p className="mt-4 text-orange-400 font-bold">
                      Explore Programs →
                    </p>
                  </button>
                  {selectedStage === item.title && (
                    <div className="mt-5 pt-5 border-t border-white/20">
                      <p className="text-sm text-white/80 mb-3">
                        Choose Your Child's Class
                      </p>

                      {selectedClass === null ? (
                        <div className="flex flex-wrap gap-2">
                          {item.classes.map((cls) => (
                            <button
                              key={cls}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedClass(cls)
                              }}
                              className="rounded-xl bg-white/10 px-3 py-2 text-sm font-bold hover:bg-orange-500 hover:text-black transition-all"
                            >
                              Class {cls}
                            </button>
                          ))}
                        </div>
                      ) : offerUnlocked !== item.title ? (
                        <div className="rounded-2xl bg-black/50 p-4 border border-orange-500/20">
                          <p className="text-lg font-bold text-orange-400 mb-2">
                            🎉 Exclusive Parent Offer
                          </p>

                          <p className="text-sm text-white/90 mb-3">
                            Claim your additional 10% parent discount today.
                          </p>

                          <p className="text-sm text-orange-300 mb-4">
                            Complete your enquiry now to unlock your discount. This exclusive offer expires in 48 hours.
                          </p>

                          <input
                            type="text"
                            placeholder="Parent Name"
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            className="mb-2 w-full rounded-md border border-white/20 bg-zinc-900 px-3 py-2 text-white"
                          />

                          <input
                            type="tel"
                            placeholder="Mobile Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="mb-3 w-full rounded-md border border-white/20 bg-zinc-900 px-3 py-2 text-white"
                          />

                          <p className="text-xs text-white/50 mb-3">
                            ✓ Your details are safe and will only be used to help you choose the right UpEd program.
                          </p>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()

                              if (parentName.trim() && /^\d{10}$/.test(phone.trim())) {
                                const lead = {
                                  parentName,
                                  phone,
                                  studentClass: `Class ${selectedClass}`,
                                  subjects: "General Enquiry",
                                  learningMode: "Programs Page",
                                  sourcePage: "/programs",
                                  selectedProgram: "10% Parent Offer",
                                  selectedPricingPlan: "Not Selected",
                                  calculatedAmount: "Not Selected",
                                  leadTag: "Programs_Page_Offer",
                                  offerClaimed: true,
                                }

                                submitGradeLead(lead)
                                  .then(async () => {
                                    try {
                                      await sendEmailNotification({
                                        formType: "Programs Page Offer",
                                        parentName,
                                        phone,
                                        studentClass: `Class ${selectedClass}`,
                                        sourcePage: "/programs",
                                        selectedStage: item.title,
                                        offer: "10% Parent Discount",
                                      })
                                    } catch (error) {
                                      console.error("Email notification failed:", error)
                                    }

                                    setOfferUnlocked(item.title)

                                    setTimeout(() => {
                                      router.push(`/programs/class-${selectedClass}`)
                                    }, 500)
                                  })
                                  .catch((error) => {
                                    console.error("Lead submission failed:", error)
                                    alert("Something went wrong. Please try again.")
                                  })
                              }
                            }}
                            className="w-full rounded-xl bg-orange-500 py-3 font-bold text-black"
                          >
                            Claim My 10% Discount
                          </button>
                        </div>
                      ) : (
                        <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-3 text-sm text-green-300">
                          Redirecting to Class {selectedClass} program...
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 mb-10">
          <h2 className="text-3xl md:text-5xl font-black">
            Why Parents Choose UpEd
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="rounded-3xl border border-white/10 p-8 bg-zinc-950">
            <h3 className="font-black text-xl">
              One-to-One Learning
            </h3>
            <p className="text-zinc-400 mt-3">
              Personalized support designed around your child's learning pace.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-zinc-950">
            <h3 className="font-black text-xl">
              Verified Tutors
            </h3>
            <p className="text-zinc-400 mt-3">
              Carefully selected tutors with subject expertise and teaching experience.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-zinc-950">
            <h3 className="font-black text-xl">
              Regular Parent Updates
            </h3>
            <p className="text-zinc-400 mt-3">
              Stay informed with progress reports and academic feedback.
            </p>
          </div>
        </div>

        <section className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <p className="text-3xl font-black text-orange-500">500+</p>
              <p className="text-zinc-500 text-sm mt-2">
                Students Supported
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <p className="text-3xl font-black text-orange-500">100+</p>
              <p className="text-zinc-500 text-sm mt-2">
                Verified Tutors
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <p className="text-3xl font-black text-orange-500">4.8/5</p>
              <p className="text-zinc-500 text-sm mt-2">
                Parent Rating
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <p className="text-3xl font-black text-orange-500">92%</p>
              <p className="text-zinc-500 text-sm mt-2">
                Parent Satisfaction
              </p>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  )
}