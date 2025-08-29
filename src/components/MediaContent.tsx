import MediaPlayer from './MediaPlayer';
import LazyImage from './LazyImage';

interface MediaContentProps {
  type: 'videos' | 'audios' | 'images';
  items: string[];
  projectTitle: string;
  className?: string;
}

const MediaContent = ({
  type,
  items,
  projectTitle,
  className = '',
}: MediaContentProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  const getFileName = (path: string) => {
    return path
      .split('/')
      .pop()
      ?.replace(/\.[^/.]+$/, '');
  };

  const getLabel = (type: string) => {
    switch (type) {
      case 'videos':
        return '動画';
      case 'audios':
        return '音声';
      case 'images':
        return '画像';
      default:
        return 'メディア';
    }
  };

  if (type === 'images') {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
        {items.map((image, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-medium text-sm">
              {getLabel(type)} {index + 1}: {getFileName(image)}
            </h3>
            <LazyImage
              src={image}
              alt={`${projectTitle} screenshot ${index + 1}`}
              className="w-full h-64 rounded-lg"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="space-y-2">
          <h3 className="font-medium">
            {getLabel(type)} {index + 1}: {getFileName(item)}
          </h3>
          <MediaPlayer
            src={item}
            type={type === 'videos' ? 'video' : 'audio'}
            title={`${projectTitle} - ${getLabel(type)} ${index + 1}`}
            className={type === 'videos' ? 'w-full h-96' : 'w-full'}
          />
        </div>
      ))}
    </div>
  );
};

export default MediaContent;
