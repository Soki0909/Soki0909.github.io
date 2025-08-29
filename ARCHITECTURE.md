# ポートフォリオサイト開発プロジェクト - アーキテクチャ設計書

## � **最重要事項 - 必読**

**すべてのコミット前に以下3つのコマンドを必ず実行すること:**

```bash
npm run format  # コード整形
npm run lint    # 品質検査
npm run build   # ビルド確認
```

**これらを実行せずにコミットすることは絶対に禁止です。**

---

## �📋 目次

1. [プロジェクト概要](#1-プロジェクト概要)
2. [技術スタック](#2-技術スタック)
3. [アーキテクチャ設計思想](#3-アーキテクチャ設計思想)
4. [ディレクトリ構造とファイル配置](#4-ディレクトリ構造とファイル配置)
5. [開発ガイドライン](#5-開発ガイドライン)
6. [パフォーマンス戦略](#6-パフォーマンス戦略)
7. [型安全性とエラーハンドリング](#7-型安全性とエラーハンドリング)
8. [今後の拡張指針](#8-今後の拡張指針)

---

## 1. プロジェクト概要

情報系エンジニアである自身の技術力、学習意欲、制作実績、そして人柄を採用担当者に効果的に伝え、採用選考を有利に進めることを目的としたポートフォリオサイトを開発する。

**コンセプト:**

- **シンプル＆モダン:** 情報を分かりやすく伝え、洗練された印象を与えるデザイン。
- **Show, don't tell:** 実績やコードで技術力を示す。
- **高速表示:** ストレスのないUXを提供する。
- **保守性重視:** 長期的な運用とアップデートに対応可能な設計。

---

## 2. 技術スタック

| カテゴリ       | 技術           | バージョン | 備考                         |
| :------------- | :------------- | :--------- | :--------------------------- |
| 言語           | TypeScript     | 5.6.2      | 型安全性の確保               |
| ビルドツール   | Vite           | 7.1.2      | 高速な開発サーバーとビルド   |
| UIライブラリ   | React          | 19.1.1     | UI構築のコア技術             |
| スタイリング   | Tailwind CSS   | 4.0.0      | モダンで効率的なスタイリング |
| ルーティング   | React Router   | 7.1.0      | SPAのページ遷移を管理        |
| フォーマッター | Prettier       | 3.4.2      | コードフォーマットの統一     |
| リンター       | ESLint         | 9.15.0     | コード品質の担保             |
| ホスティング   | GitHub Pages   | -          | 静的サイトホスティング       |
| CI/CD          | GitHub Actions | -          | ビルドとデプロイの自動化     |
| アナリティクス | GA4            | -          | アクセス解析・パフォーマンス |

---

## 3. アーキテクチャ設計思想

### 🏗️ **基本理念: レイヤード・アーキテクチャ**

本プロジェクトは **Clean Architecture** と **React のベストプラクティス** を組み合わせた、5層のレイヤード・アーキテクチャを採用。

```
📂 src/
├── 🌐 contexts/        # グローバル状態管理層
├── 📄 pages/           # プレゼンテーション層 (Pages)
├── 🧩 components/      # UI コンポーネント層
├── 🎣 hooks/           # ビジネスロジック層 (Custom Hooks)
├── 🛠️ utils/           # ユーティリティ層
├── 📊 data/            # データ層
└── 🏷️ types/           # 型定義層
```

### 🎯 **5つの核となる設計原則**

#### **1. 単一責任原則 (Single Responsibility Principle)**

- 各コンポーネント・フック・ユーティリティは**1つの明確な責任**のみを持つ
- 例: `TabNavigation.tsx` → タブUIのみ、`useMediaPlayer.ts` → メディア制御のみ

#### **2. 関心の分離 (Separation of Concerns)**

- UI表示・状態管理・データ処理・副作用を**明確に分離**
- コンポーネントは表示に集中、フックはロジックに集中

#### **3. 合成優先 (Composition over Inheritance)**

- 小さな部品を組み合わせて複雑なUIを構築
- 例: `DemoModal = ModalHeader + TabNavigation + MediaContent + ModalFooter`

#### **4. 依存関係逆転 (Dependency Inversion)**

- 上位層は下位層の**抽象（型・インターフェース）**に依存
- 具象実装への直接依存を避ける

#### **5. パフォーマンス第一 (Performance-First)**

- 初期表示速度とCore Web Vitalsを最優先
- Code Splitting、Lazy Loading、最適化された状態管理

---

## 4. ディレクトリ構造とファイル配置

### 📁 **詳細構造**

```
src/
├── contexts/                 # グローバル状態管理
│   └── ProjectContext.tsx    # プロジェクトデータの状態管理
├── pages/                    # ページコンポーネント
│   ├── Home.tsx             # トップページ
│   ├── About.tsx            # プロフィールページ
│   ├── Works.tsx            # 実績一覧ページ
│   ├── WorkDetail.tsx       # 実績詳細ページ
│   └── Contact.tsx          # コンタクトページ
├── components/              # 再利用可能UIコンポーネント
│   ├── Header.tsx           # ヘッダーナビゲーション
│   ├── Footer.tsx           # フッター情報
│   ├── LazyImage.tsx        # 遅延読み込み画像
│   ├── MediaPlayer.tsx      # メディア再生コンポーネント
│   ├── DemoModal.tsx        # プロジェクトデモモーダル
│   ├── TabNavigation.tsx    # 汎用タブナビゲーション
│   ├── ModalHeader.tsx      # モーダルヘッダー部品
│   ├── ModalFooter.tsx      # モーダルフッター部品
│   └── MediaContent.tsx     # メディアコンテンツ表示
├── hooks/                   # カスタムフック
│   ├── useMediaPlayer.ts    # メディア再生状態管理
│   └── useModal.ts          # モーダル・タブ状態管理
├── utils/                   # ユーティリティ関数
│   ├── projects.ts          # プロジェクトデータ操作
│   ├── analytics.ts         # Google Analytics設定
│   └── performance.ts       # パフォーマンス計測
├── data/                    # 静的データ
│   └── projects.json        # プロジェクト情報
├── types/                   # 型定義
│   └── project.ts           # Project型定義
└── assets/                  # 静的アセット
```

### 📝 **包括的コーディング規約**

### 🏷️ **ファイル・ディレクトリ命名規則**

| 種別                   | 命名規則                   | 例                            | 必須接尾辞       |
| ---------------------- | -------------------------- | ----------------------------- | ---------------- |
| **React Component**    | PascalCase.tsx             | `MediaPlayer.tsx`             | `.tsx`           |
| **Custom Hook**        | use + PascalCase.ts        | `useMediaPlayer.ts`           | `use*.ts`        |
| **Context Definition** | PascalCase + Definition.ts | `ProjectContextDefinition.ts` | `*Definition.ts` |
| **Context Provider**   | PascalCase + Context.tsx   | `ProjectContext.tsx`          | `*Context.tsx`   |
| **Type Definition**    | PascalCase.ts              | `Project.ts`                  | `.ts`            |
| **Utility Function**   | camelCase.ts               | `analytics.ts`                | `.ts`            |
| **Data File**          | camelCase.json             | `projects.json`               | `.json`          |
| **Asset Directory**    | kebab-case/                | `project-images/`             | `/`              |

### 💻 **変数・関数命名規則**

#### **JavaScript/TypeScript識別子**

| 識別子種別               | 命名規則        | 例                    | 説明                         |
| ------------------------ | --------------- | --------------------- | ---------------------------- |
| **変数**                 | camelCase       | `currentProject`      | 名詞、状態を表現             |
| **関数**                 | camelCase       | `handlePlayPause`     | 動詞で開始、アクションを表現 |
| **定数**                 | SCREAMING_SNAKE | `MAX_FILE_SIZE`       | 大文字、アンダースコア区切り |
| **イベントハンドラー**   | handle + Action | `handleSubmit`        | `handle`プレフィックス必須   |
| **プライベート変数**     | \_camelCase     | `_internalState`      | アンダースコアプレフィックス |
| **型・インターフェース** | PascalCase      | `ProjectContextState` | 大文字開始、型を明示         |
| **Enum値**               | PascalCase      | `MediaType.Video`     | 階層的命名                   |

#### **React固有命名規則**

| 要素種別            | 命名規則              | 例                      | 必須パターン           |
| ------------------- | --------------------- | ----------------------- | ---------------------- |
| **Component**       | PascalCase            | `MediaPlayer`           | 名詞、UI要素を表現     |
| **Props Interface** | ComponentProps        | `MediaPlayerProps`      | `{Component}Props`     |
| **State Variable**  | [is/has/should] + Adj | `isLoading`, `hasError` | 状態フラグは真偽値命名 |
| **Ref Variable**    | elementRef            | `videoRef`, `modalRef`  | `{element}Ref`         |
| **Custom Hook**     | use + Feature         | `useMediaPlayer`        | `use`で開始            |
| **Context**         | FeatureContext        | `ProjectContext`        | `{Feature}Context`     |

### 🎨 **CSS・スタイリング規約**

#### **Tailwind CSS使用方針**

```typescript
// ✅ 推奨: セマンティック・論理的グルーピング
className="
  // Layout
  flex items-center justify-between
  // Spacing
  px-6 py-3 gap-4
  // Typography
  text-lg font-medium
  // Colors & Visual
  bg-blue-500 text-white
  // Interactions
  hover:bg-blue-600 transition-colors
  // Responsive
  sm:px-8 md:text-xl
"

// ✅ 推奨: 条件付きスタイル - 明確な分離
className={`
  base-button-styles px-6 py-3 font-medium transition-colors
  ${isActive
    ? 'bg-blue-500 text-white border-blue-500'
    : 'bg-gray-100 text-gray-700 border-gray-300'
  }
  ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}
`}

// ❌ 避ける: 長すぎる単一行、論理的グルーピングなし
className="flex items-center justify-between px-6 py-3 gap-4 text-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors sm:px-8 md:text-xl"
```

#### **クラス順序規則（重要度順）**

1. **Layout**: `flex`, `grid`, `block`, `inline`
2. **Positioning**: `relative`, `absolute`, `top`, `left`
3. **Spacing**: `m-*`, `p-*`, `gap-*`, `space-*`
4. **Sizing**: `w-*`, `h-*`, `min-*`, `max-*`
5. **Typography**: `text-*`, `font-*`, `leading-*`
6. **Colors**: `bg-*`, `text-*`, `border-*`
7. **Effects**: `shadow-*`, `opacity-*`, `transform`
8. **Interactions**: `hover:*`, `focus:*`, `active:*`
9. **Responsive**: `sm:*`, `md:*`, `lg:*`, `xl:*`

### 🏗️ **コンポーネント構造規約**

#### **コンポーネントファイル構造**

```typescript
// 1. Import文（グループ化・順序固定）
// External libraries
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Internal - Types first
import type { Project, MediaType } from '../types/project';

// Internal - Hooks
import { useMediaPlayer } from '../hooks/useMediaPlayer';
import { useProjects } from '../hooks/useProjects';

// Internal - Components
import TabNavigation from './TabNavigation';
import MediaContent from './MediaContent';

// Internal - Utilities
import { formatTime, validateUrl } from '../utils/media';

// 2. Type definitions
interface MediaPlayerProps {
  project: Project;
  autoPlay?: boolean;
  onComplete?: () => void;
}

// 3. Constants（コンポーネント外）
const DEFAULT_VOLUME = 0.8;
const SUPPORTED_FORMATS = ['mp4', 'webm', 'mp3', 'wav'] as const;

// 4. Main component
export const MediaPlayer: React.FC<MediaPlayerProps> = ({
  project,
  autoPlay = false,
  onComplete
}) => {
  // 4.1 Hooks（順序固定）
  const navigate = useNavigate();
  const { isPlaying, currentTime, handlePlayPause } = useMediaPlayer();

  // 4.2 State（関連するものをグループ化）
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // 4.3 Computed values
  const formattedTime = formatTime(currentTime);
  const isVideoProject = project.demoType === 'video';

  // 4.4 Event handlers
  const handleVolumeChange = useCallback((newVolume: number) => {
    setVolume(Math.max(0, Math.min(1, newVolume)));
  }, []);

  // 4.5 Effects
  useEffect(() => {
    if (autoPlay) {
      handlePlayPause();
    }
  }, [autoPlay, handlePlayPause]);

  // 4.6 Early returns
  if (hasError) {
    return <ErrorFallback onRetry={() => setHasError(false)} />;
  }

  // 4.7 Main render
  return (
    <div className="media-player-container">
      {/* Component JSX */}
    </div>
  );
};

// 5. Default export
export default MediaPlayer;
```

### 📋 **TypeScript型定義規約**

#### **インターフェース設計原則**

```typescript
// ✅ 推奨: 明確で拡張可能な型定義
export interface Project {
  // Required fields - 必須フィールド（コメント付き）
  readonly id: number; // 一意識別子、変更不可
  title: string; // プロジェクト名
  description: string; // 詳細説明
  technologies: readonly string[]; // 使用技術（変更不可配列）

  // Optional fields - オプションフィールド
  videos?: readonly string[]; // 動画URL配列
  audios?: readonly string[]; // 音声URL配列
  images?: readonly string[]; // 画像URL配列
  githubUrl?: string; // GitHubリポジトリURL
  demoUrl?: string; // デモサイトURL

  // Discriminated union for demo type
  demoType?: 'external' | 'video' | 'audio' | 'interactive';

  // Metadata
  createdAt: Date; // 作成日時
  updatedAt: Date; // 更新日時
}

// ✅ 推奨: 型安全なユニオン型
export type MediaType = 'video' | 'audio' | 'image';
export type ProjectStatus = 'draft' | 'published' | 'archived';

// ✅ 推奨: 関数型定義
export type ProjectFilterFunction = (projects: Project[]) => Project[];
export type EventHandler<T = void> = (event: React.SyntheticEvent) => T;

// ❌ 避ける: any型、不明確な命名
interface BadProject {
  data: any; // 型が不明
  stuff: unknown[]; // 用途が不明
  callback: Function; // 型安全性なし
}
```

### 🎣 **Custom Hook設計規約**

#### **フック命名・構造規則**

```typescript
// ✅ 推奨: 明確な責任範囲と戻り値型
export interface UseMediaPlayerReturn {
  // State - 状態値（readonly for immutability）
  readonly isPlaying: boolean;
  readonly currentTime: number;
  readonly duration: number;
  readonly volume: number;
  readonly isLoading: boolean;
  readonly hasError: boolean;

  // Refs - DOM参照
  readonly mediaRef: React.RefObject<HTMLVideoElement | HTMLAudioElement>;

  // Actions - アクション関数
  readonly play: () => Promise<void>;
  readonly pause: () => void;
  readonly seek: (time: number) => void;
  readonly setVolume: (volume: number) => void;
  readonly reset: () => void;

  // Utilities - ユーティリティ関数
  readonly formatTime: (time: number) => string;
  readonly getProgress: () => number;
}

export const useMediaPlayer = (
  initialVolume: number = 0.8
): UseMediaPlayerReturn => {
  // フック内の実装...

  // 戻り値は型安全性とimmutabilityを保証
  return {
    // State
    isPlaying,
    currentTime,
    duration,
    volume,
    isLoading,
    hasError,

    // Refs
    mediaRef,

    // Actions
    play,
    pause,
    seek,
    setVolume: handleVolumeChange,
    reset: handleReset,

    // Utilities
    formatTime,
    getProgress,
  } as const; // as constで型を固定
};
```

### 🔍 **エラーハンドリング規約**

#### **エラー処理パターン**

```typescript
// ✅ 推奨: 段階的エラーハンドリング
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fallbackSrc,
  showRetryButton = false,
  onError
}) => {
  const [loadState, setLoadState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [retryCount, setRetryCount] = useState(0);

  const handleImageError = useCallback((error: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Image load failed: ${src}`, error);
    setLoadState('error');
    onError?.(error);
  }, [src, onError]);

  const handleRetry = useCallback(() => {
    if (retryCount < MAX_RETRY_COUNT) {
      setRetryCount(prev => prev + 1);
      setLoadState('loading');
    }
  }, [retryCount]);

  // エラー状態の段階的表示
  if (loadState === 'error') {
    return (
      <div className="error-container">
        {fallbackSrc ? (
          <img src={fallbackSrc} alt={alt} />
        ) : (
          <div className="error-placeholder">
            <ErrorIcon />
            <span>画像を読み込めませんでした</span>
            {showRetryButton && retryCount < MAX_RETRY_COUNT && (
              <button onClick={handleRetry}>再試行</button>
            )}
          </div>
        )}
      </div>
    );
  }

  // 正常状態
  return (
    <img
      src={src}
      alt={alt}
      onError={handleImageError}
      onLoad={() => setLoadState('loaded')}
    />
  );
};
```

### 📊 **パフォーマンス規約**

#### **最適化必須項目**

```typescript
// ✅ 推奨: メモ化とコールバック最適化
export const ProjectList: React.FC<ProjectListProps> = ({ projects, onProjectSelect }) => {
  // 高コストな計算はuseMemoで最適化
  const sortedProjects = useMemo(() => {
    return projects
      .filter(project => project.status === 'published')
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }, [projects]);

  // イベントハンドラーはuseCallbackで最適化
  const handleProjectClick = useCallback((projectId: number) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      onProjectSelect(project);
    }
  }, [projects, onProjectSelect]);

  return (
    <div className="project-list">
      {sortedProjects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => handleProjectClick(project.id)}
        />
      ))}
    </div>
  );
};

// ✅ 推奨: React.memoでの不要再レンダリング防止
export const ProjectCard = React.memo<ProjectCardProps>(({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';
```

### 🔒 **品質保証規約**

#### **コミット前必須チェックリスト**

```bash
# 自動チェック（必須実行）
npm run format    # ✅ Prettier - コード整形
npm run lint      # ✅ ESLint - 品質検査
npm run build     # ✅ TypeScript - 型検査・ビルド

# 手動チェック（確認必須）
✅ すべてのimport文が整理されている
✅ 未使用の変数・import がない
✅ console.log等のデバッグコードが残っていない
✅ TODO/FIXMEコメントが適切に管理されている
✅ 型定義にany型を使用していない
✅ エラーハンドリングが適切に実装されている
✅ パフォーマンスに影響する変更がある場合、最適化を検討
✅ アクセシビリティ要件を満たしている
```

#### **禁止事項（絶対回避）**

```typescript
// 🚫 禁止: any型の使用
const data: any = fetchData();

// ✅ 推奨: 適切な型定義
const data: Project[] = fetchData();

// 🚫 禁止: 長すぎる関数（50行超過）
const handleEverything = () => {
  // 100+ lines of mixed logic...
};

// ✅ 推奨: 単一責任・短い関数
const handleSubmit = () => {
  /* ... */
};
const validateForm = () => {
  /* ... */
};

// 🚫 禁止: 深いネスト（3層超過）
if (user) {
  if (user.profile) {
    if (user.profile.settings) {
      // 深すぎるネスト
    }
  }
}

// ✅ 推奨: Early return・Optional chaining
if (!user?.profile?.settings) return;
// メインロジック

// 🚫 禁止: 直接DOM操作
document.getElementById('modal').style.display = 'block';

// ✅ 推奨: React状態管理
const [isModalOpen, setIsModalOpen] = useState(false);
```

### 🎯 **アクセシビリティ規約**

#### **必須実装項目**

```typescript
// ✅ 推奨: セマンティックHTML + ARIA
export const MediaPlayer: React.FC<MediaPlayerProps> = ({ project }) => {
  return (
    <section
      aria-labelledby="media-title"
      role="region"
    >
      <h2 id="media-title">{project.title}</h2>

      <button
        aria-label={`${isPlaying ? '一時停止' : '再生'}: ${project.title}`}
        aria-pressed={isPlaying}
        onClick={handlePlayPause}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <input
        type="range"
        min="0"
        max="100"
        value={volume * 100}
        onChange={handleVolumeChange}
        aria-label="音量調整"
        aria-valuetext={`音量 ${Math.round(volume * 100)}%`}
      />
    </section>
  );
};
```

#### **キーボード操作サポート**

```typescript
// ✅ 推奨: キーボードナビゲーション
const handleKeyDown = useCallback(
  (event: React.KeyboardEvent) => {
    switch (event.key) {
      case ' ':
      case 'Enter':
        event.preventDefault();
        handlePlayPause();
        break;
      case 'ArrowRight':
        seek(currentTime + 10);
        break;
      case 'ArrowLeft':
        seek(currentTime - 10);
        break;
      case 'ArrowUp':
        setVolume(Math.min(1, volume + 0.1));
        break;
      case 'ArrowDown':
        setVolume(Math.max(0, volume - 0.1));
        break;
    }
  },
  [currentTime, volume, handlePlayPause, seek, setVolume]
);
```

---

````

### 🧪 **コメント・ドキュメント規約**

#### **JSDocコメント規則**

```typescript
/**
 * メディアプレイヤーの状態を管理するカスタムフック
 *
 * @description
 * 動画・音声ファイルの再生、一時停止、シーク、音量調整などの
 * メディア制御機能を提供します。エラーハンドリングと
 * パフォーマンス最適化が組み込まれています。
 *
 * @param initialVolume - 初期音量（0.0 - 1.0）
 * @returns メディア制御のための状態と関数群
 *
 * @example
 * ```typescript
 * const { isPlaying, play, pause, seek } = useMediaPlayer(0.8);
 *
 * // 再生開始
 * await play();
 *
 * // 30秒の位置にシーク
 * seek(30);
 * ```
 *
 * @see {@link UseMediaPlayerReturn} 戻り値の型定義
 * @since v1.0.0
 */
export const useMediaPlayer = (initialVolume: number = 0.8): UseMediaPlayerReturn => {
  // 実装...
};

/**
 * プロジェクト情報を表すインターフェース
 *
 * @interface Project
 * @description ポートフォリオサイトで表示するプロジェクトの
 * 全情報を含む型定義です。
 */
export interface Project {
  /** プロジェクトの一意識別子（変更不可） */
  readonly id: number;

  /** プロジェクト名（必須） */
  title: string;

  /** プロジェクトの詳細説明 */
  description: string;

  /** 使用技術の配列（変更不可） */
  technologies: readonly string[];
}
````

---

## 5. 開発ガイドライン

### 🎯 **コンポーネント設計**

#### **Props設計の原則**

```typescript
// ✅ 推奨: 明確で型安全なProps
interface TabNavigationProps {
  tabs: TabItem[]; // 配列は具体的な型で
  activeTab: string; // 状態は明示的に
  onTabChange: (key: string) => void; // コールバックは明確に
  className?: string; // オプションは?で明示
}

// ❌ 避ける: 曖昧な型
interface BadProps {
  data: any;
  onClick: Function;
  styles?: object;
}
```

#### **状態管理の階層**

```typescript
// 1. Global State (Context) - アプリ全体で必要
const ProjectContext = createContext<ProjectContextState>();

// 2. Component State (Custom Hook) - コンポーネント群で共有
const useMediaPlayer = () => {
  /* ... */
};

// 3. Local State (useState) - 単一コンポーネント内
const [isModalOpen, setIsModalOpen] = useState(false);
```

### 🎣 **Custom Hook設計**

#### **フックの責任分離**

```typescript
// ✅ 推奨: 単一の責任
export const useMediaPlayer = () => {
  // メディア再生のみに集中
  // 26の関連プロパティを管理
};

export const useModal = () => {
  // モーダル・タブ状態のみ
  // activeTab, setActiveTabのみ
};

// ❌ 避ける: 複数の責任
export const useEverything = () => {
  // メディア + モーダル + フォーム + ...
};
```

#### **フックの戻り値設計**

```typescript
// ✅ 推奨: 構造化された戻り値
export interface UseMediaPlayerReturn {
  // State
  isPlaying: boolean;
  currentTime: number;
  // Refs
  mediaRef: React.RefObject<HTMLVideoElement>;
  // Handlers
  handlePlayPause: () => void;
  // Utilities
  formatTime: (time: number) => string;
}
```

### 🧩 **Component Composition Pattern**

#### **合成設計の実例**

```typescript
// ✅ 推奨: 小さな部品の合成
const DemoModal = ({ project, isOpen, onClose }) => (
  <div>
    <ModalHeader title={project.title} onClose={onClose} />
    <TabNavigation tabs={tabs} activeTab={activeTab} />
    <MediaContent type="videos" items={project.videos} />
    <ModalFooter technologies={project.technologies} />
  </div>
);

// ❌ 避ける: 巨大な単一コンポーネント
const GiantModal = () => {
  // 200+ lines of mixed responsibilities
};
```

### 🎨 **スタイリング規則**

#### **Tailwind CSS使用方針**

```typescript
// ✅ 推奨: セマンティッククラス名
className="px-6 py-3 font-medium transition-colors"

// ✅ 推奨: 条件付きスタイル
className={`px-6 py-3 ${
  isActive
    ? 'border-b-2 border-blue-500 text-blue-600'
    : 'text-gray-600 hover:text-gray-900'
}`}

// ❌ 避ける: 過度に長いクラス名
className="px-6 py-3 font-medium transition-colors border-b-2 border-blue-500 text-blue-600 hover:text-gray-900 focus:outline-none focus:ring-2"
```

---

## 6. パフォーマンス戦略

### ⚡ **Code Splitting戦略**

```typescript
// App.tsx - ページレベルでの分割
const Home = lazy(() => import('./pages/Home'));
const Works = lazy(() => import('./pages/Works'));
const WorkDetail = lazy(() => import('./pages/WorkDetail'));

// 重要: レイアウトコンポーネントは直接インポート
import Header from './components/Header'; // 即座に表示
import Footer from './components/Footer'; // 即座に表示
```

### 🖼️ **画像最適化**

```typescript
// LazyImage.tsx - Intersection Observer使用
const observer = new IntersectionObserver(
  (entries) => {
    if (entry.isIntersecting) {
      setIsInView(true); // ビューポートに入ったら読み込み開始
    }
  },
  {
    threshold: 0.1,
    rootMargin: '50px', // 50px手前から読み込み開始
  }
);
```

### 📊 **状態管理最適化**

```typescript
// ProjectContext.tsx - データの効率的管理
const getFilteredProjects = useCallback((): Project[] => {
  if (!selectedTechnology) return projects;
  return projects.filter((project) =>
    project.technologies.includes(selectedTechnology)
  );
}, [projects, selectedTechnology]);
```

---

## 7. 型安全性とエラーハンドリング

### 🏷️ **型定義の指針**

```typescript
// ✅ 推奨: 厳密な型定義
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  videos?: string[]; // オプショナルは明示的に
  audios?: string[];
  demoType?: 'external' | 'video' | 'audio' | 'interactive'; // Union型
}

// ❌ 避ける: any型の使用
interface BadProject {
  data: any;
  media: any[];
}
```

### 🛡️ **エラーハンドリング**

```typescript
// LazyImage.tsx - 段階的フォールバック
const [hasError, setHasError] = useState(false);

// 1. 読み込み中: プレースホルダー表示
// 2. エラー時: エラー用SVGに切り替え
// 3. リトライボタン: showRetryButton props

const handleError = () => {
  setHasError(true);
  setIsLoaded(false);
};
```

---

## 8. 今後の拡張指針

### 🚀 **機能拡張ガイドライン**

#### **新しいページ追加時**

1. `src/pages/NewPage.tsx` 作成
2. 必要に応じてContext状態を拡張
3. `App.tsx`にルート追加
4. Lazy Loadingを適用

#### **新しいコンポーネント追加時**

1. 単一責任を確認
2. 再利用可能性を考慮
3. 適切なProps型定義
4. Tailwind CSSでスタイリング

#### **新しいフック追加時**

1. 明確な責任範囲を定義
2. 戻り値インターフェースを設計
3. テスタビリティを考慮
4. 他フックとの依存関係を最小化

### 🔧 **アーキテクチャ進化の方針**

```typescript
// Phase 1: 現在 - 基本的なContext + Custom Hooks
ProjectContext + useMediaPlayer + useModal;

// Phase 2: 状態管理ライブラリ導入検討
// 複雑性が増した場合のみZustand/Jotai検討
// 判断基準: Context が 3つ以上 または 状態が10個以上

// Phase 3: サーバーサイド機能
// 必要に応じてNext.js移行検討
// CMS連携、認証機能、SEO最適化が必要になった場合
```

### 🚨 **重要: すべての変更前に必須実行**

**以下の3コマンドは絶対に忘れずに実行すること:**

```bash
npm run format  # コード整形（必須）
npm run lint    # 品質検査（必須）
npm run build   # ビルド確認（必須）
```

**これらを実行せずにコミットすることは絶対に禁止です。**

### 📈 **パフォーマンス監視**

```typescript
// utils/performance.ts - 継続的な監視
export const measureWebVitals = () => {
  // Core Web Vitals測定
  // LCP, FID, CLS監視
  // 目標: LCP < 2.5s, FID < 100ms, CLS < 0.1
};
```

---

## 🔄 **開発フロー**

### **1. 機能開発**

```bash
# 1. 機能ブランチ作成
git checkout -b feature/new-component

# 2. 開発・テスト
npm run dev
npm run build  # ビルド確認

# 3. 品質チェック（必須・絶対実行）
npm run format  # ⚠️ 必須: コード整形
npm run lint    # ⚠️ 必須: リント検査
npm run build   # ⚠️ 必須: ビルド確認

# 4. コミット・プッシュ
git add .
git commit -m "feat: add new component with proper architecture"
git push origin feature/new-component
```

### **2. 品質担保（絶対遵守事項）**

#### **🚨 コミット前必須チェック - 例外なし実行**

```bash
# この3つのコマンドは絶対に実行すること
npm run format  # Prettierによるコード整形
npm run lint    # ESLintによる品質検査
npm run build   # TypeScript + Viteビルド確認

# エラーが1つでもあればコミット禁止
# 警告もすべて解決してからコミット
```

#### **✅ 必須チェック項目**

```bash
✅ npm run format 実行済み（コードフォーマット）
✅ npm run lint 実行済み（警告・エラーゼロ）
✅ npm run build 実行済み（ビルド成功）
✅ TypeScript型エラーなし
✅ アーキテクチャ原則遵守
✅ パフォーマンス影響確認
```

#### **🔴 コミット禁止条件**

- `npm run lint` でエラー・警告が出力される
- `npm run build` が失敗する
- TypeScript型エラーが存在する
- フォーマットが未実行（`npm run format`）

---

## 📝 **コミットメッセージ規約**

### 🏗️ **基本構造**

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 📋 **Type（種別）- 必須**

| Type         | 用途                             | 例                                           |
| :----------- | :------------------------------- | :------------------------------------------- |
| **feat**     | 新機能追加                       | `feat: メディアプレイヤーコンポーネント追加` |
| **fix**      | バグ修正                         | `fix: 動画再生の問題を解決`                  |
| **refactor** | リファクタリング（機能変更なし） | `refactor: useModalフックを抽出`             |
| **style**    | UI/スタイリング変更              | `style: モーダルデザインを更新`              |
| **perf**     | パフォーマンス改善               | `perf: 画像遅延読み込みを最適化`             |
| **docs**     | ドキュメント更新                 | `docs: アーキテクチャガイドを更新`           |
| **test**     | テスト追加・修正                 | `test: メディアプレイヤーのテスト追加`       |
| **chore**    | 雑務・設定変更                   | `chore: 依存関係を更新`                      |
| **ci**       | CI/CD設定変更                    | `ci: GitHub Actionsワークフローを更新`       |
| **revert**   | 以前のコミットの取り消し         | `revert: メディアプレイヤー変更を取り消し`   |

### 🎯 **Scope（範囲）- オプション**

| Scope            | 説明                     | 例                                     |
| :--------------- | :----------------------- | :------------------------------------- |
| **components**   | UIコンポーネント関連     | `feat(components): モーダルを追加`     |
| **hooks**        | カスタムフック関連       | `refactor(hooks): useModalを改良`      |
| **pages**        | ページコンポーネント関連 | `style(pages): ホームページを更新`     |
| **utils**        | ユーティリティ関数関連   | `fix(utils): アナリティクスのバグ修正` |
| **types**        | 型定義関連               | `feat(types): Project型を追加`         |
| **config**       | 設定ファイル関連         | `chore(config): ESLint設定を更新`      |
| **architecture** | アーキテクチャ・設計関連 | `docs(architecture): 設計書を更新`     |

### ✅ **Subject（件名）- 必須**

#### **書き方ルール**

- **現在形・命令法**で記述（`追加`, `修正`, `更新`）
- **日本語で具体的**に記述
- **末尾にピリオド不要**
- **50文字以内**に収める
- **何をしたか明確**に説明

#### **良い例・悪い例**

```bash
# ✅ 良い例
feat: 動画再生コントロールを追加
fix: モーダルのz-index問題を解決
refactor: メディアプレイヤーフックを抽出
style: レスポンシブナビゲーションを改善

# ❌ 悪い例
feat: add some features          # 英語、具体性不足
Fix: Modal Bug                  # 英語、大文字開始
update stuff                    # 英語、曖昧
feat: 新機能を追加しました        # 過去形、冗長
何かを修正                       # type不明
```

### 📄 **Body（本文）- オプション**

#### **記述指針**

- **なぜ**この変更が必要かを説明
- **何を**変更したかの詳細
- **どのように**実装したかの概要
- **影響範囲**や**注意点**があれば記載

#### **実例**

```bash
feat(components): 包括的メディアプレイヤーを追加

- 動画、音声、画像表示をサポート
- 再生/一時停止、シーク、音量調整機能を実装
- キーボードナビゲーション対応を追加
- エラーハンドリングとリトライ機能を含む

大きなメディアファイルのパフォーマンス問題を解決し、
アクセシビリティ要件への対応を改善。
```

### 🔗 **Footer（フッター）- オプション**

#### **用途**

- **Breaking Changes**の記述
- **Issue番号**の参照
- **Co-authored-by**の記述

#### **実例**

```bash
# Issue参照
Closes #123
Fixes #456
References #789

# Breaking Changes
BREAKING CHANGE: MediaPlayer APIを変更
- play()メソッドがPromise<void>を返すように変更
- volumeプロパティの範囲を0-100から0-1に変更

# 共同作成者
Co-authored-by: 田中太郎 <tanaka@example.com>
```

### 📝 **実践的なコミット例**

#### **機能追加**

```bash
feat(hooks): useMediaPlayerカスタムフックを追加

- メディア再生状態管理を実装
- 再生、一時停止、シーク、音量調整をサポート
- 未対応フォーマットのエラーハンドリングを追加
- スクリーンリーダー向けアクセシビリティ機能を含む

ユーザー体験とメディアコンポーネント間の
コード再利用性を向上。
```

#### **バグ修正**

```bash
fix(components): モーダルオーバーレイのz-index競合を解決

モーダルオーバーレイが不正なz-indexスタッキング
コンテキストによりナビゲーションヘッダーの背後に
表示される問題を修正。適切なレイヤー順序を保証する
ようにCSSを更新。

Fixes #234
```

#### **リファクタリング**

```bash
refactor(architecture): ProjectContextを抽出

- プロジェクト状態管理を専用コンテキストに移動
- UIコンポーネントからデータ取得ロジックを分離
- 適切なインターフェースで型安全性を向上
- テスト性と保守性を改善

エンドユーザーに対する機能的変更はなし。
```

#### **ドキュメント更新**

```bash
docs(architecture): コーディング規約を拡充

- 包括的TypeScriptガイドラインを追加
- コンポーネント合成パターンを含む
- パフォーマンス最適化ルールを定義
- コミットメッセージ規約を更新

今後の開発により明確な指針を提供。
```

### 🚨 **必須遵守事項**

#### **コミット前チェックリスト**

```bash
✅ Type が適切に選択されている
✅ Subject が50文字以内で具体的
✅ 現在形・命令法で記述
✅ 品質チェック3点セット実行済み
   - npm run format
   - npm run lint
   - npm run build
```

#### **禁止パターン**

```bash
# 🚫 禁止例
"update"                        # type不明、内容不明
"fix bug"                       # 曖昧、具体性なし
"WIP: モーダル作業中"            # 作業中コミット
"oops"                         # 説明不足
"feat: 新機能"                  # 具体性不足
"Fixed the thing"              # 英語、曖昧
"何かを修正"                    # type不明、曖昧
```

### 🎯 **チーム開発での活用**

#### **プルリクエスト連携**

```bash
# PRタイトルもコミット規約に準拠
feat(components): フル機能メディアプレイヤーを追加

# 複数コミットの場合は要約
feat(media): 包括的メディア処理機能を改善
- feat(components): MediaPlayerコンポーネントを追加
- feat(hooks): useMediaPlayerフックを追加
- style(components): レスポンシブデザインを改善
- docs(components): 使用例を追加
```

#### **自動化活用**

```bash
# コミットメッセージから自動生成される情報
- CHANGELOG.md の自動更新
- バージョンタグの自動生成
- リリースノートの自動作成
- Issue の自動クローズ
```

---

## ⚠️ **重要な留意点**

### **� 絶対遵守事項（例外なし）**

#### **コミット前必須三原則**

```bash
1. npm run format  # 必須実行
2. npm run lint    # 必須実行
3. npm run build   # 必須実行
```

**この3つを実行せずにコミットは絶対禁止**

### **�🚫 避けるべきアンチパターン**

1. **God Component**: 100行を超える巨大コンポーネント
2. **Prop Drilling**: 3層以上のプロパティ渡し
3. **Mixed Concerns**: UI + ビジネスロジック + データ処理が混在
4. **Any型濫用**: 型安全性の放棄
5. **直接DOM操作**: Reactパターンを無視したjQuery的操作
6. **品質チェック未実行**: format/lint/build を飛ばしたコミット

### **✅ 守るべき品質基準**

1. **品質チェック**: 毎回必ず format → lint → build 実行
2. **型安全性**: すべての変数・関数に適切な型定義
3. **パフォーマンス**: Core Web Vitals基準クリア
4. **再利用性**: コンポーネント・フックの汎用性
5. **保守性**: 明確な責任分離と依存関係
6. **一貫性**: 命名規則・アーキテクチャパターンの統一

---

_このアーキテクチャ設計書は、今後の開発でも一貫した品質と保守性を確保するためのガイドラインです。新しい機能追加・改修時は必ずこの指針に従って開発を進めてください。_

---

**最終更新: 2025年8月30日**  
**アーキテクト: GitHub Copilot & Gemini**
