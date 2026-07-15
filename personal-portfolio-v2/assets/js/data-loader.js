import * as templates from "../../components/templates.js";
import { fetchGithubStats } from "../../utils/api.js";

// Keep a cached list of projects for details lookup
let projectsCache = [];

/**
 * Load and render all profile variables
 */
async function loadProfile() {
  try {
    const res = await fetch("data/profile.json");
    const profile = await res.json();

    // Populate Hero and About content
    document.getElementById("hero-name").innerText = profile.name;
    document.getElementById("hero-bio-short").innerText = profile.bioShort;
    document.getElementById("profile-bio-long").innerText = profile.bioLong;
    document.getElementById("profile-avatar-img").src = profile.avatarUrl;

    // Contact Details
    const emailLink = document.getElementById("about-email");
    emailLink.href = `mailto:${profile.email}`;
    emailLink.innerText = profile.email;

    document.getElementById("about-phone").innerText = profile.phone;
    document.getElementById("about-location").innerText = profile.location;

    // Resume Download Link
    const resumeBtn = document.getElementById("download-resume-btn");
    resumeBtn.href = profile.resumeUrl;

    // Footer Details
    document.getElementById("footer-bio-short").innerText = profile.bioShort;
    document.getElementById("footer-email").innerText = profile.email;
    document.getElementById("footer-phone").innerText = profile.phone;
    document.getElementById("footer-location").innerText = profile.location;

    return profile;
  } catch (error) {
    console.error("Failed to load profile data:", error);
    return null;
  }
}

/**
 * Load and render experience logs
 */
async function loadExperience() {
  try {
    const res = await fetch("data/experience.json");
    const experience = await res.json();
    const container = document.getElementById("experience-container");

    container.innerHTML = experience.map(templates.renderExperienceItem).join("");
  } catch (error) {
    console.error("Failed to load experience timeline:", error);
  }
}

/**
 * Load and render education logs
 */
async function loadEducation() {
  try {
    const res = await fetch("data/education.json");
    const education = await res.json();
    const container = document.getElementById("education-container");

    container.innerHTML = education.map(templates.renderEducationItem).join("");
  } catch (error) {
    console.error("Failed to load education timeline:", error);
  }
}

/**
 * Load and render skills
 */
async function loadSkills() {
  try {
    const res = await fetch("data/skills.json");
    const skills = await res.json();
    const container = document.getElementById("skills-container");

    // We want to structure skills list as rows
    let gridHtml = '<div class="row">';
    skills.forEach((cat) => {
      gridHtml += templates.renderSkillCategory(cat);
    });
    gridHtml += "</div>";
    container.innerHTML = gridHtml;

    // Set up skills bar animations when visible
    animateSkillsOnScroll();
  } catch (error) {
    console.error("Failed to load skills data:", error);
  }
}

/**
 * Animates skill progress bars when they enter viewport
 */
function animateSkillsOnScroll() {
  const progressFills = document.querySelectorAll(".progress-fill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const level = fill.getAttribute("data-level");
          fill.style.width = `${level}%`;
          observer.unobserve(fill);
        }
      });
    },
    { threshold: 0.1 }
  );

  progressFills.forEach((fill) => observer.observe(fill));
}

/**
 * Load, render, and filter projects
 */
async function loadProjects() {
  try {
    const res = await fetch("data/projects.json");
    projectsCache = await res.json();
    const gridContainer = document.getElementById("projects-grid-container");

    // Render all projects initially
    gridContainer.innerHTML = projectsCache.map(templates.renderProjectCard).join("");

    // Generate dynamic category tabs
    const filterContainer = document.getElementById("project-filters-container");
    const categories = [...new Set(projectsCache.map((proj) => proj.category))];

    categories.forEach((cat) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.className = "filter-btn";
      button.setAttribute("data-filter", cat.toLowerCase());
      button.innerText = cat;
      li.appendChild(button);
      filterContainer.appendChild(li);
    });

    // Attach click listeners to category filter buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Toggle active button highlight
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");
        const projectItems = document.querySelectorAll(".project-item");

        projectItems.forEach((item) => {
          const itemCategory = item.getAttribute("data-category");
          if (filterValue === "all" || itemCategory === filterValue) {
            item.style.display = "block";
            // Trigger AOS re-evaluation for layouts
            if (window.AOS) window.AOS.refresh();
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  } catch (error) {
    console.error("Failed to load projects list:", error);
  }
}

/**
 * Load and render certificates & achievements
 */
async function loadCredentials() {
  try {
    // Certs
    const certsRes = await fetch("data/certificates.json");
    const certs = await certsRes.json();
    const certsContainer = document.getElementById("certificates-container");
    certsContainer.innerHTML = certs.map(templates.renderCertificateCard).join("");

    // Achievements
    const achsRes = await fetch("data/achievements.json");
    const achs = await achsRes.json();
    const achsContainer = document.getElementById("achievements-container");
    achsContainer.innerHTML = achs.map(templates.renderAchievementCard).join("");
  } catch (error) {
    console.error("Failed to load credentials sections:", error);
  }
}

/**
 * Load and render social links and coding profiles
 */
async function loadSocialLinks() {
  try {
    const res = await fetch("data/social-links.json");
    const links = await res.json();

    const sidebarContainer = document.getElementById("sidebar-socials-container");
    const footerContainer = document.getElementById("footer-socials-container");
    const profilesContainer = document.getElementById("coding-profiles-container");

    sidebarContainer.innerHTML = links.map(templates.renderSocialIcon).join("");
    footerContainer.innerHTML = links.map(templates.renderSocialIcon).join("");
    profilesContainer.innerHTML = links.map(templates.renderCodingProfile).join("");

    // Look for GitHub profile url to fetch stats
    const githubLink = links.find((link) => link.platform === "GitHub");
    if (githubLink) {
      const username = githubLink.url.split("/").pop();
      await loadGithubStats(username);
    }
  } catch (error) {
    console.error("Failed to load social connections:", error);
  }
}

/**
 * Load and render GitHub statistics widget
 */
async function loadGithubStats(username) {
  const container = document.getElementById("github-stats-container");
  if (!container) return;

  // Insert shimmer placeholders while loading
  container.innerHTML = `
    <div class="card-custom card-glass shimmer" style="height: 140px;"></div>
    <div class="card-custom card-glass shimmer" style="height: 140px;"></div>
    <div class="card-custom card-glass shimmer" style="height: 140px;"></div>
    <div class="card-custom card-glass shimmer" style="height: 140px;"></div>
  `;

  const stats = await fetchGithubStats(username);

  container.innerHTML = `
    <div class="card-custom card-glass github-stat-card hover-lift">
      <i class="fa-solid fa-code-branch github-stat-icon"></i>
      <div class="github-stat-number">${stats.publicRepos}</div>
      <div class="github-stat-label">Public Repositories</div>
    </div>
    <div class="card-custom card-glass github-stat-card hover-lift">
      <i class="fa-solid fa-star github-stat-icon"></i>
      <div class="github-stat-number">${stats.totalStars}</div>
      <div class="github-stat-label">GitHub Stars</div>
    </div>
    <div class="card-custom card-glass github-stat-card hover-lift">
      <i class="fa-solid fa-users github-stat-icon"></i>
      <div class="github-stat-number">${stats.followers}</div>
      <div class="github-stat-label">Followers</div>
    </div>
    <div class="card-custom card-glass github-stat-card hover-lift">
      <i class="fa-solid fa-calendar-check github-stat-icon"></i>
      <div class="github-stat-number">${stats.contributions}</div>
      <div class="github-stat-label">Contributions (Year)</div>
    </div>
  `;
}

/**
 * Modal Popup for detailed project views
 */
window.showProjectDetails = function (projectId) {
  const project = projectsCache.find((p) => p.id === projectId);
  if (!project) return;

  // Create Modal Shell element
  const modal = document.createElement("div");
  modal.className = "sidebar-overlay active d-flex align-items-center justify-content-center";
  modal.style.zIndex = "1090";
  modal.id = "project-modal";

  const techHtml = project.technologies.map((t) => `<span class="tag-tech">${t}</span>`).join("");

  const highlightsHtml = project.highlights.map((h) => `<li>${h}</li>`).join("");

  modal.innerHTML = `
    <div class="card-custom card-glass p-4" style="max-width: 600px; width: 90%; max-height: 85vh; overflow-y: auto; border: 1px solid var(--accent-primary);">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="badge-custom">${project.category}</span>
        <button id="modal-close-btn" class="sidebar-close-btn p-0" aria-label="Close modal"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <h3 class="h4 mb-3 text-gradient">${project.title}</h3>
      <div class="mb-4 overflow-hidden" style="border-radius: var(--border-radius-sm); height: 220px;">
        <img src="${project.imageUrl}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
      <h4 class="h6 text-muted mb-2">Project Overview</h4>
      <p class="text-secondary small mb-3">${project.description}</p>
      
      <h4 class="h6 text-muted mb-2">Key Highlights</h4>
      <ul class="text-secondary small mb-4" style="padding-left: 1.25rem;">
        ${highlightsHtml}
      </ul>

      <h4 class="h6 text-muted mb-2">Technologies Used</h4>
      <div class="project-tags mb-4">
        ${techHtml}
      </div>

      <div class="d-flex gap-3 mt-3">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-custom btn-primary-custom flex-grow-1 py-2">
          <i class="fa-brands fa-github"></i> Repository
        </a>
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-custom btn-outline-custom flex-grow-1 py-2">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = "hidden"; // block background scroll

  // Attach close events
  const closeBtn = modal.querySelector("#modal-close-btn");
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.remove();
    document.body.style.overflow = ""; // restore scroll
  }
};

/**
 * Controller main bootstrapper
 */
export async function bootstrapData() {
  const profile = await loadProfile();
  await Promise.all([
    loadExperience(),
    loadEducation(),
    loadSkills(),
    loadProjects(),
    loadCredentials(),
    loadSocialLinks(),
  ]);
  return profile;
}
