import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useScrollSpy } from './hooks/useScrollSpy';

// Components
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { ProductShowcase } from './components/showcase/ProductShowcase';
import { FeaturesGrid } from './components/features/FeaturesGrid';
import { SmartProductivity } from './components/smart/SmartProductivity';
import { FocusSection } from './components/focus/FocusSection';
import { CalendarSection } from './components/calendar/CalendarSection';
import { StatisticsSection } from './components/statistics/StatisticsSection';
import { SyncSection } from './components/sync/SyncSection';
import { NearbySyncSection } from './components/sync/NearbySyncSection';
import { OfflineSection } from './components/offline/OfflineSection';
import { BackupSection } from './components/backup/BackupSection';
import { DownloadSection } from './components/download/DownloadSection';
import { InstallationGuide } from './components/installation/InstallationGuide';
import { SecuritySection } from './components/security/SecuritySection';
import { ReviewsSection } from './components/reviews/ReviewsSection';
import { FinalCta } from './components/cta/FinalCta';
import { Footer } from './components/footer/Footer';

// Styles
import './styles/global.css';
import './styles/animations.css';

const MainLayout: React.FC = () => {
  useScrollReveal();

  const sectionIds = [
    'hero',
    'showcase',
    'features',
    'smart',
    'focus',
    'calendar',
    'statistics',
    'sync',
    'nearby-sync',
    'offline',
    'backup',
    'downloads',
    'installation',
    'privacy',
    'reviews',
  ];

  const activeSection = useScrollSpy(sectionIds);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Floating Glass Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <HeroSection />
        <ProductShowcase />
        <FeaturesGrid />
        <SmartProductivity />
        <FocusSection />
        <CalendarSection />
        <StatisticsSection />
        <SyncSection />
        <NearbySyncSection />
        <OfflineSection />
        <BackupSection />
        <DownloadSection />
        <InstallationGuide />
        <SecuritySection />
        <ReviewsSection />
        <FinalCta />
      </main>

      {/* Structured Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
