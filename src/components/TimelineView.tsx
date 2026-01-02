import useTimeline from '../hooks/useTimeline';
import SignalNode from './SignalNode';
import WaveCard from './WaveCard';
import type { HubCategory } from '../types/dataModels';

/**
 * タイムラインビューコンポーネント
 * タイムライン全体を描画するコンテナ
 */
const TimelineView = () => {
  const { items, categoryFilter, setCategoryFilter, categoryCounts } =
    useTimeline();

  // カテゴリフィルターボタン
  const filterButtons: { key: HubCategory | 'all'; label: string }[] = [
    { key: 'all', label: `All (${categoryCounts.all})` },
    { key: 'project', label: `■ Projects (${categoryCounts.project})` },
    { key: 'activity', label: `● Activities (${categoryCounts.activity})` },
    { key: 'writing', label: `▲ Writings (${categoryCounts.writing})` },
  ];

  return (
    <div className="w-full">
      {/* フィルターボタン */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filterButtons.map((btn) => (
          <button
            key={btn.key}
            onClick={() => setCategoryFilter(btn.key)}
            className={`
              px-3 py-1.5 text-sm font-medium rounded-full
              transition-all duration-200
              ${
                categoryFilter === btn.key
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* タイムライン */}
      <div className="relative">
        {/* 左側の縦線（タイムライン軸）- SVG使用 */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block">
          <img
            src="/assets/svg/timeline-axis.svg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>

        {/* アイテムリスト - 右に寄せる */}
        <div className="space-y-4 md:pl-16">
          {items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              該当するアイテムがありません
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 md:gap-6">
                {/* 左側: 日付ノード（デスクトップのみ） */}
                <div className="hidden md:flex flex-shrink-0 w-20 justify-start">
                  <SignalNode date={item.date} category={item.category} />
                </div>

                {/* 右側: カード */}
                <div className="flex-1">
                  {/* モバイル用日付表示 */}
                  <div className="md:hidden mb-2 flex items-center gap-2">
                    <SignalNode date={item.date} category={item.category} />
                  </div>
                  <WaveCard item={item} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineView;
