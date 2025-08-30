import { useEffect } from 'react';

interface SEOProps {
  /** ページタイトル */
  title?: string;
  /** メタディスクリプション */
  description?: string;
  /** キーワード */
  keywords?: string[];
  /** OG画像URL */
  ogImage?: string;
  /** ページURL */
  url?: string;
  /** ページタイプ */
  type?: 'website' | 'article' | 'profile';
  /** 記事の公開日 */
  publishedTime?: string;
  /** 記事の更新日 */
  modifiedTime?: string;
  /** 構造化データ */
  structuredData?: object;
}

/**
 * SEO最適化のためのヘッダー情報を管理するコンポーネント
 *
 * document.headを直接操作してページごとのメタタグ、
 * Open Graphタグ、構造化データを動的に設定します。
 *
 * @param title - ページタイトル
 * @param description - メタディスクリプション
 * @param keywords - SEOキーワード配列
 * @param ogImage - Open Graph画像URL
 * @param url - ページの正規URL
 * @param type - Open Graphページタイプ
 * @param publishedTime - 記事公開日時
 * @param modifiedTime - 記事更新日時
 * @param structuredData - JSON-LD構造化データ
 *
 * @example
 * ```tsx
 * <SEO
 *   title="久米蒼輝 - ポートフォリオ"
 *   description="情報工学科3年生のポートフォリオサイト"
 *   keywords={['プログラミング', 'AI', '音響技術']}
 *   type="website"
 * />
 * ```
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description = '金沢工業大学 工学部 情報工学科3年 久米蒼輝のポートフォリオサイト。AI・音響技術・Web開発の技術スキルと実績をご紹介します。',
  keywords = [
    '久米蒼輝',
    'KUME Soki',
    'ポートフォリオ',
    'プログラミング',
    'AI',
    '音響技術',
    'Web開発',
    '金沢工業大学',
    '情報工学',
    'Python',
    'JavaScript',
    'MATLAB',
    'React',
    'TypeScript',
  ],
  ogImage = 'https://soki0909.github.io/images/og-image.jpg',
  url = 'https://soki0909.github.io/',
  type = 'website',
  publishedTime,
  modifiedTime,
  structuredData,
}) => {
  // サイト名とページタイトルの組み合わせ
  const siteName = '久米蒼輝 - Portfolio';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  // デフォルトの構造化データ（Person schema）
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: '久米蒼輝',
    alternateName: 'KUME Soki',
    description: 'プログラミング・AI・音響技術を専門とする情報工学科の学生',
    url: 'https://soki0909.github.io/',
    image: ogImage,
    jobTitle: '情報工学科学生',
    affiliation: {
      '@type': 'EducationalOrganization',
      name: '金沢工業大学 工学部 情報工学科',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: '金沢工業大学',
    },
    knowsAbout: [
      'プログラミング',
      'AI・機械学習',
      '音響信号処理',
      'Web開発',
      'Python',
      'JavaScript',
      'MATLAB',
      'React',
      'TypeScript',
    ],
    sameAs: ['https://github.com/Soki0909'],
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  useEffect(() => {
    // ページタイトルを設定
    document.title = fullTitle;

    // 既存のメタタグを削除してから新しいものを追加
    const removeMetaTags = () => {
      const existingTags = document.querySelectorAll(
        'meta[data-react-seo], script[data-react-seo], link[data-react-seo]'
      );
      existingTags.forEach((tag) => tag.remove());
    };

    const addMetaTag = (attributes: Record<string, string>) => {
      const meta = document.createElement('meta');
      Object.entries(attributes).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      meta.setAttribute('data-react-seo', 'true');
      document.head.appendChild(meta);
    };

    const addLinkTag = (attributes: Record<string, string>) => {
      const link = document.createElement('link');
      Object.entries(attributes).forEach(([key, value]) => {
        link.setAttribute(key, value);
      });
      link.setAttribute('data-react-seo', 'true');
      document.head.appendChild(link);
    };

    const addScriptTag = (
      content: string,
      attributes: Record<string, string> = {}
    ) => {
      const script = document.createElement('script');
      script.textContent = content;
      Object.entries(attributes).forEach(([key, value]) => {
        script.setAttribute(key, value);
      });
      script.setAttribute('data-react-seo', 'true');
      document.head.appendChild(script);
    };

    // 既存のタグを削除
    removeMetaTags();

    // 基本的なメタタグ
    addMetaTag({ name: 'description', content: description });
    addMetaTag({ name: 'keywords', content: keywords.join(', ') });
    addMetaTag({ name: 'author', content: '久米蒼輝 (KUME Soki)' });
    addMetaTag({ name: 'robots', content: 'index, follow' });
    addMetaTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    });

    // 正規URL
    addLinkTag({ rel: 'canonical', href: url });

    // Open Graph メタタグ
    addMetaTag({ property: 'og:title', content: fullTitle });
    addMetaTag({ property: 'og:description', content: description });
    addMetaTag({ property: 'og:type', content: type });
    addMetaTag({ property: 'og:url', content: url });
    addMetaTag({ property: 'og:image', content: ogImage });
    addMetaTag({ property: 'og:site_name', content: siteName });
    addMetaTag({ property: 'og:locale', content: 'ja_JP' });

    // Twitter Card メタタグ
    addMetaTag({ name: 'twitter:card', content: 'summary_large_image' });
    addMetaTag({ name: 'twitter:title', content: fullTitle });
    addMetaTag({ name: 'twitter:description', content: description });
    addMetaTag({ name: 'twitter:image', content: ogImage });

    // 記事固有のメタタグ
    if (publishedTime) {
      addMetaTag({
        property: 'article:published_time',
        content: publishedTime,
      });
    }
    if (modifiedTime) {
      addMetaTag({ property: 'article:modified_time', content: modifiedTime });
    }

    // テーマカラー
    addMetaTag({ name: 'theme-color', content: '#3b82f6' });
    addMetaTag({ name: 'msapplication-TileColor', content: '#3b82f6' });

    // 構造化データ
    addScriptTag(JSON.stringify(finalStructuredData, null, 2), {
      type: 'application/ld+json',
    });

    // クリーンアップ関数（コンポーネントがアンマウントされる時）
    return () => {
      removeMetaTags();
    };
  }, [
    fullTitle,
    description,
    keywords,
    ogImage,
    url,
    type,
    publishedTime,
    modifiedTime,
    finalStructuredData,
    siteName,
  ]);

  // このコンポーネントは何も画面に描画しない
  return null;
};

export default SEO;
