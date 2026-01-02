import type {
  ProfileData,
  SkillsData,
  ActivitiesData,
  VisionData,
  HomeData,
  ContactsData,
  SEOData,
  ProjectsData,
} from '../types/dataModels';

import profileData from '../data/profile.json';
import skillsData from '../data/skills.json';
import activitiesData from '../data/archive/activities.json';
import visionData from '../data/archive/vision.json';
import homeData from '../data/archive/home.json';
import contactsData from '../data/archive/contacts.json';
import seoData from '../data/seo.json';
import projectsData from '../data/projects.json';

/**
 * プロフィール情報データを取得
 * @returns 個人情報、教育、ミッション、強み等の情報
 */
export const getProfileData = (): ProfileData => {
  return profileData as ProfileData;
};

/**
 * 技術スキルデータを取得
 * @returns プログラミング言語、専門技術、評価実績等の情報
 */
export const getSkillsData = (): SkillsData => {
  return skillsData as SkillsData;
};

/**
 * 活動・経験データを取得
 * @returns タイムライン、主要活動、成長ストーリー等の情報
 */
export const getActivitiesData = (): ActivitiesData => {
  return activitiesData as ActivitiesData;
};

/**
 * ビジョン・価値観データを取得
 * @returns 将来ビジョン、価値観、趣味等の情報
 */
export const getVisionData = (): VisionData => {
  return visionData as VisionData;
};

/**
 * ホームページ用データを取得
 * @returns ハイライト、ナビゲーション、クイックファクト等の情報
 */
export const getHomeData = (): HomeData => {
  return homeData as HomeData;
};

/**
 * コンタクト情報データを取得
 * @returns 連絡先、お問い合わせフォーム等の情報
 */
export const getContactsData = (): ContactsData => {
  return contactsData as ContactsData;
};

/**
 * SEOメタデータを取得
 * @returns サイト情報、メタデータ等の情報
 */
export const getSEOData = (): SEOData => {
  return seoData as SEOData;
};

/**
 * プロジェクトデータを取得
 * @returns プロジェクト一覧情報
 */
export const getProjectsData = (): ProjectsData => {
  return projectsData as ProjectsData;
};

/**
 * 特定ページのSEOメタデータを取得
 * @param pageKey ページキー
 * @returns ページ固有のSEO情報
 */
export const getPageSEO = (pageKey: string) => {
  const data = getSEOData();
  return {
    ...data.defaults,
    ...data.pages[pageKey],
    site: data.site,
  };
};

// 互換性維持のための旧API（順次移行）
export const getPersonalData = () => {
  const profileData = getProfileData();
  return {
    basicProfile: {
      name: profileData.personal.name,
      nameEn: profileData.personal.nameEn,
      nameReading: profileData.personal.nameReading,
      university: profileData.education.university,
      universityEn: profileData.education.universityEn,
      universityNameJa: profileData.education.universityNameJa,
      universityLocation: profileData.education.location,
      universityDetails: {
        url: profileData.education.details.url,
        departmentDescription:
          profileData.education.details.departmentDescription,
      },
      educationDetails: {
        startYear: profileData.education.details.startYear,
        expectedGraduationYear:
          profileData.education.details.expectedGraduationYear,
        department: profileData.education.details.department,
        jobTitle: profileData.education.details.jobTitle,
      },
      organizationExperience: profileData.organizationExperience,
      skillAreas: profileData.skillAreas,
      technicalSettings: profileData.technicalSettings,
      mediaSettings: profileData.mediaSettings,
      navigationLabels: profileData.navigationLabels,
      birthPlace: profileData.personal.birthPlace,
      birthPlaceEn: profileData.personal.birthPlaceEn,
      birthday: profileData.personal.birthday,
      birthdayEn: profileData.personal.birthdayEn,
    },
    mission: profileData.mission,
    selfIntroduction: profileData.selfIntroduction,
    actionPrinciple: profileData.principles.actionPrinciple,
    strengths: profileData.principles.strengths,
    personalityType: profileData.personalityType,
    turningPoints: profileData.turningPoints,
    contacts: contactsData.contacts.map((contact) => ({
      platform: contact.platform,
      handle: contact.handle,
      url: contact.url,
      icon: contact.icon,
      color: contact.color,
    })),
    keyAchievements: profileData.achievements,
  };
};

export const getExperienceData = () => {
  const activitiesData = getActivitiesData();
  return {
    timelineItems: activitiesData.activities.timeline,
    majorActivities: activitiesData.activities.featured,
    categories: activitiesData.activities.categories,
    stats: activitiesData.activities.stats,
  };
};

export const getContactData = () => {
  const contactsData = getContactsData();
  return {
    pageInfo: {
      title: 'Contact',
      description: contactsData.form.description,
    },
    contacts: contactsData.contacts.map((contact) => ({
      platform: contact.platform,
      handle: contact.handle,
      url: contact.url,
      icon: contact.icon.replace(/[🐙📧🌐]/gu, (match) => {
        switch (match) {
          case '🐙':
            return 'G';
          case '📧':
            return '@';
          case '🌐':
            return 'W';
          default:
            return 'in';
        }
      }),
      bgColor: contact.bgColor,
      isActive: contact.isActive,
    })),
    formConfig: {
      title: contactsData.form.title,
      fields: contactsData.form.fields,
      submitText: contactsData.form.submitText,
      submitMessage: contactsData.form.submitMessage,
    },
  };
};

/**
 * 個人基本情報のみを取得（ヘッダー等で使用）
 * @returns 名前、大学、連絡先等の基本情報
 */
export const getBasicProfile = () => {
  const profileData = getProfileData();
  const contactsData = getContactsData();
  return {
    name: profileData.personal.name,
    nameEn: profileData.personal.nameEn,
    university: profileData.education.university,
    mission: profileData.mission.content,
    contacts: contactsData.contacts,
  };
};

/**
 * 主要実績のみを取得（概要表示で使用）
 * @returns ハッカソン、RoboCup等の主要実績
 */
export const getKeyAchievements = () => {
  const profileData = getProfileData();
  return profileData.achievements;
};

/**
 * 技術評価実績のみを取得（スキル概要で使用）
 * @returns paiza、EMaT等の技術評価結果
 */
export const getTechnicalEvaluations = () => {
  const skillsData = getSkillsData();
  return skillsData.technicalEvaluations;
};

/**
 * 専門技術領域のみを取得（スキル概要で使用）
 * @returns AI、音響技術、Web開発等の専門分野
 */
export const getSpecialtyAreas = () => {
  const skillsData = getSkillsData();
  return skillsData.specialtyAreas;
};

/**
 * 主要活動データを取得
 * @returns RoboCup、学生ステーション等の主要活動
 */
export const getMajorActivities = () => {
  const activitiesData = getActivitiesData();
  return activitiesData.activities.featured;
};

/**
 * 将来ビジョンのみを取得（概要表示で使用）
 * @returns 音楽バリアフリー等の将来展望
 */
export const getFutureVision = () => {
  const visionData = getVisionData();
  return {
    specialFocus: visionData.futureGoals.specialFocus,
    roadmap: visionData.futureGoals.roadmap,
  };
};
