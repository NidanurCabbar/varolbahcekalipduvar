import { Phone, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-16 md:py-24" id="contact">
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
          İletişime Geçin
        </h2>

        <div className="max-w-4xl mx-auto">
          <p 
            className="mb-8 text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: '#2b2b2b',
              lineHeight: 1.7
            }}
          >
            Projeleriniz için detaylı bilgi almak için 
            aşağıdaki iletişim kanallarından bize ulaşabilirsiniz.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Contact Card 1 */}
            <div 
              className="p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.07)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              style={{ backgroundColor: 'white' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="p-3 rounded-full"
                  style={{ backgroundColor: '#6d8c48' }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 
                    className="mb-2"
                    style={{ 
                      color: '#2b2b2b',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600
                    }}
                  >
                    İletişim 1
                  </h3>
                  <a 
                    href="tel:+905321661809"
                    className="block hover:underline"
                    style={{ color: '#6d8c48', fontFamily: "'Inter', sans-serif" }}
                  >
                    0532 166 18 09
                  </a>
                </div>
              </div>
              <a 
                href="https://wa.me/905321661809"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg transition-all duration-300 hover:opacity-90"
                style={{ 
                  backgroundColor: '#25D366',
                  color: 'white',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500
                }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile Mesaj Gönder
              </a>
            </div>

            {/* Contact Card 2 */}
            <div 
              className="p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.07)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              style={{ backgroundColor: 'white' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="p-3 rounded-full"
                  style={{ backgroundColor: '#6d8c48' }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 
                    className="mb-2"
                    style={{ 
                      color: '#2b2b2b',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600
                    }}
                  >
                    İletişim 2
                  </h3>
                  <a 
                    href="tel:+905349527566"
                    className="block hover:underline"
                    style={{ color: '#6d8c48', fontFamily: "'Inter', sans-serif" }}
                  >
                    0534 952 75 66
                  </a>
                </div>
              </div>
              <a 
                href="https://wa.me/905349527566"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg transition-all duration-300 hover:opacity-90"
                style={{ 
                  backgroundColor: '#25D366',
                  color: 'white',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500
                }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile Mesaj Gönder
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}