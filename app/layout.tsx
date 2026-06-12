import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://upedlearning.in"),
  title: "UpEd | Personalized Academic Excellence",
  description:
    "One-to-one tuition programs for students from Class 1 to 12. Personalized mentoring, structured learning and measurable academic growth.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}