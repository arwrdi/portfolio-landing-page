import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arwin Renardi | Flutter Developer",
  description:
    "Flutter Developer with 3+ years of software development experience building enterprise and financial mobile applications, with full-stack experience in Next.js, TypeScript, Supabase, and PostgreSQL.",
  keywords: [
    "Arwin Renardi",
    "Flutter Developer",
    "Dart Developer",
    "Mobile Developer",
    "Riverpod",
    "Firebase",
    "Next.js",
    "Jakarta",
    "Indonesia",
  ],
  authors: [{ name: "Arwin Renardi" }],
  creator: "Arwin Renardi",
  openGraph: {
    title: "Arwin Renardi | Flutter Developer",
    description:
      "Flutter-focused developer building enterprise, financial, and full-stack products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arwin Renardi | Flutter Developer",
    description:
      "Flutter-focused developer building enterprise, financial, and full-stack products.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="page-atmosphere h-dvh overflow-hidden font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
