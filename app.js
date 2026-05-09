const STORAGE_KEY = "myflixPortfolioData.v1";
const SESSION_ACCESS_KEY = "myflixAccessMode.v1";
const SESSION_VIEWER_KEY = "myflixViewerName.v1";
const PASSWORD_HASH_KEY = "myflixOwnerPasswordHash.v1";
const PASSWORD_SALT_KEY = "myflixOwnerPasswordSalt.v1";
const UPLOAD_MAX_EDGE = 1280;
const UPLOAD_JPEG_QUALITY = 0.82;
const UPLOAD_SIZE_WARNING = 2200000;
const TOP_FEATURED_LIMIT = 6;
const HERO_ROTATION_MS = 6500;

const defaultData = {
  appName: "My-Flix",
  audiences: [
    {
      id: "audience-kartik",
      name: "Kartik",
      role: "owner",
      gradientStart: "#0a84ff",
      gradientEnd: "#49c6ff",
      iconText: "K",
      image: "assets/avatar-kartik.png"
    },
    {
      id: "audience-hr",
      name: "HR",
      role: "viewer",
      gradientStart: "#19c37d",
      gradientEnd: "#7bed9f",
      iconText: "HR",
      image: "assets/avatar-hr.png"
    },
    {
      id: "audience-guest",
      name: "Guest",
      role: "viewer",
      gradientStart: "#7048e8",
      gradientEnd: "#ff922b",
      iconText: "G",
      image: "assets/avatar-guest.png"
    }
  ],
  profiles: [
    {
      id: "projects-profile",
      name: "Projects",
      collectionKey: "projects",
      gradientStart: "#0a84ff",
      gradientEnd: "#49c6ff",
      iconText: "",
      image: ""
    },
    {
      id: "profile-profile",
      name: "Profile",
      collectionKey: "profile",
      gradientStart: "#19c37d",
      gradientEnd: "#7bed9f",
      iconText: "",
      image: ""
    },
    {
      id: "education-profile",
      name: "Education",
      collectionKey: "education",
      gradientStart: "#7048e8",
      gradientEnd: "#ff922b",
      iconText: "ED",
      image: ""
    }
  ],
  collections: {
    projects: {
      navLabel: "Projects",
      eyebrow: "Recent Project",
      emptyTitle: "No projects yet",
      featuredId: "project-cineboard",
      featuredIds: ["project-cineboard", "project-taskforge", "project-insight", "project-shopline"],
      items: [
        {
          id: "project-cineboard",
          title: "CineBoard",
          category: "React, API, Vercel",
          tagline: "A movie discovery dashboard with saved watchlists and fast search.",
          description:
            "A polished streaming-style dashboard that combines search, filters, saved lists, responsive cards, and deployment-ready frontend architecture.",
          skills: "React, routing, API integration, state management, responsive UI",
          image: "assets/project-cineboard.png",
          banner: "assets/hero-projects.png",
          githubUrl: "",
          liveUrl: "demo.html?project=cineboard",
          documentUrl: "",
          dateAdded: "2026-05-02"
        },
        {
          id: "project-taskforge",
          title: "TaskForge",
          category: "Full Stack Productivity",
          tagline: "Kanban boards, team notes, and status tracking in one workspace.",
          description:
            "A productivity app focused on project planning, reusable task templates, and clean handoff views for teams and hiring managers.",
          skills: "CRUD flows, forms, local persistence, dashboard UX",
          image: "assets/project-taskforge.png",
          banner: "assets/hero-projects.png",
          githubUrl: "",
          liveUrl: "demo.html?project=taskforge",
          documentUrl: "",
          dateAdded: "2026-04-27"
        },
        {
          id: "project-insight",
          title: "Insight Desk",
          category: "Analytics Dashboard",
          tagline: "KPI cards, charts, and export-ready reporting screens.",
          description:
            "A focused dashboard build showing data presentation, information hierarchy, and practical interface decisions for operational users.",
          skills: "Charts, dashboard layout, reusable components, filtering",
          image: "assets/project-insight.png",
          banner: "assets/hero-projects.png",
          githubUrl: "",
          liveUrl: "demo.html?project=insight-desk",
          documentUrl: "",
          dateAdded: "2026-03-19"
        },
        {
          id: "project-shopline",
          title: "ShopLine",
          category: "E-commerce Frontend",
          tagline: "Catalog browsing, product pages, and checkout-ready UI states.",
          description:
            "A commerce frontend with careful product cards, cart flows, responsive navigation, and conversion-focused page structure.",
          skills: "Component design, cart logic, responsive grids, UX polish",
          image: "assets/project-shopline.png",
          banner: "assets/hero-projects.png",
          githubUrl: "",
          liveUrl: "demo.html?project=shopline",
          documentUrl: "",
          dateAdded: "2026-02-06"
        }
      ]
    },
    profile: {
      navLabel: "Profile",
      eyebrow: "About Candidate",
      emptyTitle: "No profile items yet",
      featuredId: "profile-summary",
      featuredIds: ["profile-summary", "profile-resume", "profile-skills"],
      items: [
        {
          id: "profile-summary",
          title: "About Me",
          category: "Frontend Developer",
          tagline: "A quick hiring-manager view of strengths, interests, and working style.",
          description:
            "I build clean, responsive web experiences with careful attention to usability, maintainable code, and product context. This page can hold your summary, resume, portfolio notes, and personal documents.",
          skills: "Frontend development, UI engineering, problem solving, communication",
          image: "assets/profile-about.png",
          banner: "assets/hero-profile.png",
          githubUrl: "",
          liveUrl: "",
          documentUrl: "documents/resume.pdf",
          dateAdded: "2026-05-05"
        },
        {
          id: "profile-resume",
          title: "Resume",
          category: "Document",
          tagline: "A direct link to your latest resume.",
          description:
            "Replace the document URL with your actual resume file or a public document link. The portfolio will show it as a Netflix-style title card.",
          skills: "Resume, experience, contact details",
          image: "assets/profile-resume.png",
          banner: "assets/hero-profile.png",
          githubUrl: "",
          liveUrl: "",
          documentUrl: "documents/resume.pdf",
          dateAdded: "2026-04-25"
        },
        {
          id: "profile-skills",
          title: "Capabilities",
          category: "Skills",
          tagline: "A compact showcase of the tools and strengths you want HR to notice.",
          description:
            "Use this card for your technical stack, soft skills, preferred roles, and anything that helps recruiters understand where you fit.",
          skills: "React, JavaScript, HTML, CSS, Git, deployment, collaboration",
          image: "assets/profile-skills.png",
          banner: "assets/hero-profile.png",
          githubUrl: "",
          liveUrl: "",
          documentUrl: "",
          dateAdded: "2026-03-28"
        }
      ]
    },
    education: {
      navLabel: "Education",
      eyebrow: "Learning Path",
      emptyTitle: "No education items yet",
      featuredId: "education-degree",
      featuredIds: ["education-degree", "education-cert-react", "education-achievements"],
      items: [
        {
          id: "education-degree",
          title: "Degree",
          category: "Academic Background",
          tagline: "A card for your university, specialization, and academic highlights.",
          description:
            "Add your degree details, coursework, projects, and the document link for transcripts, certificates, or other proof HR may need.",
          skills: "Computer science fundamentals, web development, software engineering",
          image: "assets/education-degree.png",
          banner: "assets/hero-education.png",
          githubUrl: "",
          liveUrl: "",
          documentUrl: "documents/degree.pdf",
          dateAdded: "2026-05-03"
        },
        {
          id: "education-cert-react",
          title: "React Certificate",
          category: "Certification",
          tagline: "Coursework and proof of practical frontend training.",
          description:
            "Use this card for a certificate, bootcamp, online course, or any specialized training that strengthens your application.",
          skills: "React, components, hooks, app structure",
          image: "assets/education-react.png",
          banner: "assets/hero-education.png",
          githubUrl: "",
          liveUrl: "",
          documentUrl: "documents/react-certificate.pdf",
          dateAdded: "2026-04-29"
        },
        {
          id: "education-achievements",
          title: "Achievements",
          category: "Highlights",
          tagline: "Awards, hackathons, college projects, or academic recognition.",
          description:
            "Collect the education-related proof points that deserve attention, including links to PDFs, presentations, or project pages.",
          skills: "Hackathons, presentations, teamwork, problem solving",
          image: "assets/education-achievements.png",
          banner: "assets/hero-education.png",
          githubUrl: "",
          liveUrl: "",
          documentUrl: "",
          dateAdded: "2026-03-16"
        }
      ]
    }
  }
};

const app = document.getElementById("app");
const transitionEl = document.getElementById("studyTransition");
const iconTemplate = document.getElementById("iconTemplate");
let heroRotationTimer = null;

let data = loadData();
persistNormalizedData();
const requestedSection = new URLSearchParams(window.location.search).get("section");
const sessionAccess = sessionStorage.getItem(SESSION_ACCESS_KEY);
const sessionViewer = sessionStorage.getItem(SESSION_VIEWER_KEY);
const initialCollection =
  requestedSection && data.collections[requestedSection]
    ? requestedSection
    : data.profiles[0]?.collectionKey || Object.keys(data.collections)[0] || "projects";
let state = {
  view: requestedSection && data.collections[requestedSection] ? "browse" : "audiences",
  collectionKey: initialCollection,
  accessMode: sessionAccess === "admin" ? "admin" : "viewer",
  currentViewer: requestedSection ? sessionViewer || "Viewer" : null,
  passwordPrompt: false,
  passwordError: "",
  activeItemId: null,
  activeItemCollection: null,
  studioOpen: false,
  studioTab: "items",
  editingItemId: null,
  editingItemCollection: null,
  editingProfileId: null,
  itemFormCollection: initialCollection,
  studioScrollTop: 0
};

function loadData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return structuredClone(defaultData);
    const parsed = JSON.parse(stored);
    return normalizeData(parsed);
  } catch (error) {
    console.warn("Unable to load stored My-Flix data", error);
    return structuredClone(defaultData);
  }
}

function normalizeData(candidate) {
  const base = structuredClone(defaultData);
  const normalized = {
    appName: candidate?.appName || base.appName,
    audiences: Array.isArray(candidate?.audiences) && candidate.audiences.length ? candidate.audiences : base.audiences,
    profiles: Array.isArray(candidate?.profiles) && candidate.profiles.length ? candidate.profiles : base.profiles,
    collections: candidate?.collections && typeof candidate.collections === "object" ? candidate.collections : base.collections
  };

  normalized.audiences = normalized.audiences.map((audience, index) => normalizeAudience(audience, index));
  Object.entries(normalized.collections).forEach(([key, collection]) => {
    collection.navLabel = collection.navLabel || titleCase(key);
    collection.eyebrow = collection.eyebrow || "Showcase";
    collection.emptyTitle = collection.emptyTitle || `No ${collection.navLabel} items yet`;
    collection.items = Array.isArray(collection.items) ? collection.items : [];
    collection.items = collection.items.map((item, index) => normalizeItem(item, key, index));
    syncFeaturedIds(collection);
  });

  normalized.profiles = normalized.profiles.map((profile, index) => normalizeProfile(profile, index));
  repairDefaultSections(normalized, base);
  normalized.profiles.forEach((profile) => {
    if (!normalized.collections[profile.collectionKey]) {
      normalized.collections[profile.collectionKey] = createCollectionFromProfile(profile);
    }
  });
  Object.values(normalized.collections).forEach(syncFeaturedIds);

  return normalized;
}

function repairDefaultSections(normalized, base) {
  ["projects", "profile", "education"].forEach((collectionKey) => {
    const defaultCollection = base.collections[collectionKey];
    const defaultProfile = base.profiles.find((profile) => profile.collectionKey === collectionKey);

    if (!normalized.collections[collectionKey] && defaultCollection) {
      normalized.collections[collectionKey] = structuredClone(defaultCollection);
    }

    const hasProfile = normalized.profiles.some((profile) => profile.collectionKey === collectionKey);
    if (!hasProfile && defaultProfile) {
      const repairedProfile = normalizeProfile(structuredClone(defaultProfile), normalized.profiles.length);
      if (normalized.profiles.some((profile) => profile.id === repairedProfile.id)) {
        repairedProfile.id = `${repairedProfile.id}-${collectionKey}`;
      }
      normalized.profiles.push(repairedProfile);
    }
  });
}

function normalizeAudience(audience, index) {
  const fallbackId = `audience-${index + 1}`;
  const fallback = defaultData.audiences[index] || {};
  return {
    id: audience.id || slugify(audience.name || fallbackId),
    name: audience.name || `Viewer ${index + 1}`,
    role: audience.role === "owner" ? "owner" : "viewer",
    gradientStart: audience.gradientStart || fallback.gradientStart || "#0a84ff",
    gradientEnd: audience.gradientEnd || fallback.gradientEnd || "#49c6ff",
    iconText: audience.iconText || fallback.iconText || "",
    image: audience.image || fallback.image || ""
  };
}

function normalizeProfile(profile, index) {
  const fallbackId = `profile-${index + 1}`;
  return {
    id: profile.id || slugify(profile.name || fallbackId),
    name: profile.name || `Profile ${index + 1}`,
    collectionKey: profile.collectionKey || "projects",
    gradientStart: profile.gradientStart || "#0a84ff",
    gradientEnd: profile.gradientEnd || "#49c6ff",
    iconText: profile.iconText || "",
    image: profile.image || ""
  };
}

function normalizeItem(item, collectionKey, index) {
  const title = item.title || `Untitled ${index + 1}`;
  const id = item.id || `${collectionKey}-${slugify(title)}-${Date.now()}`;
  return {
    id,
    title,
    category: item.category || "Showcase",
    tagline: item.tagline || "",
    description: item.description || "",
    skills: item.skills || "",
    image: item.image || "assets/project-cineboard.png",
    banner: item.banner || item.image || "assets/hero-projects.png",
    githubUrl: normalizeGithubUrl(item.githubUrl || ""),
    liveUrl: normalizeLiveUrl(item.liveUrl || "", id),
    documentUrl: item.documentUrl || "",
    dateAdded: item.dateAdded || todayString()
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data, null, 2));
}

function persistNormalizedData() {
  try {
    saveData();
  } catch (error) {
    console.warn("Unable to persist normalized My-Flix data", error);
  }
}

function render() {
  if (state.view !== "browse") {
    stopHeroRotator();
  }

  if (state.view === "audiences") {
    renderAudienceScreen();
  } else if (state.view === "sections") {
    renderSectionScreen();
  } else {
    renderBrowseScreen();
  }
  restoreStudioScrollAfterRender();
}

function getStudioScrollElement() {
  return document.querySelector(".studio .modal-scroll");
}

function rememberStudioScroll() {
  const scrollElement = getStudioScrollElement();
  if (scrollElement) {
    state.studioScrollTop = scrollElement.scrollTop;
  }
}

function restoreStudioScrollAfterRender() {
  if (!state.studioOpen) return;
  const scrollTop = state.studioScrollTop || 0;
  requestAnimationFrame(() => {
    const scrollElement = getStudioScrollElement();
    if (scrollElement) {
      scrollElement.scrollTop = scrollTop;
    }
  });
}

function renderAudienceScreen() {
  app.innerHTML = `
    <main class="profile-screen">
      <header class="profile-topbar">
        <div class="brand small">${escapeHtml(data.appName)}</div>
      </header>
      <section class="profile-stage" aria-label="Profile chooser">
        <h1>Who's watching?</h1>
        <div class="profile-grid">
          ${data.audiences.map(renderAudienceCard).join("")}
        </div>
      </section>
      ${state.passwordPrompt ? renderPasswordPrompt() : ""}
    </main>
  `;
}

function renderSectionScreen() {
  app.innerHTML = `
    <main class="profile-screen section-choice-screen">
      <header class="profile-topbar">
        <div class="profile-title-row">
          <button class="icon-button app-back-button" type="button" data-action="app-back" aria-label="Go back">${backIcon()}</button>
          <div class="brand small">${escapeHtml(data.appName)}</div>
        </div>
        <div class="profile-actions">
          <span class="viewer-pill">${escapeHtml(state.currentViewer || "Viewer")} ${canEdit() ? "Admin" : "Read Only"}</span>
          ${canEdit() ? `<button class="ghost-button" type="button" data-action="open-studio" data-tab="profiles">Manage Sections</button>` : ""}
          ${canEdit() ? `<button class="ghost-button" type="button" data-action="open-studio" data-tab="json">Edit Data</button>` : ""}
          <button class="ghost-button" type="button" data-action="switch-viewer">Switch Viewer</button>
        </div>
      </header>
      <section class="profile-stage" aria-label="Section chooser">
        <h1>What do you want to watch?</h1>
        <div class="profile-grid section-choice-grid">
          ${data.profiles.map(renderSectionCard).join("")}
        </div>
        ${canEdit() ? `<button class="ghost-button manage-profiles" type="button" data-action="open-studio" data-tab="items">Customize Content</button>` : ""}
      </section>
      ${state.studioOpen ? renderStudio() : ""}
    </main>
  `;
}

function renderAudienceCard(audience) {
  return `
    <button class="profile-card" type="button" data-action="select-audience" data-audience-id="${escapeAttr(audience.id)}">
      ${renderProfileAvatar(audience, "profile-avatar")}
      <span>${escapeHtml(audience.name)}</span>
    </button>
  `;
}

function renderSectionCard(profile) {
  return `
    <button class="profile-card" type="button" data-action="select-section" data-collection="${escapeAttr(profile.collectionKey)}">
      ${renderProfileAvatar(profile, "profile-avatar")}
      <span>${escapeHtml(profile.name)}</span>
    </button>
  `;
}

function renderPasswordPrompt() {
  const hasPassword = Boolean(getPasswordConfig());
  return `
    <div class="modal-backdrop">
      <form class="password-modal" data-action="owner-login" data-stop-click>
        <button class="icon-button modal-close" type="button" data-action="cancel-password" aria-label="Close">${closeIcon()}</button>
        <h2>Kartik Access</h2>
        <p>${hasPassword ? "Enter the owner password to unlock editing tools. Viewers do not see these controls." : "Owner access is not configured on this browser. Add your private config locally or use a browser where you already set a password."}</p>
        ${
          hasPassword
            ? `<div class="field">
                <label for="ownerPassword">Password</label>
                <input id="ownerPassword" name="password" type="password" autocomplete="current-password" autofocus required />
              </div>`
            : ""
        }
        ${state.passwordError ? `<p class="form-error">${escapeHtml(state.passwordError)}</p>` : ""}
        <div class="form-actions">
          ${hasPassword ? `<button class="solid-button red-button" type="submit">Unlock</button>` : ""}
          <button class="ghost-button" type="button" data-action="cancel-password">Cancel</button>
        </div>
      </form>
    </div>
  `;
}

function renderProfileAvatar(profile, className = "profile-avatar") {
  const style = `background: linear-gradient(135deg, ${profile.gradientStart}, ${profile.gradientEnd});`;
  const image = profile.image?.trim();
  const text = profile.iconText?.trim();
  if (image) {
    return `<span class="${className}" style="${escapeAttr(style)}"><img src="${escapeAttr(image)}" alt="" /></span>`;
  }
  if (text) {
    return `<span class="${className}" style="${escapeAttr(style)}"><span class="profile-initials">${escapeHtml(text.slice(0, 3))}</span></span>`;
  }
  return `<span class="${className}" style="${escapeAttr(style)}">${iconTemplate.innerHTML}</span>`;
}

function renderBrowseScreen() {
  const collection = getCollection(state.collectionKey);
  const items = getSortedItems(collection);
  const featuredItems = getFeaturedItems(collection);
  const recent = items.filter((item) => isRecentlyAdded(item.dateAdded));
  const itemRows = [
    {
      title: `All ${collection.navLabel}`,
      items,
      count: items.length
    },
    {
      title: "Recently Added",
      items: recent,
      count: recent.length
    }
  ];

  app.innerHTML = `
    <main class="browse-shell">
      ${renderNav()}
      ${renderHero(collection, featuredItems)}
      <section class="content-area" aria-label="${escapeAttr(collection.navLabel)} rows">
        ${itemRows.map((row) => renderRow(row.title, row.items, row.count)).join("")}
      </section>
      ${state.activeItemId ? renderDetailModal() : ""}
      ${state.studioOpen ? renderStudio() : ""}
    </main>
  `;

  requestAnimationFrame(updateNavShadow);
  requestAnimationFrame(initHeroRotator);
}

function renderNav() {
  const currentAudience = getCurrentAudience();
  return `
    <header class="top-nav" id="topNav">
      <div class="nav-left">
        <button class="icon-button app-back-button" type="button" data-action="app-back" aria-label="Go back">${backIcon()}</button>
        <button class="brand small" type="button" data-action="go-sections" aria-label="Back to section chooser">${escapeHtml(data.appName)}</button>
        <nav class="section-tabs" aria-label="Sections">
          ${data.profiles
            .map(
              (profile) => `
                <button type="button" data-action="open-section" data-collection="${escapeAttr(profile.collectionKey)}" ${
                  profile.collectionKey === state.collectionKey ? 'aria-current="page"' : ""
                }>${escapeHtml(profile.name)}</button>
              `
            )
            .join("")}
        </nav>
      </div>
      <div class="nav-right">
        ${canEdit() ? `<button class="ghost-button" type="button" data-action="open-studio" data-tab="items">Customize</button>` : ""}
        <button class="ghost-button" type="button" data-action="switch-viewer">Switch Viewer</button>
        <button class="mini-profile" type="button" data-action="switch-viewer" aria-label="Switch viewer" style="${currentAudience ? escapeAttr(`background: linear-gradient(135deg, ${currentAudience.gradientStart}, ${currentAudience.gradientEnd});`) : ""}">
          ${currentAudience ? renderMiniAvatar(currentAudience) : ""}
        </button>
      </div>
    </header>
  `;
}

function renderMiniAvatar(profile) {
  const image = profile.image?.trim();
  if (image) {
    return `<img src="${escapeAttr(image)}" alt="" />`;
  }
  if (profile.iconText?.trim()) {
    return escapeHtml(profile.iconText.slice(0, 2));
  }
  return iconTemplate.innerHTML;
}

function renderHero(collection, heroItems) {
  const items = Array.isArray(heroItems) ? heroItems.slice(0, TOP_FEATURED_LIMIT) : [heroItems].filter(Boolean);
  const item = items[0];
  if (!item) {
    return `
      <section class="hero" style="--hero-image: url('assets/hero-projects.png');">
        <div class="hero-content">
          <p class="eyebrow">${escapeHtml(collection.eyebrow)}</p>
          <h1>${escapeHtml(collection.emptyTitle)}</h1>
          <p>Add an item from Customize to build this row.</p>
          <div class="hero-actions">
            <button class="solid-button red-button" type="button" data-action="open-studio" data-tab="items">Customize</button>
          </div>
        </div>
      </section>
    `;
  }

  if (items.length > 1) {
    return `
      <section class="hero rotating-hero" data-hero-rotator style="--hero-index: 0;">
        <div class="hero-slides" aria-hidden="true">
          ${items
            .map(
              (featuredItem, index) => `
                <span class="hero-slide ${index === 0 ? "active" : ""}" data-hero-slide style="--hero-image: url('${escapeCssUrl(featuredItem.banner || featuredItem.image)}');"></span>
              `
            )
            .join("")}
        </div>
        <div class="hero-copy-window">
          <div class="hero-rotator-copy">
            ${items
              .map((featuredItem, index) => renderHeroContent(collection, featuredItem, index === 0 ? "active" : "", index === 0 ? "" : 'inert aria-hidden="true"'))
              .join("")}
          </div>
        </div>
        <div class="hero-dots" aria-hidden="true">
          ${items.map((_, index) => `<span class="${index === 0 ? "active" : ""}" data-hero-dot></span>`).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section class="hero" style="--hero-image: url('${escapeCssUrl(item.banner || item.image)}');">
      ${renderHeroContent(collection, item)}
    </section>
  `;
}

function renderHeroContent(collection, item, activeClass = "", inertAttr = "") {
  return `
    <div class="hero-content ${activeClass}" data-hero-content ${inertAttr}>
      <p class="eyebrow">${escapeHtml(collection.eyebrow)}</p>
      <h1>${escapeHtml(item.title)}</h1>
      <div class="hero-meta">
        <span>${escapeHtml(item.category)}</span>
        ${item.skills ? `<span class="dot"></span><span>${escapeHtml(firstSkill(item.skills))}</span>` : ""}
        ${isRecentlyAdded(item.dateAdded) ? `<span class="dot"></span><span>Recently Added</span>` : ""}
      </div>
      <p>${escapeHtml(item.description || item.tagline)}</p>
      <div class="hero-actions">
        ${primaryActionButton(item)}
        <button class="solid-button dark-button" type="button" data-action="open-item" data-collection="${escapeAttr(state.collectionKey)}" data-item-id="${escapeAttr(item.id)}">
          ${infoIcon()} More Info
        </button>
      </div>
    </div>
  `;
}

function primaryActionButton(item) {
  const target = item.liveUrl || item.documentUrl || item.githubUrl;
  if (!target) {
    return `<button class="solid-button" type="button" data-action="open-item" data-collection="${escapeAttr(state.collectionKey)}" data-item-id="${escapeAttr(item.id)}">${playIcon()} Open</button>`;
  }
  return `<a class="solid-button" href="${escapeAttr(target)}" ${linkTargetAttrs(target)}>${playIcon()} Open</a>`;
}

function renderRow(title, items, count) {
  const body = items.length
    ? `<div class="title-grid">${items.map((item) => renderTitleCard(item)).join("")}</div>`
    : `<div class="empty-state">${escapeHtml(title)} will appear here.</div>`;
  return `
    <section class="row">
      <div class="row-header">
        <h2>${escapeHtml(title)}</h2>
        <span class="count-pill">${count}</span>
      </div>
      ${body}
    </section>
  `;
}

function renderTitleCard(item) {
  return `
    <button class="title-card" type="button" data-action="open-item" data-collection="${escapeAttr(state.collectionKey)}" data-item-id="${escapeAttr(item.id)}">
      <img src="${escapeAttr(item.image || item.banner || "assets/project-cineboard.png")}" alt="" loading="lazy" />
      <span class="tag-row">
        ${isFeatured(item) ? `<span class="featured-tag">Featured</span>` : ""}
        ${isRecentlyAdded(item.dateAdded) ? `<span class="recent-tag">Recently added</span>` : ""}
      </span>
      <span class="title-card-overlay">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.tagline || item.category || item.description)}</p>
      </span>
    </button>
  `;
}

function renderDetailModal() {
  const collection = getCollection(state.activeItemCollection || state.collectionKey);
  const item = collection.items.find((candidate) => candidate.id === state.activeItemId);
  if (!item) return "";

  return `
    <div class="modal-backdrop" data-action="close-detail">
      <article class="modal" role="dialog" aria-modal="true" aria-labelledby="detailTitle" data-stop-click>
        <div class="modal-scroll">
          <section class="modal-hero" style="--modal-image: url('${escapeCssUrl(item.banner || item.image)}');">
            <button class="icon-button modal-back-button" type="button" data-action="app-back" aria-label="Go back">${backIcon()}</button>
            <button class="icon-button modal-close" type="button" data-action="close-detail" aria-label="Close">${closeIcon()}</button>
            <h2 id="detailTitle">${escapeHtml(item.title)}</h2>
          </section>
          <section class="modal-body">
            <div>
              <div class="hero-meta">
                <span>${escapeHtml(item.category)}</span>
                ${isRecentlyAdded(item.dateAdded) ? `<span class="dot"></span><span>Recently Added</span>` : ""}
              </div>
              <p>${escapeHtml(item.description)}</p>
              <div class="modal-actions">
                ${item.githubUrl ? `<a class="solid-button dark-button" href="${escapeAttr(item.githubUrl)}" ${linkTargetAttrs(item.githubUrl)}>${githubIcon()} GitHub Repo</a>` : ""}
                ${item.liveUrl ? `<a class="solid-button" href="${escapeAttr(item.liveUrl)}" ${linkTargetAttrs(item.liveUrl)}>${externalIcon()} Live Project</a>` : ""}
                ${item.documentUrl ? `<a class="solid-button red-button" href="${escapeAttr(item.documentUrl)}" ${linkTargetAttrs(item.documentUrl)}>${docIcon()} Document</a>` : ""}
                ${canEdit() ? `<button class="ghost-button" type="button" data-action="edit-item" data-collection="${escapeAttr(state.activeItemCollection || state.collectionKey)}" data-item-id="${escapeAttr(item.id)}">Edit</button>` : ""}
              </div>
            </div>
            <dl class="detail-list">
              <div>
                <dt>Main functionality</dt>
                <dd>${escapeHtml(item.category || "Showcase")}</dd>
              </div>
              <div>
                <dt>Capabilities</dt>
                <dd>${escapeHtml(item.skills || "Add skills in Customize")}</dd>
              </div>
              <div>
                <dt>Added</dt>
                <dd>${formatDate(item.dateAdded)}</dd>
              </div>
            </dl>
          </section>
        </div>
      </article>
    </div>
  `;
}

function renderStudio() {
  return `
    <div class="modal-backdrop studio" data-action="close-studio">
      <article class="modal" role="dialog" aria-modal="true" aria-labelledby="studioTitle" data-stop-click>
        <div class="modal-scroll">
          <header class="studio-head">
            <h2 id="studioTitle">My-Flix Studio</h2>
            <button class="icon-button" type="button" data-action="close-studio" aria-label="Close">${closeIcon()}</button>
          </header>
          <div class="studio-tabs" role="tablist">
            ${studioTabButton("items", "Showcase")}
            ${studioTabButton("profiles", "Profiles")}
            ${studioTabButton("json", "JSON")}
            ${canEdit() ? studioTabButton("security", "Security") : ""}
          </div>
          ${renderItemsPanel()}
          ${renderProfilesPanel()}
          ${renderJsonPanel()}
          ${canEdit() ? renderSecurityPanel() : ""}
        </div>
      </article>
    </div>
  `;
}

function studioTabButton(tab, label) {
  return `<button type="button" data-action="studio-tab" data-tab="${tab}" class="${state.studioTab === tab ? "active" : ""}" role="tab">${label}</button>`;
}

function renderItemsPanel() {
  const collectionKey = state.itemFormCollection || state.collectionKey;
  const collection = getCollection(collectionKey);
  const editing = state.editingItemId ? collection.items.find((item) => item.id === state.editingItemId) : null;
  const formItem = editing || blankItem(collectionKey);

  return `
    <section class="studio-panel ${state.studioTab === "items" ? "active" : ""}">
      <div class="studio-grid">
        <form class="editor-form" data-action="save-item">
          <h3>${editing ? "Edit Title" : "Add Title"}</h3>
          <div class="form-grid">
            <div class="field">
              <label for="itemCollection">Section</label>
              <select id="itemCollection" name="collectionKey" data-action="change-item-collection">
                ${Object.entries(data.collections)
                  .map(([key, value]) => `<option value="${escapeAttr(key)}" ${key === collectionKey ? "selected" : ""}>${escapeHtml(value.navLabel)}</option>`)
                  .join("")}
              </select>
            </div>
            <div class="field">
              <label for="itemTitle">Name</label>
              <input id="itemTitle" name="title" value="${escapeAttr(formItem.title)}" required />
            </div>
            <div class="field">
              <label for="itemCategory">Main functionality</label>
              <input id="itemCategory" name="category" value="${escapeAttr(formItem.category)}" />
            </div>
            <div class="field">
              <label for="itemTagline">Short line</label>
              <input id="itemTagline" name="tagline" value="${escapeAttr(formItem.tagline)}" />
            </div>
            <div class="field">
              <label for="itemDescription">Description</label>
              <textarea id="itemDescription" name="description">${escapeHtml(formItem.description)}</textarea>
            </div>
            <div class="field">
              <label for="itemSkills">Capabilities</label>
              <input id="itemSkills" name="skills" value="${escapeAttr(formItem.skills)}" />
            </div>
            <div class="form-grid two">
              <div class="field">
                <label for="itemImage">Card image</label>
                <div class="file-field-row" data-file-drop-target="itemImage" data-file-upload-kind="image">
                  <input id="itemImage" name="image" value="${escapeAttr(formItem.image)}" />
                  <input class="file-picker" id="itemImageUpload" type="file" accept="image/*" data-action="upload-image" data-target-input="itemImage" aria-label="Choose card image file" />
                  <label class="icon-button file-upload-button" for="itemImageUpload" title="Choose card image">${uploadIcon()}</label>
                </div>
              </div>
              <div class="field">
                <label for="itemBanner">Main picture</label>
                <div class="file-field-row" data-file-drop-target="itemBanner" data-file-upload-kind="image">
                  <input id="itemBanner" name="banner" value="${escapeAttr(formItem.banner)}" />
                  <input class="file-picker" id="itemBannerUpload" type="file" accept="image/*" data-action="upload-image" data-target-input="itemBanner" aria-label="Choose main picture file" />
                  <label class="icon-button file-upload-button" for="itemBannerUpload" title="Choose main picture">${uploadIcon()}</label>
                </div>
              </div>
            </div>
            <div class="form-grid two">
              <div class="field">
                <label for="itemGithub">GitHub repo</label>
                <input id="itemGithub" name="githubUrl" value="${escapeAttr(formItem.githubUrl)}" />
              </div>
              <div class="field">
                <label for="itemLive">Vercel/project link</label>
                <input id="itemLive" name="liveUrl" value="${escapeAttr(formItem.liveUrl)}" />
              </div>
            </div>
            <div class="form-grid two">
              <div class="field">
                <label for="itemDocument">Document link</label>
                <div class="file-field-row" data-file-drop-target="itemDocument" data-file-upload-kind="document">
                  <input id="itemDocument" name="documentUrl" value="${escapeAttr(formItem.documentUrl)}" />
                  <input class="file-picker" id="itemDocumentUpload" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.rtf,image/*" data-action="upload-document" data-target-input="itemDocument" aria-label="Choose document file" />
                  <label class="icon-button file-upload-button" for="itemDocumentUpload" title="Choose document">${uploadIcon()}</label>
                </div>
              </div>
              <div class="field">
                <label for="itemDate">Date added</label>
                <input id="itemDate" type="date" name="dateAdded" value="${escapeAttr(formItem.dateAdded)}" />
              </div>
            </div>
            <label class="check-field">
              <input type="checkbox" name="featured" ${getFeaturedIds(collection).includes(formItem.id) ? "checked" : ""} />
              <span>Show on top</span>
              <span class="check-hint">${getFeaturedIds(collection).length}/${TOP_FEATURED_LIMIT} selected for rotating main picture</span>
            </label>
          </div>
          <div class="form-actions">
            <button class="solid-button red-button" type="submit">${editing ? "Save Title" : "Add Title"}</button>
            <button class="ghost-button" type="button" data-action="new-item">New</button>
          </div>
        </form>
        <div class="editor-list">
          <h3>${escapeHtml(collection.navLabel)}</h3>
          <div class="stack-list">
            ${collection.items.length ? collection.items.map((item) => renderEditorItem(item, collectionKey)).join("") : `<div class="empty-state">No items in this section.</div>`}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderEditorItem(item, collectionKey) {
  return `
    <article class="stack-item">
      <img src="${escapeAttr(item.image || item.banner || "assets/project-cineboard.png")}" alt="" />
      <div>
        <h4>${escapeHtml(item.title)}</h4>
        <p>${escapeHtml(item.tagline || item.description || item.category)}</p>
      </div>
      <div class="item-actions">
        <button class="ghost-button" type="button" data-action="edit-item" data-collection="${escapeAttr(collectionKey)}" data-item-id="${escapeAttr(item.id)}">Edit</button>
        <button class="danger-button" type="button" data-action="delete-item" data-collection="${escapeAttr(collectionKey)}" data-item-id="${escapeAttr(item.id)}">Delete</button>
      </div>
    </article>
  `;
}

function renderProfilesPanel() {
  const editing = state.editingProfileId ? data.profiles.find((profile) => profile.id === state.editingProfileId) : null;
  const formProfile = editing || blankProfile();

  return `
    <section class="studio-panel ${state.studioTab === "profiles" ? "active" : ""}">
      <div class="studio-grid">
        <form class="editor-form" data-action="save-profile">
          <h3>${editing ? "Edit Profile" : "Add Profile"}</h3>
          <div class="form-grid">
            <div class="field">
              <label for="profileName">Name</label>
              <input id="profileName" name="name" value="${escapeAttr(formProfile.name)}" required />
            </div>
            <div class="field">
              <label for="profileCollection">Page key</label>
              <input id="profileCollection" name="collectionKey" value="${escapeAttr(formProfile.collectionKey)}" list="collectionKeys" required />
              <datalist id="collectionKeys">
                ${Object.keys(data.collections).map((key) => `<option value="${escapeAttr(key)}"></option>`).join("")}
              </datalist>
            </div>
            <div class="field">
              <label for="profileImage">Icon image</label>
              <input id="profileImage" name="image" value="${escapeAttr(formProfile.image)}" />
            </div>
            <div class="form-grid two">
              <div class="field">
                <label for="profileStart">Color start</label>
                <input id="profileStart" type="color" name="gradientStart" value="${escapeAttr(formProfile.gradientStart)}" />
              </div>
              <div class="field">
                <label for="profileEnd">Color end</label>
                <input id="profileEnd" type="color" name="gradientEnd" value="${escapeAttr(formProfile.gradientEnd)}" />
              </div>
            </div>
            <div class="field">
              <label for="profileText">Icon text</label>
              <input id="profileText" name="iconText" value="${escapeAttr(formProfile.iconText)}" maxlength="3" />
            </div>
          </div>
          <div class="form-actions">
            <button class="solid-button red-button" type="submit">${editing ? "Save Profile" : "Add Profile"}</button>
            <button class="ghost-button" type="button" data-action="new-profile">New</button>
          </div>
        </form>
        <div class="editor-list">
          <h3>Profiles</h3>
          <div class="stack-list">
            ${data.profiles.map(renderEditorProfile).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderEditorProfile(profile) {
  return `
    <article class="stack-item">
      ${renderProfileAvatar(profile, "stack-item-avatar")}
      <div>
        <h4>${escapeHtml(profile.name)}</h4>
        <p>${escapeHtml(profile.collectionKey)}</p>
      </div>
      <div class="item-actions">
        <button class="ghost-button" type="button" data-action="edit-profile" data-profile-id="${escapeAttr(profile.id)}">Edit</button>
        <button class="danger-button" type="button" data-action="delete-profile" data-profile-id="${escapeAttr(profile.id)}">Delete</button>
      </div>
    </article>
  `;
}

function renderJsonPanel() {
  return `
    <section class="studio-panel ${state.studioTab === "json" ? "active" : ""}">
      <div class="json-box">
        <h3>Portfolio JSON</h3>
        <textarea id="jsonEditor" spellcheck="false">${escapeHtml(JSON.stringify(data, null, 2))}</textarea>
        <div class="form-actions">
          <button class="solid-button red-button" type="button" data-action="apply-json">Apply JSON</button>
          <button class="ghost-button" type="button" data-action="copy-json">Copy JSON</button>
          <button class="danger-button" type="button" data-action="reset-data">Reset Sample Data</button>
        </div>
      </div>
    </section>
  `;
}

function renderSecurityPanel() {
  return `
    <section class="studio-panel ${state.studioTab === "security" ? "active" : ""}">
      <form class="editor-form security-form" data-action="change-password">
        <h3>Change Owner Password</h3>
        <p class="security-note">The password is stored as a salted hash in this browser. It is not saved in portfolio JSON and it is not written into app.js.</p>
        <div class="form-grid">
          <div class="field">
            <label for="currentPassword">Current password</label>
            <input id="currentPassword" name="currentPassword" type="password" autocomplete="current-password" required />
          </div>
          <div class="field">
            <label for="newPassword">New password</label>
            <input id="newPassword" name="newPassword" type="password" autocomplete="new-password" minlength="8" required />
          </div>
          <div class="field">
            <label for="confirmPassword">Confirm new password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" autocomplete="new-password" minlength="8" required />
          </div>
        </div>
        <div class="form-actions">
          <button class="solid-button red-button" type="submit">Save Password</button>
        </div>
      </form>
    </section>
  `;
}

function handleClick(event) {
  const stopTarget = event.target.closest("[data-stop-click]");
  const target = event.target.closest("[data-action]");

  if (stopTarget && target && !stopTarget.contains(target)) {
    return;
  }

  if (stopTarget) event.stopPropagation();
  if (!target) return;

  const action = target.dataset.action;

  if (action === "app-back") {
    appBack();
  }

  if (action === "select-audience") {
    const audience = data.audiences.find((candidate) => candidate.id === target.dataset.audienceId);
    if (audience?.role === "owner") {
      state.passwordPrompt = true;
      state.passwordError = "";
      state.currentViewer = audience.name;
      render();
    } else if (audience) {
      setViewerAccess("viewer", audience.name);
      transitionTo(() => {
        state.view = "sections";
        render();
      });
    }
  }

  if (action === "select-section") {
    transitionTo(() => openCollection(target.dataset.collection));
  }

  if (action === "go-sections") {
    transitionTo(() => {
      state.view = state.currentViewer ? "sections" : "audiences";
      closeOverlays();
      render();
    });
  }

  if (action === "switch-viewer") {
    clearAccess();
    transitionTo(() => {
      state.view = "audiences";
      closeOverlays();
      render();
    });
  }

  if (action === "cancel-password") {
    state.passwordPrompt = false;
    state.passwordError = "";
    state.currentViewer = null;
    render();
  }

  if (action === "open-section") {
    transitionTo(() => openCollection(target.dataset.collection));
  }

  if (action === "open-item") {
    state.activeItemCollection = target.dataset.collection || state.collectionKey;
    state.activeItemId = target.dataset.itemId;
    render();
  }

  if (action === "close-detail") {
    state.activeItemId = null;
    state.activeItemCollection = null;
    render();
  }

  if (action === "open-studio") {
    if (!canEdit()) {
      toast("Read-only viewers cannot edit this portfolio.");
      return;
    }
    state.studioOpen = true;
    state.studioScrollTop = 0;
    state.studioTab = target.dataset.tab || "items";
    if (state.studioTab === "items") {
      state.itemFormCollection = state.collectionKey;
    }
    render();
  }

  if (action === "close-studio") {
    state.studioOpen = false;
    state.studioScrollTop = 0;
    state.editingItemId = null;
    state.editingItemCollection = null;
    state.editingProfileId = null;
    render();
  }

  if (action === "studio-tab") {
    state.studioScrollTop = 0;
    state.studioTab = target.dataset.tab || "items";
    render();
  }

  if (action === "new-item") {
    rememberStudioScroll();
    state.editingItemId = null;
    state.editingItemCollection = null;
    render();
  }

  if (action === "edit-item") {
    if (!canEdit()) {
      toast("Read-only viewers cannot edit this portfolio.");
      return;
    }
    rememberStudioScroll();
    state.studioOpen = true;
    state.studioTab = "items";
    state.editingItemCollection = target.dataset.collection || state.collectionKey;
    state.itemFormCollection = state.editingItemCollection;
    state.editingItemId = target.dataset.itemId;
    state.activeItemId = null;
    state.activeItemCollection = null;
    render();
  }

  if (action === "delete-item") {
    if (!canEdit()) {
      toast("Read-only viewers cannot delete content.");
      return;
    }
    rememberStudioScroll();
    deleteItem(target.dataset.collection, target.dataset.itemId);
  }

  if (action === "new-profile") {
    rememberStudioScroll();
    state.editingProfileId = null;
    render();
  }

  if (action === "edit-profile") {
    if (!canEdit()) {
      toast("Read-only viewers cannot edit sections.");
      return;
    }
    rememberStudioScroll();
    state.studioOpen = true;
    state.studioTab = "profiles";
    state.editingProfileId = target.dataset.profileId;
    render();
  }

  if (action === "delete-profile") {
    if (!canEdit()) {
      toast("Read-only viewers cannot delete sections.");
      return;
    }
    rememberStudioScroll();
    deleteProfile(target.dataset.profileId);
  }

  if (action === "copy-json") {
    copyJson();
  }

  if (action === "apply-json") {
    if (!canEdit()) {
      toast("Read-only viewers cannot edit this portfolio.");
      return;
    }
    applyJson();
  }

  if (action === "reset-data") {
    if (!canEdit()) {
      toast("Read-only viewers cannot reset this portfolio.");
      return;
    }
    resetData();
  }
}

async function handleSubmit(event) {
  const form = event.target.closest("form[data-action]");
  if (!form) return;
  event.preventDefault();

  if (form.dataset.action === "save-item") {
    if (!canEdit()) {
      toast("Read-only viewers cannot edit this portfolio.");
      return;
    }
    rememberStudioScroll();
    saveItemForm(form);
  }

  if (form.dataset.action === "save-profile") {
    if (!canEdit()) {
      toast("Read-only viewers cannot edit sections.");
      return;
    }
    rememberStudioScroll();
    saveProfileForm(form);
  }

  if (form.dataset.action === "owner-login") {
    await ownerLogin(form);
  }

  if (form.dataset.action === "change-password") {
    if (!canEdit()) {
      toast("Only Kartik can change the owner password.");
      return;
    }
    rememberStudioScroll();
    await changePasswordForm(form);
  }
}

async function handleChange(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  if (target.dataset.action === "change-item-collection") {
    rememberStudioScroll();
    state.itemFormCollection = target.value;
    state.editingItemId = null;
    state.editingItemCollection = null;
    render();
  }
  if (target.dataset.action === "upload-image") {
    await handleImageUpload(target);
  }
  if (target.dataset.action === "upload-document") {
    await handleDocumentUpload(target);
  }
}

async function handleImageUpload(uploadInput) {
  const file = uploadInput.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    toast("Choose an image file.");
    uploadInput.value = "";
    return;
  }

  const targetInput = document.getElementById(uploadInput.dataset.targetInput);
  if (!targetInput) {
    toast("Image field is not available.");
    uploadInput.value = "";
    return;
  }

  uploadInput.disabled = true;
  toast("Preparing image...");

  try {
    const dataUrl = await compressImageFile(file);
    targetInput.value = dataUrl;
    const label = targetInput.id === "itemBanner" ? "Main picture" : "Card image";
    if (dataUrl.length > UPLOAD_SIZE_WARNING) {
      toast(`${label} loaded, but it is still large. Save may fail if local storage is full.`);
    } else {
      toast(`${label} loaded. Save Title to keep it.`);
    }
  } catch (error) {
    console.warn("Unable to load image", error);
    toast("Could not read that image.");
  } finally {
    uploadInput.disabled = false;
    uploadInput.value = "";
  }
}

async function handleDocumentUpload(uploadInput) {
  const file = uploadInput.files?.[0];
  if (!file) return;

  const targetInput = document.getElementById(uploadInput.dataset.targetInput);
  if (!targetInput) {
    toast("Document field is not available.");
    uploadInput.value = "";
    return;
  }

  uploadInput.disabled = true;
  toast("Preparing document...");

  try {
    const dataUrl = await readFileAsDataUrl(file);
    targetInput.value = dataUrl;
    if (dataUrl.length > UPLOAD_SIZE_WARNING) {
      toast("Document loaded, but it is large. Save may fail if local storage is full.");
    } else {
      toast("Document loaded. Save Title to keep it.");
    }
  } catch (error) {
    console.warn("Unable to load document", error);
    toast("Could not read that document.");
  } finally {
    uploadInput.disabled = false;
    uploadInput.value = "";
  }
}

function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const largestSide = Math.max(image.naturalWidth, image.naturalHeight);
      const scale = largestSide > UPLOAD_MAX_EDGE ? UPLOAD_MAX_EDGE / largestSide : 1;
      const width = Math.max(1, Math.round(image.naturalWidth * scale));
      const height = Math.max(1, Math.round(image.naturalHeight * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      if (!context) {
        reject(new Error("Canvas is not available."));
        return;
      }
      context.fillStyle = "#111113";
      context.fillRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", UPLOAD_JPEG_QUALITY));
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Image failed to load."));
    };

    image.src = objectUrl;
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("File failed to load."));
    reader.readAsDataURL(file);
  });
}

function handleFileDragOver(event) {
  const dropTarget = event.target.closest("[data-file-drop-target]");
  if (!dropTarget) return;
  event.preventDefault();
  dropTarget.classList.add("drag-ready");
}

function handleFileDragLeave(event) {
  const dropTarget = event.target.closest("[data-file-drop-target]");
  if (!dropTarget) return;
  if (!event.relatedTarget || !dropTarget.contains(event.relatedTarget)) {
    dropTarget.classList.remove("drag-ready");
  }
}

async function handleFileDrop(event) {
  const dropTarget = event.target.closest("[data-file-drop-target]");
  if (!dropTarget) return;
  event.preventDefault();
  dropTarget.classList.remove("drag-ready");

  const file = event.dataTransfer?.files?.[0];
  if (!file) return;

  const targetInput = document.getElementById(dropTarget.dataset.fileDropTarget);
  if (!targetInput) return;

  const isImageTarget = dropTarget.dataset.fileUploadKind === "image";
  if (isImageTarget && !file.type.startsWith("image/")) {
    toast("Drop an image file here.");
    return;
  }

  try {
    const dataUrl = isImageTarget ? await compressImageFile(file) : await readFileAsDataUrl(file);
    targetInput.value = dataUrl;
    toast(`${isImageTarget ? "Image" : "Document"} loaded. Save Title to keep it.`);
  } catch (error) {
    console.warn("Unable to load dropped file", error);
    toast("Could not read that file.");
  }
}

function openCollection(collectionKey) {
  if (!data.collections[collectionKey]) return;
  state.view = "browse";
  state.collectionKey = collectionKey;
  closeOverlays();
  render();
}

function appBack() {
  if (state.activeItemId) {
    state.activeItemId = null;
    state.activeItemCollection = null;
    render();
    return;
  }

  if (state.view === "browse") {
    state.view = state.currentViewer ? "sections" : "audiences";
    closeOverlays();
    render();
    return;
  }

  if (state.view === "sections") {
    state.view = "audiences";
    closeOverlays();
    render();
    return;
  }

  if (state.passwordPrompt) {
    state.passwordPrompt = false;
    state.passwordError = "";
    render();
  }
}

function closeOverlays() {
  state.activeItemId = null;
  state.activeItemCollection = null;
  state.studioOpen = false;
  state.passwordPrompt = false;
}

async function ownerLogin(form) {
  const formData = new FormData(form);
  const password = String(formData.get("password") || "");
  const result = await verifyOwnerPassword(password);
  if (!result.ok) {
    state.passwordError =
      result.reason === "missing"
        ? "Owner password is not configured on this browser."
        : "Wrong password. Try again.";
    render();
    return;
  }

  setViewerAccess("admin", "Kartik");
  state.passwordPrompt = false;
  state.passwordError = "";
  state.view = "sections";
  toast("Admin mode unlocked.");
  render();
}

async function changePasswordForm(form) {
  const formData = new FormData(form);
  const currentPassword = String(formData.get("currentPassword") || "");
  const newPassword = String(formData.get("newPassword") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  const current = await verifyOwnerPassword(currentPassword);
  if (!current.ok) {
    toast("Current password is not correct.");
    return;
  }

  if (newPassword.length < 8) {
    toast("Use at least 8 characters for the new password.");
    return;
  }

  if (newPassword !== confirmPassword) {
    toast("New passwords do not match.");
    return;
  }

  await saveOwnerPassword(newPassword);
  form.reset();
  toast("Owner password changed on this browser.");
}

function setViewerAccess(accessMode, viewerName) {
  state.accessMode = accessMode;
  state.currentViewer = viewerName;
  sessionStorage.setItem(SESSION_ACCESS_KEY, accessMode);
  sessionStorage.setItem(SESSION_VIEWER_KEY, viewerName);
}

function clearAccess() {
  state.accessMode = "viewer";
  state.currentViewer = null;
  state.passwordPrompt = false;
  state.passwordError = "";
  sessionStorage.removeItem(SESSION_ACCESS_KEY);
  sessionStorage.removeItem(SESSION_VIEWER_KEY);
}

function canEdit() {
  return state.accessMode === "admin" && state.currentViewer === "Kartik";
}

function getPasswordConfig() {
  const storedHash = localStorage.getItem(PASSWORD_HASH_KEY);
  const storedSalt = localStorage.getItem(PASSWORD_SALT_KEY);
  if (storedHash && storedSalt) {
    return { hash: storedHash, salt: storedSalt };
  }

  const privateConfig = window.MY_FLIX_PRIVATE_CONFIG || {};
  if (privateConfig.ownerPasswordHash && privateConfig.ownerPasswordSalt) {
    return {
      hash: String(privateConfig.ownerPasswordHash),
      salt: String(privateConfig.ownerPasswordSalt)
    };
  }

  return null;
}

async function verifyOwnerPassword(password) {
  const config = getPasswordConfig();
  if (!config) return { ok: false, reason: "missing" };
  const hash = await hashPassword(password, config.salt);
  return { ok: hash === config.hash, reason: hash === config.hash ? "ok" : "wrong" };
}

async function saveOwnerPassword(password) {
  const salt = createSalt();
  const hash = await hashPassword(password, salt);
  localStorage.setItem(PASSWORD_HASH_KEY, hash);
  localStorage.setItem(PASSWORD_SALT_KEY, salt);
}

async function hashPassword(password, salt) {
  const bytes = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function createSalt() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function normalizeGithubUrl(url) {
  const value = String(url || "").trim();
  if (!value || value.includes("github.com/your-username")) return "";
  return value;
}

function normalizeLiveUrl(url, itemId) {
  const value = String(url || "").trim();
  const sampleLinks = {
    "https://cineboard.vercel.app": "demo.html?project=cineboard",
    "https://taskforge.vercel.app": "demo.html?project=taskforge",
    "https://insight-desk.vercel.app": "demo.html?project=insight-desk",
    "https://shopline.vercel.app": "demo.html?project=shopline"
  };
  const withoutSlash = value.replace(/\/$/, "");
  if (sampleLinks[withoutSlash]) return sampleLinks[withoutSlash];

  const demoById = {
    "project-cineboard": "demo.html?project=cineboard",
    "project-taskforge": "demo.html?project=taskforge",
    "project-insight": "demo.html?project=insight-desk",
    "project-shopline": "demo.html?project=shopline"
  };

  return value || demoById[itemId] || "";
}

function linkTargetAttrs(url) {
  return "";
}

function isInternalLink(url) {
  const value = String(url || "").trim();
  return (
    value.startsWith("#") ||
    value.startsWith("/") ||
    value.startsWith("./") ||
    value.startsWith("demo.html") ||
    value.startsWith("documents/") ||
    value.startsWith("assets/")
  );
}

function getCurrentAudience() {
  return (
    data.audiences.find((audience) => audience.name === state.currentViewer) ||
    (canEdit() ? data.audiences.find((audience) => audience.role === "owner") : null) ||
    {
      name: state.currentViewer || "Viewer",
      gradientStart: "#6f6f73",
      gradientEnd: "#9a9aa0",
      iconText: "V",
      image: ""
    }
  );
}

function saveItemForm(form) {
  const formData = new FormData(form);
  const collectionKey = formData.get("collectionKey");
  ensureCollection(collectionKey, titleCase(collectionKey));
  const collection = getCollection(collectionKey);
  const existing = state.editingItemId ? collection.items.find((item) => item.id === state.editingItemId) : null;
  const item = {
    id: existing?.id || `${collectionKey}-${slugify(formData.get("title"))}-${Date.now()}`,
    title: String(formData.get("title") || "").trim(),
    category: String(formData.get("category") || "").trim(),
    tagline: String(formData.get("tagline") || "").trim(),
    description: String(formData.get("description") || "").trim(),
    skills: String(formData.get("skills") || "").trim(),
    image: String(formData.get("image") || "").trim() || "assets/project-cineboard.png",
    banner: String(formData.get("banner") || "").trim() || String(formData.get("image") || "").trim() || "assets/hero-projects.png",
    githubUrl: String(formData.get("githubUrl") || "").trim(),
    liveUrl: String(formData.get("liveUrl") || "").trim(),
    documentUrl: String(formData.get("documentUrl") || "").trim(),
    dateAdded: String(formData.get("dateAdded") || "").trim() || todayString()
  };

  if (!item.title) {
    toast("Name is required.");
    return;
  }

  const wantsTopFeature = Boolean(formData.get("featured"));
  const currentFeaturedIds = getFeaturedIds(collection);
  if (wantsTopFeature && !currentFeaturedIds.includes(item.id) && currentFeaturedIds.length >= TOP_FEATURED_LIMIT) {
    toast(`Only ${TOP_FEATURED_LIMIT} titles can be shown at the top. Remove one first.`);
    return;
  }

  if (existing) {
    Object.assign(existing, item);
  } else {
    collection.items.unshift(item);
  }

  setFeaturedStatus(collection, item.id, wantsTopFeature);

  state.editingItemId = item.id;
  state.editingItemCollection = collectionKey;
  state.itemFormCollection = collectionKey;
  state.collectionKey = collectionKey;
  try {
    saveData();
  } catch (error) {
    console.warn("Unable to save showcase title", error);
    toast("Could not save. Try a smaller image or remove one local upload.");
    return;
  }
  toast("Showcase title saved.");
  render();
}

function saveProfileForm(form) {
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const collectionKey = slugify(String(formData.get("collectionKey") || "").trim());

  if (!name || !collectionKey) {
    toast("Name and page key are required.");
    return;
  }

  const existing = state.editingProfileId ? data.profiles.find((profile) => profile.id === state.editingProfileId) : null;
  const profile = {
    id: existing?.id || `profile-${slugify(name)}-${Date.now()}`,
    name,
    collectionKey,
    gradientStart: String(formData.get("gradientStart") || "#0a84ff"),
    gradientEnd: String(formData.get("gradientEnd") || "#49c6ff"),
    iconText: String(formData.get("iconText") || "").trim(),
    image: String(formData.get("image") || "").trim()
  };

  ensureCollection(collectionKey, name);

  if (existing) {
    Object.assign(existing, profile);
  } else {
    data.profiles.push(profile);
  }

  state.editingProfileId = profile.id;
  saveData();
  toast("Profile saved.");
  render();
}

function deleteItem(collectionKey, itemId) {
  const collection = getCollection(collectionKey);
  const item = collection.items.find((candidate) => candidate.id === itemId);
  if (!item) return;
  if (!confirm(`Delete "${item.title}"?`)) return;
  collection.items = collection.items.filter((candidate) => candidate.id !== itemId);
  collection.featuredIds = getFeaturedIds(collection).filter((id) => id !== itemId);
  syncFeaturedIds(collection);
  state.editingItemId = null;
  saveData();
  toast("Title deleted.");
  render();
}

function deleteProfile(profileId) {
  const profile = data.profiles.find((candidate) => candidate.id === profileId);
  if (!profile) return;
  if (data.profiles.length <= 1) {
    toast("Keep at least one profile.");
    return;
  }
  if (!confirm(`Delete profile "${profile.name}"?`)) return;
  data.profiles = data.profiles.filter((candidate) => candidate.id !== profileId);
  if (state.collectionKey === profile.collectionKey) {
    state.collectionKey = data.profiles[0].collectionKey;
  }
  state.editingProfileId = null;
  saveData();
  toast("Profile deleted.");
  render();
}

function copyJson() {
  const value = document.getElementById("jsonEditor")?.value || JSON.stringify(data, null, 2);
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(value).then(() => toast("JSON copied."), () => toast("Select the JSON and copy it."));
  } else {
    toast("Select the JSON and copy it.");
  }
}

function applyJson() {
  const editor = document.getElementById("jsonEditor");
  if (!editor) return;
  try {
    data = normalizeData(JSON.parse(editor.value));
    state.collectionKey = data.profiles[0]?.collectionKey || Object.keys(data.collections)[0];
    state.itemFormCollection = state.collectionKey;
    state.editingItemId = null;
    state.editingProfileId = null;
    saveData();
    toast("JSON applied.");
    render();
  } catch (error) {
    toast("JSON is not valid.");
  }
}

function resetData() {
  if (!confirm("Reset all local customizations?")) return;
  data = structuredClone(defaultData);
  state.collectionKey = data.profiles[0].collectionKey;
  state.itemFormCollection = state.collectionKey;
  state.editingItemId = null;
  state.editingProfileId = null;
  saveData();
  toast("Sample data restored.");
  render();
}

function transitionTo(callback) {
  transitionEl.classList.add("active");
  window.setTimeout(() => {
    callback();
    window.setTimeout(() => transitionEl.classList.remove("active"), 520);
  }, 460);
}

function updateNavShadow() {
  const nav = document.getElementById("topNav");
  if (!nav) return;
  const update = () => nav.classList.toggle("is-solid", window.scrollY > 24);
  update();
  window.removeEventListener("scroll", updateNavShadow);
  window.addEventListener("scroll", update, { passive: true });
}

function stopHeroRotator() {
  if (heroRotationTimer) {
    window.clearInterval(heroRotationTimer);
    heroRotationTimer = null;
  }
}

function initHeroRotator() {
  stopHeroRotator();
  const hero = document.querySelector("[data-hero-rotator]");
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll("[data-hero-slide]"));
  const contents = Array.from(hero.querySelectorAll("[data-hero-content]"));
  const dots = Array.from(hero.querySelectorAll("[data-hero-dot]"));
  if (slides.length <= 1) return;

  let activeIndex = 0;
  const activate = (nextIndex) => {
    activeIndex = nextIndex;
    hero.style.setProperty("--hero-index", activeIndex);
    slides.forEach((slide, index) => slide.classList.toggle("active", index === activeIndex));
    contents.forEach((content, index) => {
      const isActive = index === activeIndex;
      content.classList.toggle("active", isActive);
      content.toggleAttribute("inert", !isActive);
      content.setAttribute("aria-hidden", String(!isActive));
    });
    dots.forEach((dot, index) => dot.classList.toggle("active", index === activeIndex));
  };

  const startRotation = () => {
    stopHeroRotator();
    heroRotationTimer = window.setInterval(() => {
      activate((activeIndex + 1) % slides.length);
    }, HERO_ROTATION_MS);
  };

  let isCursorHolding = false;
  let isFocusHolding = false;
  const updateHoldState = () => {
    if (isCursorHolding || isFocusHolding) {
      hero.classList.add("paused");
      stopHeroRotator();
      return;
    }
    hero.classList.remove("paused");
    startRotation();
  };

  activate(0);
  startRotation();
  hero.addEventListener("mouseenter", () => {
    isCursorHolding = true;
    updateHoldState();
  });
  hero.addEventListener("mouseleave", () => {
    isCursorHolding = false;
    updateHoldState();
  });
  hero.addEventListener("focusin", () => {
    isFocusHolding = true;
    updateHoldState();
  });
  hero.addEventListener("focusout", (event) => {
    isFocusHolding = Boolean(event.relatedTarget && hero.contains(event.relatedTarget));
    updateHoldState();
  });
}

function getCollection(collectionKey) {
  if (!data.collections[collectionKey]) {
    ensureCollection(collectionKey, titleCase(collectionKey));
  }
  return data.collections[collectionKey];
}

function ensureCollection(collectionKey, label) {
  if (!data.collections[collectionKey]) {
    data.collections[collectionKey] = {
      navLabel: label || titleCase(collectionKey),
      eyebrow: "Showcase",
      emptyTitle: `No ${label || titleCase(collectionKey)} items yet`,
      featuredId: "",
      featuredIds: [],
      items: []
    };
  }
  syncFeaturedIds(data.collections[collectionKey]);
}

function createCollectionFromProfile(profile) {
  return {
    navLabel: profile.name,
    eyebrow: "Showcase",
    emptyTitle: `No ${profile.name} items yet`,
    featuredId: "",
    featuredIds: [],
    items: []
  };
}

function getSortedItems(collection) {
  return [...collection.items].sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
}

function getFeaturedIds(collection) {
  const itemIds = new Set((collection.items || []).map((item) => item.id));
  const sourceIds = Array.isArray(collection.featuredIds) ? collection.featuredIds : collection.featuredId ? [collection.featuredId] : [];
  return [...new Set(sourceIds)].filter((id) => itemIds.has(id)).slice(0, TOP_FEATURED_LIMIT);
}

function syncFeaturedIds(collection) {
  collection.featuredIds = getFeaturedIds(collection);
  collection.featuredId = collection.featuredIds[0] || collection.items?.[0]?.id || "";
}

function setFeaturedStatus(collection, itemId, shouldFeature) {
  const featuredIds = getFeaturedIds(collection);
  if (shouldFeature) {
    if (!featuredIds.includes(itemId) && featuredIds.length >= TOP_FEATURED_LIMIT) {
      return false;
    }
    collection.featuredIds = [itemId, ...featuredIds.filter((id) => id !== itemId)].slice(0, TOP_FEATURED_LIMIT);
  } else {
    collection.featuredIds = featuredIds.filter((id) => id !== itemId);
  }
  syncFeaturedIds(collection);
  return true;
}

function getFeaturedItems(collection) {
  const itemsById = new Map(collection.items.map((item) => [item.id, item]));
  const selected = getFeaturedIds(collection)
    .map((id) => itemsById.get(id))
    .filter(Boolean);
  return selected.length ? selected : getSortedItems(collection).slice(0, 1);
}

function getFeaturedItem(collection) {
  return getFeaturedItems(collection)[0] || null;
}

function isFeatured(item) {
  return getFeaturedIds(getCollection(state.collectionKey)).includes(item.id);
}

function isRecentlyAdded(dateValue) {
  if (!dateValue) return false;
  const added = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(added.getTime())) return false;
  const now = new Date();
  const ageMs = now.getTime() - added.getTime();
  return ageMs >= 0 && ageMs <= 30 * 24 * 60 * 60 * 1000;
}

function blankItem(collectionKey) {
  return {
    id: "",
    title: "",
    category: "",
    tagline: "",
    description: "",
    skills: "",
    image: "assets/project-cineboard.png",
    banner: "assets/hero-projects.png",
    githubUrl: "",
    liveUrl: "",
    documentUrl: "",
    dateAdded: todayString()
  };
}

function blankProfile() {
  return {
    id: "",
    name: "",
    collectionKey: "projects",
    gradientStart: "#0a84ff",
    gradientEnd: "#49c6ff",
    iconText: "",
    image: ""
  };
}

function firstSkill(value) {
  return String(value).split(",")[0]?.trim() || value;
}

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(dateValue) {
  if (!dateValue) return "Not set";
  const date = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateValue;
  return new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "numeric" }).format(date);
}

function titleCase(value) {
  return String(value || "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function slugify(value) {
  const slug = String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "item";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function escapeCssUrl(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/\n/g, "");
}

function toast(message) {
  const existing = document.querySelector(".toast");
  existing?.remove();
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.appendChild(node);
  window.setTimeout(() => node.remove(), 2600);
}

function playIcon() {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>`;
}

function infoIcon() {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M11 10h2v8h-2zm0-4h2v2h-2z"/><path fill="currentColor" d="M12 2a10 10 0 1 0 .01 0zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/></svg>`;
}

function githubIcon() {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.74-1.56-2.57-.29-5.28-1.29-5.28-5.73 0-1.27.45-2.3 1.2-3.11-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.19-1.19 3.19-1.19.64 1.6.24 2.78.12 3.07.75.81 1.2 1.84 1.2 3.11 0 4.46-2.71 5.43-5.3 5.72.42.36.8 1.08.8 2.18v3.24c0 .31.2.68.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>`;
}

function externalIcon() {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14z"/><path fill="currentColor" d="M5 5h6v2H7v10h10v-4h2v6H5z"/></svg>`;
}

function docIcon() {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 2h8l5 5v15H6zm7 1.5V8h4.5M8 12h8v2H8zm0 4h8v2H8z"/></svg>`;
}

function uploadIcon() {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M11 4h2v9.2l3.6-3.6 1.4 1.4-6 6-6-6 1.4-1.4 3.6 3.6z"/><path fill="currentColor" d="M5 18h14v2H5z"/></svg>`;
}

function backIcon() {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M15.7 5.7 9.4 12l6.3 6.3-1.4 1.4L6.6 12l7.7-7.7z"/></svg>`;
}

function closeIcon() {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m6.4 5 12.6 12.6-1.4 1.4L5 6.4z"/><path fill="currentColor" d="M19 6.4 6.4 19 5 17.6 17.6 5z"/></svg>`;
}

app.addEventListener("click", handleClick);
app.addEventListener("submit", handleSubmit);
app.addEventListener("change", handleChange);
app.addEventListener("dragover", handleFileDragOver);
app.addEventListener("dragleave", handleFileDragLeave);
app.addEventListener("drop", handleFileDrop);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (state.activeItemId || state.studioOpen) {
      state.activeItemId = null;
      state.activeItemCollection = null;
      state.studioOpen = false;
      render();
    }
  }
});

render();
