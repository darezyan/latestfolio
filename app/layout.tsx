import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darezyan.me"),
  title: "Dare Zayan | Frontend Engineer",
  description:
    "Frontend Engineer and Web Designer at Lendsqr, previously at Squad by GTCO and Kora. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.",
  generator: "Next.js",
  applicationName: "Dare Zayan Portfolio",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
 
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://darezyan.me",
    siteName: "Dare Zayan",
    title: "Dare Zayan | Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer at Lendsqr, previously at Squad by GTCO and Kora. Working remotely from Lagos, Nigeria.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dare Zayan, Frontend Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dare Zayan | Frontend Engineer",
    description: "Frontend Engineer and Web Designer at Lendsqr, working remotely from Lagos, Nigeria.",
    creator: "@darezyan",
    images: ["/og-image.png"],
  },
  manifest: "/site.webmanifest",
  themeColor: "#0E1016",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
