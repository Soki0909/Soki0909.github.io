interface ModalHeaderProps {
  title: string;
  subtitle?: string;
  onClose: () => void;
  className?: string;
}

const ModalHeader = ({
  title,
  subtitle,
  onClose,
  className = '',
}: ModalHeaderProps) => {
  return (
    <div
      className={`flex items-center justify-between p-6 border-b ${className}`}
    >
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
      </div>
      <button
        onClick={onClose}
        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
      >
        ✕
      </button>
    </div>
  );
};

export default ModalHeader;
