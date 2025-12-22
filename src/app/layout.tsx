import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saksham Tyagi — Founder & Engineer",
  description:
    "Building Web3 infrastructure and premium interfaces. Co-founder at DonaLabs, part of Aptos Accelerator. Crafting developer tools and pixel-perfect experiences.",
  keywords: [
    "Web3",
    "Blockchain",
    "Frontend",
    "Developer",
    "Aptos",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Saksham Tyagi" }],
  openGraph: {
    title: "Saksham Tyagi — Founder & Engineer",
    description:
      "Building Web3 infrastructure and premium interfaces. Co-founder at DonaLabs, part of Aptos Accelerator.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham Tyagi — Founder & Engineer",
    description:
      "Building Web3 infrastructure and premium interfaces. Co-founder at DonaLabs, part of Aptos Accelerator.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
