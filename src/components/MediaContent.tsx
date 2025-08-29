/**
 * メディアコンテンツ表示コンポーネント
 *
 * @description 動画、音声、画像の表示を統一的に処理する
 * 再利用可能なメディア表示コンポーネント。
 *
 * @since v1.0.0
 */

import MediaPlayer from './MediaPlayer';
import LazyImage from './LazyImage';

/**
 * メディアタイプの定義
 */
type MediaType = 'videos' | 'audios' | 'images';

/**
 * MediaContentコンポーネントのProps型定義
 */
interface MediaContentProps {
  /** メディアの種類 */
  type: MediaType;

  /** メディアファイルのURL配列（readonly対応） */
  items: readonly string[];

  /** プロジェクトタイトル（アクセシビリティ用） */
  projectTitle: string;

  /** 追加CSSクラス名 */
  className?: string;
}

/**
 * メディアコンテンツ表示コンポーネント
 *
 * @param props - コンポーネントのProps
 * @returns JSX要素
 */
const MediaContent = ({
  type,
  items,
  projectTitle,
  className = '',
}: MediaContentProps) => {
  // Early return - 空のアイテム配列の場合
  if (!items || items.length === 0) {
    return null;
  }

  /**
   * ファイルパスからファイル名を抽出
   *
   * @param path - ファイルパス
   * @returns 拡張子を除いたファイル名
   */
  const getFileName = (path: string): string => {
    return (
      path
        .split('/')
        .pop()
        ?.replace(/\.[^/.]+$/, '') ?? 'Unknown'
    );
  };

  /**
   * メディアタイプから日本語ラベルを取得
   *
   * @param mediaType - メディアタイプ
   * @returns 日本語ラベル
   */
  const getLabel = (mediaType: string): string => {
    switch (mediaType) {
      case 'videos':
        return '動画';
      case 'audios':
        return '音声';
      case 'images':
        return '画像';
      default:
        return 'メディア';
    }
  };

  // 画像の場合のレンダリング
  if (type === 'images') {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
        {items.map((image, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-medium text-sm">
              {getLabel(type)} {index + 1}: {getFileName(image)}
            </h3>
            <LazyImage
              src={image}
              alt={`${projectTitle} screenshot ${index + 1}`}
              className="w-full h-64 rounded-lg"
            />
          </div>
        ))}
      </div>
    );
  }

  // 動画・音声の場合のレンダリング
  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="space-y-2">
          <h3 className="font-medium">
            {getLabel(type)} {index + 1}: {getFileName(item)}
          </h3>
          <MediaPlayer
            src={item}
            type={type === 'videos' ? 'video' : 'audio'}
            title={`${projectTitle} - ${getLabel(type)} ${index + 1}`}
            className={type === 'videos' ? 'w-full h-96' : 'w-full'}
          />
        </div>
      ))}
    </div>
  );
};

export default MediaContent;
