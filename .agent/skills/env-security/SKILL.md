---
description: GitHub Pages + Vite プロジェクトにおける環境変数のセキュリティ管理。.gitignore 調査、漏洩チェック、GitHub Secrets 設定を行う。
---

# 環境変数セキュリティ管理スキル

## このスキルを使う場面

- `.env` ファイルをレビュー・追加するとき
- `.gitignore` の妥当性を確認するとき
- GitHub Secrets の設定を確認・案内するとき
- セキュリティインシデント（誤コミット）から復旧するとき

---

## 1. このプロジェクトの環境変数アーキテクチャ

```
ローカル開発           CI/CD（GitHub Actions）       本番（GitHub Pages）
.env.production   →   secrets.VITE_*           →   dist/assets/*.js
（git 除外）           （Repository Secrets）         （焼き込み済み）
```

**ポイント**: Vite の `VITE_*` 変数はビルド時に JS へ静的に埋め込まれる。
ランタイムに環境変数を読む仕組みは存在しないため、`.env.production` をサーバーに置く必要はない。

---

## 2. .gitignore チェックリスト

`.gitignore` に以下がすべて含まれているか確認する:

```gitignore
# Environment variables
.env
.env.local
.env.*.local
.env.production
.env.staging
.env.development
```

> [!IMPORTANT]
> `.env.example`（ダミー値のみ）は git に含めてよい。設定項目のドキュメントとして機能する。

---

## 3. 漏洩チェック手順

### git 追跡確認

```bash
# .env 系ファイルが追跡されていないか確認
git ls-files | grep '\.env'
```

何も表示されなければ OK。表示された場合は即座に除外する。

### キャッシュからの除外（誤コミット時）

```bash
git rm --cached .env.production
git add .gitignore
git commit -m "security: .env.productionをgit追跡から除外"
git push origin main
```

### 過去のコミット履歴に値が残っている場合

GA 測定ID（`G-XXXXXXXXXX`）程度であれば実害は少ないが、完全にクリーンにする場合は:

1. **GA 測定IDを再発行**（推奨・最も簡単）: Google Analytics コンソールで新しいプロパティを作成
2. **BFG Repo Cleaner** で履歴から削除（git 履歴書き換え・強制プッシュが必要）

---

## 4. GitHub Secrets の設定

GitHub Actions のビルドで環境変数を使うには Repository Secrets に登録する。

### 登録手順

1. GitHub リポジトリ → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret** をクリック
3. Name と Value を入力して保存

### このプロジェクトの登録済み Secrets

| Secret 名                | 値の形式       | 用途                    |
| ------------------------ | -------------- | ----------------------- |
| `VITE_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Google Analytics 測定ID |

### deploy.yml での参照方法（確認用）

```yaml
- name: Build
  run: npm run build
  env:
    VITE_GA_MEASUREMENT_ID: ${{ secrets.VITE_GA_MEASUREMENT_ID }}
```

---

## 5. ローカルビルド時のみ .env.production を使う場合

GitHub Secrets に登録済みであれば不要だが、ローカルで本番ビルドを確認したい場合は:

```bash
# .env.production を作成（git には含めない）
echo "VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX" > .env.production
npm run build
```

> [!CAUTION]
> 作業後は `.env.production` が git に追加されていないことを `git status` で確認すること。
