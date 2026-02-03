'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isLocationVisible, setIsLocationVisible] = useState(false);
  const [isPainPointsVisible, setIsPainPointsVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isWhyVisible, setIsWhyVisible] = useState(false);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  // Scroll to top on page load/refresh
  useEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Force scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Trigger hero fade-in after a short delay
    const timer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Show scroll-to-top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLocationVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#locations-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPainPointsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#pain-points-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsServicesVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#services-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsWhyVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#why-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTestimonialsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#testimonials-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#locations-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image 
                src="/logo.png" 
                alt="Lamm & Co" 
                width={40} 
                height={40}
                className="object-contain sm:w-[50px] sm:h-[50px]"
                priority
              />
              <div>
                <div className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">Lamm & Co</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Kuna, Idaho</div>
              </div>
            </div>
            <a 
              href="https://www.lammcocpa.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative text-sm sm:text-base text-slate-900 font-semibold hover:text-slate-600 transition-colors cursor-pointer group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Width with Background */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/80 z-10"></div>
          <Image 
            src="/happy people copy.jpg" 
            alt="Kuna, Idaho community" 
            fill
            className="object-cover object-center sm:object-[center_30%] lg:object-center"
            priority
            quality={100}
            unoptimized={true}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight mb-6 sm:mb-8 tracking-tight transition-all duration-[1500ms] ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Smart Accounting<br/>
              for a Growing Kuna.
            </h1>
            <p className={`text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mb-4 sm:mb-6 transition-all duration-[1500ms] delay-300 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Personalized accounting, tax, and advisory services designed not just for Kuna's families and business owners, but for those all across the United States. 
            </p>
            <p className={`text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mb-8 sm:mb-12 transition-all duration-[1500ms] delay-500 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              The other guy is confusing, impossible to reach, doesn't explain things well, and doesn't give you the attention you deserve. 
              <span className="font-semibold text-white"> We're different.</span>
            </p>
            <div className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 transition-all duration-[1500ms] delay-700 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button className="group bg-white text-slate-900 px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer w-full sm:w-auto">
                Schedule Consultation
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <button className="group bg-transparent border-2 border-white text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 cursor-pointer w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNextSection}
          className="absolute bottom-2 sm:bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Scroll to next section"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </button>
      </section>

      {/* Locations - Regional Strength, Local Touch */}
      <section id="locations-section" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Map Visual */}
            <div className={`relative transition-all duration-[2000ms] ${isLocationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="aspect-[3/4] bg-slate-50 rounded-3xl p-6 flex items-center justify-center">
                <Image 
                  src="/idaho.png" 
                  alt="Idaho map" 
                  fill
                  className="object-contain p-6"
                />
              </div>
            </div>

            {/* Copy */}
            <div className={`transition-all duration-[2000ms] delay-300 ${isLocationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
                Local roots.<br/>
                Regional strength.
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8">
                With <span className="font-bold text-slate-900">six locations across Idaho</span>, we combine regional expertise with truly local service. When you work with us in Kuna, you're backed by the strength of an established Idaho firm.
              </p>
              <div className="bg-slate-900 text-white p-8 rounded-2xl">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-xl">And we don't stop at state lines.</span>
                  <br/><br/>
                  Whether you're a growing business in Kuna, managing operations across the country, or around the world — we have the expertise and systems to serve you wherever you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points vs Solution - Better Than The Other Guy */}
      <section id="pain-points-section" className="py-16 sm:py-24 lg:py-32 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Pain Points */}
            <div className={`transition-all duration-[2000ms] ${isPainPointsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 tracking-tight">
                Tired of the<br/>
                same old problems?
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="text-3xl opacity-50">😖</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      You don't understand your taxes
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Every year it's the same—you sign papers you don't fully understand and hope for the best.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl opacity-50">😵</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Your accountant confuses you
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      They speak in technical jargon and never take the time to explain what anything actually means.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl opacity-50">📵</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Zero communication
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      You can't reach them when you need them. No responses, no clarity, no peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution with Image */}
            <div className={`transition-all duration-[2000ms] ${isPainPointsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="bg-white rounded-3xl p-12 shadow-2xl">
                <div className="flex justify-center mb-8">
                  <Image 
                    src="/lightbulb.jpeg" 
                    alt="We shed light on everything" 
                    width={200} 
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-6 text-center">
                  We're the opposite
                </h3>
                <div className="space-y-6 text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">✓</div>
                    <div>
                      <p className="text-lg leading-relaxed">
                        <span className="font-bold text-slate-900">We explain everything</span> in plain English—no jargon, no confusion. You'll actually understand your finances.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">✓</div>
                    <div>
                      <p className="text-lg leading-relaxed">
                        <span className="font-bold text-slate-900">We shed light</span> on complex tax situations and make them crystal clear. Questions are welcomed, not brushed aside.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">✓</div>
                    <div>
                      <p className="text-lg leading-relaxed">
                        <span className="font-bold text-slate-900">We're always available</span> when you need us. Quick responses, clear answers, and genuine care for your success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 text-center">
                  <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">
                    Experience The Difference
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Minimalist Cards */}
      <section id="services-section" className="bg-slate-50 py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl mb-12 sm:mb-16 lg:mb-20 mx-auto text-center transition-all duration-[2000ms] ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
              What we do best
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              From taxes to bookkeeping, we handle the complex so you can focus on what matters.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                title: "Tax Prep Made Simple",
                desc: "Smart planning that keeps more money in your pocket, year after year.",
                icon: "📊"
              },
              {
                title: "Payroll You Can Count On",
                desc: "Reliable payroll processing that's always accurate and on time.",
                icon: "💰"
              },
              {
                title: "Bookkeeping That Works for You",
                desc: "Clean books, clear insights. Know where you stand at any moment.",
                icon: "📖"
              },
              {
                title: "Business Advisory",
                desc: "Real-world guidance from people who get the local landscape.",
                icon: "💡"
              }
            ].map((service, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-[2000ms] hover:border-slate-900 hover:shadow-xl cursor-pointer text-center ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: isServicesVisible ? `${(idx + 1) * 200}ms` : '0ms' }}
              >
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-4 text-slate-900 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why People Choose Us - Human, not corporate */}
      <section id="why-section" className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className={`text-center lg:text-left transition-all duration-[2000ms] ${isWhyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
                Why Kuna trusts us
              </h2>
              <div className="space-y-8">
                <div className="group">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-slate-600">
                    We're your neighbors
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Not a faceless firm. We live here, shop here, and understand the unique needs of Kuna families and businesses.
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-slate-600">
                    No confusing jargon
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    We explain things in plain English. You'll actually understand your finances—and feel confident about them.
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-slate-600">
                    Always available
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Questions don't wait for tax season. Neither do we. Reach out anytime—we're here.
                  </p>
                </div>
              </div>
            </div>
            <div className={`relative transition-all duration-[2000ms] ${isWhyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="bg-slate-900 rounded-3xl flex items-center justify-center py-20 px-12">
                <Image 
                  src="/handshake.png" 
                  alt="Real people, real service" 
                  width={350} 
                  height={350}
                  className="object-contain transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Clean and Credible */}
      <section id="testimonials-section" className="bg-slate-50 py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 sm:mb-12 lg:mb-16 tracking-tight text-center transition-all duration-[2000ms] ${isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            What clients say
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "Went in to sign documents at the Kuna location, was greeted by Shaely and Kambry. They were super polite and professional! Great business and great people!",
                author: "Garrett H.",
                role: "Client"
              },
              {
                quote: "They saved me thousands and made the whole process stress-free. Couldn't ask for more.",
                author: "Michael R.",
                role: "Local Resident"
              },
              {
                quote: "It's like having a financial advisor and a friend. They genuinely care about our success.",
                author: "Jennifer L.",
                role: "Family Client"
              }
            ].map((testimonial, idx) => (
              <div 
                key={idx} 
                className={`bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-[2000ms] hover:shadow-lg ${isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: isTestimonialsVisible ? `${(idx + 1) * 200}ms` : '0ms' }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <div className="text-slate-400 text-5xl font-serif mb-4">"</div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Strong and Simple */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Let's work together
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Ready to simplify your finances? Schedule a consultation and see how we can help.
            </p>
            <button className="bg-white text-slate-900 px-6 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer w-full sm:w-auto">
              Book Your Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Minimal and Clean */}
      <footer className="border-t border-slate-200 bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 text-center sm:text-left">
            <div className="md:col-span-2 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="Lamm & Co" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
                <div className="text-xl font-bold text-slate-900">Lamm & Co</div>
              </div>
              <p className="text-slate-600 max-w-sm">
                Your trusted accounting partner in Kuna, Idaho. Local expertise, personal service.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Contact Us</h4>
              <div className="space-y-2 text-slate-600">
                <p>Kuna, Idaho</p>
                <p>(555) 123-4567</p>
                <p>hello@lammco.com</p>
              </div>
              <div className="flex gap-4 mt-4 justify-center sm:justify-start">
                <a 
                  href="https://www.facebook.com/lammcocpa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Hours</h4>
              <div className="space-y-2 text-slate-600">
                <p>Mon - Fri: 9am - 5pm</p>
                <p>Sat: By Appointment</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2026 Lamm & Co. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-slate-900 text-white p-4 rounded-full shadow-lg hover:bg-slate-700 transition-all duration-300 hover:scale-110 cursor-pointer z-50"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </div>
  );
}
