const groupIcons = {
  Backend: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
      <path d="M7 7v.01" />
      <path d="M7 12v.01" />
      <path d="M7 17v.01" />
    </>
  ),
  Frontend: (
    <>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </>
  ),
  Databases: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v10c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 10c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </>
  ),
  Tools: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-5.1 5.1a2 2 0 1 0 2.8 2.8l5.1-5.1a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.8-2.8 2.4-2.4Z" />
    </>
  ),
  Concepts: (
    <>
      <path d="M12 2v20" />
      <path d="M5 7h14" />
      <path d="M5 17h14" />
      <path d="M3 12h18" />
    </>
  ),
};

const skillGroups = [
  {
    title: "Backend",
    skills: ["Java 8+", "Spring Boot", "Spring Framework", "Hibernate JPA", "REST APIs", "Spring Security", "JWT"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Maven", "Docker", "Postman", "CI/CD"],
  },
  {
    title: "Concepts",
    skills: ["OOP", "DBMS", "Data Structures", "SDLC", "Agile"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-pad"
    >
      <div className="container">

        <p className="section-eyebrow text-center scroll-reveal">Skills</p>
        <h2 className="section-title text-center mb-5 scroll-reveal">
          Technologies I Work With
        </h2>

        <div className="row g-4">

          {skillGroups.map((group, index) => (
            <div className="col-md-6 col-xl" key={group.title}>
              <div
                className="interactive-lift scroll-reveal portfolio-card p-4 h-100"
                style={{ "--reveal-delay": `${index * 0.08}s` }}
              >
                <div className="card-title-row mb-3">
                  <span className="icon-chip">
                    <svg
                      aria-hidden="true"
                      className="icon"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      {groupIcons[group.title]}
                    </svg>
                  </span>
                  <h3 className="h5 fw-bold text-accent mb-0">
                    {group.title}
                  </h3>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span className="badge rounded-pill text-bg-primary d-inline-flex align-items-center gap-2" key={skill}>
                      <span className="badge-bullet" aria-hidden="true" style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "#5eead4",
                        boxShadow: "0 0 6px #5eead4",
                        display: "inline-block"
                      }}></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;
