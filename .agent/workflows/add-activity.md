---
description: タイムラインに新しい活動・プロジェクトを追加する
---

# 新規活動追加

タイムラインに新しい項目を追加する手順。

## 1. カテゴリを確認

| カテゴリ   | 用途                        | 詳細ページ |
| ---------- | --------------------------- | ---------- |
| `project`  | 個人/チーム開発プロジェクト | 必要       |
| `activity` | 課外活動・インターン等      | 必要       |
| `writing`  | 執筆記事・論文              | 不要       |

## 2A. プロジェクト/活動の場合

### ステップ1: タイムラインに追加

`src/data/timeline.json` の `items` 配列に追加:

```json
{
  "id": "{category}-{slug}",
  "date": "YYYY-MM",
  "category": "project" または "activity",
  "developmentType": "individual" または "team",
  "title": "タイトル",
  "summary": "1-2文の概要",
  "tags": ["タグ1", "タグ2"],
  "hasDetail": true
}
```

### ステップ2: 詳細ページを作成

`src/data/details/{id}.json` を作成:

```json
{
  "id": "{同じID}",
  "category": "project",
  "title": "タイトル",
  "date": "YYYY-MM",
  "summary": "概要",
  "tags": ["タグ1", "タグ2"],
  "content": {
    "overview": "詳細な説明",
    "developmentType": "individual",
    "developmentPeriod": "開発期間",
    "highlights": ["ポイント1", "ポイント2"],
    "technologies": {
      "フロントエンド": ["React", "TypeScript"]
    },
    "challenges": ["課題1"],
    "learned": ["学び1"]
  },
  "media": {
    "images": ["/assets/images/{id}/main.png"]
  },
  "links": {
    "github": "https://github.com/..."
  }
}
```

### ステップ3: 画像を配置（任意）

`public/assets/images/{id}/` にスクリーンショット等を配置

## 2B. 執筆記事の場合

`src/data/writings.json` の `items` 配列に追加:

```json
{
  "id": "writing-{slug}",
  "date": "YYYY-MM-DD",
  "title": "記事タイトル",
  "platform": "Zenn" または "Mathlog" 等,
  "url": "https://...",
  "summary": "概要",
  "tags": ["タグ1", "タグ2"]
}
```

## 3. 動作確認

// turbo

```bash
cd c:\Users\kumes\Documents\Soki0909.github.io
npm run build
```

ビルドが通れば型チェックOK。

// turbo

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いて表示を確認。
