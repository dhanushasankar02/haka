/**
 * HAKA SOLUTIONS — HOMEPAGE JAVASCRIPT
 * Complete Interactive Controller for 7 Sections, Navbar & Footer
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. STORAGE HELPERS & THEME / RTL CONTROLS
     ========================================================================== */
  function safeStorageGet(key, fallback) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? val : fallback;
    } catch (err) {
      return fallback;
    }
  }

  function safeStorageSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (err) {
      /* storage disabled or restricted */
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (document.body) {
      document.body.setAttribute('data-theme', theme);
    }
    safeStorageSet('haka-theme', theme);

    const themeLabels = document.querySelectorAll('.themeLabel, #themeLabel');
    themeLabels.forEach(function (label) {
      label.textContent = theme === 'dark' ? 'Light' : 'Dark';
    });
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    if (document.body) {
      document.body.setAttribute('dir', dir);
    }
    safeStorageSet('haka-direction', dir);

    const rtlLabels = document.querySelectorAll('.rtlLabel, #rtlLabel');
    rtlLabels.forEach(function (label) {
      label.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    });

    const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlBtns.forEach(function (btn) {
      if (dir === 'rtl') {
        btn.classList.add('is-active-rtl');
      } else {
        btn.classList.remove('is-active-rtl');
      }
    });
  }

  window.toggleTheme = function () {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  };

  window.toggleRTL = function () {
    const current = document.documentElement.getAttribute('dir') || 'ltr';
    const next = current === 'ltr' ? 'rtl' : 'ltr';
    applyDirection(next);
  };

  // Immediate theme and direction application
  applyTheme(safeStorageGet('haka-theme', 'dark'));
  applyDirection(safeStorageGet('haka-direction', 'ltr'));

  /* ==========================================================================
     2. SECTION 2: COMPANY CAPABILITIES & STATISTICS CONFIGURATION
     ========================================================================== */
  const companyStatsConfig = {
    useVerifiedStats: false, // Set to true only when certified figures are provided
    verifiedStats: [
      { number: '10+', label: 'Years of Experience', detail: 'Delivering enterprise digital excellence' },
      { number: '250+', label: 'Projects Delivered', detail: 'Across global business verticals' },
      { number: '99.9%', label: 'Systems Reliability', detail: 'High-availability infrastructure' },
      { number: '24/7', label: 'Operational Support', detail: 'Continuous technical monitoring' }
    ],
    capabilityHighlights: [
      {
        tag: 'Core Focus',
        title: 'Technology Driven',
        desc: 'Architected with modern, scalable, and resilient digital infrastructure tailored to complex operational demands.'
      },
      {
        tag: 'Adaptability',
        title: 'Flexible Solutions',
        desc: 'Modular and configurable service frameworks designed to evolve alongside changing market opportunities.'
      },
      {
        tag: 'Value Creation',
        title: 'Business Focused',
        desc: 'Strategic engineering focused on measurable ROI, optimized process efficiency, and sustainable velocity.'
      },
      {
        tag: 'Continuity',
        title: 'Reliable Operations',
        desc: 'Dependable end-to-end operational support ensuring business continuity, security, and uncompromised quality.'
      }
    ]
  };

  function renderCompanyStats() {
    const statsContainer = document.getElementById('companyStatsGrid');
    if (!statsContainer) return;

    if (companyStatsConfig.useVerifiedStats && Array.isArray(companyStatsConfig.verifiedStats)) {
      statsContainer.innerHTML = companyStatsConfig.verifiedStats.map((item, index) => `
        <div class="stat-card reveal-item delay-${index + 1}">
          <div class="stat-number">${item.number}</div>
          <div class="stat-label">${item.label}</div>
          <div class="stat-detail">${item.detail}</div>
        </div>
      `).join('');
    } else {
      statsContainer.innerHTML = companyStatsConfig.capabilityHighlights.map((item, index) => `
        <div class="highlight-card reveal-item delay-${index + 1}">
          <span class="highlight-tag">${item.tag}</span>
          <h3 class="highlight-title">${item.title}</h3>
          <p class="highlight-desc">${item.desc}</p>
        </div>
      `).join('');
    }
  }

  /* ==========================================================================
     3. SECTION 4: INTERACTIVE FEATURED SOLUTIONS DATA & CONTROLLER
     ========================================================================== */
  const solutionsData = [
    {
      id: 'digital-workforce',
      tag: 'Workforce Acceleration',
      title: 'Digital Workforce',
      desc: 'Deploy resilient digital workforce frameworks that integrate specialized capabilities, optimize operational throughput, and scale dynamically with enterprise demands.',
      status: 'WF.STATUS: ACTIVE // PIPELINE SYNCED',
      steps: ['Task Mapping', 'Digital Tooling', 'Quality Gate', 'Output Sync']
    },
    {
      id: 'data-operations',
      tag: 'Data Integrity',
      title: 'Data Operations',
      desc: 'Systematize data validation, extraction, and verification pipelines to eliminate discrepancies, accelerate processing turnaround, and ensure reliable decision support.',
      status: 'DATA.STATUS: VERIFIED // ERROR RATE <0.02%',
      steps: ['Ingestion', 'Validation', 'Normalization', 'Reporting']
    },
    {
      id: 'business-automation',
      tag: 'Workflow Automation',
      title: 'Business Automation',
      desc: 'Streamline repetitive administrative and operational friction points with intelligent rule-based automations, maximizing team focus on core growth initiatives.',
      status: 'AUTO.STATUS: RUNNING // 4.2x SPEEDUP',
      steps: ['Trigger Event', 'Rule Evaluation', 'Auto Action', 'Audit Log']
    },
    {
      id: 'workflow-management',
      tag: 'Process Coordination',
      title: 'Workflow Management',
      desc: 'Orchestrate distributed cross-functional processes with real-time tracking, transparent milestone governance, and automated exception routing.',
      status: 'WM.STATUS: BALANCED // 100% VISIBILITY',
      steps: ['Dispatch', 'Task Allocation', 'Review Checkpoint', 'Approval']
    },
    {
      id: 'custom-technology',
      tag: 'Bespoke Architecture',
      title: 'Custom Technology',
      desc: 'Architect tailored digital solutions engineered around your organization’s unique operational requirements, existing technology stacks, and long-term milestones.',
      status: 'CUSTOM.STATUS: MODULAR // API READY',
      steps: ['Discovery', 'Architecture', 'Deployment', 'Lifecycle Support']
    }
  ];

  function initSolutionsInteractive() {
    const navItems = document.querySelectorAll('.solution-nav-item');
    const showcaseTag = document.getElementById('solShowcaseTag');
    const showcaseStatus = document.getElementById('solShowcaseStatus');
    const showcaseTitle = document.getElementById('solShowcaseTitle');
    const showcaseDesc = document.getElementById('solShowcaseDesc');
    const showcaseSteps = document.getElementById('solShowcaseSteps');

    if (!navItems.length || !showcaseTitle) return;

    function updateShowcase(index) {
      const data = solutionsData[index];
      if (!data) return;

      navItems.forEach((item, i) => {
        item.classList.toggle('is-active', i === index);
      });

      if (showcaseTag) showcaseTag.textContent = data.tag;
      if (showcaseStatus) showcaseStatus.textContent = data.status;
      if (showcaseTitle) showcaseTitle.textContent = data.title;
      if (showcaseDesc) showcaseDesc.textContent = data.desc;

      if (showcaseSteps && data.steps) {
        showcaseSteps.innerHTML = `
          <div class="wf-connector-line"></div>
          ${data.steps.map((step, idx) => `
            <div class="wf-step-node">
              <div class="wf-dot">${idx + 1}</div>
              <span class="wf-label">${step}</span>
            </div>
          `).join('')}
        `;
      }
    }

    navItems.forEach((item, index) => {
      item.addEventListener('click', () => updateShowcase(index));
      item.addEventListener('mouseenter', () => updateShowcase(index));
    });

    updateShowcase(0);
  }

  /* ==========================================================================
     4. SECTION 6: TECHNOLOGY & CAPABILITIES TABBED CONTROLLER
     ========================================================================== */
  const technologyData = [
    {
      id: 'data-analytics',
      badge: 'Data Intelligence',
      title: 'Data & Analytics',
      desc: 'Robust data processing, structured pipeline engineering, and actionable business intelligence reporting designed to transform raw operations into strategic foresight.',
      tags: ['Data Pipelines', 'ETL Verification', 'BI Dashboards', 'Predictive Metrics', 'Data Governance'],
      svgType: 'chart'
    },
    {
      id: 'cloud',
      badge: 'Scalable Infrastructure',
      title: 'Cloud Technology',
      desc: 'Modern cloud infrastructure, application hosting, and distributed storage solutions architected for high availability, enterprise fault tolerance, and elastic scale.',
      tags: ['Cloud Architecture', 'Elastic Systems', 'High Availability', 'Disaster Recovery', 'Multi-Region'],
      svgType: 'cloud'
    },
    {
      id: 'automation',
      badge: 'Intelligent Orchestration',
      title: 'Automation Solutions',
      desc: 'End-to-end workflow automation and systematic process optimization that eliminates manual latency, accelerates delivery cycles, and enforces operational consistency.',
      tags: ['Workflow Engines', 'Batch Processing', 'Rule Automation', 'Event Triggers', 'Zero Friction'],
      svgType: 'gears'
    },
    {
      id: 'ai',
      badge: 'Cognitive Workflows',
      title: 'Artificial Intelligence',
      desc: 'Pragmatic AI-assisted workflows and data-driven insights embedded directly into operational processes to enhance team productivity and decision accuracy.',
      tags: ['Machine Intelligence', 'Cognitive Routing', 'Data Modeling', 'Pattern Recognition', 'Adaptive Analytics'],
      svgType: 'neural'
    },
    {
      id: 'security',
      badge: 'Data Protection',
      title: 'Security Practices',
      desc: 'Strict access-management practices, granular permission controls, encryption protocols, and continuous monitoring designed to safeguard critical enterprise assets.',
      tags: ['Access Controls', 'Data Encryption', 'Threat Awareness', 'Zero Trust Posture', 'Audit Trails'],
      svgType: 'shield'
    }
  ];

  function getTechDiagramSVG(type) {
    if (type === 'chart') {
      return `
        <svg class="tech-diagram-svg" viewBox="0 0 340 220" fill="none">
          <rect x="10" y="10" width="320" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
          <line x1="30" y1="180" x2="310" y2="180" stroke="var(--border-subtle)" stroke-width="1.5"/>
          <line x1="30" y1="120" x2="310" y2="120" stroke="var(--border-subtle)" stroke-dasharray="4 4"/>
          <line x1="30" y1="60" x2="310" y2="60" stroke="var(--border-subtle)" stroke-dasharray="4 4"/>
          <path d="M40 160 L100 110 L160 130 L220 70 L280 40" stroke="var(--color-accent-cyan)" stroke-width="3" stroke-linecap="round"/>
          <path d="M40 160 L100 110 L160 130 L220 70 L280 40 L280 180 L40 180 Z" fill="rgba(72, 217, 237, 0.1)"/>
          <circle cx="100" cy="110" r="5" fill="#3478F6"/>
          <circle cx="160" cy="130" r="5" fill="#48D9ED"/>
          <circle cx="220" cy="70" r="5" fill="#3478F6"/>
          <circle cx="280" cy="40" r="6" fill="#48D9ED"/>
        </svg>
      `;
    } else if (type === 'cloud') {
      return `
        <svg class="tech-diagram-svg" viewBox="0 0 340 220" fill="none">
          <rect x="10" y="10" width="320" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
          <path d="M170 50 C195 50 215 68 218 92 C238 94 254 110 254 130 C254 152 236 170 214 170 L126 170 C100 170 80 150 80 124 C80 100 98 80 122 78 C130 62 148 50 170 50 Z" stroke="var(--color-accent-blue)" stroke-width="2.5" fill="rgba(52, 120, 246, 0.1)"/>
          <circle cx="130" cy="120" r="8" fill="#48D9ED"/>
          <circle cx="170" cy="110" r="8" fill="#3478F6"/>
          <circle cx="210" cy="120" r="8" fill="#48D9ED"/>
          <line x1="130" y1="120" x2="170" y2="110" stroke="var(--color-accent-cyan)" stroke-width="2"/>
          <line x1="170" y1="110" x2="210" y2="120" stroke="var(--color-accent-cyan)" stroke-width="2"/>
        </svg>
      `;
    } else if (type === 'gears') {
      return `
        <svg class="tech-diagram-svg" viewBox="0 0 340 220" fill="none">
          <rect x="10" y="10" width="320" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
          <circle cx="130" cy="110" r="40" stroke="var(--color-accent-cyan)" stroke-width="3" stroke-dasharray="8 6"/>
          <circle cx="130" cy="110" r="20" fill="rgba(72, 217, 237, 0.2)"/>
          <circle cx="205" cy="110" r="30" stroke="var(--color-accent-blue)" stroke-width="3" stroke-dasharray="6 4"/>
          <circle cx="205" cy="110" r="14" fill="rgba(52, 120, 246, 0.2)"/>
          <path d="M50 110 L80 110 M245 110 L285 110" stroke="var(--color-accent-cyan)" stroke-width="2"/>
        </svg>
      `;
    } else if (type === 'neural') {
      return `
        <svg class="tech-diagram-svg" viewBox="0 0 340 220" fill="none">
          <rect x="10" y="10" width="320" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
          <circle cx="70" cy="70" r="9" fill="#3478F6"/>
          <circle cx="70" cy="150" r="9" fill="#3478F6"/>
          <circle cx="170" cy="60" r="10" fill="#48D9ED"/>
          <circle cx="170" cy="110" r="10" fill="#3478F6"/>
          <circle cx="170" cy="160" r="10" fill="#48D9ED"/>
          <circle cx="270" cy="85" r="9" fill="#3478F6"/>
          <circle cx="270" cy="135" r="9" fill="#48D9ED"/>
          <line x1="70" y1="70" x2="170" y2="60" stroke="rgba(72, 217, 237, 0.4)" stroke-width="1.5"/>
          <line x1="70" y1="70" x2="170" y2="110" stroke="rgba(72, 217, 237, 0.4)" stroke-width="1.5"/>
          <line x1="70" y1="150" x2="170" y2="110" stroke="rgba(72, 217, 237, 0.4)" stroke-width="1.5"/>
          <line x1="70" y1="150" x2="170" y2="160" stroke="rgba(72, 217, 237, 0.4)" stroke-width="1.5"/>
          <line x1="170" y1="60" x2="270" y2="85" stroke="rgba(72, 217, 237, 0.4)" stroke-width="1.5"/>
          <line x1="170" y1="110" x2="270" y2="85" stroke="rgba(72, 217, 237, 0.4)" stroke-width="1.5"/>
          <line x1="170" y1="110" x2="270" y2="135" stroke="rgba(72, 217, 237, 0.4)" stroke-width="1.5"/>
          <line x1="170" y1="160" x2="270" y2="135" stroke="rgba(72, 217, 237, 0.4)" stroke-width="1.5"/>
        </svg>
      `;
    } else {
      return `
        <svg class="tech-diagram-svg" viewBox="0 0 340 220" fill="none">
          <rect x="10" y="10" width="320" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
          <path d="M170 50 L230 75 V125 C230 160 170 185 170 185 C170 185 110 160 110 125 V75 L170 50 Z" stroke="var(--color-accent-cyan)" stroke-width="3" fill="rgba(72, 217, 237, 0.1)"/>
          <circle cx="170" cy="115" r="14" stroke="var(--color-accent-blue)" stroke-width="3"/>
          <path d="M170 129 V145" stroke="var(--color-accent-blue)" stroke-width="3"/>
        </svg>
      `;
    }
  }

  function initTechTabs() {
    const tabButtons = document.querySelectorAll('.tech-tab-btn');
    const badgeEl = document.getElementById('techCapBadge');
    const titleEl = document.getElementById('techCapTitle');
    const descEl = document.getElementById('techCapDesc');
    const tagsContainer = document.getElementById('techCapTags');
    const diagramContainer = document.getElementById('techCapDiagram');

    if (!tabButtons.length || !titleEl) return;

    function selectTab(index) {
      const data = technologyData[index];
      if (!data) return;

      tabButtons.forEach((btn, i) => {
        btn.classList.toggle('is-active', i === index);
      });

      if (badgeEl) badgeEl.textContent = data.badge;
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;

      if (tagsContainer && data.tags) {
        tagsContainer.innerHTML = data.tags.map(tag => `
          <span class="tech-tag-pill">${tag}</span>
        `).join('');
      }

      if (diagramContainer) {
        diagramContainer.innerHTML = getTechDiagramSVG(data.svgType);
      }
    }

    tabButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => selectTab(index));
    });

    selectTab(0);
  }

  /* ==========================================================================
     4B. SERVICES PAGE: REQUIREMENTS INTERACTIVE SELECTOR (SECTION 6)
     ========================================================================== */
  const requirementsData = [
    {
      id: 'data-doc',
      title: 'Data and Documentation',
      category: 'Focus Area 01',
      desc: 'Assisting organizations with the structured capture, validation, digitization, and systematic organization of critical operational documentation and data flows.',
      features: [
        'Data ingestion & structured verification pipelines',
        'Standardized document categorization & tracking',
        'Systematic records lifecycle management',
        'Error prevention through structured validation'
      ],
      svgType: 'data'
    },
    {
      id: 'digital-ops',
      title: 'Digital Operations',
      category: 'Focus Area 02',
      desc: 'Connecting core operational activities with digital systems to enhance transparency, minimize execution delays, and maintain synchronized task workflows.',
      features: [
        'Centralized task orchestration & handoffs',
        'Cross-system workflow synchronization',
        'Operational tracking & bottleneck mitigation',
        'Consistent operational reporting'
      ],
      svgType: 'digital'
    },
    {
      id: 'workflow-improvement',
      title: 'Workflow Improvement',
      category: 'Focus Area 03',
      desc: 'Identifying friction points within operational paths and implementing streamlined, methodical adjustments that reduce overhead and improve turnaround times.',
      features: [
        'Operational pathway mapping & clarity',
        'Elimination of redundant procedural handoffs',
        'Structured checkpoints and quality control',
        'Scalable execution frameworks'
      ],
      svgType: 'workflow'
    },
    {
      id: 'business-process',
      title: 'Business Process Support',
      category: 'Focus Area 04',
      desc: 'Providing dependable operational execution for routine and repetitive business tasks, allowing internal teams to maintain focus on primary strategic initiatives.',
      features: [
        'Structured back-office task handling',
        'High-consistency operational delivery',
        'Documentation of standard operating procedures',
        'Adaptive resource allocation'
      ],
      svgType: 'process'
    },
    {
      id: 'tech-enabled',
      title: 'Technology-Enabled Services',
      category: 'Focus Area 05',
      desc: 'Deploying targeted technological utilities, scripts, and software-assisted workflows to empower teams and elevate day-to-day service delivery quality.',
      features: [
        'Custom workflow utilities and helper tools',
        'API & system interoperability connectors',
        'Automated notification and alert routing',
        'Digital interface enhancements'
      ],
      svgType: 'tech'
    },
    {
      id: 'ongoing-support',
      title: 'Ongoing Operational Support',
      category: 'Focus Area 06',
      desc: 'Continuous operational monitoring, proactive maintenance, and dedicated technical assistance to ensure business-critical activities run without disruption.',
      features: [
        'Proactive operational checks and health scans',
        'Rapid-response procedural troubleshooting',
        'System updates & continuous improvement cycle',
        'Sustained operational continuity'
      ],
      svgType: 'support'
    }
  ];

  function getReqsDiagramSVG(type) {
    switch (type) {
      case 'data':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="reqs-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            
            <!-- Document Source on Left -->
            <rect x="35" y="45" width="80" height="110" rx="6" fill="rgba(255, 255, 255, 0.04)" stroke="var(--border-subtle)"/>
            <line x1="48" y1="65" x2="102" y2="65" stroke="var(--color-accent-cyan)" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="48" y1="85" x2="92" y2="85" stroke="var(--color-text-muted)" stroke-width="2" stroke-linecap="round"/>
            <line x1="48" y1="105" x2="98" y2="105" stroke="var(--color-text-muted)" stroke-width="2" stroke-linecap="round"/>
            <line x1="48" y1="125" x2="82" y2="125" stroke="var(--color-accent-blue)" stroke-width="2" stroke-linecap="round"/>
            
            <!-- Ingestion Arrow -->
            <path d="M130 100 L170 100" stroke="var(--color-accent-cyan)" stroke-width="2.5" stroke-dasharray="4 4"/>
            <polygon points="174,100 165,95 165,105" fill="var(--color-accent-cyan)"/>
            
            <!-- Structured Database on Right -->
            <ellipse cx="230" cy="65" rx="42" ry="14" fill="rgba(52, 120, 246, 0.25)" stroke="var(--color-accent-blue)" stroke-width="2"/>
            <path d="M188 65 v35 c0 7.7 18.8 14 42 14 s42 -6.3 42 -14 V65" stroke="var(--color-accent-blue)" stroke-width="2" fill="rgba(14, 30, 56, 0.8)"/>
            <path d="M188 100 v35 c0 7.7 18.8 14 42 14 s42 -6.3 42 -14 V100" stroke="var(--color-accent-cyan)" stroke-width="2" fill="rgba(14, 30, 56, 0.8)"/>
            
            <!-- Verified Check Badge -->
            <circle cx="230" cy="165" r="16" fill="#10B981" fill-opacity="0.2" stroke="#10B981" stroke-width="2"/>
            <polyline points="222 165 228 171 238 160" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
      case 'digital':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="reqs-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <circle cx="75" cy="110" r="28" fill="rgba(52, 120, 246, 0.16)" stroke="var(--color-accent-blue)" stroke-width="2"/>
            <circle cx="160" cy="65" r="22" fill="rgba(72, 217, 237, 0.16)" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <circle cx="160" cy="155" r="22" fill="rgba(52, 120, 246, 0.16)" stroke="var(--color-accent-blue)" stroke-width="2"/>
            <circle cx="245" cy="110" r="28" fill="rgba(72, 217, 237, 0.2)" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <path d="M103 110 L138 65 M103 110 L138 155 M182 65 L217 110 M182 155 L217 110" stroke="var(--color-accent-cyan)" stroke-width="2" stroke-linecap="round"/>
            <circle cx="75" cy="110" r="8" fill="var(--color-accent-blue)"/>
            <circle cx="160" cy="65" r="6" fill="var(--color-accent-cyan)"/>
            <circle cx="160" cy="155" r="6" fill="var(--color-accent-blue)"/>
            <circle cx="245" cy="110" r="8" fill="var(--color-accent-cyan)"/>
          </svg>`;
      case 'workflow':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="reqs-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <rect x="30" y="85" width="65" height="50" rx="8" fill="rgba(52, 120, 246, 0.18)" stroke="var(--color-accent-blue)" stroke-width="1.5"/>
            <rect x="128" y="85" width="65" height="50" rx="8" fill="rgba(72, 217, 237, 0.18)" stroke="var(--color-accent-cyan)" stroke-width="1.5"/>
            <rect x="225" y="85" width="65" height="50" rx="8" fill="rgba(52, 120, 246, 0.18)" stroke="var(--color-accent-blue)" stroke-width="1.5"/>
            <path d="M95 110 L128 110 M193 110 L225 110" stroke="var(--color-accent-cyan)" stroke-width="2.5" stroke-dasharray="3 3"/>
            <circle cx="95" cy="110" r="3" fill="var(--color-accent-cyan)"/>
            <circle cx="193" cy="110" r="3" fill="var(--color-accent-cyan)"/>
            <path d="M62 145 C120 180, 200 180, 258 145" stroke="rgba(72, 217, 237, 0.5)" stroke-width="1.5" stroke-dasharray="4 4" fill="none"/>
          </svg>`;
      case 'process':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="reqs-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <circle cx="120" cy="110" r="42" stroke="var(--color-accent-blue)" stroke-width="2" stroke-dasharray="6 4" fill="none"/>
            <circle cx="120" cy="110" r="22" fill="rgba(52, 120, 246, 0.16)" stroke="var(--color-accent-cyan)" stroke-width="1.5"/>
            <circle cx="200" cy="110" r="42" stroke="var(--color-accent-cyan)" stroke-width="2" stroke-dasharray="6 4" fill="none"/>
            <circle cx="200" cy="110" r="22" fill="rgba(72, 217, 237, 0.16)" stroke="var(--color-accent-blue)" stroke-width="1.5"/>
          </svg>`;
      case 'tech':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="reqs-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <rect x="100" y="65" width="120" height="90" rx="10" fill="rgba(14, 30, 56, 0.85)" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <circle cx="160" cy="110" r="18" fill="rgba(72, 217, 237, 0.25)" stroke="var(--color-accent-blue)" stroke-width="2"/>
            <line x1="45" y1="110" x2="100" y2="110" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <line x1="220" y1="110" x2="275" y2="110" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <circle cx="45" cy="110" r="5" fill="var(--color-accent-blue)"/>
            <circle cx="275" cy="110" r="5" fill="var(--color-accent-blue)"/>
          </svg>`;
      default:
        return `
          <svg viewBox="0 0 320 220" fill="none" class="reqs-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <circle cx="160" cy="110" r="48" stroke="var(--color-accent-cyan)" stroke-width="2" stroke-dasharray="8 6" fill="none"/>
            <path d="M160 85 V110 L175 125" stroke="var(--color-accent-blue)" stroke-width="3" stroke-linecap="round"/>
            <circle cx="160" cy="110" r="6" fill="var(--color-accent-cyan)"/>
            <circle cx="160" cy="62" r="5" fill="var(--color-accent-blue)"/>
            <circle cx="208" cy="110" r="5" fill="var(--color-accent-cyan)"/>
            <circle cx="160" cy="158" r="5" fill="var(--color-accent-blue)"/>
            <circle cx="112" cy="110" r="5" fill="var(--color-accent-cyan)"/>
          </svg>`;
    }
  }

  function initServicesTabs() {
    const tabButtons = document.querySelectorAll('.reqs-tab-btn');
    const panelCatTag = document.getElementById('reqsPanelCatTag');
    const panelTitle = document.getElementById('reqsPanelTitle');
    const panelDesc = document.getElementById('reqsPanelDesc');
    const featuresList = document.getElementById('reqsFeaturesList');
    const visualBox = document.getElementById('reqsVisualBox');

    if (!tabButtons.length || !panelTitle) return;

    function selectReqTab(index) {
      const data = requirementsData[index];
      if (!data) return;

      tabButtons.forEach((btn, i) => {
        const isMatch = i === index;
        btn.classList.toggle('is-active', isMatch);
        btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });

      if (panelCatTag) panelCatTag.textContent = data.category;
      if (panelTitle) panelTitle.textContent = data.title;
      if (panelDesc) panelDesc.textContent = data.desc;

      if (featuresList && data.features) {
        featuresList.innerHTML = data.features.map(f => `
          <div class="reqs-feature-item">
            <div class="reqs-feature-bullet" aria-hidden="true"></div>
            <span>${f}</span>
          </div>
        `).join('');
      }

      if (visualBox) {
        visualBox.innerHTML = getReqsDiagramSVG(data.svgType);
      }
    }

    tabButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => selectReqTab(index));
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          const next = (index + 1) % tabButtons.length;
          tabButtons[next].focus();
          selectReqTab(next);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = (index - 1 + tabButtons.length) % tabButtons.length;
          tabButtons[prev].focus();
          selectReqTab(prev);
        }
      });
    });

    selectReqTab(0);
  }

  /* ==========================================================================
     5. HERO INTERACTIVE NETWORK CANVAS
     ========================================================================== */
  function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 20 : 42;
    const maxDistance = 140;

    let mouse = { x: null, y: null, radius: 120 };

    function resize() {
      const parent = canvas.parentElement;
      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 2 + 1;
        this.color = Math.random() > 0.4 ? 'rgba(72, 217, 237, ' : 'rgba(52, 120, 246, ';
        this.baseAlpha = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.baseAlpha + ')';
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.strokeStyle = `rgba(72, 217, 237, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    let animationFrameId;
    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connectParticles();

      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
      resize();
      initParticles();
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(animate);
      }
    });

    resize();
    initParticles();
    animate();
  }

  /* ==========================================================================
     6. SCROLL REVEALS (INTERSECTION OBSERVER)
     ========================================================================== */
  function initScrollReveals() {
    const revealElements = document.querySelectorAll('.reveal-item');
    if (!revealElements.length) return;

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  /* ==========================================================================
     6B. SOLUTIONS PAGE INTERACTIVE MAP & CHALLENGES SELECTOR
     ========================================================================== */
  const networkSolutionsData = [
    {
      id: 'workforce',
      badge: 'CONNECTED CAPABILITY 01',
      title: 'Digital Workforce',
      desc: 'Equips operational personnel with structured digital interfaces, automated task routing, and real-time operational aids to facilitate smoother shift delivery.',
      role: 'Feeds execution data directly into Data Operations, receives optimized process templates from Workflow Management, and leverages triggers executed by Business Automation.'
    },
    {
      id: 'data',
      badge: 'CONNECTED CAPABILITY 02',
      title: 'Data Operations',
      desc: 'Organizes, validates, and manages data flows so information remains dependable, error-checked, and immediately usable across departments.',
      role: 'Supplies verified parameters to Custom Technology utilities, verifies inputs for Business Automation rules, and produces audit-ready documentation for Workflow Management.'
    },
    {
      id: 'automation',
      badge: 'CONNECTED CAPABILITY 03',
      title: 'Business Automation',
      desc: 'Executes rule-based triggers and automated data handoffs to eliminate repetitive administrative overhead and accelerate routine processing.',
      role: 'Relieves the Digital Workforce of mundane manual steps, runs background data tasks for Data Operations, and automatically advances task states in Workflow Management.'
    },
    {
      id: 'workflow',
      badge: 'CONNECTED CAPABILITY 04',
      title: 'Workflow Management',
      desc: 'Connects teams, tasks, and information across operational stages to maintain end-to-end transparency, clear milestones, and accountable handoffs.',
      role: 'Coordinates operational queues across the Digital Workforce, maps task handoffs across automated pipelines, and interfaces with Custom Technology tools.'
    },
    {
      id: 'custom',
      badge: 'CONNECTED CAPABILITY 05',
      title: 'Custom Technology',
      desc: 'Delivers targeted technology solutions, scripts, and software-assisted workflows planned strictly around unique business specifications.',
      role: 'Extends existing organizational infrastructure, creates tailored data bridges into Data Operations, and automates unique workflow logic beyond off-the-shelf software.'
    }
  ];

  function initSolutionsMap() {
    const mapNodes = document.querySelectorAll('.sol-map-node');
    const badge = document.getElementById('netDetailBadge');
    const title = document.getElementById('netDetailTitle');
    const desc = document.getElementById('netDetailDesc');
    const role = document.getElementById('netDetailRole');

    if (!mapNodes.length || !title) return;

    function selectNode(index) {
      const data = networkSolutionsData[index];
      if (!data) return;

      mapNodes.forEach((node, i) => {
        const isMatch = i === index;
        node.classList.toggle('is-active', isMatch);
        node.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });

      if (badge) badge.textContent = data.badge;
      if (title) title.textContent = data.title;
      if (desc) desc.textContent = data.desc;
      if (role) role.textContent = data.role;
    }

    mapNodes.forEach((node, index) => {
      node.addEventListener('click', () => selectNode(index));
      node.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          const next = (index + 1) % mapNodes.length;
          mapNodes[next].focus();
          selectNode(next);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = (index - 1 + mapNodes.length) % mapNodes.length;
          mapNodes[prev].focus();
          selectNode(prev);
        }
      });
    });
  }

  const challengesData = [
    {
      id: 'coordination',
      badge: 'OPERATIONAL CHALLENGE 01',
      title: 'Workforce Coordination',
      problem: 'Teams struggling with disconnected tools, fragmented shift communication, and inconsistent procedural adherence.',
      solution: 'Explore technology-enabled workforce support that equips teams with structured digital tools, clear task mapping, and real-time operational guidance.',
      svgType: 'workforce'
    },
    {
      id: 'information',
      badge: 'OPERATIONAL CHALLENGE 02',
      title: 'Managing Information',
      problem: 'Critical documentation and operational data scattered across unverified spreadsheets, physical papers, and siloed software.',
      solution: 'Use structured data management workflows to ingest, validate, categorize, and securely maintain operational records throughout their entire lifecycle.',
      svgType: 'data'
    },
    {
      id: 'repetitive',
      badge: 'OPERATIONAL CHALLENGE 03',
      title: 'Repetitive Tasks',
      problem: 'Skilled staff losing hours every day manually copying data, sending recurring notifications, and performing routine handoffs.',
      solution: 'Explore business automation opportunities to automate routine procedural activities, reduce input errors, and accelerate throughput.',
      svgType: 'automation'
    },
    {
      id: 'disconnected',
      badge: 'OPERATIONAL CHALLENGE 04',
      title: 'Disconnected Processes',
      problem: 'Departmental silos where handoffs between teams lack status tracking, creating delays, miscommunication, and duplicate effort.',
      solution: 'Organize people, processes, and information through workflow management frameworks that provide transparent end-to-end visibility.',
      svgType: 'workflow'
    },
    {
      id: 'custom-reqs',
      badge: 'OPERATIONAL CHALLENGE 05',
      title: 'Specific Business Requirements',
      problem: 'Standard commercial off-the-shelf software failing to match unique operational workflows, requiring cumbersome manual workarounds.',
      solution: 'Consider technology designed around individual requirements, deploying tailored utilities, bespoke bridges, and targeted functional modules.',
      svgType: 'custom'
    }
  ];

  function getChallengeSVG(type) {
    switch (type) {
      case 'workforce':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="challenge-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <circle cx="80" cy="80" r="24" fill="#0E203C" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <circle cx="240" cy="80" r="24" fill="#0E203C" stroke="var(--color-accent-blue)" stroke-width="2"/>
            <circle cx="160" cy="155" r="28" fill="#081426" stroke="var(--color-accent-cyan)" stroke-width="2.5"/>
            <path d="M98 94 L142 138 M222 94 L178 138" stroke="var(--color-accent-cyan)" stroke-width="2" stroke-dasharray="4 3"/>
            <circle cx="160" cy="155" r="10" fill="rgba(72, 217, 237, 0.25)"/>
            <polyline points="155 155 159 159 167 151" stroke="var(--color-accent-cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
      case 'data':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="challenge-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <rect x="40" y="60" width="80" height="100" rx="6" fill="#081426" stroke="var(--color-accent-blue)" stroke-width="1.5"/>
            <line x1="55" y1="80" x2="105" y2="80" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <line x1="55" y1="100" x2="95" y2="100" stroke="var(--color-text-muted)" stroke-width="1.5"/>
            <line x1="55" y1="120" x2="100" y2="120" stroke="var(--color-text-muted)" stroke-width="1.5"/>
            <path d="M130 110 L170 110" stroke="var(--color-accent-cyan)" stroke-width="2" stroke-dasharray="4 4"/>
            <polygon points="174,110 166,106 166,114" fill="var(--color-accent-cyan)"/>
            <ellipse cx="235" cy="85" rx="35" ry="12" fill="rgba(52, 120, 246, 0.2)" stroke="var(--color-accent-blue)" stroke-width="2"/>
            <path d="M200 85 v40 c0 6.6 15.7 12 35 12 s35 -5.4 35 -12 V85" stroke="var(--color-accent-blue)" stroke-width="2" fill="none"/>
            <circle cx="235" cy="165" r="14" fill="#10B981" fill-opacity="0.2" stroke="#10B981" stroke-width="2"/>
            <polyline points="229 165 233 169 241 161" stroke="#10B981" stroke-width="2.5" stroke-linecap="round"/>
          </svg>`;
      case 'automation':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="challenge-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <circle cx="110" cy="110" r="38" stroke="var(--color-accent-blue)" stroke-width="2" stroke-dasharray="6 3" fill="none"/>
            <circle cx="110" cy="110" r="16" fill="rgba(52, 120, 246, 0.2)" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <circle cx="210" cy="110" r="38" stroke="var(--color-accent-cyan)" stroke-width="2" stroke-dasharray="6 3" fill="none"/>
            <circle cx="210" cy="110" r="16" fill="rgba(72, 217, 237, 0.2)" stroke="var(--color-accent-blue)" stroke-width="2"/>
            <path d="M148 110 L172 110" stroke="var(--color-accent-cyan)" stroke-width="3"/>
          </svg>`;
      case 'workflow':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="challenge-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <rect x="35" y="85" width="60" height="50" rx="6" fill="#0E203C" stroke="var(--color-accent-blue)" stroke-width="1.5"/>
            <rect x="130" y="85" width="60" height="50" rx="6" fill="#081426" stroke="var(--color-accent-cyan)" stroke-width="1.5"/>
            <rect x="225" y="85" width="60" height="50" rx="6" fill="#0E203C" stroke="var(--color-accent-blue)" stroke-width="1.5"/>
            <path d="M95 110 L130 110 M190 110 L225 110" stroke="var(--color-accent-cyan)" stroke-width="2.5" stroke-dasharray="4 3"/>
            <circle cx="95" cy="110" r="3" fill="var(--color-accent-cyan)"/>
            <circle cx="190" cy="110" r="3" fill="var(--color-accent-cyan)"/>
          </svg>`;
      case 'custom':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="challenge-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <rect x="90" y="65" width="140" height="90" rx="10" fill="#081426" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <rect x="105" y="80" width="110" height="18" rx="4" fill="rgba(72, 217, 237, 0.15)"/>
            <rect x="105" y="108" width="110" height="18" rx="4" fill="rgba(52, 120, 246, 0.15)"/>
            <circle cx="195" cy="89" r="4" fill="#10B981"/>
            <circle cx="195" cy="117" r="4" fill="#10B981"/>
          </svg>`;
      default:
        return '';
    }
  }

  function initChallengesSelector() {
    const tabButtons = document.querySelectorAll('.challenge-tab-btn');
    const badge = document.getElementById('chalBadge');
    const title = document.getElementById('chalTitle');
    const problem = document.getElementById('chalProblem');
    const solution = document.getElementById('chalSolution');
    const visualBox = document.getElementById('chalVisualBox');

    if (!tabButtons.length || !title) return;

    function selectChallenge(index) {
      const data = challengesData[index];
      if (!data) return;

      tabButtons.forEach((btn, i) => {
        const isMatch = i === index;
        btn.classList.toggle('is-active', isMatch);
        btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });

      if (badge) badge.textContent = data.badge;
      if (title) title.textContent = data.title;
      if (problem) problem.textContent = data.problem;
      if (solution) solution.textContent = data.solution;
      if (visualBox) visualBox.innerHTML = getChallengeSVG(data.svgType);
    }

    tabButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => selectChallenge(index));
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          const next = (index + 1) % tabButtons.length;
          tabButtons[next].focus();
          selectChallenge(next);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = (index - 1 + tabButtons.length) % tabButtons.length;
          tabButtons[prev].focus();
          selectChallenge(prev);
        }
      });
    });
  }

  /* ==========================================================================
     6C. TECHNOLOGY PAGE ECOSYSTEM & PRACTICE SELECTOR
     ========================================================================== */
  const techEcosystemData = [
    {
      id: 'data',
      badge: 'CONNECTED DOMAIN 01',
      title: 'Data & Analytics',
      desc: 'Processing, reporting and business intelligence that organizes information flows into verified decision support.',
      role: 'Supplies structured inputs to AI models, generates verified parameters for Automation triggers, and leverages Cloud for scalable data storage and access.'
    },
    {
      id: 'cloud',
      badge: 'CONNECTED DOMAIN 02',
      title: 'Cloud',
      desc: 'Infrastructure, applications and secure storage providing the foundation for highly available enterprise workflows.',
      role: 'Hosts automated processing engines, provides high-throughput pipelines for Data & Analytics, and enforces encrypted storage boundaries for Security.'
    },
    {
      id: 'automation',
      badge: 'CONNECTED DOMAIN 03',
      title: 'Automation',
      desc: 'Workflow automation and process optimization eliminating repetitive administrative bottlenecks.',
      role: 'Executes automated data pipelines for Analytics, acts on intelligence surfaced by AI, and triggers security policy enforcements across systems.'
    },
    {
      id: 'ai',
      badge: 'CONNECTED DOMAIN 04',
      title: 'AI',
      desc: 'AI-assisted workflows, intelligent automation and data-driven insights empowering operational personnel.',
      role: 'Discovers operational patterns from Data & Analytics, recommends routing optimizations to Automation, and flags anomalous behaviors for Security.'
    },
    {
      id: 'security',
      badge: 'CONNECTED DOMAIN 05',
      title: 'Security',
      desc: 'Data protection, access management and secure workflows maintaining continuous procedural integrity.',
      role: 'Enforces least-privilege boundaries across Cloud infrastructure, validates authorized triggers in Automation, and preserves audit trails for Data systems.'
    }
  ];

  function initTechEcosystem() {
    const ecoNodes = document.querySelectorAll('.tech-eco-node');
    const badge = document.getElementById('techEcoBadge');
    const title = document.getElementById('techEcoTitle');
    const desc = document.getElementById('techEcoDesc');
    const role = document.getElementById('techEcoRole');

    if (!ecoNodes.length || !title) return;

    function selectEcoNode(index) {
      const data = techEcosystemData[index];
      if (!data) return;

      ecoNodes.forEach((node, i) => {
        const isMatch = i === index;
        node.classList.toggle('is-active', isMatch);
        node.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });

      if (badge) badge.textContent = data.badge;
      if (title) title.textContent = data.title;
      if (desc) desc.textContent = data.desc;
      if (role) role.textContent = data.role;
    }

    ecoNodes.forEach((node, index) => {
      node.addEventListener('click', () => selectEcoNode(index));
      node.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          const next = (index + 1) % ecoNodes.length;
          ecoNodes[next].focus();
          selectEcoNode(next);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = (index - 1 + ecoNodes.length) % ecoNodes.length;
          ecoNodes[prev].focus();
          selectEcoNode(prev);
        }
      });
    });
  }

  const techPracticeData = [
    {
      id: 'data-use',
      badge: 'USE CASE 01',
      title: 'Understand Business Data',
      desc: 'Organize data and prepare reports to support business analysis, helping management monitor operational health and make evidence-backed choices.',
      points: [
        'Systematic data capture and multi-source verification',
        'Consolidated reporting dashboards tailored to executive teams',
        'Audit-friendly record storage and historical trend metrics'
      ],
      svgType: 'data'
    },
    {
      id: 'cloud-use',
      badge: 'USE CASE 02',
      title: 'Support Digital Infrastructure',
      desc: 'Represent how cloud infrastructure, applications, and storage fit into a digital environment, ensuring reliable availability and accessible tooling.',
      points: [
        'Structured compute allocation matching fluctuating workload demands',
        'Multi-region redundancy for business-critical operational applications',
        'Unified storage lakes with strict organizational access boundaries'
      ],
      svgType: 'cloud'
    },
    {
      id: 'auto-use',
      badge: 'USE CASE 03',
      title: 'Streamline Repetitive Tasks',
      desc: 'Illustrate how automation can support repeatable workflows, reducing manual re-entry errors and speeding up administrative processing cycles.',
      points: [
        'Automated intake and standard document format conversion',
        'Rules-driven validation routing preventing manual review backlogs',
        'Direct synchronization between operational databases and notifications'
      ],
      svgType: 'automation'
    },
    {
      id: 'ai-use',
      badge: 'USE CASE 04',
      title: 'Explore Data-Driven Insights',
      desc: 'Show how AI-assisted workflows can help explore patterns and insights across operational records, surfacing actionable observations for team review.',
      points: [
        'Anomaly detection across large volume operational feeds',
        'Content summarization supporting faster triage and customer support',
        'Predictive operational indicators alerting teams to process bottlenecks'
      ],
      svgType: 'ai'
    },
    {
      id: 'security-use',
      badge: 'USE CASE 05',
      title: 'Manage Access and Information',
      desc: 'Illustrate access management and data-protection practices designed to enforce role-based boundaries and protect confidential records.',
      points: [
        'Granular role-based permissions preventing unauthorized exposure',
        'Encrypted transit channels safeguarding external partner exchanges',
        'Comprehensive activity logging supporting verifiable compliance'
      ],
      svgType: 'security'
    }
  ];

  function getPracticeSVG(type) {
    switch (type) {
      case 'data':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="practice-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <rect x="35" y="45" width="85" height="110" rx="8" fill="#081426" stroke="var(--color-accent-blue)" stroke-width="1.5"/>
            <line x1="48" y1="65" x2="105" y2="65" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <line x1="48" y1="85" x2="95" y2="85" stroke="var(--color-text-muted)" stroke-width="1.5"/>
            <line x1="48" y1="105" x2="100" y2="105" stroke="var(--color-text-muted)" stroke-width="1.5"/>
            <path d="M135 100 L175 100" stroke="var(--color-accent-cyan)" stroke-width="2.5" stroke-dasharray="4 3"/>
            <polygon points="178,100 170,96 170,104" fill="var(--color-accent-cyan)"/>
            <circle cx="240" cy="100" r="38" fill="#0E203C" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <path d="M228 100 L236 108 L254 90" stroke="var(--color-accent-cyan)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
      case 'cloud':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="practice-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <path d="M160 55 C185 55 205 75 205 95 C225 95 240 110 240 130 C240 150 225 165 205 165 H115 C95 165 80 150 80 130 C80 112 92 98 110 95 C115 72 135 55 160 55 Z" stroke="var(--color-accent-cyan)" stroke-width="2" fill="rgba(52, 120, 246, 0.15)"/>
            <rect x="120" y="105" width="80" height="30" rx="6" fill="#081426" stroke="var(--color-accent-blue)" stroke-width="1.5"/>
            <text x="160" y="124" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="var(--color-accent-cyan)">INFRA_ACTIVE</text>
          </svg>`;
      case 'automation':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="practice-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <rect x="40" y="85" width="65" height="50" rx="8" fill="#0E203C" stroke="var(--color-accent-blue)" stroke-width="1.5"/>
            <rect x="128" y="85" width="65" height="50" rx="8" fill="#081426" stroke="var(--color-accent-cyan)" stroke-width="1.5"/>
            <rect x="215" y="85" width="65" height="50" rx="8" fill="#0E203C" stroke="#10B981" stroke-width="1.5"/>
            <path d="M105 110 L128 110 M193 110 L215 110" stroke="var(--color-accent-cyan)" stroke-width="2.5" stroke-dasharray="4 3"/>
            <circle cx="105" cy="110" r="3" fill="var(--color-accent-cyan)"/>
            <circle cx="193" cy="110" r="3" fill="var(--color-accent-cyan)"/>
          </svg>`;
      case 'ai':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="practice-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <circle cx="90" cy="80" r="16" fill="#081426" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <circle cx="90" cy="140" r="16" fill="#081426" stroke="var(--color-accent-blue)" stroke-width="2"/>
            <circle cx="170" cy="110" r="24" fill="#0E203C" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <circle cx="245" cy="110" r="18" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="2"/>
            <line x1="106" y1="86" x2="148" y2="102" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <line x1="106" y1="134" x2="148" y2="118" stroke="var(--color-accent-blue)" stroke-width="2"/>
            <line x1="194" y1="110" x2="227" y2="110" stroke="var(--color-accent-cyan)" stroke-width="2" stroke-dasharray="3 3"/>
          </svg>`;
      case 'security':
        return `
          <svg viewBox="0 0 320 220" fill="none" class="practice-visual-svg" aria-hidden="true">
            <rect x="10" y="10" width="300" height="200" rx="14" fill="rgba(52, 120, 246, 0.05)" stroke="var(--border-glass)"/>
            <circle cx="160" cy="110" r="48" fill="#081426" stroke="var(--color-accent-cyan)" stroke-width="2"/>
            <path d="M160 80 L188 92 V118 C188 138 160 152 160 152 C160 152 132 138 132 118 V92 Z" stroke="var(--color-accent-blue)" stroke-width="2.5" fill="rgba(52, 120, 246, 0.2)"/>
            <polyline points="148 114 156 122 172 104" stroke="var(--color-accent-cyan)" stroke-width="2.5" stroke-linecap="round"/>
          </svg>`;
      default:
        return '';
    }
  }

  function initTechPractice() {
    const tabButtons = document.querySelectorAll('.practice-tab-btn');
    const badge = document.getElementById('practiceBadge');
    const title = document.getElementById('practiceTitle');
    const desc = document.getElementById('practiceDesc');
    const points = document.getElementById('practicePoints');
    const visualBox = document.getElementById('practiceVisualBox');

    if (!tabButtons.length || !title) return;

    function selectPractice(index) {
      const data = techPracticeData[index];
      if (!data) return;

      tabButtons.forEach((btn, i) => {
        const isMatch = i === index;
        btn.classList.toggle('is-active', isMatch);
        btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });

      if (badge) badge.textContent = data.badge;
      if (title) title.textContent = data.title;
      if (desc) desc.textContent = data.desc;
      if (points && data.points) {
        points.innerHTML = data.points.map(pt => `
          <div class="practice-point-item">
            <span class="practice-bullet" aria-hidden="true"></span>
            <span>${pt}</span>
          </div>
        `).join('');
      }
      if (visualBox) visualBox.innerHTML = getPracticeSVG(data.svgType);
    }

    tabButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => selectPractice(index));
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          const next = (index + 1) % tabButtons.length;
          tabButtons[next].focus();
          selectPractice(next);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = (index - 1 + tabButtons.length) % tabButtons.length;
          tabButtons[prev].focus();
          selectPractice(prev);
        }
      });
    });
  }

  /* ==========================================================================
     7. APP CONTROLLER & NAVBAR SETUP
     ========================================================================== */
  function initApp() {
    // Re-verify theme and direction on complete load
    applyTheme(safeStorageGet('haka-theme', 'dark'));
    applyDirection(safeStorageGet('haka-direction', 'ltr'));

    const header = document.getElementById('hakaHeader');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const primaryNav = document.getElementById('primaryNav');
    const mobileBackdrop = document.getElementById('mobileBackdrop');
    const navLinks = document.querySelectorAll('.haka-nav-link');
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Mobile Hamburger
    if (hamburgerBtn && primaryNav) {
      function setMenu(isOpen) {
        hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
        primaryNav.classList.toggle('is-open', isOpen);
        if (mobileBackdrop) {
          mobileBackdrop.classList.toggle('is-active', isOpen);
        }
        document.body.classList.toggle('nav-open', isOpen);
      }

      hamburgerBtn.addEventListener('click', function () {
        const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        setMenu(!isOpen);
      });

      if (mobileBackdrop) {
        mobileBackdrop.addEventListener('click', function () {
          setMenu(false);
        });
      }

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && hamburgerBtn.getAttribute('aria-expanded') === 'true') {
          setMenu(false);
          hamburgerBtn.focus();
        }
      });

      navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          setMenu(false);
        });
      });

      window.addEventListener('resize', function () {
        if (window.innerWidth > 1024 && hamburgerBtn.getAttribute('aria-expanded') === 'true') {
          setMenu(false);
        }
      }, { passive: true });
    }

    // Sticky Header Scroll
    if (header) {
      function onScroll() {
        if (window.scrollY > 20) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // Back to Top Button
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Active Navigation Link Detection
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(function (link) {
      if (link.getAttribute('href') === currentPath) {
        navLinks.forEach(item => {
          item.classList.remove('active');
          item.removeAttribute('aria-current');
        });
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });

    // Run Section Engines
    renderCompanyStats();
    initSolutionsInteractive();
    initTechTabs();
    initServicesTabs();
    initSolutionsMap();
    initChallengesSelector();
    initTechEcosystem();
    initTechPractice();
    initHeroCanvas();
    initScrollReveals();
    initClientLoginModal();
    initCareersPage();
    initContactPage();
    initLoginPage();
  }

  /* ==========================================================================
     8. CLIENT LOGIN MODAL HANDLER
     ========================================================================== */
  function initClientLoginModal() {
    const modal = document.getElementById('clientLoginModal');
    const openBtns = document.querySelectorAll('[data-open-modal="client-login"]');
    const closeBtn = document.getElementById('loginModalCloseBtn');
    const backdrop = document.getElementById('loginModalBackdrop');
    if (!modal) return;

    function openModal(e) {
      if (e) e.preventDefault();
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      const emailInput = document.getElementById('clientEmail');
      if (emailInput) {
        setTimeout(function () {
          emailInput.focus();
        }, 120);
      }
    }

    function closeModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }

    openBtns.forEach(function (btn) {
      btn.addEventListener('click', openModal);
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });

    window.handleLoginSubmit = function () {
      const emailInput = document.getElementById('clientEmail');
      const emailVal = emailInput ? emailInput.value : 'Client';
      alert('Welcome, ' + emailVal + '! Client Portal authentication simulated successfully.');
      closeModal();
    };
  }

  /* ==========================================================================
     9. CAREERS PAGE CONTROLLER (7 UNIQUE SECTIONS)
     ========================================================================== */
  function initCareersPage() {
    const careersHero = document.getElementById('careersHero');
    if (!careersHero) return;

    // --- Section 3: Verified Job Openings Filter & Search ---
    const searchInput = document.getElementById('jobSearchInput');
    const locationFilter = document.getElementById('jobLocationFilter');
    const modeFilter = document.getElementById('jobModeFilter');
    const typeFilter = document.getElementById('jobTypeFilter');
    const resetBtn = document.getElementById('jobResetFiltersBtn');
    const emptyState = document.getElementById('jobsEmptyState');
    const jobsListContainer = document.getElementById('jobsListContainer');
    const jobCards = document.querySelectorAll('.job-listing-card');
    const visibleCountEl = document.getElementById('jobsVisibleCount');

    function filterJobs() {
      if (!jobCards.length) return;
      const term = (searchInput ? searchInput.value : '').toLowerCase().trim();
      const loc = (locationFilter ? locationFilter.value : 'all').toLowerCase();
      const mode = (modeFilter ? modeFilter.value : 'all').toLowerCase();
      const type = (typeFilter ? typeFilter.value : 'all').toLowerCase();

      let visibleCount = 0;
      jobCards.forEach(function (card) {
        const title = (card.getAttribute('data-title') || '').toLowerCase();
        const skills = (card.getAttribute('data-skills') || '').toLowerCase();
        const cardLoc = (card.getAttribute('data-location') || '').toLowerCase();
        const cardMode = (card.getAttribute('data-mode') || '').toLowerCase();
        const cardType = (card.getAttribute('data-type') || '').toLowerCase();

        const matchesTerm = !term || title.includes(term) || skills.includes(term);
        const matchesLoc = loc === 'all' || cardLoc === loc;
        const matchesMode = mode === 'all' || cardMode === mode;
        const matchesType = type === 'all' || cardType === type;

        if (matchesTerm && matchesLoc && matchesMode && matchesType) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (visibleCountEl) {
        visibleCountEl.textContent = String(visibleCount);
      }

      if (emptyState && jobsListContainer) {
        if (visibleCount === 0) {
          emptyState.classList.add('is-visible');
        } else {
          emptyState.classList.remove('is-visible');
        }
      }
    }

    if (searchInput) searchInput.addEventListener('input', filterJobs);
    if (locationFilter) locationFilter.addEventListener('change', filterJobs);
    if (modeFilter) modeFilter.addEventListener('change', filterJobs);
    if (typeFilter) typeFilter.addEventListener('change', filterJobs);

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (searchInput) searchInput.value = '';
        if (locationFilter) locationFilter.value = 'all';
        if (modeFilter) modeFilter.value = 'all';
        if (typeFilter) typeFilter.value = 'all';
        filterJobs();
      });
    }

    // Toggle job details expandable accordion
    const toggleButtons = document.querySelectorAll('.job-btn-toggle');
    toggleButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const card = btn.closest('.job-listing-card');
        if (!card) return;
        const expandable = card.querySelector('.job-details-expandable');
        if (!expandable) return;
        const isOpen = expandable.classList.contains('is-open');
        expandable.classList.toggle('is-open', !isOpen);
        btn.classList.toggle('is-expanded', !isOpen);
        const textSpan = btn.querySelector('.btn-toggle-text');
        if (textSpan) {
          textSpan.textContent = isOpen ? 'View Details' : 'Hide Details';
        }
      });
    });

    // "Apply Now" button connects chosen role to Section 7 Application Form
    const applyButtons = document.querySelectorAll('.job-btn-apply');
    const positionSelect = document.getElementById('applyPosition');
    const fullNameInput = document.getElementById('applyFullName');

    applyButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const role = btn.getAttribute('data-job-title');
        if (role && positionSelect) {
          let found = false;
          for (let i = 0; i < positionSelect.options.length; i++) {
            if (positionSelect.options[i].text.toLowerCase().includes(role.toLowerCase())) {
              positionSelect.selectedIndex = i;
              found = true;
              break;
            }
          }
          if (!found) {
            positionSelect.value = role;
          }
        }
        const applySection = document.getElementById('careersApply');
        if (applySection) {
          applySection.scrollIntoView({ behavior: 'smooth' });
          if (fullNameInput) {
            setTimeout(function () {
              fullNameInput.focus();
            }, 600);
          }
        }
      });
    });

    // --- Section 5: Skills & Professional Development Tabs ---
    const skillsData = {
      technology: {
        title: 'Technology Skills',
        desc: 'Focus on cultivating modern computational capabilities, reliable tool mastery, and scalable engineering practices.',
        focusAreas: [
          {
            title: 'Programming & Digital Tools',
            text: 'Modern web architectures, clean code modularity, design systems, and responsive front-end state management.'
          },
          {
            title: 'Data & Analytics Fundamentals',
            text: 'Structured telemetry, business metric tracking, API data contracts, and data-driven problem evaluation.'
          },
          {
            title: 'Automation & Tech Awareness',
            text: 'Workflow continuous integration, automated deployment, performance auditing, and emerging operational frameworks.'
          }
        ]
      },
      business: {
        title: 'Business Skills',
        desc: 'Bridge technical implementation with measurable operational value, clear stakeholder communication, and domain acumen.',
        focusAreas: [
          {
            title: 'Process Understanding',
            text: 'Mapping business workflows, identifying bottlenecks, and architecting solutions aligned with commercial goals.'
          },
          {
            title: 'Documentation & Communication',
            text: 'Authoring crisp technical specifications, client-facing runbooks, and structured cross-team presentations.'
          },
          {
            title: 'Problem-Solving & Structured Thinking',
            text: 'Root-cause analysis, iterative troubleshooting, and transforming ambiguous challenges into concrete roadmaps.'
          }
        ]
      },
      professional: {
        title: 'Professional Skills',
        desc: 'Strengthen collaborative leadership, reliable execution habits, and a sustained appetite for lifelong learning.',
        focusAreas: [
          {
            title: 'Teamwork & Collaboration',
            text: 'Cross-functional alignment, constructive peer code review, active listening, and inclusive team dynamics.'
          },
          {
            title: 'Time & Milestone Management',
            text: 'Prioritization, delivery sprint cadence, proactive expectation setting, and personal accountability.'
          },
          {
            title: 'Continuous Learning',
            text: 'Self-directed research, curiosity for new industry paradigms, and deliberate expansion of individual competencies.'
          }
        ]
      }
    };

    const skillTabButtons = document.querySelectorAll('.skills-path-tab-btn');
    const skillTitleEl = document.getElementById('skillsActiveTitle');
    const skillDescEl = document.getElementById('skillsActiveDesc');
    const skillCardsContainer = document.getElementById('skillsFocusContainer');

    function selectSkillPath(pathKey) {
      const data = skillsData[pathKey];
      if (!data) return;

      skillTabButtons.forEach(function (btn) {
        btn.classList.toggle('is-active', btn.getAttribute('data-skill-path') === pathKey);
      });

      if (skillTitleEl) skillTitleEl.textContent = data.title;
      if (skillDescEl) skillDescEl.textContent = data.desc;

      if (skillCardsContainer) {
        skillCardsContainer.innerHTML = data.focusAreas.map(function (item) {
          return `
            <div class="skills-focus-card">
              <h4 class="focus-card-title">${item.title}</h4>
              <p class="focus-card-text">${item.text}</p>
            </div>
          `;
        }).join('');
      }
    }

    skillTabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const pathKey = btn.getAttribute('data-skill-path');
        selectSkillPath(pathKey);
      });
    });

    // --- Section 6: Recruitment Journey Interactive Timeline ---
    const journeyData = {
      1: {
        badge: 'STAGE 01 — RESEARCH & ALIGNMENT',
        title: 'Explore Role Requirements',
        desc: 'Review the verified job openings, required competencies, and key responsibilities outlined on this careers page. Identify where your background, technical interests, and ambition align with HAKA Solutions operational goals.',
        tip: 'Applicant Tip: Check the work mode (On-site, Hybrid, or Remote) and verify that your core capabilities align with the listed skills.'
      },
      2: {
        badge: 'STAGE 02 — FORMAL SUBMISSION',
        title: 'Submit Application Details',
        desc: 'Complete the standardized application fields including verified contact info, relevant skills, experience background, and your latest resume. Confirm recruitment consent before submitting your details for hiring team evaluation.',
        tip: 'Applicant Tip: Ensure your resume is formatted as a clean PDF or Word document under 5MB with concise summaries of recent achievements.'
      },
      3: {
        badge: 'STAGE 03 — TEAM EVALUATION',
        title: 'Application Review & Screening',
        desc: 'Our hiring and technical leads carefully evaluate submitted qualifications against active operational criteria. We look for structured problem solvers who demonstrate accountability, clarity, and adaptability.',
        tip: 'Applicant Tip: Applications with specific examples of technical deliverables and collaborative execution stand out.'
      },
      4: {
        badge: 'STAGE 04 — INTERACTIVE CONVERSATION',
        title: 'Technical & Cultural Interview',
        desc: 'Shortlisted candidates are invited to an interactive conversation. We discuss your technical approaches, past project experience, how you solve complex operational puzzles, and how you thrive in a collaborative environment.',
        tip: 'Applicant Tip: Be prepared to walk through your decision-making rationale on past projects and share what keeps you excited about technology.'
      },
      5: {
        badge: 'STAGE 05 — DECISION & ONBOARDING',
        title: 'Next Steps & Feedback',
        desc: 'Candidates receive timely updates through the confirmed recruitment communication process. Successful applicants receive formal onboarding pathways and milestone integration plans.',
        tip: 'Applicant Tip: Recruitment steps may adapt to specific project vertical needs. We value transparent communication throughout the journey.'
      }
    };

    const journeyStepButtons = document.querySelectorAll('.journey-step-btn');
    const journeyBadgeEl = document.getElementById('journeyPanelBadge');
    const journeyTitleEl = document.getElementById('journeyPanelTitle');
    const journeyDescEl = document.getElementById('journeyPanelDesc');
    const journeyTipEl = document.getElementById('journeyPanelTip');

    function selectJourneyStep(stepNum) {
      const data = journeyData[stepNum];
      if (!data) return;

      journeyStepButtons.forEach(function (btn) {
        btn.classList.toggle('is-active', btn.getAttribute('data-step') === String(stepNum));
      });

      if (journeyBadgeEl) journeyBadgeEl.textContent = data.badge;
      if (journeyTitleEl) journeyTitleEl.textContent = data.title;
      if (journeyDescEl) journeyDescEl.textContent = data.desc;
      if (journeyTipEl) journeyTipEl.textContent = data.tip;
    }

    journeyStepButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const stepNum = btn.getAttribute('data-step');
        selectJourneyStep(stepNum);
      });
    });

    // --- Section 7: Application Form, Resume Validation & Review Workflow ---
    const applyForm = document.getElementById('careersApplicationForm');
    const resumeFileInput = document.getElementById('applyResume');
    const fileBadge = document.getElementById('applyFileBadge');
    const fileNameSpan = document.getElementById('applyFileName');
    const reviewModal = document.getElementById('applicationReviewModal');
    const reviewCloseBtn = document.getElementById('reviewModalCloseBtn');
    const editDetailsBtn = document.getElementById('reviewEditDetailsBtn');
    const finishDemoBtn = document.getElementById('reviewFinishDemoBtn');

    // Handle resume file selection & validation
    if (resumeFileInput) {
      resumeFileInput.addEventListener('change', function () {
        const file = resumeFileInput.files && resumeFileInput.files[0];
        if (!file) {
          if (fileBadge) fileBadge.classList.remove('is-visible');
          return;
        }

        const validExtensions = ['.pdf', '.doc', '.docx'];
        const fileName = file.name.toLowerCase();
        const isValidExt = validExtensions.some(ext => fileName.endsWith(ext));
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!isValidExt) {
          alert('Invalid file format. Please upload a PDF, DOC, or DOCX document.');
          resumeFileInput.value = '';
          if (fileBadge) fileBadge.classList.remove('is-visible');
          return;
        }

        if (file.size > maxSize) {
          alert('File is too large. Maximum allowed file size is 5MB.');
          resumeFileInput.value = '';
          if (fileBadge) fileBadge.classList.remove('is-visible');
          return;
        }

        if (fileBadge && fileNameSpan) {
          const sizeKb = Math.round(file.size / 1024);
          fileNameSpan.textContent = `${file.name} (${sizeKb} KB)`;
          fileBadge.classList.add('is-visible');
        }
      });
    }

    // Form submit -> Review Step
    if (applyForm) {
      applyForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = (document.getElementById('applyFullName')?.value || '').trim();
        const email = (document.getElementById('applyEmail')?.value || '').trim();
        const phone = (document.getElementById('applyPhone')?.value || '').trim();
        const position = document.getElementById('applyPosition')?.value || '';
        const location = (document.getElementById('applyLocation')?.value || '').trim();
        const skills = (document.getElementById('applySkills')?.value || '').trim();
        const exp = (document.getElementById('applyExperience')?.value || '').trim() || 'Not specified';
        const cover = (document.getElementById('applyCoverLetter')?.value || '').trim();
        const consent = document.getElementById('applyConsent')?.checked;
        const file = resumeFileInput?.files && resumeFileInput.files[0];

        // Validations
        if (!name || !email || !phone || !position || !location) {
          alert('Please fill out all required fields.');
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Please provide a valid email address.');
          return;
        }

        if (!consent) {
          alert('Please confirm the consent checkbox to proceed with your application review.');
          return;
        }

        // Populate Review Modal
        const revName = document.getElementById('revName');
        const revEmail = document.getElementById('revEmail');
        const revPhone = document.getElementById('revPhone');
        const revPosition = document.getElementById('revPosition');
        const revLocation = document.getElementById('revLocation');
        const revSkills = document.getElementById('revSkills');
        const revExp = document.getElementById('revExp');
        const revResume = document.getElementById('revResume');
        const revCover = document.getElementById('revCover');

        if (revName) revName.textContent = name;
        if (revEmail) revEmail.textContent = email;
        if (revPhone) revPhone.textContent = phone;
        if (revPosition) revPosition.textContent = position;
        if (revLocation) revLocation.textContent = location;
        if (revSkills) revSkills.textContent = skills || 'Not provided';
        if (revExp) revExp.textContent = exp;
        if (revResume) revResume.textContent = file ? file.name : 'No file attached';
        if (revCover) revCover.textContent = cover || 'None provided';

        // Open modal
        if (reviewModal) {
          reviewModal.classList.add('is-open');
          reviewModal.setAttribute('aria-hidden', 'false');
          document.body.classList.add('modal-open');
        }
      });
    }

    function closeReviewModal() {
      if (reviewModal) {
        reviewModal.classList.remove('is-open');
        reviewModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
      }
    }

    if (reviewCloseBtn) reviewCloseBtn.addEventListener('click', closeReviewModal);
    if (editDetailsBtn) editDetailsBtn.addEventListener('click', closeReviewModal);

    if (finishDemoBtn) {
      finishDemoBtn.addEventListener('click', function () {
        alert(
          'Application Review Verified (Frontend Demonstration):\n\n' +
          'Your entered details have been reviewed. Since this website runs without a backend, no personal data has been transmitted or stored.\n\n' +
          'For formal inquiries, please contact the verified recruitment address listed on this page.'
        );
        closeReviewModal();
      });
    }
  }

  /* ==========================================================================
     10. CONTACT PAGE CONTROLLER (7 UNIQUE SECTIONS)
     ========================================================================== */
  function initContactPage() {
    const contactHero = document.getElementById('contactHero');
    if (!contactHero) return;

    // --- Section 4: Interactive Service Category Selector ---
    const serviceDetails = {
      'data-digital': {
        title: 'Data & Digital Operations',
        tag: 'Category 01 — Core Operations',
        desc: 'Enterprise-grade data capture, pipeline hygiene, and operational digital support designed to turn raw inputs into actionable business intelligence with continuous quality auditing.',
        dropdownMatch: 'Data & Digital Operations',
        deliverables: [
          'Data Pipeline Standardization & Cleansing',
          'Structured Telemetry & Hygiene Auditing',
          'Digital Operations Integration & Monitoring',
          'Audit-Ready Business Metrics Reporting'
        ]
      },
      'tech-solutions': {
        title: 'Technology Solutions',
        tag: 'Category 02 — Systems & Tech',
        desc: 'Robust system architectures, modern computational tools, and custom technical implementations tailored to solve complex enterprise operational bottlenecks.',
        dropdownMatch: 'Technology Solutions',
        deliverables: [
          'System Architecture & Resilience Engineering',
          'Enterprise Platform Modernization',
          'Custom API Integration Protocols',
          'Scalable Microservices Frameworks'
        ]
      },
      'biz-process': {
        title: 'Business Process Support',
        tag: 'Category 03 — Process Engineering',
        desc: 'Structured procedural workflows, operational documentation, and cross-functional support systems that eliminate friction and improve delivery cadence.',
        dropdownMatch: 'Business Process Support',
        deliverables: [
          'Standard Operating Procedures (SOPs) Authoring',
          'Cross-Team Workflow Streamlining',
          'Service Delivery Cadence Optimization',
          'Operational Bottleneck Remediation'
        ]
      },
      'digital-services': {
        title: 'Digital Services',
        tag: 'Category 04 — Modern Web & UI',
        desc: 'Web engineering, responsive cross-platform user interfaces, accessible digital platforms, and design system stewardship built strictly on modern web standards.',
        dropdownMatch: 'Digital Services',
        deliverables: [
          'Accessible (a11y) Web Interface Engineering',
          'Cross-Device Responsive Systems (1920px–375px)',
          'Bidirectional (RTL / LTR) Localization',
          'Core Web Vitals & Performance Optimization'
        ]
      },
      'custom-solutions': {
        title: 'Custom Solutions',
        tag: 'Category 05 — Specialized Tooling',
        desc: 'Specialized tooling, bespoke software utilities, and targeted problem solving engineered to match unique organizational requirements and constraints.',
        dropdownMatch: 'Custom Solutions',
        deliverables: [
          'Bespoke Enterprise Software Tooling',
          'Legacy System Bridging Layers',
          'Targeted Automation & Scripting Workflows',
          'Rapid Prototyping & Feasibility Audits'
        ]
      },
      'support-ops': {
        title: 'Support & Operations',
        tag: 'Category 06 — Infrastructure & Care',
        desc: 'Reliable ongoing technical maintenance, monitoring telemetry, infrastructure health monitoring, and tier-1/2 operational support engagements.',
        dropdownMatch: 'Support & Operations',
        deliverables: [
          '24/7 Telemetry & Health Monitoring Oversight',
          'Structured Incident Resolution Protocols',
          'Infrastructure Governance & Patch Auditing',
          'Performance & Reliability SLA Advisory'
        ]
      }
    };

    const serviceTabs = document.querySelectorAll('.service-selector-btn');
    const panelTitle = document.getElementById('servicePanelTitle');
    const panelTag = document.getElementById('servicePanelTag');
    const panelDesc = document.getElementById('servicePanelDesc');
    const delivList = document.getElementById('serviceDelivList');
    const discussBtn = document.getElementById('serviceDiscussBtn');
    const serviceDropdown = document.getElementById('contactService');

    function selectServiceCategory(catKey) {
      const data = serviceDetails[catKey];
      if (!data) return;

      serviceTabs.forEach(function (tab) {
        const isMatch = tab.getAttribute('data-service-cat') === catKey;
        tab.classList.toggle('is-active', isMatch);
        tab.setAttribute('aria-selected', String(isMatch));
      });

      if (panelTitle) panelTitle.textContent = data.title;
      if (panelTag) panelTag.textContent = data.tag;
      if (panelDesc) panelDesc.textContent = data.desc;

      if (delivList) {
        delivList.innerHTML = '';
        data.deliverables.forEach(function (deliv) {
          const li = document.createElement('li');
          li.className = 'service-deliv-item';
          li.innerHTML =
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' +
            '<span>' + deliv + '</span>';
          delivList.appendChild(li);
        });
      }

      if (discussBtn) {
        discussBtn.setAttribute('data-target-service', data.dropdownMatch);
      }
    }

    serviceTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        const catKey = tab.getAttribute('data-service-cat');
        selectServiceCategory(catKey);
      });
    });

    if (discussBtn) {
      discussBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const targetService = discussBtn.getAttribute('data-target-service');
        if (targetService && serviceDropdown) {
          serviceDropdown.value = targetService;
          // Trigger change event for styling
          serviceDropdown.dispatchEvent(new Event('change'));
        }

        const enquirySection = document.getElementById('contactEnquiry');
        if (enquirySection) {
          enquirySection.scrollIntoView({ behavior: 'smooth' });
          const nameInput = document.getElementById('contactFullName');
          if (nameInput) {
            setTimeout(function () {
              nameInput.focus();
            }, 600);
          }
        }
      });
    }

    // --- Section 3: Contact Enquiry Form & Review Modal ---
    const enquiryForm = document.getElementById('contactEnquiryForm');
    const reviewModal = document.getElementById('enquiryReviewModal');
    const reviewCloseBtn = document.getElementById('enqReviewCloseBtn');
    const reviewEditBtn = document.getElementById('enqReviewEditBtn');
    const reviewFinishBtn = document.getElementById('enqReviewFinishBtn');
    const reviewBackdrop = document.getElementById('enqReviewBackdrop');

    const revName = document.getElementById('revEnqName');
    const revCompany = document.getElementById('revEnqCompany');
    const revEmail = document.getElementById('revEnqEmail');
    const revPhone = document.getElementById('revEnqPhone');
    const revService = document.getElementById('revEnqService');
    const revMessage = document.getElementById('revEnqMessage');

    function closeEnquiryModal() {
      if (reviewModal) {
        reviewModal.classList.remove('is-open');
        reviewModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
      }
    }

    if (enquiryForm) {
      enquiryForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const fullName = (document.getElementById('contactFullName')?.value || '').trim();
        const companyName = (document.getElementById('contactCompanyName')?.value || '').trim();
        const email = (document.getElementById('contactEmail')?.value || '').trim();
        const phone = (document.getElementById('contactPhone')?.value || '').trim();
        const service = document.getElementById('contactService')?.value || '';
        const message = (document.getElementById('contactMessage')?.value || '').trim();
        const consent = document.getElementById('contactConsent')?.checked;

        // Validations
        if (!fullName) {
          alert('Please enter your Full Name.');
          document.getElementById('contactFullName')?.focus();
          return;
        }

        if (!email) {
          alert('Please enter your Email Address.');
          document.getElementById('contactEmail')?.focus();
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Please enter a valid email address (e.g. name@company.com).');
          document.getElementById('contactEmail')?.focus();
          return;
        }

        if (!service) {
          alert('Please select a required service category.');
          document.getElementById('contactService')?.focus();
          return;
        }

        if (!message || message.length < 5) {
          alert('Please provide a message describing your requirement (minimum 5 characters).');
          document.getElementById('contactMessage')?.focus();
          return;
        }

        if (!consent) {
          alert('Please confirm the consent checkbox to allow HAKA SOLUTIONS to respond to your enquiry.');
          document.getElementById('contactConsent')?.focus();
          return;
        }

        // Populate Review Modal
        if (revName) revName.textContent = fullName;
        if (revCompany) revCompany.textContent = companyName || 'Not specified';
        if (revEmail) revEmail.textContent = email;
        if (revPhone) revPhone.textContent = phone || 'Not specified';
        if (revService) revService.textContent = service;
        if (revMessage) revMessage.textContent = message;

        // Open Modal
        if (reviewModal) {
          reviewModal.classList.add('is-open');
          reviewModal.setAttribute('aria-hidden', 'false');
          document.body.classList.add('modal-open');
        }
      });
    }

    if (reviewCloseBtn) reviewCloseBtn.addEventListener('click', closeEnquiryModal);
    if (reviewBackdrop) reviewBackdrop.addEventListener('click', closeEnquiryModal);

    if (reviewEditBtn) {
      reviewEditBtn.addEventListener('click', function () {
        closeEnquiryModal();
        const nameInput = document.getElementById('contactFullName');
        if (nameInput) {
          nameInput.focus();
        }
      });
    }

    if (reviewFinishBtn) {
      reviewFinishBtn.addEventListener('click', function () {
        alert(
          'Enquiry Review Verified (Frontend Demonstration):\n\n' +
          'Your enquiry details have been reviewed. Since this website runs without a backend, no message has been transmitted or saved.\n\n' +
          'To communicate with HAKA SOLUTIONS directly, please connect using the official company address and verified contact details shown on this page.'
        );
        closeEnquiryModal();
        if (enquiryForm) {
          enquiryForm.reset();
        }
      });
    }

    // --- Section 6 & 2: Copy Official Address Buttons ---
    const officialAddressText = 'HAKA SOLUTIONS, Union Bank Back Side, Kattupudi Street, Pallikonda – 635809.';
    const copyBtns = document.querySelectorAll('.js-copy-address');

    copyBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(officialAddressText).then(function () {
            const originalHTML = btn.innerHTML;
            btn.innerHTML =
              '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' +
              '<span>Address Copied! ✓</span>';
            setTimeout(function () {
              btn.innerHTML = originalHTML;
            }, 2500);
          }).catch(function () {
            prompt('Official Address (Copy to clipboard):', officialAddressText);
          });
        } else {
          prompt('Official Address (Copy to clipboard):', officialAddressText);
        }
      });
    });
  }

  /* ==========================================================================
     11. STANDALONE LOGIN PAGE CONTROLLER
     ========================================================================== */
  function initLoginPage() {
    const authForm = document.getElementById('authLoginForm');
    if (!authForm) return;

    const emailInput = document.getElementById('authEmail');
    const passwordInput = document.getElementById('authPassword');
    const togglePasswordBtn = document.getElementById('authTogglePasswordBtn');
    const ssoBtn = document.getElementById('authSsoBtn');
    const forgotLink = document.getElementById('authForgotLink');
    const ssoGoogleBtn = document.getElementById('ssoGoogleBtn');
    const ssoMicrosoftBtn = document.getElementById('ssoMicrosoftBtn');
    const ssoGithubBtn = document.getElementById('ssoGithubBtn');
    const ssoToast = document.getElementById('ssoFeedbackToast');
    let toastTimeout = null;

    function showSSOFeedback(providerName) {
      if (!ssoToast) {
        alert(
          providerName + ' Single Sign-On (SSO Demonstration):\n\n' +
          'In production, this initiates OAuth 2.0 / OpenID Connect authorization with ' + providerName + '.\n\n' +
          'This is a static frontend demonstration.'
        );
        return;
      }
      if (toastTimeout) {
        clearTimeout(toastTimeout);
      }
      ssoToast.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-accent-cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 14 14"></polyline>
        </svg>
        <span>Redirecting to <strong>${providerName}</strong> Enterprise Identity Provider (Demo Mode)...</span>
      `;
      ssoToast.classList.add('is-active');
      toastTimeout = setTimeout(() => {
        ssoToast.classList.remove('is-active');
      }, 3500);
    }

    if (ssoGoogleBtn) {
      ssoGoogleBtn.addEventListener('click', () => showSSOFeedback('Google Workspace'));
    }
    if (ssoMicrosoftBtn) {
      ssoMicrosoftBtn.addEventListener('click', () => showSSOFeedback('Microsoft Entra ID'));
    }
    if (ssoGithubBtn) {
      ssoGithubBtn.addEventListener('click', () => showSSOFeedback('GitHub Enterprise'));
    }

    // Toggle Password Visibility
    if (togglePasswordBtn && passwordInput) {
      togglePasswordBtn.addEventListener('click', function () {
        const isPassword = passwordInput.getAttribute('type') === 'password';
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
        togglePasswordBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');

        const eyeOpen = togglePasswordBtn.querySelector('.icon-eye-open');
        const eyeClosed = togglePasswordBtn.querySelector('.icon-eye-closed');
        if (eyeOpen && eyeClosed) {
          eyeOpen.style.display = isPassword ? 'none' : 'block';
          eyeClosed.style.display = isPassword ? 'block' : 'none';
        }
      });
    }

    // SSO Corporate Sign In Simulation
    if (ssoBtn) {
      ssoBtn.addEventListener('click', function () {
        alert(
          'Single Sign-On (Corporate SSO Simulation):\n\n' +
          'In an enterprise deployment, this action redirects to your organization’s identity provider (Okta, Azure AD, or PingFederate) using SAML 2.0 / OpenID Connect.\n\n' +
          'Since this is a static frontend demonstration, no external authentication handshake is executed.'
        );
      });
    }

    // Forgot Password Simulation
    if (forgotLink) {
      forgotLink.addEventListener('click', function (e) {
        e.preventDefault();
        const emailVal = (emailInput?.value || '').trim();
        const targetEmail = emailVal || 'your registered corporate email';
        alert(
          'Password Recovery (Frontend Demonstration):\n\n' +
          'A simulated password reset challenge has been triggered for: ' + targetEmail + '.\n\n' +
          'In production, an encrypted single-use recovery token is dispatched to verified organizational addresses.'
        );
      });
    }

    // Form Submit Handler
    authForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = (emailInput?.value || '').trim();
      const password = (passwordInput?.value || '').trim();

      if (!email) {
        alert('Please enter your corporate work email.');
        emailInput?.focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address (e.g. name@company.com).');
        emailInput?.focus();
        return;
      }

      if (!password || password.length < 6) {
        alert('Please enter your password (minimum 6 characters).');
        passwordInput?.focus();
        return;
      }

      // Successful Demo Feedback
      alert(
        'Client Portal Authentication Verified (Frontend Demonstration):\n\n' +
        'Welcome, ' + email + '!\n\n' +
        'Your credentials have been validated locally. Since HAKA SOLUTIONS operates this site as a static frontend without backend databases, no credentials have been stored or dispatched.\n\n' +
        'In production, this grants immediate access to live telemetry, engagement deliverables, and client support dashboards.'
      );
    });
  }

  /* Bootstrapping */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
