import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageSchema } from '../utils/structuredData';
import type { Project } from '../types/project';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  project?: Project;
}

const SEO: React.FC<SEOProps> = ({
  title = '久米蒼輝 (KUME Soki) - 情報工学科3年 ポートフォリオ',
  description = '金沢工業大学 情報工学科3年 久米蒼輝のポートフォリオサイト。AI・機械学習、音響信号処理、Web開発の経験を持つ。テクノロジーで「できない」を「できる」に変えることを目指すエンジニア。Hackit 2025 優勝、RoboCup日本大会2位入賞。',
  keywords = '久米蒼輝, KUME Soki, 金沢工業大学, 情報工学科, AI, 機械学習, 音響信号処理, ポートフォリオ, エンジニア, Python, JavaScript, React, TypeScript, ハッカソン, RoboCup, Web開発, 音楽バリアフリー',
  image = '/og-image.png',
  url,
  type = 'website',
  project,
}) => {
  const location = useLocation();
  const currentUrl = url || `https://soki0909.github.io${location.pathname}`;
  const currentLanguage = 'ja';

  useEffect(() => {
    // キーワードが配列の場合は文字列に変換
    const keywordsString = Array.isArray(keywords)
      ? keywords.join(', ')
      : keywords;

    // 基本メタタグ
    document.title = title;

    // ディスクリプション
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = description;
      document.head.appendChild(newMetaDescription);
    }

    // キーワード
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywordsString);
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = keywordsString;
      document.head.appendChild(newMetaKeywords);
    }

    // ビューポート
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      const newMetaViewport = document.createElement('meta');
      newMetaViewport.name = 'viewport';
      newMetaViewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(newMetaViewport);
    }

    // 言語設定
    document.documentElement.lang = currentLanguage;

    // Open Graphタグ
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: type },
      { property: 'og:locale', content: 'ja_JP' },
      {
        property: 'og:site_name',
        content: '久米蒼輝 (KUME Soki) ポートフォリオ',
      },
    ];

    ogTags.forEach(({ property, content }) => {
      const existingTag = document.querySelector(
        `meta[property="${property}"]`
      );
      if (existingTag) {
        existingTag.setAttribute('content', content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('property', property);
        newTag.setAttribute('content', content);
        document.head.appendChild(newTag);
      }
    });

    // Twitter Cardタグ
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    twitterTags.forEach(({ name, content }) => {
      const existingTag = document.querySelector(`meta[name="${name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('name', name);
        newTag.setAttribute('content', content);
        document.head.appendChild(newTag);
      }
    });

    // 多言語SEO用のhreflangタグ
    const hreflangTags = [
      { hreflang: 'ja', href: currentUrl },
      {
        hreflang: 'en',
        href: currentUrl.replace(
          /^https:\/\/soki0909\.github\.io/,
          'https://soki0909.github.io/en'
        ),
      },
      { hreflang: 'x-default', href: currentUrl },
    ];

    // 既存のhreflangタグを削除
    document.querySelectorAll('link[hreflang]').forEach((tag) => tag.remove());

    hreflangTags.forEach(({ hreflang, href }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    });

    // 正規URL
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute('href', currentUrl);
    } else {
      const canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', currentUrl);
      document.head.appendChild(canonical);
    }

    // 構造化データ
    const getPageType = (
      pathname: string
    ):
      | 'home'
      | 'about'
      | 'skills'
      | 'experience'
      | 'vision'
      | 'works'
      | 'work-detail'
      | 'contact' => {
      if (pathname === '/') return 'home';
      if (pathname.startsWith('/about')) return 'about';
      if (pathname.startsWith('/skills')) return 'skills';
      if (pathname.startsWith('/experience')) return 'experience';
      if (pathname.startsWith('/vision')) return 'vision';
      if (pathname.startsWith('/works/') && pathname !== '/works')
        return 'work-detail';
      if (pathname.startsWith('/works')) return 'works';
      if (pathname.startsWith('/contact')) return 'contact';
      return 'home';
    };

    const schemas = getPageSchema(
      getPageType(location.pathname),
      project ? { project } : undefined
    );

    // 既存の構造化データを削除
    document
      .querySelectorAll('script[type="application/ld+json"]')
      .forEach((script) => {
        script.remove();
      });

    // 新しい構造化データを追加
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `structured-data-${index}`;
      script.textContent = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    });

    // SEO向上のための追加メタタグ
    const additionalMetas = [
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: '久米蒼輝 (KUME Soki)' },
      { name: 'generator', content: 'React, TypeScript, Vite' },
      { 'http-equiv': 'content-language', content: 'ja' },
      { name: 'theme-color', content: '#3B82F6' },
    ];

    additionalMetas.forEach((meta) => {
      const nameOrHttpEquiv = meta.name || meta['http-equiv'];
      if (!nameOrHttpEquiv) return;

      const attribute = meta.name ? 'name' : 'http-equiv';
      const existingTag = document.querySelector(
        `meta[${attribute}="${nameOrHttpEquiv}"]`
      );

      if (existingTag) {
        existingTag.setAttribute('content', meta.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute(attribute, nameOrHttpEquiv);
        newTag.setAttribute('content', meta.content);
        document.head.appendChild(newTag);
      }
    });
  }, [
    title,
    description,
    keywords,
    image,
    currentUrl,
    type,
    project,
    location.pathname,
    currentLanguage,
  ]);

  return null;
};

export default SEO;
