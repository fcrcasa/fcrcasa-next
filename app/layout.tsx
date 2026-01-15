import type { Metadata } from "next";
import { Libre_Caslon_Display, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  description: "FCR Casa è un'impresa edile a Bergamo specializzata in nuove costruzioni e ristrutturazioni chiavi in mano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        suppressHydrationWarning={true}
        className={`${libreCaslon.variable} ${nunito.variable} antialiased font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
