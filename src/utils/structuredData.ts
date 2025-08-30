/**
 * 構造化データ (JSON-LD) ユーティリティ
 *
 * Google検索でのリッチスニペット表示とSEO最適化のため、
 * Schema.orgに準拠した構造化データを生成します。
 *
 * @see https://schema.org/
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

import type { Project } from '../types/dataModels';
import { getPersonalData, getSEOData, getSkillsData } from './dataLoader';

// 基本的なPerson schema（ベース情報）
export const createPersonSchema = () => {
  const personalData = getPersonalData();
  const seoData = getSEOData();
  const skillsData = getSkillsData();
  const { basicProfile, mission } = personalData;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${seoData.site.baseUrl}/#person`,
    name: basicProfile.name,
    alternateName: basicProfile.nameEn,
    description: mission.content,
    url: seoData.site.baseUrl,
    image: `${seoData.site.baseUrl}${basicProfile.mediaSettings.profileImagePath}`,

    // 職業・所属情報
    jobTitle: basicProfile.educationDetails.jobTitle,
    worksFor: {
      '@type': 'EducationalOrganization',
      name: basicProfile.universityNameJa,
      alternateName: basicProfile.universityEn,
      url: basicProfile.universityDetails.url,
      department: {
        '@type': 'Organization',
        name: basicProfile.educationDetails.department,
      },
    },

    // 教育歴
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: basicProfile.universityNameJa,
      startDate: basicProfile.educationDetails.startYear,
      expectedGraduationDate:
        basicProfile.educationDetails.expectedGraduationYear,
    },

    // 専門分野・スキル
    knowsAbout: [
      ...skillsData.programmingLanguages.map((lang) => lang.name),
      ...skillsData.specialtyAreas.map((area) => area.title),
      ...basicProfile.skillAreas,
    ],

    // 関連リンク
    sameAs: personalData.contacts
      .filter((contact) => contact.platform === 'GitHub')
      .map((contact) => contact.url),

    // 連絡先情報
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: basicProfile.technicalSettings.contactType,
      url: `${seoData.site.baseUrl}/contact`,
    },

    // 居住地
    homeLocation: {
      '@type': 'Place',
      name: basicProfile.birthPlace,
      addressRegion: basicProfile.birthPlace.split('県')[0] + '県',
      addressCountry: basicProfile.technicalSettings.countryCode,
    },
  };
};

// CreativeWork schema（プロジェクト作品用）
export const createCreativeWorkSchema = (project: Project) => {
  const personalData = getPersonalData();
  const seoData = getSEOData();
  const { basicProfile } = personalData;

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${seoData.site.baseUrl}/works/${project.id}#creativework`,
    name: project.title,
    description: project.description,
    creator: {
      '@type': 'Person',
      '@id': `${seoData.site.baseUrl}/#person`,
      name: basicProfile.name,
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
          creator: basicProfile.name,
        })),
      }),

    ...(project.videos &&
      project.videos.length > 0 && {
        video: project.videos.map((video) => ({
          '@type': 'VideoObject',
          contentUrl: video,
          creator: basicProfile.name,
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
    license: basicProfile.technicalSettings.defaultLicense,

    // 言語
    inLanguage: basicProfile.technicalSettings.defaultLanguage,
  };
};

// SoftwareApplication schema（アプリケーション作品用）
export const createSoftwareApplicationSchema = (project: Project) => {
  const personalData = getPersonalData();
  const seoData = getSEOData();
  const { basicProfile } = personalData;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${seoData.site.baseUrl}/works/${project.id}#software`,
    name: project.title,
    description: project.description,

    // 開発者情報
    author: {
      '@type': 'Person',
      '@id': `${seoData.site.baseUrl}/#person`,
      name: basicProfile.name,
    },

    // アプリケーション詳細
    applicationCategory: basicProfile.technicalSettings.applicationCategory,
    operatingSystem: basicProfile.technicalSettings.supportedPlatforms,

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
    license: basicProfile.technicalSettings.defaultLicense,

    // 価格
    offers: {
      '@type': 'Offer',
      price: basicProfile.technicalSettings.offerPrice,
      priceCurrency: basicProfile.technicalSettings.currency,
      availability: basicProfile.technicalSettings.availability,
    },
  };
};

// WebSite schema（サイト全体用）
export const createWebSiteSchema = () => {
  const { basicProfile } = getPersonalData();
  const seoData = getSEOData();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${seoData.site.baseUrl}/#website`,
    name: `${basicProfile.name} - Portfolio`,
    alternateName: `${basicProfile.nameEn} Portfolio`,
    description: seoData.defaults.description,
    url: seoData.site.baseUrl,

    // サイト作者
    author: {
      '@type': 'Person',
      '@id': `${seoData.site.baseUrl}/#person`,
      name: basicProfile.name,
    },

    // 公開者
    publisher: {
      '@type': 'Person',
      '@id': `${seoData.site.baseUrl}/#person`,
      name: basicProfile.name,
    },

    // サイト内検索
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${seoData.site.baseUrl}${seoData.site.searchTemplate}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
};

// Portfolio/CollectionPage schema（作品集ページ用）
export const createPortfolioSchema = (projects: Project[]) => {
  const { basicProfile } = getPersonalData();
  const seoData = getSEOData();

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${seoData.site.baseUrl}/works#portfolio`,
    name: `${basicProfile.name} - ${basicProfile.navigationLabels.works}`,
    description: seoData.pages.works.description,
    url: `${seoData.site.baseUrl}/works`,

    // ページ作者
    author: {
      '@type': 'Person',
      '@id': `${seoData.site.baseUrl}/#person`,
      name: basicProfile.name,
    },

    // 含まれる作品
    mainEntity: projects.map((project) => ({
      '@type': 'CreativeWork',
      '@id': `${seoData.site.baseUrl}/works/${project.id}#creativework`,
      name: project.title,
      description: project.description,
      url: `${seoData.site.baseUrl}/works/${project.id}`,
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
          name: basicProfile.navigationLabels.home,
          item: seoData.site.baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: basicProfile.navigationLabels.works,
          item: `${seoData.site.baseUrl}/works`,
        },
      ],
    },
  };
};

// Event schema（受賞・活動実績用）
export const createAchievementEventSchema = () => {
  const { basicProfile, keyAchievements } = getPersonalData();
  const seoData = getSEOData();

  // 主要な受賞歴をフィルタリング
  const hackitAchievement = keyAchievements.find((achievement) =>
    achievement.title.includes('Hackit')
  );
  const robocupAchievement = keyAchievements.find((achievement) =>
    achievement.title.includes('RoboCup')
  );

  const events = [];

  if (hackitAchievement) {
    events.push({
      '@context': 'https://schema.org',
      '@type': 'Event',
      '@id': `${seoData.site.baseUrl}/experience#hackit2025`,
      name: `${hackitAchievement.title} ${hackitAchievement.subtitle}`,
      description: hackitAchievement.description,
      startDate: hackitAchievement.eventDates?.startDate,
      endDate: hackitAchievement.eventDates?.endDate,
      eventStatus: basicProfile.technicalSettings.eventStatus,

      // 受賞者
      performer: {
        '@type': 'Person',
        '@id': `${seoData.site.baseUrl}/#person`,
        name: basicProfile.name,
      },

      // 主催者
      organizer: {
        '@type': 'Organization',
        name: hackitAchievement.organizer,
      },

      // 受賞
      award: hackitAchievement.subtitle,
    });
  }

  if (robocupAchievement) {
    events.push({
      '@context': 'https://schema.org',
      '@type': 'Event',
      '@id': `${seoData.site.baseUrl}/experience#robocup2024`,
      name: `${robocupAchievement.title} ${robocupAchievement.subtitle}`,
      description: robocupAchievement.description,
      startDate: robocupAchievement.eventDates?.startDate,
      endDate: robocupAchievement.eventDates?.endDate,
      eventStatus: basicProfile.technicalSettings.eventStatus,

      // 参加者
      performer: {
        '@type': 'Person',
        '@id': `${seoData.site.baseUrl}/#person`,
        name: basicProfile.name,
      },

      // 主催者
      organizer: {
        '@type': 'Organization',
        name: robocupAchievement.organizer,
      },

      // 順位
      award: robocupAchievement.subtitle,
    });
  }

  return events;
};

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
export const createFAQSchema = () => {
  const seoData = getSEOData();
  const skillsData = getSkillsData();
  const { keyAchievements, basicProfile } = getPersonalData();

  // 専門分野を動的に生成
  const specialtyAreas = skillsData.specialtyAreas
    .map((area) => area.title)
    .join('、');
  const programmingLanguages = skillsData.programmingLanguages
    .filter((lang) => ['上級', '中級'].includes(lang.level))
    .map((lang) => `${lang.name}（${lang.level}）`)
    .join('、');

  // 主要な活動実績を動的に生成
  const majorAchievements = keyAchievements
    .filter(
      (achievement) =>
        achievement.title.includes('Hackit') ||
        achievement.title.includes('RoboCup')
    )
    .map((achievement) => `${achievement.title}での${achievement.subtitle}`)
    .join('、');

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${seoData.site.baseUrl}/about#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: '専門分野は何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${specialtyAreas}を主な専門分野としています。特に${programmingLanguages}を使った技術開発に力を入れています。`,
        },
      },
      {
        '@type': 'Question',
        name: 'どのような活動実績がありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${majorAchievements}、${basicProfile.organizationExperience.teamSize}規模組織での${basicProfile.organizationExperience.role}経験などがあります。`,
        },
      },
      {
        '@type': 'Question',
        name: 'どのような技術スキルを持っていますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${programmingLanguages}などのプログラミング言語に加え、${specialtyAreas}の技術を習得しています。`,
        },
      },
    ],
  };
};

// Organization schema（所属組織用）
export const createOrganizationSchema = () => {
  const { basicProfile } = getPersonalData();
  const seoData = getSEOData();

  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${seoData.site.baseUrl}/about#organization`,
    name: basicProfile.universityNameJa,
    alternateName: basicProfile.universityEn,
    url: basicProfile.universityDetails.url,

    // 所在地
    address: {
      '@type': 'PostalAddress',
      addressCountry: basicProfile.technicalSettings.countryCode,
      addressRegion: basicProfile.universityLocation.region,
      addressLocality: basicProfile.universityLocation.locality,
    },

    // 学科
    department: {
      '@type': 'Organization',
      name: basicProfile.educationDetails.department,
      description: basicProfile.universityDetails.departmentDescription,
    },

    // 在籍者
    member: {
      '@type': 'Person',
      '@id': `${seoData.site.baseUrl}/#person`,
      name: basicProfile.name,
      memberOf: {
        '@type': 'EducationalOrganization',
        name: basicProfile.university,
      },
    },
  };
};

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
          '@id': `${getSEOData().site.baseUrl}/contact#contactpage`,
          name: `お問い合わせ - ${getPersonalData().basicProfile.name}`,
          description: getSEOData().pages.contact.description,
          url: `${getSEOData().site.baseUrl}/contact`,
          author: {
            '@type': 'Person',
            '@id': `${getSEOData().site.baseUrl}/#person`,
            name: getPersonalData().basicProfile.name,
          },
        },
      ];

    default:
      return [createPersonSchema()];
  }
};
