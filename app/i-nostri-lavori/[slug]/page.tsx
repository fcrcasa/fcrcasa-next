
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Define the project data type
type Project = {
    title: string;
    subtitle?: string;
    description: string[];
    heroImages: string[];
    technicalData: { label: string; value: string }[];
    galleryImages: string[];
};

// Project data store
const projectsData: Record<string, Project> = {
    "villa-treviglio": {
        title: "Maestria Strutturale: Riqualificazione Integrale di Villa a Treviglio",
        subtitle: "La Sicurezza del Nuovo, il Fascino della Storia.",
        description: [
            "Una famiglia ha scelto di dare una seconda vita a una villa del 1962, un edificio con un'anima ma non più adeguato alle esigenze del vivere contemporaneo. La loro visione era chiara, la nostra sfida ambiziosa: preservare il carattere della struttura originale e, allo stesso tempo, elevarla ai massimi standard di sicurezza sismica ed efficienza energetica.",
            "Siamo partiti dalle fondamenta, letteralmente. Con la creazione di un vespaio aerato abbiamo eliminato ogni rischio di umidità, garantendo un ambiente salubre per sempre. Abbiamo poi orchestrato un consolidamento strutturale completo, rinforzando le solette, inserendo nuove travi portanti e realizzando una nuova orditura lignea per il tetto. Ogni intervento è stato eseguito per creare un guscio sicuro, solido e durevole.",
            "La nostra competenza si è estesa alla gestione degli incentivi fiscali (Superbonus 110% e Sismabonus), guidando il cliente attraverso la complessità burocratica. La riqualificazione dell'involucro e degli impianti ha portato l'edificio al traguardo della Classe Energetica A4: una garanzia di comfort eccezionale, costi di gestione minimi e un valore immobiliare proiettato nel futuro."
        ],
        heroImages: [
            "/images/villa-treviglio/IMG_3489.jpeg",
            "/images/villa-treviglio/IMG_4609.jpeg"
        ],
        technicalData: [
            { label: "Tipologia", value: "Riqualificazione integrale, strutturale ed energetica" },
            { label: "Immobile", value: "Villa unifamiliare del 1962" },
            { label: "Luogo", value: "Treviglio (BG)" },
            { label: "Obiettivo Cliente", value: "Adattare un edificio storico alle esigenze di una famiglia moderna" },
            { label: "Risultato Energetico", value: "Certificazione in Classe A4" },
            { label: "Interventi Chiave", value: "Consolidamento sismico dalle fondazioni, vespaio aerato, rifacimento completo della copertura, cappotto termico, impianti ad alta efficienza." },
            { label: "Incentivi Gestiti", value: "Superbonus 110%, Sismabonus." }
        ],
        galleryImages: [
            "/images/villa-treviglio/IMG_1413.jpeg",
            "/images/villa-treviglio/IMG_1414.jpeg",
            "/images/villa-treviglio/IMG_1415.jpeg",
            "/images/villa-treviglio/IMG_2114.jpeg",
            "/images/villa-treviglio/IMG_2226.jpeg",
            "/images/villa-treviglio/IMG_2273.jpeg",
            "/images/villa-treviglio/IMG_2284.jpeg",
            "/images/villa-treviglio/IMG_2865.jpeg",
            "/images/villa-treviglio/IMG_2868.jpeg",
            "/images/villa-treviglio/IMG_3002.jpeg",
            "/images/villa-treviglio/IMG_3019.jpeg",
            "/images/villa-treviglio/IMG_3460.jpeg",
            "/images/villa-treviglio/IMG_3488.jpeg",
            "/images/villa-treviglio/IMG_3505.jpeg",
            "/images/villa-treviglio/IMG_7020.PNG",
            "/images/villa-treviglio/2022-02-05-14-57-14-021.PNG",
            "/images/villa-treviglio/2022-02-09-16-43-28-352.PNG",
            "/images/villa-treviglio/2022-02-09-16-44-28-208.PNG",
            "/images/villa-treviglio/8d9eff39-b644-41ef-b4ba-08ae2a5721cf.jpg",
            "/images/villa-treviglio/BAA1E052-2715-4092-B465-1D1C3035A02D.jpg"
        ]
    },
    "ville-trescore": {
        title: "Eleganza in Collina: Ville Private a Trescore Balneario",
        subtitle: "Abitare il Prestigio, Vivere il Comfort.",
        description: [
            "Incastonate nelle prestigiose colline di Trescore Balneario, queste due ville bifamiliari rappresentano la nostra visione dell'abitare contemporaneo: un equilibrio perfetto tra design raffinato, efficienza energetica e comfort assoluto.",
            "Nate nel 2017 dalla sinergia con Lo.Gi.Ca. Srl, queste residenze sono state concepite per clienti che desiderano non solo una casa, ma uno spazio da vivere che sia espressione del proprio stile. Ogni unità, con i suoi 330 mq, è un mondo a sé: gli ampi spazi interni dialogano con l'esterno attraverso giardini privati e scenografiche terrazze di 40 mq, creando un'atmosfera di respiro e libertà.",
            "La certificazione in Classe A3 non è solo un dato tecnico, ma la promessa di un investimento intelligente e di un benessere sostenibile. La vera misura del successo, per noi, è stata vedere la visione dei proprietari prendere forma, trasformando un progetto d'eccellenza in un luogo da amare, definendolo semplicemente 'bello da vivere'."
        ],
        heroImages: [
            "/images/ville-trescore/IMG_1650.JPG",
            "/images/ville-trescore/IMG_1649.JPG"
        ],
        technicalData: [
            { label: "Tipologia", value: "Ville bifamiliari di nuova costruzione" },
            { label: "Luogo", value: "Trescore Balneario (BG)" },
            { label: "Anno di realizzazione", value: "2017" },
            { label: "Superficie per unità", value: "330 mq" },
            { label: "Classe Energetica", value: "A3" },
            { label: "Caratteristiche chiave", value: "Giardini privati, terrazze panoramiche da 40 mq, autorimesse per 4 veicoli, finiture di alto livello." },
            { label: "Partner", value: "Progetto in collaborazione con Lo.Gi.Ca. Srl" }
        ],
        galleryImages: [
            "/images/ville-trescore/IMG_0741.JPG",
            "/images/ville-trescore/IMG_0849.JPG",
            "/images/ville-trescore/IMG_0883.JPG",
            "/images/ville-trescore/IMG_1075.JPG",
            "/images/ville-trescore/IMG_1134.JPG",
            "/images/ville-trescore/IMG_1140.JPG",
            "/images/ville-trescore/IMG_1367.JPG",
            "/images/ville-trescore/IMG_1648.JPG",
            "/images/ville-trescore/IMG_1651.JPG",
            "/images/ville-trescore/IMG_1652.JPG"
        ]
    },
    "tetto-martinengo": {
        title: "Sicurezza e Rinascita: Intervento sul Tetto a Martinengo",
        subtitle: "Dall'Emergenza all'Eccellenza: la Soluzione Definitiva.",
        description: [
            "Nel 2021, a seguito di un evento climatico di eccezionale intensità, la copertura di questo condominio a Martinengo ha subito danni che ne compromettevano la sicurezza e la funzionalità. In un contesto di urgenza, la nostra missione non era semplicemente riparare, ma fornire una soluzione definitiva.",
            "Il nostro team è intervenuto con un'analisi diagnostica approfondita, individuando le criticità strutturali e le migliori tecnologie per il ripristino. L'obiettivo era duplice: ripristinare la totale sicurezza dell'edificio nel più breve tempo possibile e ottimizzare l'investimento della committenza con una soluzione che massimizzasse il rapporto tra performance e durabilità.",
            "Abbiamo messo in campo flessibilità progettuale e rigore esecutivo per trasformare un imprevisto in un'opportunità di miglioramento. Il risultato è una copertura all'avanguardia, che non solo risolve i danni subiti ma migliora le performance dell'edificio, garantendo tranquillità e valore all'immobile per gli anni a venire."
        ],
        heroImages: [
            "/images/tetto-martinengo/E6CFC071-19E7-4622-A84D-31B9E34DCC55.jpg",
            "/images/tetto-martinengo/205452f9-6f23-425f-81b8-c878608d620b.jpg"
        ],
        technicalData: [
            { label: "Tipologia", value: "Risanamento e rifacimento copertura" },
            { label: "Committente", value: "Condominio a Martinengo (BG)" },
            { label: "Anno di intervento", value: "2021" },
            { label: "Criticità iniziale", value: "Grave danneggiamento da evento atmosferico" },
            { label: "Tipo di intervento", value: "Ripristino strutturale e funzionale della copertura" },
            { label: "Focus del progetto", value: "Sicurezza, durabilità, ottimizzazione del budget" }
        ],
        galleryImages: [
            "/images/tetto-martinengo/088dfa2a-63fd-485b-ac73-6374695ffa13.jpg",
            "/images/tetto-martinengo/221710fb-2678-45b0-a5e9-c8f90cc4463c.jpg",
            "/images/tetto-martinengo/8022a823-59d2-4395-9ec0-45550997a903.jpg",
            "/images/tetto-martinengo/f9f3169b-8051-4096-a5ac-d3628bc3ba94.jpg"
        ]
    },
    "corte-covo": {
        title: "La Rinascita di una Corte: da Asta a Successo Immobiliare",
        subtitle: "Trasformare il Potenziale in Valore. In 12 Mesi.",
        description: [
            "Dove altri vedevano semplicemente un immobile da recuperare, noi abbiamo riconosciuto un'opportunità. L'operazione della corte di Covo nasce da una mossa strategica: l'acquisizione di un asset con un enorme potenziale latente tramite asta giudiziaria.",
            "In stretta sinergia con il nostro partner Logica Srl, abbiamo gestito in prima persona ogni singola fase del processo: dalla progettazione architettonica alla riqualificazione energetica, fino alla commercializzazione finale. Il nostro modello di gestione integrata ci ha permesso di trasformare la corte in un complesso residenziale moderno e funzionale, realizzando 11 appartamenti in classe A e B.",
            "Abbiamo concepito soluzioni abitative di alta qualità, rendendo il design e l'efficienza energetica accessibili, intercettando con successo l'interesse del mercato. L'intera operazione, dall'acquisizione alla vendita totale delle unità, si è conclusa con successo nell'arco di soli 12 mesi, a testimonianza di una strategia commerciale e costruttiva perfettamente eseguita e di una profonda conoscenza del territorio."
        ],
        heroImages: [
            "/images/corte-covo/IMG_0955.JPG",
            "/images/corte-covo/IMG_0958.JPG"
        ],
        technicalData: [
            { label: "Tipologia", value: "Operazione di Sviluppo Immobiliare" },
            { label: "Acquisizione", value: "Strategica, tramite asta giudiziaria" },
            { label: "Anno Operazione", value: "2015" },
            { label: "Unità Realizzate", value: "11 appartamenti (Classe Energetica A e B)" },
            { label: "Indicatore di Performance Chiave (KPI)", value: "Ciclo completo di 12 mesi (acquisizione-vendita)" },
            { label: "Partner Strategico", value: "Logica Srl" }
        ],
        galleryImages: [
            "/images/corte-covo/IMG_0945.JPG",
            "/images/corte-covo/IMG_0954.JPG",
            "/images/corte-covo/IMG_0959.JPG"
        ]
    },
    "ristrutturazione-bagni": {
        title: "Design & Relax: Ristrutturazione Bagni",
        subtitle: "Il Tuo Spazio di Benessere Quotidiano",
        description: [
            "Trasformiamo il bagno in un'oasi di relax e funzionalità. Dalla progettazione degli spazi alla scelta dei materiali più pregiati, curiamo ogni dettaglio.",
            "Realizziamo ambienti eleganti, moderni e su misura per le tue esigenze, gestendo l'intero processo dalla demolizione alla posa delle finiture."
        ],
        heroImages: [
            "/images/ristrutturazione-bagni/IMG_4028.jpeg",
            "/images/ristrutturazione-bagni/IMG_4054.jpeg"
        ],
        technicalData: [
            { label: "Tipologia", value: "Interior Design & Ristrutturazione" },
            { label: "Luogo", value: "Provincia di Bergamo" },
            { label: "Servizi", value: "Progettazione 3D, rifacimento impianti, posa rivestimenti grande formato." }
        ],
        galleryImages: [
            "/images/ristrutturazione-bagni/IMG_1652.JPG",
            "/images/ristrutturazione-bagni/IMG_4022.jpeg",
            "/images/ristrutturazione-bagni/IMG_5910.jpeg",
            "/images/ristrutturazione-bagni/IMG_9023.jpeg",
            "/images/ristrutturazione-bagni/IMG_9027.jpeg"
        ]
    },
    "farmacia-maridati": {
        title: "Innovazione e Continuità: La Trasformazione della Farmacia Maridati",
        subtitle: "Rinnovare il Tuo Spazio Commerciale, Senza Fermare la Tua Attività.",
        description: [
            "Quando il Dott. Stefano Maridati ci ha affidato la ristrutturazione della sua farmacia, la sfida era chiara: riqualificare uno spazio sanitario complesso con un vincolo non negoziabile: la totale continuità del servizio al pubblico.",
            "La nostra risposta è stata una pianificazione strategica eseguita con precisione chirurgica. In sinergia con gli specialisti di SD Studio Srl, abbiamo orchestrato l'intervento in due fasi distinte. Non una semplice divisione degli spazi, ma una perfetta coreografia operativa che ha permesso alla farmacia di non perdere neanche un giorno di lavoro. Ogni dettaglio dello switch tra le due fasi è stato meticolosamente gestito per essere impercettibile al pubblico e allo staff.",
            "Il nostro impegno si è esteso oltre l'area vendita, curando la realizzazione degli studi medici e la riqualificazione del primo piano. Abbiamo così contribuito a valorizzare l'intero stabile, trasformandolo in un moderno ed efficiente polo di servizi sanitari. Questo progetto è la dimostrazione della nostra filosofia: non siamo semplici esecutori, ma partner strategici che garantiscono risultati eccellenti proteggendo il business dei nostri clienti, anche durante i lavori."
        ],
        heroImages: [
            "/images/farmacia-maridati/IMG_6209.jpeg",
            "/images/farmacia-maridati/IMG_6178.jpeg"
        ],
        technicalData: [
            { label: "Tipologia", value: "Ristrutturazione Commerciale e Ambienti Sanitari" },
            { label: "Cliente", value: "Farmacia Dott. Maridati, Casirate d'Adda (BG)" },
            { label: "Anno di intervento", value: "2019" },
            { label: "Partner di Progetto", value: "SD Studio Srl (progettazione e arredi)" },
            { label: "Sfida Chiave", value: "Ristrutturazione a zero impatto sull'operatività (zero downtime)" },
            { label: "Soluzione Logistica", value: "Esecuzione pianificata in due fasi distinte" },
            { label: "Ambito di Intervento", value: "Area farmacia, studi medici, riqualificazione completa del primo piano" }
        ],
        galleryImages: [
            "/images/farmacia-maridati/40ba00b4-e9ea-4cbc-869f-67a689bf92c0.jpg",
            "/images/farmacia-maridati/IMG_5796.jpeg",
            "/images/farmacia-maridati/IMG_5866.jpeg",
            "/images/farmacia-maridati/IMG_6127.jpeg",
            "/images/farmacia-maridati/IMG_6209 2.jpeg",
            "/images/farmacia-maridati/f117aead-9330-49f7-ad4a-18144ecf81d7.jpg"
        ]
    }
};

type Props = {
    params: Promise<{ slug: string }>;
};

// Main component
export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    let project = projectsData[slug];

    // Fallback for other projects if not fully defined yet, to avoid crash
    if (!project) {
        // Try to find in the original simple list style or just use default
        if (["tetto-martinengo", "corte-covo", "ristrutturazione-bagni", "farmacia-maridati"].includes(slug)) {
            project = {
                title: slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
                description: ["Dettagli del progetto in fase di aggiornamento."],
                heroImages: ["/images/logo.png"], // Placeholder
                technicalData: [{ label: "Stato", value: "In aggiornamento" }],
                galleryImages: []
            };
        } else {
            notFound();
        }
    }

    return (
        <main className="pt-32 pb-20 min-h-screen bg-white text-gray-900">
            <div className="container mx-auto px-6">
                {/* Header / Title Section */}
                <div className="text-center max-w-5xl mx-auto mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                        {project.title}
                    </h1>
                </div>

                {/* Hero Images Grid */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {project.heroImages.slice(0, 2).map((img, idx) => (
                        <div key={idx} className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-sm">
                            <Image
                                src={img}
                                alt={`${project.title} - view ${idx + 1}`}
                                fill
                                className="object-cover"
                                priority={idx === 0}
                            />
                        </div>
                    ))}
                    {/* Handle single image case */}
                    {project.heroImages.length === 1 && (
                        <div className="hidden md:block bg-gray-50 rounded-2xl aspect-[3/2]"></div>
                    )}
                </div>

                {/* Narrative Section */}
                <div className="max-w-4xl mx-auto mb-24 text-center">
                    {project.subtitle && (
                        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8 leading-snug">
                            {project.subtitle}
                        </h2>
                    )}
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                        {project.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Technical Data & Gallery Split */}
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Technical Data */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <h3 className="font-serif text-3xl text-gray-900 mb-8">Dati Tecnici</h3>
                            <ul className="space-y-4">
                                {project.technicalData.map((item, index) => (
                                    <li key={index} className="text-base text-gray-700 leading-relaxed border-b border-gray-100 pb-3 last:border-0">
                                        <span className="font-bold text-gray-900 block mb-1 text-lg">{item.label}</span>
                                        {item.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Gallery */}
                    <div className="lg:w-2/3">
                        {project.galleryImages.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {project.galleryImages.map((img, idx) => (
                                    <div key={idx} className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-square">
                                        <Image
                                            src={img}
                                            alt={`Gallery image ${idx + 1}`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full h-64 bg-gray-50 flex items-center justify-center rounded-lg border border-gray-100">
                                <p className="text-gray-400 italic">Galleria in aggiornamento</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

// Generate static params
export async function generateStaticParams() {
    return Object.keys(projectsData).map((slug) => ({
        slug: slug,
    }));
}
