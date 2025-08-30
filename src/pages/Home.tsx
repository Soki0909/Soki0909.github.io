import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getHomeData, getPersonalData } from '../utils/dataLoader';

const Home = () => {
  // データファイルから情報を取得
  const homeData = getHomeData();
  const personalData = getPersonalData();

  const { highlights, navigationCards, quickFacts, ctaSection } = homeData;
  const { basicProfile, mission, strengths } = personalData;

  return (
    <>
      <SEO
        title="ホーム"
        description="金沢工業大学 工学部 情報工学科3年 久米蒼輝のポートフォリオサイト。AI・音響技術・Web開発の技術スキルと実績をご紹介します。"
        keywords={[
          '久米蒼輝',
          'KUME Soki',
          'ポートフォリオ',
          'プログラミング',
          'AI',
          '音響技術',
          'Web開発',
          '金沢工業大学',
          '情報工学',
          'RoboCup',
          'ハッカソン',
          'Python',
          'JavaScript',
          'MATLAB',
        ]}
        type="website"
        url="https://soki0909.github.io/"
      />
      <div className="space-y-8 lg:space-y-16">
        {/* ヒーローセクション */}
        <section className="text-center py-8 lg:py-16">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-4xl text-white">👋</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              {basicProfile.name} ({basicProfile.nameEn})
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 mb-2">
              {basicProfile.university}
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-blue-600 max-w-3xl mx-auto px-4 mb-8">
              「できない」を「できる」に変えるテクノロジスト
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 max-w-5xl mx-auto mb-8">
            <div className="mb-4">
              <span className="text-3xl">🌟</span>
            </div>
            <h2 className="text-lg font-semibold mb-4">{mission.title}</h2>
            <blockquote className="text-lg sm:text-xl font-medium mb-4">
              "{mission.content}"
            </blockquote>
            <p className="text-blue-100">{mission.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                  className={`bg-gradient-to-br ${bgClass} rounded-lg p-6`}
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
        </section>

        {/* ナビゲーションカード */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8">
            ポートフォリオ ナビゲーション
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {navigationCards.map((card, index) => (
              <Link
                key={index}
                to={card.link}
                className={`bg-white p-6 lg:p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 ${card.hoverColor} block group`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{card.icon}</span>
                  <h3
                    className={`text-xl font-semibold ${card.color} group-hover:underline`}
                  >
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-3 font-medium">
                  {card.description}
                </p>
                <p className="text-gray-500 text-sm">{card.details}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ハイライトセクション */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8">
            主な実績・ハイライト
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Link
                key={index}
                to={highlight.link}
                className={`bg-gradient-to-r ${highlight.color} text-white rounded-lg p-6 lg:p-8 hover:shadow-xl transition-all hover:scale-105 block group`}
              >
                <div className="text-center">
                  <span className="text-4xl mb-4 block">{highlight.icon}</span>
                  <h3 className="text-lg lg:text-xl font-semibold mb-2 group-hover:underline">
                    {highlight.title}
                  </h3>
                  <p className="text-sm lg:text-base font-medium mb-2 opacity-90">
                    {highlight.subtitle}
                  </p>
                  <p className="text-xs lg:text-sm opacity-80">
                    {highlight.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* クイックファクト */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">
            クイック ファクト
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {quickFacts.map((fact, index) => {
              const colorClasses = {
                blue: 'text-blue-600',
                green: 'text-green-600',
                purple: 'text-purple-600',
                orange: 'text-orange-600',
              };
              const colorClass =
                colorClasses[fact.color as keyof typeof colorClasses] ||
                'text-blue-600';

              return (
                <div key={index}>
                  <div className={`text-3xl font-bold ${colorClass} mb-2`}>
                    {fact.value}
                  </div>
                  <p className="text-gray-600 text-sm">{fact.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTAセクション */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-semibold mb-4">{ctaSection.title}</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {ctaSection.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaSection.buttons.map((button, index) =>
              button.external ? (
                <a
                  key={index}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-8 py-3 rounded-lg transition-colors font-medium ${button.style}`}
                >
                  {button.text}
                </a>
              ) : (
                <Link
                  key={index}
                  to={button.link}
                  className={`inline-block px-8 py-3 rounded-lg transition-colors font-medium ${button.style}`}
                >
                  {button.text}
                </Link>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
