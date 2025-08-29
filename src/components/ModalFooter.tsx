/**
 * モーダルフッターコンポーネント
 *
 * @description モーダル下部に技術情報とアクションボタンを表示する
 * 再利用可能なフッターコンポーネント。
 *
 * @since v1.0.0
 */

/**
 * アクションボタンの型定義
 */
interface ActionButton {
  /** リンク先URL */
  href: string;

  /** ボタンラベル */
  label: string;

  /** CSSクラス名 */
  className: string;

  /** 外部リンクかどうか */
  external?: boolean;
}

/**
 * ModalFooterコンポーネントのProps型定義
 */
interface ModalFooterProps {
  /** 技術スタック配列（readonly対応） */
  technologies: readonly string[];

  /** アクションボタン配列 */
  actions: readonly ActionButton[];

  /** 追加CSSクラス名 */
  className?: string;
}

/**
 * モーダルフッターコンポーネント
 *
 * @param props - コンポーネントのProps
 * @returns JSX要素
 */
const ModalFooter = ({
  technologies,
  actions,
  className = '',
}: ModalFooterProps) => {
  return (
    <div
      className={`flex items-center justify-between p-6 border-t bg-gray-50 ${className}`}
    >
      {/* 技術スタック表示 */}
      <div className="text-sm text-gray-600">
        {technologies.slice(0, 3).join(' • ')}
        {technologies.length > 3 && ' など'}
      </div>

      {/* アクションボタン群 */}
      <div className="flex space-x-3">
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noopener noreferrer' : undefined}
            className={action.className}
            aria-label={`${action.label}（${action.external ? '外部サイト' : '内部リンク'}）`}
          >
            {action.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ModalFooter;
