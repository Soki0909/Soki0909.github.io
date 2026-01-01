import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';

// 分析・最適化ユーティリティのインポート
import { initGA, useGoogleAnalytics } from './utils/analytics';
import { initializePerformanceOptimizations } from './utils/coreWebVitals';
import { initializeSEOAnalytics } from './utils/seoAnalytics';

// コンテキストのインポート
import { ProjectProvider } from './contexts/ProjectContext';
import ScrollToTop from './components/ScrollToTop';

// ===== 新しいページ（リニューアル後） =====
const Hub = lazy(() => import('./pages/Hub'));
const Document = lazy(() => import('./pages/Document'));

// ===== 旧ページ（互換性維持、後日削除予定） =====
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

// Hub用レイアウト（ヘッダー・フッターなし）
const HubLayout = () => {
  useGoogleAnalytics();

  return (
    <ProjectProvider>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* ===== 新しいルート ===== */}
          <Route path="/" element={<Hub />} />
          <Route path="/docs/:id" element={<Document />} />

          {/* ===== 旧ルート（リダイレクト） ===== */}
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/skills" element={<Navigate to="/" replace />} />
          <Route path="/experience" element={<Navigate to="/" replace />} />
          <Route path="/vision" element={<Navigate to="/" replace />} />
          <Route path="/works" element={<Navigate to="/" replace />} />
          <Route path="/contact" element={<Navigate to="/" replace />} />

          {/* 旧詳細ルート → 新ルートにリダイレクト */}
          <Route
            path="/works/:id"
            element={<Navigate to="/docs/sleep-buster" replace />}
          />
          <Route
            path="/activity/:id"
            element={<Navigate to="/docs/robocup-home" replace />}
          />

          {/* ===== 開発用: 旧ページへの直接アクセス ===== */}
          <Route path="/_old" element={<Home />} />
          <Route path="/_old/about" element={<About />} />
          <Route path="/_old/skills" element={<Skills />} />
          <Route path="/_old/experience" element={<Experience />} />
          <Route path="/_old/vision" element={<Vision />} />
          <Route path="/_old/works" element={<Works />} />
          <Route path="/_old/works/:id" element={<WorkDetail />} />
          <Route path="/_old/activity/:id" element={<ActivityDetail />} />
          <Route path="/_old/contact" element={<Contact />} />
        </Routes>
      </Suspense>
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
      <HubLayout />
    </BrowserRouter>
  );
}

export default App;
