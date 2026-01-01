import { useParams, Link } from 'react-router-dom';
import { getTimelineItem } from '../hooks/useTimeline';
import SEO from '../components/SEO';

/**
 * Document Page - 詳細ページ
 * 個別のプロジェクト詳細や記事を表示するページ
 */
const Document = () => {
  const { id } = useParams<{ id: string }>();

  // タイムラインからアイテムを取得
  const item = id ? getTimelineItem(id) : undefined;

  // アイテムが見つからない場合
  if (!item) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-gray-600 mb-8">
              お探しのページが見つかりませんでした。
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              ← Hub に戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // カテゴリラベル
  const getCategoryLabel = () => {
    switch (item.category) {
      case 'project':
        return { icon: '■', label: 'Project', color: 'text-blue-600' };
      case 'activity':
        return { icon: '●', label: 'Activity', color: 'text-green-600' };
      case 'writing':
        return { icon: '▲', label: 'Writing', color: 'text-purple-600' };
      default:
        return { icon: '○', label: 'Other', color: 'text-gray-600' };
    }
  };

  const category = getCategoryLabel();

  return (
    <>
      <SEO
        title={`${item.title} | 久米蒼輝`}
        description={item.summary}
        keywords={item.tags}
        type="article"
        url={`https://soki0909.github.io/docs/${id}`}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 font-mono text-sm"
          >
            ← cd ../
          </Link>

          {/* Header */}
          <header className="mb-12">
            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-lg ${category.color}`}>
                {category.icon}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {category.label}
              </span>
              <span className="text-sm text-gray-400 font-mono">
                {item.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {item.title}
            </h1>

            {/* Summary */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {item.summary}
            </p>

            {/* Tags */}
            {item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content Area */}
          <main className="prose prose-gray max-w-none">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-500 font-mono text-sm">
                {'// '}詳細コンテンツは details/{id}.json から読み込み予定
              </p>
              <p className="text-gray-400 text-sm mt-2">
                現在は基本情報のみ表示しています。
              </p>
            </div>
          </main>

          {/* External Link */}
          {item.externalLink && (
            <div className="mt-8">
              <a
                href={item.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                外部リンクを開く
                <span>↗</span>
              </a>
            </div>
          )}

          {/* Back to Hub */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              to="/"
              className="inline-flex items-center text-gray-500 hover:text-gray-900 font-mono text-sm"
            >
              ← Hub に戻る
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
