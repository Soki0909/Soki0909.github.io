import SEO from '../components/SEO';
import { getExperienceData } from '../utils/dataLoader';

const Experience = () => {
  // データファイルから経験・活動実績情報を取得
  const experienceData = getExperienceData();
  const {
    timelineItems,
    majorActivities,
    growthStory,
    teachingCourse,
    qualifications,
    plannedQualifications,
  } = experienceData;

  return (
    <>
      <SEO
        title="活動実績・経験"
        description="久米蒼輝の活動実績と成長ストーリー。RoboCup日本大会での成果、ハッカソン受賞、プロジェクトリーダー経験、教職課程での学びをご紹介します。"
        keywords={[
          '久米蒼輝',
          '活動実績',
          '経験',
          'RoboCup',
          'ハッカソン',
          'プロジェクトリーダー',
          '教職課程',
          '学生ステーション',
          '成長ストーリー',
          'チームマネジメント',
          'リーダーシップ',
        ]}
        type="website"
        url="https://soki0909.github.io/experience"
      />
      <div className="max-w-6xl mx-auto space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-6">Experience & Activities</h1>
          <p className="text-lg text-gray-600 mb-8">
            大学生活を通じて積み重ねてきた活動実績と成長ストーリーをご紹介します。
            「やっておけばよかった」という後悔をしないため、興味のあることには積極的に挑戦してきました。
          </p>

          {/* 成長のタイムライン */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">成長の軌跡</h2>
            <div className="relative">
              {/* タイムライン軸 */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {/* タイムラインアイテム */}
              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-start space-x-6"
                  >
                    <div
                      className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold">{item.year}</h3>
                        <span className="text-gray-500">-</span>
                        <span className="text-lg text-gray-700">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <ul className="space-y-1">
                        {item.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start space-x-2 text-sm text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 主要活動実績 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">主要活動実績</h2>
            <div className="space-y-8">
              {majorActivities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${activity.color}`}
                  ></div>
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <span className="text-3xl">{activity.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          {activity.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-gray-500 w-16">
                            期間:
                          </span>
                          <span className="text-gray-700">
                            {activity.period}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-gray-500 w-16">
                            規模:
                          </span>
                          <span className="text-gray-700">
                            {activity.scale}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-gray-500 w-16">
                            役職:
                          </span>
                          <span className="text-gray-700">
                            {activity.position}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-gray-500 w-16">
                            成果:
                          </span>
                          <span className="text-gray-700 font-medium">
                            {activity.achievement}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-gray-500 block mb-1">
                            使用技術:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {activity.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500 block mb-1">
                            担当領域:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {activity.myRole.map((role, roleIndex) => (
                              <span
                                key={roleIndex}
                                className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                              >
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 成長ストーリー */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{growthStory.title}</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  🎯 {growthStory.motivation.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {growthStory.motivation.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">当初の課題</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {growthStory.initialChallenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">段階的アプローチ</h4>
                <div className="space-y-4">
                  {growthStory.approach.map((step, index) => {
                    const colorClasses = {
                      red: 'bg-red-100 text-red-600',
                      yellow: 'bg-yellow-100 text-yellow-600',
                      green: 'bg-green-100 text-green-600',
                    };
                    const colorClass =
                      colorClasses[step.color as keyof typeof colorClasses] ||
                      colorClasses.red;

                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <span
                          className={`w-8 h-8 ${colorClass} rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0`}
                        >
                          {step.step}
                        </span>
                        <div>
                          <span className="font-medium">{step.title}:</span>
                          <span className="text-gray-600 ml-2">
                            {step.description}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">克服戦略</h4>
                <ul className="space-y-2">
                  {growthStory.strategies.map((strategy, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        {strategy
                          .split(': ')
                          .map((part, i) =>
                            i === 0 ? <strong key={i}>{part}: </strong> : part
                          )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2 text-green-700">
                  🎉 最終的変化
                </h4>
                <p className="text-gray-700 font-medium">
                  {growthStory.result}
                </p>
              </div>
            </div>
          </div>

          {/* 教職課程・教育関連活動 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              教職課程・教育関連活動
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">
                  📜 教員免許取得予定
                </h3>
                <ul className="space-y-2 text-sm">
                  {teachingCourse.licenses.map((license, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>{license}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">🤝 介護等体験</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">児童福祉施設:</span>
                    <span className="text-gray-600 ml-2">
                      {teachingCourse.caregivingExperience.childWelfare}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">特別支援学校:</span>
                    <span className="text-gray-600 ml-2">
                      {teachingCourse.caregivingExperience.specialEducation}
                    </span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="text-gray-700 text-xs leading-relaxed">
                      <strong>価値観の転換:</strong>{' '}
                      {teachingCourse.caregivingExperience.insight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 資格・検定 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">資格・検定</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* 取得済み資格 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">✅ 取得済み資格</h3>
                <div className="space-y-3">
                  {qualifications.map((qual, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <div>
                        <span className="text-sm font-medium">{qual.name}</span>
                        <span
                          className={`ml-2 px-2 py-1 text-xs rounded-full ${
                            qual.level === '上級'
                              ? 'bg-red-100 text-red-800'
                              : qual.level === '中級'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {qual.level}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{qual.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 挑戦中・予定資格 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">
                  🎯 挑戦中・予定資格
                </h3>
                <div className="space-y-3">
                  {plannedQualifications.map((qual, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 py-2"
                    >
                      <span
                        className={`w-3 h-3 rounded-full ${
                          qual.color === 'orange'
                            ? 'bg-orange-500'
                            : qual.color === 'blue'
                              ? 'bg-blue-500'
                              : 'bg-purple-500'
                        }`}
                      ></span>
                      <div className="flex-1">
                        <span className="text-sm font-medium">{qual.name}</span>
                        <div className="text-xs text-gray-500 mt-1">
                          ({qual.status})
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2">技術評価</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>
                        <strong>paiza Aランク:</strong>{' '}
                        上位15%相当のコーディング能力
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>
                        <strong>EMaT全分野:</strong> 偏差値60以上達成
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;
