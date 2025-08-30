import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageSchema } from '../utils/structuredData';
import { getSEOData } from '../utils/dataLoader';
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
  title,
  description,
  keywords,
  image = '/og-image.png',
  url,
  type = 'website',
  project,
}) => {
  const location = useLocation();
  const seoData = getSEOData();

  // デフォルト値をSEOデータから取得
  const finalTitle = title || seoData.defaults.title;
  const finalDescription = description || seoData.defaults.description;
  const finalKeywords = keywords || seoData.defaults.keywords;
  const currentUrl = url || `${seoData.site.baseUrl}${location.pathname}`;
  const currentLanguage = seoData.site.defaultLanguage;

  useEffect(() => {
    // キーワードが配列の場合は文字列に変換
    const keywordsString = Array.isArray(finalKeywords)
      ? finalKeywords.join(', ')
      : finalKeywords;

    // 基本メタタグ
    document.title = finalTitle;

    // ディスクリプション
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = finalDescription;
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
      { property: 'og:title', content: finalTitle },
      { property: 'og:description', content: finalDescription },
      { property: 'og:image', content: image },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: type },
      { property: 'og:locale', content: 'ja_JP' },
      {
        property: 'og:site_name',
        content: seoData.site.name,
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
      { name: 'twitter:title', content: finalTitle },
      { name: 'twitter:description', content: finalDescription },
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
          new RegExp(`^${seoData.site.baseUrl}`),
          `${seoData.site.baseUrl}/en`
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
      { name: 'author', content: seoData.site.author },
      { name: 'generator', content: 'React, TypeScript, Vite' },
      { 'http-equiv': 'content-language', content: currentLanguage },
      { name: 'theme-color', content: seoData.site.themeColor },
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
    finalTitle,
    finalDescription,
    finalKeywords,
    image,
    currentUrl,
    type,
    project,
    location.pathname,
    currentLanguage,
    seoData,
  ]);

  return null;
};

export default SEO;
