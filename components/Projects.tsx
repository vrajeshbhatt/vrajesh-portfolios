import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';

const Projects: React.FC = () => {
  const { data } = usePortfolio();
  const { projects } = data;

  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.05),_transparent_40%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
                <span className="text-brand-400 font-mono text-sm tracking-wider uppercase">Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Featured <span className="text-brand-500">Projects</span></h2>
            </div>
            <p className="text-slate-400 max-w-md text-right md:text-left">
                A showcase of data-driven solutions, machine learning models, and analytical dashboards.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="group relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/20 flex flex-col h-full">
                    
                    {/* Card Header Gradient */}
                    <div className="h-2 bg-gradient-to-r from-brand-500 to-accent-500"></div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-slate-800/80 transition-colors">
                                <FolderGit2 size={24} className="text-brand-400" />
                            </div>
                            {project.link && (
                                <a 
                                    href={project.link} 
                                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ArrowUpRight size={20} />
                                </a>
                            )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">{project.title}</h3>
                        
                        <div className="space-y-2 mb-6 flex-grow">
                             {project.description.map((desc, i) => (
                                 <p key={i} className="text-sm text-slate-400 leading-relaxed pl-3 border-l border-slate-700">
                                     {desc}
                                 </p>
                             ))}
                        </div>
                        
                        <div className="pt-4 border-t border-slate-800/50">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700/50 group-hover:border-brand-500/20 group-hover:text-brand-300 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;