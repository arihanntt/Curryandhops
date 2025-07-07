// === File: src/App.jsx ===
import { useState, useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import MenuSection from './MenuSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ReserveSection from './ReserveSection';
import Loader from './Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Fade out loader after content is fully ready
      setTimeout(() => setIsLoading(false), 500); // optional small delay for smoothness
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <div className={`${isLoading ? 'pointer-events-none overflow-hidden h-screen' : ''} <div className="bg-darkBlue text-offWhite animate-zoom-in">`}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <ReserveSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
