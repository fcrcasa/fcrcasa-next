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
  metadataBase: new URL("https://fcrcasa.it"),
  alternates: {
    canonical: "/",
  },
  title: "FCR Casa | Impresa Edile Bergamo — Costruzioni e Ristrutturazioni",
  description:
    "FCR Casa, impresa edile a Bergamo dal 2015. Nuove costruzioni e ristrutturazioni chiavi in mano in tutta la provincia. Preventivo gratuito.",
  keywords: [
    "impresa edile bergamo",
    "costruzioni case bergamo",
    "ristrutturazione casa bergamo",
    "ristrutturazioni chiavi in mano",
    "nuove costruzioni bergamo",
    "impresa edile bergamo provincia",
    "fcr casa",
    "fontana costruzioni bergamo",
  ],
  authors: [{ name: "FCR Casa" }],
  openGraph: {
    title: "FCR Casa | Impresa Edile Bergamo — Costruzioni e Ristrutturazioni",
    description:
      "Impresa edile a Bergamo e provincia dal 2015. Nuove costruzioni, ristrutturazioni chiavi in mano e opere esterne. Preventivo gratuito.",
    url: "https://fcrcasa.it",
    siteName: "FCR Casa",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/images/hero-Yyv9pgbkxJuewnQb.jpg",
        width: 1200,
        height: 630,
        alt: "FCR Casa - Impresa Edile Bergamo, Costruzioni e Ristrutturazioni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FCR Casa | Impresa Edile Bergamo — Costruzioni e Ristrutturazioni",
    description:
      "Impresa edile a Bergamo e provincia dal 2015. Nuove costruzioni, ristrutturazioni chiavi in mano e opere esterne. Preventivo gratuito.",
    images: ["/images/hero-Yyv9pgbkxJuewnQb.jpg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "GeneralContractor"],
              "name": "FCR Casa",
              "alternateName": "F.C.R. Casa di Fontana Lorenzo",
              "description": "Impresa edile a Bergamo specializzata in nuove costruzioni, ristrutturazioni chiavi in mano e opere esterne a Bergamo e provincia.",
              "url": "https://fcrcasa.it",
              "telephone": "+39 348 724 2180",
              "email": "info@fcrcasa.it",
              "image": "https://fcrcasa.it/images/hero-Yyv9pgbkxJuewnQb.jpg",
              "logo": "https://fcrcasa.it/favicon.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via Fontanine 6",
                "addressLocality": "Brignano Gera d'Adda",
                "addressRegion": "BG",
                "postalCode": "24053",
                "addressCountry": "IT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.5467,
                "longitude": 9.6486
              },
              "areaServed": [
                { "@type": "City", "name": "Bergamo" },
                { "@type": "City", "name": "Treviglio" },
                { "@type": "City", "name": "Trescore Balneario" },
                { "@type": "City", "name": "Martinengo" },
                { "@type": "City", "name": "Casirate d'Adda" },
                { "@type": "City", "name": "Covo" }
              ],
              "founder": {
                "@type": "Person",
                "name": "Lorenzo Fontana"
              },
              "foundingDate": "2015",
              "priceRange": "€€€",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ]
            }),
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