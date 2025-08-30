import { Link } from 'react-router-dom';

const Home = () => {
  const highlights = [
    {
      icon: '🏆',
      title: 'Hackit 2025',
      subtitle: 'ハッカソン最優秀賞受賞',
      description: 'Sleep Buster - AI音声分析による睡眠改善支援アプリ',
      color: 'from-yellow-400 to-orange-500',
      link: '/works',
    },
    {
      icon: '🥈',
      title: 'RoboCup日本大会',
      subtitle: 'オープンチャレンジ 6チーム中2位',
      description: 'ロボットが家族の一員となるシステムの開発',
      color: 'from-blue-500 to-purple-600',
      link: '/experience',
    },
    {
      icon: '💼',
      title: 'プロジェクト運営',
      subtitle: '74名組織のサブリーダー',
      description: '技術開発とチームマネジメントの両立',
      color: 'from-green-500 to-teal-600',
      link: '/experience',
    },
  ];

  const navigationCards = [
    {
      title: 'About Me',
      description: '人生のミッション・行動理念・強みをご紹介',
      icon: '👤',
      color: 'text-blue-600',
      hoverColor: 'hover:bg-blue-50',
      link: '/about',
      details: '自己紹介・価値観・転換点となった体験',
    },
    {
      title: 'Technical Skills',
      description: 'プログラミング言語・専門技術・評価実績',
      icon: '💻',
      color: 'text-green-600',
      hoverColor: 'hover:bg-green-50',
      link: '/skills',
      details: 'Python・JavaScript・MATLAB・AI・音響技術',
    },
    {
      title: 'Experience',
      description: '活動実績・成長ストーリー・資格検定',
      icon: '📈',
      color: 'text-purple-600',
      hoverColor: 'hover:bg-purple-50',
      link: '/experience',
      details: 'RoboCup・学生ステーション・教職課程',
    },
    {
      title: 'Vision & Values',
      description: '将来ビジョン・価値観・趣味特技',
      icon: '🎯',
      color: 'text-orange-600',
      hoverColor: 'hover:bg-orange-50',
      link: '/vision',
      details: '音楽バリアフリー・技術哲学・Beatbox',
    },
    {
      title: 'Works',
      description: '主要プロジェクト・作品・技術的挑戦',
      icon: '🚀',
      color: 'text-red-600',
      hoverColor: 'hover:bg-red-50',
      link: '/works',
      details: 'Sleep Buster・MATLAB楽曲・AI体験ブース',
    },
    {
      title: 'Contact',
      description: 'お問い合わせ・SNSリンク',
      icon: '📧',
      color: 'text-teal-600',
      hoverColor: 'hover:bg-teal-50',
      link: '/contact',
      details: 'GitHub・Email・ポートフォリオサイト',
    },
  ];

  return (
    <div className="space-y-8 lg:space-y-16">
      {/* Hero Section */}
      <section className="text-center py-8 lg:py-16">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-4xl text-white">👋</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            久米蒼輝 (KUME Soki)
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 mb-2">
            金沢工業大学 工学部 情報工学科 3年
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-blue-600 max-w-3xl mx-auto px-4 mb-8">
            「できない」を「できる」に変えるテクノロジスト
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 max-w-5xl mx-auto mb-8">
          <div className="mb-4">
            <span className="text-3xl">🌟</span>
          </div>
          <h2 className="text-lg font-semibold mb-4">人生のミッション</h2>
          <blockquote className="text-lg sm:text-xl font-medium mb-4">
            "テクノロジーの力で、一人ひとりの『できない』を『できる』に変え、誰もが自分の可能性を最大限に発揮できる世界をつくること"
          </blockquote>
          <p className="text-blue-100">
            この想いが、私のすべての活動と学習の原動力となっています。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <span className="text-3xl mb-3 block">🧠</span>
            <h3 className="text-lg font-semibold mb-2 text-blue-800">
              技術×教育
            </h3>
            <p className="text-blue-700 text-sm">
              複雑な技術を誰もが楽しめる体験に「翻訳」
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <span className="text-3xl mb-3 block">🎯</span>
            <h3 className="text-lg font-semibold mb-2 text-green-800">
              課題解決思考
            </h3>
            <p className="text-green-700 text-sm">
              困難な課題を段階的に解決する戦略的思考
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
            <span className="text-3xl mb-3 block">💝</span>
            <h3 className="text-lg font-semibold mb-2 text-purple-800">
              共感力
            </h3>
            <p className="text-purple-700 text-sm">
              多様な人々の視点に立って考える理解力
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
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

      {/* Highlights Section */}
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

      {/* Quick Facts */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          クイック ファクト
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <p className="text-gray-600 text-sm">年間の大学生活</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">6+</div>
            <p className="text-gray-600 text-sm">プログラミング言語</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">74</div>
            <p className="text-gray-600 text-sm">名規模組織でのリーダー経験</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
            <p className="text-gray-600 text-sm">教員免許取得予定数</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-4">
          お気軽にお問い合わせください
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          技術的なディスカッション、プロジェクトのご相談、採用に関するお話など、
          どのようなことでもお気軽にご連絡ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            📧 お問い合わせ
          </Link>
          <a
            href="https://github.com/Soki0909"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium"
          >
            🐙 GitHub で見る
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
