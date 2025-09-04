import PageLayout from '../components/PageLayout';
import { getPersonalData, getPageSEO } from '../utils/dataLoader';

const About = () => {
  // データファイルから情報を取得
  const personalData = getPersonalData();
  const pageSEO = getPageSEO('about');
  const {
    basicProfile,
    mission,
    selfIntroduction,
    actionPrinciple,
    strengths,
    personalityType,
    turningPoints,
    contacts,
    keyAchievements,
  } = personalData;

  // 基本プロフィール表示用のデータ構造を作成
  const personalProfile = [
    {
      title: '名前',
      content: basicProfile.name,
      subContent: basicProfile.nameEn,
      icon: '👤',
    },
    {
      title: '所属',
      content: basicProfile.university,
      subContent: basicProfile.universityEn,
      icon: '🎓',
    },
    {
      title: '出身地',
      content: basicProfile.birthPlace,
      subContent: basicProfile.birthPlaceEn,
      icon: '📍',
    },
    {
      title: '誕生日',
      content: basicProfile.birthday,
      subContent: basicProfile.birthdayEn,
      icon: '🎂',
    },
  ];

  return (
    <PageLayout
      title={pageSEO.title}
      description={pageSEO.description}
      keywords={pageSEO.keywords}
      seoType={pageSEO.type as 'website' | 'article' | 'profile'}
      seoUrl={`${pageSEO.site.baseUrl}/about`}
      headerTitle="About Me"
      headerDescription="私の経歴、価値観、そして技術への想いをご紹介します。"
    >
      <div>
        {/* 人生のミッション */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
            <div className="mb-4">
              <span className="text-4xl">🌟</span>
            </div>
            <h2 className="text-2xl font-semibold mb-4">{mission.title}</h2>
            <blockquote className="text-xl font-medium mb-4">
              "{mission.content}"
            </blockquote>
            <p className="text-blue-100">{mission.description}</p>
          </div>
        </div>

        {/* 自己紹介 */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-3">💬</span>
              {selfIntroduction.title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {selfIntroduction.content
                .split('**')
                .map((part, index) =>
                  index % 2 === 1 ? <strong key={index}>{part}</strong> : part
                )}
            </p>
          </div>
        </div>

        {/* 基本プロフィールと連絡先 */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">基本プロフィール</h2>
            <div className="space-y-4">
              {personalProfile.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                  </div>
                  <p className="text-gray-800 font-medium">{item.content}</p>
                  {item.subContent && (
                    <p className="text-gray-500 text-sm mt-1">
                      {item.subContent}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">主な実績</h2>
            <div className="space-y-3">
              {keyAchievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-3">
                    <span
                      className={`w-8 h-8 ${achievement.color} rounded-full flex items-center justify-center text-white text-lg flex-shrink-0`}
                    >
                      {achievement.icon}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 text-sm font-medium">
                        {achievement.subtitle}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 連絡先 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">連絡先</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white rounded-lg shadow-md p-4 transition-colors duration-200 ${contact.color} block`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{contact.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800">
                      {contact.platform}
                    </h3>
                    <p className="text-gray-600 text-sm truncate">
                      {contact.handle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 行動理念 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            {actionPrinciple.title}
          </h2>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8">
            <div className="text-center mb-4">
              <span className="text-4xl">⚡</span>
            </div>
            <blockquote className="text-lg font-medium text-gray-800 mb-4 text-center">
              "{actionPrinciple.quote}"
            </blockquote>
            <p className="text-gray-600 leading-relaxed">
              {actionPrinciple.description
                .split('**')
                .map((part, index) =>
                  index % 2 === 1 ? <strong key={index}>{part}</strong> : part
                )}
            </p>
          </div>
        </div>

        {/* 転換点となった体験 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">転換点となった体験</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {turningPoints.map((turningPoint, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{turningPoint.icon}</span>
                  <h3 className="text-lg font-semibold">
                    {turningPoint.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {turningPoint.description
                    .split('**')
                    .map((part, index) =>
                      index % 2 === 1 ? (
                        <strong key={index}>{part}</strong>
                      ) : (
                        part
                      )
                    )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 強み・価値提案 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{strengths.title}</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-4">
              <span className="text-4xl">🛠️</span>
            </div>
            <blockquote className="text-lg font-medium text-gray-800 mb-4 text-center">
              "{strengths.quote}"
            </blockquote>
            <p className="text-gray-600 leading-relaxed text-center">
              {strengths.description}
            </p>
          </div>
        </div>

        {/* 独自の強み */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">独自の強み</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.items.map((strength, index) => {
              const colorClasses = {
                blue: 'from-blue-50 to-blue-100 text-blue-800 text-blue-700',
                green:
                  'from-green-50 to-green-100 text-green-800 text-green-700',
                purple:
                  'from-purple-50 to-purple-100 text-purple-800 text-purple-700',
              };
              const colorClass =
                colorClasses[strength.color as keyof typeof colorClasses] ||
                colorClasses.blue;
              const [bgClass, titleClass, descClass] = colorClass.split(' ');

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${bgClass} rounded-lg p-6 text-center`}
                >
                  <span className="text-3xl mb-3 block">{strength.icon}</span>
                  <h3 className={`text-lg font-semibold mb-2 ${titleClass}`}>
                    {strength.title}
                  </h3>
                  <p className={`text-sm ${descClass}`}>
                    {strength.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 性格診断結果 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">性格診断結果</h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 text-center">
            <span className="text-4xl mb-4 block">🎭</span>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              「{personalityType.result}」
            </h3>
            <p className="text-gray-600 text-sm">
              {personalityType.description}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
