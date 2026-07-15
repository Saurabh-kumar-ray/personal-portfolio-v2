import { escapeHtml } from "../utils/helpers.js";

/**
 * Skill Category Renderer
 */
export function renderSkillCategory(category) {
  const skillsHtml = category.skills
    .map(
      (skill) => `
    <div class="skill-progress-bar">
      <div class="skill-info">
        <span class="skill-name">${escapeHtml(skill.name)}</span>
        <span class="skill-percentage">${parseInt(skill.level)}%</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" data-level="${parseInt(skill.level)}"></div>
      </div>
    </div>
  `
    )
    .join("");

  return `
    <div class="col-lg-6 mb-4">
      <div class="card-custom card-glass skill-category-card">
        <div class="skill-category-header">
          <i class="fa-solid ${escapeHtml(category.icon)} text-gradient"></i>
          <h3 class="h5 mb-0">${escapeHtml(category.category)}</h3>
        </div>
        <div class="skill-category-body">
          ${skillsHtml}
        </div>
      </div>
    </div>
  `;
}

/**
 * Experience Timeline Item Renderer
 */
export function renderExperienceItem(exp) {
  const highlightsHtml = exp.highlights.map((hl) => `<li>${escapeHtml(hl)}</li>`).join("");

  const techHtml = exp.technologies
    .map((tech) => `<span class="tag-tech">${escapeHtml(tech)}</span>`)
    .join("");

  const currentClass = exp.current ? "current" : "";
  const currentBadge = exp.current ? '<span class="badge-custom ms-2">CURRENT</span>' : "";

  return `
    <div class="timeline-item ${currentClass}">
      <div class="timeline-dot"></div>
      <div class="timeline-meta">
        <span class="timeline-date">${escapeHtml(exp.startDate)} - ${escapeHtml(exp.endDate)}</span>
        <span class="timeline-location"><i class="fa-solid fa-location-dot me-1"></i>${escapeHtml(exp.location)}</span>
      </div>
      <div class="timeline-header">
        <h3>${escapeHtml(exp.role)}${currentBadge}</h3>
        <div class="timeline-company">${escapeHtml(exp.company)}</div>
      </div>
      <div class="timeline-body mb-3">
        <ul>
          ${highlightsHtml}
        </ul>
      </div>
      <div class="timeline-tags">
        ${techHtml}
      </div>
    </div>
  `;
}

/**
 * Education Timeline Item Renderer
 */
export function renderEducationItem(edu) {
  const detailsHtml = edu.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("");

  return `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-meta">
        <span class="timeline-date">${escapeHtml(edu.startDate)} - ${escapeHtml(edu.endDate)}</span>
        <span class="timeline-location"><i class="fa-solid fa-location-dot me-1"></i>${escapeHtml(edu.location)}</span>
      </div>
      <div class="timeline-header">
        <h3>${escapeHtml(edu.degree)}</h3>
        <div class="timeline-company">${escapeHtml(edu.institution)}</div>
      </div>
      <div class="timeline-body">
        <ul>
          ${detailsHtml}
        </ul>
      </div>
    </div>
  `;
}

/**
 * Project Card Renderer
 */
export function renderProjectCard(project) {
  const techHtml = project.technologies
    .map((tech) => `<span class="tag-tech">${escapeHtml(tech)}</span>`)
    .join("");

  // Constructing a detailed trigger layout for project details modal / expands
  return `
    <div class="col-md-6 col-lg-6 project-item" data-category="${escapeHtml(project.category.toLowerCase())}">
      <div class="card-custom project-card hover-lift hover-glow">
        <div class="project-image-wrapper">
          <img src="${escapeHtml(project.imageUrl)}" alt="${escapeHtml(project.title)}" class="project-image" loading="lazy" />
        </div>
        <div class="project-content">
          <div class="project-header">
            <span class="badge-custom mb-2">${escapeHtml(project.category)}</span>
            <h3>${escapeHtml(project.title)}</h3>
          </div>
          <p class="project-description">${escapeHtml(project.shortDescription)}</p>
          <div class="project-tags">
            ${techHtml}
          </div>
          <div class="project-links mt-auto">
            <a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="project-link">
              <i class="fa-brands fa-github"></i> Source
            </a>
            <a href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer" class="project-link">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
            </a>
            <button class="project-link btn-link border-0 bg-transparent text-gradient p-0 ms-auto" onclick="window.showProjectDetails('${escapeHtml(project.id)}')">
              Details <i class="fa-solid fa-circle-info"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Certification Card Renderer
 */
export function renderCertificateCard(cert) {
  return `
    <div class="col-12 mb-3">
      <div class="card-custom card-glass hover-lift hover-glow p-3">
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div>
            <h4 class="h6 mb-1 text-primary">${escapeHtml(cert.name)}</h4>
            <div class="text-secondary small">${escapeHtml(cert.issuer)} &bull; ${escapeHtml(cert.issueDate)}</div>
            <div class="text-muted small">ID: ${escapeHtml(cert.credentialId)}</div>
          </div>
          <a href="${escapeHtml(cert.credentialUrl)}" target="_blank" rel="noopener noreferrer" class="btn-custom btn-secondary-custom p-2" style="font-size: 0.8rem;">
            Verify <i class="fa-solid fa-circle-check"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Achievement Card Renderer
 */
export function renderAchievementCard(ach) {
  return `
    <div class="col-12 mb-3">
      <div class="card-custom card-glass hover-lift hover-glow p-3 d-flex gap-3">
        <div class="d-flex align-items-start mt-1">
          <i class="fa-solid ${escapeHtml(ach.icon)} text-gradient fs-4"></i>
        </div>
        <div>
          <div class="d-flex justify-content-between align-items-center mb-1 flex-wrap gap-2">
            <h4 class="h6 mb-0">${escapeHtml(ach.title)}</h4>
            <span class="text-muted small">${escapeHtml(ach.date)}</span>
          </div>
          <p class="text-secondary small mb-0">${escapeHtml(ach.description)}</p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Social Links (Header/Footer Icons) Renderer
 */
export function renderSocialIcon(social) {
  return `
    <a href="${escapeHtml(social.url)}" target="_blank" rel="noopener noreferrer" aria-label="Visit Saurabh on ${escapeHtml(social.platform)}" class="theme-toggle-btn" style="color: ${escapeHtml(social.color)};">
      <i class="fa-brands ${escapeHtml(social.icon)}"></i>
    </a>
  `;
}

/**
 * Social Profiles (Coding Platforms Grid) Renderer
 */
export function renderCodingProfile(social) {
  // Filters for platforms that are coding profiles
  if (["GitHub", "LeetCode"].includes(social.platform)) {
    return `
      <a href="${escapeHtml(social.url)}" target="_blank" rel="noopener noreferrer" class="btn-custom btn-secondary-custom hover-glow">
        <i class="fa-solid ${escapeHtml(social.icon)} me-2" style="color: ${escapeHtml(social.color)};"></i> ${escapeHtml(social.platform)} Profile
      </a>
    `;
  }
  return "";
}
