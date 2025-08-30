/**
 * 構造化データ (JSON-LD) ユーティリティ
 *
 * Google検索でのリッチスニペット表示とSEO最適化のため、
 * Schema.orgに準拠した構造化データを生成します。
 *
 * @see https://schema.org/
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

import type { Project } from '../types/project';

// 基本的なPerson schema（ベース情報）
export const createPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://soki0909.github.io/#person',
  name: '久米蒼輝',
  alternateName: 'KUME Soki',
  givenName: '蒼輝',
  familyName: '久米',
  description:
    'プログラミング・AI・音響技術を専門とする情報工学科の学生。テクノロジーの力で誰もが可能性を発揮できる世界の実現を目指す。',
  url: 'https://soki0909.github.io/',
  image: 'https://soki0909.github.io/images/profile.jpg',

  // 職業・所属情報
  jobTitle: '情報工学科学生',
  worksFor: {
    '@type': 'EducationalOrganization',
    name: '金沢工業大学',
    alternateName: 'Kanazawa Institute of Technology',
    url: 'https://www.kanazawa-it.ac.jp/',
    department: {
      '@type': 'Organization',
      name: '工学部 情報工学科',
    },
  },

  // 教育歴
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: '金沢工業大学',
    startDate: '2023',
    expectedGraduationDate: '2026',
  },

  // 専門分野・スキル
  knowsAbout: [
    'プログラミング',
    'AI・機械学習',
    '音響信号処理',
    'Web開発',
    'Python',
    'JavaScript',
    'MATLAB',
    'React',
    'TypeScript',
    'ロボティクス',
    'RoboCup',
    '教育技術',
  ],

  // 関連リンク
  sameAs: ['https://github.com/Soki0909'],

  // 連絡先情報
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'professional',
    url: 'https://soki0909.github.io/contact',
  },

  // 居住地
  homeLocation: {
    '@type': 'Place',
    name: '滋賀県大津市',
    addressRegion: '滋賀県',
    addressCountry: 'JP',
  },
});

// CreativeWork schema（プロジェクト作品用）
export const createCreativeWorkSchema = (project: Project) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  '@id': `https://soki0909.github.io/works/${project.id}#creativework`,
  name: project.title,
  description: project.description,
  creator: {
    '@type': 'Person',
    '@id': 'https://soki0909.github.io/#person',
    name: '久米蒼輝',
  },

  // 作成日時（現在の日付を使用）
  dateCreated: new Date().toISOString(),
  dateModified: new Date().toISOString(),

  // 使用技術
  keywords: project.technologies,

  // メディア・リソース
  ...(project.images &&
    project.images.length > 0 && {
      image: project.images.map((img) => ({
        '@type': 'ImageObject',
        url: img,
        creator: '久米蒼輝',
      })),
    }),

  ...(project.videos &&
    project.videos.length > 0 && {
      video: project.videos.map((video) => ({
        '@type': 'VideoObject',
        contentUrl: video,
        creator: '久米蒼輝',
        description: `${project.title}のデモンストレーション動画`,
      })),
    }),

  // 外部リンク
  ...(project.github && {
    codeRepository: project.github,
  }),
  ...(project.demo && {
    url: project.demo,
  }),

  // ライセンス情報
  license: 'https://opensource.org/licenses/MIT',

  // 言語
  inLanguage: 'ja-JP',
});

// SoftwareApplication schema（アプリケーション作品用）
export const createSoftwareApplicationSchema = (project: Project) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://soki0909.github.io/works/${project.id}#software`,
  name: project.title,
  description: project.description,

  // 開発者情報
  author: {
    '@type': 'Person',
    '@id': 'https://soki0909.github.io/#person',
    name: '久米蒼輝',
  },

  // アプリケーション詳細
  applicationCategory: 'DeveloperApplication',
  operatingSystem: ['Windows', 'macOS', 'Linux', 'Web'],

  // プログラミング言語
  programmingLanguage: project.technologies,

  // 作成・更新日時（現在の日付を使用）
  dateCreated: new Date().toISOString(),
  dateModified: new Date().toISOString(),

  // リソース
  ...(project.github && {
    codeRepository: project.github,
    downloadUrl: project.github,
  }),
  ...(project.demo && {
    url: project.demo,
    installUrl: project.demo,
  }),

  // スクリーンショット
  ...(project.images &&
    project.images.length > 0 && {
      screenshot: project.images.map((img) => ({
        '@type': 'ImageObject',
        url: img,
      })),
    }),

  // ライセンス
  license: 'https://opensource.org/licenses/MIT',

  // 価格
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'JPY',
    availability: 'https://schema.org/InStock',
  },
});

// WebSite schema（サイト全体用）
export const createWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://soki0909.github.io/#website',
  name: '久米蒼輝 - Portfolio',
  alternateName: 'KUME Soki Portfolio',
  description:
    '金沢工業大学 工学部 情報工学科3年 久米蒼輝のポートフォリオサイト。AI・音響技術・Web開発の技術スキルと実績をご紹介します。',
  url: 'https://soki0909.github.io/',

  // サイト作者
  author: {
    '@type': 'Person',
    '@id': 'https://soki0909.github.io/#person',
    name: '久米蒼輝',
  },

  // サイト発行者
  publisher: {
    '@type': 'Person',
    '@id': 'https://soki0909.github.io/#person',
    name: '久米蒼輝',
  },

  // 言語
  inLanguage: 'ja-JP',

  // 検索機能
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        'https://soki0909.github.io/works?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
});

// Portfolio/CollectionPage schema（作品集ページ用）
export const createPortfolioSchema = (projects: Project[]) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://soki0909.github.io/works#portfolio',
  name: '久米蒼輝 - 作品集',
  description:
    'プログラミング・AI・音響技術分野での技術的挑戦と創作物をご紹介します。',
  url: 'https://soki0909.github.io/works',

  // ページ作者
  author: {
    '@type': 'Person',
    '@id': 'https://soki0909.github.io/#person',
    name: '久米蒼輝',
  },

  // 含まれる作品
  mainEntity: projects.map((project) => ({
    '@type': 'CreativeWork',
    '@id': `https://soki0909.github.io/works/${project.id}#creativework`,
    name: project.title,
    description: project.description,
    url: `https://soki0909.github.io/works/${project.id}`,
    dateCreated: new Date().toISOString(),
    keywords: project.technologies,
  })),

  // パンくずリスト
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://soki0909.github.io/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '作品集',
        item: 'https://soki0909.github.io/works',
      },
    ],
  },
});

// Event schema（受賞・活動実績用）
export const createAchievementEventSchema = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': 'https://soki0909.github.io/experience#hackit2025',
    name: 'Hackit 2025ハッカソン 最優秀賞受賞',
    description:
      'Sleep Buster - AI音声分析による睡眠改善支援アプリで最優秀賞を受賞',
    startDate: '2025-01-01',
    endDate: '2025-01-03',
    eventStatus: 'https://schema.org/EventCompleted',

    // 受賞者
    performer: {
      '@type': 'Person',
      '@id': 'https://soki0909.github.io/#person',
      name: '久米蒼輝',
    },

    // 主催者
    organizer: {
      '@type': 'Organization',
      name: 'Hackit実行委員会',
    },

    // 受賞
    award: '最優秀賞',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': 'https://soki0909.github.io/experience#robocup2024',
    name: 'RoboCup日本大会2024 オープンチャレンジ 2位',
    description: 'ロボットが家族の一員となるシステムの開発で6チーム中2位を獲得',
    startDate: '2024-05-01',
    endDate: '2024-05-05',
    eventStatus: 'https://schema.org/EventCompleted',

    // 参加者
    performer: {
      '@type': 'Person',
      '@id': 'https://soki0909.github.io/#person',
      name: '久米蒼輝',
    },

    // 主催者
    organizer: {
      '@type': 'Organization',
      name: 'RoboCup日本委員会',
      url: 'https://www.robocup.or.jp/',
    },

    // 順位
    award: '2位（6チーム中）',
  },
];

// 統合スキーマ生成（複数のスキーマを組み合わせ）
export const createIntegratedSchema = (projects?: Project[]) => {
  const schemas: Record<string, unknown>[] = [
    createPersonSchema(),
    createWebSiteSchema(),
    ...createAchievementEventSchema(),
  ];

  if (projects && projects.length > 0) {
    schemas.push(createPortfolioSchema(projects));
  }

  return schemas;
};

// プロジェクト詳細ページ用の統合スキーマ
export const createProjectDetailSchema = (project: Project) => [
  createPersonSchema(),
  createCreativeWorkSchema(project),
  // アプリケーションの場合はSoftwareApplicationも追加
  ...(project.demoType === 'interactive' || project.github
    ? [createSoftwareApplicationSchema(project)]
    : []),
];

// FAQ schema（よくある質問用）
export const createFAQSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://soki0909.github.io/about#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: '専門分野は何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'プログラミング、AI・機械学習、音響信号処理、Web開発を主な専門分野としています。特にPython、JavaScript、MATLABを使った技術開発に力を入れています。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのような活動実績がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hackit 2025ハッカソンでの最優秀賞受賞、RoboCup日本大会でのオープンチャレンジ2位入賞、74名規模組織でのサブリーダー経験などがあります。',
      },
    },
    {
      '@type': 'Question',
      name: 'どのような技術スキルを持っていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Python（上級）、JavaScript（中級）、MATLAB（中級）、C（中級）などのプログラミング言語に加え、AI・機械学習、音響信号処理、Web開発、ロボティクスの技術を習得しています。',
      },
    },
  ],
});

// Organization schema（所属組織用）
export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': 'https://soki0909.github.io/about#organization',
  name: '金沢工業大学',
  alternateName: 'Kanazawa Institute of Technology',
  url: 'https://www.kanazawa-it.ac.jp/',

  // 所在地
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'JP',
    addressRegion: '石川県',
    addressLocality: '野々市市',
  },

  // 学科
  department: {
    '@type': 'Organization',
    name: '工学部 情報工学科',
    description: '情報技術の基礎から応用まで幅広く学ぶ学科',
  },

  // 在籍者
  member: {
    '@type': 'Person',
    '@id': 'https://soki0909.github.io/#person',
    name: '久米蒼輝',
    memberOf: {
      '@type': 'EducationalOrganization',
      name: '金沢工業大学 工学部 情報工学科',
    },
  },
});

// ページタイプ別のスキーマ選択
export const getPageSchema = (
  pageType:
    | 'home'
    | 'about'
    | 'skills'
    | 'experience'
    | 'vision'
    | 'works'
    | 'work-detail'
    | 'contact',
  data?: { project?: Project; projects?: Project[] }
) => {
  switch (pageType) {
    case 'home':
      return createIntegratedSchema();

    case 'about':
      return [
        createPersonSchema(),
        createOrganizationSchema(),
        createFAQSchema(),
      ];

    case 'skills':
      return [createPersonSchema(), createWebSiteSchema()];

    case 'experience':
      return [createPersonSchema(), ...createAchievementEventSchema()];

    case 'works':
      return data?.projects
        ? createIntegratedSchema(data.projects)
        : [createPersonSchema(), createWebSiteSchema()];

    case 'work-detail':
      return data?.project
        ? createProjectDetailSchema(data.project)
        : [createPersonSchema()];

    case 'contact':
      return [
        createPersonSchema(),
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          '@id': 'https://soki0909.github.io/contact#contactpage',
          name: 'お問い合わせ - 久米蒼輝',
          description:
            '久米蒼輝へのお問い合わせページ。技術的なディスカッションやプロジェクトのご相談をお待ちしています。',
          url: 'https://soki0909.github.io/contact',
          author: {
            '@type': 'Person',
            '@id': 'https://soki0909.github.io/#person',
            name: '久米蒼輝',
          },
        },
      ];

    default:
      return [createPersonSchema()];
  }
};
