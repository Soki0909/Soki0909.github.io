import SEO from '../components/SEO';

const Skills = () => {
  const programmingLanguages = [
    {
      name: 'Python',
      level: '上級',
      experience: '画像処理, データ分析, ディープラーニング, Webアプリ開発',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      name: 'JavaScript',
      level: '中級',
      experience: 'フロントエンド開発, Chrome拡張機能, 非同期通信・API連携',
      color: 'from-yellow-300 to-orange-500',
    },
    {
      name: 'C',
      level: '中級',
      experience: '組み込みシステム開発',
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Java',
      level: '中級',
      experience: 'オブジェクト指向設計, 組み込み開発',
      color: 'from-red-400 to-red-600',
    },
    {
      name: 'Dart',
      level: '初級',
      experience: 'Flutterアプリ開発',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      name: 'MATLAB',
      level: '中級',
      experience: '音響処理, 信号処理, 数値解析, DTM',
      color: 'from-orange-400 to-orange-600',
    },
  ];

  const specialtyAreas = [
    {
      title: 'AI・機械学習',
      frameworks: 'TensorFlow, Keras',
      methods: 'CNN実装, 画像分類',
      achievement: 'Fashion-MNIST分類で92.7%の正解率達成',
      icon: '🤖',
      color: 'from-purple-500 to-blue-600',
    },
    {
      title: '信号処理・音響技術',
      frameworks: 'MATLAB',
      methods: '音響信号処理, DTM制作',
      achievement: '80小節のEDM楽曲を全て自作音源で制作',
      icon: '🎵',
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'Web・アプリ開発',
      frameworks: 'HTML/CSS, JavaScript, Django, Flutter',
      methods: 'フロントエンド, バックエンド, モバイル',
      achievement: '音声アシスタントWebアプリ開発',
      icon: '💻',
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'その他技術',
      frameworks: 'SQL, VBA, Unity, R',
      methods: 'データベース, Excel自動化, ゲーム開発, 統計解析',
      achievement: '多様な技術領域での実践経験',
      icon: '🛠️',
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <>
      <SEO
        title="技術スキル"
        description="久米蒼輝の技術スキル一覧。Python、JavaScript、MATLAB、AI・機械学習、音響信号処理、Web開発などの専門技術と評価実績をご紹介します。"
        keywords={[
          '久米蒼輝',
          '技術スキル',
          'プログラミング',
          'Python',
          'JavaScript',
          'MATLAB',
          'AI',
          '機械学習',
          '音響信号処理',
          'Web開発',
          'paiza',
          'EMaT',
          '技術評価',
        ]}
        type="website"
        url="https://soki0909.github.io/skills"
      />
      <div className="max-w-6xl mx-auto space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-6">Technical Skills</h1>
          <p className="text-lg text-gray-600 mb-8">
            問題解決のための「道具箱」として、多様な技術領域での実践経験と継続的な学習により培った技術スキルをご紹介します。
          </p>

          {/* プログラミング言語セクション */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">プログラミング言語</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmingLanguages.map((lang, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{lang.name}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${lang.color}`}
                    >
                      {lang.level}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {lang.experience}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 専門技術領域セクション */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">専門技術領域</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {specialtyAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{area.icon}</span>
                    <h3
                      className={`text-xl font-semibold bg-gradient-to-r ${area.color} bg-clip-text text-transparent`}
                    >
                      {area.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-800">
                        フレームワーク・ツール:
                      </span>
                      <p className="text-gray-600 text-sm mt-1">
                        {area.frameworks}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">
                        手法・技術:
                      </span>
                      <p className="text-gray-600 text-sm mt-1">
                        {area.methods}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">
                        主な実績:
                      </span>
                      <p className="text-gray-600 text-sm mt-1">
                        {area.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 技術評価・実績セクション */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">技術評価・実績</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🏅</span>
                  <h3 className="text-xl font-semibold">paiza Aランク取得</h3>
                </div>
                <p className="text-blue-100 mb-2">
                  上位15%相当のコーディング能力
                </p>
                <p className="text-blue-200 text-sm">
                  実践的なプログラミング力と問題解決能力が認められています
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">📊</span>
                  <h3 className="text-xl font-semibold">EMaT全分野</h3>
                </div>
                <p className="text-green-100 mb-2">偏差値60以上達成</p>
                <p className="text-green-200 text-sm">
                  情報数学の幅広い分野で高い理解度を示しています
                </p>
              </div>
            </div>
          </div>

          {/* 学習哲学セクション */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">技術に対する考え方</h2>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-8">
              <div className="text-center mb-6">
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
                そこに私の価値があると信じています。
              </p>
            </div>
          </div>

          {/* 継続的学習セクション */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">継続的な学習</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <span className="text-3xl mb-3 block">📚</span>
                <h3 className="text-lg font-semibold mb-2">理論学習</h3>
                <p className="text-gray-600 text-sm">
                  大学での授業に加え、機械学習関連書籍の独学で理論的基盤を構築
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <span className="text-3xl mb-3 block">💡</span>
                <h3 className="text-lg font-semibold mb-2">実践応用</h3>
                <p className="text-gray-600 text-sm">
                  ハッカソンやプロジェクト活動を通じて実践的なスキルを磨く
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <span className="text-3xl mb-3 block">🔄</span>
                <h3 className="text-lg font-semibold mb-2">技術共有</h3>
                <p className="text-gray-600 text-sm">
                  新入生教育や学習指導を通じて知識を深化させる
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
