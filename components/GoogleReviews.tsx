"use client";

import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { useState, useRef } from "react";

const REVIEWS = [
    {
        id: 1,
        name: "Mirko Invernizzi",
        date: "19/12/2025",
        text: "Professionali, precisi e attenti al cliente. Sono un partner affidabile e una certezza per...",
        avatar: "M",
        avatarBg: "bg-orange-600",
    },
    {
        id: 2,
        name: "Silvano Sala",
        date: "19/12/2025",
        text: "Le Charlie's Angels della gestione aziendale! Competenti e professionali, uno...",
        avatar: "S",
        avatarBg: "bg-teal-600",
    },
    {
        id: 3,
        name: "Michaela Viscardi",
        date: "19/12/2025",
        text: "Professionista seria, preparata, disponibile. Fornisce risposte a tutti i tuoi dubbi in tempi...",
        avatar: "M",
        avatarBg: "bg-indigo-600",
    },
    {
        id: 4,
        name: "Martina Dellamuzia",
        date: "17/12/2025",
        text: "Consiglio vivamente Federica e il suo team: affiancano imprenditori e professionisti a...",
        avatar: "M",
        avatarBg: "bg-slate-700",
    },
];

export default function GoogleReviews() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
        }
    };

    return (
        <section className="py-20 bg-[#f0f2f2]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left Summary Section */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[220px]">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2 uppercase">ECCELLENTE</h2>
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-sm font-medium text-gray-700 mb-6">
                            In base a <span className="font-bold">35 recensioni</span>
                        </p>
                        <div className="flex items-center gap-2">
                            <svg viewBox="0 0 24 24" className="w-24 h-8" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>
                    </div>

                    {/* Right Carousel Section */}
                    <div className="relative flex-1 w-full overflow-hidden">
                        <div
                            ref={scrollRef}
                            onScroll={handleScroll}
                            className="flex gap-4 overflow-x-auto no-scrollbar pb-4"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {REVIEWS.map((review) => (
                                <div
                                    key={review.id}
                                    className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 ${review.avatarBg} rounded-full flex items-center justify-center text-white font-bold`}>
                                                {review.avatar}
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-900 leading-tight">{review.name}</h4>
                                                <span className="text-xs text-gray-500">{review.date}</span>
                                            </div>
                                        </div>
                                        <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                    </div>

                                    <div className="flex items-center gap-1 mb-3">
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <CheckCircle2 size={16} className="text-blue-500 fill-blue-500/10 ml-1" />
                                    </div>

                                    <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                                        {review.text}
                                    </p>

                                    <button className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors text-left uppercase tracking-wider">
                                        Leggi di più
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        {canScrollLeft && (
                            <button
                                onClick={() => scroll("left")}
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md border border-gray-100 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10 -ml-5"
                                aria-label="Precedente"
                            >
                                <ChevronLeft size={24} className="text-gray-600" />
                            </button>
                        )}
                        {canScrollRight && (
                            <button
                                onClick={() => scroll("right")}
                                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md border border-gray-100 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10 -mr-5"
                                aria-label="Successivo"
                            >
                                <ChevronRight size={24} className="text-gray-600" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}
