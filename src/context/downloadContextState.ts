import { createContext } from 'react';

export interface DownloadModalContextType {
  openDownloadModal: () => void;
  closeDownloadModal: () => void;
  isDownloadModalOpen: boolean;
}

export const DownloadModalContext = createContext<DownloadModalContextType | undefined>(undefined);
