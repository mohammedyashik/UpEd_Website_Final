import { notFound } from "next/navigation"

import { grades } from "@/data/programs"
import { pricing } from "@/data/pricing"

import ProgramLandingTemplate from "@/components/programs/ProgramLandingTemplate"

type Props = {
  params: Promise<{
    grade: string
  }>
}

export default async function ProgramLandingPage({
  params,
}: Props) {
  const { grade } = await params

  const gradeData =
    grades[grade as keyof typeof grades]

  if (!gradeData) {
    notFound()
  }

  return (
    <ProgramLandingTemplate
      gradeData={gradeData}
      pricingData={pricing[gradeData.category]}
    />
  )
}