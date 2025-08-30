const About = () => {
  const keyAchievements = [
    {
      icon: '🏆',
      title: 'Hackit 2025ハッカソン',
      subtitle: '最優秀賞受賞',
      description: 'Sleep Buster - AI音声分析による睡眠改善支援アプリ',
      color: 'bg-yellow-500',
    },
    {
      icon: '🥈',
      title: 'RoboCup日本大会',
      subtitle: 'オープンチャレンジ 6チーム中2位',
      description: 'ロボットが家族の一員となるシステムの開発',
      color: 'bg-gray-400',
    },
    {
      icon: '💼',
      title: 'プロジェクトサブリーダー',
      subtitle: '74名規模組織での安全活動リーダー兼務',
      description: '技術開発とチームマネジメントの両立',
      color: 'bg-blue-500',
    },
    {
      icon: '📊',
      title: '技術評価',
      subtitle: 'paiza Aランク・EMaT偏差値60超',
      description: '実践的なプログラミング力と数学的理解力',
      color: 'bg-green-500',
    },
  ];

  const personalProfile = [
    {
      title: '名前',
      content: '久米蒼輝 (くめ そうき)',
      subContent: 'KUME Soki',
      icon: '👤',
    },
    {
      title: '所属',
      content: '金沢工業大学 工学部 情報工学科 3年',
      subContent: 'Kanazawa Institute of Technology',
      icon: '🎓',
    },
    {
      title: '出身地',
      content: '滋賀県大津市',
      subContent: 'Otsu, Shiga Prefecture',
      icon: '📍',
    },
    {
      title: '誕生日',
      content: '9月9日',
      subContent: 'September 9th',
      icon: '🎂',
    },
  ];

  const contacts = [
    {
      platform: 'GitHub',
      handle: 'Soki0909',
      url: 'https://github.com/Soki0909',
      icon: '🐙',
      color: 'hover:bg-gray-100',
    },
    {
      platform: 'Email',
      handle: 'c1302855@st.kanazawa-it.ac.jp',
      url: 'mailto:c1302855@st.kanazawa-it.ac.jp',
      icon: '📧',
      color: 'hover:bg-blue-50',
    },
    {
      platform: 'Portfolio',
      handle: 'soki0909.github.io',
      url: 'https://soki0909.github.io/',
      icon: '🌐',
      color: 'hover:bg-purple-50',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">About Me</h1>

        {/* 人生のミッション */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
            <div className="mb-4">
              <span className="text-4xl">🌟</span>
            </div>
            <h2 className="text-2xl font-semibold mb-4">人生のミッション</h2>
            <blockquote className="text-xl font-medium mb-4">
              "テクノロジーの力で、一人ひとりの『できない』を『できる』に変え、誰もが自分の可能性を最大限に発揮できる世界をつくること"
            </blockquote>
            <p className="text-blue-100">
              この想いが、私のすべての活動と学習の原動力となっています。
            </p>
          </div>
        </div>

        {/* 自己紹介 */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-3">💬</span>
              140字自己紹介
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              高校時代、画像処理AIに興味を持ったことをきっかけに、情報工学科に進学しました。
              一方で、幼少期から音楽が身近な存在であったこと、他学科の音響信号処理を行う科目が面白かったことから、
              音をデータとして扱うことにも興味を持ちました。 現在は、
              <strong>画像、音、AIを掛け合わせて、何かできないか模索</strong>
              しています。
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
          <h2 className="text-2xl font-semibold mb-6">行動理念</h2>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8">
            <div className="text-center mb-4">
              <span className="text-4xl">⚡</span>
            </div>
            <blockquote className="text-lg font-medium text-gray-800 mb-4 text-center">
              "「やっておけばよかった」という後悔だけはしたくない"
            </blockquote>
            <p className="text-gray-600 leading-relaxed">
              その想いが、私を突き動かす原動力です。
              <strong>
                数学、電気、情報、ロボット、教育、デザイン、そして音響
              </strong>
              。
              興味の赴くままに飛び込んできました。「後悔しない」ための挑戦は、これからも続きます。
            </p>
          </div>
        </div>

        {/* 転換点となった体験 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">転換点となった体験</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 高校時代の体験 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">📚</span>
                <h3 className="text-lg font-semibold">
                  高校時代の友人への数学指導
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                友人が「全然わからない」と頭を抱えていた問題を、私の説明で「そういうことか！」と顔を輝かせる瞬間。
                その<strong>「できない」が「できる」に変わる場面</strong>
                に立ち会うことに大きな喜びを感じ、
                人の可能性を広げることへの情熱が芽生えました。
              </p>
            </div>

            {/* 介護等体験 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🤝</span>
                <h3 className="text-lg font-semibold">
                  介護等体験での価値観変化
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                障がいのある方々との体験活動で、当初は「自分とは違う特別な存在」だと感じていました。
                しかし、彼らと過ごす中で気づいたのは、彼らは「できない」のではなく、
                <strong>
                  「『できる』に至るまでのプロセスが少し違うだけ、少し長いだけ」
                </strong>
                だということでした。
              </p>
            </div>
          </div>
        </div>

        {/* 強み・価値提案 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">強み・価値提案</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-4">
              <span className="text-4xl">🛠️</span>
            </div>
            <blockquote className="text-lg font-medium text-gray-800 mb-4 text-center">
              "専門分野とは、問題解決のための「道具」だと考えています"
            </blockquote>
            <p className="text-gray-600 leading-relaxed text-center">
              AI、プログラミング、教育、デザイン。私の道具箱には多様なツールが揃っています。
              <br />
              状況に応じて最適な道具を選び、組み合わせることで、誰も真似できない独自の解決策を提示できる。
              <br />
              <strong>そこに私の価値があると信じています。</strong>
            </p>
          </div>
        </div>

        {/* 独自の強み */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">独自の強み</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
              <span className="text-3xl mb-3 block">🧠</span>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">
                技術×教育
              </h3>
              <p className="text-blue-700 text-sm">
                複雑な技術を誰もが楽しめる体験に「翻訳」する能力
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
              <span className="text-3xl mb-3 block">🎯</span>
              <h3 className="text-lg font-semibold mb-2 text-green-800">
                課題解決思考
              </h3>
              <p className="text-green-700 text-sm">
                困難な課題を段階的に解決する戦略的思考
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center">
              <span className="text-3xl mb-3 block">💝</span>
              <h3 className="text-lg font-semibold mb-2 text-purple-800">
                共感力
              </h3>
              <p className="text-purple-700 text-sm">
                多様な人々の視点に立って考える理解力
              </p>
            </div>
          </div>
        </div>

        {/* 性格診断結果 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">性格診断結果</h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 text-center">
            <span className="text-4xl mb-4 block">🎭</span>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              「自由さと計画性をバランスよく持ち、冷静で誠実な協調型タイプ」
            </h3>
            <p className="text-gray-600 text-sm">
              柔軟性と組織性を併せ持ち、チームワークを重視しながらも独自の視点を大切にする
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
