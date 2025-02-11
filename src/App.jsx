import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PromoOffers from './components/PromoOffers';
import StreamingOffers from './components/StreamingOffers';
import CompanyHighlights from './components/CompanyHighlights';
import Footer from './components/Footer';
import Shop from './components/Shop';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'shop':
        return <Shop />;
      case 'login':
        return <LoginPage />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <PromoOffers />
            <StreamingOffers />
            <CompanyHighlights />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      {currentPage !== 'login' && <Footer />}
    </div>
  );
}

export default App