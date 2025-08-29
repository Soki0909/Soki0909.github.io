import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// Import page components
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import WorkDetail from './pages/WorkDetail';
import Contact from './pages/Contact';

// Import layout components
import Header from './components/Header';
import Footer from './components/Footer';

// Import analytics
import { initGA, useGoogleAnalytics } from './utils/analytics';

// Layout Component
const AppLayout = () => {
  // Google Analytics のページビュー追跡
  useGoogleAnalytics();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 py-6 lg:py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<WorkDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  useEffect(() => {
    // 本番環境でのみGoogle Analyticsを初期化
    if (import.meta.env.PROD) {
      initGA();
    }
  }, []);

  return (
    <BrowserRouter basename="/Soki0909.github.io">
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
