import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

import AcademicJourney from "@/components/programs/recommendation/AcademicJourney"

export default function ProgramsPage() {

  return (

    <main className="min-h-screen bg-black">

      <Navbar />

      <AcademicJourney />

      <Footer />

    </main>

  )

}