import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import LazyImage from '../components/LazyImage';
import MediaPlayer from '../components/MediaPlayer';
import SEO from '../components/SEO';
import activityDetailsData from '../data/activityDetails.json';
import type {
  ActivitySection,
  ActivityDetail,
  CompetitionInfoContent,
  OverviewContent,
  TeamInfoContent,
  TechnologyGridContent,
  TimelineContent,
  SkillsGridContent,
  ContributionsContent,
  MotivationContent,
  GrowthStepsContent,
  RobotsInfoContent,
  AchievementsContent,
  CompetitionDetailContent,
  ProductFeaturesContent,
  TechnicalDetailsContent,
  FuturePlansContent,
  SocialImpactContent,
  YearAchievementsContent,
} from '../types/dataModels';

const ActivityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedMedia, setSelectedMedia] = useState<{
    type: 'image' | 'video' | 'audio';
    src: string;
  } | null>(null);

  const typedActivityData = activityDetailsData as {
    activities: Record<string, ActivityDetail>;
  };
  const activity = id ? typedActivityData.activities[id] : null;

  if (!activity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            活動が見つかりません
          </h1>
          <Link
            to="/experience"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            経験ページに戻る
          </Link>
        </div>
      </div>
    );
  }

  const SectionContent = ({ section }: { section: ActivitySection }) => {
    const backgroundColor = section.backgroundColor || 'bg-white';
    const content = section.content;

    const renderOverview = () => {
      const overviewContent = content as OverviewContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg shadow-sm`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="space-y-6">
            {overviewContent.concept && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  コンセプト
                </h3>
                <p className="text-gray-700 text-lg">
                  {overviewContent.concept}
                </p>
              </div>
            )}

            {overviewContent.backgroundChallenges && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-600">
                  社会的背景・課題
                </h3>
                <ul className="space-y-2">
                  {overviewContent.backgroundChallenges.map(
                    (challenge: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            {overviewContent.innovation && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-600">
                  技術革新
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-2">
                      従来手法
                    </h4>
                    <p className="text-gray-700">
                      {overviewContent.innovation.traditional}
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">
                      提案手法
                    </h4>
                    <p className="text-gray-700">
                      {overviewContent.innovation.proposed}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {overviewContent.vision && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-orange-600">
                  将来ビジョン
                </h3>
                <p className="text-gray-700 text-lg">
                  {overviewContent.vision}
                </p>
              </div>
            )}
          </div>
        </div>
      );
    };

    const renderCompetitionInfo = () => {
      const typedContent = content as CompetitionInfoContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                競技概要
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                {typedContent.description}
              </p>

              {typedContent.characteristics && (
                <>
                  <h4 className="text-lg font-semibold mb-3">競技の特徴</h4>
                  <ul className="space-y-2">
                    {typedContent.characteristics.map(
                      (characteristic: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            {characteristic}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </>
              )}
            </div>

            {typedContent.tasks && (
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  実現可能なタスク例
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {typedContent.tasks.map((task: string, index: number) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <span className="text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      );
    };

    const renderTeamInfo = () => {
      const teamContent = content as TeamInfoContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg shadow-sm`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {teamContent.totalMembers}名
              </div>
              <p className="text-gray-600">{teamContent.membersSummary}</p>
            </div>

            {teamContent.divisions && (
              <div className="grid md:grid-cols-3 gap-6">
                {teamContent.divisions.map((division, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">
                      {division.name}
                    </h3>
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      {division.members}名
                    </div>
                    <p className="text-gray-700 mb-3">{division.role}</p>
                    <ul className="space-y-1">
                      {division.responsibilities.map(
                        (responsibility: string, idx: number) => (
                          <li key={idx} className="text-sm text-gray-600">
                            • {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {teamContent.schedule && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">活動体制</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">活動頻度・時間</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• {teamContent.schedule.frequency}</li>
                      <li>• 平日: {teamContent.schedule.weekdayHours}</li>
                      <li>• 休日: {teamContent.schedule.weekendHours}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">参加学科</h4>
                    <ul className="space-y-1 text-gray-700">
                      {teamContent.departments.map(
                        (dept: string, index: number) => (
                          <li key={index}>• {dept}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    };

    const renderTechnologyGrid = () => {
      const techContent = content as TechnologyGridContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techContent.domains.map((domain, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-600">
                  {domain.name}
                </h3>
                <p className="text-gray-700">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

    const renderTimeline = () => {
      const timelineContent = content as TimelineContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg shadow-sm`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="space-y-6">
            {timelineContent.phases.map((phase, index: number) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-blue-600">
                      {phase.title}
                    </h3>
                    <span className="text-gray-500 font-medium">
                      {phase.period}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.activities.map(
                      (activity: string, actIdx: number) => (
                        <li key={actIdx} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600">{activity}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}

            {timelineContent.worldChampionshipNote && (
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-yellow-800">
                  {timelineContent.worldChampionshipNote.title}
                </h4>
                <p className="text-gray-700 mb-2">
                  <strong>選択理由:</strong>{' '}
                  {timelineContent.worldChampionshipNote.explanation}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>背景:</strong>{' '}
                  {timelineContent.worldChampionshipNote.reasoning}
                </p>
                <p className="text-gray-700">
                  <strong>意義:</strong>{' '}
                  {timelineContent.worldChampionshipNote.significance}
                </p>
              </div>
            )}
          </div>
        </div>
      );
    };

    const renderSkillsGrid = () => {
      const skillsContent = content as SkillsGridContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsContent.skills.map((skill: string, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg shadow-sm"
              >
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      );
    };

    const renderContributions = () => {
      const contributionsContent = content as ContributionsContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                技術開発
              </h3>
              <ul className="space-y-3">
                {contributionsContent.technicalDevelopment.map(
                  (contribution: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{contribution}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                組織運営
              </h3>
              <ul className="space-y-3">
                {contributionsContent.organizationalManagement.map(
                  (contribution: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{contribution}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      );
    };

    const renderMotivation = () => {
      const motivationContent = content as MotivationContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg shadow-sm`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">動機</h3>
              <p className="text-gray-700 leading-relaxed">
                {motivationContent.motivation}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-600">
                初期の課題
              </h3>
              <ul className="space-y-2">
                {motivationContent.initialChallenges.map(
                  (challenge: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      );
    };

    const renderGrowthSteps = () => {
      const growthContent = content as GrowthStepsContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg shadow-sm`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                段階的アプローチ
              </h3>
              <div className="space-y-4">
                {growthContent.approach.map((step, index: number) => {
                  const colorClasses = {
                    red: 'bg-red-50 border-red-200 text-red-800',
                    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800',
                    green: 'bg-green-50 border-green-200 text-green-800',
                  };
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-l-4 ${colorClasses[step.color]}`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{step.title}</h4>
                          <p className="text-sm opacity-90">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                具体的戦略
              </h3>
              <ul className="space-y-2">
                {growthContent.strategies.map(
                  (strategy: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{strategy}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      );
    };

    const renderRobotsInfo = () => {
      const robotsContent = content as RobotsInfoContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {robotsContent.current.map((robot, index: number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">
                    {robot.name}
                  </h3>
                  <ul className="space-y-2">
                    {robot.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                開発哲学
              </h3>
              <p className="text-gray-700">{robotsContent.philosophy}</p>
            </div>
          </div>
        </div>
      );
    };

    const renderAchievements = () => {
      const achievementsContent = content as AchievementsContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                国際大会実績
              </h3>
              <div className="space-y-4">
                {achievementsContent.international.map(
                  (achievement, index: number) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800">
                        {achievement.title}
                      </h4>
                      <p className="text-blue-700">{achievement.event}</p>
                      <span className="text-blue-600 text-sm">
                        {achievement.year}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                国内大会実績
              </h3>
              <div className="space-y-4">
                {achievementsContent.domestic.map(
                  (achievement, index: number) => (
                    <div key={index} className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800">
                        {achievement.title}
                      </h4>
                      <p className="text-green-700">{achievement.event}</p>
                      <span className="text-green-600 text-sm">
                        {achievement.year}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      );
    };

    const renderCompetitionDetail = () => {
      const competitionContent = content as CompetitionDetailContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">
                大会詳細
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800">大会名</h4>
                  <p className="text-gray-700">
                    {competitionContent.competition.name}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">カテゴリー</h4>
                  <p className="text-gray-700">
                    {competitionContent.competition.category}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">形式</h4>
                  <p className="text-gray-700">
                    {competitionContent.competition.format}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">個人成果</h4>
                  <p className="text-gray-700">
                    {competitionContent.competition.personalAchievement}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">
                テーマ
              </h3>
              <p className="text-gray-700 text-lg">
                {competitionContent.theme}
              </p>
            </div>
          </div>
        </div>
      );
    };

    const renderProductFeatures = () => {
      const productContent = content as ProductFeaturesContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {productContent.title}
              </h3>
              <p className="text-xl text-gray-600">{productContent.subtitle}</p>
            </div>
            <div className="space-y-6">
              {productContent.features.map((feature, index: number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-3 text-blue-600">
                    {feature.name}
                  </h4>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    const renderTechnicalDetails = () => {
      const techContent = content as TechnicalDetailsContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                データフロー
              </h3>
              <div className="space-y-3">
                {techContent.dataFlow.map((flow: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{flow}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                技術スタック
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {techContent.technologies.map((tech, index: number) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <h4 className="font-semibold text-green-700">
                      {tech.category}
                    </h4>
                    <p className="text-gray-700">{tech.tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    };

    const renderFuturePlans = () => {
      const futureContent = content as FuturePlansContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureContent.safetyAndConvenience.map((plan, index: number) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-green-600">
                  {plan.name}
                </h3>
                <p className="text-gray-700">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

    const renderSocialImpact = () => {
      const socialContent = content as SocialImpactContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                ミッション
              </h3>
              <p className="text-gray-700 text-lg">{socialContent.mission}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">
                社会的インパクト
              </h3>
              <ul className="space-y-3">
                {socialContent.impact.map((impact: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    };

    const renderYearAchievements = () => {
      const yearContent = content as YearAchievementsContent;
      return (
        <div className={`${backgroundColor} p-8 rounded-lg`}>
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div className="space-y-6">
            {yearContent.achievements.map((achievement, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-orange-600">
                    {achievement.title}
                  </h3>
                  <span className="text-gray-500 font-medium">
                    {achievement.period}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{achievement.description}</p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">成果</h4>
                  <p className="text-orange-700">{achievement.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

    switch (section.type) {
      case 'overview':
        return renderOverview();
      case 'competition-info':
        return renderCompetitionInfo();
      case 'team-info':
        return renderTeamInfo();
      case 'technology-grid':
        return renderTechnologyGrid();
      case 'timeline':
        return renderTimeline();
      case 'skills-grid':
        return renderSkillsGrid();
      case 'contributions':
        return renderContributions();
      case 'motivation':
        return renderMotivation();
      case 'growth-steps':
        return renderGrowthSteps();
      case 'robots-info':
        return renderRobotsInfo();
      case 'achievements':
        return renderAchievements();
      case 'competition-detail':
        return renderCompetitionDetail();
      case 'product-features':
        return renderProductFeatures();
      case 'technical-details':
        return renderTechnicalDetails();
      case 'future-plans':
        return renderFuturePlans();
      case 'social-impact':
        return renderSocialImpact();
      case 'year-achievements':
        return renderYearAchievements();
      default:
        return (
          <div className={`${backgroundColor} p-8 rounded-lg`}>
            <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
            <p className="text-gray-600">
              このセクションタイプはまだ実装されていません: {section.type}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <SEO
        title={`${activity.title} - 久米颯紀のポートフォリオ`}
        description={activity.description}
        keywords={activity.keywords}
        type="article"
      />

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/experience"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              経験一覧に戻る
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
              {activity.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {activity.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{activity.subtitle}</p>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {activity.description}
            </p>
          </div>

          {/* Basic Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {activity.basicInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-50 rounded-lg"
              >
                <dt className="text-sm font-medium text-gray-500 mb-1">
                  {info.label}
                </dt>
                <dd className={`text-lg font-semibold text-${info.color}-600`}>
                  {info.value}
                </dd>
              </div>
            ))}
          </div>

          {/* Media Gallery */}
          {(activity.media.images.length > 0 ||
            activity.media.videos.length > 0 ||
            (activity.media.audios && activity.media.audios.length > 0)) && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                メディア
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activity.media.images.map((image, index) => (
                  <div
                    key={`img-${index}`}
                    className="cursor-pointer"
                    onClick={() =>
                      setSelectedMedia({ type: 'image', src: image })
                    }
                  >
                    <LazyImage
                      src={image}
                      alt={`${activity.title} - 画像 ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
                {activity.media.videos.map((video, index) => (
                  <div
                    key={`vid-${index}`}
                    className="cursor-pointer"
                    onClick={() =>
                      setSelectedMedia({ type: 'video', src: video })
                    }
                  >
                    <video className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform">
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                ))}
                {activity.media.audios &&
                  activity.media.audios.map((audio, index) => (
                    <div
                      key={`aud-${index}`}
                      className="cursor-pointer"
                      onClick={() =>
                        setSelectedMedia({ type: 'audio', src: audio })
                      }
                    >
                      <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                        <svg
                          className="w-12 h-12 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {activity.sections.map((section, index) => (
            <SectionContent key={section.id || index} section={section} />
          ))}
        </div>

        {/* Note */}
        {activity.note && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">注記</h3>
            <p className="text-blue-700">{activity.note}</p>
          </div>
        )}
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{activity.title}</h3>
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4">
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.src}
                  alt={activity.title}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <MediaPlayer
                  type={selectedMedia.type}
                  src={selectedMedia.src}
                  title={activity.title}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityDetail;
