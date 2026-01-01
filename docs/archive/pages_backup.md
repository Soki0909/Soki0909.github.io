# 既存ページ構造アーカイブ

このファイルは、リニューアル前の既存ページ構造を記録したアーカイブです。

作成日: 2026-01-01

---

## ページ一覧（9ページ）

| ページ         | ファイル                       | 説明                                                   |
| -------------- | ------------------------------ | ------------------------------------------------------ |
| Home           | `src/pages/Home.tsx`           | トップページ。プロフィール、ハイライト、ナビゲーション |
| About          | `src/pages/About.tsx`          | 自己紹介、ミッション、強み                             |
| Skills         | `src/pages/Skills.tsx`         | 技術スキル一覧                                         |
| Experience     | `src/pages/Experience.tsx`     | 活動・経験タイムライン                                 |
| Vision         | `src/pages/Vision.tsx`         | 将来ビジョン・目標                                     |
| Works          | `src/pages/Works.tsx`          | プロジェクト一覧                                       |
| WorkDetail     | `src/pages/WorkDetail.tsx`     | プロジェクト詳細（動的ルート）                         |
| ActivityDetail | `src/pages/ActivityDetail.tsx` | 活動詳細（動的ルート）                                 |
| Contact        | `src/pages/Contact.tsx`        | 連絡先情報                                             |

---

## ルーティング構造（App.tsx）

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/experience" element={<Experience />} />
  <Route path="/vision" element={<Vision />} />
  <Route path="/works" element={<Works />} />
  <Route path="/works/:id" element={<WorkDetail />} />
  <Route path="/activity/:id" element={<ActivityDetail />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

---

## コンポーネント一覧（13個）

| コンポーネント        | 説明                         |
| --------------------- | ---------------------------- |
| `Header.tsx`          | ナビゲーションヘッダー       |
| `Footer.tsx`          | フッター                     |
| `PageLayout.tsx`      | 統一レイアウト管理           |
| `SEO.tsx`             | メタタグ・SEO                |
| `MediaPlayer.tsx`     | メディア再生                 |
| `LazyImage.tsx`       | 遅延画像読み込み             |
| `DemoModal.tsx`       | デモモーダル                 |
| `AnimatedSection.tsx` | アニメーション付きセクション |
| `MediaContent.tsx`    | メディアコンテンツ           |
| `ModalHeader.tsx`     | モーダルヘッダー             |
| `ModalFooter.tsx`     | モーダルフッター             |
| `TabNavigation.tsx`   | タブナビゲーション           |
| `ScrollToTop.tsx`     | スクロールトップボタン       |

---

## 注記

リニューアル後は、これらのページを `Hub.tsx` と `Document.tsx` の2テンプレートに統合予定。
詳細は `docs/Web_Design_Requirements_Specification.md` を参照。
