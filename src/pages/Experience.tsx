import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import LazyImage from '../components/LazyImage';
import { getExperienceData, getPageSEO } from '../utils/dataLoader';

const Experience = () => {
  // データファイルから経験・活動実績情報を取得
  const experienceData = getExperienceData();
  const pageSEO = getPageSEO('experience');
  const { timelineItems, majorActivities, categories, stats } = experienceData;

  return (
    <PageLayout
      title={pageSEO.title}
      description={pageSEO.description}
      keywords={pageSEO.keywords}
      seoType={pageSEO.type as 'website' | 'article' | 'profile'}
      seoUrl={`${pageSEO.site.baseUrl}/experience`}
      headerTitle="体験・活動実績"
      headerDescription="技術プロジェクトから教育活動まで、多様な経験を通じて成長し続けています。「できない」を「できる」に変える技術者を目指した軌跡をご紹介します。"
    >
      {/* 統計情報 */}
      <section className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600">
              {stats.totalActivities}
            </div>
            <div className="text-sm text-gray-600">主要活動</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">
              {stats.totalYears}
            </div>
            <div className="text-sm text-gray-600">活動年数</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600">
              {stats.teamLeadership}
            </div>
            <div className="text-sm text-gray-600">リーダー経験</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-orange-600">
              {stats.majorAchievements}
            </div>
            <div className="text-sm text-gray-600">主要成果</div>
          </div>
        </div>
      </section>

      {/* タイムライン */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          成長の軌跡
        </h2>
        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold flex-shrink-0`}
                >
                  {item.year.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.year}: {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 主要活動 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          主要活動
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {majorActivities.map((activity) => (
            <Link
              key={activity.id}
              to={`/activity/${activity.id}`}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <LazyImage
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full bg-${activity.type === 'technical-project' ? 'blue' : activity.type === 'education-internship' ? 'green' : activity.type === 'education-activity' ? 'purple' : 'orange'}-100 text-${activity.type === 'technical-project' ? 'blue' : activity.type === 'education-internship' ? 'green' : activity.type === 'education-activity' ? 'purple' : 'orange'}-800`}
                  >
                    {categories.find((cat) => cat.id === activity.type)?.name ||
                      activity.type}
                  </span>
                  <span className="text-xs text-gray-500">
                    {activity.period}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {activity.subtitle}
                </p>
                <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                  {activity.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>役割: {activity.role}</span>
                  <span className="font-medium text-blue-600">
                    詳細を見る →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* カテゴリー */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          活動カテゴリー
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg p-4 text-center shadow-sm"
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-full bg-${category.color}-100 flex items-center justify-center`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-${category.color}-500`}
                ></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {category.name}
              </h3>
              <p className="text-xs text-gray-600 mb-2">
                {category.description}
              </p>
              <span className="text-lg font-bold text-gray-800">
                {category.count}
              </span>
              <span className="text-sm text-gray-500 ml-1">活動</span>
            </div>
          ))}
        </div>
      </section>

      {/* 技術スキル概要 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          習得技術スキル
        </h2>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {stats.technicalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 影響領域 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          影響・貢献領域
        </h2>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {stats.impactAreas.map((area, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Experience;
