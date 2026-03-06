---
description: タイムラインに新しい活動・プロジェクトを追加する
---

# 新規活動追加

タイムラインに新しい項目を追加する手順。

## 0. 事前調査（重要）

追加する前に以下を調査する：

### プロジェクト情報の確認
- リポジトリの `README.md` を必ず読み、以下を把握する
  - 正式名称（イベント名・バージョン含む）
  - 開発期間・チーム構成
  - 技術スタック
  - 担当範囲
  - 受賞歴・実績

> [!CAUTION]
> イベント名・受賞名は省略・誤記しないこと。例: `技育博2026` ではなく `技育博2025 Vol.6`

### テンプレートの確認
`src/data/details/_template.json` を参照し、使用できるキーを確認する。
**テンプレートに存在しないキーは使用しない。**

## 1. カテゴリを確認

| カテゴリ   | 用途                        | 詳細ページ |
| ---------- | --------------------------- | ---------- |
| `project`  | 個人/チーム開発プロジェクト | 必要       |
| `activity` | 課外活動・インターン等      | 必要       |
| `writing`  | 執筆記事・論文              | 不要       |

## 2A. プロジェクト/活動の場合

### ステップ1: 詳細ページを作成

`src/data/details/{id}.json` を作成（`_template.json` から必要なキーのみ使用）:

**project の主要フィールド：**

```json
{
  "id": "{slug}",
  "category": "project",
  "title": "タイトル",
  "date": "YYYY-MM",
  "summary": "100字程度の概要",
  "tags": ["タグ1", "タグ2"],
  "content": {
    "overview": "詳細な説明",
    "developmentType": "team",
    "teamSize": "N名",
    "developmentPeriod": "X週間（具体的な期間）",
    "myRole": "担当業務の詳細",
    "highlights": ["🏆 受賞歴・ポイント"],
    "technologies": {
      "カテゴリ名": ["技術1", "技術2"]
    },
    "features": [
      { "title": "機能名", "description": "説明" }
    ],
    "challenges": ["課題"],
    "learned": ["学び"],
    "impact": "成果の詳細説明"
  },
  "links": {
    "github": "https://github.com/..."
  }
}
```

> [!NOTE]
> `technologies` のカテゴリキーは自由（android/firmware/backend/frontend/communication など）。
> 使わないキー（`architecture`, `devices`, `courses` など）は省略してよい。

### ステップ2: タイムラインに追加

`src/data/timeline.json` の `items` 配列の**先頭に近い位置**（date順）に追加:

```json
{
  "id": "{detailsのidと同じ}",
  "date": "YYYY-MM",
  "category": "project",
  "developmentType": "team",
  "title": "タイトル",
  "summary": "1-2文の概要",
  "tags": ["タグ1", "タグ2"],
  "hasDetail": true
}
```

> [!IMPORTANT]
> `timeline.json` の `summary` は `details/{id}.json` の `summary` と一致させる。

### ステップ3: 画像を配置（任意）

`public/assets/images/{id}/` にスクリーンショット等を配置

## 2B. 執筆記事の場合

`src/data/writings.json` の `items` 配列に追加:

```json
{
  "id": "writing-{slug}",
  "date": "YYYY-MM-DD",
  "title": "記事タイトル",
  "platform": "Zenn",
  "url": "https://...",
  "summary": "概要",
  "tags": ["タグ1"]
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

ブラウザで `http://localhost:5173` を開いて表示を確認：
- タイムラインに新エントリが表示されるか
- 詳細ページ (`/docs/{id}`) が正常表示されるか
- 文字化けや表示崩れがないか
