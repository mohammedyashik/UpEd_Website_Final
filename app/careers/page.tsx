import CareersClient from "./CareersClient"

// =========================================================================
// SERVER LAYER: SECURE AND STABLE FOR SEO ENGINE DEPLOYMENT
// =========================================================================
export const metadata = {
  title: "Join Our Elite Mentor Workspace | Careers at UpEd",
  description: "Apply as a premium CBSE Mathematics, Science, or English tutor. Enjoy highly competitive hourly payouts, flexible schedules, and shape student confidence through our structured mentorship system.",
  openGraph: {
    title: "Careers at UpEd | Join India's Premium Mentorship Circle",
    description: "We select the top 5% of educators. Showcase your core subject proficiency and step into a high-growth teaching role right from home.",
    url: "https://upedlearning.in/careers",
    type: "website",
    images: [
      {
        url: "/images/metadata/careers-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Join the UpEd Workspace Team Culture",
      },
    ],
  },
}

export default function Page() {
  return <CareersClient />
}