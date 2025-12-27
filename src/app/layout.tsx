import type { Metadata } from "next";
import { Open_Sans, Lato, Syne } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata: Metadata = {
  title: {
    default: "AiMS – AI For Mentoring Students | BrightSphere Learning",
    template: "%s | BrightSphere Learning",
  },
  description: "AiMS is a live online skill development program for Grades 6-12. Learn real-world AI skills through mentor-led sessions, hands-on projects, and earn certificates. Join 5000+ learners today!",
  keywords: [
    "AI for students",
    "AI learning program",
    "AI course for kids",
    "online AI classes",
    "skill development for students",
    "NEP 2020 AI program",
    "live online classes",
    "AI mentoring",
    "student AI projects",
    "BrightSphere Learning",
    "AiMS program",
  ],
  authors: [{ name: "BrightSphere Learning" }],
  creator: "BrightSphere Learning",
  publisher: "BrightSphere Learning",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "BrightSphere Learning",
    title: "AiMS – AI For Mentoring Students | BrightSphere Learning",
    description: "Live online skill development program for Grades 6-12. Learn real-world AI skills through mentor-led sessions.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "AiMS - AI For Mentoring Students",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AiMS – AI For Mentoring Students | BrightSphere Learning",
    description: "Live online skill development program for Grades 6-12. Learn real-world AI skills.",
    images: ["/images/og-image.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://brightsphere.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${lato.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
