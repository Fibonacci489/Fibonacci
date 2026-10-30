import { useContext } from 'react';
import { DownloadModalContext, type DownloadModalContextType } from './downloadContextState';

export const useDownloadModal = (): DownloadModalContextType => {
  const context = useContext(DownloadModalContext);
  if (!context) {
    throw new Error('useDownloadModal must be used within a DownloadModalProvider');
  }
  return context;
};
