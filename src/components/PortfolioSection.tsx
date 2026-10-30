import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, Wrench, CheckCircle, Eye, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { PortfolioCategory, PortfolioItem } from '../types';
import { Modal } from './Modal';
import { useDownloadModal } from '../context/useDownloadModal';

const CATEGORIES: PortfolioCategory[] = [
  'All',
  'Product Management',
  'Strategy & Research',
  'Network Marketing',
  'Business Development',
];

export const PortfolioSection: React.FC = () => {
  const { openDownloadModal } = useDownloadModal();
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = PORTFOLIO_DATA.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="portfolio" className="section-wrapper" aria-label="Portfolio Showcase">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Briefcase size={14} />
            <span>Work Showcase</span>
          </span>
          <h2 className="section-title text-metallic">My Work Showcase</h2>
          <p className="section-intro">
            "A collection of product thinking, strategic initiatives, digital experiences, and business growth solutions."
          </p>

          {/* Category Filters */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              padding: '0.4rem',
              background: 'rgba(11, 16, 21, 0.85)',
              border: '1px solid var(--border-standard)',
              borderRadius: '9999px',
              marginTop: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.45rem 1.15rem',
                    fontSize: '0.825rem',
                    fontWeight: isSelected ? 600 : 500,
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    background: isSelected
                      ? 'linear-gradient(135deg, #FFFFFF 0%, var(--metallic-silver) 100%)'
                      : 'transparent',
                    color: isSelected ? '#030507' : 'var(--text-secondary)',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
          }}
          className="portfolio-grid"
        >
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="diamond-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1.75rem',
              }}
            >
              {/* Graphic Thumbnail Placeholder with Obsidian Gemstone Grid */}
              <div
                style={{
                  height: '170px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #040A14 0%, #09172E 50%, #02060D 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  boxShadow: 'inset 0 0 25px rgba(56, 189, 248, 0.08)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.25rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Blue Diamond Crystalline Facet Lattice */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.35,
                    backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.35) 1px, transparent 1px),
                                      linear-gradient(to right, rgba(56, 189, 248, 0.12) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(56, 189, 248, 0.12) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px, 40px 40px, 40px 40px',
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                  <span className="badge badge-silver" style={{ fontSize: '0.68rem' }}>
                    {item.category}
                  </span>
                  <span className="badge badge-concept" style={{ fontSize: '0.68rem' }}>
                    {item.badge}
                  </span>
                </div>

                <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      background: 'rgba(199, 205, 213, 0.1)',
                      border: '1px solid rgba(192, 204, 218, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Briefcase size={16} style={{ color: 'var(--highlight-silver)' }} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--highlight-silver)' }}>
                    Architecture & Modeling
                  </span>
                </div>
              </div>

              {/* Title & Short Description */}
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                  flexGrow: 1,
                }}
              >
                {item.shortDesc}
              </p>

              {/* Tools & Methods Pills */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                  <Wrench size={12} />
                  <span>Tools & Methods:</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {item.tools.slice(0, 3).map((tool, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        background: 'rgba(199, 205, 213, 0.06)',
                        border: '1px solid rgba(192, 204, 218, 0.14)',
                        color: 'var(--metallic-silver)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                  {item.tools.length > 3 && (
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', alignSelf: 'center' }}>
                      +{item.tools.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* View Details Action */}
              <button
                onClick={() => setSelectedItem(item)}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', justifyContent: 'space-between' }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Eye size={14} />
                  <span>View Details</span>
                </span>
                <ArrowUpRight size={14} />
              </button>
            </article>
          ))}
        </div>

        {/* Executive Portfolio Download Banner */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '2rem 2.5rem',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(8, 18, 32, 0.95) 0%, rgba(5, 11, 22, 0.95) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.65), 0 0 25px rgba(56, 189, 248, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span
              className="badge badge-silver"
              style={{
                marginBottom: '0.65rem',
                display: 'inline-block',
                fontSize: '0.7rem',
              }}
            >
              Offline Ready • Executive Formats
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.4rem' }}>
              Need an Offline Copy or Boardroom Dossier?
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Download this complete interactive portfolio as a self-contained offline HTML application, print an executive PDF dossier, or export the verified contact card.
            </p>
          </div>

          <button
            onClick={openDownloadModal}
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.75rem', flexShrink: 0 }}
          >
            <Download size={16} />
            <span>Download Portfolio</span>
          </button>
        </div>
      </div>

      {/* Portfolio Item Detail Modal */}
      {selectedItem && (
        <Modal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          badge={selectedItem.badge}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Category Banner */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.85rem 1rem',
                borderRadius: '8px',
                background: 'rgba(8, 12, 16, 0.8)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                Discipline Category:
              </span>
              <span style={{ fontWeight: 600, color: 'var(--highlight-silver)' }}>
                {selectedItem.category}
              </span>
            </div>

            {/* In-depth Framework Description */}
            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--metallic-silver)', marginBottom: '0.5rem' }}>
                Framework & Strategic Scope
              </h4>
              <p style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: 1.7 }}>
                {selectedItem.detailedDesc}
              </p>
            </div>

            {/* Tools & Execution Stack */}
            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--metallic-silver)', marginBottom: '0.65rem' }}>
                Tools, Methodologies & Stack
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selectedItem.tools.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      background: 'rgba(199, 205, 213, 0.08)',
                      border: '1px solid rgba(192, 204, 218, 0.25)',
                      color: 'var(--highlight-silver)',
                      fontSize: '0.85rem',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Deliverables / Outcomes */}
            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--metallic-silver)', marginBottom: '0.75rem' }}>
                Target Architecture & Outputs
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {selectedItem.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle size={16} style={{ color: 'var(--highlight-silver)', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ color: 'var(--text-primary)' }}>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Concept note disclaimer */}
            <div
              style={{
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '0.75rem',
                fontStyle: 'italic',
              }}
            >
              Note: This work is an illustrative demonstration and concept blueprint showcasing professional methodology, system design, and strategic architecture.
            </div>
          </div>
        </Modal>
      )}

      {/* Media Query */}
      <style>{`
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
