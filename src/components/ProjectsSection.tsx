import React, { useState } from 'react';
import {
  FileText,
  Target,
  UserCheck,
  Search,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Cpu,
} from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import type { CaseStudy } from '../types';
import { Modal } from './Modal';

export const ProjectsSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="projects" className="section-wrapper" aria-label="Featured Case Studies">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <FileText size={14} />
            <span>In-Depth Case Studies</span>
          </span>
          <h2 className="section-title text-metallic">Featured Projects</h2>
          <p className="section-intro">
            "Explore detailed case studies that demonstrate how structured thinking and business strategy can address real-world challenges."
          </p>
        </div>

        {/* Editorial Case Study Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {CASE_STUDIES.map((study, idx) => (
            <article
              key={study.id}
              className="diamond-card"
              style={{
                padding: '2.75rem',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                background: 'linear-gradient(160deg, #091322 0%, #040913 100%)',
              }}
            >
              {/* Card Header: Index, Category & Title */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.75rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid rgba(192, 204, 218, 0.14)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span
                      className="font-serif-accent text-metallic"
                      style={{ fontSize: '1.25rem', fontWeight: 800 }}
                    >
                      Case Study 0{idx + 1}
                    </span>
                    <span className="badge badge-silver">{study.category}</span>
                    <span className="badge badge-concept">{study.badge}</span>
                  </div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {study.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedCase(study)}
                  className="btn btn-primary btn-sm"
                  style={{ alignSelf: 'center' }}
                >
                  <span>View Case Study</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Editorial Grid: Challenge & Objectives vs Role & Strategy */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2.5rem',
                  marginBottom: '2rem',
                }}
              >
                {/* Column 1: Business Challenge & Objectives */}
                <div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--metallic-silver)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                      <Target size={14} />
                      <span>The Business Challenge</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                      {study.businessChallenge}
                    </p>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--metallic-silver)', marginBottom: '0.6rem' }}>
                      Core Objectives
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {study.objectives.map((obj, oIdx) => (
                        <li key={oIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                          <CheckCircle2 size={15} style={{ color: 'var(--highlight-silver)', flexShrink: 0, marginTop: '3px' }} />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 2: Role, Research & Tools */}
                <div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--metallic-silver)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                      <UserCheck size={14} />
                      <span>Role & Responsibilities</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                      {study.roleAndResponsibilities}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--metallic-silver)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                      <Cpu size={14} />
                      <span>Tools & Methodologies</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.4rem' }}>
                      {study.toolsAndMethods.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '0.78rem',
                            padding: '0.25rem 0.65rem',
                            borderRadius: '4px',
                            background: 'rgba(199, 205, 213, 0.08)',
                            border: '1px solid rgba(192, 204, 218, 0.2)',
                            color: 'var(--highlight-silver)',
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom: Verified Outcomes / Target Metrics */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '10px',
                  background: 'rgba(8, 12, 16, 0.85)',
                  border: '1px solid rgba(192, 204, 218, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <TrendingUp size={18} style={{ color: 'var(--highlight-silver)' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--highlight-silver)' }}>
                    Target Impact & Architecture:
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {study.verifiedOutcomes[0]}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedCase(study)}
                  className="btn btn-secondary btn-sm"
                >
                  <span>Read Full Architecture</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep Case Study Modal Reader */}
      {selectedCase && (
        <Modal
          isOpen={!!selectedCase}
          onClose={() => setSelectedCase(null)}
          title={selectedCase.title}
          badge={selectedCase.badge}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Challenge & Scope */}
            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--metallic-silver)', marginBottom: '0.5rem' }}>
                Business Problem Context
              </h4>
              <p style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: 1.75 }}>
                {selectedCase.businessChallenge}
              </p>
            </div>

            {/* Research & Strategy */}
            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--metallic-silver)', marginBottom: '0.75rem' }}>
                Research & Strategic Formulation
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {selectedCase.researchAndStrategy.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    <Search size={16} style={{ color: 'var(--highlight-silver)', flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Execution Approach */}
            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--metallic-silver)', marginBottom: '0.75rem' }}>
                Execution Approach & Governance
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {selectedCase.executionApproach.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--highlight-silver)', flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Outcomes / Architecture */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '8px',
                background: 'rgba(8, 12, 16, 0.9)',
                border: '1px solid rgba(192, 204, 218, 0.25)',
              }}
            >
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--highlight-silver)', marginBottom: '0.75rem' }}>
                Target Architecture & Measurable Results
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedCase.verifiedOutcomes.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--highlight-silver)', fontSize: '0.9rem' }}>
                    <span>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Strategic Takeaways */}
            <div
              style={{
                borderLeft: '3px solid var(--metallic-silver)',
                paddingLeft: '1.25rem',
                color: 'var(--highlight-silver)',
                fontStyle: 'italic',
                fontSize: '0.975rem',
                lineHeight: 1.6,
              }}
            >
              "{selectedCase.keyTakeaways}"
            </div>

            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Note: This case study is an illustrative framework demonstrating professional capabilities, strategic problem solving, and execution governance.
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
