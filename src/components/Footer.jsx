const footerItems = [
  {
    label: "suryavanshivaibhav2@email.com",
    href: "mailto:suryavanshivaibhav2@email.com",
    icon: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
  },
  {
    label: "+91 7507121980",
    href: "tel:+917507121980",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 8.81 19.8 19.8 0 0 1 1.98 4.18 2 2 0 0 1 3.97 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.1 9.72a16 16 0 0 0 6.18 6.18l1.08-1.08a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z" />
    ),
  },
  {
    label: "Nashik, Maharashtra",
    icon: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

const FooterIcon = ({ children }) => (
  <svg
    aria-hidden="true"
    className="footer-icon"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
  >
    {children}
  </svg>
);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <a className="navbar-brand brand-mark fw-bold fs-4" href="#">
            VS
          </a>

          <div className="footer-contact">
            {footerItems.map((item) => {
              const content = (
                <>
                  <FooterIcon>{item.icon}</FooterIcon>
                  <span>{item.label}</span>
                </>
              );

              return item.href ? (
                <a href={item.href} key={item.label}>
                  {content}
                </a>
              ) : (
                <span key={item.label}>
                  {content}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
