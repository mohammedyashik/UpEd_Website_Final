"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import LeadModal from "@/components/programs/LeadModal"

type Props = {
  gradeData: any
  pricingData: any
}

export default function ProgramLandingTemplate({
  gradeData,
  pricingData,
}: Props) {
  const [mode, setMode] = useState<"online" | "home">("online")
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
useEffect(() => {
  const handleScroll = () => {
    setShowStickyCTA(window.scrollY > 600)
  }

  window.addEventListener("scroll", handleScroll)
  handleScroll()

  return () => window.removeEventListener("scroll", handleScroll)
}, [])  
  console.log("TEMPLATE MODE:", mode)

  return (
    <main className="min-h-screen bg-black text-white pb-24">
      <Navbar />

      {/* PREMIUM HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="absolute left-[-150px] top-[-100px] h-[500px] w-[500px] rounded-full bg-orange-500/[0.05] blur-[120px] pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-400">
              Trusted Education Partner
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05]">
              {gradeData.className}
              <br />
              <span className="text-orange-500">
                {gradeData.heroTitle}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-zinc-400 leading-relaxed">
              Personalized one-to-one tuition designed to improve understanding,
              confidence and academic performance through structured academic
              support and expert tutor guidance.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 border-y border-white/5 py-6">
              <div>
                <p className="text-3xl font-black text-orange-500">500+</p>
                <p className="text-xs text-zinc-500 mt-1">Students Supported</p>
              </div>

              <div>
                <p className="text-3xl font-black">100+</p>
                <p className="text-xs text-zinc-500 mt-1">Verified Tutors</p>
              </div>

              <div>
                <p className="text-3xl font-black">4.8/5</p>
                <p className="text-xs text-zinc-500 mt-1">Parent Rating</p>
              </div>

              <div>
                <p className="text-3xl font-black">1:1</p>
                <p className="text-xs text-zinc-500 mt-1">Personal Attention</p>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-zinc-950 p-2 flex">
              <button
                onClick={() => setMode("online")}
                className={`flex-1 py-4 rounded-2xl font-black transition ${
                  mode === "online"
                    ? "bg-orange-500 text-black"
                    : "text-zinc-400"
                }`}
              >
                Online Tuition
              </button>

              <button
                onClick={() => setMode("home")}
                className={`flex-1 py-4 rounded-2xl font-black transition ${
                  mode === "home"
                    ? "bg-orange-500 text-black"
                    : "text-zinc-400"
                }`}
              >
                Home Tuition
              </button>
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-zinc-950 p-6">
  <div className="space-y-4">
    {pricingData?.[mode]?.slice(0, 3).map((plan: any) => (
      <div
        key={plan.plan}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-2">
  <p className="font-bold">
    {plan.plan}
  </p>

  {plan.popular && (
    <span className="text-[10px] px-2 py-1 rounded-full bg-orange-500 text-black font-black">
      MOST POPULAR
    </span>
  )}
</div>

          <p className="text-xs text-zinc-500">
            {plan.subjects}
          </p>
        </div>

        <p className="font-black text-orange-500">
          {plan.fee}
        </p>
      </div>
    ))}
  </div>

  <button
    onClick={() =>
      document
        .getElementById("pricing-section")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="mt-6 w-full rounded-2xl bg-orange-500 py-4 font-black text-black"
  >
    Compare Plans & Pricing
  </button>
</div>

          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950 shadow-2xl">
              <img
                src="/images/testimonials/family-success.jpg"
                alt="UpEd Student Success"
                className="w-full h-[320px] sm:h-[420px] lg:h-[620px] object-cover"
              />
            </div>

            <div className="mt-6 rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
              <p className="text-orange-400 text-xs font-bold uppercase tracking-widest">
                Admissions Open
              </p>

              <h3 className="text-2xl font-black mt-2">
                Only 12 Tutor Slots Left
              </h3>

              <p className="text-zinc-400 mt-2">
                Limited seats available for the current academic cycle.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("pricing-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-5 w-full rounded-2xl bg-orange-500 py-4 font-black text-black"
              >
                View Plans
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
  <div className="text-center max-w-3xl mx-auto mb-14">
    <p className="text-orange-500 text-sm font-bold uppercase tracking-widest">
      Parent Concerns
    </p>

    <h2 className="text-4xl md:text-6xl font-black mt-4">
      Is Your Child Facing Any Of These Challenges?
    </h2>

    <p className="text-zinc-400 text-lg mt-4">
      Many students struggle not because they lack ability, but because they
      need the right guidance, structure and support.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      {
        title: "Difficulty Understanding Concepts",
        description:
          "Struggles to grasp classroom lessons and requires repeated explanations.",
      },
      {
        title: "Low Confidence In Studies",
        description:
          "Avoids answering questions and lacks confidence during exams.",
      },
      {
        title: "Homework Becomes A Daily Battle",
        description:
          "Parents spend hours helping with assignments and school work.",
      },
      {
        title: "Inconsistent Academic Performance",
        description:
          "Scores fluctuate from test to test despite effort.",
      },
      {
        title: "Lack Of Individual Attention",
        description:
          "Large classroom environments make personalized learning difficult.",
      },
      {
        title: "Exam Stress & Anxiety",
        description:
          "Students feel overwhelmed during assessments and examinations.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-3xl border border-white/10 bg-zinc-950 p-8"
      >
        <div className="h-12 w-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 text-xl font-black">
          !
        </div>

        <h3 className="text-xl font-black mt-5">
          {item.title}
        </h3>

        <p className="text-zinc-400 mt-3 leading-relaxed">
          {item.description}
        </p>
      </div>
    ))}
  </div>

  <div className="mt-12 rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8 text-center">
    <h3 className="text-2xl font-black">
      UpEd Is Designed To Solve These Challenges
    </h3>

    <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
      Through personalized one-to-one learning, verified tutors, structured
      academic planning and continuous parent communication.
    </p>
  </div>
  <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">

  {[
    "Verified Tutors",
    "Progress Tracking",
    "Parent Updates",
    "Personalized Learning",
  ].map((item) => (
    <div
      key={item}
      className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5 text-center"
    >
      <p className="font-black">
        {item}
      </p>
    </div>
  ))}

</div>
</section>


      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5">
  <div className="text-center max-w-3xl mx-auto mb-12">
    <p className="text-orange-500 text-sm font-bold uppercase tracking-widest">
      Why Parents Trust UpEd
    </p>

    <h2 className="text-3xl md:text-5xl font-black mt-4">
      Every Tutor Is Carefully Evaluated
    </h2>

    <p className="text-zinc-400 mt-4 text-lg">
      We focus on quality, teaching ability and student outcomes before matching any tutor with a child.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 text-center">
      <div className="text-3xl mb-3">✓</div>
      <h3 className="font-black">Verified Tutors</h3>
      <p className="text-zinc-400 text-sm mt-2">
        Background and profile verification.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 text-center">
      <div className="text-3xl mb-3">✓</div>
      <h3 className="font-black">Subject Expertise</h3>
      <p className="text-zinc-400 text-sm mt-2">
        Academic knowledge assessment.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 text-center">
      <div className="text-3xl mb-3">✓</div>
      <h3 className="font-black">Teaching Evaluation</h3>
      <p className="text-zinc-400 text-sm mt-2">
        Demo classes and communication review.
      </p>
    </div>

    <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6 text-center">
      <div className="text-3xl mb-3 text-orange-400">✓</div>
      <h3 className="font-black">Continuous Monitoring</h3>
      <p className="text-zinc-400 text-sm mt-2">
        Parent feedback and performance tracking.
      </p>
    </div>

  </div>
</section>


      {/* UPED JOURNEY VISUAL TIMELINE */}
<section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
  <div className="text-center max-w-3xl mx-auto mb-16">
    <p className="text-orange-500 text-sm font-bold uppercase tracking-widest">
      Start Your Child's UpEd Journey
    </p>

    <h2 className="text-4xl md:text-6xl font-black mt-4">
      From Assessment To Academic Success
    </h2>

    <p className="text-zinc-400 mt-4 text-lg">
      A structured learning journey designed to improve confidence,
      understanding and academic performance.
    </p>
  </div>

  <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">

    {[
      {
        step: "01",
        title: "Assessment",
        image: "/images/how-it-works/student-assessment.jpg",
        description:
          "Understand the student's current academic level.",
      },
      {
        step: "02",
        title: "Planning",
        image: "/images/how-it-works/parent-concern.jpg",
        description:
          "Build a personalized learning roadmap.",
      },
      {
        step: "03",
        title: "Tutor Match",
        image: "/images/how-it-works/mentor-profile.jpg",
        description:
          "Assign the most suitable tutor.",
      },
      {
        step: "04",
        title: "Learning",
        image: "/images/how-it-works/student-mentor.jpg",
        description:
          "Structured one-to-one classes begin.",
      },
      {
        step: "05",
        title: "Results",
        image: "/images/how-it-works/mentor-parent-review.jpg",
        description:
          "Track progress and improve outcomes.",
      },
    ].map((item) => (
      <div
        key={item.step}
        className="min-w-[320px] md:min-w-[420px] snap-center rounded-[32px] overflow-hidden border border-white/10 bg-zinc-950"
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-orange-500 text-black flex items-center justify-center font-black">
              {item.step}
            </div>

            <h3 className="text-2xl font-black">
              {item.title}
            </h3>
          </div>

          <p className="text-zinc-400 mt-4 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    ))}

  </div>

  <div className="mt-6 text-center">
    <p className="text-zinc-500 text-sm">
      ← Swipe to explore the journey →
    </p>
  </div>
</section>

      {/* THE UPED DIFFERENCE */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-orange-500 text-sm font-bold uppercase tracking-widest">
            The UpEd Difference
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-4">
            Why More Parents Are Choosing UpEd
          </h2>

          <p className="text-zinc-400 text-lg mt-4 max-w-3xl mx-auto">
            See how UpEd is different from regular tuition and why families trust us for personalized academic support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-14">

          <div className="rounded-[32px] border border-red-500/20 bg-red-500/5 p-8">
            <h3 className="text-2xl font-black text-red-400">
              Regular Tuition
            </h3>

            <div className="mt-8 space-y-5">
              <div className="flex gap-3">
                <span className="text-red-400">✕</span>
                <p>Large Batch Classes</p>
              </div>

              <div className="flex gap-3">
                <span className="text-red-400">✕</span>
                <p>Limited Individual Attention</p>
              </div>

              <div className="flex gap-3">
                <span className="text-red-400">✕</span>
                <p>No Regular Progress Tracking</p>
              </div>

              <div className="flex gap-3">
                <span className="text-red-400">✕</span>
                <p>Parents Receive Few Updates</p>
              </div>

              <div className="flex gap-3">
                <span className="text-red-400">✕</span>
                <p>Same Teaching For Every Student</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-orange-500/20 bg-orange-500/5 p-8">
            <h3 className="text-2xl font-black text-orange-400">
              UpEd Personalized Learning
            </h3>

            <div className="mt-8 space-y-5">
              <div className="flex gap-3">
                <span className="text-orange-400">✓</span>
                <p>One-to-One Learning Support</p>
              </div>

              <div className="flex gap-3">
                <span className="text-orange-400">✓</span>
                <p>Personalized Academic Plan</p>
              </div>

              <div className="flex gap-3">
                <span className="text-orange-400">✓</span>
                <p>Continuous Progress Tracking</p>
              </div>

              <div className="flex gap-3">
                <span className="text-orange-400">✓</span>
                <p>Regular Parent Updates</p>
              </div>

              <div className="flex gap-3">
                <span className="text-orange-400">✓</span>
                <p>Tutor Matched To Your Child</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
  <div className="rounded-[32px] border border-orange-500/20 bg-orange-500/5 p-8 md:p-12">

    <div className="text-center max-w-3xl mx-auto">
      <p className="text-orange-500 text-sm font-bold uppercase tracking-widest">
        Who Is UpEd For?
      </p>

      <h2 className="text-3xl md:text-5xl font-black mt-4">
        Is UpEd Right For Your Child?
      </h2>

      <p className="text-zinc-400 mt-4 text-lg">
        UpEd is designed for students who need personalized support, stronger foundations and better academic performance.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

      {[
        "Needs help understanding concepts",
        "Losing confidence in studies",
        "Struggling with homework",
        "Preparing for important exams",
        "Needs personalized attention",
        "Wants better academic performance",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-white/10 bg-black/30 p-5 flex items-center gap-3"
        >
          <span className="text-orange-400 font-black text-lg">✓</span>
          <p className="font-medium">{item}</p>
        </div>
      ))}

    </div>

    <div className="mt-10 rounded-3xl border border-orange-500/20 bg-black/30 p-8 text-center">
      <h3 className="text-2xl font-black">
        If Your Child Matches Even One Of These,
        UpEd Can Help.
      </h3>

      <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
        Our personalized one-to-one learning approach is built to improve understanding, confidence and academic performance.
      </p>
    </div>

  </div>
</section>


      {/* PLAN COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <p className="text-orange-500 text-sm font-bold uppercase tracking-widest">
            Compare Plans
          </p>

          <h2 className="text-3xl md:text-5xl font-black mt-4">
            Choose The Right Plan For Your Child
          </h2>

          <p className="text-zinc-400 mt-4">
            85% of families choose the Growth Plan for balanced academic support.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-zinc-950">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-5 text-left">Feature</th>
                <th className="p-5 text-center">Starter</th>
                <th className="p-5 text-center text-orange-500">Growth</th>
                <th className="p-5 text-center">Excellence</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Subjects", "1", "2", "3+"],
                ["Weekly Classes", "✓", "✓✓", "✓✓✓"],
                ["Homework Support", "✓", "✓", "✓"],
                ["Parent Reports", "Monthly", "Bi-Weekly", "Weekly"],
                ["Test Series", "Basic", "Full", "Advanced"],
                ["Academic Mentor", "—", "✓", "✓"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/10">
                  <td className="p-5 font-semibold">{row[0]}</td>
                  <td className="p-5 text-center">{row[1]}</td>
                  <td className="p-5 text-center text-orange-400 font-bold">{row[2]}</td>
                  <td className="p-5 text-center">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-bold text-orange-400">
            Most Parents Choose Growth
          </span>
        </div>
      </section>

      <section
  id="pricing-section"
  className="max-w-7xl mx-auto px-6 py-12"
>
        <h2 className="text-4xl font-black mb-10">
          Choose Your Learning Plan
        </h2>

        <div className="flex p-1 rounded-2xl bg-zinc-900 border border-white/10 w-fit mb-10">
          <button
            onClick={() => setMode("online")}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
              mode === "online"
                ? "bg-orange-500 text-black"
                : "text-zinc-400"
            }`}
          >
            Online Tuition
          </button>

          <button
            onClick={() => setMode("home")}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
              mode === "home"
                ? "bg-orange-500 text-black"
                : "text-zinc-400"
            }`}
          >
            Home Tuition
          </button>
        </div>

        <div className="mb-10 rounded-3xl border border-orange-500/30 bg-orange-500/5 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-orange-400 text-xs font-bold uppercase tracking-widest">
                Academic Year Offer
              </p>

              <h3 className="text-2xl font-black mt-2">
                Save up to ₹2,000 on Tuition Plans
              </h3>

              <p className="text-zinc-400 mt-2">
                Limited-time discounted pricing available for new admissions.
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-red-400 font-black text-lg">
                Only 12 Tutor Slots Left
              </p>

              <p className="text-zinc-500 text-sm">
                Current academic cycle
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricingData?.[mode]?.map((plan: any) => (
            <div
              key={plan.plan}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${plan.popular ? "border-2 border-orange-500 bg-gradient-to-b from-orange-500/10 to-zinc-950 scale-[1.03] shadow-[0_0_40px_rgba(249,115,22,0.15)]" : "border border-white/10 bg-zinc-950 hover:border-orange-500/40"}`}
            >
              {plan.popular && (
                <>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-500 text-black px-4 py-1 rounded-full text-xs font-black">
                      RECOMMENDED
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-green-500/20 border border-green-500/30 px-3 py-1 text-[11px] font-bold text-green-400">
                      Save More
                    </span>
                  </div>
                </>
              )}

              <h3 className="text-2xl font-black">
                {plan.plan}
              </h3>

              <p className="text-zinc-500 text-sm mt-1">
                {plan.popular
                  ? "Most chosen by UpEd families"
                  : "Personalized academic support"}
              </p>

              <div className="mt-6">
                <p className="line-through text-zinc-500 text-sm">
                  {plan.oldFee}
                </p>

                <p className="text-5xl font-black text-white mt-1">
                  {plan.fee}
                </p>

                <p className="text-orange-400 text-sm font-semibold mt-1">
                  Limited-Time Admission Pricing
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span>✓</span>
                  <span>{plan.subjects}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>✓</span>
                  <span>{plan.classes}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>✓</span>
                  <span>Personalized One-to-One Learning</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>✓</span>
                  <span>Regular Parent Updates</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-black/30 border border-white/5 p-3 text-center">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Best For
                </p>
                <p className="font-bold mt-1">
                  {plan.popular ? "Serious Academic Improvement" : "Building Strong Foundations"}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedPlan(plan)
                  setIsModalOpen(true)
                }}
                className="mt-6 w-full rounded-2xl bg-orange-500 py-3 font-black text-black transition hover:bg-orange-400"
              >
                Choose This Plan
              </button>
            </div>
          ))}
        </div>
      </section>


      {/* STUDENT TRANSFORMATION SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-500 text-sm font-bold uppercase tracking-widest">
            Student Success Stories
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-4">
            Real Students. Real Improvement.
          </h2>

          <p className="text-zinc-400 mt-4 text-lg">
            Watch Your Child's Academic Journey Transform
          </p>
        </div>

        {/* Example student transformation image grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="rounded-3xl border border-white/10 bg-zinc-950 overflow-hidden">
            <img
              src="/images/students/Aarav.png"
              alt="Aarav"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-black">
                    Aarav
                  </h3>

                  <p className="text-zinc-500 text-sm mt-1">
                    Class 5 Student
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-green-400 font-black text-2xl">
                    +22%
                  </p>

                  <p className="text-xs text-zinc-500">
                    Score Improvement
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="text-zinc-500">
                  Before UpEd
                </span>

                <span className="text-orange-400 font-bold">
                  After UpEd
                </span>
              </div>

              <div className="mt-2 h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full w-[78%] bg-orange-500 rounded-full" />
              </div>

              <p className="text-zinc-400 mt-4">
                "UpEd helped me understand concepts better and improved my confidence in school."
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 overflow-hidden">
            <img
              src="/images/students/Saanvi.png"
              alt="Saanvi"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-black">
                    Saanvi
                  </h3>

                  <p className="text-zinc-500 text-sm mt-1">
                    Class 4 Student
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-green-400 font-black text-2xl">
                    +17%
                  </p>

                  <p className="text-xs text-zinc-500">
                    Score Improvement
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="text-zinc-500">
                  Before UpEd
                </span>

                <span className="text-orange-400 font-bold">
                  After UpEd
                </span>
              </div>

              <div className="mt-2 h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full w-[70%] bg-orange-500 rounded-full" />
              </div>

              <p className="text-zinc-400 mt-4">
                "My tutor made learning fun and always explained until I understood."
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 overflow-hidden">
            <img
              src="/images/students/Ishaan.png"
              alt="Ishaan"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-black">
                    Ishaan
                  </h3>

                  <p className="text-zinc-500 text-sm mt-1">
                    Class 6 Student
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-green-400 font-black text-2xl">
                    +20%
                  </p>

                  <p className="text-xs text-zinc-500">
                    Score Improvement
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="text-zinc-500">
                  Before UpEd
                </span>

                <span className="text-orange-400 font-bold">
                  After UpEd
                </span>
              </div>

              <div className="mt-2 h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full w-[74%] bg-orange-500 rounded-full" />
              </div>

              <p className="text-zinc-400 mt-4">
                "The regular updates helped my parents track my progress."
              </p>
            </div>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-4 mt-12">
          {[
            {
              value: "+18%",
              label: "Average Score Improvement",
            },
            {
              value: "92%",
              label: "Parent Satisfaction",
            },
            {
              value: "500+",
              label: "Students Supported",
            },
            {
              value: "100+",
              label: "Verified Tutors",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-8 text-center"
            >
              <p className="text-4xl font-black text-orange-500">
                {item.value}
              </p>

              <p className="mt-3 text-sm text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-[40px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-10 md:p-16 text-center">
          <p className="text-orange-500 text-sm font-bold uppercase tracking-widest">
            Start Your Child's UpEd Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-4 max-w-4xl mx-auto">
            Give Your Child The Personalized Support They Deserve
          </h2>

          <p className="text-zinc-400 text-lg mt-6 max-w-2xl mx-auto">
            Start with a free trial class, meet a verified tutor and receive a personalized learning plan tailored to your child's needs.
          </p>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="font-bold">✓ Personalized Learning Plan</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="font-bold">✓ Verified Subject Expert</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="font-bold">✓ Online & Home Tuition</p>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-12 rounded-2xl bg-orange-500 px-10 py-4 text-lg font-black text-black transition hover:bg-orange-400"
          >
            Book Free Trial Class
          </button>
        </div>
      </section>

      {showStickyCTA && (
  <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-orange-500/20 bg-black/95 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-4 py-3">

      <div className="flex items-center justify-between gap-4">

        <div>
          <p className="font-black text-white text-sm md:text-base">
            {mode === "home"
              ? "Home Tuition"
              : "Online Tuition"}
          </p>

          <p className="text-orange-400 font-bold text-xs md:text-sm">
            Starting From {pricingData?.[mode]?.[0]?.fee}
          </p>
        </div>

        <div className="flex items-center gap-3">

          <button
            onClick={() =>
              document
                .getElementById("pricing-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hidden md:block rounded-2xl border border-white/10 px-5 py-3 font-bold"
          >
            Compare Plans
          </button>

          <button
            onClick={() => {
              setSelectedPlan(
                pricingData?.[mode]?.find(
                  (p: any) => p.popular
                ) || pricingData?.[mode]?.[0]
              )
              setIsModalOpen(true)
            }}
            className="rounded-2xl bg-orange-500 px-5 py-3 font-black text-black hover:bg-orange-400 transition"
          >
            Book Free Class
          </button>

        </div>

      </div>

    </div>
  </div>
)}

<LeadModal
  open={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  plan={selectedPlan}
  gradeData={gradeData}
  mode={mode}
/>

<Footer />
    </main>
  )
}