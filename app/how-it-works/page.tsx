import HowItWorksClient from "./HowItWorksClient"

// =========================================================================
// SERVER LAYER: SECURE AND STABLE FOR SEO ENGINE DEPLOYMENT
// =========================================================================
export const metadata = {
  title: "Our 7-Step Academic System | How UpEd Works",
  description: "Explore UpEd's structured operational methodology playbook. Discover how personalized matching, conceptual clarity, guided practice, and monthly parent consultations deliver measurable academic growth.",
  openGraph: {
    title: "How UpEd Works | Elite Academic Mentorship System",
    description: "From concern to measurable classroom success. Learn how our premium tutors guide CBSE students to independent board excellence.",
    url: "https://upedlearning.in/how-it-works",
    type: "website",
    images: [
      {
        url: "/images/metadata/how-it-works-preview.jpg",
        width: 1200,
        height: 630,
        alt: "UpEd Learning Framework Overview",
      },
    ],
  },
}

export default function Page() {
  return <HowItWorksClient />
}