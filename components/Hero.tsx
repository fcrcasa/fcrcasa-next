import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-Yyv9pgbkxJuewnQb.jpg"
                    alt="Luxury modern home with pool"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                    fetchPriority="high"
                />
                {/* Subtle gradient to ensure text readability if needed, but keeping it minimal as per screenshot request */}
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-20">
                <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] leading-tight mb-8 drop-shadow-md max-w-6xl mx-auto">
                    Costruiamo il tuo spazio <br /> ideale, senza compromessi
                </h1>

                <div className="mt-12">
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
