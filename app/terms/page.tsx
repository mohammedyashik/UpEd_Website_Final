import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section
        className="
          px-4
          py-20
          sm:px-6
          lg:px-8
        "
      >
        <div className="mx-auto max-w-4xl">

          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.3em]
              text-orange-400
            "
          >
            LEGAL
          </p>

          <h1
            className="
              mt-5
              text-5xl
              font-black
              text-white
              md:text-7xl
            "
          >
            Terms & Conditions
          </h1>

          <p className="mt-6 text-zinc-400">
            Last Updated: January 2026
          </p>

          <div
            className="
              mt-12
              space-y-10
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              md:p-12
            "
          >

            <div>
              <h2 className="text-2xl font-black text-white">
                Acceptance of Terms
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                By using UpEd services, you agree to
                comply with these Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Academic Services
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                UpEd provides educational support,
                mentoring, assessments and academic
                guidance. Results may vary depending
                on student participation and effort.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Payments
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Fees must be paid according to the
                selected plan. Services may be paused
                if payments are overdue.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Tutor Allocation
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Tutor assignments depend on subject
                requirements, availability and program
                suitability. UpEd reserves the right
                to change tutor assignments when needed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Intellectual Property
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                All learning materials, worksheets,
                assessments and website content remain
                the intellectual property of UpEd.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Limitation of Liability
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                UpEd is not liable for indirect losses
                arising from the use of educational
                services or website content.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}