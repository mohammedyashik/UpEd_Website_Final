import AboutClient from "./AboutClient"

export const metadata = {
  title: "Our Story & Vision | About UpEd Learning Solutions",
  description: "From face-to-face community consultation stalls at VR Mall Chennai to managing an elite digital and home-tuition ecosystem. Discover why premium Indian families trust UpEd mentors with their child's board readiness.",
  openGraph: {
    title: "About UpEd | Building Academic Trust One Family At A Time",
    description: "We believe education isn't about teaching more—it's about guiding better. Read our founder's story and our core student-first operational philosophy rules.",
    url: "https://upedlearning.in/about",
    type: "website",
    images: [
      {
        url: "/images/about/Founder.JPG",
        width: 1200,
        height: 630,
        alt: "UpEd Corporate Origin and Journey",
      },
    ],
  },
}

export default function Page() {
  return <AboutClient />
}
