import React, { useState, type ReactNode } from 'react';
import { DownloadModal } from '../components/DownloadModal';
import { DownloadModalContext } from './downloadContextState';

export const DownloadModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDownloadModal = () => setIsOpen(true);
  const closeDownloadModal = () => setIsOpen(false);

  return (
    <DownloadModalContext.Provider
      value={{
        openDownloadModal,
        closeDownloadModal,
        isDownloadModalOpen: isOpen,
      }}
    >
      {children}
      <DownloadModal isOpen={isOpen} onClose={closeDownloadModal} />
    </DownloadModalContext.Provider>
  );
};
