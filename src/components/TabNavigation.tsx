interface TabItem {
  key: string;
  label: string;
  icon: string;
  count?: number;
  disabled?: boolean;
}

interface TabNavigationProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (key: string) => void;
  className?: string;
}

const TabNavigation = ({
  tabs,
  activeTab,
  onTabChange,
  className = '',
}: TabNavigationProps) => {
  return (
    <div className={`flex border-b ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          disabled={tab.disabled}
          className={`px-6 py-3 font-medium transition-colors ${
            tab.disabled
              ? 'text-gray-400 cursor-not-allowed'
              : activeTab === tab.key
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {tab.icon} {tab.label} {tab.count !== undefined && `(${tab.count})`}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
