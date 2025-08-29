import { useState } from 'react';
import type { Project } from '../types/project';
import MediaPlayer from './MediaPlayer';
import LazyImage from './LazyImage';

interface DemoModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ project, isOpen, onClose }: DemoModalProps) => {
  const [activeTab, setActiveTab] = useState<'videos' | 'audios' | 'images'>(
    'videos'
  );

  if (!isOpen) return null;

  const hasVideos = project.videos && project.videos.length > 0;
  const hasAudios = project.audios && project.audios.length > 0;
  const hasImages = project.images && project.images.length > 0;

  const currentTab = activeTab;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-gray-600 mt-1">プロジェクトデモ</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        {/* タブナビゲーション */}
        <div className="flex border-b">
          {hasVideos && (
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 font-medium transition-colors ${
                currentTab === 'videos'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🎬 動画 ({project.videos?.length})
            </button>
          )}
          {hasAudios && (
            <button
              onClick={() => setActiveTab('audios')}
              className={`px-6 py-3 font-medium transition-colors ${
                currentTab === 'audios'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🎵 音声 ({project.audios?.length})
            </button>
          )}
          {hasImages && (
            <button
              onClick={() => setActiveTab('images')}
              className={`px-6 py-3 font-medium transition-colors ${
                currentTab === 'images'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📷 画像 ({project.images?.length})
            </button>
          )}
        </div>

        {/* コンテンツエリア */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {currentTab === 'videos' && hasVideos && (
            <div className="space-y-6">
              {project.videos!.map((video, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium">
                    動画 {index + 1}:{' '}
                    {video
                      .split('/')
                      .pop()
                      ?.replace(/\.[^/.]+$/, '')}
                  </h3>
                  <MediaPlayer
                    src={video}
                    type="video"
                    title={`${project.title} - Demo Video ${index + 1}`}
                    className="w-full h-96"
                  />
                </div>
              ))}
            </div>
          )}

          {currentTab === 'audios' && hasAudios && (
            <div className="space-y-6">
              {project.audios!.map((audio, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium">
                    音声 {index + 1}:{' '}
                    {audio
                      .split('/')
                      .pop()
                      ?.replace(/\.[^/.]+$/, '')}
                  </h3>
                  <MediaPlayer
                    src={audio}
                    type="audio"
                    title={`${project.title} - Audio ${index + 1}`}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          )}

          {currentTab === 'images' && hasImages && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images!.map((image, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium text-sm">
                    画像 {index + 1}:{' '}
                    {image
                      .split('/')
                      .pop()
                      ?.replace(/\.[^/.]+$/, '')}
                  </h3>
                  <LazyImage
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 rounded-lg"
                  />
                </div>
              ))}
            </div>
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
        <div className="flex items-center justify-between p-6 border-t bg-gray-50">
          <div className="text-sm text-gray-600">
            {project.technologies.slice(0, 3).join(' • ')}
            {project.technologies.length > 3 && ' など'}
          </div>
          <div className="flex space-x-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors"
            >
              GitHub
            </a>
            {project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
              >
                外部リンク
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
