const education = [
  {
    degree: "Bachelor of Engineering",
    stream: "Electronics & Telecommunication",
    institute: "Sapkal Knowledge Hub College of Engineering, Nashik",
    period: "2023 - 2026",
    score: "CGPA: 7.91",
  },
  {
    degree: "Diploma",
    stream: "Computer Engineering",
    institute: "MSBTE",
    period: "2019 - 2021",
    score: "Percentage: 76.63%",
  },
];

const certifications = [
  {
    title: "Certificate of Completion",
    program: "Java Full Stack Development",
    issuer: "Yess Infotech",
    period: "05-10-2025 to 05-04-2026",
    certificateNo: "YIT-DA-2026-00113",
    image: "/certificates/vaibhav-yess-infotech-certificate.png",
    file: "/certificates/vaibhav-yess-infotech-certificate.pdf",
  },
];

const CredentialIcon = ({ type }) => (
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
      {type === "certification" ? (
        <>
          <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
          <path d="m9 14-1 7 4-2 4 2-1-7" />
        </>
      ) : (
        <>
          <path d="m22 10-10-5-10 5 10 5 10-5Z" />
          <path d="M6 12v5c3 2 9 2 12 0v-5" />
        </>
      )}
    </svg>
  </span>
);

const Education = () => {
  return (
    <section id="education" className="section-pad">
      <div className="container">
        <p className="section-eyebrow text-center scroll-reveal">Credentials</p>
        <h2 className="section-title text-center mb-5 scroll-reveal">
          Education & Certifications
        </h2>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="row g-4">
              {education.map((item, index) => (
                <div className="col-12" key={`${item.degree}-${item.stream}`}>
                  <article
                    className="interactive-lift scroll-reveal portfolio-card p-4"
                    style={{ "--reveal-delay": `${index * 0.1}s` }}
                  >
                    <p className="small text-secondary mb-2">{item.period}</p>
                    <div className="card-title-row mb-1">
                      <CredentialIcon />
                      <h3 className="h4 fw-bold text-accent mb-0">{item.degree}</h3>
                    </div>
                    <p className="fw-semibold mb-2">{item.stream}</p>
                    <p className="text-muted-soft mb-2">{item.institute}</p>
                    <p className="mb-0">{item.score}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="interactive-lift scroll-reveal delay-200 portfolio-card p-4 h-100">
              <div className="card-title-row mb-4">
                <CredentialIcon type="certification" />
                <h3 className="h4 fw-bold text-accent mb-0">Certifications</h3>
              </div>

              <div className="d-grid gap-3">
                {certifications.map((certification) => (
                  <article className="certification-item" key={certification.certificateNo}>
                    <div className="certificate-image-container mb-3">
                      <img
                        className="certificate-image"
                        src={certification.image}
                        alt={`${certification.issuer} ${certification.program} ${certification.title}`}
                      />
                    </div>
                    <p className="small text-secondary mb-2">{certification.period}</p>
                    <h4 className="h6 fw-bold mb-1">{certification.title}</h4>
                    <p className="fw-semibold mb-2">{certification.program}</p>
                    <p className="text-muted-soft mb-2">{certification.issuer}</p>
                    <p className="small mb-0">Certificate No: {certification.certificateNo}</p>
                    <a
                      className="btn btn-outline-primary btn-sm mt-3"
                      href={certification.file}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
