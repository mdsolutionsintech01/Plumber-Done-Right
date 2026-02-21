/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Droplets, 
  Wrench, 
  CheckCircle2, 
  Menu, 
  X, 
  ArrowRight,
  Star,
  Hammer,
  Thermometer,
  Waves
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Wrench className="text-white w-6 h-6" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Plumber Done Right
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'About', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {item}
            </a>
          ))}
          <a 
            href="tel:+27111234567" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
          >
            <Phone className="w-4 h-4" />
            011 123 4567
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-slate-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="tel:+27111234567" 
                className="bg-blue-600 text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: 011 123 4567
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
          alt="Professional Plumbing" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Expert Plumbing in Ferndale
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Plumbing Done <span className="text-blue-500">Right</span>, The First Time.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              From emergency leaks to full installations, we provide reliable, professional plumbing services across Ferndale and Randburg. 24/7 support when you need it most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+27111234567" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/30 group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Emergency Call
              </a>
              <a 
                href="#services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="Customer" 
                    className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-400 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-400"><span className="text-white font-semibold">500+</span> Happy Customers in Randburg</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Projects Done', value: '2.5k' },
    { label: 'Expert Plumbers', value: '12' },
    { label: 'Response Time', value: '30m' },
  ];

  return (
    <div className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Emergency Repairs',
      desc: 'Burst pipes, major leaks, or flooding? We are available 24/7 for immediate assistance.',
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Geyser Services',
      desc: 'Installation, maintenance, and repair of all geyser types to ensure you have hot water.',
      icon: <Thermometer className="w-8 h-8 text-orange-600" />,
      color: 'bg-orange-50'
    },
    {
      title: 'Drain Cleaning',
      desc: 'Professional high-pressure drain cleaning to remove stubborn blockages quickly.',
      icon: <Waves className="w-8 h-8 text-cyan-600" />,
      color: 'bg-cyan-50'
    },
    {
      title: 'Leak Detection',
      desc: 'Advanced equipment to find hidden leaks behind walls or underground without damage.',
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      color: 'bg-emerald-50'
    },
    {
      title: 'Bathroom Remodel',
      desc: 'Complete plumbing overhaul for your bathroom or kitchen renovation projects.',
      icon: <Hammer className="w-8 h-8 text-purple-600" />,
      color: 'bg-purple-50'
    },
    {
      title: 'General Maintenance',
      desc: 'Taps, toilets, showers, and more. We handle all your day-to-day plumbing needs.',
      icon: <Wrench className="w-8 h-8 text-slate-600" />,
      color: 'bg-slate-50'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Full-Service Plumbing Solutions</h2>
          <p className="text-lg text-slate-600">
            We offer a comprehensive range of plumbing services for residential and commercial properties in Ferndale. No job is too big or too small.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="#contact" className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const points = [
    { title: 'Licensed & Insured', desc: 'Fully qualified professionals you can trust.' },
    { title: '24/7 Availability', desc: 'Emergency support anytime, day or night.' },
    { title: 'Upfront Pricing', desc: 'No hidden costs. Clear quotes before we start.' },
    { title: 'Guaranteed Work', desc: 'We stand by the quality of our craftsmanship.' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000" 
              alt="Plumber at work" 
              className="rounded-[40px] shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-3xl shadow-xl z-20 max-w-[240px]">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm font-medium opacity-90">Satisfaction guarantee on every service we provide.</div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Why Ferndale Trusts Us</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We've built our reputation on honesty, quality, and speed. When you call Plumber Done Right, you're getting a team that treats your home like their own.
            </p>

            <div className="space-y-6">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{point.title}</h4>
                    <p className="text-slate-500 text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a 
                href="tel:+27111234567" 
                className="inline-flex items-center gap-2 text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-700 hover:border-blue-700 transition-all"
              >
                Learn more about our standards
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      location: 'Ferndale',
      text: 'Had a burst pipe at 2 AM on a Sunday. They were here within 30 minutes and fixed it perfectly. Truly life savers!',
      rating: 5
    },
    {
      name: 'Michael van der Merwe',
      location: 'Randburg',
      text: 'Professional, clean, and efficient. They installed a new geyser for us and the service was top-notch from start to finish.',
      rating: 5
    },
    {
      name: 'David Nkosi',
      location: 'Linden',
      text: 'Finally a plumber that actually shows up on time! Clear pricing and great communication. Highly recommended.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
          <div className="flex justify-center gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-6 h-6 fill-current" />)}
          </div>
          <p className="mt-4 text-slate-400">4.9/5 average rating based on 500+ reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <div className="flex text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[48px] overflow-hidden shadow-sm border border-slate-100">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Get in Touch</h2>
              <p className="text-slate-600 mb-12">
                Need a plumber? Send us a message or give us a call. We're ready to help you with any plumbing issue.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Call Us</div>
                    <a href="tel:+27111234567" className="text-xl font-medium text-slate-600 hover:text-blue-600 transition-colors">011 123 4567</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Location</div>
                    <p className="text-xl font-medium text-slate-600">Ferndale, Randburg, South Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/10 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Hours</div>
                    <p className="text-xl font-medium text-slate-600">Open 24 Hours / 7 Days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 relative min-h-[400px]">
              {/* Placeholder for Map */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-4">
                <MapPin className="w-12 h-12" />
                <span className="font-bold uppercase tracking-widest text-xs">Map View: Ferndale, Randburg</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Map area" 
                className="w-full h-full object-cover opacity-40 grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-md">
              <Wrench className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">
              Plumber Done Right
            </span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Sitemap</a>
          </div>

          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Plumber Done Right Ferndale. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
