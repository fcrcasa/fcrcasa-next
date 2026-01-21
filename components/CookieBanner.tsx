"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleConsent = (status: "granted" | "denied") => {
        localStorage.setItem("cookie_consent", status);
        setShowBanner(false);

        // Update GTag consent
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("consent", "update", {
                analytics_storage: status,
                ad_storage: status,
                ad_user_data: status,
                ad_personalization: status,
            });
        }
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-white border-t border-black shadow-[0_-10px_20px_rgba(0,0,0,0.05)] animate-in fade-in slide-in-from-bottom-5 duration-500">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                    <h3 className="text-lg font-serif font-bold mb-2 text-black">Informativa sui Cookie</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito e per analizzare il traffico.
                        Puoi scegliere di accettare tutti i cookie o gestire le tue preferenze. Per maggiori informazioni, consulta la nostra{" "}
                        <Link href="/cookie-policy" className="underline hover:text-black">Cookie Policy</Link>.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 w-full md:w-auto">
                    <button
                        onClick={() => handleConsent("denied")}
                        className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-black border border-black bg-white hover:bg-gray-50 transition-colors"
                    >
                        Rifiuta
                    </button>
                    <button
                        onClick={() => handleConsent("granted")}
                        className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors"
                    >
                        Accetta Tutto
                    </button>
                </div>
            </div>
        </div>
    );
}
