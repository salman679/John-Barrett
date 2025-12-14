import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCallToAction from "@/components/ui/StickyCallToAction";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Barrett Leadership | Transform Your Leadership Journey",
  description:
    "World-class leadership coaching, executive development, and keynote speaking. Accelerate your growth through proven transformation frameworks with 20+ years of expertise.",
  keywords:
    "leadership coaching, executive coaching, keynote speaker, leadership development, team workshops, business coaching",
  authors: [{ name: "John Barrett" }],
  openGraph: {
    title: "John Barrett Leadership | Transform Your Leadership Journey",
    description: "World-class leadership coaching and executive development",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "John Barrett Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Barrett Leadership | Transform Your Leadership Journey",
    description: "World-class leadership coaching and executive development",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased bg-white text-navy-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyCallToAction />
      </body>
    </html>
  );
}
