---
description: コミット前の品質チェック（format, lint, build）
---

# コミット前チェック

このプロジェクトではコミット前に必ず以下のチェックを実行する。

// turbo-all

1. コードフォーマット:

```bash
cd c:\Users\kumes\Documents\Soki0909.github.io
npm run format
```

2. ESLint チェック:

```bash
npm run lint
```

3. TypeScript ビルド:

```bash
npm run build
```

4. すべてのチェックが通ったらコミット:

```bash
git add -A
git status
```

5. 変更内容を確認してコミット（日本語・Conventional Commits形式）:

> [!IMPORTANT]
> コミットメッセージは必ず**日本語**で記述すること。

```bash
git commit -m "feat: 機能の説明（日本語）"
```

## コミットメッセージ規約

### フォーマット

```
<type>: <subject>

[body]
```

### タイプ（type）

| プレフィックス | 用途                 | 例                                             |
| -------------- | -------------------- | ---------------------------------------------- |
| `feat:`        | 新機能追加・機能拡張 | `feat: タイムラインにフィルター機能を追加`     |
| `fix:`         | バグ修正・問題解決   | `fix: 画像が表示されない問題を修正`            |
| `refactor:`    | リファクタリング     | `refactor: コンポーネントを分割して可読性向上` |
| `docs:`        | ドキュメント更新     | `docs: READMEにセットアップ手順を追加`         |
| `style:`       | スタイル・UI調整     | `style: ヘッダーの余白を調整`                  |
| `chore:`       | 設定・依存関係       | `chore: ESLint設定を更新`                      |
| `perf:`        | パフォーマンス改善   | `perf: 画像の遅延読み込みを実装`               |
| `test:`        | テスト追加・修正     | `test: TimelineViewのテストを追加`             |

### 件名（subject）の書き方

- **日本語**で記述
- 末尾に句点（。）を付けない
- 動詞で始める（追加、修正、変更、削除、実装、更新）
- 50文字以内を目安

### 良い例

```bash
git commit -m "feat: プロジェクト詳細ページにYouTube埋め込みを追加"
git commit -m "fix: モバイル表示時のレイアウト崩れを修正"
git commit -m "refactor: useTimelineフックをカスタマイズ可能に変更"
git commit -m "chore: Antigravityスキルとワークフローを追加"
```

### 悪い例

```bash
# ❌ 英語
git commit -m "feat: add timeline filter"

# ❌ 曖昧
git commit -m "fix: バグ修正"

# ❌ 句点あり
git commit -m "feat: 新機能を追加。"
```
