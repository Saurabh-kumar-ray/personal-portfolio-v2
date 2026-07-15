"use client";

import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export default function SkillsSection({ categories }: SkillsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect(); // trigger once
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="row" data-aos="fade-up">
      {categories.map((cat, catIdx) => (
        <div key={catIdx} className="col-lg-6 mb-4">
          <div className="card-custom card-glass skill-category-card">
            <div className="skill-category-header">
              <i className={`fa-solid ${cat.icon || "fa-code"} text-gradient`}></i>
              <h3 className="h5 mb-0">{cat.category}</h3>
            </div>
            <div className="skill-category-body">
              {cat.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-progress-bar">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{
                        width: animate ? `${skill.level}%` : "0%",
                        transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
