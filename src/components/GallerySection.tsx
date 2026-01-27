interface GalleryImage {
  id: number;
  url: string;
  title: string;
  material: string;
  dimensions: string;
  description: string;
}

interface GallerySectionProps {
  title: string;
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

export function GallerySection({ title, images, onImageClick }: GallerySectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 
          className="text-center mb-12"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 600,
            lineHeight: 1.3,
            color: '#2b2b2b'
          }}
        >
          {title}
        </h2>

        {/* Masonry Grid Gallery with CSS Columns */}
        <div 
          className="max-w-7xl mx-auto"
          style={{
            columnCount: 1,
            columnGap: '20px'
          }}
        >
          <style>{`
            @media (min-width: 640px) {
              .masonry-container {
                column-count: 2;
                column-gap: 20px;
              }
            }
            @media (min-width: 1024px) {
              .masonry-container {
                column-count: 3;
                column-gap: 20px;
              }
            }
            .masonry-item {
              break-inside: avoid;
              margin-bottom: 20px;
              display: inline-block;
              width: 100%;
            }
          `}</style>
          <div className="masonry-container">
            {images.map((image) => (
              <div
                key={image.id}
                className="masonry-item cursor-pointer group relative overflow-hidden rounded-lg"
                onClick={() => onImageClick(image)}
                style={{
                  boxShadow: '0 4px 12px rgba(0,0,0,0.07)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 
                        className="mb-1"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                          fontWeight: 600,
                          color: 'white',
                          lineHeight: 1.4
                        }}
                      >
                        {image.title}
                      </h3>
                      <p 
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
                          color: 'rgba(255,255,255,0.85)',
                          lineHeight: 1.4
                        }}
                      >
                        {image.material}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}