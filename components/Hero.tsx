import React from 'react';
import { ChevronDown, Download, MapPin, Database, ArrowRight } from 'lucide-react';
import { usePortfolio } from '../contexts/PortfolioContext';

const Hero: React.FC = () => {
  const { data } = usePortfolio();
  const { personalInfo } = data;

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-950">
         <div className="absolute inset-0 bg-grid opacity-20"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/20 bg-brand-500/5 backdrop-blur-sm text-brand-400 text-sm font-mono mb-8 hover:bg-brand-500/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="font-semibold">Open to opportunities in {personalInfo.location}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Transforming <span className="text-slate-400">Data</span> into <br />
            <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent drop-shadow-sm">
              Strategic Insights
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
            Hi, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>. {personalInfo.summary}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href="#projects" 
              className="group px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-brand-50 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
            >
              <Database size={20} className="text-brand-600" />
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#" 
              className="group px-8 py-4 rounded-full bg-slate-800/50 text-white font-semibold hover:bg-slate-800 transition-all border border-slate-700 hover:border-slate-600 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <Download size={20} className="text-slate-400 group-hover:text-white transition-colors" />
              Download Resume
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-slate-500">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                <MapPin size={16} className="text-brand-400" />
                <span className="text-sm font-medium">{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600 hover:text-brand-400 transition-colors cursor-pointer">
        <a href="#skills"><ChevronDown size={32} /></a>
      </div>
    </section>
  );
};

export default Hero;