import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LazyImage from '../../components/LazyImage';
import type { ActivityDetail } from '../../types/dataModels';

// ActivityDetailsData を手動でインポート（実際のJSONファイルから）
import activityDetailsData from '../../data/activityDetails.json';

interface ActivityDetailsJSON {
  activities: { [key: string]: ActivityDetail };
}

export default function ActivityDetail() {
  const { id } = useParams<{ id: string }>();
  const [activity, setActivity] = useState<ActivityDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadActivity = async () => {
      try {
        if (!id) {
          setLoading(false);
          return;
        }

        // JSONファイルから直接データを取得
        const data = activityDetailsData as ActivityDetailsJSON;
        const activityData = data.activities[id];

        if (activityData) {
          setActivity(activityData);
        }
      } catch (error) {
        console.error('Error loading activity:', error);
      } finally {
        setLoading(false);
      }
    };

    loadActivity();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-gray-600">読み込み中...</div>
      </div>
    );
  }

  if (!activity) {
    return <Navigate to="/experience" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              to="/experience"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              ← 体験・活動一覧に戻る
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                {activity.title}
              </h1>
              {activity.subtitle && (
                <p className="text-lg text-gray-600 mb-4">
                  {activity.subtitle}
                </p>
              )}
              <p className="text-gray-700 leading-relaxed">
                {activity.description}
              </p>
            </div>

            {activity.media.images && activity.media.images.length > 0 && (
              <div className="flex-shrink-0 w-full lg:w-80 bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <LazyImage
                  src={`/images/activities/${activity.id}/${activity.media.images[0]}`}
                  alt={activity.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 基本情報 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                基本情報
              </h2>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    期間
                  </span>
                  <p className="text-gray-900">{activity.period}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    チーム規模
                  </span>
                  <p className="text-gray-900">{activity.teamSize}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    私の役割
                  </span>
                  <p className="text-gray-900">{activity.myPosition}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    主な成果
                  </span>
                  <p className="text-gray-900">{activity.achievement}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 詳細説明 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">詳細</h2>
              {activity.note && (
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {activity.note}
                  </p>
                </div>
              )}
            </div>

            {/* 画像ギャラリー */}
            {activity.media.images && activity.media.images.length > 1 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  画像
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activity.media.images
                    .slice(1)
                    .map((image: string, index: number) => (
                      <div
                        key={index}
                        className="w-full bg-gray-50 rounded-lg shadow-md overflow-hidden"
                      >
                        <LazyImage
                          src={`/images/activities/${activity.id}/${image}`}
                          alt={`${activity.title} - 画像${index + 2}`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
