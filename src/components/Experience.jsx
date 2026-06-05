const experiences = [
  {
    role: "Java Full Stack Developer",
    company: "Yess Infotech, Pune",
    period: "Oct 2025 - Apr 2026",
    points: [
      "Engineered backend modules using Java and Spring Boot, reducing API response time by 25%.",
      "Created RESTful APIs to streamline user workflows and improve application scalability.",
      "Applied JWT authentication and Spring Security for secure user authorization.",
      "Streamlined MySQL queries to improve database efficiency and reduce execution time.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Zoblik International, Pune",
    period: "Jan 2024 - Sep 2025",
    points: [
      "Built dynamic web applications using React.js and Spring Boot, increasing responsiveness by 30%.",
      "Integrated REST APIs and backend services to improve data retrieval speed.",
      "Refined responsive UI/UX for mobile, tablet, and desktop devices.",
      "Configured authentication systems and secure database operations for user access control.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "CodeClause, Pune",
    period: "Jan 2023 - Dec 2023",
    points: [
      "Designed responsive frontend interfaces using HTML, CSS, and JavaScript.",
      "Improved page load time by 20% through UI and code refinements.",
      "Added frontend functionality enhancements to real-time web projects.",
      "Collaborated using Git and GitHub in Agile development workflows.",
    ],
  },
];

const ExperienceIcon = () => (
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <path d="M4 8h16a2 2 0 0 1 2 2v10H2V10a2 2 0 0 1 2-2Z" />
      <path d="M10 12h4" />
    </svg>
  </span>
);

const Experience = () => {
  return (
    <section id="experience" className="section-pad section-alt">
      <div className="container">
        <p className="section-eyebrow text-center scroll-reveal">Experience</p>
        <h2 className="section-title text-center mb-5 scroll-reveal">
          Professional Journey
        </h2>

        <div className="row g-4">
          {experiences.map((item, index) => (
            <div className="col-lg-4" key={`${item.role}-${item.company}`}>
              <article
                className="interactive-lift scroll-reveal portfolio-card p-4 h-100"
                style={{ "--reveal-delay": `${index * 0.1}s` }}
              >
                <p className="small text-secondary mb-2">{item.period}</p>
                <div className="card-title-row mb-1">
                  <ExperienceIcon />
                  <h3 className="h4 fw-bold text-accent mb-0">{item.role}</h3>
                </div>
                <p className="fw-semibold mb-3">{item.company}</p>

                <ul className="list-unstyled mb-0 text-muted-soft">
                  {item.points.map((point) => (
                    <li className="d-flex align-items-start mb-2.5 gap-2" key={point}>
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0 mt-1"
                        style={{ color: "#5eead4" }}
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
