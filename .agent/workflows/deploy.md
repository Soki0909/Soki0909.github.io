---
description: 本番ビルドとプレビュー確認
---

# 本番ビルド確認

// turbo-all

1. 本番用ビルドを実行:

```bash
cd c:\Users\kumes\Documents\Soki0909.github.io
npm run build
```

2. ビルド結果をプレビュー:

```bash
npm run preview
```

3. ブラウザで確認:
   - URL: `http://localhost:4173`

4. 確認項目:
   - [ ] ページが正常に表示される
   - [ ] ルーティングが動作する
   - [ ] 画像・メディアが読み込まれる
   - [ ] コンソールにエラーがない

5. 問題なければプッシュ:

```bash
git push origin main
```

## GitHub Actions

プッシュ後、GitHub Actionsが自動でGitHub Pagesにデプロイ。

- デプロイ状況: https://github.com/Soki0909/Soki0909.github.io/actions
- 本番サイト: https://soki0909.github.io
