# ポートフォリオサイト開発プロジェクト - アーキテクチャ設計書

## 📋 目次
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

### 📝 **ファイル命名規則**

| ファイル種別 | 命名規則 | 例 |
|-------------|---------|-----|
| React Component | PascalCase.tsx | `MediaPlayer.tsx` |
| Custom Hook | camelCase.ts | `useMediaPlayer.ts` |
| Utility Function | camelCase.ts | `analytics.ts` |
| Type Definition | PascalCase.ts | `Project.ts` |
| Context | PascalCaseContext.tsx | `ProjectContext.tsx` |

---

## 5. 開発ガイドライン

### 🎯 **コンポーネント設計**

#### **Props設計の原則**
```typescript
// ✅ 推奨: 明確で型安全なProps
interface TabNavigationProps {
  tabs: TabItem[];              // 配列は具体的な型で
  activeTab: string;            // 状態は明示的に
  onTabChange: (key: string) => void;  // コールバックは明確に
  className?: string;           // オプションは?で明示
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
const useMediaPlayer = () => { /* ... */ };

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
import Header from './components/Header';  // 即座に表示
import Footer from './components/Footer';  // 即座に表示
```

### 🖼️ **画像最適化**

```typescript
// LazyImage.tsx - Intersection Observer使用
const observer = new IntersectionObserver((entries) => {
  if (entry.isIntersecting) {
    setIsInView(true);  // ビューポートに入ったら読み込み開始
  }
}, {
  threshold: 0.1,
  rootMargin: '50px',  // 50px手前から読み込み開始
});
```

### 📊 **状態管理最適化**

```typescript
// ProjectContext.tsx - データの効率的管理
const getFilteredProjects = useCallback((): Project[] => {
  if (!selectedTechnology) return projects;
  return projects.filter(project =>
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
  videos?: string[];     // オプショナルは明示的に
  audios?: string[];
  demoType?: 'external' | 'video' | 'audio' | 'interactive';  // Union型
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
ProjectContext + useMediaPlayer + useModal

// Phase 2: 状態管理ライブラリ導入検討
// 複雑性が増した場合のみZustand/Jotai検討

// Phase 3: サーバーサイド機能
// 必要に応じてNext.js移行検討
```

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

# 3. 品質チェック
npm run lint
npm run format

# 4. コミット・プッシュ
git add .
git commit -m "feat: add new component with proper architecture"
git push origin feature/new-component
```

### **2. 品質担保**
```bash
# 必須チェック項目
✅ TypeScript型エラーなし
✅ ESLint警告なし  
✅ ビルド成功
✅ アーキテクチャ原則遵守
✅ パフォーマンス影響確認
```

---

## 📝 **コミットメッセージ規約**

```
feat: 新機能追加
fix: バグ修正
refactor: リファクタリング
style: UI/スタイリング変更
perf: パフォーマンス改善
docs: ドキュメント更新
test: テスト追加・修正
```

---

## ⚠️ **重要な留意点**

### **🚫 避けるべきアンチパターン**

1. **God Component**: 100行を超える巨大コンポーネント
2. **Prop Drilling**: 3層以上のプロパティ渡し
3. **Mixed Concerns**: UI + ビジネスロジック + データ処理が混在
4. **Any型濫用**: 型安全性の放棄
5. **直接DOM操作**: Reactパターンを無視したjQuery的操作

### **✅ 守るべき品質基準**

1. **型安全性**: すべての変数・関数に適切な型定義
2. **パフォーマンス**: Core Web Vitals基準クリア
3. **再利用性**: コンポーネント・フックの汎用性
4. **保守性**: 明確な責任分離と依存関係
5. **一貫性**: 命名規則・アーキテクチャパターンの統一

---

*このアーキテクチャ設計書は、今後の開発でも一貫した品質と保守性を確保するためのガイドラインです。新しい機能追加・改修時は必ずこの指針に従って開発を進めてください。*

---

**最終更新: 2025年8月30日**  
**アーキテクト: GitHub Copilot & Gemini**
