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

## 環境変数（GitHub Secrets）

`VITE_*` 変数はビルド時に JS へバンドル（焼き込み）される。`.env.production` を git に含める必要はなく、**GitHub Secrets に登録**する。

| Secret 名                | 用途                    |
| ------------------------ | ----------------------- |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 測定ID |

> [!CAUTION]
> `.env.production` を **git にコミットしない**。値は GitHub Secrets で管理。
> 登録先: `Settings` → `Secrets and variables` → `Actions`
