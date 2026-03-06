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
    ├── _template.json    # ← 使用可能な全キーの定義（必ず参照）
    ├── project-xxx.json
    ├── activity-xxx.json
    └── ...
```

## 詳細ページ追加の流れ

### 1. 事前調査

外部リポジトリや関連ページがある場合は、`README.md` を読んで正確な情報を取得：

- イベント・プログラムの**正式名称**を確認（例: `技育博2025 Vol.6`）
- 担当範囲・技術スタック・チーム構成
- 受賞歴の正確な名称

### 2. テンプレートを参照

`src/data/details/_template.json` を開き、使用するキーを確認。  
**テンプレートに定義されていないキーは使用しない。**

### 3. 詳細JSONを作成

`src/data/details/{id}.json` を作成。**不要なキーは省略してよい。**

#### プロジェクト（project）の主要キー

```json
{
  "id": "slug",
  "category": "project",
  "title": "タイトル",
  "date": "YYYY-MM",
  "summary": "100字程度の概要",
  "tags": ["タグ"],
  "content": {
    "overview": "詳細な概要",
    "developmentType": "team",
    "teamSize": "N名",
    "developmentPeriod": "X週間（具体的な期間）",
    "myRole": "担当業務の詳細",
    "highlights": ["🏆 受賞・実績・ポイント"],
    "technologies": {
      "カテゴリ名": ["技術1"]
    },
    "features": [{ "title": "機能名", "description": "説明" }],
    "challenges": ["課題"],
    "learned": ["学び"],
    "impact": "成果・影響の詳細"
  },
  "links": {
    "github": "https://github.com/..."
  }
}
```

#### `technologies` のカテゴリキーは自由

プロジェクトの性質に合わせて命名する：

| プロジェクト種別 | キー例                                            |
| ---------------- | ------------------------------------------------- |
| Webアプリ        | `frontend`, `backend`, `infrastructure`           |
| Androidアプリ    | `android`, `firmware`, `communication`            |
| IoTシステム      | `android` / `mobile`, `firmware`, `communication` |
| 活動             | `tools`, `languages`                              |

#### 使用できる `links` キー

`github`, `demo`, `youtube`, `slides`, `article`, `official`

### 4. `timeline.json` にインデックスを追加

`items` 配列の適切な位置（date 降順）に追加：

```json
{
  "id": "{detailsのidと同じ}",
  "date": "YYYY-MM",
  "category": "project",
  "developmentType": "team",
  "title": "タイトル",
  "summary": "詳細JSONのsummaryと同じ内容",
  "tags": ["タグ"],
  "hasDetail": true
}
```

> [!IMPORTANT]
> `timeline.json` の `id`, `summary`, `tags` は `details/{id}.json` と一致させること。

### 5. バリデーション

```bash
npm run build
```

TypeScript による型チェックを含むビルドが通れば OK。

---

## カテゴリ別フィールド

### project（プロジェクト）

必須: `developmentType`, `technologies`, `highlights`  
推奨: `myRole`, `challenges`, `learned`, `impact`, `links.github`  
任意: `architecture`, `devices`, `features`, `teamSize`, `developmentPeriod`

### activity（課外活動）

必須: `period`, `teamSize`（または `developmentPeriod`）  
推奨: `myRole`, `responsibilities`, `activities`

### writing（執筆）

`writings.json` に直接追加（details は不要）

```json
{
  "id": "writing-xxx",
  "date": "YYYY-MM-DD",
  "title": "記事タイトル",
  "platform": "Zenn",
  "url": "https://zenn.dev/xxx",
  "summary": "概要",
  "tags": ["数学"]
}
```

---

## 型定義

すべての型は `src/types/dataModels.ts` で定義済み：

- `HubTimelineItem` - タイムライン項目
- `WritingItem` - 執筆記事
- `DetailData` - 詳細ページ
- `DetailContent` - 詳細コンテンツ
- `DetailMedia` - メディア情報
- `DetailLinks` - リンク情報

---

## ギャラリーアイテムの追加

### 1. 動画ファイルを配置

```
public/assets/videos/manim/
└── {動画ファイル名}.mp4
```

### 2. `gallery.json` にアイテムを追加

```json
{
  "id": "unique-id",
  "category": "manim",
  "title": "作品タイトル",
  "comment": "ひと言コメント（1-2行程度）",
  "video": "/assets/videos/manim/{動画ファイル名}.mp4",
  "tags": ["タグ1"],
  "date": "2026-01"
}
```

---

## 画像・動画の配置

```
public/assets/
├── images/
│   └── {id}/           # 詳細ID名のフォルダ
│       └── screenshot.png
└── videos/
    ├── {id}/            # 詳細ページ用動画
    │   └── demo.mp4
    └── manim/           # Manimギャラリー用動画
        └── {動画名}.mp4
```

JSONでの参照は `/assets/...` で開始する絶対パス形式を使用。
