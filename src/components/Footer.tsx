import React from 'react';
import { ArrowUp, Shield, Download } from 'lucide-react';
import { LinkedInIcon, FacebookIcon, InstagramIcon } from './SocialIcons';
import { BRAND_INFO } from '../data/portfolioData';
import { useDownloadModal } from '../context/useDownloadModal';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { openDownloadModal } = useDownloadModal();
  const currentYear = CURRENT_YEAR;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: '#020406',
        borderTop: '1px solid rgba(192, 204, 218, 0.15)',
        paddingTop: '4.5rem',
        paddingBottom: '3rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1.4fr) repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(192, 204, 218, 0.1)',
          }}
        >
          {/* Brand Info & Tagline Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              {/* Circular Emblem Preserving Logo */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  padding: '2px',
                  background: 'radial-gradient(circle, rgba(224,242,254,0.45) 0%, rgba(56,189,248,0.25) 60%, transparent 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.45)',
                  boxShadow: '0 0 16px rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img
                  src={BRAND_INFO.logoSrc}
                  alt="FB Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>

              <div>
                <span
                  className="font-serif-accent text-metallic"
                  style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.06em' }}
                >
                  {BRAND_INFO.name}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                  }}
                >
                  {BRAND_INFO.title}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--metallic-silver)', fontStyle: 'italic', maxWidth: '380px' }}>
              "{BRAND_INFO.tagline}"
            </p>

            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '400px' }}>
              Connecting product management strategy, strategic partnerships, and relationship-driven network expansion to build sustainable global solutions.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href={BRAND_INFO.contactPlaceholders.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn"
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'rgba(11, 16, 21, 0.8)',
                  border: '1px solid var(--border-standard)',
                  color: 'var(--highlight-silver)',
                  textDecoration: 'none',
                }}
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href={BRAND_INFO.contactPlaceholders.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="Facebook"
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'rgba(11, 16, 21, 0.8)',
                  border: '1px solid var(--border-standard)',
                  color: 'var(--highlight-silver)',
                  textDecoration: 'none',
                }}
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={BRAND_INFO.contactPlaceholders.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'rgba(11, 16, 21, 0.8)',
                  border: '1px solid var(--border-standard)',
                  color: 'var(--highlight-silver)',
                  textDecoration: 'none',
                }}
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--metallic-silver)',
                marginBottom: '1.25rem',
              }}
            >
              Site Architecture
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 150ms' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleNavClick(e, '#portfolio')}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 150ms' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Portfolio Showcase
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleNavClick(e, '#process')}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 150ms' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Process & Procedures
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, '#projects')}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 150ms' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => handleNavClick(e, '#reviews')}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 150ms' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Reviews & Trust
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 150ms' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Guides / Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Standards & Philosophy Column */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--metallic-silver)',
                marginBottom: '1.25rem',
              }}
            >
              Professional Standards
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Shield size={16} style={{ color: 'var(--highlight-silver)', flexShrink: 0, marginTop: '2px' }} />
                <span>Ethical network expansion & transparent partnership governance.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Shield size={16} style={{ color: 'var(--highlight-silver)', flexShrink: 0, marginTop: '2px' }} />
                <span>Outcome-driven product development grounded in continuous discovery.</span>
              </div>

              {/* Offline Dossier Quick CTA */}
              <div style={{ marginTop: '0.75rem' }}>
                <button
                  onClick={openDownloadModal}
                  className="btn btn-secondary btn-sm"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    borderColor: 'rgba(56, 189, 248, 0.35)',
                    background: 'rgba(8, 18, 32, 0.7)',
                    fontSize: '0.78rem',
                    padding: '0.5rem 0.75rem',
                  }}
                >
                  <Download size={14} style={{ color: 'var(--blue-diamond-vibrant)' }} />
                  <span>Download Executive Dossier</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
          }}
        >
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            © {currentYear} {BRAND_INFO.name}. All rights reserved. Premium Black Diamond Portfolio.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={openDownloadModal}
              className="btn btn-secondary btn-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                borderColor: 'rgba(56, 189, 248, 0.35)',
              }}
            >
              <Download size={14} style={{ color: 'var(--blue-diamond-vibrant)' }} />
              <span>Download Portfolio</span>
            </button>

            <button
              onClick={handleScrollToTop}
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
