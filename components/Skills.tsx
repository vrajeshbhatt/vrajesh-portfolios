import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { DynamicIcon } from '../utils/iconHelper';

const Skills: React.FC = () => {
  const { data } = usePortfolio();
  const { skillCategories, skillChartData } = data;

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-brand-900/10 rounded-full filter blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-accent-900/10 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-400 font-mono text-sm tracking-wider uppercase">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Technical <span className="text-brand-500">Arsenal</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical abilities across Data Science, Analytics, and Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Cards Side */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div 
                key={category.title} 
                className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-brand-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-1 group backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl text-brand-400 group-hover:text-brand-300 shadow-inner border border-slate-700/50">
                    <DynamicIcon name={category.icon} size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-brand-100 transition-colors">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700/50 hover:bg-brand-500/10 hover:text-brand-300 hover:border-brand-500/20 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Side */}
          <div className="lg:col-span-5 h-[450px] w-full relative">
             <div className="absolute inset-0 bg-slate-900/30 rounded-3xl border border-slate-800/50 backdrop-blur-sm transform rotate-2 transition-transform hover:rotate-0 duration-500"></div>
             <div className="absolute inset-0 bg-slate-950/80 rounded-3xl border border-slate-800 p-6 flex flex-col items-center justify-center shadow-2xl">
                 <div className="absolute top-6 left-6 flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                 </div>
                 <div className="absolute top-6 right-6 text-xs font-mono text-slate-500">
                   radar_analysis.py
                 </div>
                 
                 <div className="w-full h-full mt-4">
                   <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillChartData}>
                        <PolarGrid stroke="#1e293b" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar
                          name="Proficiency"
                          dataKey="A"
                          stroke="#38bdf8"
                          strokeWidth={3}
                          fill="#0ea5e9"
                          fillOpacity={0.25}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                            borderColor: 'rgba(30, 41, 59, 1)', 
                            color: '#f1f5f9',
                            borderRadius: '8px',
                            backdropFilter: 'blur(4px)',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                          }}
                          itemStyle={{ color: '#38bdf8' }}
                          cursor={{ stroke: '#334155', strokeWidth: 1 }}
                        />
                      </RadarChart>
                   </ResponsiveContainer>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;