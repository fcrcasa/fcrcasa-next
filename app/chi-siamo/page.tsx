import Image from "next/image";
import Link from "next/link";

export default function ChiSiamo() {
    return (
        <main className="pt-32 pb-20 min-h-screen bg-[#F5F5F7] text-gray-900">
            <div className="container mx-auto px-6">
                <h1 className="font-serif text-5xl text-center mb-16 text-gray-800">Chi siamo</h1>

                <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
                    {/* Text Content */}
                    <div className="lg:w-1/2 flex flex-col gap-6">
                        <h2 className="font-serif text-2xl md:text-3xl leading-snug text-gray-800">
                            "Ogni casa è una storia: la tua prima"
                        </h2>
                        <div className="text-lg text-gray-700 leading-relaxed flex flex-col gap-4">
                            <p>
                                Fondata da Lorenzo nel 2015, F.C.R. CASA trasforma sogni in progetti concreti.
                            </p>
                            <p>
                                Ci piace ascoltare: capire le tue esigenze, offrirti soluzioni curate e tempi certi.
                            </p>
                            <p>
                                Che si tratti di una ristrutturazione completa o di una nuova costruzione,
                                accompagniamo ogni passo con passione e trasparenza.
                            </p>
                            <p>
                                Un solo interlocutore, zero compromessi: costruire bene è una questione di fiducia.
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2 relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/images/chi_siamo1.jpg"
                            alt="Architetto al lavoro con planimetrie"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Second Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto mt-24">
                    {/* Image (Left) */}
                    <div className="lg:w-1/2 relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
                        <Image
                            src="/images/chi_siamo2.jpg"
                            alt="Dettaglio lavorazione in cantiere"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Text Content (Right) */}
                    <div className="lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2">
                        <p className="font-serif italic text-2xl md:text-3xl leading-relaxed text-gray-800">
                            Nulla è lasciato al caso: selezioniamo materiali di pregio, collaboriamo con studi di design e gestiamo ogni cantiere come fosse unico. Crediamo che costruire significhi interpretare un'idea e restituirla nella sua forma più autentica, funzionale e <span className="underline decoration-1 underline-offset-4">duratura</span>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Founder Section */}
            <div className="py-24 max-w-4xl mx-auto text-center">
                <h3 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">IL FONDATORE</h3>
                <h2 className="font-serif text-5xl md:text-6xl text-gray-800 mb-8">Lorenzo Fontana</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Lorenzo Fontana è il cuore e la mente dietro Fontana Costruzioni. Cresciuto in una famiglia di artigiani edili, ha trasformato la tradizione in visione, fondando un’impresa che oggi è sinonimo di eccellenza e progettualità. Con oltre dieci anni di esperienza, Lorenzo guida ogni progetto con un approccio sartoriale: ascolto profondo, attenzione al dettaglio e un’idea chiara di bellezza funzionale. Il suo obiettivo? Creare spazi che durino nel tempo e parlino il linguaggio di chi li abita.
                </p>
            </div>

            {/* Split CTA Section */}
            <section className="flex flex-col md:flex-row w-full">
                {/* Left Content */}
                <div className="w-full md:w-1/2 bg-[#8e8b82] px-8 py-24 md:p-24 flex flex-col items-center justify-center text-center">
                    <h2 className="font-serif text-3xl md:text-5xl text-black mb-8 leading-tight">
                        Ogni grande casa nasce da un’idea. Ogni idea, da una conversazione.
                    </h2>
                    <p className="text-black text-lg mb-12 max-w-md opacity-90">
                        Raccontaci il tuo progetto: siamo pronti ad ascoltarti e a costruirlo insieme.
                    </p>
                    <Link
                        href="/contatti"
                        className="inline-block bg-white text-gray-900 border border-white hover:bg-gray-100 px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300"
                    >
                        Contattaci
                    </Link>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 relative min-h-[500px]">
                    <Image
                        src="/images/chi_siamo3.jpg"
                        alt="Progettazione e disegno tecnico"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>
        </main>
    );
}
