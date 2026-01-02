# 🚀 Portfolio Site - 久米蒼輝 (KUME Soki)

> **React 19 + TypeScript + Vite で構築したポートフォリオサイト**  
> Clean Architecture・型安全性・パフォーマンス最適化を重視した高品質なWebアプリケーション

**📱 Live Site**: [https://soki0909.github.io](https://soki0909.github.io)

---

**※ このポートフォリオサイトはAI（GitHub Copilot・Gemini）を活用して開発されています**

---

## 🎨 2026年1月 リニューアル完了

複雑な9ページ構成から、**Notionライクな2ページ構成**へシンプル化しました。

### 新しいサイト構造

| ページ            | URL         | 説明                                     |
| ----------------- | ----------- | ---------------------------------------- |
| **Hub Page**      | `/`         | タイムライン形式の経歴一覧・プロフィール |
| **Document Page** | `/docs/:id` | 個別プロジェクト・活動の詳細             |

### デザイン特徴

- 📐 **数学記号の背景装飾**: ∫, ∑, π, ∞ などが散りばめられた背景
- 📊 **タイムライン表示**: 時系列順にプロジェクト・活動を表示
- 🌊 **波形セクション区切り**: 減衰正弦波SVGによる装飾
- 🖼️ **リッチな詳細ページ**: 画像・動画・GitHubリンク対応

---

## 🛠️ 技術スタック

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white)](./src)
[![Vite](https://img.shields.io/badge/Vite-7.1.3-646CFF?logo=vite&logoColor=white)](./vite.config.ts)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.8.2-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)

[![Deploy](https://github.com/Soki0909/Soki0909.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Soki0909/Soki0909.github.io/actions/workflows/deploy.yml)
[![ESLint](https://img.shields.io/badge/ESLint-166_rules-4B32C3?logo=eslint&logoColor=white)](./eslint.config.js)
[![TypeScript Coverage](https://img.shields.io/badge/Type_Safety-100%25-blue)](./src)

---

## 🏗️ プロジェクト構造

```
src/
├── pages/               # Hub.tsx, Document.tsx（メインページ）
│   └── archive/         # 旧ページ（/_old でアクセス可）
├── components/          # TimelineView, WaveCard, SignalNode, WaveDivider
├── hooks/               # useTimeline, useWritings, useDetail
├── data/
│   ├── timeline.json    # タイムラインインデックス
│   ├── writings.json    # 執筆記事一覧
│   └── details/         # 各項目の詳細データ（画像・動画・リンク）
├── types/               # 型定義層（dataModels.ts）
└── utils/               # ユーティリティ・ヘルパー

public/assets/
├── icons/               # logo.png（眼鏡アイコン）
└── svg/                 # math-scatter.svg, damped-wave.svg
```

---

## 🚀 セットアップ

### 開発環境構築

```bash
# リポジトリクローン
git clone https://github.com/Soki0909/Soki0909.github.io.git
cd Soki0909.github.io

# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
```

### 開発コマンド

```bash
# コミット前必須チェック（順番厳守）
npm run format    # Prettier: コードフォーマット
npm run lint      # ESLint: 166ルール適用
npm run build     # TypeScript: 型チェック・ビルド

# 開発・ビルド
npm run dev       # 開発サーバー起動
npm run preview   # ビルド結果プレビュー
```

---

## 📊 パフォーマンス

| Core Web Vitals | 目標値  | 達成値 |
| --------------- | ------- | ------ |
| LCP (読み込み)  | < 2.5s  | ~1.8s  |
| FID (反応性)    | < 100ms | ~45ms  |
| CLS (安定性)    | < 0.1   | ~0.05  |

---

## 🚀 CI/CD

- **自動デプロイ**: GitHub Actions → GitHub Pages
- **品質チェック**: ESLint・TypeScript・セキュリティスキャン
- **パフォーマンステスト**: Lighthouse統合

---

## 📚 ドキュメント

| ファイル                                        | 目的                           |
| ----------------------------------------------- | ------------------------------ |
| `README.md`                                     | プロジェクト概要・セットアップ |
| `GEMINI.md`                                     | AI開発ガイドライン             |
| `ARCHITECTURE.md`                               | 詳細アーキテクチャ設計書       |
| `docs/Web_Design_Requirements_Specification.md` | リニューアル要件定義           |

---

## 👤 開発者情報

**久米蒼輝 (KUME Soki)**

- **GitHub**: [Soki0909](https://github.com/Soki0909)
- **Portfolio**: [https://soki0909.github.io](https://soki0909.github.io)
- **専門**: AI・機械学習・Web開発・音響信号処理・教育技術

---

## 📄 ライセンス

MIT License
