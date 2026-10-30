import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  badge?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  badge,
  children,
}) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        backgroundColor: 'rgba(2, 5, 11, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        animation: 'modalFadeIn 200ms ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          backgroundColor: '#081220',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.95), 0 0 50px rgba(56, 189, 248, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
            backgroundColor: '#050B16',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <h3
              id="modal-title"
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#F5F7FA',
                letterSpacing: '-0.01em',
              }}
            >
              {title}
            </h3>
            {badge && (
              <span className="badge badge-silver" style={{ fontSize: '0.7rem' }}>
                {badge}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="btn-icon"
            style={{
              background: 'rgba(199, 205, 213, 0.08)',
              border: '1px solid rgba(192, 204, 218, 0.2)',
              color: '#A8B2BE',
              cursor: 'pointer',
              transition: 'all 150ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = 'rgba(242, 244, 247, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#A8B2BE';
              e.currentTarget.style.borderColor = 'rgba(192, 204, 218, 0.2)';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body with scroll */}
        <div
          style={{
            padding: '1.75rem',
            overflowY: 'auto',
            color: '#A8B2BE',
            lineHeight: 1.7,
            fontSize: '0.975rem',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
