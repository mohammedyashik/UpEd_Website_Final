import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
            LEGAL
          </p>

          <h1 className="mt-5 text-5xl font-black text-white md:text-7xl">
            Refund Policy
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
                Assessment Fees
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Free academic assessments do not
                involve any charges and therefore
                do not qualify for refunds.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Program Fees
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Once academic services have commenced,
                fees paid are generally non-refundable
                due to mentor allocation, scheduling,
                and academic planning commitments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Exceptional Circumstances
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Refund requests arising from special
                circumstances may be reviewed on a
                case-by-case basis at the sole
                discretion of UpEd Learning Solutions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Processing Time
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Approved refunds, if any, will be
                processed within 7–14 business days
                through the original payment method.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Contact
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                For refund-related inquiries,
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