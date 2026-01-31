"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lineStyle, setLineStyle] = useState({ left: 0, width: 0, opacity: 0 });

    const navRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const updateLine = (element: HTMLElement) => {
        if (!navRef.current) return;

        const navRect = navRef.current.getBoundingClientRect();
        const rect = element.getBoundingClientRect();

        setLineStyle({
            left: rect.left - navRect.left,
            width: rect.width,
            opacity: 1
        });
    };

    const resetLine = () => {
        if (!navRef.current) return;

        // Logic to find the active link based on current pathname
        const links = Array.from(navRef.current.querySelectorAll("a"));
        const activeLink = links.find(link => {
            const href = link.getAttribute("href");
            if (!href) return false;
            if (href === "/") return pathname === "/";
            return pathname.startsWith(href);
        });

        if (activeLink) {
            updateLine(activeLink as HTMLElement);
        } else {
            setLineStyle(prev => ({ ...prev, opacity: 0 }));
        }
    };

    // Update position on pathname change and window resize
    useEffect(() => {
        resetLine();
        window.addEventListener("resize", resetLine);
        return () => window.removeEventListener("resize", resetLine);
    }, [pathname]);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/chi-siamo", label: "Chi siamo" },
        { href: "/i-nostri-lavori", label: "I nostri lavori" },
        { href: "/contatti", label: "Contatti" }
    ];

    return (
        <header
            className={`w-full h-28 fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <div className="relative w-64 h-28">
                        <Image
                            src="/images/logo.png"
                            alt="FCR Casa Logo"
                            fill
                            className="object-contain object-left"
                            priority
                            sizes="(max-width: 768px) 100vw, 300px"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav
                    ref={navRef}
                    className="hidden md:flex gap-16 items-center relative"
                    onMouseLeave={resetLine}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="cursor-pointer text-gray-900 text-base font-normal tracking-wide hover:opacity-70 transition-opacity py-2 block"
                            onMouseEnter={(e) => updateLine(e.currentTarget)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* The Moving Line */}
                    <div
                        className="absolute bottom-0 h-[2px] bg-gray-900 transition-all duration-300 ease-out pointer-events-none"
                        style={{
                            left: `${lineStyle.left}px`,
                            width: `${lineStyle.width}px`,
                            opacity: lineStyle.opacity
                        }}
                    />
                </nav>

                <button
                    className="md:hidden p-2 text-gray-900"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Open Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation Overlay */}
                {isOpen && (
                    <div className="absolute top-28 left-0 w-full bg-white border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-lg">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg text-gray-900 py-2 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
