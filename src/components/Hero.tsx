import React from 'react';
import { ArrowRight, Compass, Share2, Globe, Download } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { useDownloadModal } from '../context/useDownloadModal';

export const Hero: React.FC = () => {
  const { openDownloadModal } = useDownloadModal();
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Overview"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - var(--nav-height))',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '3.5rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Global Connectivity SVG Nodes & World Map Mesh */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.28,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          {/* Blue Diamond World Map Grid Ellipses */}
          <ellipse cx="700" cy="400" rx="650" ry="320" stroke="rgba(56, 189, 248, 0.16)" strokeWidth="1" strokeDasharray="4 6" />
          <ellipse cx="700" cy="400" rx="480" ry="240" stroke="rgba(56, 189, 248, 0.22)" strokeWidth="1" />
          <ellipse cx="700" cy="400" rx="300" ry="160" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="1" strokeDasharray="3 5" />
          <line x1="50" y1="400" x2="1350" y2="400" stroke="rgba(56, 189, 248, 0.16)" strokeWidth="1" />
          <line x1="700" y1="50" x2="700" y2="750" stroke="rgba(56, 189, 248, 0.16)" strokeWidth="1" />

          {/* Connected Network Nodes & Vector Arcs in Blue Diamond & Cyan Sapphire */}
          <path d="M280,320 Q500,200 700,380 T1120,310" stroke="rgba(147, 197, 253, 0.35)" strokeWidth="1.5" strokeDasharray="6 6" />
          <path d="M350,520 Q560,420 820,490 T1200,430" stroke="rgba(56, 189, 248, 0.32)" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M420,240 Q700,120 980,260" stroke="rgba(29, 78, 216, 0.30)" strokeWidth="1" />

          {/* Glowing Blue Diamond Hub Nodes */}
          <circle cx="280" cy="320" r="4.5" fill="#E0F2FE" />
          <circle cx="280" cy="320" r="10" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1" />

          <circle cx="500" cy="240" r="3.5" fill="#38BDF8" />
          <circle cx="700" cy="380" r="6" fill="#FFFFFF" />
          <circle cx="700" cy="380" r="14" stroke="rgba(147, 197, 253, 0.7)" strokeWidth="1.5" />

          <circle cx="820" cy="490" r="4" fill="#38BDF8" />
          <circle cx="980" cy="260" r="4.5" fill="#E0F2FE" />
          <circle cx="1120" cy="310" r="4.5" fill="#E0F2FE" />
          <circle cx="1120" cy="310" r="10" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1" />
          <circle cx="1200" cy="430" r="3.5" fill="#38BDF8" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 460px) 1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Prominent Circular FB Logo in Metallic Ring */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Ambient Background Blue Diamond Spotlight Glow */}
            <div
              className="pulse-glow"
              style={{
                position: 'absolute',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(29, 78, 216, 0.14) 45%, rgba(2, 5, 11, 0) 75%)',
                filter: 'blur(40px)',
                zIndex: -1,
                pointerEvents: 'none',
              }}
            />

            {/* Emblem Framing: Preserves 100% of the uploaded Logo image */}
            <div
              className="metallic-emblem-ring subtle-float"
              style={{
                width: 'clamp(280px, 32vw, 400px)',
                height: 'clamp(280px, 32vw, 400px)',
              }}
            >
              <div
                className="metallic-emblem-inner"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                }}
              >
                <img
                  src={BRAND_INFO.logoSrc}
                  alt="FB — Official Profile Logo & Emblem"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </div>

            {/* Strategic Availability Status Pill */}
            <div
              style={{
                marginTop: '1.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.45rem 1rem',
                backgroundColor: 'rgba(8, 18, 32, 0.92)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                color: 'var(--blue-diamond-ice)',
                boxShadow: '0 4px 18px rgba(0,0,0,0.7), 0 0 14px rgba(56, 189, 248, 0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#38BDF8',
                  boxShadow: '0 0 10px #38BDF8, 0 0 3px #FFFFFF',
                  display: 'inline-block',
                }}
              />
              <span style={{ fontWeight: 500 }}>Open to Strategic Partnerships & Product Advisory</span>
            </div>
          </div>

          {/* Right Column: High-Impact Typography & Dual Discipline Positioning */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Eyebrow */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="section-eyebrow">
                <Globe size={13} style={{ color: 'var(--metallic-silver)' }} />
                <span>{BRAND_INFO.eyebrow}</span>
              </span>
            </div>

            {/* Main Brand Heading */}
            <h1
              className="font-serif-accent text-metallic"
              style={{
                fontSize: 'clamp(3rem, 6vw, 4.75rem)',
                fontWeight: 800,
                letterSpacing: '0.04em',
                lineHeight: 1.05,
                marginBottom: '0.5rem',
              }}
            >
              {BRAND_INFO.name}
            </h1>

            {/* Professional Title */}
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 2.4vw, 1.85rem)',
                fontWeight: 600,
                color: 'var(--highlight-silver)',
                letterSpacing: '-0.01em',
                marginBottom: '1rem',
              }}
            >
              {BRAND_INFO.title}
            </h2>

            {/* Tagline */}
            <p
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--metallic-silver)',
                letterSpacing: '0.01em',
                marginBottom: '1.25rem',
                borderLeft: '2px solid rgba(199, 205, 213, 0.4)',
                paddingLeft: '1rem',
              }}
            >
              "{BRAND_INFO.tagline}"
            </p>

            {/* Introduction paragraph */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '620px',
                marginBottom: '2.25rem',
              }}
            >
              {BRAND_INFO.heroIntro}
            </p>

            {/* Action Buttons: Explore My Work -> #portfolio; Work With Me -> #contact */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2.75rem',
              }}
            >
              <button
                onClick={() => handleScrollTo('portfolio')}
                className="btn btn-primary"
                style={{ padding: '0.9rem 1.8rem' }}
              >
                <span>Explore My Work</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="btn btn-secondary"
                style={{ padding: '0.9rem 1.8rem' }}
              >
                <span>Work With Me</span>
              </button>

              <button
                onClick={openDownloadModal}
                className="btn btn-secondary"
                style={{
                  padding: '0.9rem 1.6rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderColor: 'rgba(56, 189, 248, 0.45)',
                  boxShadow: '0 0 16px rgba(56, 189, 248, 0.15)',
                  background: 'rgba(8, 18, 32, 0.85)',
                }}
              >
                <Download size={17} style={{ color: 'var(--blue-diamond-vibrant)' }} />
                <span>Download Portfolio</span>
              </button>
            </div>

            {/* Dual Pillars Callout Footer */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid rgba(192, 204, 218, 0.12)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    background: 'rgba(199, 205, 213, 0.08)',
                    border: '1px solid rgba(192, 204, 218, 0.15)',
                    color: 'var(--highlight-silver)',
                  }}
                >
                  <Compass size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>Product Strategy</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Vision, Research & Outcome Roadmaps</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    background: 'rgba(199, 205, 213, 0.08)',
                    border: '1px solid rgba(192, 204, 218, 0.15)',
                    color: 'var(--highlight-silver)',
                  }}
                >
                  <Share2 size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>Network Growth</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Partnerships, Retention & Communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Breakpoint styling */}
      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.75rem !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            order: -1;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid .btn {
            width: 100%;
          }
          .hero-grid div[style*="display: flex; align-items: center; gap: 1rem"] {
            justify-content: center;
          }
          .hero-grid div[style*="border-left: 2px solid"] {
            border-left: none !important;
            border-top: 1px solid rgba(199, 205, 213, 0.3);
            border-bottom: 1px solid rgba(199, 205, 213, 0.3);
            padding: 0.75rem 0 !important;
          }
        }
      `}</style>
    </section>
  );
};
