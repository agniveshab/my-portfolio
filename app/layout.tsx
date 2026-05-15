import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AGNIVESH AB — Full Stack Developer & AI Engineer",
  description:
    "Personal portfolio of AGNIVESH AB — Computer Science student, Full Stack Developer, AI/ML Engineer, Flutter Developer, and builder of practical AI systems. Based in India.",
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
      "Next-generation portfolio of AGNIVESH AB — building systems for the future.",
    siteName: "AGNIVESH AB Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGNIVESH AB — Full Stack Developer & AI Engineer",
    description: "Building systems for the future.",
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
        <meta name="theme-color" content="#050508" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
