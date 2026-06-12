"use client"

const pricingData = [
  {
    level: "Classes 1–5",
    online3m: "₹4,500",
    online12m: "₹19,000",
    home3m: "₹6,900",
    home12m: "₹29,000",
  },
  {
    level: "Classes 6–8",
    online3m: "₹6,000",
    online12m: "₹38,000",
    home3m: "₹9,000",
    home12m: "₹56,000",
  },
  {
    level: "Classes 9–10",
    online3m: "₹8,000",
    online12m: "₹42,000",
    home3m: "₹11,500",
    home12m: "₹64,000",
  },
  {
    level: "Classes 11–12",
    online3m: "₹10,000",
    online12m: "₹68,000",
    home3m: "₹14,000",
    home12m: "₹99,000",
  },
]

export default function PricingComparison() {
  return (

    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">

      {/* GLOW */}

      <div
        className="
          absolute
          left-[-120px]
          top-[10%]
          h-[340px]
          w-[340px]
          rounded-full
          bg-orange-500/10
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="max-w-3xl">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-orange-400
            "
          >
            Pricing Structure
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              md:text-6xl
            "
          >
            Transparent Pricing
            <span className="block text-orange-500">
              Built For Every Family
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-[1.9]
              text-zinc-400
              md:text-lg
            "
          >
            Flexible academic programs with both online and home tuition
            options tailored for different learning stages.
          </p>

        </div>

        {/* TABLE */}

        <div
          className="
            mt-14
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-[#0b0b0b]
          "
        >

          {/* HEADER */}

          <div
            className="
              hidden
              grid-cols-5
              border-b
              border-white/10
              bg-white/[0.03]
              lg:grid
            "
          >

            {[
              "Academic Stage",
              "Online (3M)",
              "Online (12M)",
              "Home (3M)",
              "Home (12M)",
            ].map((item, index) => (

              <div
                key={index}
                className="
                  px-6
                  py-5
                "
              >

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-zinc-400
                  "
                >
                  {item}
                </p>

              </div>

            ))}

          </div>

          {/* ROWS */}

          <div>

            {pricingData.map((item, index) => (

              <div
                key={index}
                className="
                  grid
                  border-b
                  border-white/10
                  last:border-none
                  lg:grid-cols-5
                "
              >

                {/* MOBILE */}

                <div className="grid gap-5 p-6 lg:hidden">

                  <div>

                    <p className="text-sm text-zinc-500">
                      Academic Stage
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {item.level}
                    </h3>

                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-4
                      "
                    >

                      <p className="text-xs text-zinc-500">
                        Online (3M)
                      </p>

                      <h4 className="mt-2 text-xl font-bold text-white">
                        {item.online3m}
                      </h4>

                    </div>

                    <div
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-4
                      "
                    >

                      <p className="text-xs text-zinc-500">
                        Online (12M)
                      </p>

                      <h4 className="mt-2 text-xl font-bold text-white">
                        {item.online12m}
                      </h4>

                    </div>

                    <div
                      className="
                        rounded-2xl
                        border
                        border-orange-500/20
                        bg-orange-500/[0.06]
                        p-4
                      "
                    >

                      <p className="text-xs text-orange-300">
                        Home (3M)
                      </p>

                      <h4 className="mt-2 text-xl font-bold text-orange-400">
                        {item.home3m}
                      </h4>

                    </div>

                    <div
                      className="
                        rounded-2xl
                        border
                        border-orange-500/20
                        bg-orange-500/[0.06]
                        p-4
                      "
                    >

                      <p className="text-xs text-orange-300">
                        Home (12M)
                      </p>

                      <h4 className="mt-2 text-xl font-bold text-orange-400">
                        {item.home12m}
                      </h4>

                    </div>

                  </div>

                </div>

                {/* DESKTOP */}

                <>

                  <div
                    className="
                      hidden
                      items-center
                      px-6
                      py-7
                      lg:flex
                    "
                  >

                    <h3 className="text-xl font-bold text-white">
                      {item.level}
                    </h3>

                  </div>

                  <div
                    className="
                      hidden
                      items-center
                      px-6
                      py-7
                      lg:flex
                    "
                  >

                    <p className="text-lg font-semibold text-zinc-200">
                      {item.online3m}
                    </p>

                  </div>

                  <div
                    className="
                      hidden
                      items-center
                      px-6
                      py-7
                      lg:flex
                    "
                  >

                    <p className="text-lg font-semibold text-zinc-200">
                      {item.online12m}
                    </p>

                  </div>

                  <div
                    className="
                      hidden
                      items-center
                      px-6
                      py-7
                      lg:flex
                    "
                  >

                    <p className="text-lg font-bold text-orange-400">
                      {item.home3m}
                    </p>

                  </div>

                  <div
                    className="
                      hidden
                      items-center
                      px-6
                      py-7
                      lg:flex
                    "
                  >

                    <p className="text-lg font-bold text-orange-400">
                      {item.home12m}
                    </p>

                  </div>

                </>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )
}