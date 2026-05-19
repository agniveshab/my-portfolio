import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AGNIVESH AB — Full Stack Developer & AI Engineer",
  description:
    "Portfolio of AGNIVESH AB — Computer Science student, Full Stack Developer, AI/ML Engineer, and builder of practical AI systems.",
  keywords: [
    "AGNIVESH AB",
    "Full Stack Developer",
    "AI Engineer",
    "Flutter Developer",
    "Backend Engineer",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "Computer Science",
  ],
  authors: [{ name: "AGNIVESH AB", url: "https://github.com/agniveshab" }],
  creator: "AGNIVESH AB",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "AGNIVESH AB — Full Stack Developer & AI Engineer",
    description:
      "Building thoughtful software that solves real problems.",
    siteName: "AGNIVESH AB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGNIVESH AB — Full Stack Developer & AI Engineer",
    description: "Building thoughtful software that solves real problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#09090b" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
