import { ChevronDown } from "lucide-react";
import heroImage from "figma:asset/45aee5d2dd36fc5dd1c5fb58bbe0b4e346331270.png";

export function Hero() {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery-section');
    gallerySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bahçe Duvarı"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 
          className="mb-3"
          style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.2
          }}
        >
          Varol Çelik Kalıp Bahçe Duvarları
        </h1>
        <h2
          className="mb-6"
          style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 500,
            lineHeight: 1.3,
            color: '#d7c7a3'
          }}
        >
          Beton Duvarları
        </h2>
        <p 
          className="max-w-2xl mb-12 opacity-95"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            fontWeight: 300,
            lineHeight: 1.6,
            fontFamily: "'Inter', sans-serif"
          }}
        >
          Estetik, dayanıklı ve yıllara meydan okuyan bahçe duvarları.
        </p>

        {/* Scroll Down Arrow */}
        <button
          onClick={scrollToGallery}
          className="animate-bounce mt-8 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          aria-label="Aşağı kaydır"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}