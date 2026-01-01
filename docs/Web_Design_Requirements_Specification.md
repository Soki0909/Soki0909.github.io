# Webデザイン要件定義書：Project "Math & Audio Fusion" (Final Integrated Ver.)

## 1. プロジェクト概要

- **プロジェクト名**: Soki0909.github.io Renewal (Timeline Architecture)
- **主目的**: **複雑すぎるページを簡略化し、見やすくする**
- **コンセプト**: 既存の多層的なポートフォリオサイトを、**Notionライクな「単一のドキュメントハブ」**へと構造改革する。情報の複雑さを排除し、閲覧者が直感的に**時系列（Chronological）**に沿って経歴と技術力を理解できる状態を目指す。
- **技術スタック（確定）**:
  - **Core**: React 19, TypeScript 5.8, Vite 7
  - **Styling**: Tailwind CSS 4
  - **Architecture**: Clean Architecture (Strict Unidirectional Data Flow)

---

## 2. デザインコンセプト

**コンセプト定義: 「Logarithmic Signal Flow（対数的な信号の流れ）」**

サイト全体を「一本の長い信号ケーブル」、あるいは「数式の証明プロセス」に見立てる。情報は上から下へ、過去から現在へと整然と流れる。
ベースは**Notionのようなドキュメントスタイル（白と黒の静寂）**でありながら、UIの随所に「数学記号」や「波形処理」のメタファーが機能的に配置される。

**3つのコア・ルール:**

1. **Chronological (時系列絶対主義)**:
   全ての活動（Projects, Personal, Writing）を等価なイベントとして、一本のタイムライン上にマッピングする。ページ遷移を極力排除する。

2. **Semantic Decorators (意味ある装飾)**:
   装飾を排除するが、必要な線は「波形」に、アイコンは「幾何学図形」に、区切りは「演算子」に置き換える。**ただし、読みやすさを最優先する。**

3. **Defensive & Clean (堅牢と清潔)**:
   データ欠損時も崩れない防御的UI設計と、余白（Whitespace）を最大限に活かした知的なレイアウト。

---

## 3. サイト構造（Site Architecture）

既存の9ページを、**2つのテンプレート** に集約する。

> **データ保全**: 既存ページの内容は `docs/archive/` にアーカイブとして保存する。

### A. Hub Page (`/`) - The Master Timeline

サイトのトップページかつメインコンテンツ。全情報の「目次兼ダッシュボード」。

- **役割**: ユーザーはここをスクロールするだけで、最新の活動から過去の経歴まで全てを把握できる。
- **構成**:
  1. **Input Area (Header)**: プロフィールとパラメータ定義。
  2. **Process Stream (Main)**: 時系列順のプロジェクトタイムライン。
  3. **Output Area (Footer)**: コンタクト用ターミナル。

### B. Document Page (`/docs/:id`) - Detailed Analysis

個別のプロジェクト詳細や記事を表示するページ。

- **役割**: `README.md` や技術ブログのように、特定トピックを深掘りする。
- **レンダリング**: Markdownまたはコンポーネントベースで実装（MDXは必須ではない）。

---

## 4. ビジュアル・ランゲージ (Design Systems)

Notionのシンプルさに、数学・音響のスパイスを加える。**読みやすさを最優先**。

### A. タイポグラフィと記号

- **フォント**:
  - 本文: `Noto Sans JP`, `Inter` (可読性重視)
  - コード・座標・メタデータ: `JetBrains Mono`

- **Math Scatter (数学的演出) - シンプル版**:
  - セクション番号の代わりにインデックス表記（`Section[0]`）を検討。
  - 重要キーワードは**太字・フォントサイズ強調**を基本とする（KaTeXは読みにくくなる場合使用しない）。

### B. 線と境界 (Signal Lines)

- **Timeline Axis (時間軸)**:
  - 画面左側を貫く垂直線。細い点線、または極めて緩やかな波打つ線。

- **Dividers (区切り)**:
  - 水平線 `<hr />` の代わりに、**「減衰する正弦波（Damped Sine Wave）」**のSVGを使用（新規作成）。

### C. アイコンアセット

- **ロゴ/アイデンティティ**: 眼鏡アイコン（数学×音響）
  - **形式**: PNG （1:1サイズ、ユーザー提供）
  - **配置先**: `public/assets/icons/logo.png`

- **カテゴリアイコン（幾何学図形）**:
  - Project (開発): `■` (Square / Digital)
  - Activity (活動/研究): `●` (Circle / Analog)
  - Writing (執筆): `▲` (Triangle / Delta)

### D. インタラクション

- **Hover Effects**:
  - カードやリンクに触れると、周囲に矩形波のような枠線が表示される、または微細なグリッチ（ノイズ）が走る。

- **Loading** _(将来実装)_:
  - 回転する円ではなく、「リサージュ図形」が描画されるアニメーション。

---

## 5. UI/UX 構成詳細 (Hub Page)

### 1. Header Area: "Signal Input"

- **Identity**: 左上に眼鏡アイコン（ロゴ）を固定。
- **Navigation**: コードの定数定義のようにリンクを配置。

  ```typescript
  const AUTHOR = 'KUME Soki';
  import { GitHub, X, Note } from 'socials';
  ```

- **Statement**: 背景にうっすらとフーリエ変換の式を透かし入れ（装飾）、数行の自己紹介文を配置。

### 2. Main Stream: "Chronological Timeline"

`timeline.json` を読み込み、新しい順にレンダリングする。

- **Layout**:
  - **Left (Axis)**: `YYYY.MM` の日付スタンプ。
  - **Center (Node)**: カテゴリに応じた幾何学アイコン（■●▲）。
  - **Right (Content)**: Notionの「Callout」風カード。

- **Card Design**:
  - タイトル、概要、技術スタック（タグ）を表示。
  - ~~Audio Meter~~（amplitude機能は不採用）
  - **Interaction**: クリックで詳細ページへ遷移、または小規模なものはその場でアコーディオン展開。

### 3. Writing Area

- **表示**: 最新記事3件をリスト表示（外部リンク対応）。
- **初期状態**: 空（`writings: []`）でも崩れないUI設計。
- **更新性重視**: データファイル編集だけで記事追加可能な構造。

### 4. Personal Area (Toggle)

- 趣味（Rubik's Cube, Beatbox）はNotionの「Toggle List」で隠蔽し、興味がある場合のみ展開させる。

### 5. Footer Area: "Output / Terminal"

- 背景色を反転（黒 `#1a1a1a`）させ、ターミナル画面風のデザインに切り替える。
- 連絡先情報を表示。
- **フォーム機能**: 将来的にEmailJS等で送信機能を実装予定（現時点ではUIのみ）。

---

## 6. データ構造設計 (Consolidated Data)

### 設計方針

**今後もコンテンツを追加しやすい構造**を重視する。

- **`timeline.json`**: タイムライン表示用のインデックス（軽量）
- **`details/` ディレクトリ**: 各項目の詳細情報を個別ファイルで管理

```
src/data/
├── timeline.json           # タイムライン一覧（軽量インデックス）
├── writings.json           # 執筆記事一覧（空配列で開始）
├── profile.json            # プロフィール情報（維持）
└── details/                # 詳細情報（個別ファイル）
    ├── sleep-buster.json
    ├── matlab-edm.json
    ├── robocup-home.json
    └── ...
```

### 型定義

```typescript
// src/types/dataModels.ts

type Category = 'project' | 'activity' | 'writing';

interface TimelineItem {
  id: string; // 一意のID (例: "sleep-buster")
  date: string; // "2025-12-10" (ソート用)
  category: Category; // アイコン出し分け用
  title: string; // プロジェクト名
  summary: string; // 短い概要（1-2行）
  tags: string[]; // ["React", "Python", "AI"]
  hasDetail: boolean; // 詳細ページ(/docs/id)を持つか
  externalLink?: string; // Zenn等の外部リンク用
}

interface WritingItem {
  id: string;
  date: string;
  title: string;
  platform: string; // "Zenn", "Note" 等
  url: string;
  summary?: string;
}
```

---

## 7. クリーンアーキテクチャ適用指針

既存ルールを厳守する。

1. **Use Cases (Hooks)**:
   - `useTimeline()`: `timeline.json` の読み込み、日付順ソート、カテゴリフィルタリングを担当。
   - `useWritings()`: 執筆記事の読み込みを担当。

2. **Presenters (Components)**:
   - `TimelineView.tsx`: リストを描画するコンテナ。
   - `SignalNode.tsx`: タイムライン上の点と日付を描画。
   - `WaveCard.tsx`: コンテンツカード。Hover時のアニメーションを持つ。

---

## 8. 実装ロードマップ

### Phase 0: アーカイブ作成

1. 既存ページ・コンポーネントの内容を `docs/archive/` に保存。
2. 既存データ構造のスナップショットを作成。

### Phase 1: Data Migration & Assets

1. 既存の `projects.json`, `activities.json` 等から `timeline.json` を作成。
2. 詳細情報を `details/` ディレクトリの個別ファイルに移行。
3. `writings.json` を空配列で作成。
4. SVGアセット（波形ライン、区切り線）を新規作成。
5. 眼鏡アイコンを `public/assets/icons/logo.png` に配置（ユーザー作業）。

### Phase 2: Component Implementation (Atomic)

1. Tailwind CSS 4 の設定（フォントファミリ、カスタムカラー）。
2. `WaveCard` コンポーネントの実装（Hoverエフェクト）。
3. `SignalNode` コンポーネントの実装。
4. `TimelineView` コンポーネントの実装。

### Phase 3: Hub Page Construction

1. `src/pages/Hub.tsx` を作成し、タイムラインレイアウトを組む。
2. Header (Input) を実装。
3. Footer (Terminal) を実装。

### Phase 4: Document Page & Routing

1. `src/pages/Document.tsx` を実装。
2. ルーティングを `Hub` と `Document` に再設定。
3. 旧ページのルートを削除または Hub にリダイレクト。

---

## 9. 決定事項まとめ

| 項目               | 決定内容                                                       |
| ------------------ | -------------------------------------------------------------- |
| 既存ページ         | アーカイブ保存後、削除                                         |
| データ構造         | `timeline.json`（インデックス）+ `details/`（詳細）の分離構成  |
| MDXレンダラー      | 不採用（シンプルなMarkdown/コンポーネントで十分）              |
| 眼鏡アイコン       | PNG形式、`public/assets/icons/logo.png` に配置（ユーザー提供） |
| SVGアセット        | 新規作成                                                       |
| KaTeX              | 不採用（読みやすさ優先、太字・サイズ強調で代替）               |
| amplitude          | 不採用                                                         |
| Writing機能        | 空配列で開始、更新しやすい構造                                 |
| ターミナルフォーム | UIのみ（送信機能は将来実装）                                   |
