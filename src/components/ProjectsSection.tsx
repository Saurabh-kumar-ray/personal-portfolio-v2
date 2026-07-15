"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  highlights: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extract unique categories from projects
  const categories = ["all", ...new Set(projects.map((p) => p.category.toLowerCase()))];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeFilter);

  return (
    <div>
      {/* Category Filters */}
      <ul id="project-filters-container" className="project-filters" data-aos="fade-up">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              type="button"
            >
              {cat === "all" ? "All Projects" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {/* Projects Grid */}
      <div id="projects-grid-container" className="projects-grid" data-aos="fade-up">
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-6">
              <div className="card-custom project-card hover-lift hover-glow h-full d-flex flex-col">
                {project.imageUrl && (
                  <div className="project-image-wrapper">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="project-content d-flex flex-column flex-grow-1">
                  <div className="project-header">
                    <span className="badge-custom mb-2">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p className="project-description flex-grow-1">{project.shortDescription}</p>
                  <div className="project-tags">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="tag-tech">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tag-tech">+{project.technologies.length - 4} more</span>
                    )}
                  </div>
                  <div className="project-links mt-auto pt-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className="fa-brands fa-github"></i> Source
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i> Demo
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="project-link btn-link border-0 bg-transparent text-gradient p-0 ms-auto font-medium"
                      type="button"
                    >
                      Details <i className="fa-solid fa-circle-info ms-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Portal Modal Overlay */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
