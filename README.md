# 久米蒼輝 (KUME Soki) - ポートフォリオサイト

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC.svg)](https://tailwindcss.com/)

🌐 **Live Demo**: [https://soki0909.github.io/](https://soki0909.github.io/)  
📚 **Architecture Guide**: [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## 🎯 概要

情報系エンジニアの技術力と実績を効果的に伝えるポートフォリオサイト。Clean Architecture準拠の高品質な実装で、メディア再生機能やレスポンシブデザインを実現。

### 主要機能

- 🎥 統合メディアプレイヤー（動画・音声・画像対応）
- 📱 完全レスポンシブデザイン
- ⚡ Code Splitting + Lazy Loading
- 📊 Google Analytics 4統合
- ♿ WCAG 2.1 AA準拠のアクセシビリティ

---

## 🛠️ 技術スタック

| カテゴリ         | 技術              | バージョン     |
| :--------------- | :---------------- | :------------- |
| **言語**         | TypeScript        | 5.6.2          |
| **UIライブラリ** | React             | 19.1.1         |
| **ビルドツール** | Vite              | 7.1.2          |
| **スタイリング** | Tailwind CSS      | 4.0.0          |
| **ルーティング** | React Router      | 7.1.0          |
| **品質管理**     | ESLint + Prettier | 9.15.0 + 3.4.2 |

---

## 🚀 クイックスタート

```bash
# 1. クローン & セットアップ
git clone https://github.com/Soki0909/Soki0909.github.io.git
cd Soki0909.github.io
npm install

# 2. 開発サーバー起動
npm run dev
# → http://localhost:5173

# 3. 本番ビルド
npm run build
```

### ⚠️ **コミット前必須**

```bash
npm run format && npm run lint && npm run build
```

---

## 📊 アナリティクス設定

Google Analytics 4の設定方法：

```bash
# 環境変数設定
echo "VITE_GA_MEASUREMENT_ID=G-YOUR-MEASUREMENT-ID" > .env.production
```

または GitHub Secrets で `VITE_GA_MEASUREMENT_ID` を設定。

---

## 📚 ドキュメント

- **[ARCHITECTURE.md](./ARCHITECTURE.md)**: 詳細な設計書・コーディング規約
- **README.md**: プロジェクト概要（本ファイル）

---

## 🚀 デプロイ

mainブランチへのpushで GitHub Actions が自動デプロイを実行：

1. 依存関係インストール
2. 品質チェック（ESLint + Prettier）
3. ビルド & GitHub Pages デプロイ

---

## 👨‍💻 作成者

**久米蒼輝 (KUME Soki)**

- GitHub: [Soki0909](https://github.com/Soki0909)
- Portfolio: [https://soki0909.github.io/](https://soki0909.github.io/)

## 🏗️ アーキテクチャ

### Clean Architecture + React Patterns

5層のレイヤード・アーキテクチャを採用し、関心の分離と保守性を実現：

```
📂 src/
├── 🌐 contexts/        # グローバル状態管理層
│   ├── ProjectContextDefinition.ts    # Context型定義
│   └── ProjectContext.tsx             # Provider実装
├── � pages/           # プレゼンテーション層
│   ├── Home.tsx        # トップページ
│   ├── About.tsx       # プロフィール
│   ├── Works.tsx       # 実績一覧
│   ├── WorkDetail.tsx  # 実績詳細
│   └── Contact.tsx     # コンタクト
├── 🧩 components/      # UI コンポーネント層
│   ├── MediaPlayer.tsx    # メディア再生
│   ├── DemoModal.tsx      # デモ表示
│   ├── TabNavigation.tsx  # タブUI
│   ├── LazyImage.tsx      # 遅延画像読み込み
│   └── [その他11個のコンポーネント]
├── 🎣 hooks/           # ビジネスロジック層
│   ├── useMediaPlayer.ts  # メディア制御
│   ├── useProjects.ts     # プロジェクト管理
│   └── useModal.ts        # モーダル制御
├── �🛠️ utils/           # ユーティリティ層
│   ├── projects.ts     # データ操作
│   ├── analytics.ts    # GA4統合
│   └── performance.ts  # パフォーマンス監視
├── 📊 data/            # データ層
│   └── projects.json   # プロジェクト情報
└── 🏷️ types/           # 型定義層
    └── project.ts      # TypeScript型定義
```

### 核となる設計原則

1. **単一責任原則**: 各モジュールが1つの明確な責任を持つ
2. **関心の分離**: UI・ビジネスロジック・データ処理を分離
3. **合成優先**: 小さなコンポーネントの組み合わせ
4. **依存関係逆転**: 抽象に依存、具象実装を避ける
5. **パフォーマンス第一**: Core Web Vitals最適化

---

## 🛠️ 技術スタック

### フロントエンド

| カテゴリ         | 技術         | バージョン | 採用理由                         |
| :--------------- | :----------- | :--------- | :------------------------------- |
| **言語**         | TypeScript   | 5.6.2      | 型安全性によるバグ削減           |
| **UIライブラリ** | React        | 19.1.1     | 最新機能とパフォーマンス向上     |
| **ビルドツール** | Vite         | 7.1.2      | 高速HMRと最適化されたバンドル    |
| **スタイリング** | Tailwind CSS | 4.0.0      | ユーティリティファーストの効率性 |
| **ルーティング** | React Router | 7.1.0      | 宣言的なSPAナビゲーション        |

### 開発ツール

| ツール         | バージョン | 用途                     |
| :------------- | :--------- | :----------------------- |
| **ESLint**     | 9.15.0     | コード品質・規約チェック |
| **Prettier**   | 3.4.2      | コードフォーマット統一   |
| **TypeScript** | 5.6.2      | 静的型チェック           |

### インフラ・運用

| サービス               | 用途                   |
| :--------------------- | :--------------------- |
| **GitHub Pages**       | 静的サイトホスティング |
| **GitHub Actions**     | CI/CDパイプライン      |
| **Google Analytics 4** | アクセス解析・UX改善   |

---

## 📁 詳細ディレクトリ構造

```
Soki0909.github.io/
├── 📄 公開ファイル
│   ├── index.html                      # メインHTML
│   ├── package.json                    # 依存関係定義
│   ├── README.md                       # プロジェクト説明
│   └── GEMINI.md                       # アーキテクチャ設計書
├── ⚙️ 設定ファイル
│   ├── vite.config.ts                  # Vite設定
│   ├── tailwind.config.js              # Tailwind設定
│   ├── tsconfig.json                   # TypeScript設定
│   ├── eslint.config.js                # ESLint設定
│   └── .prettierrc                     # Prettier設定
├── 🚀 GitHub Actions
│   └── .github/workflows/deploy.yml    # 自動デプロイ
├── 📖 ドキュメント
│   ├── docs/IMAGE_GUIDE.md             # 画像ガイド
│   └── docs/MEDIA_GUIDE.md             # メディアガイド
└── 🎯 ソースコード
    └── src/                            # メインソースディレクトリ
        ├── contexts/                   # React Context
        ├── pages/                      # ページコンポーネント
        ├── components/                 # 再利用コンポーネント
        ├── hooks/                      # カスタムフック
        ├── utils/                      # ユーティリティ
        ├── data/                       # 静的データ
        ├── types/                      # 型定義
        └── assets/                     # 画像・メディア
```

---

## 🚀 開発環境のセットアップ

### 📋 前提条件

- **Node.js**: 20.x 以上
- **npm**: 10.x 以上
- **Git**: 2.x 以上

### 🛠️ クイックスタート

```bash
# 1. リポジトリのクローン
git clone https://github.com/Soki0909/Soki0909.github.io.git
cd Soki0909.github.io

# 2. 依存関係のインストール
npm install

# 3. 開発サーバーの起動
npm run dev

# 🌐 http://localhost:5173 でアクセス
```

### 📜 利用可能なスクリプト

| コマンド          | 用途                           | 実行例                  |
| :---------------- | :----------------------------- | :---------------------- |
| `npm run dev`     | 開発サーバー起動（HMR有効）    | `http://localhost:5173` |
| `npm run build`   | 本番ビルド実行                 | `dist/` フォルダに出力  |
| `npm run preview` | ビルド版のローカルプレビュー   | `http://localhost:4173` |
| `npm run format`  | **必須**: Prettierフォーマット | コミット前に実行        |
| `npm run lint`    | **必須**: ESLint品質チェック   | コミット前に実行        |

### ⚠️ **コミット前必須事項**

```bash
# この3つのコマンドは絶対に実行すること（GEMINI.md参照）
npm run format    # コード整形
npm run lint      # 品質検査
npm run build     # ビルド確認
```

---

## 🎨 特徴的な機能

### 🎥 統合メディアプレイヤー

- **対応形式**: MP4, WebM (動画) / MP3, WAV (音声)
- **インタラクティブ制御**: 再生・一時停止・シーク・音量調整
- **フルスクリーン対応**: ワンクリックでフルスクリーン表示
- **キーボード操作**: スペースキー再生、矢印キーでの操作
- **レスポンシブ**: デバイスサイズに応じた最適表示

```typescript
// 使用例: useMediaPlayerフック
const { isPlaying, mediaRef, handlePlayPause, formatTime } = useMediaPlayer();
```

### 📱 アダプティブUIデザイン

- **ブレークポイント**: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- **フレキシブルグリッド**: CSS Grid + Flexboxのハイブリッド
- **タッチ最適化**: モバイルデバイスでの快適な操作

### ⚡ パフォーマンス最適化

#### Code Splitting実装

```typescript
// 動的インポートによるチャンク分割
const Home = lazy(() => import('./pages/Home'));
const Works = lazy(() => import('./pages/Works'));
const WorkDetail = lazy(() => import('./pages/WorkDetail'));
```

#### 遅延読み込み

```typescript
// Intersection Observer APIを使用
const LazyImage = ({ src, alt }) => {
  const [isInView, setIsInView] = useState(false);
  // 50px手前から読み込み開始
};
```

#### バンドル最適化

- **ベンダー分割**: React, React-DOM, React-Routerを分離
- **Tree Shaking**: 未使用コードの自動削除
- **圧縮**: Terserによる本番最適化

---

## 🚀 デプロイメント

### 🤖 自動デプロイ（推奨）

**mainブランチ**へのpushで自動実行：

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

jobs:
  deploy:
    steps:
      - name: Install & Build
      - name: Quality Checks (ESLint, Prettier)
      - name: Deploy to GitHub Pages
```

**実行内容**:

1. 📦 依存関係インストール
2. 🔍 ESLint・Prettier品質チェック
3. 🏗️ 本番ビルド実行
4. 🚀 GitHub Pagesデプロイ

### 🛠️ 手動デプロイ

```bash
# 本番ビルド実行
npm run build

# ビルド結果確認
ls -la dist/

# GitHub Pagesに手動デプロイ
# (GitHub リポジトリ設定 → Pages → Source: dist/)
```

---

## 📊 アナリティクス設定

### Google Analytics 4 統合

#### 自動追跡データ

- **ページビュー**: SPA遷移の完全追跡
- **ユーザー行動**: スクロール深度、滞在時間
- **コンバージョン**: お問い合わせフォーム送信
- **外部リンク**: GitHub, デモサイトへのクリック

#### 設定方法

**環境変数設定（推奨）**:

```bash
# .env.production
VITE_GA_MEASUREMENT_ID=G-YOUR-MEASUREMENT-ID
```

**GitHub Secrets設定**:

```
Repository Settings → Secrets and variables → Actions
Name: VITE_GA_MEASUREMENT_ID
Value: G-YOUR-MEASUREMENT-ID
```

**実装例**:

```typescript
// src/utils/analytics.ts
export const initGA = () => {
  if (import.meta.env.PROD && GA_MEASUREMENT_ID) {
    gtag('config', GA_MEASUREMENT_ID);
  }
};
```

---

## � 品質保証・コーディング規約

### 📋 コーディング規約（詳細: [GEMINI.md](./GEMINI.md)）

- **命名規則**: PascalCase (Component), camelCase (変数), SCREAMING_SNAKE_CASE (定数)
- **ファイル構造**: Import文グループ化、JSDoc必須
- **型安全性**: `readonly`修飾子、`any`型禁止
- **アクセシビリティ**: ARIA属性、キーボード対応必須

### ✅ 品質チェック

```bash
# 必須チェック（コミット前）
npm run format    # ✅ Prettier整形
npm run lint      # ✅ ESLint検査
npm run build     # ✅ TypeScript型チェック
```

### 🚫 禁止事項

- `any`型の使用
- 50行を超える関数
- 3層を超えるネスト
- 品質チェック未実行でのコミット

---

## 🤝 貢献・開発ガイドライン

### 🔄 開発フロー

```bash
# 1. 機能ブランチ作成
git checkout -b feature/新機能名

# 2. 開発・テスト
npm run dev

# 3. 品質チェック（必須）
npm run format && npm run lint && npm run build

# 4. コミット・プッシュ
git add .
git commit -m "feat: 新機能の説明"
git push origin feature/新機能名

# 5. プルリクエスト作成
```

### 📝 コミットメッセージ規約

```
feat: 新機能追加
fix: バグ修正
docs: ドキュメント更新
refactor: リファクタリング
style: UI/スタイリング変更
perf: パフォーマンス改善
test: テスト追加・修正
```

---

## 📚 ドキュメント

| ファイル                     | 内容                                   |
| :--------------------------- | :------------------------------------- |
| **README.md**                | プロジェクト概要（本ファイル）         |
| **[GEMINI.md](./GEMINI.md)** | アーキテクチャ設計書・コーディング規約 |
| **docs/IMAGE_GUIDE.md**      | 画像最適化ガイド                       |
| **docs/MEDIA_GUIDE.md**      | メディアファイル管理ガイド             |

---

## 🔧 トラブルシューティング

### よくある問題

**Q: 開発サーバーが起動しない**

```bash
# Node.jsバージョン確認
node --version  # 20.x以上必要

# キャッシュクリア
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Q: ビルドエラーが発生する**

```bash
# TypeScript型エラー確認
npx tsc --noEmit

# ESLintエラー確認
npm run lint
```

**Q: デプロイが失敗する**

```bash
# GitHub Actions ログ確認
# Repository → Actions → 失敗したワークフロー確認
```

---

## 📄 ライセンス

**MIT License** - 詳細は [LICENSE](./LICENSE) ファイルを参照

---

## 👨‍💻 作成者

**久米蒼輝 (KUME Soki)**

- 🐙 **GitHub**: [Soki0909](https://github.com/Soki0909)
- 🌐 **Portfolio**: [https://soki0909.github.io/](https://soki0909.github.io/)
- 📧 **Email**: [お問い合わせフォーム](https://soki0909.github.io/contact)

---

## 🎯 今後の拡張予定

- [ ] **CMS統合**: HeadlessCMSによるコンテンツ管理
- [ ] **多言語対応**: React i18nによる国際化
- [ ] **PWA化**: オフライン対応・アプリライク体験
- [ ] **ダークモード**: ユーザー設定に応じたテーマ切り替え
- [ ] **3Dアニメーション**: Three.jsによるインタラクティブ要素

---

<div align="center">

**⭐ このプロジェクトが気に入った場合は、スターをお願いします！**

Made with ❤️ by **久米蒼輝** | Powered by **React** + **TypeScript** + **Vite**

</div>
