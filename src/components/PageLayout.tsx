import React from 'react';
import SEO from './SEO';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords: string[];
  seoType?: 'website' | 'article' | 'profile';
  seoUrl: string;
  showHeader?: boolean;
  headerTitle?: string;
  headerDescription?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl';
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * 統一されたページレイアウトコンポーネント
 * 全ページの一貫性を保つための中央管理システム
 */
const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  description,
  keywords,
  seoType = 'website',
  seoUrl,
  showHeader = true,
  headerTitle,
  headerDescription,
  maxWidth = '6xl',
  spacing = 'lg',
  className = '',
}) => {
  // 統一レイアウト設定（1か所で管理）
  const layoutConfig = {
    // 背景色設定
    backgroundColor: 'min-h-screen bg-gray-50',

    // ヘッダースタイル
    header: {
      background: 'bg-white shadow-sm',
      titleStyle: 'text-3xl font-bold text-gray-900 text-center mb-4',
      descriptionStyle: 'text-lg text-gray-600 text-center max-w-3xl mx-auto',
    },

    // コンテナ設定
    container: {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-5xl',
      xl: 'max-w-6xl',
      '2xl': 'max-w-7xl',
      '4xl': 'max-w-4xl',
      '6xl': 'max-w-6xl',
      '7xl': 'max-w-7xl',
    },

    // スペーシング設定
    spacing: {
      sm: 'py-6 space-y-8',
      md: 'py-8 space-y-10',
      lg: 'py-8 space-y-12',
    },

    // パディング設定
    padding: 'px-4 sm:px-6 lg:px-8',
  };

  return (
    <div className={`${layoutConfig.backgroundColor} ${className}`}>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        type={seoType}
        url={seoUrl}
      />

      {showHeader && (
        <header className={layoutConfig.header.background}>
          <div
            className={`${layoutConfig.container[maxWidth]} mx-auto ${layoutConfig.padding} py-8`}
          >
            <h1 className={layoutConfig.header.titleStyle}>
              {headerTitle || title}
            </h1>
            {(headerDescription || description) && (
              <p className={layoutConfig.header.descriptionStyle}>
                {headerDescription || description}
              </p>
            )}
          </div>
        </header>
      )}

      <div
        className={`${layoutConfig.container[maxWidth]} mx-auto ${layoutConfig.padding} ${layoutConfig.spacing[spacing]}`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
