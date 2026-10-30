import React, { useState } from 'react';
import { MessageSquare, Quote, PlusCircle, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA } from '../data/portfolioData';
import type { Review } from '../types';
import { Modal } from './Modal';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS_DATA);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);

  // Form state for collaborator endorsement
  const [formData, setFormData] = useState({
    authorName: '',
    role: '',
    organization: '',
    serviceRelated: 'Product Strategy & Roadmaps',
    quote: '',
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.authorName || !formData.quote) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      authorName: formData.authorName,
      role: formData.role || 'Collaborator',
      organization: formData.organization || 'Independent',
      serviceRelated: formData.serviceRelated,
      quote: formData.quote,
      date: 'Just Now',
      isTemplate: false,
      avatarPlaceholder: formData.authorName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2),
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmissionSuccess(true);
    setTimeout(() => {
      setIsSubmitModalOpen(false);
      setSubmissionSuccess(false);
      setFormData({
        authorName: '',
        role: '',
        organization: '',
        serviceRelated: 'Product Strategy & Roadmaps',
        quote: '',
      });
    }, 1800);
  };

  return (
    <section id="reviews" className="section-wrapper" aria-label="Professional Reviews">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <MessageSquare size={14} />
            <span>Collaboration & Trust</span>
          </span>
          <h2 className="section-title text-metallic">What People Say</h2>
          <p className="section-intro">
            "Professional relationships are built through communication, collaboration, and trust."
          </p>

          {/* Environmental Compliance Notice */}
          <div
            style={{
              marginTop: '1.25rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              background: 'rgba(11, 16, 21, 0.7)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
            }}
          >
            <span>Notice: Sample collaborator cards are marked as template demonstrations.</span>
          </div>
        </div>

        {/* Reviews Responsive Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
          className="reviews-grid"
        >
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="diamond-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem',
                position: 'relative',
              }}
            >
              <div>
                {/* Top Row: Quote Icon & Template Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Quote size={28} style={{ color: 'var(--metallic-silver)', opacity: 0.6 }} />
                  {rev.isTemplate ? (
                    <span className="badge badge-concept" style={{ fontSize: '0.68rem' }}>
                      Template Placeholder
                    </span>
                  ) : (
                    <span className="badge badge-silver" style={{ fontSize: '0.68rem' }}>
                      Verified Entry
                    </span>
                  )}
                </div>

                {/* Service Tag */}
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--metallic-silver)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '1rem',
                  }}
                >
                  {rev.serviceRelated}
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    fontSize: '0.96rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: '1.75rem',
                  }}
                >
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, #303B48, #0B1015)',
                    border: '1px solid rgba(192, 204, 218, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: 'var(--highlight-silver)',
                    flexShrink: 0,
                  }}
                >
                  {rev.avatarPlaceholder}
                </div>

                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {rev.authorName}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {rev.role} • {rev.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action: Add Endorsement / Recommendation */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <PlusCircle size={16} />
            <span>Submit a Recommendation or Endorsement</span>
          </button>
        </div>
      </div>

      {/* Endorsement Submission Modal */}
      <Modal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        title="Leave a Collaborator Recommendation"
        badge="Community Trust"
      >
        {submissionSuccess ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle size={48} style={{ color: 'var(--highlight-silver)', margin: '0 auto 1rem auto' }} />
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Recommendation Submitted
            </h4>
            <p style={{ color: 'var(--text-secondary)' }}>
              Thank you for contributing to FB's collaborative record. Your endorsement has been registered.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmitReview} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Have you worked with FB on product initiatives, business development, or network growth? Share your experience below.
            </p>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.authorName}
                onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(8, 12, 16, 0.9)',
                  border: '1px solid rgba(192, 204, 218, 0.25)',
                  color: '#FFFFFF',
                  fontSize: '0.925rem',
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Professional Role
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. Head of Engineering"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(8, 12, 16, 0.9)',
                    border: '1px solid rgba(192, 204, 218, 0.25)',
                    color: '#FFFFFF',
                    fontSize: '0.925rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Synergy Corp"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(8, 12, 16, 0.9)',
                    border: '1px solid rgba(192, 204, 218, 0.25)',
                    color: '#FFFFFF',
                    fontSize: '0.925rem',
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                Related Service / Collaboration Area
              </label>
              <select
                value={formData.serviceRelated}
                onChange={(e) => setFormData({ ...formData, serviceRelated: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(8, 12, 16, 0.9)',
                  border: '1px solid rgba(192, 204, 218, 0.25)',
                  color: '#FFFFFF',
                  fontSize: '0.925rem',
                }}
              >
                <option value="Product Strategy & Vision">Product Strategy & Vision</option>
                <option value="Product Research & Market Analysis">Product Research & Market Analysis</option>
                <option value="Product Roadmaps & Planning">Product Roadmaps & Planning</option>
                <option value="Network Marketing Strategy">Network Marketing Strategy</option>
                <option value="Business Development & Partnerships">Business Development & Partnerships</option>
                <option value="Customer Acquisition & Growth">Customer Acquisition & Growth</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                Your Testimonial / Feedback *
              </label>
              <textarea
                required
                rows={4}
                value={formData.quote}
                onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                placeholder="Describe your collaborative experience with FB..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(8, 12, 16, 0.9)',
                  border: '1px solid rgba(192, 204, 218, 0.25)',
                  color: '#FFFFFF',
                  fontSize: '0.925rem',
                  resize: 'vertical',
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(false)}
                className="btn btn-secondary btn-sm"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm">
                <span>Submit Endorsement</span>
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* Media Query */}
      <style>{`
        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
