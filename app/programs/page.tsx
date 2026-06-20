import Link from "next/link"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

import { grades } from "@/data/programs"

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4">
            Choose Your Child's Class
          </h1>

          <p className="text-zinc-400">
            Select your child's class to view tuition programs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {Object.entries(grades).map(([slug, grade]) => (
            <Link
              key={slug}
              href={`/programs/${slug}`}
              className="border border-white/10 rounded-2xl p-6 hover:border-orange-500"
            >
              <h3 className="text-2xl font-bold">
                {grade.className}
              </h3>

              <p className="text-zinc-500">
                {grade.category}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}