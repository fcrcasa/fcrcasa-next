import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | FCR Casa",
    description: "Informativa sulla privacy di FCR Casa riguardo al trattamento dei dati personali.",
};

export default function PrivacyPolicy() {
    return (
        <main className="pt-32 pb-20 min-h-screen bg-white text-black font-sans">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="font-serif text-5xl mb-12">Privacy Policy</h1>

                <div className="prose prose-lg max-w-none text-gray-800 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Introduzione</h2>
                        <p>Benvenuto su FCR Casa. La tua privacy è estremamente importante per noi. Questa informativa spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali quando visiti il nostro sito o utilizzi i nostri servizi.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Dati Raccolti</h2>
                        <p>Raccogliamo dati attraverso il nostro form di contatto, inclusi nome, email, numero di telefono e informazioni sui tuoi progetti edilizi. Questi dati vengono utilizzati esclusivamente per rispondere alle tue richieste.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Trattamento dei Dati</h2>
                        <p>I tuoi dati sono trattati nel pieno rispetto del GDPR (Regolamento UE 2016/679). Non vendiamo né cediamo i tuoi dati a terze parti a scopi pubblicitari.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. I Tuoi Diritti</h2>
                        <p>Hai il diritto di richiedere l'accesso, la rettifica o la cancellazione dei tuoi dati personali in qualsiasi momento contattandoci all'indirizzo <span className="font-bold">info@fcrcasa.it</span>.</p>
                    </section>
                </div>

                <div className="mt-16">
                    <Link href="/" className="text-black underline font-medium">Torna alla Home</Link>
                </div>
            </div>
        </main>
    );
}
