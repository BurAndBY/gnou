import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useLenis from './hooks/useLenis';
import { siteConfig } from './config';

// Sections
import Hero from './sections/Hero';
import NarrativeText from './sections/NarrativeText';
import About from './sections/About';
import IdentitySection from './sections/IdentitySection';
import Directions from './sections/Directions';
import EcoRoutePanel from './sections/EcoRoutePanel';
import Leadership from './sections/Leadership';
import InstagramGuide from './sections/InstagramGuide';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Initialize Lenis smooth scrolling
  useLenis();

  useEffect(() => {
    // Set document language if configured
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }
    if (siteConfig.pageTitle) {
      document.title = siteConfig.pageTitle;
    }

    // Refresh ScrollTrigger after all content is loaded
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);

    // Also refresh after a short delay to ensure images are loaded
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(refreshTimeout);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-kaleo-sand">
      {/* Hero Section */}
      <Hero />

      {/* Narrative Text Section */}
      <NarrativeText />

      {/* Old About Section */}
      <About />

      {/* Motto, Credo, Anthem */}
      <IdentitySection />

      {/* Original Browser Window Section */}
      <Directions />

      {/* Eco Route Panel */}
      <EcoRoutePanel />

      {/* Coordination Section */}
      <Leadership />

      {/* Instagram Method Guide */}
      <InstagramGuide />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
