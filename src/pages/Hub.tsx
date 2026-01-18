import TimelineView from '../components/TimelineView';
import WaveDivider from '../components/WaveDivider';
import GalleryCard from '../components/GalleryCard';
import TableOfContents from '../components/TableOfContents';
import { useWritings } from '../hooks/useWritings';
import { useGallery } from '../hooks/useGallery';
import SEO from '../components/SEO';

/**
 * Hub Page - メインページ
 * サイトのトップページかつメインコンテンツ。全情報の「目次兼ダッシュボード」。
 */
const Hub = () => {
  const { latestItems: writings, hasWritings } = useWritings();
  const {
    categories,
    items: allGalleryItems,
    hasItems: hasGalleryItems,
  } = useGallery();

  return (
    <>
      <SEO
        title="久米蒼輝 Portfolio"
        description="久米蒼輝（KUME Soki）のポートフォリオサイト。AI・機械学習、Web開発、音響信号処理を専門とするエンジニア。"
        keywords={[
          '久米蒼輝',
          'ポートフォリオ',
          'エンジニア',
          'AI',
          '機械学習',
          '音響信号処理',
        ]}
        type="website"
        url="https://soki0909.github.io"
      />

      <div className="min-h-screen bg-white relative">
        {/* 数学記号の背景装飾 */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/svg/math-scatter.svg')",
            backgroundRepeat: 'repeat',
            backgroundSize: '600px 600px',
          }}
          aria-hidden="true"
        />

        {/* ===== Header Area: Signal Input ===== */}
        <header className="border-b border-gray-100 py-12 px-4 relative">
          <div className="max-w-4xl mx-auto">
            {/* Logo + Author Definition */}
            <div className="flex items-center gap-4 mb-6">
              {/* 眼鏡ロゴ */}
              <img
                src="/assets/icons/logo.png"
                alt="KUME Soki Logo"
                className="w-12 h-12 rounded-lg"
              />
              <div className="font-mono text-sm text-gray-500">
                <span className="text-blue-600">AUTHOR</span> ={' '}
                <span className="text-green-600">"KUME Soki"</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              久米蒼輝のポートフォリオ
            </h1>

            {/* Statement */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              テクノロジーの力で、一人ひとりの「できない」を「できる」に変え、
              誰もが自分の可能性を最大限に発揮できる世界をつくる。
            </p>

            {/* Profile Link */}
            <a
              href="/profile"
              className="inline-block mt-4 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              プロフィールを見る →
            </a>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-6 font-mono text-sm">
              <a
                href="https://github.com/Soki0909"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://x.com/9meeeeee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                X (旧Twitter)
              </a>
              <a
                href="https://note.com/9me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                Note
              </a>
              <a
                href="https://mathlog.info/users/raIAdq0dpjYVwcKxGPieX40gx5n1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                Mathlog
              </a>
            </div>
          </div>
        </header>

        {/* ===== Table of Contents ===== */}
        <TableOfContents />

        {/* ===== Main Stream: Chronological Timeline ===== */}
        <main className="max-w-4xl mx-auto px-4 py-12">
          <section id="timeline">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="font-mono text-gray-400">{'# '}</span>
              Timeline
            </h2>
            <TimelineView />
          </section>

          {/* Wave Divider */}
          <WaveDivider />

          {/* ===== Writing Area ===== */}
          <section id="writings" className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="font-mono text-gray-400">{'# '}</span>
              Writings
            </h2>

            {hasWritings ? (
              <div className="space-y-3">
                {writings.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                            {item.platform}
                          </span>
                          <span className="text-xs text-gray-400 font-mono">
                            {item.date}
                          </span>
                        </div>
                        <h3 className="mt-2 font-medium text-gray-900 group-hover:text-blue-600">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-sm text-gray-500 mt-1">
                            {item.description}
                          </p>
                        )}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="text-xs px-2 py-0.5 bg-gray-200 text-gray-600 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="text-gray-400 ml-4">↗</span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-400 bg-white rounded-lg border border-gray-200">
                <p className="font-mono text-sm">
                  {'# '}執筆記事は coming soon...
                </p>
              </div>
            )}
          </section>

          {/* Wave Divider */}
          <WaveDivider />

          {/* ===== Gallery Area ===== */}
          <section id="gallery" className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="font-mono text-gray-400">{'# '}</span>
              Gallery
            </h2>

            {/* カテゴリごとに表示（トグル付き） */}
            {hasGalleryItems && (
              <div className="space-y-4">
                {categories.map((category) => {
                  const categoryItems = allGalleryItems.filter(
                    (item) => item.category === category.id
                  );
                  if (categoryItems.length === 0) return null;
                  return (
                    <details key={category.id} className="group">
                      <summary className="cursor-pointer list-none">
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                          <span className="text-sm text-gray-400 group-open:rotate-90 transition-transform">
                            ▶
                          </span>
                          <h3 className="font-medium text-gray-800">
                            {category.name}
                          </h3>
                          <span className="text-sm text-gray-400 font-mono ml-auto">
                            [{categoryItems.length}]
                          </span>
                        </div>
                      </summary>
                      <div className="mt-3 pl-6 border-l-2 border-gray-100">
                        <p className="text-sm text-gray-500 mb-4">
                          {category.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {categoryItems.map((item) => (
                            <GalleryCard key={item.id} item={item} />
                          ))}
                        </div>
                      </div>
                    </details>
                  );
                })}
              </div>
            )}

            {!hasGalleryItems && (
              <div className="text-center py-8 text-gray-400 bg-white rounded-lg border border-gray-200">
                <p className="font-mono text-sm">
                  {'# '}ギャラリーは coming soon...
                </p>
              </div>
            )}
          </section>

          {/* Wave Divider */}
          <WaveDivider />

          {/* ===== Personal Area (Toggle) ===== */}
          <section id="personal" className="mt-8">
            <details className="group">
              <summary className="cursor-pointer list-none">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="font-mono text-gray-400">{'# '}</span>
                  Personal
                </h2>
                <div className="mt-2 flex items-center gap-1">
                  <span className="text-sm text-gray-400 group-open:rotate-90 transition-transform inline-block">
                    ▶
                  </span>
                  <span className="text-sm text-gray-400">
                    クリックして展開
                  </span>
                </div>
              </summary>

              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {/* Beatbox */}
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Beatbox</h3>
                  <p className="text-sm text-gray-600">
                    4年の経験。即興ビート組み立て・ハミングメロディとの組み合わせが可能。
                  </p>
                </div>

                {/* Rubik's Cube */}
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    立体パズル
                  </h3>
                  <p className="text-sm text-gray-600">
                    3×3×3ルービックキューブを2分以内で完成。10種類以上のパズルを所有。
                  </p>
                </div>

                {/* Math */}
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">数学探究</h3>
                  <p className="text-sm text-gray-600">
                    EMaT全分野で偏差値60超。数学技能検定1級挑戦中。
                  </p>
                </div>

                {/* Efficiency */}
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    PC作業効率化
                  </h3>
                  <p className="text-sm text-gray-600">
                    「マウス不要の操作」実現。Chrome拡張機能開発など。
                  </p>
                </div>
              </div>
            </details>
          </section>
        </main>

        {/* ===== Footer Area: Python/Terminal Style ===== */}
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-16">
          <div className="max-w-4xl mx-auto font-mono text-sm">
            <div className="mb-4">
              <span className="text-blue-400">def</span>{' '}
              <span className="text-yellow-400">contact</span>
              <span className="text-gray-400">():</span>
            </div>

            <div className="space-y-2 ml-8">
              <div>
                <span className="text-green-400">
                  """Get in touch with me."""
                </span>
              </div>
              <div className="mt-4">
                <span className="text-blue-400">return</span>
                {' {'}
              </div>
              <div className="ml-8">
                <span className="text-purple-400">"email"</span>:{' '}
                <a
                  href="mailto:c1302855@st.kanazawa-it.ac.jp"
                  className="text-green-400 hover:underline"
                >
                  "c1302855@st.kanazawa-it.ac.jp"
                </a>
                ,
              </div>
              <div className="ml-8">
                <span className="text-purple-400">"github"</span>:{' '}
                <a
                  href="https://github.com/Soki0909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  "Soki0909"
                </a>
                ,
              </div>
              <div>{'}'}</div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-700 text-gray-500 text-xs">
              <p>
                <span className="text-gray-600"># </span>© 2024-2026 KUME Soki.
                Built with React + TypeScript + Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Hub;
