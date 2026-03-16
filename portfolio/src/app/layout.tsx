import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madhav Donthula | Software Engineer & Product Builder",
  description:
    "Personal portfolio of Madhav Donthula - Software Engineer, Data Scientist, and Product Builder. CS & Data Science @ UC Berkeley. Co-Founder of Guardian.",
  keywords: [
    "Madhav Donthula",
    "Software Engineer",
    "Data Scientist",
    "UC Berkeley",
    "Portfolio",
    "Guardian",
  ],
  authors: [{ name: "Madhav Donthula", url: "https://madhavdonthula.com" }],
  openGraph: {
    title: "Madhav Donthula | Software Engineer & Product Builder",
    description:
      "Personal portfolio - Software Engineer, Data Scientist, Product Builder. CS @ UC Berkeley.",
    url: "https://madhavdonthula.com",
    siteName: "Madhav Donthula Portfolio",
    type: "website",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhav Donthula | Software Engineer & Product Builder",
    description: "Personal portfolio - Software Engineer, Data Scientist, Product Builder.",
  },
  metadataBase: new URL("https://madhavdonthula.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
