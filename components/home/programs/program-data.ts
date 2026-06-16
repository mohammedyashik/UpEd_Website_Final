export interface ProgramTier {
  name: string;
  tagline: string;
  description: string;
  startsFrom: string;
  features: string[];
}

export interface ClassEcosystem {
  id: string;
  label: string;
  range: string;
  programs: ProgramTier[];
}

export const classEcosystemData: ClassEcosystem[] = [
  {
    id: "primary",
    label: "Classes 1–5",
    range: "Primary Foundation",
    programs: [
      {
        name: "Academic Excellence Foundation",
        tagline: "Cognitive Skill & Habit Mapping",
        description: "Personalized 1-on-1 mentorship focused on developing intuitive mathematical skills, reading comprehension, and early critical logic structures.",
        startsFrom: "₹2,499/month",
        features: ["1-on-1 Personalized Mapping", "Mental Math Modules", "Weekly Progress Trackers"]
      }
    ]
  },
  {
    id: "middle",
    label: "Classes 6–8",
    range: "Middle School Core",
    programs: [
      {
        name: "Academic Excellence Core",
        tagline: "School Curriculum Mastery",
        description: "Rigorous 1-on-1 specialized support targeting school curricula while building foundational confidence for higher academic tracks.",
        startsFrom: "₹3,999/month",
        features: ["Subject-Matter Specialists", "School Rank Optimizers", "Customized Learning Paths"]
      },
      {
        name: "VECTOR™ Pre-Foundation",
        tagline: "Early IIT-JEE / NEET Primer",
        description: "Introduces advanced logical reasoning, mathematical pattern analysis, and core science concepts to give students an early competitive edge.",
        startsFrom: "₹5,499/month",
        features: ["Olympiad Training Formats", "Advanced Analytical Logic", "Weekly Mentorship Strategy"]
      }
    ]
  },
  {
    id: "high",
    label: "Classes 9–10",
    range: "High School Milestone",
    programs: [
      {
        name: "Board Dominance System",
        tagline: "Rank Strategy & Concept Mastery",
        description: "Strategic curriculum compression designed to maximize board exam scoring capabilities while building core analytical problem-solving speeds.",
        startsFrom: "₹5,499/month",
        features: ["Board Pattern Mock Frameworks", "Answer Script Engineering", "24/7 Priority Mentor Desk"]
      },
      {
        name: "VECTOR™ Foundation",
        tagline: "Integrated Competitive Strategy",
        description: "Deep, structural concept building matching national competitive matrices. Designed to bridge the massive academic gap between Class 10 and Class 11.",
        startsFrom: "₹7,999/month",
        features: ["Advanced Physics & Math Modules", "Numerical Speed Drills", "Targeted Rank Architecture"]
      }
    ]
  },
  {
    id: "senior",
    label: "Classes 11–12",
    range: "Senior Secondary Elite",
    programs: [
      {
        name: "Board Excellence Track",
        tagline: "Stream-Specific Specialized Tutoring",
        description: "Deep content deep-dives in Physics, Chemistry, Math, or Biology explicitly designed to secure premium scores in national board frameworks.",
        startsFrom: "₹6,999/month",
        features: ["Advanced Conceptual Mapping", "Derivation & Numericals Drills", "Past 10-Year Trend Analysis"]
      },
      {
        name: "UPED VECTOR™ JEE",
        tagline: "Advanced Competitive Engineering",
        description: "Our elite, signature 5-stage milestone progression framework built for ambitious minds aiming for top ranks in IIT-JEE Main & Advanced.",
        startsFrom: "₹11,999/month",
        features: ["Elite Rank-Mapping Engine", "Advanced Micro-Syllabus Tracking", "1-on-1 Personal Strategy Guide"]
      }
    ]
  }
];