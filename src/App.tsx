import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactAndGuidesSection } from './components/ContactAndGuidesSection';
import { Footer } from './components/Footer';
import { DownloadModalProvider } from './context/DownloadModalContext';

export const App: React.FC = () => {
  return (
    <DownloadModalProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Flow */}
        <main id="main-content" role="main" style={{ flexGrow: 1 }}>
          {/* Hero Section */}
          <Hero />

          {/* Section 1: Services */}
          <ServicesSection />

          {/* Section 2: Portfolio */}
          <PortfolioSection />

          {/* Section 3: Process & Procedures */}
          <ProcessSection />

          {/* Section 4: Projects (Case Studies) */}
          <ProjectsSection />

          {/* Section 5: Reviews */}
          <ReviewsSection />

          {/* Section 6: Guides / Contact */}
          <ContactAndGuidesSection />
        </main>

        {/* Premium Footer */}
        <Footer />
      </div>
    </DownloadModalProvider>
  );
};

export default App;
