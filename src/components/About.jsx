import ProfilePhoto from "./ProfilePhoto";
import SystemMonitor from "./SystemMonitor";

const highlights = [
  "Secure REST APIs",
  "Responsive UI",
  "Database Design",
  "JWT Authentication",
];

const About = () => {
  return (
    <section
      id="about"
      className="section-pad section-alt"
    >
      <div className="container">

        <p className="section-eyebrow text-center scroll-reveal">About</p>
        <h2 className="section-title text-center mb-5 scroll-reveal">
          Building Reliable Web Experiences
        </h2>

        <div className="row g-5 align-items-center">

          <div className="col-md-6 scroll-reveal scroll-reveal-left delay-100">
            <ProfilePhoto variant="about" />
          </div>

          <div className="col-md-6 scroll-reveal scroll-reveal-right delay-200">
            <h3 className="h2 fw-semibold mb-3 text-accent">
              Java Full Stack Developer
            </h3>

            <p className="text-muted-soft lh-lg">
              I am a versatile Java Full Stack Developer with experience in
              designing, developing, and maintaining web applications. I work
              across Java, Spring Boot, React.js, JavaScript, SQL databases, and
              RESTful APIs, with a strong focus on secure functionality,
              performance, and clean user experience.
            </p>

            <div className="highlight-list mt-4">
              {highlights.map((highlight) => (
                <span key={highlight} className="d-inline-flex align-items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "#5eead4" }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {highlight}
                </span>
              ))}
            </div>

            <div className="row g-3 mt-4">

              <div className="col-6">
                <div className="interactive-lift metric-card p-4 h-100">
                <h4 className="h2 fw-bold text-accent mb-1">3+</h4>
                <p className="mb-0 text-muted-soft">Years Experience</p>
                </div>
              </div>

              <div className="col-6">
                <div className="interactive-lift metric-card p-4 h-100">
                <h4 className="h2 fw-bold text-accent mb-1">2+</h4>
                <p className="mb-0 text-muted-soft">Full Stack Projects</p>
                </div>
              </div>

            </div>

            <SystemMonitor />

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
