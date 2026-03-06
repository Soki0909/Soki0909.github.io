import type { GalleryItem } from '../types/dataModels';

interface GalleryCardProps {
  item: GalleryItem;
}

/**
 * ギャラリーカードコンポーネント
 * 動画 + タイトル + コメントを表示
 * ホバー時: yui540スタイルのグラデーションオーバーレイ + 微浮上
 */
const GalleryCard = ({ item }: GalleryCardProps) => {
  const { title, comment, video, tags } = item;

  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-[550ms] ease-[cubic-bezier(0,0.15,0.25,0.99)] hover:shadow-md hover:border-gray-300 hover:-translate-y-1 relative">
      {/* 動画プレイヤー */}
      <div className="relative aspect-video bg-gray-900">
        <video
          src={video}
          controls
          preload="metadata"
          className="w-full h-full object-contain"
          controlsList="nodownload"
        >
          お使いのブラウザは動画再生に対応していません。
        </video>

        {/*
         * ホバー時グラデーションオーバーレイ（yui540テクニック）
         * linear-gradient(to top, rgba(0,0,0,0.3), transparent) を
         * opacity: 0 → 1 でフェードイン（transform/opacity のみ使用）
         */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[550ms] ease-[cubic-bezier(0,0.15,0.25,0.99)] pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* コンテンツエリア */}
      <div className="p-4">
        {/* タイトル */}
        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
          {title}
        </h4>

        {/* コメント */}
        <p className="text-sm text-gray-600 mb-3">{comment}</p>

        {/* タグ */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryCard;
