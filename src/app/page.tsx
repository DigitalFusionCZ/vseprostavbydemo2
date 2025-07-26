'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const companyName = "Vše Pro Stavby";

  useEffect(() => {
    document.title = companyName;

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4F46E5" /><stop offset="100%" stop-color="#3730A3" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute('href', faviconUrl);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#hero" className="text-2xl font-bold text-indigo-700 hover:text-indigo-900 transition duration-300">
                {companyName}
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#sluzby" className="text-gray-600 hover:text-indigo-700 transition duration-300 px-3 py-2 rounded-md text-base font-medium">Naše Služby</a>
              <a href="#kontakt" className="text-gray-600 hover:text-indigo-700 transition duration-300 px-3 py-2 rounded-md text-base font-medium">Kontakt</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#sluzby" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">Naše Služby</a>
            <a href="#kontakt" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-16 bg-gradient-to-r from-blue-500 to-indigo-700 text-white flex items-center justify-center h-screen-75 md:h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            {companyName}
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up animation-delay-300">
            Váš spolehlivý partner pro stavební projekty a služby.
          </p>
          <a href="#sluzby" className="inline-block bg-white text-indigo-700 hover:bg-indigo-100 py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600">
            Zjistěte Více
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="sluzby" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Naše Služby</h2>
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
              <div className="text-indigo-600 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 10h.01M15 10h.01M9 14h.01M15 14h.01m-5 4h5m-5 0v3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Kompletní realizace staveb</h3>
              <p className="text-center text-gray-700">Od základů po střechu, zajistíme komplexní provedení stavebních prací s důrazem na kvalitu a termíny.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
              <div className="text-indigo-600 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Rekonstrukce a modernizace</h3>
              <p className="text-center text-gray-700">Transformujeme vaše stávající prostory, aby splňovaly moderní standardy a vaše představy.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
              <div className="text-indigo-600 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 11.47c-.158 1.1-.242 2.22-.242 3.35a11.984 11.984 0 0017.585 3.01c.219-.48.384-.974.502-1.478A12.001 12.001 0 0021.08 11.47c0-1.13-.084-2.25-.242-3.35a11.955 11.955 0 01-8.618-3.04z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Poradenství a projektování</h3>
              <p className="text-center text-gray-700">Poskytujeme odborné poradenství a zajišťujeme přípravu projektové dokumentace pro vaše stavby.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Kontaktujte Nás</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Zavolejte nebo Napište</h3>
              <p className="text-gray-700 text-lg mb-2">
                <strong className="block">Email:</strong> info@vseprostavby.cz
              </p>
              <p className="text-gray-700 text-lg mb-2">
                <strong className="block">Telefon:</strong> +420 777 123 456
              </p>
              <p className="text-gray-700 text-lg">
                <strong className="block">Adresa:</strong> Stavební 123, 123 00 Praha
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Kde Nás Najdete</h3>
              <div className="aspect-w-16 aspect-h-9 w-full max-w-lg mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.837335967078!2d14.437800115668352!3d50.08053737942289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b943d047a0709%3A0x7d2f9b876a4a1b0!2sCharles%20Bridge!5e0!3m2!1sen!2scz!4v1678912345678!5m2!1sen!2scz"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                  className="rounded-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} {companyName}. Všechna práva vyhrazena.</p>
          <p className="text-xs mt-2">
            Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200 transition duration-300">DigitalFusion</a>
          </p>
        </div>
      </footer>

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .h-screen-75 { height: 75vh; }
        /* Animations */
        @keyframes fadeInMoveUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInMoveUp 0.8s ease-out forwards;
          opacity: 0; /* StarT hidden */
        }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
}
