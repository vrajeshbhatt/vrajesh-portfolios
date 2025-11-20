
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PortfolioData } from '../types';
import * as Constants from '../constants';

const defaultData: PortfolioData = {
  personalInfo: Constants.PERSONAL_INFO,
  navItems: Constants.NAV_ITEMS,
  socialLinks: Constants.SOCIAL_LINKS,
  skillCategories: Constants.SKILL_CATEGORIES,
  skillChartData: Constants.SKILL_CHART_DATA,
  experience: Constants.EXPERIENCE,
  projects: Constants.PROJECTS,
  education: Constants.EDUCATION,
  awards: Constants.AWARDS,
};

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: PortfolioData) => void;
  resetData: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(defaultData);

  const updateData = (newData: PortfolioData) => {
    setData(newData);
  };

  const resetData = () => {
    setData(defaultData);
  };

  return (
    <PortfolioContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
