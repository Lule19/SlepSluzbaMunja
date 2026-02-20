import Image from "next/image";
import { Phone, MapPin, Clock, Truck, Hammer, Globe, ShieldCheck, CheckCircle2, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl text-yellow-600">
            <Truck className="h-6 w-6" />
            <span>Šlep Služba Munja</span>
          </div>
          <a
            href="tel:+381693381788" // Placeholder phone number
            className="flex items-center gap-2 rounded-full bg-yellow-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-yellow-600 md:text-base"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Pozovite odmah</span>
            <span className="sm:hidden">Pozovi</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-slate-900 py-24 text-center text-white md:py-32 lg:py-40">
          <div className="absolute inset-0 z-0 opacity-20">
             {/* Background pattern or image placeholder */}
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-yellow-600 via-slate-900 to-slate-900"></div>
          </div>
          <div className="container relative z-10 px-4">
            <h1 className="mb-6 py-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">
              Šlep Služba Munja Kragujevac
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 sm:text-xl">
              Brza, pouzdana i dostupna 24/7. Šlepamo vozila po najpovoljnijim cenama uz najkraće vreme dolaska na adresu – 10 do 15 minuta.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:+381693381788" // Placeholder phone number
                className="inline-flex h-12 items-center justify-center rounded-md bg-yellow-500 px-8 text-sm font-medium text-white shadow shadow-yellow-500/20 transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <Phone className="mr-2 h-5 w-5" />
                Pozovite Nas
              </a>
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-slate-700 bg-slate-800/50 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Usluge
              </a>
              
            </div>
          </div>
          <div className="mt-6 p-4 text-3xl font-extrabold tracking-tight text-yellow-500 sm:text-5xl md:text-6xl">
            069 33 81 788
          </div>
        </section>

        {/* Features / Info Section */}
        <section id="about" className="container mx-auto py-16 px-4 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
                Zašto izabrati nas?
              </h2>
              <p className="text-lg text-slate-600">
                Specijalizovani smo za prevoz teretnih vozila do 7 tona, kao i traktora, bagera, radnih i poljoprivrednih mašina. Bilo da vam je pomoć potrebna u Srbiji ili inostranstvu, naš tim je dostupan 24/7 i spreman da brzo reaguje.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  <span>Dostupni 24 sata dnevno, 7 dana u nedelji</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  <span>Brz dolazak (10-15 minuta)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  <span>Najpovoljnije cene u regionu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  <span>Bezbedan transport teretnih vozila do 7t</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-200 lg:aspect-square">
               {/* Image Placeholder */}
               <div className="flex h-full w-full items-center justify-center bg-slate-300 text-slate-500">
                   <Image
                  src={`/1.jpg`}
                  alt={`Šlep služba Munja - Slika 1`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
               </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-slate-100 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Naše Usluge</h2>
              <p className="mt-4 text-lg text-slate-600">
                Pouzdana pomoć na putu za sve vrste vozila i mašina.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service 1 */}
              <div className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100/50 text-yellow-600">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Šlepanje automobila</h3>
                <p className="text-slate-600">
                  Brz i bezbedan prevoz putničkih vozila u kvaru ili havarisanih vozila.
                </p>
              </div>
              {/* Service 2 */}
              <div className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100/50 text-yellow-600">
                  <Hammer className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Teška mehanizacija</h3>
                <p className="text-slate-600">
                  Prevoz traktora, bagera, radnih i poljoprivrednih mašina do 7 tona.
                </p>
              </div>
              {/* Service 3 */}
              <div className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100/50 text-yellow-600">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Međunarodni transport</h3>
                <p className="text-slate-600">
                  Dostupni smo za prevoz vozila u Srbiji, ali i u inostranstvu.
                </p>
              </div>
              {/* Service 4 */}
              <div className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100/50 text-yellow-600">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Dostupnost 24/7</h3>
                <p className="text-slate-600">
                  Naš tim je spreman da brzo reaguje u bilo koje doba dana ili noći.
                </p>
              </div>
              {/* Service 5 */}
              <div className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100/50 text-yellow-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Bezbednost zagarantovana</h3>
                <p className="text-slate-600">
                  Vaše vozilo je osigurano tokom transporta. Profesionalizam na prvom mestu.
                </p>
              </div>
              {/* Service 6 */}
              <div className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                 <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100/50 text-yellow-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Brz dolazak</h3>
                <p className="text-slate-600">
                  Stižemo za 10 do 15 minuta na vašu lokaciju, zavisno od udaljenosti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="container mx-auto py-16 px-4 md:py-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Galerija</h2>
            <p className="mt-4 text-lg text-slate-600">
              Pogledajte fotografije naših vozila i uspešno obavljenih transporta.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[2, 3, 4, 5, 6, 7].map((item) => (
              <div key={item} className="group relative aspect-square overflow-hidden rounded-xl bg-slate-200">
                <Image
                  src={`/${item}.jpg`}
                  alt={`Šlep služba Munja - Slika ${item}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

       

        {/* CTA Section */}
        <section className="bg-yellow-500 py-16 text-white md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Potrebna vam je pomoć na putu?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
              Ne čekajte, pozovite nas odmah! Stižemo u najkraćem roku.
            </p>
            <a
              href="tel:+381693381788"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-yellow-600 shadow-sm transition-colors hover:bg-slate-100"
            >
              <Phone className="mr-2 h-5 w-5" />
              Pozovite Odmah
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-slate-400">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center gap-2 font-bold text-xl text-white">
            <Truck className="h-6 w-6" />
            <span>Šlep Služba Munja</span>
          </div>
          <p className="mb-6">&copy; {new Date().getFullYear()} Šlep Služba Munja. Sva prava zadržana.</p>
          <div className="flex justify-center gap-6 text-sm">

          </div>
        </div>
      </footer>
    </div>
  );
}
