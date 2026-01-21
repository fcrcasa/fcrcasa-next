import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center px-6">
            <div className="text-center max-w-lg">
                <h1 className="font-serif text-[120px] leading-none mb-4 text-black">404</h1>
                <h2 className="text-2xl font-serif mb-6 text-black uppercase tracking-widest">Pagina non trovata</h2>
                <p className="text-gray-600 mb-10 leading-relaxed">
                    Spiacenti, la pagina che stai cercando non esiste o è stata spostata.
                    Puoi tornare alla home page per continuare la navigazione.
                </p>
                <Link
                    href="/"
                    className="inline-block px-10 py-4 bg-black text-white text-sm font-bold tracking-[0.2em] transition-all hover:bg-gray-800"
                >
                    TORNA ALLA HOME
                </Link>
            </div>
        </main>
    );
}
