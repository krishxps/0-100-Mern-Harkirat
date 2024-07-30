import React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { MainContent } from '../components/MainContent';

export const Main: React.FC = () => {
  return (
    <div className="bg-[#171111] min-h-screen flex flex-col">
      <div className="flex-grow">
        <Navbar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};
