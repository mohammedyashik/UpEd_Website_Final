"use client"

import { useState } from "react"
import { getPricing } from "@/lib/pricing-engine"

type Props = {
  program: string
  onPlanSelect?: (plan: string, amount: string) => void
}

export default function PricingPlans({
  program,
  onPlanSelect,
}: Props) {

  const pricing = getPricing(program)

  const [selectedPlan, setSelectedPlan] =
    useState(pricing.recommendedPlan)

  const plans = [
    {
      name: "1 Month",
      price: pricing.oneMonth,
      save: "",
      badge: "Starter",
    },
    {
      name: "3 Months",
      price: pricing.threeMonths,
      save: pricing.threeMonthSavings,
      badge: "Popular",
    },
    {
      name: "6 Months",
      price: pricing.sixMonths,
      save: pricing.sixMonthSavings,
      badge: "Best Results",
    },
    {
      name: "12 Months",
      price: pricing.twelveMonths,
      save: pricing.twelveMonthSavings,
      badge: "Best Value",
    },
  ]

  return (

    <section className="mt-10">

      <div className="mb-8 text-center">

        <h2 className="text-3xl font-black text-white">
          Choose Your Plan
        </h2>

        <p className="mt-2 text-zinc-400">
          Flexible plans designed for long-term academic success
        </p>

      </div>

      <div
        className="
          grid
          gap-6
          lg:grid-cols-4
        "
      >

        {plans.map((plan) => {

          const active =
            selectedPlan === plan.name

          const recommended =
            pricing.recommendedPlan === plan.name

          return (

            <button
              key={plan.name}
              onClick={() => {

                setSelectedPlan(plan.name)

                onPlanSelect?.(
                  plan.name,
                  plan.price,
                )

              }}
              className={`
                relative
                rounded-[28px]
                border
                p-6
                text-left
                transition-all
                duration-300

                ${
                  active
                    ? "border-orange-500 bg-orange-500/10 scale-[1.03]"
                    : "border-white/10 bg-white/[0.03]"
                }
              `}
            >

              {recommended && (

                <div
                  className="
                    absolute
                    -top-3
                    left-1/2
                    -translate-x-1/2
                    rounded-full
                    bg-orange-500
                    px-4
                    py-1
                    text-xs
                    font-bold
                    text-black
                  "
                >
                  RECOMMENDED
                </div>

              )}

              <div
                className="
                  mb-3
                  inline-flex
                  rounded-full
                  border
                  border-white/10
                  px-3
                  py-1
                  text-xs
                  text-orange-300
                "
              >
                {plan.badge}
              </div>

              <h3 className="text-xl font-bold text-white">
                {plan.name}
              </h3>

              <div className="mt-4">

                <div
                  className="
                    text-4xl
                    font-black
                    text-white
                  "
                >
                  {plan.price}
                </div>

              </div>

              {plan.save && (

                <div
                  className="
                    mt-4
                    rounded-xl
                    bg-green-500/10
                    px-3
                    py-2
                    text-sm
                    font-semibold
                    text-green-400
                  "
                >
                  {plan.save}
                </div>

              )}

              <div
                className="
                  mt-6
                  space-y-3
                  text-sm
                  text-zinc-300
                "
              >

                <div>✓ Dedicated Mentor</div>

                <div>✓ Weekly Tracking</div>

                <div>✓ Parent Reports</div>

                <div>✓ Academic Support</div>

                <div>✓ Progress Monitoring</div>

              </div>

            </button>

          )

        })}

      </div>

      <div
        className="
          mt-8
          rounded-[24px]
          border
          border-orange-500/20
          bg-orange-500/5
          p-5
          text-center
        "
      >

        <p
          className="
            text-sm
            font-semibold
            text-orange-300
          "
        >
          Only 7 mentor slots available this month
        </p>

      </div>

    </section>

  )

}