import { useParams, Link } from 'react-router-dom';

// TODO: 後で外部ファイルから読み込む予定
const projectsData = [
  {
    id: 1,
    title: 'ポートフォリオサイト',
    description:
      'React + TypeScript + Tailwind CSSで構築したレスポンシブなポートフォリオサイト',
    longDescription: `
      このポートフォリオサイトは、モダンなWeb技術を使用して構築された、レスポンシブで高性能なシングルページアプリケーションです。
      
      主な特徴：
      • React 19とTypeScriptによる型安全な開発
      • Tailwind CSS v4による効率的なスタイリング
      • Viteによる高速な開発体験
      • React Routerによるクライアントサイドルーティング
      • ESLintとPrettierによるコード品質の担保
      
      このプロジェクトを通じて、モダンなフロントエンド開発のワークフローと、
      パフォーマンスを重視したWebアプリケーションの構築方法を学びました。
    `,
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'React Router',
    ],
    images: [
      'https://via.placeholder.com/800x600?text=Portfolio+Main',
      'https://via.placeholder.com/800x600?text=Portfolio+About',
      'https://via.placeholder.com/800x600?text=Portfolio+Works',
    ],
    github: 'https://github.com/Soki0909/Soki0909.github.io',
    demo: '#',
    challenges: [
      'Tailwind CSS v4の新しい設定方法への対応',
      'TypeScriptとReact 19の最新機能の活用',
      'レスポンシブデザインの実装',
    ],
    learned: [
      'モダンなReact開発パターン',
      'Tailwind CSSによる効率的なスタイリング',
      'Viteによる高速な開発環境の構築',
    ],
  },
  // 他のプロジェクトデータは後で追加予定
];

const WorkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="text-center py-12">
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
    <div className="max-w-4xl mx-auto space-y-8">
      {/* ナビゲーション */}
      <nav className="text-sm">
        <Link to="/works" className="text-blue-500 hover:underline">
          ← 実績一覧に戻る
        </Link>
      </nav>

      {/* プロジェクトヘッダー */}
      <header className="space-y-4">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-xl text-gray-600">{project.description}</p>

        {/* 技術スタック */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
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
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            デモを見る
          </a>
        </div>
      </header>

      {/* プロジェクト画像 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">スクリーンショット</h2>
        <div className="grid gap-4">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              className="w-full rounded-lg shadow-md"
            />
          ))}
        </div>
      </section>

      {/* プロジェクト詳細 */}
      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">プロジェクト概要</h2>
          <div className="prose text-gray-600">
            {project.longDescription.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* 課題・工夫点 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">課題・工夫点</h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 学んだこと */}
          <div>
            <h3 className="text-xl font-semibold mb-3">学んだこと</h3>
            <ul className="space-y-2">
              {project.learned.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkDetail;
