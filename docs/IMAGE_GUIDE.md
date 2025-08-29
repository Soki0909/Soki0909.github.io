# 画像配置ガイド

## ディレクトリ構造

```
public/
├── images/
│   └── projects/
│       ├── sleep-buster/          # Sleep Busterプロジェクト用画像
│       │   ├── main.jpg           # メイン画像 (300x200推奨)
│       │   ├── screenshot1.jpg    # スクリーンショット1 (800x600推奨)
│       │   ├── screenshot2.jpg    # スクリーンショット2 (800x600推奨)
│       │   └── screenshot3.jpg    # スクリーンショット3 (800x600推奨)
│       ├── portfolio/             # ポートフォリオサイト用画像
│       │   ├── main.jpg           # メイン画像 (300x200推奨)
│       │   ├── home.jpg           # ホームページ (800x600推奨)
│       │   ├── about.jpg          # Aboutページ (800x600推奨)
│       │   └── works.jpg          # Worksページ (800x600推奨)
│       └── todo-app/              # ToDOアプリ用画像
│           ├── main.jpg           # メイン画像 (300x200推奨)
│           ├── main-view.jpg      # メイン画面 (800x600推奨)
│           └── dark-mode.jpg      # ダークモード (800x600推奨)
```

## 推奨画像サイズ

### カード用メイン画像 (image)
- **サイズ**: 300x200px
- **フォーマット**: JPG, PNG, WebP
- **用途**: プロジェクト一覧でのサムネイル表示

### 詳細画面用スクリーンショット (images)
- **サイズ**: 800x600px (または 16:12, 4:3比率)
- **フォーマット**: JPG, PNG, WebP
- **用途**: プロジェクト詳細ページでの大きな画像表示

## 画像の最適化

### ファイルサイズ
- **メイン画像**: 50KB以下推奨
- **スクリーンショット**: 200KB以下推奨

### ファイル命名規則
- **英数字とハイフンのみ使用**
- **日本語文字は使用しない**
- **例**: `sleep-buster-main.jpg`, `portfolio-home.jpg`

## パス設定方法

### Viteでの画像パス
Viteプロジェクトでは、`public/`フォルダの画像は以下のように参照します：

```javascript
// ❌ 間違い
"/public/images/projects/sleep-buster/main.jpg"

// ✅ 正しい
"/images/projects/sleep-buster/main.jpg"
```

### projects.jsonでの設定例
```json
{
  "image": "/images/projects/sleep-buster/main.jpg",
  "images": [
    "/images/projects/sleep-buster/screenshot1.jpg",
    "/images/projects/sleep-buster/screenshot2.jpg",
    "/images/projects/sleep-buster/screenshot3.jpg"
  ]
}
```

## Sleep Busterプロジェクト推奨画像

### 1. メイン画像 (`main.jpg`)
- アプリのアイコンやロゴ
- バスタ君のロボット写真
- ハッカソン受賞シーンの写真

### 2. スクリーンショット画像
- `app-overview.jpg`: アプリのメイン画面
- `remote-control.jpg`: バスターモード画面
- `robot-action.jpg`: バスタ君の動作シーン
- `team-photo.jpg`: チーム開発の様子
- `award-ceremony.jpg`: 最優秀賞受賞シーン

## ポートフォリオサイト推奨画像

### 1. メイン画像 (`main.jpg`)
- サイトのスクリーンショット全体
- レスポンシブデザインの表示例

### 2. スクリーンショット画像
- `home-page.jpg`: ホームページのスクリーンショット
- `about-page.jpg`: Aboutページのスクリーンショット  
- `works-page.jpg`: Worksページのスクリーンショット
- `mobile-view.jpg`: モバイル表示のスクリーンショット

## 注意事項

### 著作権・肖像権
- 他人の写真や著作物が含まれる場合は使用許可を確認
- チームメンバーの写真使用時は事前に承諾を得る

### プライバシー
- 個人情報が映り込んでいないか確認
- スクリーンショットにテストデータや機密情報が含まれていないか確認

### ファイル管理
- 定期的に使用していない画像ファイルの整理
- バックアップの管理
