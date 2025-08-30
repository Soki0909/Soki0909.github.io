import SEO from '../components/SEO';
import { getSkillsData } from '../utils/dataLoader';

const Skills = () => {
  // データファイルから技術スキル情報を取得
  const skillsData = getSkillsData();
  const {
    programmingLanguages,
    specialtyAreas,
    technicalEvaluations,
    learningPhilosophy,
    continuousLearning,
  } = skillsData;

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
              {technicalEvaluations.map((evaluation, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${evaluation.color} text-white rounded-lg p-8 hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{evaluation.icon}</span>
                    <h3 className="text-xl font-semibold">
                      {evaluation.title}
                    </h3>
                  </div>
                  <p className="text-blue-100 mb-2">{evaluation.description}</p>
                  <p className="text-blue-200 text-sm">{evaluation.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 学習哲学セクション */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              {learningPhilosophy.title}
            </h2>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <span className="text-4xl">🛠️</span>
              </div>
              <blockquote className="text-lg font-medium text-gray-800 mb-4 text-center">
                "{learningPhilosophy.quote}"
              </blockquote>
              <p className="text-gray-600 leading-relaxed text-center">
                {learningPhilosophy.description}
              </p>
            </div>
          </div>

          {/* 継続的学習セクション */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">継続的な学習</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {continuousLearning.map((learning, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center"
                >
                  <span className="text-3xl mb-3 block">{learning.icon}</span>
                  <h3 className="text-lg font-semibold mb-2">
                    {learning.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {learning.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
