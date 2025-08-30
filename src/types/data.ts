// 個人情報関連の型定義
export interface BasicProfile {
  name: string;
  nameEn: string;
  nameReading: string;
  university: string;
  universityEn: string;
  birthPlace: string;
  birthPlaceEn: string;
  birthday: string;
  birthdayEn: string;
}

export interface Mission {
  title: string;
  content: string;
  description: string;
}

export interface SelfIntroduction {
  title: string;
  content: string;
}

export interface ActionPrinciple {
  title: string;
  quote: string;
  description: string;
}

export interface StrengthItem {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface Strengths {
  title: string;
  quote: string;
  description: string;
  items: StrengthItem[];
}

export interface PersonalityType {
  result: string;
  description: string;
}

export interface TurningPoint {
  title: string;
  icon: string;
  description: string;
}

export interface Contact {
  platform: string;
  handle: string;
  url: string;
  icon: string;
  color: string;
}

export interface KeyAchievement {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

export interface PersonalData {
  basicProfile: BasicProfile;
  mission: Mission;
  selfIntroduction: SelfIntroduction;
  actionPrinciple: ActionPrinciple;
  strengths: Strengths;
  personalityType: PersonalityType;
  turningPoints: TurningPoint[];
  contacts: Contact[];
  keyAchievements: KeyAchievement[];
}

// スキル関連の型定義
export interface ProgrammingLanguage {
  name: string;
  level: string;
  experience: string;
  color: string;
}

export interface SpecialtyArea {
  title: string;
  frameworks: string;
  methods: string;
  achievement: string;
  icon: string;
  color: string;
}

export interface TechnicalEvaluation {
  title: string;
  description: string;
  detail: string;
  color: string;
  icon: string;
}

export interface LearningPhilosophy {
  title: string;
  quote: string;
  description: string;
}

export interface ContinuousLearningItem {
  title: string;
  icon: string;
  description: string;
}

export interface SkillsData {
  programmingLanguages: ProgrammingLanguage[];
  specialtyAreas: SpecialtyArea[];
  technicalEvaluations: TechnicalEvaluation[];
  learningPhilosophy: LearningPhilosophy;
  continuousLearning: ContinuousLearningItem[];
}

// 経験関連の型定義
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  details: string[];
  color: string;
}

export interface MajorActivity {
  title: string;
  period: string;
  scale: string;
  position: string;
  achievement: string;
  description: string;
  technologies: string[];
  myRole: string[];
  icon: string;
  color: string;
}

export interface ApproachStep {
  step: number;
  title: string;
  description: string;
  color: string;
}

export interface GrowthStory {
  title: string;
  motivation: {
    title: string;
    description: string;
  };
  initialChallenges: string[];
  approach: ApproachStep[];
  strategies: string[];
  result: string;
}

export interface TeachingCourse {
  licenses: string[];
  caregivingExperience: {
    childWelfare: string;
    specialEducation: string;
    insight: string;
  };
}

export interface Qualification {
  name: string;
  date: string;
  level: string;
}

export interface PlannedQualification {
  name: string;
  status: string;
  color: string;
}

export interface ExperienceData {
  timelineItems: TimelineItem[];
  majorActivities: MajorActivity[];
  growthStory: GrowthStory;
  teachingCourse: TeachingCourse;
  qualifications: Qualification[];
  plannedQualifications: PlannedQualification[];
}

// ビジョン関連の型定義
export interface SpecialFocus {
  title: string;
  quote: string;
  description: string;
}

export interface RoadmapPhase {
  phase: string;
  items: string[];
  color: string;
}

export interface FutureVision {
  specialFocus: SpecialFocus;
  roadmap: RoadmapPhase[];
}

export interface SocialMessage {
  title: string;
  quote: string;
  description: string;
}

export interface Hobby {
  title: string;
  description: string;
  additional?: string;
}

export interface VisionData {
  mission: Mission;
  actionPrinciple: ActionPrinciple;
  turningPoints: Pick<TurningPoint, 'title' | 'description'>[];
  futureVision: FutureVision;
  socialMessage: SocialMessage;
  hobbies: Hobby[];
}

// ホーム関連の型定義
export interface Highlight {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  link: string;
}

export interface NavigationCard {
  title: string;
  description: string;
  icon: string;
  color: string;
  hoverColor: string;
  link: string;
  details: string;
}

export interface QuickFact {
  value: string;
  label: string;
  color: string;
}

export interface CTAButton {
  text: string;
  link: string;
  style: string;
  external?: boolean;
}

export interface CTASection {
  title: string;
  description: string;
  buttons: CTAButton[];
}

export interface HomeData {
  highlights: Highlight[];
  navigationCards: NavigationCard[];
  quickFacts: QuickFact[];
  ctaSection: CTASection;
}

// コンタクト関連の型定義
export interface ContactInfo {
  platform: string;
  handle: string;
  url: string;
  icon: string;
  bgColor: string;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  rows?: number;
}

export interface FormConfig {
  title: string;
  fields: FormField[];
  submitText: string;
  submitMessage: string;
}

export interface ContactData {
  contacts: ContactInfo[];
  formConfig: FormConfig;
}

// SEO関連の型定義
export interface SiteInfo {
  baseUrl: string;
  name: string;
  author: string;
  themeColor: string;
  defaultLanguage: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  type: 'website' | 'profile' | 'article';
}

export interface SEOData {
  site: SiteInfo;
  defaults: SEOMetadata;
  pages: Record<string, SEOMetadata>;
}
