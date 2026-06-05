import { useEffect, useRef } from "react";

const DemoVideo = ({ src, title }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="demo-video mb-4"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      controls
      preload="auto"
      aria-label={`${title} live demo video`}
    />
  );
};

const ProjectPlaceholder = ({ title }) => {
  return (
    <div className="project-placeholder mb-4" aria-hidden="true">
      <div className="placeholder-browser-bar">
        <span className="dot dot-red"></span>
        <span className="dot dot-yellow"></span>
        <span className="dot dot-green"></span>
        <span className="placeholder-browser-url">vaibhavsuryavanshi.dev</span>
      </div>
      <div className="placeholder-content">
        <div className="placeholder-decorations">
          <div className="decor-circle decor-circle-1"></div>
          <div className="decor-circle decor-circle-2"></div>
        </div>
        <div className="placeholder-icon-wrap">
          <svg viewBox="0 0 24 24" className="placeholder-code-icon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <div className="placeholder-mock-text">
          <span className="line line-long"></span>
          <span className="line line-medium"></span>
          <span className="line line-short"></span>
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Banking System Web App",

    desc: "Secure banking system for account and transaction management with REST APIs for deposits, withdrawals, and transaction history.",

    tech: "Java • Spring Boot • MySQL • JWT",

    demoVideo: "/demos/banking-project-demo.mp4",

    github: "https://github.com/vaibhav71099/banking-system",

    live: "https://vaibhav-banking-system-frontend.onrender.com/",
  },

  {
    title: "Job Portal Web App",

    desc: "Full-stack job portal for recruiters and job seekers with role-based authentication, dashboards, and real-time REST API integration.",

    tech: "React.js • Spring Boot • MySQL • REST APIs",

    demoVideo: "/demos/job-portal-demo.mp4",

    github: "https://github.com/vaibhav71099/linkedin-lite-job-portal",

    live: "https://preeminent-strudel-5a0526.netlify.app/login",
  },

  {
    title: "Portfolio Website",

    desc: "Modern responsive developer portfolio built using React.js and Tailwind CSS with smooth UI and responsive design.",

    tech: "React.js • Tailwind CSS",

    github: "https://github.com/vaibhav71099/My_portfolio",

    live: "https://my-portfolio-psi-amber-87.vercel.app/",
  },
];

const ProjectIcon = ({ type }) => {
  const icons = {
    live: (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </>
    ),
    video: (
      <>
        <path d="m22 8-6 4 6 4V8Z" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </>
    ),
    github: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.99c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="button-icon"
      fill={type === "github" ? "currentColor" : "none"}
      stroke={type === "github" ? "none" : "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {icons[type]}
    </svg>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-pad section-alt"
    >
      <div className="container">

        <p className="section-eyebrow text-center scroll-reveal">Projects</p>
        <h2 className="section-title text-center mb-5 scroll-reveal">
          Featured Work
        </h2>

        <div className="row g-4 justify-content-center">

          {projects.map((project, index) => (
            <div className="col-md-6 col-xl-4 d-flex" key={project.title}>
              <div
                className="interactive-lift scroll-reveal portfolio-card p-4 d-flex flex-column w-100 shadow"
                style={{ "--reveal-delay": `${index * 0.12}s` }}
              >

              {project.demoVideo ? (
                <DemoVideo src={project.demoVideo} title={project.title} />
              ) : (
                <ProjectPlaceholder title={project.title} />
              )}

              <h3 className="h4 fw-bold mb-3 text-accent">
                {project.title}
              </h3>

              <p className="text-muted-soft mb-4 lh-lg flex-grow-1">
                {project.desc}
              </p>

              <p className="small text-secondary mb-4">
                {project.tech}
              </p>

              <div className="project-actions mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project-primary"
                >
                  <ProjectIcon type="live" />
                  <span>Live Demo</span>
                </a>
                <div className="btn-project-group">
                  {project.demoVideo && (
                    <a
                      href={project.demoVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-icon"
                      title="Watch Video Demo"
                    >
                      <ProjectIcon type="video" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project-icon"
                    title="View GitHub Repository"
                  >
                    <ProjectIcon type="github" />
                  </a>
                </div>
              </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;
