# ポートフォリオサイト

## 🚀 プロジェクト概要

情報系エンジニアとしての技術力、学習意欲、制作実績を効果的に伝えるためのポートフォリオサイトです。

**🔗 デプロイURL**: [https://soki0909.github.io/](https://soki0909.github.io/)

## 🛠️ 技術スタック

| カテゴリ       | 技術               | バージョン |
| :------------- | :----------------- | :--------- |
| 言語           | TypeScript         | ~5.8.3     |
| ビルドツール   | Vite               | ^7.1.2     |
| UIライブラリ   | React              | ^19.1.1    |
| スタイリング   | Tailwind CSS       | ^4.1.12    |
| ルーティング   | React Router       | ^7.8.2     |
| リンター       | ESLint             | ^9.33.0    |
| フォーマッター | Prettier           | ^3.6.2     |
| アナリティクス | Google Analytics 4 | -          |
| ホスティング   | GitHub Pages       | -          |
| CI/CD          | GitHub Actions     | -          |

## 📁 プロジェクト構造

```
src/
├── components/          # 共通コンポーネント
│   ├── Header.tsx      # ナビゲーションヘッダー
│   └── Footer.tsx      # フッター
├── pages/              # ページコンポーネント
│   ├── Home.tsx        # トップページ
│   ├── About.tsx       # プロフィールページ
│   ├── Works.tsx       # 実績一覧ページ
│   ├── WorkDetail.tsx  # 実績詳細ページ
│   └── Contact.tsx     # コンタクトページ
├── utils/              # ユーティリティ
│   └── analytics.ts    # Google Analytics設定
└── App.tsx             # メインアプリケーション
```

## 🚀 開発環境のセットアップ

### 前提条件

- Node.js 20以上
- npm

### インストールと起動

```bash
# リポジトリのクローン
git clone https://github.com/Soki0909/Soki0909.github.io.git
cd Soki0909.github.io

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### 利用可能なスクリプト

```bash
npm run dev          # 開発サーバー起動
npm run build        # 本番ビルド
npm run preview      # ビルド版のプレビュー
npm run lint         # ESLintチェック
npm run lint:fix     # ESLint自動修正
npm run format       # Prettierフォーマット
npm run format:check # Prettierチェック
```

## 🚀 デプロイ

### 自動デプロイ

mainブランチにpushすると、GitHub Actionsが自動的に以下を実行します：

1. 依存関係のインストール
2. ESLint・Prettierチェック
3. ビルド実行
4. GitHub Pagesにデプロイ

### 手動デプロイ

```bash
npm run build
# dist/ フォルダの内容をGitHub Pagesにデプロイ
```

## 📊 アナリティクス

Google Analytics 4を使用してアクセス解析を実装：

- **ページビュー追跡**: ページ遷移の自動追跡
- **イベント追跡**: フォーム送信、外部リンククリック
- **本番環境のみ有効**: 開発時は無効化

### アナリティクス設定方法

1. Google Analytics 4でプロパティを作成
2. 測定ID（G-XXXXXXXXXX）を取得
3. 以下のいずれかの方法で設定：

#### 方法A: 環境変数で設定（推奨）
```bash
# .env.production ファイルを作成
echo "VITE_GA_MEASUREMENT_ID=G-YOUR-MEASUREMENT-ID" > .env.production
```

#### 方法B: GitHubリポジトリのSecretsで設定
1. GitHub リポジトリ → Settings → Secrets and variables → Actions
2. `VITE_GA_MEASUREMENT_ID` に測定IDを設定

#### 方法C: 直接コードに設定
`src/utils/analytics.ts` の `GA_MEASUREMENT_ID` を直接変更

## 🎨 特徴

### レスポンシブデザイン

- モバイルファースト設計
- ハンバーガーメニュー
- 画面サイズに応じた柔軟なレイアウト

### パフォーマンス最適化

- コード分割（vendor、routerチャンク）
- 本番環境でのソースマップ無効化
- 軽量なバンドルサイズ

### 開発体験

- TypeScriptによる型安全性
- ESLint・Prettierによるコード品質保証
- Hot Module Replacement (HMR)
- GitHub Actionsによる自動化

## 📄 ライセンス

MIT License

## 👨‍💻 作成者

[Soki0909](https://github.com/Soki0909)
