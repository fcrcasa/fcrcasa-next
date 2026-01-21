import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | FCR Casa",
    description: "Informativa sull'uso dei cookie sul sito di FCR Casa.",
};

export default function CookiePolicy() {
    return (
        <main className="pt-32 pb-20 min-h-screen bg-white text-black font-sans">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="font-serif text-5xl mb-12">Cookie Policy</h1>

                <div className="prose prose-lg max-w-none text-gray-800 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Cosa sono i cookie?</h2>
                        <p>I cookie sono piccoli file di testo che vengono depositati sul tuo computer dai siti web che visiti. Sono ampiamente utilizzati per far funzionare i siti web, o farli funzionare in modo più efficiente, nonché per fornire informazioni ai proprietari del sito.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Come utilizziamo i cookie?</h2>
                        <p>Utilizziamo i cookie per:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Analizzare il traffico del sito tramite Google Analytics 4 (solo previo consenso).</li>
                            <li>Ricordare le tue preferenze di consenso.</li>
                            <li>Migliorare la sicurezza e le prestazioni del sito.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Gestione del Consenso</h2>
                        <p>Al primo accesso al nostro sito, ti verrà chiesto di prestare il consenso all'utilizzo dei cookie opzionali. Puoi modificare le tue preferenze cancellando i cookie del browser o tramite il nostro banner di gestione del consenso.</p>
                    </section>
                </div>

                <div className="mt-16">
                    <Link href="/" className="text-black underline font-medium">Torna alla Home</Link>
                </div>
            </div>
        </main>
    );
}
