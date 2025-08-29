import { useState } from 'react';

export interface UseModalReturn {
  activeTab: 'videos' | 'audios' | 'images';
  setActiveTab: React.Dispatch<
    React.SetStateAction<'videos' | 'audios' | 'images'>
  >;
}

export const useModal = (): UseModalReturn => {
  const [activeTab, setActiveTab] = useState<'videos' | 'audios' | 'images'>(
    'videos'
  );

  return {
    activeTab,
    setActiveTab,
  };
};
