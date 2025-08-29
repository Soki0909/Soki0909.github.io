import type { Project } from '../types/project';
import { useModal } from '../hooks/useModal';
import TabNavigation from './TabNavigation';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import MediaContent from './MediaContent';

interface DemoModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ project, isOpen, onClose }: DemoModalProps) => {
  const { activeTab, setActiveTab } = useModal();

  if (!isOpen) return null;

  const hasVideos = project.videos && project.videos.length > 0;
  const hasAudios = project.audios && project.audios.length > 0;
  const hasImages = project.images && project.images.length > 0;

  // タブの設定
  const tabs = [
    ...(hasVideos
      ? [
          {
            key: 'videos' as const,
            label: '動画',
            icon: '🎬',
            count: project.videos?.length,
          },
        ]
      : []),
    ...(hasAudios
      ? [
          {
            key: 'audios' as const,
            label: '音声',
            icon: '🎵',
            count: project.audios?.length,
          },
        ]
      : []),
    ...(hasImages
      ? [
          {
            key: 'images' as const,
            label: '画像',
            icon: '📷',
            count: project.images?.length,
          },
        ]
      : []),
  ];

  // フッターアクションの設定
  const footerActions = [
    {
      href: project.github,
      label: 'GitHub',
      className:
        'px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors',
      external: true,
    },
    ...(project.demo !== '#'
      ? [
          {
            href: project.demo,
            label: '外部リンク',
            className:
              'px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors',
            external: true,
          },
        ]
      : []),
  ];

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* ヘッダー */}
        <ModalHeader
          title={project.title}
          subtitle="プロジェクトデモ"
          onClose={onClose}
        />

        {/* タブナビゲーション */}
        {tabs.length > 0 && (
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={(key) =>
              setActiveTab(key as 'videos' | 'audios' | 'images')
            }
          />
        )}

        {/* コンテンツエリア */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {hasVideos && activeTab === 'videos' && (
            <MediaContent
              type="videos"
              items={project.videos!}
              projectTitle={project.title}
            />
          )}

          {hasAudios && activeTab === 'audios' && (
            <MediaContent
              type="audios"
              items={project.audios!}
              projectTitle={project.title}
            />
          )}

          {hasImages && activeTab === 'images' && (
            <MediaContent
              type="images"
              items={project.images!}
              projectTitle={project.title}
            />
          )}

          {/* コンテンツがない場合 */}
          {!hasVideos && !hasAudios && !hasImages && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-medium mb-2">デモコンテンツ準備中</h3>
              <p className="text-gray-600 mb-4">
                このプロジェクトのデモ動画・音声ファイルは現在準備中です。
              </p>
              <div className="space-y-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors mr-2"
                >
                  GitHub で見る
                </a>
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    外部デモサイト
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* フッター */}
        <ModalFooter
          technologies={project.technologies}
          actions={footerActions}
        />
      </div>
    </div>
  );
};

export default DemoModal;
