import React from 'react';
import {
  Download,
  Printer,
  FileCode,
  FileText,
  UserCheck,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { Modal } from './Modal';
import {
  downloadOfflinePortfolio,
  triggerPrintPortfolio,
  downloadVCard,
  downloadMarkdownDossier,
} from '../utils/downloadHelpers';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Executive Portfolio Download Center"
      badge="Offline & Archival Formats"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
          Select your preferred format to save, print, or archive the complete FB portfolio
          and strategic credentials for offline review, presentations, or talent evaluation.
        </p>

        {/* Option Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {/* Card 1: Offline Single-File HTML */}
          <div
            className="diamond-card"
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.25rem',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              background: 'linear-gradient(145deg, rgba(8, 18, 32, 0.95) 0%, rgba(5, 11, 22, 0.95) 100%)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(56, 189, 248, 0.05)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue-diamond-vibrant)',
                  }}
                >
                  <FileCode size={22} />
                </div>
                <span
                  className="badge badge-silver"
                  style={{
                    fontSize: '0.68rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Sparkles size={11} />
                  <span>Full Interactive Web App</span>
                </span>
              </div>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Offline Single-File HTML
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                Complete standalone portfolio in a single self-contained file. All graphics, styles, and interactive data bundled with zero external server dependencies.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.75rem',
                  fontSize: '0.78rem',
                  color: 'var(--blue-diamond-light)',
                }}
              >
                <CheckCircle size={14} />
                <span>Runs in any browser without internet</span>
              </div>
            </div>

            <button
              onClick={() => {
                downloadOfflinePortfolio();
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.75rem 1rem' }}
            >
              <Download size={16} />
              <span>Download Offline HTML</span>
            </button>
          </div>

          {/* Card 2: Print / PDF Executive Dossier */}
          <div
            className="diamond-card"
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.25rem',
              border: '1px solid rgba(147, 197, 253, 0.25)',
              background: 'linear-gradient(145deg, rgba(8, 18, 32, 0.95) 0%, rgba(5, 11, 22, 0.95) 100%)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(147, 197, 253, 0.12)',
                    border: '1px solid rgba(147, 197, 253, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--highlight-silver)',
                  }}
                >
                  <Printer size={22} />
                </div>
                <span className="badge badge-silver" style={{ fontSize: '0.68rem' }}>
                  Printable & PDF
                </span>
              </div>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Executive PDF / Print View
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                High-contrast, cleanly formatted executive layout optimized specifically for paper printing or direct "Save as PDF" via your browser.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.75rem',
                  fontSize: '0.78rem',
                  color: 'var(--blue-diamond-light)',
                }}
              >
                <CheckCircle size={14} />
                <span>Optimized clean typography & page cuts</span>
              </div>
            </div>

            <button
              onClick={() => {
                triggerPrintPortfolio();
              }}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.75rem 1rem' }}
            >
              <FileText size={16} />
              <span>Print / Save as PDF</span>
            </button>
          </div>

          {/* Card 3: Digital Contact Card (vCard) */}
          <div
            className="diamond-card"
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.25rem',
              border: '1px solid rgba(147, 197, 253, 0.25)',
              background: 'linear-gradient(145deg, rgba(8, 18, 32, 0.95) 0%, rgba(5, 11, 22, 0.95) 100%)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue-diamond-light)',
                  }}
                >
                  <UserCheck size={22} />
                </div>
                <span className="badge badge-silver" style={{ fontSize: '0.68rem' }}>
                  vCard 3.0 Standard
                </span>
              </div>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Executive Contact Card (.vcf)
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                Directly import FB's contact details, verified professional email, WhatsApp, and social profiles into Apple Contacts, Outlook, or Google Contacts.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.75rem',
                  fontSize: '0.78rem',
                  color: 'var(--blue-diamond-light)',
                }}
              >
                <CheckCircle size={14} />
                <span>Instant smartphone & desktop contact sync</span>
              </div>
            </div>

            <button
              onClick={() => {
                downloadVCard();
              }}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.75rem 1rem' }}
            >
              <Download size={16} />
              <span>Download vCard (.vcf)</span>
            </button>
          </div>

          {/* Card 4: Executive Markdown Dossier */}
          <div
            className="diamond-card"
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.25rem',
              border: '1px solid rgba(147, 197, 253, 0.25)',
              background: 'linear-gradient(145deg, rgba(8, 18, 32, 0.95) 0%, rgba(5, 11, 22, 0.95) 100%)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue-diamond-light)',
                  }}
                >
                  <FileText size={22} />
                </div>
                <span className="badge badge-silver" style={{ fontSize: '0.68rem' }}>
                  Markdown Spec
                </span>
              </div>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Career & Strategy Dossier (.md)
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                Structured markdown document containing all service specs, deliverables, 5-phase execution frameworks, and case study blueprints.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.75rem',
                  fontSize: '0.78rem',
                  color: 'var(--blue-diamond-light)',
                }}
              >
                <CheckCircle size={14} />
                <span>Compatible with Obsidian, Notion, GitHub</span>
              </div>
            </div>

            <button
              onClick={() => {
                downloadMarkdownDossier();
              }}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.75rem 1rem' }}
            >
              <Download size={16} />
              <span>Download Dossier (.md)</span>
            </button>
          </div>
        </div>

        {/* Informational Callout */}
        <div
          style={{
            padding: '1rem 1.25rem',
            borderRadius: '10px',
            background: 'rgba(8, 25, 48, 0.65)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <span style={{ fontWeight: 600, color: 'var(--blue-diamond-ice)' }}>
              Looking to review online?
            </span>{' '}
            All case studies, guides, and services are interactive and verifiable directly in this application.
          </div>
          <button
            onClick={onClose}
            className="btn btn-secondary btn-sm"
            style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem' }}
          >
            <span>Continue Browsing</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};
