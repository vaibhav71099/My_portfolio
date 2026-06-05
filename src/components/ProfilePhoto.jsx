const PHOTO_SRC = {
  hero: "/images/vaibhav-suryavanshi-hero.png?v=3",
  about: "/images/vaibhav-suryavanshi-about.jpg?v=1",
};
const PHOTO_ALT = "Vaibhav Suryavanshi — Java Full Stack Developer";

const IMAGE_SIZE = {
  hero: { width: 1024, height: 957 },
  about: { width: 682, height: 1024 },
};

const ProfilePhoto = ({ variant = "hero", className = "" }) => {
  const isHero = variant === "hero";
  const photoSrc = PHOTO_SRC[variant] ?? PHOTO_SRC.hero;

  return (
    <figure
      className={`profile-photo profile-photo--${variant} ${className}`.trim()}
    >
      {isHero ? (
        <>
          <span className="profile-photo__deco profile-photo__deco--dots" aria-hidden="true" />
          <span className="profile-photo__deco profile-photo__deco--line" aria-hidden="true" />
          <span className="profile-photo__deco profile-photo__deco--accent" aria-hidden="true" />
        </>
      ) : null}

      <div className="profile-photo__glow" aria-hidden="true" />
      <div className="profile-photo__aura" aria-hidden="true" />

      <div className="profile-photo__shell">
        <div className="profile-photo__ring" aria-hidden="true" />
        <div className="profile-photo__frame">
          <img
            src={photoSrc}
            alt={PHOTO_ALT}
            className="profile-photo__img"
            width={IMAGE_SIZE[variant]?.width}
            height={IMAGE_SIZE[variant]?.height}
            loading={isHero ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={isHero ? "high" : undefined}
          />
          <div className="profile-photo__overlay" aria-hidden="true" />
          <div className="profile-photo__shine" aria-hidden="true" />
        </div>
      </div>

      {isHero ? (
        <>
          {/* Floating Technology Badges (Orbiting Graphics) */}
          <div className="profile-photo__floating-chip chip-java animate-float-soft">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z" />
              <path d="M6 1v3" />
              <path d="M10 1v3" />
              <path d="M14 1v3" />
            </svg>
            <span>Java</span>
          </div>

          <div className="profile-photo__floating-chip chip-spring animate-float-soft delay-200">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 22C2 22 8 20 12 16C16 12 22 2 22 2C22 2 12 8 8 12C4 16 2 22 2 22Z" />
              <path d="M12 16L8 12" />
              <path d="M17 11L14 8" />
            </svg>
            <span>Spring</span>
          </div>

          <div className="profile-photo__floating-chip chip-react animate-float-soft delay-400">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="2" />
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 4.97 4.03 9 9 9 4.97 0 9-4.03 9-9 0-4.97-4.03-9-9-9Z" strokeOpacity="0.2" />
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Z" />
            </svg>
            <span>React</span>
          </div>

          <div className="profile-photo__floating-chip chip-sql animate-float-soft delay-500">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
            <span>SQL</span>
          </div>

          <span className="profile-photo__chip profile-photo__chip--role">
            Java Full Stack
          </span>
          <span className="profile-photo__chip profile-photo__chip--status">
            <span className="profile-photo__dot" aria-hidden="true" />
            Open to work
          </span>
        </>
      ) : (
        <figcaption className="profile-photo__caption">
          <span className="profile-photo__dot" aria-hidden="true" />
          Available for Java Full Stack roles
        </figcaption>
      )}
    </figure>
  );
};

export default ProfilePhoto;
