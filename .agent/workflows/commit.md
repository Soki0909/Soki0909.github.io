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

5. 変更内容を確認してコミット（Conventional Commits形式）:

```bash
git commit -m "feat: 変更内容の説明"
```

## コミットプレフィックス

| プレフィックス | 用途             |
| -------------- | ---------------- |
| `feat:`        | 新機能追加       |
| `fix:`         | バグ修正         |
| `refactor:`    | リファクタリング |
| `docs:`        | ドキュメント更新 |
| `style:`       | スタイル調整     |
| `chore:`       | 設定・依存関係   |
