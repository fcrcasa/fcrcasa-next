import type { Metadata } from "next";
import { Libre_Caslon_Display, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";

const libreCaslon = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-libre-caslon",
  display: "swap",
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
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17891410405"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
            });

            gtag('config', 'AW-17891410405');
          `}
        </Script>
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
