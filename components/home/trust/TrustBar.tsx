"use client"

const trustItems = [
  "5000+ Students Supported",
  "92% Parent Satisfaction",
  "1:1 Personal Mentorship",
  "Daily Study Monitoring",
  "Weekly Parent Reports",
  "Expert Academic Guidance",
]

export default function TrustBar() {
  return (

    <section className="relative overflow-hidden px-3 py-6 md:px-6">

      <div
        className="
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[28px]
          border
          border-orange-500/10
          bg-[#0a0a0a]
          shadow-[0_0_80px_rgba(249,115,22,0.06)]
        "
      >

        {/* DESKTOP */}

        <div className="hidden overflow-hidden lg:flex">

          <div
            className="
              flex
              min-w-max
              animate-[marquee_28s_linear_infinite]
              items-center
              gap-6
              px-6
              py-5
            "
          >

            {[...trustItems, ...trustItems].map((item, index) => (

              <div
                key={index}
                className="
                  flex
                  shrink-0
                  items-center
                  gap-4
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-4
                  backdrop-blur-xl
                "
              >

                <div className="h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.9)]" />

                <p className="whitespace-nowrap text-sm font-medium tracking-wide text-orange-100">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* MOBILE + TABLET */}

        <div className="overflow-hidden lg:hidden">

          <div
            className="
              flex
              min-w-max
              animate-[marquee_18s_linear_infinite]
              items-center
              gap-4
              px-4
              py-4
            "
          >

            {[...trustItems, ...trustItems].map((item, index) => (

              <div
                key={index}
                className="
                  flex
                  shrink-0
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-3
                  backdrop-blur-xl
                "
              >

                <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.9)]" />

                <p className="whitespace-nowrap text-sm font-medium text-orange-100">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )
}