import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export default function FAQPage() {
  const programFaqs = [
    {
      q: "What classes do you support?",
      a: "UpEd provides comprehensive academic support from Class 1 to Class 12 strictly aligned with the CBSE curriculum guidelines.",
    },
    {
      q: "What subjects are available?",
      a: "We offer complete specialized support across Mathematics, Science, English, Social Science, Hindi, Tamil, Physics, Chemistry, Biology, Accountancy, Economics, and Business Studies.",
    },
  ]

  const tuitionFaqs = [
    {
      q: "Do you provide home tuition?",
      a: "Yes. Home tuition options are actively deployed based on localized tutor matching matrices, geographical sectors, and student scheduling demands.",
    },
    {
      q: "Do you provide online tuition?",
      a: "Yes. Personalized live one-to-one digital sessions are accessible across India with identical structured worksheet tracking frameworks.",
    },
  ]

  const mentorFaqs = [
    {
      q: "How are mentors selected?",
      a: "Tutors are verified through an elite multi-phase selection screening framework, evaluating deep textbook domain expertise, communication clarity, and live mock evaluation session performance.",
    },
    {
      q: "Can I change my mentor?",
      a: "Yes. If dynamic matching goals require realignment, our Student Success advisors can coordinate clean mentor transitions seamlessly.",
    },
  ]

  const parentFaqs = [
    {
      q: "Do parents receive updates?",
      a: "Yes. Transparent milestone data logs, monthly diagnostic charts, and personal mentor reviews are regularly cataloged for parent visibility.",
    },
    {
      q: "Do you conduct assessments?",
      a: "Absolutely. Every monthly allocation is strictly partitioned to incorporate formal Concept Learning, Guided Practice Sheets, and structured Test & Revision intervals.",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="
          relative
          overflow-hidden
          px-4
          py-16
          md:py-24
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            absolute
            left-[-200px]
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-orange-500/10
            blur-[180px]
          "
        />

        <div className="mx-auto max-w-6xl text-center">
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.3em]
              text-orange-400
            "
          >
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h1
            className="
              mt-6
              text-4xl
              md:text-7xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
            "
          >
            Questions?
            <span className="block text-orange-500">
              We Have Answers.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              md:text-xl
              text-zinc-400
              leading-relaxed
            "
          >
            Everything parents need to know about UpEd programs, evaluation 
            metrics, hourly delivery caps, and operational pricing setups.
          </p>
        </div>
      </section>

      {/* SECTION 2 — PROGRAMS FAQ */}
      <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2
            className="
              text-2xl
              md:text-4xl
              font-black
              text-white
              border-b
              border-zinc-800
              pb-4
            "
          >
            Programs & Classes
          </h2>

          <div className="mt-8 space-y-4">
            {programFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-[20px] md:rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8"
              >
                <h3 className="text-lg md:text-2xl font-black text-white flex items-start gap-3">
                  <span className="text-orange-500 font-mono">Q.</span>
                  {faq.q}
                </h3>
                <p className="mt-4 pl-6 text-sm md:text-base text-zinc-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — TUITION FAQ */}
      <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2
            className="
              text-2xl
              md:text-4xl
              font-black
              text-white
              border-b
              border-zinc-800
              pb-4
            "
          >
            Learning Modes
          </h2>

          <div className="mt-8 space-y-4">
            {tuitionFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-[20px] md:rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8"
              >
                <h3 className="text-lg md:text-2xl font-black text-white flex items-start gap-3">
                  <span className="text-orange-500 font-mono">Q.</span>
                  {faq.q}
                </h3>
                <p className="mt-4 pl-6 text-sm md:text-base text-zinc-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — MENTOR FAQ */}
      <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2
            className="
              text-2xl
              md:text-4xl
              font-black
              text-white
              border-b
              border-zinc-800
              pb-4
            "
          >
            Mentors & Teaching
          </h2>

          <div className="mt-8 space-y-4">
            {mentorFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-[20px] md:rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8"
              >
                <h3 className="text-lg md:text-2xl font-black text-white flex items-start gap-3">
                  <span className="text-orange-500 font-mono">Q.</span>
                  {faq.q}
                </h3>
                <p className="mt-4 pl-6 text-sm md:text-base text-zinc-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PARENT FAQ */}
      <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2
            className="
              text-2xl
              md:text-4xl
              font-black
              text-white
              border-b
              border-zinc-800
              pb-4
            "
          >
            Parent Support
          </h2>

          <div className="mt-8 space-y-4">
            {parentFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-[20px] md:rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8"
              >
                <h3 className="text-lg md:text-2xl font-black text-white flex items-start gap-3">
                  <span className="text-orange-500 font-mono">Q.</span>
                  {faq.q}
                </h3>
                <p className="mt-4 pl-6 text-sm md:text-base text-zinc-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="px-4 py-16 md:py-24 sm:px-6 lg:px-8">
        <div
          className="
            mx-auto
            max-w-6xl
            rounded-[24px]
            md:rounded-[40px]
            border
            border-orange-500/20
            bg-orange-500/[0.05]
            p-6
            md:p-12
            text-center
          "
        >
          <h2
            className="
              text-3xl
              md:text-5xl
              font-black
              text-white
            "
          >
            Still Have Questions?
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              md:text-base
              text-zinc-400
              leading-relaxed
            "
          >
            Our academic advisors are ready to help you coordinate diagnostic setups,
            review program parameters, and choose the right structural framework.
          </p>

          <div
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
            "
          >
            <button
              className="
                w-full
                sm:w-auto
                rounded-2xl
                bg-orange-500
                px-8
                py-4
                font-bold
                text-black
                hover:bg-orange-600
                transition-colors
              "
            >
              Book Assessment
            </button>

            <button
              className="
                w-full
                sm:w-auto
                rounded-2xl
                border
                border-white/10
                px-8
                py-4
                font-bold
                text-white
                hover:bg-white/[0.05]
                transition-colors
              "
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}