import React, { useState } from 'react';
import {
  Compass,
  FileSearch,
  GitMerge,
  Activity,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Workflow,
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = PROCESS_STEPS[activeStepIndex];

  const getStepIcon = (iconName: string, isCurrent: boolean) => {
    const color = isCurrent ? '#030507' : 'var(--metallic-silver)';
    switch (iconName) {
      case 'Compass':
        return <Compass size={20} color={color} />;
      case 'FileSearch':
        return <FileSearch size={20} color={color} />;
      case 'GitMerge':
        return <GitMerge size={20} color={color} />;
      case 'Activity':
        return <Activity size={20} color={color} />;
      case 'Sparkles':
        return <Sparkles size={20} color={color} />;
      default:
        return <Workflow size={20} color={color} />;
    }
  };

  return (
    <section id="process" className="section-wrapper" aria-label="Working Process">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Workflow size={14} />
            <span>Structured Methodology</span>
          </span>
          <h2 className="section-title text-metallic">My Working Process</h2>
          <p className="section-intro">
            "A clear, structured approach designed to connect business objectives with thoughtful execution."
          </p>
        </div>

        {/* Desktop Horizontal Step Navigation / Timeline */}
        <div
          style={{
            marginBottom: '3rem',
            position: 'relative',
          }}
          className="timeline-nav-wrapper"
        >
          {/* Subtle Connector Line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '28px',
              left: '5%',
              right: '5%',
              height: '2px',
              backgroundColor: 'rgba(192, 204, 218, 0.15)',
              zIndex: 0,
            }}
            className="desktop-timeline-line"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '1rem',
              position: 'relative',
              zIndex: 1,
            }}
            className="timeline-steps-grid"
          >
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'center',
                    padding: '0.5rem',
                    transition: 'all 200ms ease',
                  }}
                  aria-label={`Step ${step.stepNumber}: ${step.phase}`}
                >
                  {/* Step Bubble Icon */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.85rem',
                      background: isSelected
                        ? 'linear-gradient(135deg, #FFFFFF 0%, var(--metallic-silver) 100%)'
                        : 'rgba(11, 16, 21, 0.95)',
                      border: isSelected
                        ? '2px solid #FFFFFF'
                        : '1px solid rgba(192, 204, 218, 0.25)',
                      boxShadow: isSelected
                        ? '0 0 25px rgba(242, 244, 247, 0.45), 0 8px 20px rgba(0, 0, 0, 0.7)'
                        : '0 4px 12px rgba(0, 0, 0, 0.5)',
                      transition: 'all 250ms ease',
                    }}
                  >
                    {getStepIcon(step.iconName, isSelected)}
                  </div>

                  {/* Step Number & Title */}
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: isSelected ? 'var(--highlight-silver)' : 'var(--text-muted)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Step {step.stepNumber}
                  </span>
                  <span
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: isSelected ? 700 : 500,
                      color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                      lineHeight: 1.3,
                    }}
                  >
                    {step.phase}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Interactive Step Inspector Panel */}
        <div
          className="diamond-card"
          style={{
            padding: '2.5rem',
            background: 'linear-gradient(145deg, #091322 0%, #040913 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
          }}
        >
          {/* Top Row: Phase Badge, Title & Progress Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.5rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid rgba(192, 204, 218, 0.14)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge badge-silver" style={{ fontSize: '0.8rem', padding: '0.35rem 0.8rem' }}>
                Phase 0{currentStep.stepNumber} — {currentStep.phase}
              </span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.015em' }}>
                {currentStep.title}
              </h3>
            </div>

            {/* Next / Previous Step Switchers */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="btn btn-secondary btn-sm"
                style={{
                  opacity: activeStepIndex === 0 ? 0.4 : 1,
                  cursor: activeStepIndex === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                Previous
              </button>
              <button
                disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                className="btn btn-primary btn-sm"
                style={{
                  opacity: activeStepIndex === PROCESS_STEPS.length - 1 ? 0.4 : 1,
                  cursor: activeStepIndex === PROCESS_STEPS.length - 1 ? 'not-allowed' : 'pointer',
                }}
              >
                <span>Next Step</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '900px',
            }}
          >
            {currentStep.description}
          </p>

          {/* 3-Column Breakdown: Inputs, Actions, Deliverables */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {/* Column 1: Key Inputs */}
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '10px',
                background: 'rgba(8, 12, 16, 0.75)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--metallic-silver)',
                  marginBottom: '1rem',
                }}
              >
                Required Inputs
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {currentStep.inputs.map((inp, idx) => (
                  <li key={idx} style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--metallic-silver)' }}>•</span>
                    <span>{inp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Key Actions */}
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '10px',
                background: 'rgba(8, 12, 16, 0.75)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--metallic-silver)',
                  marginBottom: '1rem',
                }}
              >
                Core Activities
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {currentStep.actions.map((act, idx) => (
                  <li key={idx} style={{ fontSize: '0.86rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <ArrowRight size={13} style={{ color: 'var(--metallic-silver)', flexShrink: 0, marginTop: '4px' }} />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Tangible Deliverables */}
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '10px',
                background: 'rgba(8, 12, 16, 0.75)',
                border: '1px solid rgba(192, 204, 218, 0.25)',
              }}
            >
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--highlight-silver)',
                  marginBottom: '1rem',
                }}
              >
                Concrete Deliverables
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {currentStep.deliverables.map((del, idx) => (
                  <li key={idx} style={{ fontSize: '0.86rem', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--highlight-silver)', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontWeight: 500 }}>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive timeline styles for mobile & tablet */}
      <style>{`
        @media (max-width: 860px) {
          .timeline-steps-grid {
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)) !important;
            gap: 0.75rem !important;
          }
          .desktop-timeline-line {
            display: none !important;
          }
          .timeline-steps-grid button {
            padding: 0.25rem !important;
          }
          .timeline-steps-grid button div {
            width: 44px !important;
            height: 44px !important;
          }
        }
      `}</style>
    </section>
  );
};
