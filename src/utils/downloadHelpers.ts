import { BRAND_INFO, SERVICES_DATA, PROCESS_STEPS, CASE_STUDIES } from '../data/portfolioData';

/**
 * Trigger download of the complete offline single-file HTML portfolio
 */
export const downloadOfflinePortfolio = () => {
  const link = document.createElement('a');
  link.href = '/FB-Portfolio-Offline.html';
  link.download = 'FB-Portfolio-Offline.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Trigger standard print dialog optimized with @media print CSS for PDF saving
 */
export const triggerPrintPortfolio = () => {
  window.print();
};

/**
 * Generate and download an executive vCard (.vcf)
 */
export const downloadVCard = () => {
  const vcardContent = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${BRAND_INFO.name}`,
    `N:;${BRAND_INFO.name};;;`,
    `TITLE:${BRAND_INFO.title}`,
    'ORG:FB Strategic Advisory & Network Growth',
    `EMAIL;TYPE=INTERNET,WORK:${BRAND_INFO.contactPlaceholders.email}`,
    `TEL;TYPE=CELL,VOICE:${BRAND_INFO.contactPlaceholders.whatsapp}`,
    `URL;TYPE=WORK:${BRAND_INFO.contactPlaceholders.linkedin}`,
    `NOTE:${BRAND_INFO.tagline} | ${BRAND_INFO.eyebrow}`,
    'END:VCARD',
  ].join('\r\n');

  const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'FB-Executive-Contact.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Generate and download a comprehensive Markdown executive dossier
 */
export const downloadMarkdownDossier = () => {
  const dateStr = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const content = `# ${BRAND_INFO.name} — Executive Portfolio & Career Dossier
**Title:** ${BRAND_INFO.title}  
**Focus:** ${BRAND_INFO.eyebrow}  
**Tagline:** "${BRAND_INFO.tagline}"  
**Export Date:** ${dateStr}

---

## Executive Summary
${BRAND_INFO.positioning}

${BRAND_INFO.heroIntro}

---

## Core Pillars & Service Offerings

${SERVICES_DATA.map(
  (s, idx) => `### ${idx + 1}. ${s.title} (${s.category})
*${s.shortDesc}*

${s.fullDesc}

**Methodology:** ${s.methodology}

**Key Deliverables:**
${s.deliverables.map((d) => `- ${d}`).join('\n')}

**Key Strategic Benefits:**
${s.keyBenefits.map((b) => `- ${b}`).join('\n')}
`
).join('\n')}

---

## Strategic Process & Delivery Methodology

${PROCESS_STEPS.map(
  (p) => `### Phase ${p.stepNumber}: ${p.phase} — ${p.title}
${p.description}

**Key Actions:**
${p.actions.map((a) => `- ${a}`).join('\n')}

**Core Deliverables:**
${p.deliverables.map((d) => `- ${d}`).join('\n')}
`
).join('\n')}

---

## Featured Case Studies & Strategic Blueprints

${CASE_STUDIES.map(
  (c, idx) => `### Case Study ${idx + 1}: ${c.title}
**Domain:** ${c.category} | *${c.badge}*

#### Challenge
${c.businessChallenge}

#### Key Objectives
${c.objectives.map((o) => `- ${o}`).join('\n')}

#### Execution Approach
${c.executionApproach.map((ea) => `- ${ea}`).join('\n')}

#### Verified Outcomes
${c.verifiedOutcomes.map((vo) => `- ${vo}`).join('\n')}

#### Strategic Takeaway
> "${c.keyTakeaways}"
`
).join('\n')}

---

## Contact & Strategic Advisory
- **Email:** ${BRAND_INFO.contactPlaceholders.email}
- **WhatsApp / Direct:** ${BRAND_INFO.contactPlaceholders.whatsapp}
- **LinkedIn:** ${BRAND_INFO.contactPlaceholders.linkedin}
- **Facebook:** ${BRAND_INFO.contactPlaceholders.facebook}
- **Instagram:** ${BRAND_INFO.contactPlaceholders.instagram}

---
*Generated from the Official FB Portfolio Web Application.*
`;

  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'FB-Executive-Portfolio-Dossier.md';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
