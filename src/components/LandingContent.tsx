'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, LineChart, Cpu, MapPin } from 'lucide-react';

export default function LandingContent({ locale }: { locale: string }) {
  const tHero = useTranslations('Hero');
  const tProblem = useTranslations('Problem');
  const tServices = useTranslations('Services');
  const tCase = useTranslations('Case');
  const tTestimonials = useTranslations('Testimonials');
  const tContact = useTranslations('Contact');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [task, setTask] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !task.trim()) {
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, task }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setTask('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-24 py-32">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.1] mb-8 max-w-5xl"
        >
          {tHero('headline')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl max-w-2xl text-[#A0A0A0] mb-16"
        >
          {tHero('offer')}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="group flex items-center gap-4 text-xl border-b pb-2 border-white/30 hover:border-white transition-colors"
        >
          {tHero('cta')}
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </motion.button>
      </section>

      {/* Problem / Solution Section */}
      <section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-24 py-32 bg-white text-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl font-medium mb-8">
            {tProblem('title')}
          </h2>
          <p className="text-2xl md:text-4xl text-[#666] mb-24">
            {tProblem('description')}
          </p>
          
          <h2 className="text-4xl md:text-6xl font-medium mb-8">
            {tProblem('solutionTitle')}
          </h2>
          <p className="text-2xl md:text-4xl text-[#666]">
            {tProblem('solutionDesc')}
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen py-32 px-8 md:px-24 bg-[#050505] flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          {/* Service 1 */}
          <div className="space-y-6">
            <Code2 className="w-12 h-12" />
            <h3 className="text-3xl font-medium">{tServices('web.title')}</h3>
            <p className="text-xl text-[#A0A0A0]">{tServices('web.desc')}</p>
          </div>
          {/* Service 2 */}
          <div className="space-y-6">
            <LineChart className="w-12 h-12" />
            <h3 className="text-3xl font-medium">{tServices('seo.title')}</h3>
            <p className="text-xl text-[#A0A0A0]">{tServices('seo.desc')}</p>
          </div>
          {/* Service 3 */}
          <div className="space-y-6">
            <Cpu className="w-12 h-12" />
            <h3 className="text-3xl font-medium">{tServices('geo.title')}</h3>
            <p className="text-xl text-[#A0A0A0]">{tServices('geo.desc')}</p>
          </div>
          {/* Service 4 */}
          <div className="space-y-6">
            <MapPin className="w-12 h-12" />
            <h3 className="text-3xl font-medium">{tServices('maps.title')}</h3>
            <p className="text-xl text-[#A0A0A0]">{tServices('maps.desc')}</p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-32 px-8 md:px-24 border-t border-white/10">
        <h2 className="text-6xl md:text-8xl font-bold mb-16">{tCase('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-xl">
          <div>
            <div className="text-[#A0A0A0] mb-2 uppercase tracking-widest text-sm">{tCase('situationLabel')}</div>
            <p>{tCase('situation')}</p>
          </div>
          <div>
            <div className="text-[#A0A0A0] mb-2 uppercase tracking-widest text-sm">{tCase('solutionLabel')}</div>
            <p>{tCase('solution')}</p>
          </div>
          <div>
            <div className="text-[#A0A0A0] mb-2 uppercase tracking-widest text-sm">{tCase('resultLabel')}</div>
            <p>{tCase('result')}</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-8 md:px-24 bg-[#111]">
        <div className="flex flex-col gap-24">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="max-w-5xl"
            >
              <p className="text-3xl md:text-5xl font-medium leading-tight mb-8">
                &ldquo;{tTestimonials(`${i}.quote` as any)}&rdquo;
              </p>
              <p className="text-xl text-[#A0A0A0] uppercase tracking-widest text-sm">
                — {tTestimonials(`${i}.author` as any)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 py-32 text-center">
        <h2 className="text-6xl md:text-8xl font-bold mb-16">{tContact('title')}</h2>
        <form className="w-full max-w-2xl flex flex-col gap-8" onSubmit={handleSubmit}>
          <input 
            type="text" 
            required
            disabled={status === 'loading'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={tContact('name')}
            className="bg-transparent border-b border-white/30 px-0 py-4 text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-white/30 disabled:opacity-50"
          />
          <input 
            type="email" 
            required
            disabled={status === 'loading'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={tContact('email')}
            className="bg-transparent border-b border-white/30 px-0 py-4 text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-white/30 disabled:opacity-50"
          />
          <textarea 
            required
            disabled={status === 'loading'}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder={tContact('task')}
            className="bg-transparent border-b border-white/30 px-0 py-4 text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-white/30 min-h-[100px] resize-none disabled:opacity-50"
          />
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="mt-8 bg-white text-black py-6 px-12 text-xl font-medium hover:bg-[#E0E0E0] transition-colors w-full disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === 'loading' ? tContact('sending') : tContact('cta')}
          </button>
          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-emerald-400 text-xl font-medium mt-4"
            >
              {tContact('success')}
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xl font-medium mt-4"
            >
              {tContact('error')}
            </motion.p>
          )}
        </form>
      </section>
    </div>
  );
}
