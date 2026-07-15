"use client";

import { useEffect } from "react";

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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"; // block background scroll
    }
    return () => {
      document.body.style.overflow = ""; // restore scroll
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="sidebar-overlay active d-flex align-items-center justify-content-center"
      style={{ zIndex: 1090 }}
    >
      <div
        onClick={(e) => e.stopPropagation()} // prevent click close when clicking content
        className="card-custom card-glass p-4 animate-fade-in-up"
        style={{
          maxWidth: "600px",
          width: "90%",
          maxHeight: "85vh",
          overflowY: "auto",
          border: "1px solid var(--accent-primary)",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="badge-custom">{project.category}</span>
          <button
            onClick={onClose}
            className="sidebar-close-btn p-0 border-0 bg-transparent"
            aria-label="Close modal"
            type="button"
          >
            <i className="fa-solid fa-xmark fs-5"></i>
          </button>
        </div>
        <h3 className="h4 mb-3 text-gradient">{project.title}</h3>
        {project.imageUrl && (
          <div
            className="mb-4 overflow-hidden"
            style={{ borderRadius: "var(--border-radius-sm)", height: "220px" }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}
        <h4 className="h6 text-muted mb-2 font-heading fw-semibold">Project Overview</h4>
        <p className="text-secondary small mb-4">{project.description}</p>
        
        {project.highlights && project.highlights.length > 0 && (
          <>
            <h4 className="h6 text-muted mb-2 font-heading fw-semibold">Key Highlights</h4>
            <ul className="text-secondary small mb-4" style={{ paddingLeft: "1.25rem" }}>
              {project.highlights.map((highlight, index) => (
                <li key={index} className="mb-1">{highlight}</li>
              ))}
            </ul>
          </>
        )}

        <h4 className="h6 text-muted mb-2 font-heading fw-semibold">Technologies Used</h4>
        <div className="project-tags mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tag-tech">{tech}</span>
          ))}
        </div>

        <div className="d-flex gap-3 mt-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-custom btn-primary-custom flex-grow-1 py-2 text-center"
            >
              <i className="fa-brands fa-github"></i> Repository
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-custom btn-outline-custom flex-grow-1 py-2 text-center"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
