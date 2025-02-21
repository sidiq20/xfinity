import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PromoOffers from './components/PromoOffers';
import StreamingOffers from './components/StreamingOffers';
import CompanyHighlights from './components/CompanyHighlights';
import Footer from './components/Footer';
import Shop from './components/Shop';
import LoginPage from "./components/LoginPage";
import { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch(currentPage) {
      case 'shop':
        return <Shop />;
      case 'login':
        return <LoginPage onLoginSuccess={() => window.location.href = 'https://www.xfinity.com/overview'} />;
      case 'overview':
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <Features />
            <PromoOffers />
            <StreamingOffers />
            <CompanyHighlights />
          </>
        );
      default:
        return <LoginPage onLoginSuccess={() => window.location.href = 'https://www.xfinity.com/overview'} />;
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

export default App;