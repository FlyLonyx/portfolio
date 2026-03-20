import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundOrbs } from "@/components/background-orbs";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Titouan Jego — Développeur Full Stack",
  description:
    "Portfolio de Titouan Jego, développeur full stack passionné par Java, Go, Python et les technologies web modernes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <BackgroundOrbs />
          <Navbar />
          <main className="relative z-10 flex-1 pt-24 md:pt-28">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
