# ポートフォリオサイト 開発者向けガイド

**📅 最終更新**: 2025年9月23日  
**🎯 対象**: このサイトを開発・保守するAI・開発者

---

## � **必須事項 - 開発前に必読**

### **コミット前必須チェック（絶対厳守）**

```bash
npm run format  # Prettier: コード整形
npm run lint    # ESLint: 166個のルール適用
npm run build   # TypeScript: 型チェック・ビルド確認
```

**❌ これらを実行せずにコミットすることは絶対に禁止**

### **Git Commit規約（Conventional Commits）**

```bash
feat: 新機能追加・機能拡張
fix: バグ修正・問題解決
refactor: リファクタリング・構造改善
docs: ドキュメント更新・README修正
style: スタイル・CSS・UI調整
chore: 設定・依存関係・ビルド修正
```

### **緊急時対応**

```bash
# 開発環境リセット
rm -rf node_modules package-lock.json
npm install
npm run dev

# 大きなファイルがGitに残っている場合
git reset --hard HEAD~1  # 直前のコミットに戻す
```

---

## 📋 目次

1. [プロジェクト現状](#1-プロジェクト現状)
2. [技術スタック](#2-技術スタック)
3. [アーキテクチャ構造](#3-アーキテクチャ構造)
4. [データ構造・型システム](#4-データ構造型システム)
5. [開発フロー](#5-開発フロー)
6. [品質保証](#6-品質保証)
7. [改善計画](#7-改善計画)

---

## 1. プロジェクト現状

### 🎯 **目的**

採用特化型ポートフォリオサイト（情報系エンジニア向け）

### ✅ **完了事項**

#### **技術基盤**

- TypeScript型安全性100%（47型定義運用）
- Clean Architecture（5層構造）
- ESLint厳格ルール（エラー0状態）
- Defensive Programming（全map関数保護）
- PageLayoutコンポーネント統一（6ページ）
- SPAルーティング完全対応（GitHub Pages）

#### **データ構造**

```
📁 src/data/ (9ファイル・JSON形式)
├── activities.json      # 活動・経験
├── activityDetails.json # 活動詳細
├── contacts.json        # 連絡先・SNS
├── home.json           # ホームページ
├── profile.json        # プロフィール
├── projects.json       # 作品（6プロジェクト）
├── seo.json           # SEO設定
├── skills.json        # 技術スキル
└── vision.json        # 理念・目標
```

#### **運用中機能**

- ✅ レスポンシブデザイン・Core Web Vitals最適化
- ✅ SEO最適化・Google Analytics 4連携
- ✅ GitHub Actions CI/CD・自動デプロイ
- ✅ LazyImage・エラー処理強化

---

## 2. 技術スタック

### 🛠️ **コア技術**

| 技術         | バージョン | 特徴                     |
| ------------ | ---------- | ------------------------ |
| TypeScript   | 5.8.3      | 型安全性・エラー予防     |
| Vite         | 7.1.3      | 高速HMR・最適化バンドル  |
| React        | 19.1.1     | 最新並行機能             |
| Tailwind CSS | 4.1.12     | ユーティリティファースト |
| React Router | 7.8.2      | SPA・Code splitting      |

### 🔧 **開発ツール**

| ツール   | 用途                        |
| -------- | --------------------------- |
| ESLint   | 品質チェック（エラー0状態） |
| Prettier | コード整形                  |
| PostCSS  | CSS最適化                   |

### 🌐 **インフラ**

- **GitHub Pages**: ホスティング・SPA対応
- **GitHub Actions**: CI/CD・自動デプロイ
- **Google Analytics 4**: 解析・コンバージョン追跡

---

## 3. アーキテクチャ構造

### 🏗️ **Clean Architecture（5層構造）**

```
📁 src/
├── contexts/        # 状態管理層
│   ├── ProjectContext.tsx
│   └── ProjectContextDefinition.ts
├── pages/           # プレゼンテーション層（9ページ）
│   ├── Home.tsx, About.tsx, Experience.tsx
│   ├── Skills.tsx, Vision.tsx, Works.tsx
│   ├── WorkDetail.tsx, ActivityDetail.tsx
│   └── Contact.tsx
├── components/      # UIコンポーネント層（13個）
│   ├── PageLayout.tsx    # 統一レイアウト管理
│   ├── MediaPlayer.tsx   # メディア再生
│   ├── LazyImage.tsx     # 遅延画像読み込み
│   └── [その他10個]
├── hooks/           # ビジネスロジック層（4個）
│   ├── useMediaPlayer.ts, useProjects.ts
│   ├── useModal.ts, useScrollAnimation.ts
├── utils/           # ユーティリティ層（7個）
│   ├── analytics.ts      # GA4統合
│   ├── performance.ts    # パフォーマンス監視
│   └── [その他5個]
├── data/            # データ層（9ファイル・JSON）
└── types/           # 型定義層（47型定義）
    └── dataModels.ts
```

### 🔄 **重要原則**

- ⬇️ **下向き依存のみ許可**（Clean Architecture準拠）
- ❌ **逆向き依存禁止**
- ✅ **型インターフェースを通じた疎結合**

### 🌐 **SPAルーティング（GitHub Pages対応）**

```html
<!-- public/404.html - 直接URL対応 -->
<script>
  // GitHub Pages SPA redirect solution
  var l = window.location;
  l.replace(/* リダイレクト処理 */);
</script>
```

**解決する問題**:

- ❌ `https://soki0909.github.io/activity/robocup-home` → 404エラー
- ✅ `https://soki0909.github.io/activity/robocup-home` → 正常表示

---

## 4. データ構造・型システム

### 📊 **型定義最適化実績**

```typescript
// 型定義システム最適化（2025年9月4日完了）
{
  before: { totalTypes: 73, fileSize: '734行' },
  after: { activeTypes: 47, fileSize: '457行' },
  optimization: { deletedTypes: 26, reduction: '38%' }
}
```

### 📁 **データファイル構造**

| ファイル               | 用途               | 型定義              |
| ---------------------- | ------------------ | ------------------- |
| `activities.json`      | 活動・経験         | ActivitiesData      |
| `activityDetails.json` | 活動詳細           | ActivityDetailsData |
| `contacts.json`        | 連絡先・SNS        | ContactsData        |
| `home.json`            | ホームページ       | HomeData            |
| `profile.json`         | プロフィール       | ProfileData         |
| `projects.json`        | 作品・プロジェクト | ProjectsData        |
| `seo.json`             | SEO・構造化データ  | SEOData             |
| `skills.json`          | 技術スキル         | SkillsData          |
| `vision.json`          | ビジョン・目標     | VisionData          |

---

## 5. 開発フロー

### 🔄 **開発ワークフロー**

```bash
# 1. 現状確認
git status && npm run dev

# 2. 機能実装
# - Clean Architecture準拠
# - 型安全性100%維持
# - Defensive Programming適用

# 3. コミット前必須チェック
npm run format && npm run lint && npm run build

# 4. Git操作
git add . && git commit -m "feat: 機能説明" && git push
```

### 📝 **コーディング規約**

#### **命名規則**

```typescript
// ✅ 推奨
const MediaPlayer: React.FC = () => {}; // PascalCase: Component
const useMediaPlayer = () => {}; // camelCase: Hook
const MAX_RETRY_COUNT = 3; // 定数
const handlePlayPause = () => {}; // Event Handler

// ❌ 禁止
const mediaPlayer = () => {}; // 小文字コンポーネント
const onClick = () => {}; // 汎用すぎるイベント名
```

#### **Defensive Programming**

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
data.map(item => ...)                       // 防御チェックなし
```

### 🚨 **品質保証**

```bash
# 必須チェック項目（全てグリーン必須）
✅ npm run format     # Prettier
✅ npm run lint       # ESLint（166ルール）
✅ npm run build      # TypeScript型チェック
✅ Conventional Commits # Git commit規約
```

---

## 6. 品質保証

### 🚀 **Core Web Vitals最適化**

| 指標    | 目標値  | 現在値 | 状況    |
| ------- | ------- | ------ | ------- |
| **LCP** | < 2.5s  | ~1.8s  | ✅ 達成 |
| **FID** | < 100ms | ~45ms  | ✅ 達成 |
| **CLS** | < 0.1   | ~0.05  | ✅ 達成 |

### 📊 **パフォーマンス最適化**

```typescript
// 画像遅延読み込み（LazyImage.tsx）
const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    setIsInView(true);
    observer.disconnect();
  }
}, { threshold: 0.1 });

// Code Splitting
const LazyWorksPage = lazy(() => import('./pages/Works.tsx'));

// バンドル最適化（vite.config.ts）
manualChunks: {
  vendor: ['react', 'react-dom'],
  router: ['react-router-dom'],
  analytics: ['./src/utils/analytics']
}
```

### 🛡️ **SEO・アクセシビリティ**

```typescript
// SEO.tsx - 動的メタタグ生成
<Helmet>
  <title>{title} | 久米蒼輝 Portfolio</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
---

## 7. 改善計画

### � **最優先（即時対応）**

#### **就活効果向上（完了済み）**
- ✅ AI活用開発の価値明示（GitHub Copilot・Gemini）
- ✅ 専門分野の正確性（AI・機械学習・Web開発・音響信号処理・教育技術）
- ✅ 連絡手段改善（大学メール最優先 + 個人Gmail併記）
- ✅ 冒頭インパクト最適化（Hackit 2025最優秀賞・paiza Aランク・68名組織サブリーダー）
- ✅ 卒業年度明確化（2027年3月卒業予定・新卒採用対象）

#### **技術的改善**
- 🔴 **コンタクトフォーム機能化**: EmailJS実装（企業からの問い合わせ受付）
- 🟡 **音響信号処理強化**: projects.json・skills.jsonでの音響技術詳細追加
- 🟡 **TypeScriptデータファイル移行検討**: 段階的移行・型安全性強化

### ⚡ **高優先（3ヶ月以内）**

#### **ユーザビリティ向上**
- ダークモード切り替え
- 高度フィルタリング（技術・難易度・カテゴリ）
- 全文検索機能（プロジェクト・スキル・経験）

#### **音響技術ポートフォリオ最適化**
- MATLAB楽曲制作での信号処理技術詳細化
- 3Dピアノアプリの音響技術要素強調
- 音響分野キャリア連携メッセージング

### 📈 **中優先（6ヶ月以内）**

#### **テスト戦略強化**
- Vitest単体テスト（カバレッジ>90%）
- Playwright E2Eテスト
- Testing Libraryコンポーネントテスト

#### **国際化対応**
- react-i18next導入（日本語・英語）
- `/en/about`等URL構造
- 動的言語ファイル読み込み

### 🔬 **長期計画（6ヶ月〜1年）**

#### **技術基盤進化**
- React 19 Server Components移行
- Suspense境界による段階的読み込み
- Web Audio API統合音響デモ機能
- WCAG 2.1 AAA レベル対応

#### **監視・分析強化**
- Real User Monitoring（RUM）
- Error Boundary統合エラー追跡
- A/Bテスト基盤構築

### 📊 **成功指標・KPI**

#### **技術的KPI**
- Core Web Vitals: すべてGood範囲維持
- バグレポート: <1件/月
- テストカバレッジ: >90%

#### **就活効果KPI**
- コンタクトフォーム送信: >5件/月（実装後）
- 平均セッション時間: >4分維持
- プロジェクト詳細閲覧率: >80%

---

**💡 重要**: この開発者ガイドは、品質・保守性・パフォーマンスを維持しながら継続的改善を行うための技術仕様書です。新機能追加・改修時は必ずこの指針に従って開発してください。
      'オーディオ技術・エンターテインメント業界',
      'AV機器・音響システム開発',
      '音声通信技術・VoIP関連',
      '音楽配信・音響解析技術'
    ],
    priority: 'high'
  };
}

// 技術的改善事項
- TypeScriptデータファイルへの段階的移行検討
- データ検証・型安全性のさらなる強化
- 動的データ読み込み最適化

// パフォーマンス監視強化
- Real User Monitoring (RUM) 導入
- Core Web Vitals リアルタイム追跡
- バンドルサイズ自動アラート設定

// セキュリティ強化
- Content Security Policy (CSP) 実装
- Subresource Integrity (SRI) 適用
- 依存関係脆弱性定期スキャン
```

#### **⚡ 高優先（3ヶ月以内）**

```typescript
// 🎯 就活効果向上施策
interface JobHuntingEnhancements {
  // 1. 実績の定量的表現強化
  achievementQuantification: {
    currentStyle: '技術名の羅列',
    enhancedStyle: '実績と紐づけた技術力証明',
    examples: [
      'Python: ハッカソン優勝作品開発実績',
      'AI・機械学習: RoboCup Mobile Cloud AI システム開発',
      'リーダーシップ: 68名組織マネジメント実績',
      'プレゼンテーション: 苦手克服→イベント登壇の成長ストーリー',
      '**音響信号処理: MATLAB楽曲制作・3Dピアノアプリ・リアルタイム音声合成技術実装**'
    ]
  };

  // 2. 企業別価値提案の整理
  targetCompanyMessaging: {
    itCompanies: '技術力 × チームリーダーシップ',
    manufacturers: '**音響技術 × 社会課題解決思考**',
    edtech: '教職課程 × 「翻訳力」',
    startups: '幅広い技術力 × 課題解決思考',
    audioTechIndustries: '**音響信号処理 × AI技術 × 実装力（音響機器・オーディオ技術業界対象）**'
  };

  // 3. 数値インパクトの前面配置
  keyMetrics: [
    'Hackit 2025最優秀賞受賞（参加者数記載検討）',
    'paiza Aランク取得（上位15%）',
    '68名組織でのサブリーダー経験',
    '2年間継続的な学内インターンシップ経験',
    'EMaT全分野偏差値60超',
    '実用数学技能検定準1級取得',
    '**音響技術プロジェクト2件完成（MATLAB楽曲・3Dピアノ）**'
  ];

  // 4. 音響信号処理キャリア連携 🎵
  audioProcessingAlignment: {
    portfolioEnhancements: [
      'projects.jsonでの音響技術詳細追加',
      'skills.jsonでのDSP・音響処理技術明記',
      'プロジェクト説明での音響工学要素強調',
      '音響信号処理分野への興味・学習姿勢の明確化'
    ],
    targetPositions: [
      'デジタル信号処理エンジニア',
      'オーディオアルゴリズムエンジニア',
      '音響システム開発エンジニア',
      '音声信号処理エンジニア',
      'DSP（Digital Signal Processing）エンジニア',
      '音響ソフトウェア開発者',
      '楽器・音響機器組み込みエンジニア'
    ]
  };
}

// 4. ユーザビリティ向上
interface UIEnhancements {
  darkMode: boolean;           // ダークモード切り替え
  accessibilityMode: boolean;  // アクセシビリティ強化モード
  customThemes: Theme[];       // カスタムテーマシステム
  favoriteProjects: string[]; // お気に入り機能
}

// 5. インタラクティビティ強化
const interactiveFeatures = {
  projectFilter: {            // 高度フィルタリング
    technology: string[],
    difficulty: 1 | 2 | 3 | 4 | 5,
    timeline: DateRange,
    category: ProjectCategory[]
  },
  searchFunction: {           // 全文検索機能
    projects: boolean,
    skills: boolean,
    experience: boolean
  }
};
```

#### **📈 中優先（6ヶ月以内）**

```typescript
// 1. テスト戦略強化
const testingStrategy = {
  unitTests: {
    framework: 'Vitest', // 高速テストランナー
    coverage: '>90%', // カバレッジ目標
    components: 'Testing Library', // コンポーネントテスト
  },
  e2eTests: {
    framework: 'Playwright', // エンドツーエンドテスト
    scenarios: [
      'ユーザージャーニー',
      'フォーム送信',
      'メディア再生',
      'レスポンシブ対応',
    ],
  },
};

// 2. 国際化（i18n）対応
export const internationalization = {
  library: 'react-i18next',
  languages: ['ja', 'en'], // 日本語・英語対応
  implementation: {
    routingStrategy: '/en/about', // URL構造
    fallbackLanguage: 'ja', // フォールバック言語
    dynamicLoading: true, // 言語ファイル遅延読み込み
  },
};

// 3. 音響技術ポートフォリオ最適化 🎵
const audioTechOptimization = {
  existingAssetEnhancement: {
    matlabProjectDetailing: [
      'MATLAB楽曲制作での信号処理技術詳細追加',
      '楽曲制作プロセスでのDSP理論適用説明',
      '音響工学的観点からの技術解説強化',
    ],
    pianoAppTechnicalFocus: [
      '3Dピアノアプリの音響技術要素強調',
      'リアルタイム音声合成アルゴリズム詳細',
      'OpenGL音響統合技術の説明拡充',
    ],
    skillsDataOptimization: [
      'skills.jsonでの音響処理技術明記',
      'DSP・信号処理スキルレベル詳細化',
      '音響関連フレームワーク・ツール追加',
    ],
  },

  presentationEnhancement: {
    projectDescriptionUpgrade: [
      '音響信号処理観点からのプロジェクト説明強化',
      '技術的背景・理論的基盤の明確化',
      '音響分野への適用可能性・発展性の表現',
    ],
    careerAlignmentMessaging: [
      '音響技術分野への興味・学習意欲の明示',
      'デジタル信号処理エンジニア志向の表現',
      '音響×AI×Web技術の融合アピール',
    ],
  },
};
```

contentHighlights: {
totalProjects: 6, // 掲載プロジェクト数
majorActivities: 4, // 主要活動数
skillCategories: 7, // 技術スキルカテゴリ数
specialtyAreas: 5, // 専門分野数
},
} as const;

```

---

**💡 重要**: このアーキテクチャ設計書は、今後の開発・保守を担当するAI・開発者向けの技術仕様書です。新機能追加・改修時は必ずこの指針に従い、品質・保守性・パフォーマンスを維持しながら開発を進めてください。

**🔄 更新頻度**: 重要な変更・新機能追加時に随時更新し、常に最新の技術仕様を反映します。
```
