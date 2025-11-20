
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import AdminPanel from './components/Admin';
import { PortfolioProvider } from './contexts/PortfolioContext';
import { Settings } from 'lucide-react';

const MainContent = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        {/* Admin Toggle Button */}
        <button
          onClick={() => setShowAdmin(true)}
          className="fixed bottom-6 right-6 p-3 bg-slate-800 hover:bg-brand-600 text-slate-400 hover:text-white rounded-full shadow-lg transition-all z-40 opacity-50 hover:opacity-100"
          title="Edit Portfolio"
        >
          <Settings size={24} />
        </button>
      </div>
      
      {showAdmin && <AdminPanel onClose={() => setShowAdmin(false)} />}
    </>
  );
};

function App() {
  return (
    <PortfolioProvider>
      <MainContent />
    </PortfolioProvider>
  );
}

export default App;
