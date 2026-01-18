/**
 * TableOfContents - 目次コンポーネント
 * 各セクションへのスムーズスクロール機能を提供
 */

interface TocItem {
  id: string;
  label: string;
  symbol: string;
}

const tocItems: TocItem[] = [
  { id: 'timeline', label: 'Timeline', symbol: '[0]' },
  { id: 'writings', label: 'Writings', symbol: '[1]' },
  { id: 'gallery', label: 'Gallery', symbol: '[2]' },
  { id: 'personal', label: 'Personal', symbol: '[3]' },
];

const TableOfContents = () => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="max-w-4xl mx-auto px-4 py-6" aria-label="目次">
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
        <h2 className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2 font-mono">
          <span className="text-gray-400">{'# '}</span>
          contents
        </h2>
        <ul className="flex flex-wrap gap-2">
          {tocItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-mono text-gray-600 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900 transition-all cursor-pointer"
              >
                <span className="text-xs text-gray-400">{item.symbol}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
