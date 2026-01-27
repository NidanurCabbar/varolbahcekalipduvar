export function MapSection() {
  const servicedRegions = [
    { 
      name: 'Çankaya',
      icon: '🗺️',
      mapsUrl: 'https://www.google.com/maps/place/Çankaya,+Ankara/@39.8893127,32.7638711,13z'
    },
    { 
      name: 'Akyurt',
      icon: '🗺️',
      mapsUrl: 'https://www.google.com/maps/place/Akyurt,+Ankara/@40.1343456,33.0545969,13z'
    },
    { 
      name: 'Gölbaşı',
      icon: '🗺️',
      mapsUrl: 'https://www.google.com/maps/place/Gölbaşı,+Ankara/@39.7891,32.8081,13z'
    }
  ];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#f2f2f2' }}>
      <div className="container mx-auto px-4">
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
          Konum
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Serviced Regions with Maps */}
          <div>
            <h3
              className="text-center mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 600,
                lineHeight: 1.3,
                color: '#2b2b2b'
              }}
            >
              Hizmet Verdiğimiz Bölgeler
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {servicedRegions.map((region, index) => (
                <a
                  key={index}
                  href={region.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-8 rounded-lg text-center transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-2 cursor-pointer group"
                  style={{
                    backgroundColor: '#ffffff',
                    boxShadow: '0_4px_12px_rgba(0,0,0,0.07)',
                    border: '1px solid rgba(43, 43, 43, 0.05)'
                  }}
                >
                  <div 
                    className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: '#6d8c48' }}
                  >
                    {region.icon}
                  </div>
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#2b2b2b'
                    }}
                  >
                    {region.name}
                  </p>
                  <p
                    className="text-sm transition-colors duration-300 group-hover:opacity-100"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: '#6d8c48',
                      opacity: 0.7
                    }}
                  >
                    Haritada Görüntüle →
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Location Info */}
          <div className="mt-12 text-center">
            <p 
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#2b2b2b',
                lineHeight: 1.7
              }}
            >
              <strong style={{ color: '#6d8c48' }}>Ankara, Türkiye</strong>
              <br />
              Ankara ve çevre ilçelerinde hizmet vermekteyiz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}