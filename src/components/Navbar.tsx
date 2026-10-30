import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { useDownloadModal } from '../context/useDownloadModal';

interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero', sectionId: 'hero' },
  { label: 'Services', href: '#services', sectionId: 'services' },
  { label: 'Portfolio', href: '#portfolio', sectionId: 'portfolio' },
  { label: 'Process & Procedures', href: '#process', sectionId: 'process' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Reviews', href: '#reviews', sectionId: 'reviews' },
  { label: 'Guides / Contact', href: '#contact', sectionId: 'contact' },
];

export const Navbar: React.FC = () => {
  const { openDownloadModal } = useDownloadModal();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Monitor scroll for sticky header background & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section tracking
      const scrollPosition = window.scrollY + 180;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      role="banner"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        height: 'var(--nav-height)',
        backgroundColor: isScrolled ? 'rgba(3, 5, 7, 0.88)' : 'rgba(3, 5, 7, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(192, 204, 218, 0.22)'
          : '1px solid rgba(192, 204, 218, 0.08)',
        transition: 'all 300ms ease',
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Brand Brand / Logo Left */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
          aria-label="FB Portfolio Homepage"
        >
          {/* Logo container preserving exact uploaded emblem */}
          <div
            style={{
              position: 'relative',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              padding: '2px',
              background: 'radial-gradient(circle, rgba(224,242,254,0.45) 0%, rgba(56,189,248,0.25) 60%, transparent 100%)',
              border: '1px solid rgba(56, 189, 248, 0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(56, 189, 248, 0.25)',
              flexShrink: 0,
            }}
          >
            <img
              src={BRAND_INFO.logoSrc}
              alt="FB Official Logo Emblem"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="font-serif-accent text-metallic"
              style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                lineHeight: 1.1,
              }}
            >
              {BRAND_INFO.name}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-secondary)',
                fontWeight: 500,
                letterSpacing: '0.02em',
                lineHeight: 1.2,
                whiteSpace: 'nowrap',
              }}
            >
              {BRAND_INFO.title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.5rem',
          }}
          className="desktop-nav-container"
        >
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <li key={item.sectionId}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'var(--highlight-silver)' : 'var(--text-secondary)',
                      textDecoration: 'none',
                      padding: '0.5rem 0.25rem',
                      position: 'relative',
                      transition: 'color 180ms ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '0',
                          width: '100%',
                          height: '2px',
                          background: 'linear-gradient(90deg, #FFFFFF, var(--blue-diamond-vibrant))',
                          borderRadius: '2px',
                          boxShadow: '0 0 10px rgba(56, 189, 248, 0.8)',
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Download Portfolio CTA */}
          <button
            onClick={openDownloadModal}
            className="btn btn-secondary btn-sm"
            style={{
              marginLeft: '0.25rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              borderColor: 'rgba(56, 189, 248, 0.4)',
              background: 'rgba(8, 18, 32, 0.75)',
            }}
            aria-label="Download Portfolio in various formats"
          >
            <Download size={14} style={{ color: 'var(--blue-diamond-vibrant)' }} />
            <span>Download</span>
          </button>

          {/* Let's Connect CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-primary btn-sm"
            style={{ marginLeft: '0.25rem' }}
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={15} />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
          className="btn-icon mobile-menu-toggle"
          style={{
            display: 'inline-flex',
            background: 'rgba(11, 16, 21, 0.8)',
            border: '1px solid rgba(192, 204, 218, 0.22)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(3, 5, 7, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            zIndex: 99,
            overflowY: 'auto',
            borderTop: '1px solid rgba(192, 204, 218, 0.15)',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              margin: '0 0 2rem 0',
              padding: 0,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.sectionId}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    display: 'block',
                    fontSize: '1.15rem',
                    fontWeight: activeSection === item.sectionId ? 700 : 500,
                    color: activeSection === item.sectionId ? 'var(--highlight-silver)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid rgba(192, 204, 218, 0.08)',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Download CTA */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openDownloadModal();
            }}
            className="btn btn-secondary"
            style={{
              width: '100%',
              padding: '0.85rem',
              marginBottom: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              borderColor: 'rgba(56, 189, 248, 0.4)',
              background: 'rgba(8, 18, 32, 0.9)',
            }}
          >
            <Download size={18} style={{ color: 'var(--blue-diamond-vibrant)' }} />
            <span>Download Portfolio & Dossier</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.9rem' }}
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      )}

      {/* Media query styling for responsive desktop nav vs mobile toggle */}
      <style>{`
        @media (min-width: 980px) {
          .desktop-nav-container {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
