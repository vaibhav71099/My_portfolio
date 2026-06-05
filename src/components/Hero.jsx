import { useState, useEffect } from "react";
import ProfilePhoto from "./ProfilePhoto";

const ROLES = [
  "Java Full Stack Developer",
  "Spring Boot Specialist",
  "React & UI/UX Developer",
  "REST API Designer"
];

const Hero = () => {
  const [nameText, setNameText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isNameDone, setIsNameDone] = useState(false);

  const nameToType = "Vaibhav Suryavanshi";

  // Name typing effect on mount
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setNameText(nameToType.substring(0, index + 1));
      index++;
      if (index >= nameToType.length) {
        clearInterval(interval);
        setIsNameDone(true);
      }
    }, 80); // Fast, snappy typing for the name

    return () => clearInterval(interval);
  }, []);

  // Roles typing effect - starts after name finishes typing
  useEffect(() => {
    if (!isNameDone) return;

    let timer;
    const handleTyping = () => {
      const fullText = ROLES[roleIndex];
      if (!isDeleting) {
        // Typing text
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText === fullText) {
          // Pause at full text
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        // Deleting text
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed, isNameDone]);

  return (
    <section className="hero-section d-flex align-items-center animate-fade-in">
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />

      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="hero-title mb-3" style={{ minHeight: "1.4em" }}>
              Hi, I'm <span>{nameText}</span>
              {!isNameDone && <span className="cursor-blink">|</span>}
            </h1>

            <p className="hero-kicker" style={{ minHeight: "1.8em", display: "flex", alignItems: "center", justifyContent: "var(--kicker-justify, flex-start)" }}>
              {isNameDone && (
                <>
                  <span className="typing-text">{currentText}</span>
                  <span className="cursor-blink">|</span>
                </>
              )}
            </p>

            <p className="hero-subtitle mb-4 animate-fade-up delay-200">
              I build secure, responsive full-stack applications with Java,
              Spring Boot, React.js, REST APIs, SQL databases, and JWT
              authentication.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-4 flex-wrap animate-fade-up delay-300">
              <a
                href="/resume/VaibhavSuryawanshi_javaDeveloper.pdf"
                download="VaibhavSuryawanshi_javaDeveloper.pdf"
                className="interactive-lift btn btn-primary px-4 py-3"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="interactive-lift btn btn-outline-primary px-4 py-3"
              >
                View Projects
              </a>
            </div>

            <div className="d-flex justify-content-center justify-content-lg-start gap-4 fs-2 animate-fade-up delay-400">
              <a
                className="social-link animate-float-soft interactive-lift"
                href="https://github.com/vaibhav71099"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24">
                  <path
                     fill="currentColor"
                     d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.99c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </a>

              <a
                className="social-link animate-float-soft interactive-lift delay-200"
                href="https://linkedin.com/in/vaibhav-suryavanshi-1b4853297"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v10.5H3V9.75Zm6.4 0h3.82v1.43h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1v6.92h-4v-6.13c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.59-2.35 3.24v6.23h-4V9.75Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-lg-5 d-flex justify-content-center hero-visual">
            <ProfilePhoto
              variant="hero"
              className="animate-fade-up delay-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
