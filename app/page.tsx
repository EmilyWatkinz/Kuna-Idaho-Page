'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#locations-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image 
                src="/Logo.png" 
                alt="Lamm & Co" 
                width={50} 
                height={50}
                className="object-contain"
                priority
              />
              <div>
                <div className="text-2xl font-bold text-slate-900 tracking-tight">Lamm & Co</div>
                <div className="text-xs text-slate-500 font-medium">Kuna, Idaho</div>
              </div>
            </div>
            <button className="text-slate-900 font-semibold hover:text-slate-600 transition-colors cursor-pointer">
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Width with Background */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/80 z-10"></div>
          <Image 
            src="/happy people copy.jpg" 
            alt="Kuna, Idaho community" 
            fill
            className="object-cover"
            priority
            quality={100}
            unoptimized={true}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight mb-8 tracking-tight">
              Smart Accounting<br/>
              for a Growing Kuna.
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mb-6">
              Personalized accounting, tax, and advisory services designed not just for Kuna's families and business owners, but for those all across the United States. 
            </p>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mb-12">
              The other guy is confusing, impossible to reach, doesn't explain things well, and doesn't give you the attention you deserve. 
              <span className="font-semibold text-white"> We're different.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group bg-white text-slate-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer">
                Schedule Free Consultation
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <button className="group bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Scroll to next section"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </button>
      </section>

      {/* Locations - Regional Strength, Local Touch */}
      <section id="locations-section" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Map Visual */}
            <div className="relative">
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
            <div>
              <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                Local roots.<br/>
                Regional strength.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
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
      <section className="py-32 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Pain Points */}
            <div>
              <h2 className="text-5xl font-bold text-white mb-12 tracking-tight">
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
            <div>
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
      <section className="bg-slate-50 py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              What we do best
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              From taxes to bookkeeping, we handle the complex so you can focus on what matters.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Tax Strategy",
                desc: "Smart planning that keeps more money in your pocket, year after year.",
                icon: "📊"
              },
              {
                title: "Bookkeeping",
                desc: "Clean books, clear insights. Know where you stand at any moment.",
                icon: "📖"
              },
              {
                title: "Business Advisory",
                desc: "Real-world guidance from people who get the local landscape.",
                icon: "💡"
              },
              {
                title: "IRS Support",
                desc: "When issues arise, we're in your corner with expertise and calm.",
                icon: "🛡️"
              }
            ].map((service, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-slate-900 hover:shadow-xl cursor-pointer"
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
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                Why Kuna trusts us
              </h2>
              <div className="space-y-8">
                <div className="group">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-slate-600">
                    We're your neighbors
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Not a faceless firm. We live here, shop here, and understand the unique needs of Kuna families and businesses.
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-slate-600">
                    No confusing jargon
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We explain things in plain English. You'll actually understand your finances—and feel confident about them.
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-slate-600">
                    Always available
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Questions don't wait for tax season. Neither do we. Reach out anytime—we're here.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden">
                <Image 
                  src="/happy people.webp" 
                  alt="Real people, real service" 
                  width={600} 
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Clean and Credible */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-slate-900 mb-16 tracking-tight">
            What clients say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Finally, an accountant who explains things in a way I understand. No more confusion.",
                author: "Sarah M.",
                role: "Small Business Owner"
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
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-lg">
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
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-16 text-center">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
              Let's work together
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Ready to simplify your finances? Schedule a free consultation and see how we can help.
            </p>
            <button className="bg-white text-slate-900 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Minimal and Clean */}
      <footer className="border-t border-slate-200 bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/Logo.png" 
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
              <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
              <div className="space-y-2 text-slate-600">
                <p>Kuna, Idaho</p>
                <p>(555) 123-4567</p>
                <p>hello@lammco.com</p>
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
    </div>
  );
}
