import SEO from '../components/SEO';

const Experience = () => {
  const timelineItems = [
    {
      year: '1年生',
      title: '基礎学習期',
      description: '技術的基盤の構築と、様々な活動への挑戦を開始',
      details: [
        '週2回の講習会参加 + 自主学習',
        '機械学習関連書籍の独学',
        '夢考房RoboCup@Homeプロジェクト参加開始',
      ],
      color: 'bg-blue-500',
    },
    {
      year: '2年生',
      title: '運営参画期',
      description: 'マネジメント・コミュニケーション能力の向上と教育活動開始',
      details: [
        '新入生教育担当として指導経験を積む',
        'プロジェクト会計業務を担当',
        '学生ステーション運営スタッフとして活動開始',
        'AI体験ブース企画・運営（科学実験教室）',
      ],
      color: 'bg-green-500',
    },
    {
      year: '3年生',
      title: 'リーダーシップ期',
      description: 'プロジェクトリーダーとして組織運営と技術開発を両立',
      details: [
        'プロジェクトサブリーダー就任（74名組織）',
        '安全活動リーダーとして安全基準策定・運用',
        'RoboCup日本大会オープンチャレンジ 6チーム中2位',
        'Hackit 2025ハッカソン最優秀賞受賞',
      ],
      color: 'bg-purple-500',
    },
  ];

  const majorActivities = [
    {
      title: '夢考房RoboCup@Homeプロジェクト',
      period: '1年前期〜現在 (2.5年)',
      scale: '74名',
      position: 'サブリーダー・安全活動リーダー',
      achievement: 'RoboCup日本大会 6チーム中2位 🥈',
      description: '「ロボットが家族の一員となるシステム」の開発',
      technologies: ['スマートフォンアプリ', 'サーバー連携', 'ロボット制御'],
      myRole: [
        'UI開発',
        'プレゼンストーリー作成・発表',
        'チーム全体マネジメント',
        '安全管理',
      ],
      icon: '🤖',
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: '学生ステーション運営スタッフ',
      period: '2年間',
      scale: '学内インターンシップ',
      position: '運営スタッフ → メンター',
      achievement: '人前での大勢プレゼンテーションが可能に',
      description: '相談窓口対応, 落とし物管理, イベント企画運営',
      technologies: ['イベント企画', 'プレゼンテーション', 'デザイン制作'],
      myRole: ['カウンター対応', 'イベント責任者', '新人サポート'],
      icon: '🏢',
      color: 'from-green-500 to-blue-500',
    },
    {
      title: 'AI体験ブース - 教育イベント企画運営',
      period: '単発イベント',
      scale: '小学生約50名対象',
      position: 'ブースリーダー・企画設計・運営',
      achievement: '当日最も人気のブースとなる',
      description: '「複雑な技術を誰もが楽しめる体験に変える」企画',
      technologies: ['Teachable Machine', '体験設計', '教育技術'],
      myRole: ['企画設計', '運営リーダー', '技術説明'],
      icon: '🎯',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const qualifications = [
    { name: '実用数学技能検定準1級', date: '2022年10月', level: '上級' },
    { name: '第二種電気工事士', date: '2021年8月', level: '中級' },
    { name: '情報技術検定1級', date: '2022年2月', level: '上級' },
    { name: '3級電子機器組立て技能士', date: '2022年3月', level: '中級' },
    { name: '危険物取扱者乙種四類', date: '2023年3月', level: '中級' },
    { name: 'ITパスポート試験', date: '高校時代', level: '初級' },
  ];

  const plannedQualifications = [
    { name: '数学技能検定1級', status: '現在挑戦中', color: 'orange' },
    { name: '基本情報技術者試験', status: '挑戦予定', color: 'blue' },
    { name: '応用情報技術者試験', status: '挑戦予定', color: 'purple' },
  ];

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
            <h2 className="text-2xl font-semibold mb-6">
              成長ストーリー: 苦手克服への挑戦
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">🎯 挑戦動機</h3>
                <p className="text-gray-700 leading-relaxed">
                  人前で話すことへの強い苦手意識を克服するため、あえて人との対話が中心となる学生ステーション活動に飛び込みました。
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">当初の課題</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>思考力低下・頭が真っ白になる</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>心臓のドキドキ・動悸</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>手足の震え・体の硬直</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>発汗・声の震え</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>吃音・言葉詰まり</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">段階的アプローチ</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      1
                    </span>
                    <div>
                      <span className="font-medium">一対一対応:</span>
                      <span className="text-gray-600 ml-2">
                        カウンター業務から開始
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      2
                    </span>
                    <div>
                      <span className="font-medium">小集団:</span>
                      <span className="text-gray-600 ml-2">
                        キャンパス案内で外部訪問者対応
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      3
                    </span>
                    <div>
                      <span className="font-medium">大勢:</span>
                      <span className="text-gray-600 ml-2">
                        イベントでの大学生向けプレゼンテーション
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">克服戦略</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">
                      <strong>視点転換:</strong>{' '}
                      「自分が上手く話すか」→「相手が何を知りたいか」
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">
                      <strong>事前準備:</strong> 「何を伝えたいか」の明確化
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">
                      <strong>経験積み重ね:</strong> 段階的な難易度アップ
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2 text-green-700">
                  🎉 最終的変化
                </h4>
                <p className="text-gray-700 font-medium">
                  人前での大勢プレゼンテーションを自信を持って実行可能
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
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>中学校教諭一種免許状（数学）</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>高等学校教諭一種免許状（数学）</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>高等学校教諭一種免許状（工業）</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>高等学校教諭一種免許状（情報）</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">🤝 介護等体験</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">児童福祉施設:</span>
                    <span className="text-gray-600 ml-2">5日間</span>
                  </div>
                  <div>
                    <span className="font-medium">特別支援学校:</span>
                    <span className="text-gray-600 ml-2">2日間</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="text-gray-700 text-xs leading-relaxed">
                      <strong>価値観の転換:</strong>{' '}
                      障がいとは「できないこと」ではなく「『できる』に至るまでのプロセスが、私たちと少し違うだけ、少し長いだけ」という理解を獲得
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
