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
          {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {item}
            </a>
          ))}
          <a 
            href="tel:+27832321233" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
          >
            <Phone className="w-4 h-4" />
            083 232 1233
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
              {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                  className="text-slate-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="tel:+27832321233" 
                className="bg-blue-600 text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: 083 232 1233
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
                href="tel:+27832321233" 
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

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/27832321233" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
    aria-label="Chat on WhatsApp"
  >
    <svg 
      viewBox="0 0 24 24" 
      className="w-7 h-7 fill-current"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
    <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
      Chat with us
    </span>
  </a>
);

const Gallery = () => {
  const projects = [
    {
      title: "Bathroom Pipe Burst",
      before: "https://images.unsplash.com/photo-1585909665970-21c5bc462879?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      tag: "Emergency Repair"
    },
    {
      title: "Geyser Installation",
      before: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800",
      tag: "Installation"
    },
    {
      title: "Drain Unblocking",
      before: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?auto=format&fit=crop&q=80&w=800",
      tag: "Maintenance"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight text-balance">Our Work in Action</h2>
          <p className="text-lg text-slate-600">
            See the quality of our craftsmanship. We take pride in delivering clean, durable, and professional plumbing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200">
                <img 
                  src={project.after} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {project.tag}
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-bold">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Before Image Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs mb-4">Before</span>
                  <img 
                    src={project.before} 
                    alt="Before" 
                    className="w-full h-48 object-cover rounded-2xl mb-6 shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Swipe or hover to see the professional transformation we delivered.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Emergency Repairs',
      desc: 'Burst pipes, major leaks, or flooding? We are available 24/7 for immediate assistance.',
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      color: 'bg-blue-50',
      border: 'border-blue-100'
    },
    {
      title: 'Geyser Services',
      desc: 'Installation, maintenance, and repair of all geyser types to ensure you have hot water.',
      icon: <Thermometer className="w-8 h-8 text-orange-600" />,
      color: 'bg-orange-50',
      border: 'border-orange-100'
    },
    {
      title: 'Drain Cleaning',
      desc: 'Professional high-pressure drain cleaning to remove stubborn blockages quickly.',
      icon: <Waves className="w-8 h-8 text-cyan-600" />,
      color: 'bg-cyan-50',
      border: 'border-cyan-100'
    },
    {
      title: 'Leak Detection',
      desc: 'Advanced equipment to find hidden leaks behind walls or underground without damage.',
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      color: 'bg-emerald-50',
      border: 'border-emerald-100'
    },
    {
      title: 'Bathroom Remodel',
      desc: 'Complete plumbing overhaul for your bathroom or kitchen renovation projects.',
      icon: <Hammer className="w-8 h-8 text-purple-600" />,
      color: 'bg-purple-50',
      border: 'border-purple-100'
    },
    {
      title: 'General Maintenance',
      desc: 'Taps, toilets, showers, and more. We handle all your day-to-day plumbing needs.',
      icon: <Wrench className="w-8 h-8 text-slate-600" />,
      color: 'bg-slate-50',
      border: 'border-slate-200'
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
              className={`bg-white p-10 rounded-[2.5rem] shadow-sm border ${service.border} transition-all relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className={`${service.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 relative z-10 shadow-inner`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 relative z-10 text-pretty">
                {service.desc}
              </p>
              <a href="#contact" className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all relative z-10">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-6 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Decades of Excellence in <span className="text-blue-600">Ferndale</span> Plumbing.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded on the principles of integrity and technical mastery, Plumber Done Right has been the cornerstone of reliable plumbing in the Randburg area for over 15 years.
              </p>
              <p>
                We aren't just contractors; we are your neighbors. Our team of licensed master plumbers is dedicated to solving complex infrastructure challenges while providing the personal touch of a local family business.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Licensed Team</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Emergency Support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-blue-600 text-white p-10 rounded-[2.5rem] shadow-2xl hidden lg:block max-w-xs -rotate-6">
              <Star className="w-10 h-10 mb-4 fill-white" />
              <p className="font-bold text-xl leading-snug">"The most reliable plumbing service I've ever used in Randburg."</p>
              <div className="mt-4 text-sm font-medium opacity-80">— Local Homeowner</div>
            </div>
          </div>
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
                href="tel:+27832321233" 
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: 'General Maintenance'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                    <a href="tel:+27832321233" className="text-xl font-medium text-slate-600 hover:text-blue-600 transition-colors">083 232 1233</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Location</div>
                    <a 
                      href="https://www.google.com/maps/place/Plumber+Done+Right+Ferndale/@-26.0955483,27.9952378,17z/data=!4m10!1m2!2m1!1sPlumbers+!3m6!1s0x1e9575da5e1d3ded:0x1a66d307e087aca4!8m2!3d-26.0955291!4d27.997802!15sCghQbHVtYmVyc5IBB3BsdW1iZXLgAQA!16s%2Fg%2F11yzstkl08" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-medium text-slate-600 hover:text-blue-600 transition-colors block"
                    >
                      Ferndale, Randburg, South Africa
                    </a>
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

            <div className="p-12 md:p-16 bg-white border-l border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Book an Appointment</h3>
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl text-center h-full flex flex-col justify-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-emerald-900 mb-2">Request Sent!</h4>
                  <p className="text-emerald-700">We'll contact you shortly to confirm your booking.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="083 232 1233" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Preferred Date</label>
                      <input 
                        required
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Service</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all appearance-none"
                      >
                        <option>General Maintenance</option>
                        <option>Emergency Repair</option>
                        <option>Geyser Service</option>
                        <option>Drain Cleaning</option>
                        <option>Leak Detection</option>
                        <option>Bathroom Remodel</option>
                      </select>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    Request Appointment
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
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
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
