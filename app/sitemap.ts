import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://uped.in",
      priority: 1,
    },
    {
      url: "https://uped.in/programs",
      priority: 0.9,
    },
    {
      url: "https://uped.in/how-it-works",
      priority: 0.9,
    },
    {
      url: "https://uped.in/about",
      priority: 0.8,
    },
    {
      url: "https://uped.in/contact",
      priority: 0.8,
    },
    {
      url: "https://uped.in/careers",
      priority: 0.7,
    },
    {
      url: "https://uped.in/faq",
      priority: 0.7,
    },
  ]
}