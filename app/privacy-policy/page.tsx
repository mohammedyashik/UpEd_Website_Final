import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p
            className="
              mt-6
              text-zinc-400
            "
          >
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
                Introduction
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                UpEd Learning Solutions values your
                privacy and is committed to protecting
                personal information shared by parents,
                students, tutors and website visitors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Information We Collect
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                We may collect names, phone numbers,
                email addresses, student academic
                information, assessment details,
                communication records and payment
                information when services are requested.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                How We Use Information
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Information is used to provide academic
                services, mentor allocation, parent
                communication, assessment planning,
                customer support and service improvement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Data Protection
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                We implement reasonable technical and
                organizational safeguards to protect
                user information from unauthorized
                access, misuse or disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Third-Party Services
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                We may use trusted third-party services
                including payment gateways, communication
                platforms and analytics tools to operate
                our services efficiently.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                Contact Us
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                For privacy-related questions, contact
                UpEd Learning Solutions at
                support@uped.in.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}