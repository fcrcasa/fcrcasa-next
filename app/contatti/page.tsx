"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contatti() {
    const [showAltroService, setShowAltroService] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Validation
        const requiredFields = ["nome", "email", "telefono", "luogo", "servizio", "descrizione"];
        let isValid = true;

        // Check required fields (basic check, browser 'required' handles most but custom logic was requested)
        // We rely on standard HTML required attributes and manual check for service

        // Check service 'Altro'
        const service = formData.get("servizio");
        const altroService = formData.get("altroServizio");
        if (!service) {
            setErrorMessage("Seleziona un tipo di servizio.");
            setFormStatus("error");
            return;
        }
        if (service === "Altro" && (!altroService || altroService.toString().trim() === "")) {
            setErrorMessage("Specifica il tipo di servizio.");
            setFormStatus("error");
            return;
        }

        if (!formData.get("privacy")) {
            setErrorMessage("Devi accettare l'informativa sulla privacy.");
            setFormStatus("error");
            return;
        }

        // Append standard recipient (handled by formsubmit.co based on form configuration or hidden field if added)
        // The snippet used fetch('https://formsubmit.co/ajax/info@fcrcasa.it') 

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@fcrcasa.it", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setFormStatus("success");
                form.reset();
                setShowAltroService(false);

                // GTM Conversion Event
                if (typeof window !== "undefined") {
                    (window as any).dataLayer = (window as any).dataLayer || [];
                    (window as any).dataLayer.push({
                        event: "form_submission_success",
                        form_id: "contact_form",
                        form_name: "Richiesta Preventivo"
                    });
                }
            } else {
                setFormStatus("error");
                const data = await response.json().catch(() => ({}));
                setErrorMessage(data.message || "Si è verificato un errore. Riprova più tardi.");
            }
        } catch (error) {
            setFormStatus("error");
            setErrorMessage("Errore di connessione. Controlla la tua rete e riprova.");
        }
    };

    return (
        <main className="pt-32 pb-20 min-h-screen bg-white text-black font-serif">
            <div className="container mx-auto mb-16 text-center">
                <h1 className="font-serif text-5xl text-black">
                    Contattaci
                </h1>
            </div>

            <div className="w-[90%] max-w-[1400px] mx-auto px-6 py-10 md:px-32 md:py-20 bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-black">
                <h2 className="text-3xl md:text-[28px] font-semibold mb-5 text-black">
                    Richiedi un Preventivo Gratuito e Senza Impegno
                </h2>
                <p className="mb-8 text-[#333] text-base leading-relaxed">
                    Compila il modulo sottostante per descriverci le tue esigenze. Un nostro esperto ti ricontatterà al più presto per discutere il tuo progetto nel dettaglio. Solitamente rispondiamo entro 24/48 ore lavorative.
                </p>

                {formStatus === "success" && (
                    <div className="p-4 bg-[#dff0d8] text-[#3c763d] text-center mb-6 rounded border border-[#d6e9c6]">
                        Grazie per la tua richiesta! Ti contatteremo al più presto.
                    </div>
                )}

                {formStatus === "error" && (
                    <div className="p-4 bg-[#f2dede] text-[#a94442] text-center mb-6 rounded border border-[#ebccd1]">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className={formStatus === "success" ? "hidden" : ""}>
                    {/* Section 1: Contact Data */}
                    <div className="mb-8">
                        <h2 className="text-lg font-medium text-black mb-4 pb-1 border-b border-[#ddd] uppercase">
                            I TUOI DATI DI CONTATTO
                        </h2>

                        {/* Honeypot field for spam protection */}
                        <div style={{ display: 'none' }}>
                            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="nome" className="block mb-2 font-medium text-[#333] after:content-['_*'] after:text-[#d9534f]">
                                Nome Completo
                            </label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Esempio: Mario Rossi"
                                required
                                className="w-full p-3 border border-[#ddd] text-base transition-colors focus:outline-none focus:border-black bg-white text-black"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 font-medium text-[#333] after:content-['_*'] after:text-[#d9534f]">
                                Indirizzo Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Esempio: mario.rossi@email.com"
                                required
                                className="w-full p-3 border border-[#ddd] text-base transition-colors focus:outline-none focus:border-black bg-white text-black"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="telefono" className="block mb-2 font-medium text-[#333] after:content-['_*'] after:text-[#d9534f]">
                                Numero di Telefono
                            </label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                placeholder="Esempio: 333 1234567"
                                required
                                className="w-full p-3 border border-[#ddd] text-base transition-colors focus:outline-none focus:border-black bg-white text-black"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="luogo" className="block mb-2 font-medium text-[#333] after:content-['_*'] after:text-[#d9534f]">
                                Comune e Provincia dell'Intervento
                            </label>
                            <input
                                type="text"
                                id="luogo"
                                name="luogo"
                                placeholder="Esempio: Brescia (BS)"
                                required
                                className="w-full p-3 border border-[#ddd] text-base transition-colors focus:outline-none focus:border-black bg-white text-black"
                            />
                        </div>
                    </div>

                    {/* Section 2: Project Details */}
                    <div className="mb-8">
                        <h2 className="text-lg font-medium text-black mb-4 pb-1 border-b border-[#ddd] uppercase">
                            DETTAGLI DEL TUO PROGETTO
                        </h2>

                        <div className="mb-5">
                            <label className="block mb-2 font-medium text-[#333] after:content-['_*'] after:text-[#d9534f]">
                                Tipo di Servizio Richiesto
                            </label>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="servizio1"
                                        name="servizio"
                                        value="Costruzione Nuova Casa"
                                        className="mr-2.5 border-gray-300 text-black focus:ring-black"
                                        onChange={() => setShowAltroService(false)}
                                        required
                                    />
                                    <label htmlFor="servizio1" className="font-normal">Costruzione Nuova Casa</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="servizio2"
                                        name="servizio"
                                        value="Ristrutturazione Completa"
                                        className="mr-2.5 border-gray-300 text-black focus:ring-black"
                                        onChange={() => setShowAltroService(false)}
                                    />
                                    <label htmlFor="servizio2" className="font-normal">Ristrutturazione Completa</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="servizio4"
                                        name="servizio"
                                        value="Lavori di piccola entità"
                                        className="mr-2.5 border-gray-300 text-black focus:ring-black"
                                        onChange={() => setShowAltroService(false)}
                                    />
                                    <label htmlFor="servizio4" className="font-normal">Lavori di piccola entità</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="servizio3"
                                        name="servizio"
                                        value="Altro"
                                        className="mr-2.5 border-gray-300 text-black focus:ring-black"
                                        onChange={() => setShowAltroService(true)}
                                    />
                                    <label htmlFor="servizio3" className="font-normal">Altro (specificare qui sotto)</label>
                                </div>
                            </div>
                        </div>

                        {showAltroService && (
                            <div className="mb-5 animate-in fade-in slide-in-from-top-2 duration-300">
                                <label htmlFor="altroServizio" className="block mb-2 font-medium text-[#333]">
                                    Se "Altro", specifica il tipo di servizio:
                                </label>
                                <input
                                    type="text"
                                    id="altroServizio"
                                    name="altroServizio"
                                    className="w-full p-3 border border-[#ddd] text-base transition-colors focus:outline-none focus:border-black bg-white text-black"
                                />
                            </div>
                        )}

                        <div className="mb-5">
                            <label htmlFor="descrizione" className="block mb-2 font-medium text-[#333] after:content-['_*'] after:text-[#d9534f]">
                                Descrivi brevemente il tuo progetto o la tua richiesta
                            </label>
                            <textarea
                                id="descrizione"
                                name="descrizione"
                                placeholder="Es. 'Vorrei un preventivo per la costruzione di una villetta unifamiliare di circa 150mq...' o 'Necessito di una ristrutturazione completa per un appartamento di 100mq...'"
                                rows={5}
                                required
                                className="w-full p-3 border border-[#ddd] text-base min-h-[120px] resize-y transition-colors focus:outline-none focus:border-black bg-white text-black"
                            ></textarea>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="superficie" className="block mb-2 font-medium text-[#333]">
                                Superficie Approssimativa dell'Immobile (mq)
                            </label>
                            <input
                                type="number"
                                id="superficie"
                                name="superficie"
                                min="0"
                                placeholder="Esempio: 120"
                                className="w-full p-3 border border-[#ddd] text-base transition-colors focus:outline-none focus:border-black bg-white text-black"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="tempi" className="block mb-2 font-medium text-[#333]">
                                Quando vorresti iniziare i lavori?
                            </label>
                            <select
                                id="tempi"
                                name="tempi"
                                defaultValue=""
                                className="w-full p-3 border border-[#ddd] text-base transition-colors focus:outline-none focus:border-black bg-white text-black"
                            >
                                <option value="" disabled>Seleziona un'opzione</option>
                                <option value="Il prima possibile">Il prima possibile</option>
                                <option value="Entro 3 mesi">Entro 3 mesi</option>
                                <option value="Entro 6 mesi">Entro 6 mesi</option>
                                <option value="Tra più di 6 mesi">Tra più di 6 mesi</option>
                                <option value="Sono flessibile / Sto solo raccogliendo informazioni">Sono flessibile / Sto solo raccogliendo informazioni</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="budget" className="block mb-2 font-medium text-[#333]">
                                Budget Indicativo (Opzionale)
                            </label>
                            <select
                                id="budget"
                                name="budget"
                                defaultValue="Non specificato"
                                className="w-full p-3 border border-[#ddd] text-base transition-colors focus:outline-none focus:border-black bg-white text-black"
                            >
                                <option value="Non specificato">Preferisco non specificarlo ora</option>
                                <option value="Meno di 50.000 €">Meno di 50.000 €</option>
                                <option value="50.000 € - 100.000 €">50.000 € - 100.000 €</option>
                                <option value="100.000 € - 200.000 €">100.000 € - 200.000 €</option>
                                <option value="Oltre 200.000 €">Oltre 200.000 €</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="allegati" className="block mb-2 font-medium text-[#333]">
                                Allega File (Opzionale - max 5MB: PDF, JPG, PNG)
                            </label>
                            <div className="p-2.5 bg-[#f5f5f5]">
                                <input
                                    type="file"
                                    id="allegati"
                                    name="allegati"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="p-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-black hover:file:bg-gray-300"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-start mt-5">
                            <input
                                type="checkbox"
                                id="privacy"
                                name="privacy"
                                required
                                className="mt-1 mr-2.5 border-gray-300 text-black focus:ring-black"
                            />
                            <label htmlFor="privacy" className="font-normal text-[#333] after:content-['_*'] after:text-[#d9534f]">
                                Dichiaro di aver letto l'informativa sulla <a href="#" className="text-black hover:underline">Privacy Policy</a> e acconsento al trattamento dei miei dati personali per essere ricontattato in merito alla mia richiesta di preventivo.
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full py-3.5 px-6 bg-white text-black border border-black text-base font-medium cursor-pointer transition-all hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {formStatus === "submitting" ? "INVIO IN CORSO..." : "INVIA RICHIESTA PREVENTIVO"}
                    </button>
                </form>

                <div className="mt-10 pt-5 border-t border-[#ddd] text-center text-base text-[#333]">
                    <p className="mb-2.5">Preferisci parlarne direttamente o hai domande preliminari?</p>
                    <p className="mb-2.5">Chiamaci al numero: <strong>+39 348 724 2180</strong></p>
                    <p className="mb-2.5">Oppure scrivici a: <strong>info@fcrcasa.it</strong></p>
                </div>
            </div>
        </main>
    );
}
