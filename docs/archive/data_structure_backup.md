# 既存データ構造アーカイブ

このファイルは、リニューアル前のデータ構造を記録したアーカイブです。

作成日: 2026-01-01

---

## データファイル一覧（9ファイル）

| ファイル               | サイズ | 用途             | 型定義              |
| ---------------------- | ------ | ---------------- | ------------------- |
| `activities.json`      | 7KB    | 活動・経験       | ActivitiesData      |
| `activityDetails.json` | 14KB   | 活動詳細         | ActivityDetailsData |
| `contacts.json`        | 4KB    | 連絡先・SNS      | ContactsData        |
| `home.json`            | 6KB    | ホームページ     | HomeData            |
| `profile.json`         | 10KB   | プロフィール     | ProfileData         |
| `projects.json`        | 30KB   | プロジェクト一覧 | ProjectsData        |
| `seo.json`             | 6KB    | SEO設定          | SEOData             |
| `skills.json`          | 9KB    | 技術スキル       | SkillsData          |
| `vision.json`          | 7KB    | ビジョン         | VisionData          |

---

## projects.json 構造

```typescript
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  image: string;
  github: string;
  demo: string;
  demoType: string;
  videos: string[];
  audios: string[];
  challenges: string[];
  learned: string[];
  published: boolean;
}
```

**収録プロジェクト（6件）:**

1. Sleep Buster - ハッカソン最優秀賞作品
2. MATLABによるEDM楽曲制作
3. AI体験ブース - 教育イベント企画運営
4. Chrome拡張機能 - 学習効率化ツール
5. 久米蒼輝のポートフォリオサイト
6. 3D電子ピアノアプリケーション

---

## activities.json 構造

```typescript
interface Activity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  role: string;
  achievement: string;
  tags: string[];
  image: string;
  type: string;
  difficulty: string;
  teamSize: string;
  impact: string;
}
```

**収録活動（4件）:**

1. 夢考房RoboCup@Homeプロジェクト
2. 学生ステーション運営スタッフ
3. 教師としての実践力向上プログラム
4. メディア情報学習・研究室体験活動

---

## リニューアル後のデータ構造

```
src/data/
├── timeline.json    # タイムラインインデックス（軽量）
├── writings.json    # 執筆記事一覧
├── profile.json     # プロフィール（維持）
└── details/         # 詳細情報（個別ファイル）
```

詳細は `docs/Web_Design_Requirements_Specification.md` を参照。
