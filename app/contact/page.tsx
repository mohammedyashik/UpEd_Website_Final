import ContactClient from "./ContactClient"

export const metadata = {
  title: "Speak with an Academic Advisor | Contact UpEd Support",
  description: "Have questions regarding specialized program tiers, mentor availability, pricing metrics, or custom scheduling? Access instant WhatsApp chat routes and direct support call channels here.",
  openGraph: {
    title: "Contact UpEd | Real-Time Advisor Consultation Channels",
    description: "Get comprehensive evaluation slots and programmatic custom advice mapped for your child within 10 minutes.",
    url: "https://upedlearning.in/contact",
    type: "website",
    images: [
      {
        url: "/images/metadata/contact-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Contact UpEd Support Infrastructure",
      },
    ],
  },
}

export default function Page() {
  return <ContactClient />
}