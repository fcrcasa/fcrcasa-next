import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Ristrutturazione totale di una villa a Treviglio (BG)",
        image: "/images/villa-treviglio/IMG_3489.jpeg",
        link: "/i-nostri-lavori/villa-treviglio"
    },
    {
        title: "Costruzione ville a Trescore Balneario (BG)",
        image: "/images/ville-trescore/IMG_1650.JPG",
        link: "/i-nostri-lavori/ville-trescore"
    },
    {
        title: "Ristrutturazione tetto a Martinengo (BG)",
        image: "/images/tetto-martinengo/f9f3169b-8051-4096-a5ac-d3628bc3ba94.jpg",
        link: "/i-nostri-lavori/tetto-martinengo"
    },
    {
        title: "Ristrutturazione corte a Covo (BG)",
        image: "/images/corte-covo/IMG_0955.JPG",
        link: "/i-nostri-lavori/corte-covo"
    },
    {
        title: "Ristrutturazione bagni",
        image: "/images/ristrutturazione-bagni/IMG_4028.jpeg",
        link: "/i-nostri-lavori/ristrutturazione-bagni"
    },
    {
        title: "Ristrutturazione totale farmacia Maridati, Casirate D'Adda (BG)",
        image: "/images/farmacia-maridati/IMG_6209.jpeg",
        link: "/i-nostri-lavori/farmacia-maridati"
    }
];

export default function NostriLavori() {
    return (
        <main className="pt-32 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-16 max-w-4xl">
                    <h1 className="font-serif text-5xl text-gray-900 mb-6">I nostri lavori</h1>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                        Scopri le nostre realizzazioni, dalle nuove costruzioni alle ristrutturazioni complete.
                        Ogni progetto è un esempio del nostro impegno per la qualità e l'eccellenza.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {projects.map((project, index) => (
                        <Link key={index} href={project.link} className="group block">
                            <div className="relative h-64 w-full overflow-hidden rounded-[2rem] mb-6">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <span className="inline-block border-b border-gray-900 pb-1 text-2xl text-gray-900 group-hover:opacity-70 transition-opacity font-serif leading-tight">
                                {project.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
