interface ActionButton {
  href: string;
  label: string;
  className: string;
  external?: boolean;
}

interface ModalFooterProps {
  technologies: string[];
  actions: ActionButton[];
  className?: string;
}

const ModalFooter = ({
  technologies,
  actions,
  className = '',
}: ModalFooterProps) => {
  return (
    <div
      className={`flex items-center justify-between p-6 border-t bg-gray-50 ${className}`}
    >
      <div className="text-sm text-gray-600">
        {technologies.slice(0, 3).join(' • ')}
        {technologies.length > 3 && ' など'}
      </div>
      <div className="flex space-x-3">
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noopener noreferrer' : undefined}
            className={action.className}
          >
            {action.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ModalFooter;
