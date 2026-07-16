import profile from "@/data/profile.json";
import skills from "@/data/skills.json";
import experience from "@/data/experience.json";
import education from "@/data/education.json";
import certificates from "@/data/certificates.json";
import achievements from "@/data/achievements.json";
import socialLinks from "@/data/social-links.json";
import projects from "@/data/projects.json";

import Navbar from "@/components/Navbar";
import Typewriter from "@/components/Typewriter";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactForm from "@/components/ContactForm";
import GithubStats from "@/components/GithubStats";
import BackToTop from "@/components/BackToTop";
import TawkChat from "@/components/TawkChat";
import AosInit from "@/components/AosInit";

// Normalize local asset paths (replaces assets/ with /assets/)
const normalizeAssetPath = (pathStr: string) => {
  if (!pathStr) return pathStr;
  if (pathStr.startsWith("assets/")) {
    return "/" + pathStr;
  }
  return pathStr;
};

export default function Home() {
  // Normalize URLs from JSON
  const avatarUrl = normalizeAssetPath(profile.avatarUrl);
  const resumeUrl = normalizeAssetPath(profile.resumeUrl);

  const githubLink = socialLinks.find((s) => s.platform === "GitHub");
  const codingProfiles = socialLinks.filter((s) => ["GitHub", "LeetCode"].includes(s.platform));



  return (
    <>
      {/* AOS scroll animations initializer client element */}
      <AosInit />

      {/* Tawk.to live chat script client element */}
      {profile.tawkPropertyId && profile.tawkWidgetId && (
        <TawkChat propertyId={profile.tawkPropertyId} widgetId={profile.tawkWidgetId} />
      )}

      {/* Neon Glow blobs background */}
      <div className="ambient-glows">
        <div className="glow-blob glow-blob-1"></div>
        <div className="glow-blob glow-blob-2"></div>
        <div className="glow-blob glow-blob-3"></div>
      </div>

      {/* Sticky Responsive Header Menu */}
      <Navbar socials={socialLinks} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="d-flex align-items-center min-vh-100 py-5">
          {/* Background Grid Pattern & Radial Glow Blobs */}
          <div className="hero-grid-pattern"></div>
          <div className="hero-bg-glow"></div>

          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center g-5">
              <div className="col-lg-7 text-center text-lg-start" data-aos="fade-right">
                <span className="badge-hero mb-3">
                  <span className="badge-pulse-dot"></span> Welcome to my digital workspace
                </span>
                <h1 className="hero-title fw-bold mb-3">
                  Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
                </h1>
                
                {profile.subtitles && profile.subtitles.length > 0 && (
                  <h2 className="h3 fw-semibold text-secondary mb-4 min-height-typed">
                    <Typewriter strings={profile.subtitles} />
                  </h2>
                )}

                <p className="lead text-secondary mb-5">
                  {profile.bioShort}
                </p>
                <div className="hero-buttons d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                  <a href="#contact" className="btn-custom btn-primary-custom">
                    Get in Touch <i className="fa-solid fa-paper-plane ms-1"></i>
                  </a>
                  <a href="#projects" className="btn-custom btn-secondary-custom">
                    View My Work <i className="fa-solid fa-arrow-down ms-1"></i>
                  </a>
                </div>
              </div>
              {avatarUrl && (
                <div className="col-lg-5 d-flex justify-content-center" data-aos="fade-left">
                  <div className="mac-window-frame">
                    <div className="mac-window-header">
                      <span className="window-dot dot-red"></span>
                      <span className="window-dot dot-yellow"></span>
                      <span className="window-dot dot-green"></span>
                      <span className="window-title">workspace.tsx</span>
                    </div>
                    <div className="mac-window-content">
                      <img
                        src="/assets/images/hero-illustration.png"
                        alt="Developer Workspace"
                        className="hero-illustration-img"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-secondary-opacity">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">A look into my engineering philosophy and journey.</p>
            </div>

            <div className="row g-5 align-items-center">
              <div className="col-md-6" data-aos="fade-right">
                <h3 className="mb-4 font-heading fw-bold">Engineering for Scalability &amp; Accessibility</h3>
                <p className="text-secondary mb-4" style={{ lineHeight: "1.75" }}>
                  {profile.bioLong}
                </p>
                {resumeUrl && (
                  <div className="d-flex flex-wrap gap-3">
                    <a href={resumeUrl} className="btn-custom btn-outline-custom" download>
                      Download Resume <i className="fa-solid fa-file-arrow-down ms-1"></i>
                    </a>
                  </div>
                )}
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="card-custom card-glass">
                  <h4 className="mb-4 font-heading fw-bold">
                    <i className="fa-solid fa-circle-info text-gradient me-2"></i> Core Details
                  </h4>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <span className="text-muted d-block small uppercase font-heading fw-semibold">Email</span>
                      <a href={`mailto:${profile.email}`} className="fw-medium text-primary break-all">
                        {profile.email}
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <span className="text-muted d-block small uppercase font-heading fw-semibold">Phone</span>
                      <span className="fw-medium text-secondary">{profile.phone}</span>
                    </div>
                    <div className="col-sm-6">
                      <span className="text-muted d-block small uppercase font-heading fw-semibold">Location</span>
                      <span className="fw-medium text-secondary">{profile.location}</span>
                    </div>
                    <div className="col-sm-6">
                      <span className="text-muted d-block small uppercase font-heading fw-semibold">Status</span>
                      <span className="fw-medium text-secondary d-inline-flex align-items-center gap-1">
                        <span
                          className="badge-custom"
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            padding: 0,
                            background: "#28a745",
                          }}
                        ></span>
                        Open to Opportunities
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        {skills.length > 0 && (
          <section id="skills">
            <div className="container">
              <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">Technical Expertise</h2>
                <p className="section-subtitle">My core skills and tech proficiencies categorised by domain.</p>
              </div>
              <SkillsSection categories={skills} />
            </div>
          </section>
        )}

        {/* Career Timeline Section */}
        {(experience.length > 0 || education.length > 0) && (
          <section id="experience" className="bg-secondary-opacity">
            <div className="container">
              <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">Career Timeline</h2>
                <p className="section-subtitle">Professional experience and academic qualifications.</p>
              </div>
              <div className="row g-5">
                {/* Experience Timeline */}
                {experience.length > 0 && (
                  <div className="col-lg-6" data-aos="fade-right">
                    <h3 className="mb-4 text-center text-lg-start font-heading fw-bold">
                      <i className="fa-solid fa-briefcase text-gradient me-2"></i> Professional Experience
                    </h3>
                    <div className="timeline-container">
                      {experience.map((exp: any, index: number) => (
                        <div key={index} className={`timeline-item ${exp.current ? "current" : ""}`}>
                          <div className="timeline-dot"></div>
                          <div className="timeline-meta">
                            <span className="timeline-date">{exp.startDate} - {exp.endDate}</span>
                            <span className="timeline-location">
                              <i className="fa-solid fa-location-dot me-1"></i>{exp.location}
                            </span>
                          </div>
                          <div className="timeline-header">
                            <h3 className="font-heading fw-bold">
                              {exp.role}
                              {exp.current && <span className="badge-custom ms-2">CURRENT</span>}
                            </h3>
                            <div className="timeline-company">{exp.company}</div>
                          </div>
                          <div className="timeline-body mb-3">
                            <ul>
                              {exp.highlights.map((hl: string, idx: number) => (
                                <li key={idx}>{hl}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="timeline-tags">
                            {exp.technologies.map((tech: string, idx: number) => (
                              <span key={idx} className="tag-tech">{tech}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education Timeline */}
                {education.length > 0 && (
                  <div className="col-lg-6" data-aos="fade-left">
                    <h3 className="mb-4 text-center text-lg-start font-heading fw-bold">
                      <i className="fa-solid fa-graduation-cap text-gradient me-2"></i> Academic Qualifications
                    </h3>
                    <div className="timeline-container">
                      {education.map((edu: any, index: number) => (
                        <div key={index} className="timeline-item">
                          <div className="timeline-dot"></div>
                          <div className="timeline-meta">
                            <span className="timeline-date">{edu.startDate} - {edu.endDate}</span>
                            <span className="timeline-location">
                              <i className="fa-solid fa-location-dot me-1"></i>{edu.location}
                            </span>
                          </div>
                          <div className="timeline-header">
                            <h3 className="font-heading fw-bold">{edu.degree}</h3>
                            <div className="timeline-company">{edu.institution}</div>
                          </div>
                          {edu.details && edu.details.length > 0 && (
                            <div className="timeline-body">
                              <ul>
                                {edu.details.map((detail: string, idx: number) => (
                                  <li key={idx}>{detail}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <section id="projects">
            <div className="container">
              <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">Engineering Showcases</h2>
                <p className="section-subtitle">Recent projects, open source tools, and system implementations.</p>
              </div>
              <ProjectsSection projects={projects} />
            </div>
          </section>
        )}

        {/* Credentials & Achievements Section */}
        {(certificates.length > 0 || achievements.length > 0) && (
          <section id="credentials" className="bg-secondary-opacity">
            <div className="container">
              <div className="row g-5">
                {/* Certifications List */}
                {certificates.length > 0 && (
                  <div className="col-lg-6" data-aos="fade-right">
                    <h3 className="mb-4 font-heading fw-bold">
                      <i className="fa-solid fa-id-card text-gradient me-2"></i> Certifications
                    </h3>
                    <div className="row g-3">
                      {certificates.map((cert: any, index: number) => (
                        <div key={index} className="col-12 mb-2">
                          <div className="card-custom card-glass hover-lift hover-glow p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                              <div>
                                <h4 className="h6 mb-1 text-primary font-heading fw-bold">{cert.name}</h4>
                                <div className="text-secondary small">{cert.issuer} &bull; {cert.issueDate}</div>
                                <div className="text-muted small">ID: {cert.credentialId}</div>
                              </div>
                              {cert.credentialUrl && (
                                <a
                                  href={cert.credentialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn-custom btn-secondary-custom p-2"
                                  style={{ fontSize: "0.8rem" }}
                                >
                                  Verify <i className="fa-solid fa-circle-check ms-1"></i>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements Highlights */}
                {achievements.length > 0 && (
                  <div className="col-lg-6" data-aos="fade-left">
                    <h3 className="mb-4 font-heading fw-bold">
                      <i className="fa-solid fa-trophy text-gradient me-2"></i> Key Achievements
                    </h3>
                    <div className="row g-3">
                      {achievements.map((ach: any, index: number) => (
                        <div key={index} className="col-12 mb-2">
                          <div className="card-custom card-glass hover-lift hover-glow p-3 d-flex gap-3">
                            <div className="d-flex align-items-start mt-1">
                              <i className={`fa-solid ${ach.icon || "fa-trophy"} text-gradient fs-4`}></i>
                            </div>
                            <div className="flex-grow-1">
                              <div className="d-flex justify-content-between align-items-center mb-1 flex-wrap gap-2">
                                <h4 className="h6 mb-0 font-heading fw-bold">{ach.title}</h4>
                                <span className="text-muted small">{ach.date}</span>
                              </div>
                              <p className="text-secondary small mb-0">{ach.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* GitHub stats telemetry */}
        {githubLink && (
          <section id="github-stats">
            <div className="container">
              <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">Open-Source Telemetry</h2>
                <p className="section-subtitle">
                  Dynamic GitHub contributions, codebase statistics, and external coding profiles.
                </p>
              </div>

              <GithubStats githubUrl={githubLink.url} />

              {codingProfiles.length > 0 && (
                <div className="mt-5 text-center" data-aos="fade-up">
                  <h3 className="mb-4 h5 font-heading fw-bold text-secondary">Find me on other coding platforms:</h3>
                  <div className="d-flex justify-content-center flex-wrap gap-3">
                    {codingProfiles.map((p: any, idx: number) => (
                      <a
                        key={idx}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-custom btn-secondary-custom hover-glow"
                      >
                        <i className={`fa-brands ${p.icon} me-2`} style={{ color: p.color }}></i>{" "}
                        {p.platform} Profile
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Contact Form Section */}
        <section id="contact" className="bg-secondary-opacity">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">Have a project or want to collaborate? Send a message.</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2 className="footer-brand-title navbar-logo">
                <i className="fa-solid fa-code"></i> SAURABH<span>.</span>
              </h2>
              <p className="footer-brand-text">
                {profile.bioShort}
              </p>
            </div>
            <div>
              <h3 className="footer-links-title">Quick Links</h3>
              <ul className="footer-links-list">
                <li><a href="#hero" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About</a></li>
                <li><a href="#skills" className="footer-link">Skills</a></li>
                <li><a href="#experience" className="footer-link">Experience</a></li>
                <li><a href="#projects" className="footer-link">Projects</a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-links-title">Contact Channels</h3>
              <ul className="footer-links-list">
                {profile.email && (
                  <li>
                    <i className="fa-solid fa-envelope me-2 text-gradient"></i>
                    <a href={`mailto:${profile.email}`} className="text-secondary hover:text-white transition-colors">{profile.email}</a>
                  </li>
                )}
                {profile.phone && (
                  <li>
                    <i className="fa-solid fa-phone me-2 text-gradient"></i>
                    <span className="text-secondary">{profile.phone}</span>
                  </li>
                )}
                {profile.location && (
                  <li>
                    <i className="fa-solid fa-location-dot me-2 text-gradient"></i>
                    <span className="text-secondary">{profile.location}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Saurabh. All Rights Reserved. Built with Next.js.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((social: any) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Saurabh on ${social.platform}`}
                  className="theme-toggle-btn"
                  style={{ color: social.color }}
                >
                  <i className={`fa-brands ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Smooth Scroll back to top */}
      <BackToTop />
    </>
  );
}
