import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';

// Import layout components (keep these as direct imports for immediate loading)
import Header from './components/Header';
import Footer from './components/Footer';

// Import contexts
import { ProjectProvider } from './contexts/ProjectContext';

// Import analytics
import { initGA, useGoogleAnalytics } from './utils/analytics';

// Dynamic imports for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Works = lazy(() => import('./pages/Works'));
const WorkDetail = lazy(() => import('./pages/WorkDetail'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

// Layout Component
const AppLayout = () => {
  // Google Analytics のページビュー追跡
  useGoogleAnalytics();

  return (
    <ProjectProvider>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 py-6 lg:py-8">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/works/:id" element={<WorkDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ProjectProvider>
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
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
