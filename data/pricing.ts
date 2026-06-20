

export const pricing = {
  foundation: {
    online: [
      { plan: "Starter Plan", subjects: "1 Subject", classes: "8 Classes/Month", fee: "₹2,499", oldFee: "₹2,999" },
      { plan: "Growth Plan", subjects: "2 Subjects", classes: "16 Classes/Month", fee: "₹4,499", oldFee: "₹5,499", popular: true },
      { plan: "Excellence Plan", subjects: "All Core Subjects", classes: "24 Classes/Month", fee: "₹6,499", oldFee: "₹7,999" }
    ],
    home: [
      { plan: "Starter Plan", subjects: "1 Subject", classes: "8 Classes/Month", fee: "₹3,999", oldFee: "₹4,999" },
      { plan: "Growth Plan", subjects: "2 Subjects", classes: "16 Classes/Month", fee: "₹6,999", oldFee: "₹8,499", popular: true },
      { plan: "Excellence Plan", subjects: "All Core Subjects", classes: "24 Classes/Month", fee: "₹9,999", oldFee: "₹11,999" }
    ]
  },

  core: {
    online: [
      { plan: "Starter Plan", subjects: "1 Subject", classes: "8 Classes/Month", fee: "₹2,999", oldFee: "₹3,499" },
      { plan: "Growth Plan", subjects: "2 Subjects", classes: "16 Classes/Month", fee: "₹5,499", oldFee: "₹6,499", popular: true },
      { plan: "Excellence Plan", subjects: "All Subjects", classes: "24 Classes/Month", fee: "₹7,999", oldFee: "₹9,499" }
    ],
    home: [
      { plan: "Starter Plan", subjects: "1 Subject", classes: "8 Classes/Month", fee: "₹4,999", oldFee: "₹5,999" },
      { plan: "Growth Plan", subjects: "2 Subjects", classes: "16 Classes/Month", fee: "₹8,499", oldFee: "₹9,999", popular: true },
      { plan: "Excellence Plan", subjects: "All Subjects", classes: "24 Classes/Month", fee: "₹11,999", oldFee: "₹13,999" }
    ]
  },

  advance: {
    online: [
      { plan: "Starter Plan", subjects: "1 Subject", classes: "8 Classes/Month", fee: "₹3,499", oldFee: "₹4,299" },
      { plan: "Growth Plan", subjects: "2 Subjects", classes: "16 Classes/Month", fee: "₹6,499", oldFee: "₹7,999", popular: true },
      { plan: "Excellence Plan", subjects: "All Subjects", classes: "24 Classes/Month", fee: "₹8,999", oldFee: "₹10,999" }
    ],
    home: [
      { plan: "Starter Plan", subjects: "1 Subject", classes: "8 Classes/Month", fee: "₹5,999", oldFee: "₹6,999" },
      { plan: "Growth Plan", subjects: "2 Subjects", classes: "16 Classes/Month", fee: "₹9,999", oldFee: "₹11,999", popular: true },
      { plan: "Excellence Plan", subjects: "All Subjects", classes: "24 Classes/Month", fee: "₹13,999", oldFee: "₹15,999" }
    ]
  },

  elite: {
    online: [
      { plan: "Starter Plan", subjects: "1 Subject", classes: "8 Classes/Month", fee: "₹4,499", oldFee: "₹5,499" },
      { plan: "Growth Plan", subjects: "2 Subjects", classes: "16 Classes/Month", fee: "₹7,999", oldFee: "₹9,499", popular: true },
      { plan: "Excellence Plan", subjects: "All Subjects", classes: "24 Classes/Month", fee: "₹10,999", oldFee: "₹12,999" }
    ],
    home: [
      { plan: "Starter Plan", subjects: "1 Subject", classes: "8 Classes/Month", fee: "₹6,999", oldFee: "₹7,999" },
      { plan: "Growth Plan", subjects: "2 Subjects", classes: "16 Classes/Month", fee: "₹11,999", oldFee: "₹13,999", popular: true },
      { plan: "Excellence Plan", subjects: "All Subjects", classes: "24 Classes/Month", fee: "₹15,999", oldFee: "₹17,999" }
    ]
  }
} as const;