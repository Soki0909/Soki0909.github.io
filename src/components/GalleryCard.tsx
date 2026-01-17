import type { GalleryItem } from '../types/dataModels';

interface GalleryCardProps {
  item: GalleryItem;
}

/**
 * ギャラリーカードコンポーネント
 * 動画 + タイトル + コメントを表示
 */
const GalleryCard = ({ item }: GalleryCardProps) => {
  const { title, comment, video, tags } = item;

  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-gray-300">
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
