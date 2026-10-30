import React, { useState } from 'react';
import {
  Compass,
  Search,
  Layers,
  Share2,
  Handshake,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import type { Service } from '../types';
import { Modal } from './Modal';

export const ServicesSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Product Management' | 'Network Marketing'>('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (filter === 'All') return true;
    if (filter === 'Product Management') return service.category === 'Product Management';
    return service.category === 'Network Marketing & Business Growth';
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass size={24} style={{ color: 'var(--highlight-silver)' }} />;
      case 'Search':
        return <Search size={24} style={{ color: 'var(--highlight-silver)' }} />;
      case 'Layers':
        return <Layers size={24} style={{ color: 'var(--highlight-silver)' }} />;
      case 'Share2':
        return <Share2 size={24} style={{ color: 'var(--highlight-silver)' }} />;
      case 'Handshake':
        return <Handshake size={24} style={{ color: 'var(--highlight-silver)' }} />;
      case 'TrendingUp':
        return <TrendingUp size={24} style={{ color: 'var(--highlight-silver)' }} />;
      default:
        return <Sparkles size={24} style={{ color: 'var(--highlight-silver)' }} />;
    }
  };

  return (
    <section id="services" className="section-wrapper" aria-label="Professional Services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} />
            <span>Dual-Discipline Expertise</span>
          </span>
          <h2 className="section-title text-metallic">Professional Services</h2>
          <p className="section-intro">
            "Strategic solutions that connect product development, business growth, and relationship-driven marketing."
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'inline-flex',
              gap: '0.5rem',
              padding: '0.35rem',
              background: 'rgba(11, 16, 21, 0.8)',
              border: '1px solid var(--border-standard)',
              borderRadius: '9999px',
              marginTop: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {(['All', 'Product Management', 'Network Marketing'] as const).map((cat) => {
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '0.45rem 1.15rem',
                    fontSize: '0.84rem',
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
                  {cat === 'All' ? 'View All Services' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Services Responsive Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.75rem',
          }}
          className="services-grid"
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="diamond-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Card Top: Icon & Category Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      background: 'rgba(199, 205, 213, 0.08)',
                      border: '1px solid rgba(192, 204, 218, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="badge badge-silver" style={{ fontSize: '0.72rem' }}>
                    {service.category === 'Product Management' ? 'Product' : 'Growth & Network'}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.85rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {service.title}
                </h3>

                {/* Short Benefit-focused Description */}
                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                  }}
                >
                  {service.shortDesc}
                </p>

                {/* Key Deliverable Highlights */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--metallic-silver)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Key Deliverables
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.84rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <CheckCircle2 size={14} style={{ color: 'var(--metallic-silver)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Explore Service link */}
              <button
                onClick={() => setSelectedService(service)}
                className="btn btn-secondary btn-sm"
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  marginTop: '0.5rem',
                }}
              >
                <span>Explore Service</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          badge={selectedService.category}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--metallic-silver)', marginBottom: '0.5rem' }}>
                Service Overview
              </h4>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.02rem', lineHeight: 1.7 }}>
                {selectedService.fullDesc}
              </p>
            </div>

            <div
              style={{
                padding: '1rem',
                borderRadius: '8px',
                background: 'rgba(8, 12, 16, 0.7)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                Core Methodology
              </span>
              <p style={{ fontWeight: 600, color: 'var(--highlight-silver)', marginTop: '0.2rem' }}>
                {selectedService.methodology}
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--metallic-silver)', marginBottom: '0.75rem' }}>
                Comprehensive Deliverables
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--highlight-silver)', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ color: 'var(--text-primary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--metallic-silver)', marginBottom: '0.75rem' }}>
                Expected Strategic Impact
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedService.keyBenefits.map((benefit, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span style={{ color: 'var(--metallic-silver)', fontWeight: 700 }}>•</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  setSelectedService(null);
                  const contactEl = document.getElementById('contact');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary btn-sm"
              >
                <span>Discuss This Service</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Responsive styling */}
      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
