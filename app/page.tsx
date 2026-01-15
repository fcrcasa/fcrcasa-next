import Hero from "@/components/Hero";
import { ArrowRight, Hammer, Home as HomeIcon, PenTool } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      {/* Intro/Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
            <div className="md:w-3/5">
              <p className="font-serif text-3xl md:text-4xl text-gray-900 leading-tight">
                Costruire è un’arte: lavoriamo con chi sa riconoscere il valore di un progetto ben pensato, eseguito con rigore e attenzione
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link
                href="/chi-siamo"
                className="inline-block border border-gray-400 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-3 text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300"
              >
                Chi siamo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-4xl">
            <h2 className="font-serif text-5xl text-gray-900 mb-6">I nostri progetti</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Scopri le nostre realizzazioni, dalle nuove costruzioni alle ristrutturazioni complete.
              Ogni progetto è un esempio del nostro impegno per la qualità e l'eccellenza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full overflow-hidden rounded-[2rem] mb-6">
                <Image
                  src="/images/img_3489-m6LbkVBN55Ur9lzx.jpg"
                  alt="Ristrutturazione totale a Treviglio"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <Link href="/i-nostri-lavori" className="inline-block border-b border-gray-900 pb-1 text-2xl text-gray-900 group-hover:opacity-70 transition-opacity font-serif">
                Ristrutturazione totale di una <br /> villa a Treviglio (BG)
              </Link>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full overflow-hidden rounded-[2rem] mb-6">
                <Image
                  src="/images/img_1650-Aq2Jn88M63CpabE5.jpg"
                  alt="Costruzione ville a Trescore"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <Link href="/i-nostri-lavori" className="inline-block border-b border-gray-900 pb-1 text-2xl text-gray-900 group-hover:opacity-70 transition-opacity font-serif">
                Costruzione ville a Trescore <br /> Balneario (BG)
              </Link>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full overflow-hidden rounded-[2rem] mb-6">
                <Image
                  src="/images/img_0955-mxBXQyPqlDCZGkxP.jpg"
                  alt="Ristrutturazione tetto a Martinengo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <Link href="/i-nostri-lavori" className="inline-block border-b border-gray-900 pb-1 text-2xl text-gray-900 group-hover:opacity-70 transition-opacity font-serif">
                Ristrutturazione tetto a <br /> Martinengo (BG)
              </Link>
            </div>

            {/* Project 4 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full overflow-hidden rounded-[2rem] mb-6">
                <Image
                  src="/images/img_3488-YrDJ2ORnynHzMeL9.jpg" // Placeholder for Covo/Fourth project
                  alt="Ristrutturazione corte a Covo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <Link href="/i-nostri-lavori" className="inline-block border-b border-gray-900 pb-1 text-2xl text-gray-900 group-hover:opacity-70 transition-opacity font-serif">
                Ristrutturazione corte a Covo <br /> (BG)
              </Link>
            </div>

            {/* Project 5 - Bagni */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full overflow-hidden rounded-[2rem] mb-6">
                <Image
                  src="/images/img_1649-mP4M96VP84crqlO7.jpg" // Guessing this is bathroom
                  alt="Ristrutturazione bagni"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <Link href="/i-nostri-lavori" className="inline-block border-b border-gray-900 pb-1 text-2xl text-gray-900 group-hover:opacity-70 transition-opacity font-serif">
                Ristrutturazione bagni
              </Link>
            </div>

            {/* Project 6 - Farmacia */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full overflow-hidden rounded-[2rem] mb-6">
                <Image
                  src="/images/205452f9-6f23-425f-81b8-c878608d620b-AVLa9ORoOPcNLZXn.jpg" // Guessing this is pharmacy
                  alt="Farmacia Maridati"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <Link href="/i-nostri-lavori" className="inline-block border-b border-gray-900 pb-1 text-2xl text-gray-900 group-hover:opacity-70 transition-opacity font-serif">
                Ristrutturazione totale farmacia <br /> Maridati, Casirate D'Adda (BG)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="font-serif text-5xl text-gray-900 mb-8">I nostri servizi</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Siamo specializzati nella costruzione di case su misura e nella ristrutturazione di abitazioni esistenti a Bergamo e provincia.
              Il nostro team segue ogni progetto con attenzione, dal primo sopralluogo fino alla consegna chiavi in mano.
              Grazie all'esperienza pluriennale e alla collaborazione con professionisti qualificati, garantiamo interventi precisi, duraturi e in linea con le esigenze del cliente.
              Offriamo consulenze gratuite e soluzioni personalizzate per ogni tipo di intervento edile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group">
              <div className="relative h-72 w-full overflow-hidden rounded-[2rem] mb-6 shadow-sm">
                <Image
                  src="/images/kitchen-5669680_1280-m7Vb5wXb5BtV46nJ.jpg"
                  alt="Ristrutturazioni complete"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-3">Ristrutturazioni complete</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Rinnoviamo appartamenti, case e locali commerciali a Bergamo e provincia, con soluzioni chiavi in mano e materiali di alta qualità.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group">
              <div className="relative h-72 w-full overflow-hidden rounded-[2rem] mb-6 shadow-sm">
                <Image
                  src="/images/scaffolding-1407787_1280-mxBXMZ6QqqHBP7NE.jpg"
                  alt="Nuove costruzioni"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-3">Nuove costruzioni</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Costruiamo ville, villette e abitazioni su misura, seguendo ogni fase: progettazione, pratiche e realizzazione.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group">
              <div className="relative h-72 w-full overflow-hidden rounded-[2rem] mb-6 shadow-sm">
                <Image
                  src="/images/pool-5055009_1280-dOqD8yP6XOSxQOMk.jpg"
                  alt="Opere esterne"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-3">Opere esterne</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Ci occupiamo di lavori esterni come pavimentazioni, recinzioni, scavi e predisposizione impianti in ambito residenziale e industriale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">Testimonianze</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="flex flex-col gap-6">
              <p className="font-serif italic text-2xl text-gray-800 leading-relaxed">
                "Abbiamo affidato a Fontana Costruzioni la ristrutturazione completa della nostra villa storica.
                Sin dal primo incontro abbiamo percepito serietà, competenza e una rara sensibilità estetica.
                Il risultato ha superato ogni aspettativa: precisione assoluta, rispetto dei tempi e un'eleganza senza tempo."
              </p>
              <div className="text-gray-900">
                <span className="font-bold text-lg">– Dott. Alessandro Moretti,</span> <span className="text-lg">Bergamo</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col gap-6">
              <p className="font-serif italic text-2xl text-gray-800 leading-relaxed">
                "Costruire una casa da zero può essere un percorso complesso, ma con Fontana Costruzioni ci siamo sempre sentiti guidati, ascoltati e protetti.
                Ogni dettaglio è stato curato con maestria. È raro trovare professionisti capaci di coniugare visione architettonica e rigore esecutivo."
              </p>
              <div className="text-gray-900">
                <span className="font-bold text-lg">– Arch. Elena Rinaldi,</span> <span className="text-lg">Milano</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for CTA, it was there initially but I will re-add/keep if present or remove "Projects Preview" part that was before */}

      {/* Split CTA Section */}
      <section className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-1/2 bg-[#8e8b82] px-8 py-24 md:p-24 flex flex-col items-center justify-center text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-[#1a1a1a] mb-8 leading-tight">
            Ogni grande casa nasce da un’idea. Ogni idea, da una conversazione.
          </h2>
          <p className="text-[#1a1a1a] text-lg mb-12 max-w-md opacity-80">
            Raccontaci il tuo progetto: siamo pronti ad ascoltarti e a costruirlo insieme.
          </p>
          <Link
            href="/contatti"
            className="inline-block border border-white text-white hover:bg-white hover:text-[#8e8b82] px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300"
          >
            Contattaci
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative min-h-[500px]">
          <Image
            src="/images/pexels-lexovertoom-1109541-AE0PZgN7e0u11Pp8.jpg"
            alt="Progettazione e disegno tecnico"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
