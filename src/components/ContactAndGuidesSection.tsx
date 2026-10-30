import React, { useState } from 'react';
import {
  BookOpen,
  Send,
  Mail,
  Phone,
  ArrowRight,
  Clock,
  Calendar,
  CheckCircle,
  AlertCircle,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { LinkedInIcon, FacebookIcon, InstagramIcon } from './SocialIcons';
import { GUIDES_DATA, BRAND_INFO } from '../data/portfolioData';
import type { Guide, ContactFormData } from '../types';
import { Modal } from './Modal';

export const ContactAndGuidesSection: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  // Form State
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    areaOfInterest: 'Product Management',
    budgetRange: 'Select Budget Range (Optional)',
    details: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  // Validation
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Full Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!formData.details.trim()) {
      errors.details = 'Project or collaboration details are required.';
    } else if (formData.details.trim().length < 15) {
      errors.details = 'Please provide at least 15 characters describing your initiative.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submission

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionStatus('idle');

    // Simulate reliable client-side processing with realistic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('success');
      setSubmittedData({ ...formData });
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        areaOfInterest: 'Product Management',
        budgetRange: 'Select Budget Range (Optional)',
        details: '',
      });
    }, 950);
  };

  return (
    <section id="contact" className="section-wrapper" aria-label="Guides and Contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} />
            <span>Knowledge & Collaboration</span>
          </span>
          <h2 className="section-title text-metallic">Guides & Contact</h2>
          <p className="section-intro">
            "Educational blueprints for sustainable growth, paired with a direct channel to collaborate on transformative product and network initiatives."
          </p>
        </div>

        {/* Two-Column Master Layout on Desktop, Stacking Cleanly on Mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.05fr) minmax(320px, 1fr)',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="guides-contact-grid"
        >
          {/* =========================================================================
              COLUMN A: Guides & Insights ("Learn & Grow")
             ========================================================================= */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid rgba(192, 204, 218, 0.15)',
              }}
            >
              <BookOpen size={22} style={{ color: 'var(--highlight-silver)' }} />
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Learn & Grow
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Strategic articles & frameworks across product and network growth.
                </p>
              </div>
            </div>

            {/* Guides Cards List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {GUIDES_DATA.map((guide) => (
                <article
                  key={guide.id}
                  className="diamond-card"
                  style={{
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                  }}
                  onClick={() => setSelectedGuide(guide)}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.6rem',
                    }}
                  >
                    <span className="badge badge-silver" style={{ fontSize: '0.68rem' }}>
                      {guide.category}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={12} />
                        {guide.readTime}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Calendar size={12} />
                        {guide.publishDate}
                      </span>
                    </div>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {guide.title}
                  </h4>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1rem',
                    }}
                  >
                    {guide.summary}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--highlight-silver)',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                    }}
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight size={14} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* =========================================================================
              COLUMN B: Contact Form ("Let's Build Something Global.")
             ========================================================================= */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Header for Column B */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid rgba(192, 204, 218, 0.15)',
              }}
            >
              <Send size={22} style={{ color: 'var(--highlight-silver)' }} />
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Let's Build Something Global.
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  "Have a product idea, collaboration opportunity, or business growth challenge? Let's start a conversation."
                </p>
              </div>
            </div>

            {/* Direct Editable Placeholders Box */}
            <div
              className="diamond-card"
              style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #0B1015 0%, #06090D 100%)',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--metallic-silver)',
                  marginBottom: '1rem',
                }}
              >
                Direct Communication Channels (Editable Placeholders)
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(199, 205, 213, 0.08)',
                      border: '1px solid var(--border-standard)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--highlight-silver)',
                    }}
                  >
                    <Mail size={16} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Email</span>
                    <a
                      href={`mailto:${BRAND_INFO.contactPlaceholders.email}`}
                      style={{ fontSize: '0.84rem', color: 'var(--highlight-silver)', textDecoration: 'none' }}
                    >
                      {BRAND_INFO.contactPlaceholders.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(199, 205, 213, 0.08)',
                      border: '1px solid var(--border-standard)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--highlight-silver)',
                    }}
                  >
                    <Phone size={16} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>WhatsApp</span>
                    <span style={{ fontSize: '0.84rem', color: 'var(--highlight-silver)' }}>
                      {BRAND_INFO.contactPlaceholders.whatsapp}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginTop: '1.25rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Professional Profiles:</span>
                <div style={{ display: 'flex', gap: '0.65rem' }}>
                  <a
                    href={BRAND_INFO.contactPlaceholders.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon"
                    aria-label="LinkedIn Profile"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'rgba(199, 205, 213, 0.06)',
                      border: '1px solid var(--border-standard)',
                      color: 'var(--highlight-silver)',
                      textDecoration: 'none',
                    }}
                  >
                    <LinkedInIcon size={15} />
                  </a>
                  <a
                    href={BRAND_INFO.contactPlaceholders.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon"
                    aria-label="Facebook Profile"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'rgba(199, 205, 213, 0.06)',
                      border: '1px solid var(--border-standard)',
                      color: 'var(--highlight-silver)',
                      textDecoration: 'none',
                    }}
                  >
                    <FacebookIcon size={15} />
                  </a>
                  <a
                    href={BRAND_INFO.contactPlaceholders.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon"
                    aria-label="Instagram Profile"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'rgba(199, 205, 213, 0.06)',
                      border: '1px solid var(--border-standard)',
                      color: 'var(--highlight-silver)',
                      textDecoration: 'none',
                    }}
                  >
                    <InstagramIcon size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form with Validation */}
            <div
              className="diamond-card"
              style={{
                padding: '2.25rem',
                border: '1px solid rgba(192, 204, 218, 0.35)',
              }}
            >
              {submissionStatus === 'success' ? (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '2rem 1rem',
                  }}
                >
                  <CheckCircle size={52} style={{ color: 'var(--highlight-silver)', margin: '0 auto 1.25rem auto' }} />
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.6rem' }}>
                    Message Dispatched Successfully
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you, <strong style={{ color: '#FFFFFF' }}>{submittedData?.fullName}</strong>. Your inquiry regarding{' '}
                    <strong style={{ color: '#FFFFFF' }}>{submittedData?.areaOfInterest}</strong> has been received. FB will review your collaboration details and follow up directly via <strong style={{ color: '#FFFFFF' }}>{submittedData?.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmissionStatus('idle')}
                    className="btn btn-secondary btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="form-fullName"
                      style={{
                        display: 'block',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="form-fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: '' });
                      }}
                      placeholder="e.g. Alexander Hayes"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(8, 12, 16, 0.85)',
                        border: formErrors.fullName
                          ? '1px solid #FF5E5B'
                          : '1px solid rgba(192, 204, 218, 0.25)',
                        color: '#FFFFFF',
                        fontSize: '0.925rem',
                      }}
                    />
                    {formErrors.fullName && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#FF7B79', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                        <AlertCircle size={13} />
                        {formErrors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="form-email"
                      style={{
                        display: 'block',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                      }}
                      placeholder="e.g. alexander@enterprise.com"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(8, 12, 16, 0.85)',
                        border: formErrors.email
                          ? '1px solid #FF5E5B'
                          : '1px solid rgba(192, 204, 218, 0.25)',
                        color: '#FFFFFF',
                        fontSize: '0.925rem',
                      }}
                    />
                    {formErrors.email && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#FF7B79', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                        <AlertCircle size={13} />
                        {formErrors.email}
                      </span>
                    )}
                  </div>

                  {/* Area of Interest */}
                  <div>
                    <label
                      htmlFor="form-area"
                      style={{
                        display: 'block',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Area of Interest *
                    </label>
                    <select
                      id="form-area"
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        background: '#080C10',
                        border: '1px solid rgba(192, 204, 218, 0.25)',
                        color: '#FFFFFF',
                        fontSize: '0.925rem',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="Product Management">Product Management</option>
                      <option value="Product Strategy">Product Strategy</option>
                      <option value="Network Marketing">Network Marketing</option>
                      <option value="Business Development">Business Development</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Optional Budget Range */}
                  <div>
                    <label
                      htmlFor="form-budget"
                      style={{
                        display: 'block',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Estimated Budget Range (Optional)
                    </label>
                    <select
                      id="form-budget"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        background: '#080C10',
                        border: '1px solid rgba(192, 204, 218, 0.25)',
                        color: '#FFFFFF',
                        fontSize: '0.925rem',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="Select Budget Range (Optional)">Select Budget Range (Optional)</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000 (Exploratory / Discovery)</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000 (Strategic Roadmap / Sprint)</option>
                      <option value="$15,000 - $50,000">$15,000 - $50,000 (Comprehensive Architecture)</option>
                      <option value="$50,000+">$50,000+ (Enterprise Multi-Channel Growth)</option>
                      <option value="Advisory / Equity">Strategic Advisory / Equity Alignment</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label
                      htmlFor="form-details"
                      style={{
                        display: 'block',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Project or Collaboration Details *
                    </label>
                    <textarea
                      id="form-details"
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => {
                        setFormData({ ...formData, details: e.target.value });
                        if (formErrors.details) setFormErrors({ ...formErrors, details: '' });
                      }}
                      placeholder="Outline your product vision, timeline, current bottlenecks, or partnership concept..."
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(8, 12, 16, 0.85)',
                        border: formErrors.details
                          ? '1px solid #FF5E5B'
                          : '1px solid rgba(192, 204, 218, 0.25)',
                        color: '#FFFFFF',
                        fontSize: '0.925rem',
                        resize: 'vertical',
                      }}
                    />
                    {formErrors.details && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#FF7B79', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                        <AlertCircle size={13} />
                        {formErrors.details}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '0.95rem',
                      marginTop: '0.5rem',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.75 : 1,
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="spin-animation" />
                        <span>Validating & Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.25rem' }}>
                    Your transmission is processed directly. No marketing spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Guide Detail Reader Modal */}
      {selectedGuide && (
        <Modal
          isOpen={!!selectedGuide}
          onClose={() => setSelectedGuide(null)}
          title={selectedGuide.title}
          badge={`${selectedGuide.category} • ${selectedGuide.readTime}`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Guide Meta */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <span style={{ fontSize: '0.85rem', color: 'var(--metallic-silver)' }}>
                Published: {selectedGuide.publishDate}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Author: FB Strategic Insights
              </span>
            </div>

            {/* Guide Sections */}
            {selectedGuide.sections.map((sec, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h4
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--highlight-silver)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {sec.heading}
                </h4>

                {sec.content.map((p, pIdx) => (
                  <p key={pIdx} style={{ color: 'var(--text-primary)', fontSize: '0.98rem', lineHeight: 1.75 }}>
                    {p}
                  </p>
                ))}

                {sec.keyTakeaway && (
                  <div
                    style={{
                      marginTop: '0.5rem',
                      padding: '0.85rem 1.15rem',
                      borderRadius: '6px',
                      background: 'rgba(199, 205, 213, 0.06)',
                      borderLeft: '3px solid var(--metallic-silver)',
                      color: 'var(--highlight-silver)',
                      fontSize: '0.88rem',
                      fontStyle: 'italic',
                    }}
                  >
                    <strong>Key Strategic Principle:</strong> {sec.keyTakeaway}
                  </div>
                )}
              </div>
            ))}

            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setSelectedGuide(null)}
                className="btn btn-secondary btn-sm"
              >
                Close Article
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Media Query for 2-column layout */}
      <style>{`
        @media (max-width: 960px) {
          .guides-contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-animation {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
};
