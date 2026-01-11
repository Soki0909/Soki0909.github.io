import { Link } from 'react-router-dom';
import profileData from '../data/profile.json';
import SEO from '../components/SEO';

/**
 * Profile Page - プロフィールページ
 * 久米蒼輝の詳細なプロフィール・実績・スキルを表示
 */
const Profile = () => {
  const {
    personal,
    education,
    mission,
    principles,
    achievements,
    selfIntroduction,
    turningPoints,
    personalityType,
  } = profileData;

  return (
    <>
      <SEO
        title="プロフィール"
        description="久米蒼輝のプロフィール。AI・機械学習・Web開発・音響信号処理を専門とするエンジニア。"
        keywords={['久米蒼輝', 'プロフィール', 'エンジニア', 'AI', '機械学習']}
        type="profile"
        url="https://soki0909.github.io/profile"
      />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-100 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 transition-colors font-mono text-sm"
            >
              ← Back to Hub
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-12">
          {/* Personal Info */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/assets/icons/logo.png"
                alt="久米蒼輝"
                className="w-24 h-24 rounded-full"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {personal.name}
                </h1>
                <p className="text-lg text-gray-500 font-mono">
                  {personal.nameEn}
                </p>
                <p className="text-sm text-gray-400">
                  {personal.birthPlace} / {personal.birthday}
                </p>
              </div>
            </div>
          </section>

          {/* Self Introduction */}
          {selfIntroduction && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="font-mono text-gray-400">{'// '}</span>
                {selfIntroduction.title}
              </h2>
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed">
                  {selfIntroduction.content}
                </p>
              </div>
            </section>
          )}

          {/* Personality Type */}
          {personalityType && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="font-mono text-gray-400">{'// '}</span>
                性格タイプ
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-lg font-medium text-gray-900 mb-2">
                  {personalityType.result}
                </p>
                <p className="text-sm text-gray-600">
                  {personalityType.description}
                </p>
              </div>
            </section>
          )}

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="font-mono text-gray-400">{'// '}</span>
              学歴
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                {education.university}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {education.details.currentStatus}
              </p>
              <div className="space-y-2">
                {education.details.academicFocus.map((focus, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span className="text-sm text-gray-700">{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="font-mono text-gray-400">{'// '}</span>
              {mission.title}
            </h2>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-lg text-gray-700 mb-2">{mission.content}</p>
              <p className="text-sm text-gray-500">{mission.description}</p>
            </div>
          </section>

          {/* Strengths */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="font-mono text-gray-400">{'// '}</span>
              {principles.strengths.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {principles.strengths.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="font-mono text-gray-400">{'// '}</span>
              実績・受賞歴
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-blue-600 mb-1">
                        {achievement.subtitle}
                      </p>
                      <p className="text-sm text-gray-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Action Principle */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="font-mono text-gray-400">{'// '}</span>
              {principles.actionPrinciple.title}
            </h2>
            <div className="bg-gray-900 text-white rounded-lg p-6">
              <blockquote className="text-lg font-medium mb-4">
                「{principles.actionPrinciple.quote}」
              </blockquote>
              <p className="text-gray-300 text-sm">
                {principles.actionPrinciple.description}
              </p>
            </div>
          </section>

          {/* Turning Points */}
          {turningPoints && turningPoints.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="font-mono text-gray-400">{'// '}</span>
                ターニングポイント
              </h2>
              <div className="space-y-4">
                {turningPoints.map((point, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-6 border-l-4 border-amber-400"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{point.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {point.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Back to Hub */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← ホームに戻る
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;
