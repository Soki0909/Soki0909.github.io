import SEO from '../components/SEO';
import { getVisionData, getPageSEO } from '../utils/dataLoader';

const Vision = () => {
  // データファイルからビジョン・価値観情報を取得
  const visionData = getVisionData();
  const pageSEO = getPageSEO('vision');
  const {
    mission,
    actionPrinciple,
    turningPoints,
    futureVision,
    socialMessage,
    hobbies,
  } = visionData;

  return (
    <>
      <SEO
        title={pageSEO.title}
        description={pageSEO.description}
        keywords={pageSEO.keywords}
        type={pageSEO.type}
        url={`${pageSEO.site.baseUrl}/vision`}
      />
      <div className="max-w-4xl mx-auto space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-6">Vision & Values</h1>
          <p className="text-lg text-gray-600 mb-8">
            私の価値観、人生哲学、そして目指す未来についてお話しします。
          </p>

          {/* 人生のミッション */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{mission.title}</h2>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
              <blockquote className="text-xl font-medium mb-4">
                "{mission.content}"
              </blockquote>
              <p className="text-blue-100">{mission.description}</p>
            </div>
          </div>

          {/* 行動理念 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              {actionPrinciple.title}
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">
                {actionPrinciple.quote}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {actionPrinciple.description}
              </p>
            </div>
          </div>

          {/* 転換点となった体験 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">転換点となった体験</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {turningPoints.map((turningPoint, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    {turningPoint.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {turningPoint.description
                      .split('**')
                      .map((part, i) =>
                        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                      )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 将来ビジョン */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">将来ビジョン</h2>

            {/* 特に注力したい領域 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                {futureVision.specialFocus.title}
              </h3>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <blockquote className="text-lg font-medium text-gray-800 mb-4">
                  "{futureVision.specialFocus.quote}"
                </blockquote>
                <p className="text-gray-600">
                  {futureVision.specialFocus.description}
                </p>
              </div>
            </div>

            {/* 実現へのアプローチ */}
            <div className="space-y-6">
              {futureVision.roadmap.map((phase, index) => {
                const colorClasses = {
                  blue: 'bg-blue-500',
                  green: 'bg-green-500',
                  purple: 'bg-purple-500',
                };
                const colorClass =
                  colorClasses[phase.color as keyof typeof colorClasses] ||
                  'bg-blue-500';

                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <h4 className="text-lg font-semibold mb-3">
                      {phase.phase}
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      {phase.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start space-x-2"
                        >
                          <span
                            className={`w-2 h-2 ${colorClass} rounded-full mt-2 flex-shrink-0`}
                          ></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 問いかけとメッセージ */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              {socialMessage.title}
            </h2>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 text-center">
              <blockquote className="text-lg font-medium text-gray-800 mb-4">
                "{socialMessage.quote}"
              </blockquote>
              <p className="text-gray-600">{socialMessage.description}</p>
            </div>
          </div>

          {/* 趣味・特技 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">趣味・特技</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {hobbies.map((hobby, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3">{hobby.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {hobby.description}
                  </p>
                  {hobby.additional && (
                    <p className="text-gray-500 text-xs">{hobby.additional}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Vision;
