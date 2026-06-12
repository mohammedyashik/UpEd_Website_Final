import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export default function CancellationPolicyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
            LEGAL
          </p>

          <h1 className="mt-5 text-5xl font-black text-white md:text-7xl">
            Cancellation Policy
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
                Session Rescheduling
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Students may request session
                rescheduling with reasonable
                advance notice, subject to
                mentor availability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Student Cancellation
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Repeated last-minute cancellations
                may affect mentor allocation and
                future scheduling flexibility.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Program Discontinuation
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Parents may discontinue services
                by notifying UpEd in advance.
                Any applicable fee obligations
                remain subject to the selected plan.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                UpEd Cancellation Rights
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                UpEd reserves the right to suspend
                or terminate services in cases of
                policy violations, misuse, or
                non-payment of fees.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Contact
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                For cancellation-related requests,
                contact support@uped.in.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}