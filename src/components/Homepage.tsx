import React from 'react';
import { Navigation } from './Navigation';
import { CallToActionSection } from './CallToActionSection';
import { ContactSection } from './ContactSection';
import { FloatingApps } from './FloatingApps';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';
import { ProjectsSection } from './ProjectsSection';



export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden">
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <FloatingApps />
        <ProjectsSection />
        <CallToActionSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};