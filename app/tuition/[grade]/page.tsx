import { notFound } from "next/navigation"

import { grades } from "@/data/academic-excellence/grades"
import { pricing } from "@/data/academic-excellence/pricing"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

import AcademicExcellenceClient from "@/components/academic-excellence/AcademicExcellenceClient"

type Props = {
  params: Promise<{
    grade: string
  }>
}

export default async function AcademicExcellencePage({ params }: Props) {
  const { grade } = await params

  const gradeData =
    grades[grade as keyof typeof grades]

  if (!gradeData) {
    notFound()
  }


  const category = gradeData.category
  const pricingData = pricing[category]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <AcademicExcellenceClient
        gradeData={gradeData}
        pricingData={pricingData}
        category={category}
      />

      <Footer />
    </main>
  )
}