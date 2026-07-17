import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const defaultTitle = "Ahmed Hamdi — Senior Full Stack Engineer | AI & Enterprise Platforms";
const defaultDescription =
  "Dubai-based Senior Full Stack Engineer building secure AI-enabled platforms, dashboards, internal systems, and full-stack web applications using React, Next.js, Node.js, Python, and AI integrations.";
const siteUrl = getSiteUrl() ?? new URL(siteConfig.url);
const metadataBase = siteUrl;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultDescription,
  keywords: [
    "Ahmed Hamdi",
    "Senior Full Stack Engineer",
    "Frontend Architect",
    "React Developer Dubai",
    "Next.js Developer",
    "TypeScript Developer",
    "AI Platforms",
    "Enterprise Dashboards",
    "Full Stack Developer UAE",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "Ahmed Hamdi Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: new URL("/opengraph-image", siteUrl),
        width: 1200,
        height: 630,
        alt: "Ahmed Hamdi — Senior Full Stack Engineer building AI and enterprise platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [new URL("/opengraph-image", siteUrl)],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon" }],
    shortcut: ["/icon.svg"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              url: siteConfig.url,
              jobTitle: siteConfig.role,
              email: siteConfig.socialLinks.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              sameAs: [siteConfig.socialLinks.linkedin],
              knowsAbout: [
                "Enterprise AI platforms",
                "Full-stack web applications",
                "React and Next.js",
                "AI chatbot integrations",
                "Dashboards and internal systems",
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
