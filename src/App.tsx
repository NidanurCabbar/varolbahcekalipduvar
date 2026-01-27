import { useState } from "react";
import { Hero } from "./components/Hero";
import { GallerySection } from "./components/GallerySection";
import { ImageModal } from "./components/ImageModal";
import { ContactSection } from "./components/ContactSection";
import { MapSection } from "./components/MapSection";
import image1 from "figma:asset/a4486386e1a19ae59b7198da4ca60c486ed67ace.png";
import image2 from "figma:asset/75a0c988c18d7018bff54c67a44fe00cfcd82eeb.png";
import image3 from "figma:asset/7c46959160f017f9b7d46f02157a619f76bc3373.png";
import image4 from "figma:asset/3fc567288b96cc092b98e9eac49742fe7b93e4e9.png";
import image5 from "figma:asset/5d1857bd5d98eaf2d330d504d2348fa160e76925.png";
import image6 from "figma:asset/9468033dfa68311f88b89274979a4aa83566a65f.png";
import image7 from "figma:asset/2acff203d6e81fc4d72b1328c74826164563d866.png";
import image8 from "figma:asset/c6d40ffea4c2d07550f0c1e9435088827963d27c.png";
import image9 from "figma:asset/250ef99b73d16e94f868859f0c8320b7e883c3be.png";
import image10 from "figma:asset/37a2c059add01282c8d8fbe6bc8c2e09d9e2b884.png";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  material: string;
  dimensions: string;
  description: string;
}

export default function App() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 200);
  };

  // Gallery Data - All Images Combined
  const allImages: GalleryImage[] = [
    {
      id: 1,
      url: image1,
      title: "Çelik Kalıp Beton Duvar",
      material: "Çelik Kalıp, Beton",
      dimensions: "Uzun mesafe × 2.5m yükseklik",
      description: "Profesyonel çelik kalıp ile dökülen dayanıklı beton bahçe duvarı. Yüksek mukavemet ve uzun ömürlü yapı."
    },
    {
      id: 2,
      url: image2,
      title: "Dekoratif Desenli Beton Duvar İnşaatı",
      material: "Çelik Kalıp, Desenli Beton",
      dimensions: "Uzun mesafe × 4m yükseklik",
      description: "Özel desenli kalıp sistemi ile inşa edilen dekoratif bahçe duvarı. Taş görünümlü yüzey işleme tekniği ve çelik kalıp uygulaması."
    },
    {
      id: 3,
      url: image3,
      title: "Çelik Kalıp İnşaat Süreci",
      material: "Çelik Kalıp Sistemi, Beton",
      dimensions: "Endüstriyel ölçekli proje",
      description: "Çelik kalıp sistemi ile beton duvar inşaat süreci. Profesyonel kalıp işçiliği ve yüksek standartlarda uygulama."
    },
    {
      id: 4,
      url: image4,
      title: "Yüksek İstinat Duvarı Kalıp Sistemi",
      material: "Çelik Kalıp Sistemi, Beton",
      dimensions: "100m+ uzunluk × 5m yükseklik",
      description: "Endüstriyel ölçekli yüksek istinat duvarı projesi. Profesyonel çelik kalıp sistemi ile güvenli ve dayanıklı inşaat."
    },
    {
      id: 5,
      url: image5,
      title: "Çift Taraflı İstinat Duvarı Demiri Hazırlığı",
      material: "Armeli Beton, Çelik Kalıp",
      dimensions: "80m uzunluk × 4m yükseklik",
      description: "Büyük ölçekli istinat duvarı projesi için demir donatı hazırlığı. Her iki tarafta eş zamanlı beton dökümü için profesyonel kalıp sistemi."
    },
    {
      id: 6,
      url: image6,
      title: "Dekoratif Taş Desenli Beton Duvar",
      material: "Desenli Beton, Özel Kalıp",
      dimensions: "50m+ uzunluk × 2m yükseklik",
      description: "Geometrik taş deseni ile özel kalıp sistemi kullanılarak üretilmiş dekoratif beton duvar. Modern ve estetik görünüm."
    },
    {
      id: 7,
      url: image7,
      title: "Hazır Beton Dökümü ve Demir Donatı Uygulaması",
      material: "Armeli Beton, Hazır Beton Pompası",
      dimensions: "Endüstriyel proje",
      description: "Profesyonel hazır beton pompası ile demir donatılı duvar dökümü. Yüksek kalite standartlarında beton uygulama tekniği."
    },
    {
      id: 8,
      url: image8,
      title: "Modern Villa Bahçe Duvarı İnşaatı",
      material: "Çelik Kalıp, Armeli Beton",
      dimensions: "Özel villa projesi",
      description: "Modern villa için çelik kalıp sistemi ile yapılan bahçe duvarı uygulaması. Kalıp kurulumu ve tamamlanmış duvar detayı."
    },
    {
      id: 9,
      url: image9,
      title: "Panelli Beton Çevre Duvarı - Dekoratif Kolonlar",
      material: "Panel Beton Sistem, Dekoratif Kolonlar",
      dimensions: "120m+ uzunluk × 2.5m yükseklik",
      description: "Modern panel beton sistemi ile inşa edilen uzun mesafe çevre duvarı. Dekoratif beton kolonlar ve kalıp delikleri detaylı işçilik."
    },
    {
      id: 10,
      url: image10,
      title: "Yüksek İstinat Duvarı - Mavi Çelik Kalıp Sistemi",
      material: "Çelik Kalıp, Demir Donatı, Beton",
      dimensions: "Endüstriyel ölçekli proje",
      description: "Profesyonel mavi çelik kalıp sistemi ile yüksek istinat duvarı inşaatı. Demir donatı uygulaması ve yüksek standartlarda kalıp montajı."
    }
  ];

  return (
    <div 
      className="min-h-screen"
      style={{ 
        backgroundColor: '#f2f2f2',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '100px 100px'
      }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Gallery Section */}
      <div id="gallery-section" className="pt-12">
        <GallerySection 
          title="Projelerimiz"
          images={allImages}
          onImageClick={handleImageClick}
        />
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Map Section */}
      <MapSection />

      {/* Footer */}
      <footer 
        className="py-6 text-center"
        style={{ 
          backgroundColor: '#2b2b2b',
          color: '#d7c7a3',
          fontFamily: "'Inter', sans-serif"
        }}
      >
        <p>Varol Çelik Kalıp Bahçe Duvarları © 2025 — Tüm Hakları Saklıdır.</p>
      </footer>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
}