import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti | FCR Casa — Preventivo Gratuito Ristrutturazione Bergamo",
  description:
    "Preventivo gratuito per ristrutturazioni e nuove costruzioni a Bergamo. Rispondiamo entro 24/48 ore. Chiamaci: +39 348 724 2180.",
};

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
