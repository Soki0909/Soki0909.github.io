---
name: data-management
description: JSON データファイルの管理と詳細データ作成ガイド
---

# データ管理スキル

このプロジェクトのデータ管理規約。すべてのデータは `src/data/` 配下で管理。

## データ構造

```
src/data/
├── timeline.json     # タイムラインインデックス（Hub Page用）
├── writings.json     # 執筆記事一覧
├── profile.json      # プロフィール情報
├── skills.json       # スキル情報
├── seo.json          # SEO メタデータ
├── projects.json     # プロジェクト一覧（旧形式）
└── details/          # 詳細ページ用JSONファイル
    ├── project-xxx.json
    ├── activity-xxx.json
    └── ...
```

## タイムライン項目の追加

### 1. `timeline.json` にインデックスを追加

```json
{
  "id": "project-new-app",
  "date": "2026-01",
  "category": "project",
  "developmentType": "individual",
  "title": "新しいアプリ",
  "summary": "サマリー説明",
  "tags": ["React", "TypeScript"],
  "hasDetail": true
}
```

### 2. 詳細ページを作成 (`details/project-new-app.json`)

```json
{
  "id": "project-new-app",
  "category": "project",
  "title": "新しいアプリ",
  "date": "2026-01",
  "summary": "サマリー説明",
  "tags": ["React", "TypeScript"],
  "content": {
    "overview": "詳細な説明...",
    "developmentType": "individual",
    "developmentPeriod": "2026年1月",
    "highlights": ["ポイント1", "ポイント2"],
    "technologies": {
      "フロントエンド": ["React", "TypeScript"],
      "その他": ["Vite"]
    },
    "challenges": ["課題1"],
    "learned": ["学び1"]
  },
  "media": {
    "images": ["/assets/images/project-new-app/screenshot.png"]
  },
  "links": {
    "github": "https://github.com/Soki0909/xxx",
    "demo": "https://xxx.netlify.app"
  }
}
```

## カテゴリ別フィールド

### project（プロジェクト）

必須: `developmentType`, `technologies`, `highlights`
推奨: `challenges`, `learned`, `links.github`

### activity（課外活動）

必須: `role`, `period`, `teamSize`
推奨: `achievements`, `responsibilities`

### writing（執筆）

`writings.json` に直接追加（detailsは不要）

```json
{
  "id": "writing-xxx",
  "date": "2026-01-15",
  "title": "記事タイトル",
  "platform": "Zenn",
  "url": "https://zenn.dev/xxx",
  "summary": "概要",
  "tags": ["数学", "物理"]
}
```

## 型定義

すべての型は `src/types/dataModels.ts` で定義済み：

- `HubTimelineItem` - タイムライン項目
- `WritingItem` - 執筆記事
- `DetailData` - 詳細ページ
- `DetailContent` - 詳細コンテンツ
- `DetailMedia` - メディア情報
- `DetailLinks` - リンク情報

## バリデーション

データ追加後、必ずビルドで型チェック：

```bash
npm run build
```

## 画像・動画の配置

```
public/assets/
├── images/
│   └── {id}/           # 詳細ID名のフォルダ
│       ├── main.png
│       └── screenshot.png
└── videos/
    └── {id}/
        └── demo.mp4
```

JSONでの参照は `/assets/...` で開始する絶対パス形式を使用。
