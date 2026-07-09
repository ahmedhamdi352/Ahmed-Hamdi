import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const defaultTitle = "Ahmed Hamdi | Senior Full Stack Engineer";
const defaultDescription =
  "Senior Full Stack Engineer in Dubai building AI-enabled enterprise platforms, scalable frontend architectures, dashboards, and secure internal tools.";
const siteUrl = getSiteUrl();
// Local-only metadata fallback. Production must set NEXT_PUBLIC_SITE_URL;
// Vercel's production URL is used automatically when available.
const metadataBase = siteUrl ?? new URL("http://localhost:3000");

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
    ...(siteUrl ? { url: siteUrl } : {}),
    siteName: "Ahmed Hamdi Portfolio",
    locale: "en_US",
    type: "website",
    ...(siteUrl
      ? {
          images: [
            {
              url: new URL("/opengraph-image", siteUrl),
              width: 1200,
              height: 630,
              alt: "Ahmed Hamdi — Senior Full Stack Engineer",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    ...(siteUrl
      ? { images: [new URL("/opengraph-image", siteUrl)] }
      : {}),
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
