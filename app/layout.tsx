import type { Metadata } from "next";
import { Libre_Caslon_Display, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { GoogleTagManager } from "@next/third-parties/google";

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
  description:
    "FCR Casa è un'impresa edile a Bergamo specializzata in nuove costruzioni e ristrutturazioni chiavi in mano. Edilizia di qualità e design moderno.",
  keywords: [
    "impresa edile bergamo",
    "costruzioni case bergamo",
    "ristrutturazioni chiavi in mano",
    "fcr casa",
  ],
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
    icon: [{ url: "/favicon.png", type: "image/png" }],
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
        {/*
         * CONSENT MODE DEFAULT — deve essere il primo script che gira,
         * prima che GTM carichi qualsiasi tag. Lo mettiamo qui nel <head>
         * come script inline sincrono (no strategy="afterInteractive").
         * GTM leggerà questo stato dal dataLayer quando si inizializza.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${libreCaslon.variable} ${nunito.variable} antialiased font-sans`}
      >
        {/* GTM noscript fallback — primo figlio del body, come richiesto da Google */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KLMM99LD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        {children}
        <Footer />
        <CookieBanner />

        {/*
         * GoogleTagManager inietta lo snippet gtm.js correttamente nel <head>
         * tramite @next/third-parties. Deve stare dentro <body> (non fuori).
         * GTM gestirà internamente tutti i tag: GA4, GAds, Conversion Linker.
         * NON serve più il tag gtag.js diretto — tutto passa da GTM.
         */}
        <GoogleTagManager gtmId="GTM-KLMM99LD" />
      </body>
    </html>
  );
}