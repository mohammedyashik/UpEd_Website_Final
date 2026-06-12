type Props = {
  pricing: {
    "1 Month": number
    "3 Months": number
    "6 Months": number
    "12 Months": number
  }

  selectedPlan: string

  setSelectedPlan: (
    plan: string
  ) => void
}

export default function PricingSelector({
  pricing,
  selectedPlan,
  setSelectedPlan,
}: Props) {

  const plans = [

    {
      duration: "1 Month",
      badge: "TRY UPED",
      amount: pricing["1 Month"],
      save: null,
    },

    {
      duration: "3 Months",
      badge: "MOST POPULAR",
      amount: pricing["3 Months"],
      save: "Academic Momentum",
    },

    {
      duration: "6 Months",
      badge: "PARENT FAVOURITE",
      amount: pricing["6 Months"],
      save: "Better Value",
    },

    {
      duration: "12 Months",
      badge: "MAXIMUM SAVINGS",
      amount: pricing["12 Months"],
      save: "Best Investment",
    },

  ]

  return (

    <section className="mt-12">

      <h2
        className="
          text-4xl
          font-black
          text-white
        "
      >
        Choose Your Plan
      </h2>

      <p
        className="
          mt-3
          text-zinc-400
        "
      >
        Longer plans provide better academic
        consistency and savings.
      </p>

      <div
        className="
          mt-8
          grid
          gap-5
          lg:grid-cols-4
        "
      >

        {plans.map((plan) => {

          const monthly =
            Math.round(
              plan.amount /
              Number(
                plan.duration.split(" ")[0]
              )
            )

          return (

            <button
              key={plan.duration}
              onClick={() =>
                setSelectedPlan(
                  plan.duration
                )
              }
              className={`
                relative
                rounded-[32px]
                border
                p-6
                text-left
                transition-all
                duration-300

                ${
                  selectedPlan ===
                  plan.duration
                    ? "border-orange-500 bg-orange-500/10 scale-[1.02]"
                    : "border-white/10 bg-white/[0.03]"
                }
              `}
            >

              <div
                className="
                  absolute
                  right-4
                  top-4
                "
              >

                <span
                  className="
                    rounded-full
                    bg-orange-500
                    px-3
                    py-1
                    text-xs
                    font-black
                    text-black
                  "
                >
                  {plan.badge}
                </span>

              </div>

              <p
                className="
                  mt-10
                  text-lg
                  font-bold
                  text-white
                "
              >
                {plan.duration}
              </p>

              <h3
                className="
                  mt-4
                  text-5xl
                  font-black
                  text-white
                "
              >
                ₹{plan.amount.toLocaleString()}
              </h3>

              <p
                className="
                  mt-3
                  text-zinc-400
                "
              >
                Approx ₹
                {monthly.toLocaleString()}
                /month
              </p>

              {plan.save && (

                <div
                  className="
                    mt-5
                    rounded-xl
                    bg-green-500/10
                    px-4
                    py-3
                  "
                >

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-green-400
                    "
                  >
                    {plan.save}
                  </p>

                </div>

              )}

              <div
                className="
                  mt-6
                  rounded-xl
                  border
                  border-white/10
                  p-3
                "
              >

                <p
                  className="
                    text-sm
                    text-zinc-300
                  "
                >
                  ✓ CBSE Curriculum

                  <br />

                  ✓ Personal Mentor

                  <br />

                  ✓ Progress Tracking

                </p>

              </div>

              {selectedPlan ===
                plan.duration && (

                <div
                  className="
                    mt-5
                    rounded-xl
                    bg-orange-500
                    py-3
                    text-center
                    font-black
                    text-black
                  "
                >
                  Selected
                </div>

              )}

            </button>

          )

        })}

      </div>

    </section>

  )

}