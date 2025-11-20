import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Mail, ArrowUp } from 'lucide-react';
import { DynamicIcon } from '../utils/iconHelper';

const Contact: React.FC = () => {
  const { data } = usePortfolio();
  const { personalInfo, socialLinks } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="pt-24 pb-12 bg-gradient-to-b from-slate-950 to-black border-t border-slate-900 relative">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-brand-400 font-mono text-sm tracking-wider uppercase">Get In Touch</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 mt-2">Let's work <span className="text-slate-600">together</span></h2>
        
        <p className="text-slate-400 mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
          I'm currently exploring new opportunities in Data Analytics and Machine Learning. 
          If you have a project in mind or just want to connect, feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brand-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-600/30"
            >
              <Mail size={20} className="mr-2" />
              Say Hello
              <div className="absolute -inset-3 rounded-xl bg-brand-400 opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-200" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-900 pt-12 text-left">
            <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <p className="text-slate-500 mb-2">{personalInfo.email}</p>
                <p className="text-slate-500">{personalInfo.phone}</p>
                <p className="text-slate-500 mt-2">{personalInfo.location}</p>
            </div>
            
            <div>
                <h4 className="text-white font-semibold mb-4">Socials</h4>
                <div className="flex flex-col gap-3">
                    {socialLinks.map((link) => (
                        <a 
                        key={link.platform}
                        href={link.url}
                        className="text-slate-500 hover:text-brand-400 transition-colors flex items-center gap-2 w-fit"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <DynamicIcon name={link.icon} size={18} />
                            {link.platform}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-start md:items-end justify-between">
                 <button 
                    onClick={scrollToTop}
                    className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800"
                    aria-label="Scroll to top"
                 >
                    <ArrowUp size={20} />
                 </button>
                 <div className="text-sm text-slate-600 mt-4 md:text-right">
                    <p>© {new Date().getFullYear()} {personalInfo.name}</p>
                    <p>Built with React & Tailwind</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;