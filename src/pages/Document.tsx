import { useParams, Link } from 'react-router-dom';
import { getTimelineItem } from '../hooks/useTimeline';
import { useDetail } from '../hooks/useDetail';
import SEO from '../components/SEO';

/**
 * Document Page - 詳細ページ
 * 個別のプロジェクト詳細や記事を表示するページ
 */
const Document = () => {
  const { id } = useParams<{ id: string }>();

  // タイムラインからアイテムを取得
  const item = id ? getTimelineItem(id) : undefined;

  // 詳細データを動的に読み込み
  const { detail, loading } = useDetail(id);

  // アイテムが見つからない場合
  if (!item) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-gray-600 mb-8">
              お探しのページが見つかりませんでした。
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              ← Hub に戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // カテゴリラベル
  const getCategoryLabel = () => {
    switch (item.category) {
      case 'project':
        return { icon: '■', label: 'Project', color: 'text-blue-600' };
      case 'activity':
        return { icon: '●', label: 'Activity', color: 'text-green-600' };
      case 'writing':
        return { icon: '▲', label: 'Writing', color: 'text-purple-600' };
      default:
        return { icon: '○', label: 'Other', color: 'text-gray-600' };
    }
  };

  const category = getCategoryLabel();

  return (
    <>
      <SEO
        title={`${item.title} | 久米蒼輝`}
        description={item.summary}
        keywords={item.tags}
        type="article"
        url={`https://soki0909.github.io/docs/${id}`}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 font-mono text-sm"
          >
            ← cd ../
          </Link>

          {/* Header */}
          <header className="mb-12">
            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className={`text-lg ${category.color}`}>
                {category.icon}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {category.label}
              </span>
              <span className="text-sm text-gray-400 font-mono">
                {item.date}
              </span>

              {/* Development Type Badge */}
              {!loading && detail?.content?.developmentType && (
                <span
                  className={`px-2 py-1 text-xs font-medium rounded ${
                    detail.content.developmentType === 'team'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}
                >
                  {detail.content.developmentType === 'team'
                    ? '👥 チーム開発'
                    : '🧑 個人開発'}
                </span>
              )}

              {/* Team Size */}
              {!loading &&
                detail?.content?.developmentType === 'team' &&
                detail?.content?.teamSize && (
                  <span className="text-xs text-gray-500 font-mono">
                    {detail.content.teamSize}
                  </span>
                )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {item.title}
            </h1>

            {/* Summary */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {item.summary}
            </p>

            {/* Tags */}
            {item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content Area */}
          <main className="space-y-8">
            {loading ? (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-500">読み込み中...</p>
              </div>
            ) : detail ? (
              <>
                {/* Links */}
                {detail.links && Object.keys(detail.links).length > 0 && (
                  <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="font-mono text-gray-400">{'// '}</span>
                      リンク
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {detail.links.github && (
                        <a
                          href={detail.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {/* 複数のGitHubリンク (github_xxx形式) */}
                      {Object.entries(detail.links)
                        .filter(
                          ([key]) =>
                            key.startsWith('github_') && key !== 'github'
                        )
                        .map(([key, url]) => {
                          const label = key
                            .replace('github_', '')
                            .split('_')
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(' ');
                          return (
                            <a
                              key={key}
                              href={url as string}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                            >
                              GitHub ({label}) ↗
                            </a>
                          );
                        })}
                      {detail.links.demo && (
                        <a
                          href={detail.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Demo ↗
                        </a>
                      )}
                      {detail.links.youtube && (
                        <a
                          href={detail.links.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                          YouTube ↗
                        </a>
                      )}
                      {detail.links.slides && (
                        <a
                          href={detail.links.slides}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                          Slides ↗
                        </a>
                      )}
                      {detail.links.article && (
                        <a
                          href={detail.links.article}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          Article ↗
                        </a>
                      )}
                      {detail.links.official && (
                        <a
                          href={detail.links.official}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                        >
                          公式 ↗
                        </a>
                      )}
                    </div>
                  </section>
                )}

                {/* Overview */}
                {detail.content.overview && (
                  <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="font-mono text-gray-400">{'// '}</span>
                      概要
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {detail.content.overview}
                    </p>
                  </section>
                )}

                {/* Development Period */}
                {detail.content.developmentPeriod && (
                  <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="font-mono text-gray-400">{'// '}</span>
                      開発期間
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {detail.content.developmentPeriod}
                    </p>
                  </section>
                )}

                {/* Period (活動期間) */}
                {detail.content.period && (
                  <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="font-mono text-gray-400">{'// '}</span>
                      活動期間
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {detail.content.period}
                    </p>
                  </section>
                )}

                {/* My Role */}
                {detail.content.myRole && (
                  <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="font-mono text-gray-400">{'// '}</span>
                      担当業務
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {detail.content.myRole}
                    </p>
                  </section>
                )}

                {/* Highlights */}
                {detail.content.highlights &&
                  detail.content.highlights.length > 0 && (
                    <section>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="font-mono text-gray-400">{'// '}</span>
                        ハイライト
                      </h2>
                      <ul className="space-y-2">
                        {detail.content.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="text-blue-500 mt-1">▸</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                {/* Technologies */}
                {detail.content.technologies && (
                  <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="font-mono text-gray-400">{'// '}</span>
                      使用技術
                    </h2>
                    <div className="space-y-4">
                      {Object.entries(detail.content.technologies).map(
                        ([category, techs]) => (
                          <div key={category}>
                            <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">
                              {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {techs.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </section>
                )}

                {/* Architecture */}
                {detail.content.architecture && (
                  <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="font-mono text-gray-400">{'// '}</span>
                      アーキテクチャ
                    </h2>
                    {detail.content.architecture.overview && (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {detail.content.architecture.overview}
                      </p>
                    )}
                    {detail.content.architecture.layers &&
                      detail.content.architecture.layers.length > 0 && (
                        <div className="space-y-4">
                          {detail.content.architecture.layers.map(
                            (layer, index) => (
                              <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-4"
                              >
                                <h3 className="font-semibold text-gray-900 mb-2">
                                  {layer.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-2">
                                  {layer.description}
                                </p>
                                {layer.technologies &&
                                  layer.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-1">
                                      {layer.technologies.map((tech, i) => (
                                        <span
                                          key={i}
                                          className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                              </div>
                            )
                          )}
                        </div>
                      )}
                  </section>
                )}

                {/* Devices */}
                {detail.content.devices &&
                  detail.content.devices.length > 0 && (
                    <section>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="font-mono text-gray-400">{'// '}</span>
                        デバイス
                      </h2>
                      <div className="space-y-4">
                        {detail.content.devices.map((device, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-4"
                          >
                            <h3 className="font-semibold text-gray-900 mb-2">
                              {device.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">
                              {device.description}
                            </p>
                            {device.features && device.features.length > 0 && (
                              <div className="mb-2">
                                <span className="text-xs font-medium text-gray-500">
                                  特徴:
                                </span>
                                <ul className="mt-1 space-y-1">
                                  {device.features.map((feature, i) => (
                                    <li
                                      key={i}
                                      className="text-sm text-gray-700 flex items-start gap-2"
                                    >
                                      <span className="text-blue-500">•</span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {device.effects && device.effects.length > 0 && (
                              <div className="mt-2">
                                <span className="text-xs font-medium text-gray-500">
                                  エフェクト:
                                </span>
                                <ul className="mt-1 space-y-1">
                                  {device.effects.map((effect, i) => (
                                    <li
                                      key={i}
                                      className="text-sm text-gray-700 flex items-start gap-2"
                                    >
                                      <span className="text-purple-500">▸</span>
                                      {effect}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                {/* Features */}
                {detail.content.features &&
                  detail.content.features.length > 0 && (
                    <section>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="font-mono text-gray-400">{'// '}</span>
                        機能
                      </h2>
                      <div className="space-y-4">
                        {detail.content.features.map((feature, index) => (
                          <div
                            key={index}
                            className="border-l-2 border-blue-400 pl-4"
                          >
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                {/* Courses (履修科目) */}
                {detail.content.courses &&
                  detail.content.courses.length > 0 && (
                    <section>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="font-mono text-gray-400">{'// '}</span>
                        履修科目
                      </h2>
                      <div className="space-y-4">
                        {detail.content.courses.map((course, index) => (
                          <div
                            key={index}
                            className="border-l-2 border-green-400 pl-4"
                          >
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {course.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {course.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                {/* Media - Images */}
                {detail.media?.images && detail.media.images.length > 0 && (
                  <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="font-mono text-gray-400">{'// '}</span>
                      スクリーンショット
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {detail.media.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Screenshot ${index + 1}`}
                          className="rounded-lg shadow-md w-full h-auto"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </section>
                )}

                {/* Media - Videos */}
                {detail.media?.videos && detail.media.videos.length > 0 && (
                  <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="font-mono text-gray-400">{'// '}</span>
                      デモ動画
                    </h2>
                    <div className="space-y-4">
                      {detail.media.videos.map((video, index) => (
                        <video
                          key={index}
                          src={video}
                          controls
                          className="rounded-lg shadow-md w-full"
                          style={{ maxHeight: '70vh', objectFit: 'contain' }}
                        >
                          お使いのブラウザは動画再生に対応していません。
                        </video>
                      ))}
                    </div>
                  </section>
                )}

                {/* Media - YouTube */}
                {detail.media?.youtube && (
                  <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="font-mono text-gray-400">{'// '}</span>
                      動画
                    </h2>
                    <div className="aspect-video">
                      <iframe
                        src={detail.media.youtube}
                        title="YouTube video"
                        className="w-full h-full rounded-lg shadow-md"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </section>
                )}

                {/* Challenges */}
                {detail.content.challenges &&
                  detail.content.challenges.length > 0 && (
                    <section>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="font-mono text-gray-400">{'// '}</span>
                        技術的な課題
                      </h2>
                      <ul className="space-y-2">
                        {detail.content.challenges.map((challenge, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="text-orange-500 mt-1">⚠</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                {/* Learned */}
                {detail.content.learned &&
                  detail.content.learned.length > 0 && (
                    <section>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="font-mono text-gray-400">{'// '}</span>
                        学んだこと
                      </h2>
                      <ul className="space-y-2">
                        {detail.content.learned.map((learn, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="text-green-500 mt-1">✓</span>
                            {learn}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                {/* Impact */}
                {detail.content.impact && (
                  <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="font-mono text-gray-400">{'// '}</span>
                      インパクト
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {detail.content.impact}
                    </p>
                  </section>
                )}

                {/* Activities */}
                {detail.content.activities &&
                  detail.content.activities.length > 0 && (
                    <section>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="font-mono text-gray-400">{'// '}</span>
                        活動内容
                      </h2>
                      <ul className="space-y-2">
                        {detail.content.activities.map((activity, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="text-blue-500 mt-1">▸</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                {/* Achievements */}
                {detail.content.achievements &&
                  detail.content.achievements.length > 0 && (
                    <section>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="font-mono text-gray-400">{'// '}</span>
                        実績
                      </h2>
                      <ul className="space-y-2">
                        {detail.content.achievements.map(
                          (achievement, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <span className="text-amber-500 mt-1">🏆</span>
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                    </section>
                  )}

                {/* Responsibilities */}
                {detail.content.responsibilities &&
                  detail.content.responsibilities.length > 0 && (
                    <section>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="font-mono text-gray-400">{'// '}</span>
                        担当業務
                      </h2>
                      <ul className="space-y-2">
                        {detail.content.responsibilities.map(
                          (responsibility, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <span className="text-indigo-500 mt-1">◆</span>
                              {responsibility}
                            </li>
                          )
                        )}
                      </ul>
                    </section>
                  )}
              </>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-500 font-mono text-sm">
                  {'// '}詳細データは準備中です
                </p>
              </div>
            )}
          </main>

          {/* External Link (from timeline.json) */}
          {item.externalLink && (
            <div className="mt-8">
              <a
                href={item.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                外部リンクを開く
                <span>↗</span>
              </a>
            </div>
          )}

          {/* Back to Hub */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              to="/"
              className="inline-flex items-center text-gray-500 hover:text-gray-900 font-mono text-sm"
            >
              ← Hub に戻る
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
