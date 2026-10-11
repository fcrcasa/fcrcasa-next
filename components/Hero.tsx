import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-Yyv9pgbkxJuewnQb.jpg"
                    alt="FCR Casa - Impresa edile a Bergamo: nuove costruzioni e ristrutturazioni"
                    fill
                    className="object-cover"
                    priority
                    quality={80}
                    fetchPriority="high"
                />
                {/* Subtle gradient to ensure text readability if needed, but keeping it minimal as per screenshot request */}
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-20">
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/90 mb-4 font-sans">
                    Impresa Edile a Bergamo e Provincia
                </p>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] leading-tight mb-6 drop-shadow-md max-w-6xl mx-auto">
                    Costruiamo il tuo spazio <br /> ideale, senza compromessi
                </h1>

                <p className="text-base md:text-xl text-white/85 max-w-2xl mx-auto font-light leading-relaxed mb-2">
                    Nuove costruzioni su misura e ristrutturazioni chiavi in mano con oltre 10 anni di esperienza.
                </p>

                <div className="mt-8">
                    <Link
                        href="/contatti"
                        className="inline-block border border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-sm md:text-base font-medium uppercase tracking-[0.2em] transition-all duration-300"
                    >
                        Richiedi un preventivo
                    </Link>
                </div>
            </div>
        </section>
    );
}
