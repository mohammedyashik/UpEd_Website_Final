export type PricingResult = {
  oneMonth: string
  threeMonths: string
  sixMonths: string
  twelveMonths: string

  recommendedPlan: string

  threeMonthSavings: string
  sixMonthSavings: string
  twelveMonthSavings: string
}

export function getPricing(program: string): PricingResult {

  const pricingMap: Record<string, PricingResult> = {

    "Core Academic Support": {
      oneMonth: "₹1,650",
      threeMonths: "₹4,500",
      sixMonths: "₹8,400",
      twelveMonths: "₹15,600",

      recommendedPlan: "6 Months",

      threeMonthSavings: "Save ₹450",
      sixMonthSavings: "Save ₹1,500",
      twelveMonthSavings: "Save ₹4,200",
    },

    "Full School Support": {
      oneMonth: "₹2,700",
      threeMonths: "₹7,500",
      sixMonths: "₹14,000",
      twelveMonths: "₹27,000",

      recommendedPlan: "6 Months",

      threeMonthSavings: "Save ₹600",
      sixMonthSavings: "Save ₹2,200",
      twelveMonthSavings: "Save ₹5,400",
    },

    "Foundation Builder Program": {
      oneMonth: "₹2,000",
      threeMonths: "₹5,500",
      sixMonths: "₹10,500",
      twelveMonths: "₹19,000",

      recommendedPlan: "6 Months",

      threeMonthSavings: "Save ₹500",
      sixMonthSavings: "Save ₹1,500",
      twelveMonthSavings: "Save ₹5,000",
    },

    "Single Subject Program": {
      oneMonth: "₹2,200",
      threeMonths: "₹6,000",
      sixMonths: "₹11,500",
      twelveMonths: "₹22,000",

      recommendedPlan: "6 Months",

      threeMonthSavings: "Save ₹600",
      sixMonthSavings: "Save ₹1,700",
      twelveMonthSavings: "Save ₹4,400",
    },

    "Dual Subject Program": {
      oneMonth: "₹4,500",
      threeMonths: "₹12,500",
      sixMonths: "₹24,000",
      twelveMonths: "₹46,000",

      recommendedPlan: "6 Months",

      threeMonthSavings: "Save ₹1,000",
      sixMonthSavings: "Save ₹4,000",
      twelveMonthSavings: "Save ₹8,000",
    },

    "Full Academic Support Program": {
      oneMonth: "₹5,800",
      threeMonths: "₹16,000",
      sixMonths: "₹29,000",
      twelveMonths: "₹56,000",

      recommendedPlan: "12 Months",

      threeMonthSavings: "Save ₹1,400",
      sixMonthSavings: "Save ₹5,800",
      twelveMonthSavings: "Save ₹13,600",
    },

    "Subject Intensive Program": {
      oneMonth: "₹4,200",
      threeMonths: "₹11,500",
      sixMonths: "₹22,000",
      twelveMonths: "₹42,000",

      recommendedPlan: "6 Months",

      threeMonthSavings: "Save ₹1,100",
      sixMonthSavings: "Save ₹3,200",
      twelveMonthSavings: "Save ₹8,400",
    },

    "Board Success Program": {
      oneMonth: "₹6,500",
      threeMonths: "₹18,000",
      sixMonths: "₹34,000",
      twelveMonths: "₹64,000",

      recommendedPlan: "12 Months",

      threeMonthSavings: "Save ₹1,500",
      sixMonthSavings: "Save ₹5,000",
      twelveMonthSavings: "Save ₹14,000",
    },

    "PCM Package": {
      oneMonth: "₹10,000",
      threeMonths: "₹28,000",
      sixMonths: "₹52,000",
      twelveMonths: "₹99,000",

      recommendedPlan: "12 Months",

      threeMonthSavings: "Save ₹2,000",
      sixMonthSavings: "Save ₹8,000",
      twelveMonthSavings: "Save ₹21,000",
    },

    "PCB Package": {
      oneMonth: "₹10,000",
      threeMonths: "₹28,000",
      sixMonths: "₹52,000",
      twelveMonths: "₹99,000",

      recommendedPlan: "12 Months",

      threeMonthSavings: "Save ₹2,000",
      sixMonthSavings: "Save ₹8,000",
      twelveMonthSavings: "Save ₹21,000",
    },

    "Commerce Success Program": {
      oneMonth: "₹8,600",
      threeMonths: "₹24,000",
      sixMonths: "₹45,000",
      twelveMonths: "₹85,000",

      recommendedPlan: "12 Months",

      threeMonthSavings: "Save ₹1,800",
      sixMonthSavings: "Save ₹7,000",
      twelveMonthSavings: "Save ₹18,200",
    },

  }

  return (
    pricingMap[program] || {
      oneMonth: "Contact Us",
      threeMonths: "Contact Us",
      sixMonths: "Contact Us",
      twelveMonths: "Contact Us",

      recommendedPlan: "3 Months",

      threeMonthSavings: "",
      sixMonthSavings: "",
      twelveMonthSavings: "",
    }
  )
}