import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Award, GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const { data } = usePortfolio();
  const { education, awards } = data;

  return (
    <section id="education" className="py-24 bg-slate-950 relative overflow-hidden">
       {/* Decorative circles */}
       <div className="absolute left-[-10%] bottom-[-10%] w-[40%] h-[40%] rounded-full bg-brand-900/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-500/10 rounded-xl text-brand-400 border border-brand-500/20">
                    <GraduationCap size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            
            <div className="space-y-6">
                {education.map((edu, idx) => (
                    <div key={idx} className="group bg-slate-900/50 hover:bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-brand-500/30 transition-all duration-300 hover:shadow-lg">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                            <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">{edu.school}</h3>
                                <p className="text-slate-400 mt-1">{edu.degree}</p>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 whitespace-nowrap mt-2 sm:mt-0 self-start">
                                <Calendar size={12} />
                                {edu.period}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Awards Column */}
          <div>
             <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-accent-500/10 rounded-xl text-accent-400 border border-accent-500/20">
                    <Award size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white">Achievements</h2>
            </div>
            
            <div className="space-y-4">
                {awards.map((award, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-900/30 transition-colors border border-transparent hover:border-slate-800/50">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-accent-500 flex-shrink-0 shadow-[0_0_8px_rgba(20,184,166,0.6)]"></div>
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">{award}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;