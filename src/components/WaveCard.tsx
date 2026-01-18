import { Link } from 'react-router-dom';
import type { HubTimelineItem } from '../types/dataModels';

interface WaveCardProps {
  item: HubTimelineItem;
}

/**
 * タイムラインカードコンポーネント
 * Notionの「Callout」風デザイン + Hover時の矩形波エフェクト
 */
const WaveCard = ({ item }: WaveCardProps) => {
  const {
    id,
    title,
    summary,
    tags,
    hasDetail,
    externalLink,
    category,
    developmentType,
  } = item;

  // カテゴリに応じたアクセントカラー
  const getAccentColor = () => {
    switch (category) {
      case 'project':
        return 'border-l-blue-500 hover:border-blue-400';
      case 'activity':
        return 'border-l-green-500 hover:border-green-400';
      case 'writing':
        return 'border-l-purple-500 hover:border-purple-400';
      default:
        return 'border-l-gray-500 hover:border-gray-400';
    }
  };

  // カードの内容
  const cardContent = (
    <>
      {/* タイトルとバッジ */}
      <div className="flex items-start gap-2 mb-2">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex-1">
          {title}
        </h3>
        {developmentType && (
          <span
            className={`
            px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0
            ${
              developmentType === 'team'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-purple-100 text-purple-700'
            }
          `}
          >
            {developmentType === 'team' ? 'Team' : 'Solo'}
          </span>
        )}
      </div>

      {/* 概要 */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{summary}</p>

      {/* タグ */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 5).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
            >
              {tag}
            </span>
          ))}
          {tags.length > 5 && (
            <span className="px-2 py-0.5 text-xs font-medium text-gray-400">
              +{tags.length - 5}
            </span>
          )}
        </div>
      )}
    </>
  );

  // 基本スタイル: 矩形波風のホバーエフェクト
  const baseClasses = `
    group block p-4 bg-white rounded-lg 
    border-l-4 border border-gray-200
    transition-all duration-200
    hover:shadow-lg hover:border-gray-300
    ${getAccentColor()}
  `;

  // 外部リンクの場合
  if (externalLink) {
    return (
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {cardContent}
        <div className="mt-2 text-xs text-gray-400 flex items-center gap-1">
          <span>↗</span>
          <span>外部リンク</span>
        </div>
      </a>
    );
  }

  // 詳細ページがある場合
  if (hasDetail) {
    return (
      <Link to={`/docs/${id}`} className={baseClasses}>
        {cardContent}
      </Link>
    );
  }

  // 詳細ページがない場合（静的表示）
  return <div className={baseClasses}>{cardContent}</div>;
};

export default WaveCard;
