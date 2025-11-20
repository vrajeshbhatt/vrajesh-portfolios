import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const { data } = usePortfolio();
  const { experience } = data;

  return (
    <section id="experience" className="py-24 bg-slate-950 relative">
       <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-brand-400 font-mono text-sm tracking-wider uppercase">Career Path</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Professional <span className="text-brand-500">Journey</span></h2>
        </div>

        <div className="space-y-12 relative">
           {/* Connector Line */}
           <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-500 via-slate-800 to-slate-900 hidden md:block transform -translate-x-1/2"></div>
           <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-800 md:hidden"></div>

          {experience.map((job, index) => (
            <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border-4 border-brand-500 transform -translate-x-1/2 z-10 flex items-center justify-center shadow-[0_0_10px_rgba(14,165,233,0.5)]">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 flex-1">
                  <div className={`bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-brand-500/30 transition-all duration-300 hover:bg-slate-900/60 hover:shadow-lg group ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}>
                      <div className="flex flex-col gap-1 mb-4">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                             <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">{job.role}</h3>
                             <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-500/10 text-brand-300 border border-brand-500/20">
                                {job.period}
                             </span>
                          </div>
                          <h4 className="text-lg text-slate-300 font-medium flex items-center gap-2">
                             <Briefcase size={16} className="text-slate-500" />
                             {job.company}
                          </h4>
                          <p className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                             <MapPin size={14} />
                             {job.location}
                          </p>
                      </div>
                      
                      <ul className="space-y-3">
                        {job.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                  </div>
              </div>

              {/* Empty spacer for opposite side on desktop */}
              <div className="hidden md:block flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;