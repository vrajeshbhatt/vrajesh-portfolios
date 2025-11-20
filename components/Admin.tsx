
import React, { useState } from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { X, Save, Plus, Trash2, ChevronRight, Copy, Check } from 'lucide-react';
import { IconPickerOptions, DynamicIcon } from '../utils/iconHelper';

// Helper for form inputs
const Input = ({ label, value, onChange, type = "text", className = "" }: any) => (
  <div className={`mb-4 ${className}`}>
    <label className="block text-sm font-medium text-slate-400 mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-brand-500"
    />
  </div>
);

const TextArea = ({ label, value, onChange }: any) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-slate-400 mb-1">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={3}
      className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-brand-500"
    />
  </div>
);

const IconSelect = ({ value, onChange }: any) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-slate-400 mb-1">Icon</label>
    <div className="grid grid-cols-6 gap-2 max-h-40 overflow-y-auto p-2 bg-slate-800 border border-slate-700 rounded">
      {IconPickerOptions.map((iconName) => (
        <button
          key={iconName}
          onClick={() => onChange(iconName)}
          className={`p-2 rounded flex items-center justify-center hover:bg-slate-700 ${value === iconName ? 'bg-brand-500/20 border border-brand-500' : ''}`}
          title={iconName}
        >
          <DynamicIcon name={iconName} size={20} />
        </button>
      ))}
    </div>
  </div>
);

const AdminPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { data, updateData } = usePortfolio();
  const [activeTab, setActiveTab] = useState('profile');
  const [showExport, setShowExport] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // --- EDIT HANDLERS ---

  const updatePersonalInfo = (key: string, value: any) => {
    updateData({ ...data, personalInfo: { ...data.personalInfo, [key]: value } });
  };

  // --- EXPORT LOGIC ---
  const generateConfigFile = () => {
    const json = JSON.stringify(data, null, 2);
    // We need to reconstruct the file format from the data object
    // This is a rough reconstruction to match constants.tsx structure
    return `
import { ExperienceItem, ProjectItem, SkillCategory, EducationItem, SocialLink, NavItem, ChartDataPoint } from './types';

export const PERSONAL_INFO = ${JSON.stringify(data.personalInfo, null, 2)};

export const NAV_ITEMS: NavItem[] = ${JSON.stringify(data.navItems, null, 2)};

export const SOCIAL_LINKS: SocialLink[] = ${JSON.stringify(data.socialLinks, null, 2)};

export const SKILL_CATEGORIES: SkillCategory[] = ${JSON.stringify(data.skillCategories, null, 2)};

export const SKILL_CHART_DATA: ChartDataPoint[] = ${JSON.stringify(data.skillChartData, null, 2)};

export const EXPERIENCE: ExperienceItem[] = ${JSON.stringify(data.experience, null, 2)};

export const PROJECTS: ProjectItem[] = ${JSON.stringify(data.projects, null, 2)};

export const EDUCATION: EducationItem[] = ${JSON.stringify(data.education, null, 2)};

export const AWARDS = ${JSON.stringify(data.awards, null, 2)};
    `.trim();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateConfigFile());
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Editor</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white"><X size={20} /></button>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {['Profile', 'Skills', 'Work', 'Projects', 'Education', 'Awards'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors ${activeTab === tab.toLowerCase() ? 'bg-brand-500/10 text-brand-400' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              {tab}
              {activeTab === tab.toLowerCase() && <ChevronRight size={16} />}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={() => setShowExport(true)}
            className="w-full py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-md font-medium flex items-center justify-center gap-2"
          >
            <Save size={18} /> Export Config
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-slate-950 p-8">
        <div className="max-w-3xl mx-auto">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
              <Input label="Full Name" value={data.personalInfo.name} onChange={(v: string) => updatePersonalInfo('name', v)} />
              <Input label="Job Title" value={data.personalInfo.title} onChange={(v: string) => updatePersonalInfo('title', v)} />
              <TextArea label="Summary" value={data.personalInfo.summary} onChange={(v: string) => updatePersonalInfo('summary', v)} />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Email" value={data.personalInfo.email} onChange={(v: string) => updatePersonalInfo('email', v)} />
                <Input label="Phone" value={data.personalInfo.phone} onChange={(v: string) => updatePersonalInfo('phone', v)} />
                <Input label="Location" value={data.personalInfo.location} onChange={(v: string) => updatePersonalInfo('location', v)} />
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-8">
               <h3 className="text-2xl font-bold text-white">Skill Categories</h3>
               {data.skillCategories.map((cat, idx) => (
                 <div key={idx} className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                    <div className="flex justify-between mb-4">
                      <h4 className="font-semibold text-brand-400">Category {idx + 1}</h4>
                      <button onClick={() => {
                        const newCats = [...data.skillCategories];
                        newCats.splice(idx, 1);
                        updateData({...data, skillCategories: newCats});
                      }} className="text-red-400 hover:text-red-300"><Trash2 size={18}/></button>
                    </div>
                    <Input label="Title" value={cat.title} onChange={(v: string) => {
                       const newCats = [...data.skillCategories];
                       newCats[idx].title = v;
                       updateData({...data, skillCategories: newCats});
                    }} />
                    <IconSelect value={cat.icon} onChange={(v: string) => {
                        const newCats = [...data.skillCategories];
                       newCats[idx].icon = v;
                       updateData({...data, skillCategories: newCats});
                    }} />
                    <Input label="Skills (comma separated)" value={cat.skills.join(', ')} onChange={(v: string) => {
                        const newCats = [...data.skillCategories];
                        newCats[idx].skills = v.split(',').map(s => s.trim());
                        updateData({...data, skillCategories: newCats});
                    }} />
                 </div>
               ))}
               <button onClick={() => updateData({
                 ...data, skillCategories: [...data.skillCategories, { title: "New Category", skills: [], icon: "Code2" }]
               })} className="flex items-center gap-2 text-brand-400 hover:text-brand-300">
                 <Plus size={18} /> Add Category
               </button>

               <h3 className="text-2xl font-bold text-white pt-8">Chart Data</h3>
               {data.skillChartData.map((item, idx) => (
                 <div key={idx} className="flex gap-4 items-end mb-2">
                   <Input label="Subject" value={item.subject} onChange={(v: string) => {
                     const newData = [...data.skillChartData];
                     newData[idx].subject = v;
                     updateData({...data, skillChartData: newData});
                   }} className="mb-0 flex-1"/>
                   <Input label="Score (0-100)" type="number" value={item.A} onChange={(v: string) => {
                     const newData = [...data.skillChartData];
                     newData[idx].A = parseInt(v);
                     updateData({...data, skillChartData: newData});
                   }} className="mb-0 w-32" />
                 </div>
               ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Projects</h3>
              {data.projects.map((proj, idx) => (
                <div key={proj.id} className="bg-slate-900 p-6 rounded-lg border border-slate-800 relative">
                   <button onClick={() => {
                        const newProjs = [...data.projects];
                        newProjs.splice(idx, 1);
                        updateData({...data, projects: newProjs});
                      }} className="absolute top-4 right-4 text-red-400 hover:text-red-300"><Trash2 size={18}/></button>
                  
                  <Input label="Project Title" value={proj.title} onChange={(v: string) => {
                    const newProjs = [...data.projects];
                    newProjs[idx].title = v;
                    updateData({...data, projects: newProjs});
                  }} />
                  <Input label="Link (Optional)" value={proj.link || ''} onChange={(v: string) => {
                    const newProjs = [...data.projects];
                    newProjs[idx].link = v;
                    updateData({...data, projects: newProjs});
                  }} />
                  <TextArea label="Description (One sentence per line)" value={proj.description.join('\n')} onChange={(v: string) => {
                    const newProjs = [...data.projects];
                    newProjs[idx].description = v.split('\n');
                    updateData({...data, projects: newProjs});
                  }} />
                  <Input label="Tech Stack (comma separated)" value={proj.techStack.join(', ')} onChange={(v: string) => {
                    const newProjs = [...data.projects];
                    newProjs[idx].techStack = v.split(',').map(s => s.trim());
                    updateData({...data, projects: newProjs});
                  }} />
                </div>
              ))}
              <button onClick={() => updateData({
                 ...data, projects: [...data.projects, { id: Date.now(), title: "New Project", description: ["Description..."], techStack: ["Tool"] }]
               })} className="flex items-center gap-2 text-brand-400 hover:text-brand-300">
                 <Plus size={18} /> Add Project
               </button>
            </div>
          )}
          
          {activeTab === 'work' && (
             <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Experience</h3>
              {data.experience.map((job, idx) => (
                <div key={job.id} className="bg-slate-900 p-6 rounded-lg border border-slate-800 relative">
                   <button onClick={() => {
                        const newJobs = [...data.experience];
                        newJobs.splice(idx, 1);
                        updateData({...data, experience: newJobs});
                      }} className="absolute top-4 right-4 text-red-400 hover:text-red-300"><Trash2 size={18}/></button>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <Input label="Role" value={job.role} onChange={(v: string) => {
                      const newJobs = [...data.experience];
                      newJobs[idx].role = v;
                      updateData({...data, experience: newJobs});
                    }} />
                    <Input label="Company" value={job.company} onChange={(v: string) => {
                      const newJobs = [...data.experience];
                      newJobs[idx].company = v;
                      updateData({...data, experience: newJobs});
                    }} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <Input label="Period" value={job.period} onChange={(v: string) => {
                      const newJobs = [...data.experience];
                      newJobs[idx].period = v;
                      updateData({...data, experience: newJobs});
                    }} />
                    <Input label="Location" value={job.location} onChange={(v: string) => {
                      const newJobs = [...data.experience];
                      newJobs[idx].location = v;
                      updateData({...data, experience: newJobs});
                    }} />
                  </div>
                  <TextArea label="Details (One sentence per line)" value={job.details.join('\n')} onChange={(v: string) => {
                    const newJobs = [...data.experience];
                    newJobs[idx].details = v.split('\n');
                    updateData({...data, experience: newJobs});
                  }} />
                </div>
              ))}
              <button onClick={() => updateData({
                 ...data, experience: [...data.experience, { id: Date.now(), role: "Role", company: "Company", location:"Location", period:"Date", details: ["Worked on..."] }]
               })} className="flex items-center gap-2 text-brand-400 hover:text-brand-300">
                 <Plus size={18} /> Add Experience
               </button>
            </div>
          )}
          
          {activeTab === 'education' && (
              <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Education</h3>
              {data.education.map((edu, idx) => (
                <div key={idx} className="bg-slate-900 p-6 rounded-lg border border-slate-800 relative">
                   <button onClick={() => {
                        const newEdu = [...data.education];
                        newEdu.splice(idx, 1);
                        updateData({...data, education: newEdu});
                      }} className="absolute top-4 right-4 text-red-400 hover:text-red-300"><Trash2 size={18}/></button>
                  
                   <Input label="School" value={edu.school} onChange={(v: string) => {
                      const newEdu = [...data.education];
                      newEdu[idx].school = v;
                      updateData({...data, education: newEdu});
                    }} />
                     <Input label="Degree" value={edu.degree} onChange={(v: string) => {
                      const newEdu = [...data.education];
                      newEdu[idx].degree = v;
                      updateData({...data, education: newEdu});
                    }} />
                     <Input label="Period" value={edu.period} onChange={(v: string) => {
                      const newEdu = [...data.education];
                      newEdu[idx].period = v;
                      updateData({...data, education: newEdu});
                    }} />
                </div>
              ))}
               <button onClick={() => updateData({
                 ...data, education: [...data.education, { school: "School", degree: "Degree", period:"Date" }]
               })} className="flex items-center gap-2 text-brand-400 hover:text-brand-300">
                 <Plus size={18} /> Add Education
               </button>
            </div>
          )}

          {activeTab === 'awards' && (
             <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Awards</h3>
              {data.awards.map((award, idx) => (
                <div key={idx} className="flex gap-2">
                   <Input className="flex-1 mb-0" value={award} onChange={(v: string) => {
                      const newAwards = [...data.awards];
                      newAwards[idx] = v;
                      updateData({...data, awards: newAwards});
                    }} />
                   <button onClick={() => {
                        const newAwards = [...data.awards];
                        newAwards.splice(idx, 1);
                        updateData({...data, awards: newAwards});
                      }} className="text-red-400 hover:text-red-300 px-2"><Trash2 size={18}/></button>
                </div>
              ))}
              <button onClick={() => updateData({
                 ...data, awards: [...data.awards, "New Award"]
               })} className="flex items-center gap-2 text-brand-400 hover:text-brand-300">
                 <Plus size={18} /> Add Award
               </button>
             </div>
          )}
        </div>
      </div>

      {/* Export Modal */}
      {showExport && (
        <div className="fixed inset-0 z-[110] bg-black/80 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-xl w-full max-w-4xl h-[80vh] flex flex-col shadow-2xl border border-slate-700">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Export Configuration</h3>
              <button onClick={() => setShowExport(false)} className="text-slate-400 hover:text-white"><X size={24} /></button>
            </div>
            <div className="flex-1 p-6 overflow-hidden flex flex-col">
              <p className="text-slate-400 mb-4">
                Copy the code below and replace the contents of <code className="text-brand-400 bg-slate-950 px-1 py-0.5 rounded">constants.tsx</code> in your project.
              </p>
              <div className="flex-1 bg-slate-950 rounded-lg p-4 overflow-auto border border-slate-800 font-mono text-sm text-slate-300">
                <pre>{generateConfigFile()}</pre>
              </div>
            </div>
            <div className="p-6 border-t border-slate-800 flex justify-end">
              <button 
                onClick={handleCopy}
                className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all ${copySuccess ? 'bg-green-600 text-white' : 'bg-brand-600 hover:bg-brand-500 text-white'}`}
              >
                {copySuccess ? <Check size={20} /> : <Copy size={20} />}
                {copySuccess ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
