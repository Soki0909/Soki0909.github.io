import type {
  PersonalData,
  SkillsData,
  ExperienceData,
  VisionData,
  HomeData,
  ContactData,
} from '../types/data';

import personalData from '../data/personal.json';
import skillsData from '../data/skills.json';
import experienceData from '../data/experience.json';
import visionData from '../data/vision.json';
import homeData from '../data/home.json';
import contactData from '../data/contact.json';

/**
 * 個人情報データを取得
 * @returns 個人プロフィール、ミッション、強み等の情報
 */
export const getPersonalData = (): PersonalData => {
  return personalData as PersonalData;
};

/**
 * 技術スキルデータを取得
 * @returns プログラミング言語、専門技術、評価実績等の情報
 */
export const getSkillsData = (): SkillsData => {
  return skillsData as SkillsData;
};

/**
 * 経験・活動実績データを取得
 * @returns タイムライン、主要活動、成長ストーリー等の情報
 */
export const getExperienceData = (): ExperienceData => {
  return experienceData as ExperienceData;
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
 * @returns 連絡先、フォーム設定等の情報
 */
export const getContactData = (): ContactData => {
  return contactData as ContactData;
};

/**
 * 個人基本情報のみを取得（ヘッダー等で使用）
 * @returns 名前、大学、連絡先等の基本情報
 */
export const getBasicProfile = () => {
  const data = getPersonalData();
  return {
    name: data.basicProfile.name,
    nameEn: data.basicProfile.nameEn,
    university: data.basicProfile.university,
    mission: data.mission.content,
    contacts: data.contacts,
  };
};

/**
 * 主要実績のみを取得（概要表示で使用）
 * @returns ハッカソン、RoboCup等の主要実績
 */
export const getKeyAchievements = () => {
  const data = getPersonalData();
  return data.keyAchievements;
};

/**
 * 技術評価実績のみを取得（スキル概要で使用）
 * @returns paiza、EMaT等の技術評価結果
 */
export const getTechnicalEvaluations = () => {
  const data = getSkillsData();
  return data.technicalEvaluations;
};

/**
 * 専門技術領域のみを取得（スキル概要で使用）
 * @returns AI、音響技術、Web開発等の専門分野
 */
export const getSpecialtyAreas = () => {
  const data = getSkillsData();
  return data.specialtyAreas;
};

/**
 * 主要活動実績のみを取得（経験概要で使用）
 * @returns RoboCup、学生ステーション等の主要活動
 */
export const getMajorActivities = () => {
  const data = getExperienceData();
  return data.majorActivities;
};

/**
 * 将来ビジョンのみを取得（概要表示で使用）
 * @returns 音楽バリアフリー等の将来展望
 */
export const getFutureVision = () => {
  const data = getVisionData();
  return data.futureVision;
};
