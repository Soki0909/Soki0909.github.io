# Soki0909.github.io - プロジェクト固有ルール

このファイルは、ポートフォリオサイト開発における Gemini の動作指針を定義する。

---

## 1. プロジェクト概要

- **概要**: 久米蒼輝（KUME Soki）のポートフォリオサイト
- **ライブサイト**: [https://soki0909.github.io](https://soki0909.github.io)
- **技術スタック**: React 19 + TypeScript 5.8 + Vite 7 + Tailwind CSS 4
- **アーキテクチャ**: Clean Architecture（5層構造）
- **ホスティング**: GitHub Pages（GitHub Actions でデプロイ）

### 🚧 リニューアル進行中

**目的**: 複雑すぎるページを簡略化し、見やすくする

- **コンセプト**: Notionライクな「単一のドキュメントハブ」
- **新構造**: Hub Page (`/`) + Document Page (`/docs/:id`) の2テンプレート
- **詳細**: `docs/Web_Design_Requirements_Specification.md` を参照

---

## 2. 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# コミット前必須チェック（順番厳守）
npm run format    # Prettier: コードフォーマット
npm run lint      # ESLint: 166ルール適用
npm run build     # TypeScript: 型チェック・ビルド

# ビルド結果プレビュー
npm run preview
```

> [!CAUTION]
> `format`, `lint`, `build` を実行せずにコミットすることは禁止。

---

## 3. プロジェクト構造（リニューアル後）

```
src/
├── pages/           # Hub.tsx, Document.tsx
├── components/      # TimelineView, WaveCard, SignalNode 等
├── hooks/           # useTimeline, useWritings 等
├── contexts/        # コンテキスト（状態管理層）
├── data/
│   ├── timeline.json    # タイムラインインデックス
│   ├── writings.json    # 執筆記事一覧
│   ├── profile.json     # プロフィール情報
│   └── details/         # 各項目の詳細データ
├── types/           # 型定義層
└── utils/           # ユーティリティ・ヘルパー
```

---

## 4. コーディング規約

### 命名規則

```typescript
// ✅ 推奨
const MediaPlayer: React.FC = () => {}; // PascalCase: Component
const useMediaPlayer = () => {}; // camelCase: Hook (use prefix)
const MAX_RETRY_COUNT = 3; // UPPER_SNAKE_CASE: 定数
const handlePlayPause = () => {}; // camelCase: Event Handler (handle prefix)

// ❌ 禁止
const mediaPlayer = () => {}; // 小文字コンポーネント
const onClick = () => {}; // 汎用すぎるイベント名
```

### Defensive Programming（必須）

```typescript
// ✅ 必須パターン
const renderItems = () => {
  if (!Array.isArray(activity?.basicInfo)) return null;
  if (activity.basicInfo.length === 0) return null;
  return activity.basicInfo.map((item, index) => (
    <div key={index}>{item.value}</div>
  ));
};

// ❌ 禁止パターン
data.map(item => ...);  // 防御チェックなし
```

### Git Commit規約（Conventional Commits）

```bash
feat:     # 新機能追加・機能拡張
fix:      # バグ修正・問題解決
refactor: # リファクタリング・構造改善
docs:     # ドキュメント更新
style:    # スタイル・UI調整
chore:    # 設定・依存関係修正
```

---

## 5. Clean Architecture ルール

- **依存方向**: 下向き依存のみ許可（上位層 → 下位層）
- **禁止**: 逆向き依存（データ層がUI層に依存する等）
- **結合**: 型インターフェースを通じた疎結合を維持

```
pages → components → hooks → utils → data/types
```

---

## 6. 品質保証

### Core Web Vitals目標

| 指標 | 目標    | 達成値 |
| ---- | ------- | ------ |
| LCP  | < 2.5s  | ~1.8s  |
| FID  | < 100ms | ~45ms  |
| CLS  | < 0.1   | ~0.05  |

### 型安全性

- TypeScript 100%
- `src/types/dataModels.ts` で型定義を集中管理

---

## 7. 参照ドキュメント

| ファイル                                        | 目的                     |
| ----------------------------------------------- | ------------------------ |
| `README.md`                                     | プロジェクト概要         |
| `ARCHITECTURE.md`                               | 詳細アーキテクチャ設計書 |
| `docs/Web_Design_Requirements_Specification.md` | リニューアル要件定義     |
| `docs/archive/`                                 | 旧構造のアーカイブ       |

---

## 8. 緊急時対応

```bash
# 開発環境リセット
rm -rf node_modules package-lock.json
npm install
npm run dev

# 直前のコミットに戻す
git reset --hard HEAD~1
```
