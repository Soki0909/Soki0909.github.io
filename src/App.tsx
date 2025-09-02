import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';

// レイアウトコンポーネントのインポート（即座に読み込みが必要なため直接インポート）
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// コンテキストのインポート
import { ProjectProvider } from './contexts/ProjectContext';

// 分析・最適化ユーティリティのインポート
import { initGA, useGoogleAnalytics } from './utils/analytics';
import { initializePerformanceOptimizations } from './utils/coreWebVitals';
import { initializeSEOAnalytics } from './utils/seoAnalytics';

// コード分割のための動的インポート
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Experience = lazy(() => import('./pages/Experience'));
const Vision = lazy(() => import('./pages/Vision'));
const Works = lazy(() => import('./pages/Works'));
const WorkDetail = lazy(() => import('./pages/WorkDetail'));
const ActivityDetail = lazy(() => import('./pages/ActivityDetail'));
const Contact = lazy(() => import('./pages/Contact'));

// ローディングコンポーネント
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

// レイアウトコンポーネント
const AppLayout = () => {
  // Google Analytics のページビュー追跡
  useGoogleAnalytics();

  return (
    <ProjectProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Header />
        <main className="pt-header container mx-auto px-4 sm:px-6 py-6 lg:py-8">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/works" element={<Works />} />
              <Route path="/works/:id" element={<WorkDetail />} />
              <Route path="/activity/:id" element={<ActivityDetail />} />
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

    // パフォーマンス最適化の初期化
    initializePerformanceOptimizations();

    // SEO分析の初期化
    initializeSEOAnalytics();
  }, []);

  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
