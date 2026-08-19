import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manvitha Reddy Yalluru | AI/ML & Software Engineer",
  description: "Portfolio of Manvitha Reddy Yalluru, a Computer Science & AI/ML undergraduate specializing in machine learning, deep learning, backend development, and software engineering.",
  keywords: [
    "Manvitha Reddy Yalluru", 
    "AI/ML Engineer", 
    "Software Engineer", 
    "Portfolio", 
    "Mohan Babu University", 
    "ServiceNow CSA", 
    "ServiceNow CAD",
    "Java Full Stack"
  ],
  authors: [{ name: "Manvitha Reddy Yalluru" }],
  openGraph: {
    title: "Manvitha Reddy Yalluru | AI/ML & Software Engineer",
    description: "Portfolio of Manvitha Reddy Yalluru, a Computer Science & AI/ML undergraduate specializing in machine learning, deep learning, backend development, and software engineering.",
    type: "website",
    locale: "en_US",
    url: "https://manvitha-portfolio.vercel.app",
    siteName: "Manvitha Reddy Yalluru Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manvitha Reddy Yalluru | AI/ML & Software Engineer",
    description: "Portfolio of Manvitha Reddy Yalluru, a Computer Science & AI/ML undergraduate.",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg-custom text-text-custom">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
