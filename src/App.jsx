import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import MenuSection from './MenuSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ReserveSection from './ReserveSection';

function App() {
  return (
    <div className="bg-darkBlue text-offWhite">
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
  );
}

export default App;