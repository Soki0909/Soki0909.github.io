import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useProjectById } from '../hooks/useProjects';
import LazyImage from '../components/LazyImage';
import DemoModal from '../components/DemoModal';
import SEO from '../components/SEO';
import { getSEOData } from '../utils/dataLoader';

const WorkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const project = useProjectById(Number(id));
  const seoData = getSEOData();

  if (!project) {
    return (
      <div className="text-center py-12">
        <SEO
          title="プロジェクトが見つかりません"
          description="指定されたプロジェクトは存在しません。"
          keywords={seoData.defaults.keywords}
          type="website"
          url={`${seoData.site.baseUrl}/works/${id}`}
        />
        <h1 className="text-2xl font-bold mb-4">
          プロジェクトが見つかりません
        </h1>
        <Link to="/works" className="text-blue-500 hover:underline">
          実績一覧に戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title={`${project.title} | 作品詳細`}
        description={project.description}
        keywords={[
          ...seoData.defaults.keywords,
          ...project.technologies,
          project.title,
        ]}
        type="article"
        url={`${seoData.site.baseUrl}/works/${project.id}`}
      />

      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              to="/works"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              ← 実績一覧に戻る
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {project.description}
              </p>

              {/* 技術スタック */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* リンク */}
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  GitHub で見る
                </a>

                {/* デモボタン - 動画/音声がある場合はモーダル、ない場合は外部リンク */}
                {(project.videos && project.videos.length > 0) ||
                (project.audios && project.audios.length > 0) ? (
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    🎬 デモを見る
                  </button>
                ) : project.demo !== '#' ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    デモを見る
                  </a>
                ) : (
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    📱 プロジェクト詳細
                  </button>
                )}
              </div>
            </div>

            {/* メイン画像 */}
            {project.images && project.images.length > 0 && (
              <div className="flex-shrink-0 w-full lg:w-80 bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <LazyImage
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* プロジェクト概要 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                プロジェクト概要
              </h2>
              <div className="prose prose-gray max-w-none">
                {project.longDescription
                  .split('\n')
                  .map((paragraph: string, index: number) => (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed mb-4"
                    >
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          {/* サイドバー情報 */}
          <div className="lg:col-span-1 space-y-6">
            {/* 課題・工夫点 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                課題・工夫点
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600 text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 学んだこと */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                学んだこと
              </h3>
              <ul className="space-y-3">
                {project.learned.map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* スクリーンショット */}
            {project.images && project.images.length > 1 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  スクリーンショット
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {project.images
                    .slice(1)
                    .map((image: string, index: number) => (
                      <div
                        key={index}
                        className="w-full bg-gray-50 rounded-lg shadow-md overflow-hidden"
                      >
                        <LazyImage
                          src={image}
                          alt={`${project.title} screenshot ${index + 2}`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* デモモーダル */}
      <DemoModal
        project={project}
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
};

export default WorkDetail;
