import type { Metadata } from "next";
import { Libre_Caslon_Display, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";

const libreCaslon = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-libre-caslon",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "FCR Casa | Impresa Edile Bergamo",
  description: "FCR Casa è un'impresa edile a Bergamo specializzata in nuove costruzioni e ristrutturazioni chiavi in mano. Edilizia di qualità e design moderno.",
  keywords: ["impresa edile bergamo", "costruzioni case bergamo", "ristrutturazioni chiavi in mano", "fcr casa"],
  authors: [{ name: "FCR Casa" }],
  openGraph: {
    title: "FCR Casa | Impresa Edile Bergamo",
    description: "Specialisti in nuove costruzioni e ristrutturazioni a Bergamo.",
    url: "https://fcrcasa.it",
    siteName: "FCR Casa",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FCR Casa | Impresa Edile Bergamo",
    description: "Specialisti in nuove costruzioni e ristrutturazioni a Bergamo.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${libreCaslon.variable} ${nunito.variable} antialiased font-sans`}
      >
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
