# 🚀 Portfolio Site - 久米蒼輝 (KUME Soki)

> **最新技術スタックで構築された高性能ポートフォリオサイト**  
> React 19 + TypeScript + Vite による型安全で超高速なWebアプリケーション

### 📱 **サイトを見る**

**👆 こちらをクリック → [https://soki0909.github.io](https://soki0909.github.io)**

---

## 🛠️ **技術スタック**

<!-- 🚀 Technology Stack Badges -->

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?logo=typescript&logoColor=white)](./src)
[![Vite](https://img.shields.io/badge/Vite-7.1.3-646CFF?logo=vite&logoColor=white)](./vite.config.ts)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.1.0-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)

<!-- 📊 Quality & Performance Badges -->

[![Deploy](https://github.com/Soki0909/Soki0909.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Soki0909/Soki0909.github.io/actions/workflows/deploy.yml)
[![ESLint](https://img.shields.io/badge/ESLint-9.15.0-4B32C3?logo=eslint&logoColor=white)](./eslint.config.js)
[![Prettier](https://img.shields.io/badge/Prettier-3.4.2-F7B93E?logo=prettier&logoColor=black)](https://prettier.io/)
[![Core Web Vitals](https://img.shields.io/badge/Performance-Optimized-brightgreen)](https://soki0909.github.io)
[![TypeScript Coverage](https://img.shields.io/badge/Type_Safety-100%25-blue)](./src)

<!-- 🛠️ Development & DevOps Badges -->

[![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub_Actions-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub_Pages-222222?logo=github&logoColor=white)](https://pages.github.com/)
[![PostCSS](https://img.shields.io/badge/PostCSS-8.4.39-DD3A0A?logo=postcss&logoColor=white)](https://postcss.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-9+-CB3837?logo=npm&logoColor=white)](https://npmjs.com/)

<!-- 🏗️ Architecture & Patterns Badges -->

[![Clean Architecture](https://img.shields.io/badge/Architecture-Clean-blue)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
[![SPA](https://img.shields.io/badge/Type-Single_Page_App-orange)](https://en.wikipedia.org/wiki/Single-page_application)
[![Mobile First](https://img.shields.io/badge/Design-Mobile_First-green)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-green)](https://www.w3.org/WAI/WCAG21/quickref/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌟 主要機能・特徴

### 🎯 **技術的ハイライト**

- **⚡ 超高速表示**: Core Web Vitals 全項目グリーン（LCP<2.5s, FID<100ms, CLS<0.1）
- **🛡️ 完全型安全**: TypeScript 100%型定義・any型完全排除
- **🏗️ Clean Architecture**: レイヤー分離・依存関係最適化
- **📱 完全レスポンシブ**: モバイルファースト・全デバイス最適化
- **♿ アクセシビリティ**: WCAG 2.1 AA準拠・キーボードナビゲーション対応

### 🔧 **実装機能**

- **🎬 統合メディアプレイヤー**: プロジェクトデモ動画・音声再生
- **🖼️ 最適化画像表示**: 遅延読み込み・WebP対応・60%高速化
- **🔍 SEO完全対応**: 構造化データ・リッチスニペット・動的メタタグ
- **📊 Analytics統合**: Google Analytics 4・Core Web Vitals追跡
- **⚡ パフォーマンス最適化**: Code Splitting・Bundle最適化・CDN活用

---

## 🛠️ 技術スタック

| カテゴリ         | 技術              | バージョン     | 採用理由                            |
| ---------------- | ----------------- | -------------- | ----------------------------------- |
| **言語**         | TypeScript        | 5.6.2          | 型安全性・開発効率向上              |
| **UIライブラリ** | React             | 19.1.1         | 最新並行機能・Server Components対応 |
| **ビルドツール** | Vite              | 7.1.3          | 超高速HMR・最適化バンドル           |
| **スタイリング** | Tailwind CSS      | 4.0.0          | ユーティリティファースト            |
| **ルーティング** | React Router      | 7.1.0          | SPA・Code splitting                 |
| **品質保証**     | ESLint + Prettier | 9.15.0 + 3.4.2 | 166ルール・統一品質                 |
| **CI/CD**        | GitHub Actions    | -              | 自動テスト・デプロイ                |
| **ホスティング** | GitHub Pages      | -              | 高速CDN・無料SSL                    |

---

## 🏗️ プロジェクト構造

### 📁 **Clean Architecture実装**

```
src/
├── 📄 pages/           # ページコンポーネント（SPA）
│   ├── Home.tsx            # ランディングページ
│   ├── About.tsx           # プロフィール・自己紹介
│   ├── Experience.tsx      # 職歴・経験
│   ├── Skills.tsx          # 技術スキル・認定
│   ├── Vision.tsx          # ビジョン・目標
│   ├── Works.tsx           # 作品一覧
│   ├── WorkDetail.tsx      # 作品詳細・デモ
│   └── Contact.tsx         # お問い合わせ
├── 🧩 components/      # 再利用可能UIコンポーネント
│   ├── MediaPlayer.tsx     # 統合メディア再生
│   ├── DemoModal.tsx       # プロジェクトデモ表示
│   ├── LazyImage.tsx       # 最適化画像表示
│   ├── SEO.tsx             # SEO・構造化データ
│   └── [9個の高品質コンポーネント]
├── 🎣 hooks/           # ビジネスロジック・状態管理
│   ├── useMediaPlayer.ts   # メディア制御
│   ├── useProjects.ts      # プロジェクト管理
│   └── [カスタムHooks]
├── 📊 data/            # データ層
│   ├── aboutData.ts        # プロフィール・経歴
│   ├── projectsData.ts     # プロジェクト・実績
│   ├── skillsData.ts       # 技術スキル・習熟度
│   ├── experienceData.ts   # 職歴・実務経験
│   ├── visionData.ts       # 理念・将来目標
│   ├── contactData.ts      # 連絡先・SNS
│   ├── index.ts            # 統一エクスポート
│   └── types.ts            # TypeScript型定義
└── 🛠️ utils/           # ユーティリティ・ヘルパー
    ├── analytics.ts        # GA4統合・追跡
    ├── performance.ts      # パフォーマンス監視
    └── [最適化ユーティリティ]
```

---

## 🚀 クイックスタート

### 📋 **前提条件**

- Node.js 18+
- npm 9+
- Git

### ⚡ **セットアップ**

```bash
# リポジトリクローン
git clone https://github.com/Soki0909/Soki0909.github.io.git
cd Soki0909.github.io

# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
```

### 🔧 **開発コマンド**

```bash
# 必須品質チェック（コミット前必須）
npm run format    # Prettier: コード整形
npm run lint      # ESLint: 166ルール適用
npm run build     # TypeScript: 型チェック

# 開発・ビルド
npm run dev       # 開発サーバー起動
npm run build     # 本番ビルド
npm run preview   # ビルド結果プレビュー
```

---

## 🛡️ 品質保証

### ✅ **厳格な品質基準**

**コミット前必須チェック**:

```bash
✅ ESLint: 166個のルール完全準拠
✅ TypeScript: 型エラーゼロ
✅ Prettier: 統一コードフォーマット
✅ Build: エラーなし完了
```

### 📏 **コーディング規約**

```typescript
// ✅ 推奨パターン
const MediaPlayer: React.FC<Props> = ({ project }) => {}; // PascalCase
const useMediaPlayer = () => {}; // camelCase Hook
const MAX_RETRY_COUNT = 3; // 定数

// ❌ 禁止パターン
const any_variable: any = {}; // any型・命名規約違反
function longFunction() {
  /* 50行超過 */
} // 長すぎる関数
```

### 🔄 **Git Workflow**

```bash
# Conventional Commits必須
git commit -m "feat: 新機能追加"
git commit -m "fix: バグ修正"
git commit -m "refactor: リファクタリング"
```

---

## 📊 パフォーマンス・SEO

### ⚡ **Core Web Vitals達成**

| 指標 | 目標   | 達成値 | 状況 |
| ---- | ------ | ------ | ---- |
| LCP  | <2.5s  | ~1.8s  | ✅   |
| FID  | <100ms | ~45ms  | ✅   |
| CLS  | <0.1   | ~0.05  | ✅   |

### 🔍 **SEO最適化**

- ✅ 構造化データ（Schema.org）
- ✅ 動的メタタグ・OGP
- ✅ サイトマップ自動生成
- ✅ リッチスニペット対応

---

## 🚀 デプロイ・CI/CD

### 📦 **自動デプロイメント**

```yaml
# GitHub Actions
✅ コード品質チェック（ESLint・TypeScript）
✅ セキュリティスキャン（npm audit）
✅ パフォーマンステスト（Lighthouse）
✅ ビルド最適化・CDN配信
✅ GitHub Pages自動デプロイ
```

**Live URL**: [https://soki0909.github.io](https://soki0909.github.io)

---

## 📈 Analytics・監視

### 📊 **Google Analytics 4統合**

- **Core Web Vitals追跡**: リアルタイムパフォーマンス監視
- **ユーザー行動分析**: ページビュー・エンゲージメント
- **コンバージョン追跡**: お問い合わせ・プロジェクト閲覧

### 🔍 **監視項目**

- パフォーマンス指標（LCP・FID・CLS）
- バンドルサイズ監視（<500KB制限）
- エラー追跡・ログ分析
- セキュリティ・脆弱性スキャン

---

## 👤 開発者情報

**久米蒼輝 (KUME Soki)**

- **GitHub**: [Soki0909](https://github.com/Soki0909)
- **Portfolio**: [https://soki0909.github.io](https://soki0909.github.io)
- **専門**: React・TypeScript・フロントエンド開発

---

## 📚 ドキュメント

| ファイル          | 目的                       | 対象読者               |
| ----------------- | -------------------------- | ---------------------- |
| `README.md`       | プロジェクト概要・技術紹介 | 外部開発者・採用担当者 |
| `ARCHITECTURE.md` | 詳細アーキテクチャ設計書   | AI・継続開発担当者     |
| `docs/`           | 各種ガイドライン           | 開発・保守担当者       |

---

## 📄 ライセンス

MIT License - 自由に利用・改変・配布可能

---

**🎯 このポートフォリオサイトは、最新のWeb技術とベストプラクティスを駆使し、採用担当者に技術力・品質意識・継続的改善姿勢を効果的にアピールする目的で設計・実装されています。**
