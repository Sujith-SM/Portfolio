import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sujith-sm-portfolio.vercel.app"),
  title: "SUJITH S M | Software Developer (Full Stack & AI)",
  description: "Portfolio of SUJITH S M featuring AI/ML engineering, full-stack systems, Android development, and product-focused software delivery.",
  openGraph: {
    title: "SUJITH S M | Software Developer (Full Stack & AI)",
    description: "AI/ML systems, enterprise backend integrations, and Android product engineering projects.",
    type: "website",
    images: [{ url: "/assets/og-cover.jpg", width: 1200, height: 630, alt: "Sujith S M Portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "SUJITH S M | Software Developer (Full Stack & AI)",
    description: "AI/ML systems, full-stack engineering, Android development.",
    images: ["/assets/og-cover.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
