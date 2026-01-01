import type { HubCategory } from '../types/dataModels';

interface SignalNodeProps {
  date: string;
  category: HubCategory;
}

/**
 * タイムライン上の日付ノードコンポーネント
 * カテゴリに応じた幾何学アイコン（■●▲）を表示
 */
const SignalNode = ({ date, category }: SignalNodeProps) => {
  // 日付をYYYY.MM形式に変換
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    return `${year}.${month}`;
  };

  // カテゴリに応じたアイコンとスタイル
  const getCategoryStyle = () => {
    switch (category) {
      case 'project':
        return {
          icon: '■',
          color: 'text-blue-600',
          bgColor: 'bg-blue-100',
          borderColor: 'border-blue-300',
          label: 'Project',
        };
      case 'activity':
        return {
          icon: '●',
          color: 'text-green-600',
          bgColor: 'bg-green-100',
          borderColor: 'border-green-300',
          label: 'Activity',
        };
      case 'writing':
        return {
          icon: '▲',
          color: 'text-purple-600',
          bgColor: 'bg-purple-100',
          borderColor: 'border-purple-300',
          label: 'Writing',
        };
      default:
        return {
          icon: '○',
          color: 'text-gray-600',
          bgColor: 'bg-gray-100',
          borderColor: 'border-gray-300',
          label: 'Other',
        };
    }
  };

  const style = getCategoryStyle();

  return (
    <div className="flex flex-col items-center">
      {/* 日付スタンプ */}
      <span className="font-mono text-xs text-gray-500 mb-1">
        {formatDate(date)}
      </span>

      {/* カテゴリアイコン */}
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${style.bgColor} ${style.borderColor}`}
        title={style.label}
      >
        <span className={`text-lg ${style.color}`}>{style.icon}</span>
      </div>
    </div>
  );
};

export default SignalNode;
