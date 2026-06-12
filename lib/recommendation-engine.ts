export type RecommendationResult = {
  program: string
  tutor: string
  crmTag: string
}

export function getRecommendation(
  studentClass: string,
  selectedSubjects: string[],
) : RecommendationResult {

  const subjectCount = selectedSubjects.length

  /* CLASSES 1-3 */

  if (studentClass === "Classes 1–3") {

    if (subjectCount <= 2) {

      return {
        program: "Core Academic Support",
        tutor: "Primary Academic Mentor",
        crmTag: "Class1_3_Core",
      }

    }

    return {
      program: "Full School Support",
      tutor: "Primary School Mentor",
      crmTag: "Class1_3_Full",
    }

  }

  /* CLASSES 4-5 */

  if (studentClass === "Classes 4–5") {

    return {
      program: "Foundation Builder Program",
      tutor: "Foundation Academic Mentor",
      crmTag: "Class4_5_Foundation",
    }

  }

  /* CLASSES 6-8 */

  if (studentClass === "Classes 6–8") {

    if (subjectCount === 1) {

      return {
        program: "Single Subject Program",
        tutor: "Middle School Tutor",
        crmTag: "Class6_8_Single",
      }

    }

    if (subjectCount === 2) {

      return {
        program: "Dual Subject Program",
        tutor: "Middle School STEM Tutor",
        crmTag: "Class6_8_Dual",
      }

    }

    return {
      program: "Full Academic Support Program",
      tutor: "Academic Performance Mentor",
      crmTag: "Class6_8_Full",
    }

  }

  /* CLASSES 9-10 */

  if (studentClass === "Classes 9–10") {

    if (subjectCount <= 2) {

      return {
        program: "Subject Intensive Program",
        tutor: "Board Exam Subject Mentor",
        crmTag: "Class9_10_Intensive",
      }

    }

    return {
      program: "Board Success Program",
      tutor: "Board Exam Mentor",
      crmTag: "Class9_10_Board",
    }

  }

  /* SCIENCE */

  if (studentClass === "Classes 11–12 Science") {

    const hasPhysics =
      selectedSubjects.includes("Physics")

    const hasChemistry =
      selectedSubjects.includes("Chemistry")

    const hasMaths =
      selectedSubjects.includes("Mathematics")

    const hasBiology =
      selectedSubjects.includes("Biology")

    if (
      hasPhysics &&
      hasChemistry &&
      hasMaths
    ) {

      return {
        program: "PCM Package",
        tutor: "Senior Science Faculty",
        crmTag: "Class11_12_PCM",
      }

    }

    if (
      hasPhysics &&
      hasChemistry &&
      hasBiology
    ) {

      return {
        program: "PCB Package",
        tutor: "Senior Biology Faculty",
        crmTag: "Class11_12_PCB",
      }

    }

    return {
      program: "Single Subject Program",
      tutor: "Senior Subject Faculty",
      crmTag: "Class11_12_Single",
    }

  }

  /* COMMERCE */

  if (
    studentClass === "Classes 11–12 Commerce"
  ) {

    return {

      program: "Commerce Success Program",

      tutor: "Commerce Stream Mentor",

      crmTag: "Class11_12_Commerce",

    }

  }

  return {

    program: "Academic Support Program",

    tutor: "Academic Advisor",

    crmTag: "General",

  }

}