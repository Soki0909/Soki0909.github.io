// プロフィール関連の型定義
export interface PersonalInfo {
  name: string;
  nameEn: string;
  nameReading: string;
  birthPlace: string;
  birthPlaceEn: string;
  birthday: string;
  birthdayEn: string;
}

export interface EducationInfo {
  university: string;
  universityEn: string;
  universityNameJa: string;
  location: {
    region: string;
    locality: string;
  };
  details: {
    url: string;
    departmentDescription: string;
    startYear: string;
    expectedGraduationYear: string;
    department: string;
    jobTitle: string;
    currentStatus?: string;
    academicFocus?: string[];
    gpa?: string;
    honors?: string[];
  };
}

export interface Mission {
  title: string;
  content: string;
  description: string;
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

export interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  organizer?: string;
  eventDates?: {
    startDate: string;
    endDate: string;
  };
  details?: {
    participants?: string;
    teamSize?: string;
    myRole?: string;
    technologies?: string[];
    achievement?: string;
    teamExperience?: string;
    organizationSize?: string;
    responsibilities?: string[];
    period?: string;
    achievements?: string[];
    paiza?: {
      rank: string;
      percentile: string;
      skills: string;
    };
    emat?: {
      score: string;
      subjects: string[];
      achievement: string;
    };
    additionalCertifications?: string[];
  };
}

export interface TechnicalSettings {
  defaultLicense: string;
  applicationCategory: string;
  supportedPlatforms: string[];
  defaultLanguage: string;
  currency: string;
  availability: string;
  eventStatus: string;
  countryCode: string;
  contactType: string;
  offerPrice: string;
}

export interface MediaSettings {
  profileImagePath: string;
}

export interface NavigationLabels {
  home: string;
  works: string;
}

export interface ProfileData {
  personal: PersonalInfo;
  education: EducationInfo;
  mission: Mission;
  principles: {
    actionPrinciple: ActionPrinciple;
    strengths: Strengths;
  };
  selfIntroduction: {
    title: string;
    content: string;
  };
  personalityType: PersonalityType;
  turningPoints: TurningPoint[];
  achievements: Achievement[];
  organizationExperience: {
    teamSize: string;
    role: string;
  };
  skillAreas: string[];
  technicalSettings: TechnicalSettings;
  mediaSettings: MediaSettings;
  navigationLabels: NavigationLabels;
}

// スキル関連の型定義
export interface ProgrammingLanguage {
  name: string;
  level: string;
  experience: string;
  color: string;
  projects?: string[];
  frameworks?: string[];
  experienceYears?: string;
}

export interface SpecialtyArea {
  title: string;
  frameworks: string;
  methods: string;
  achievement: string;
  icon: string;
  color: string;
  details?: {
    applications: string[];
    techniques: string[];
    tools: string[];
  };
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

// 活動・経験関連の型定義
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  details: string[];
  color: string;
  achievements?: string[];
}

export interface MajorProject {
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
  detailPageId?: string; // 新しいフィールドを追加
  details?: {
    responsibilities?: string[];
    achievements?: string[];
    skillsDeveloped?: string[];
  };
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

export interface EducationProgram {
  teachingLicenses: string[];
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

export interface ActivitiesData {
  activities: {
    timeline: TimelineItem[];
    majorProjects: MajorProject[];
  };
  growthStory: GrowthStory;
  education: EducationProgram;
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
  targets?: string[];
}

export interface FutureGoals {
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
  skills?: string[];
  connection?: string;
}

export interface VisionData {
  futureGoals: FutureGoals;
  socialMessage: SocialMessage;
  hobbies: Hobby[];
}

// コンタクト関連の型定義
export interface ContactInfo {
  platform: string;
  handle: string;
  url: string;
  icon: string;
  color: string;
  bgColor: string;
  isActive: boolean;
  description?: string;
  priority?: number;
  note?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  rows?: number;
}

export interface ContactType {
  type: string;
  title: string;
  description: string;
}

export interface ContactForm {
  title: string;
  description: string;
  contactTypes?: ContactType[];
  fields: FormField[];
  submitText: string;
  submitMessage: string;
}

export interface ContactsData {
  contacts: ContactInfo[];
  form: ContactForm;
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
  detail?: string;
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

export interface DevelopmentNotice {
  show: boolean;
  message: string;
  icon: string;
  style: {
    backgroundColor: string;
    borderColor: string;
    textColor: string;
  };
}

export interface HomeData {
  developmentNotice: DevelopmentNotice;
  highlights: Highlight[];
  navigationCards: NavigationCard[];
  quickFacts: QuickFact[];
  ctaSection: CTASection;
}

// SEO関連の型定義
export interface SiteInfo {
  baseUrl: string;
  name: string;
  author: string;
  themeColor: string;
  defaultLanguage: string;
  techStack: string;
  searchTemplate: string;
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

// プロジェクト関連の型定義（projects.json用）
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  image: string;
  github: string;
  demo: string;
  demoType: 'video' | 'audio' | 'interactive' | 'external';
  videos: string[];
  audios: string[];
  challenges: string[];
  learned: string[];
}

export type ProjectsData = Project[];

// 課外活動詳細ページ関連の型定義
export interface ActivityBasicInfo {
  value: string;
  label: string;
  color: string;
}

export interface ActivityMedia {
  images: string[];
  videos: string[];
  audios?: string[];
}

// セクションコンテンツの具体的な型定義
export interface OverviewContent {
  concept: string;
  backgroundChallenges: string[];
  innovation: {
    traditional: string;
    proposed: string;
  };
  vision: string;
}

export interface CompetitionInfoContent {
  name: string;
  description: string;
  characteristics: string[];
  tasks: string[];
}

export interface TeamInfoContent {
  totalMembers: string | number;
  membersSummary: string;
  divisions: Array<{
    name: string;
    members: string | number;
    role: string;
    responsibilities: string[];
  }>;
  schedule: {
    frequency: string;
    weekdayHours: string;
    weekendHours: string;
  };
  departments: string[];
}

export interface TechnologyGridContent {
  domains: Array<{
    name: string;
    description: string;
  }>;
}

export interface TimelineContent {
  phases: Array<{
    period: string;
    title: string;
    description: string;
    activities: string[];
  }>;
  worldChampionshipNote?: {
    title: string;
    explanation: string;
    reasoning: string;
    significance: string;
  };
}

export interface SkillsGridContent {
  skills: string[];
}

export interface ContributionsContent {
  technicalDevelopment: string[];
  organizationalManagement: string[];
}

export interface MotivationContent {
  motivation: string;
  initialChallenges: string[];
}

export interface GrowthStepsContent {
  approach: Array<{
    step: number;
    title: string;
    description: string;
    color: 'red' | 'yellow' | 'green';
  }>;
  strategies: string[];
}

export interface RobotsInfoContent {
  current: Array<{
    name: string;
    features: string[];
  }>;
  philosophy: string;
}

export interface AchievementsContent {
  international: Array<{
    title: string;
    event: string;
    year: string;
  }>;
  domestic: Array<{
    title: string;
    event: string;
    year: string;
  }>;
}

export interface CompetitionDetailContent {
  competition: {
    name: string;
    category: string;
    format: string;
    personalAchievement: string;
  };
  theme: string;
}

export interface ProductFeaturesContent {
  title: string;
  subtitle: string;
  features: Array<{
    name: string;
    description: string;
  }>;
}

export interface TechnicalDetailsContent {
  dataFlow: string[];
  technologies: Array<{
    category: string;
    tech: string;
  }>;
}

export interface FuturePlansContent {
  safetyAndConvenience: Array<{
    name: string;
    description: string;
  }>;
}

export interface SocialImpactContent {
  mission: string;
  impact: string[];
}

export interface YearAchievementsContent {
  achievements: Array<{
    period: string;
    title: string;
    description: string;
    outcome: string;
  }>;
}

// セクションコンテンツのユニオン型
export type ActivitySectionContent =
  | OverviewContent
  | CompetitionInfoContent
  | TeamInfoContent
  | TechnologyGridContent
  | TimelineContent
  | SkillsGridContent
  | ContributionsContent
  | MotivationContent
  | GrowthStepsContent
  | RobotsInfoContent
  | AchievementsContent
  | CompetitionDetailContent
  | ProductFeaturesContent
  | TechnicalDetailsContent
  | FuturePlansContent
  | SocialImpactContent
  | YearAchievementsContent;

export interface ActivitySection {
  id: string;
  title: string;
  type:
    | 'overview'
    | 'competition-info'
    | 'team-info'
    | 'technology-grid'
    | 'timeline'
    | 'skills-grid'
    | 'contributions'
    | 'motivation'
    | 'growth-steps'
    | 'robots-info'
    | 'achievements'
    | 'competition-detail'
    | 'product-features'
    | 'technical-details'
    | 'future-plans'
    | 'social-impact'
    | 'year-achievements';
  backgroundColor?: string;
  content: ActivitySectionContent;
}

export interface ActivityDetail {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  teamSize: string;
  myPosition: string;
  firstCompetition?: string;
  achievement?: string;
  category: string;
  status?: string;
  basicInfo: ActivityBasicInfo[];
  keywords: string[];
  media: ActivityMedia;
  sections: ActivitySection[];
  note?: string;
}

export interface ActivityDetailsData {
  activities: Record<string, ActivityDetail>;
}
