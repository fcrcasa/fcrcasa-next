import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#4b4b49] text-white py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center text-center gap-12 md:gap-8 max-w-6xl mx-auto">

                    {/* Logo Section */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-64 h-32">
                            <Image
                                src="/images/logo-white.png"
                                alt="Fontana Costruzioni Ristrutturazioni"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Ufficio Section */}
                    <div className="w-full md:w-1/3 flex flex-col items-center">
                        <h3 className="font-serif text-3xl mb-4 text-gray-100">Ufficio</h3>
                        <address className="not-italic text-lg text-gray-200 leading-relaxed font-light">
                            Via Fontanine 6 - <br />
                            Brignano Gera D'adda <br />
                            (BG)
                        </address>
                    </div>

                    {/* Contatti Section */}
                    <div className="w-full md:w-1/3 flex flex-col items-center">
                        <h3 className="font-serif text-3xl mb-4 text-gray-100">Contatti</h3>
                        <div className="flex flex-col gap-2 text-lg text-gray-200 font-light">
                            <a href="mailto:info@fcrcasa.it" className="underline hover:text-white transition-colors">
                                info@fcrcasa.it
                            </a>
                            <a href="tel:+393487242180" className="underline hover:text-white transition-colors">
                                +39 348 724 2180
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
