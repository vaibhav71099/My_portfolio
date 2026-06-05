import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [activeLogIndex, setActiveLogIndex] = useState(-1);

  const terminalLines = [
    `[INFO]  Initializing SMTP connection context...`,
    `[SECURE] Establishing secure TLS 1.3 tunnel to vaibhavsuryawanshi.dev...`,
    `[SECURE] Key exchange: ECDHE-RSA-AES256-GCM-SHA384 (2048-bit)`,
    `[API]    Encoding payload parameters (UTF-8)...`,
    `[API]    POST /api/v1/messages HTTP/2 - Sender: ${formData.name}`,
    `[DEBUG]  Payload: { email: "${formData.email}", size: ${formData.message.length} bytes }`,
    `[SERVER] Status: 202 Accepted - Queueing message delivery...`,
    `[SUCCESS] Message dispatched successfully! SMTP connection terminated.`
  ];

  useEffect(() => {
    if (!isSubmitting) return;

    setTerminalLogs([]);
    setActiveLogIndex(0);
  }, [isSubmitting]);

  useEffect(() => {
    if (activeLogIndex === -1 || activeLogIndex >= terminalLines.length) {
      if (activeLogIndex >= terminalLines.length) {
        // Complete the submission
        const timer = setTimeout(() => {
          setIsSubmitting(false);
          setActiveLogIndex(-1);
          setStatus({
            type: "success",
            text: `Thank you, ${formData.name}! Your message has been sent successfully. I will get back to you soon.`,
          });
          setFormData({ name: "", email: "", message: "" });
        }, 800);
        return () => clearTimeout(timer);
      }
      return;
    }

    const timer = setTimeout(() => {
      setTerminalLogs((prev) => [...prev, terminalLines[activeLogIndex]]);
      setActiveLogIndex((prev) => prev + 1);
    }, 280); // Sneak peek delay for logging line by line

    return () => clearTimeout(timer);
  }, [activeLogIndex, isSubmitting]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", text: "Please fill out all fields." });
      return;
    }

    setStatus({ type: "", text: "" });
    setIsSubmitting(true);
  };

  return (
    <section
      id="contact"
      className="section-pad"
    >
      <div className="container text-center" style={{ maxWidth: "42rem" }}>
        <p className="section-eyebrow scroll-reveal">Contact</p>
        <h2 className="section-title mb-3 scroll-reveal">
          Let's Build Something Useful
        </h2>

        <p className="text-muted-soft mb-5 scroll-reveal delay-100">
          Have an idea or a role to discuss? Drop me a message and let's connect.
        </p>

        <div className="scroll-reveal delay-200 text-start position-relative" style={{ minHeight: "340px" }}>
          {isSubmitting ? (
            /* Secure Console Output Terminal */
            <div className="secure-terminal-wrap p-4 shadow-lg font-mono">
              <div className="terminal-bar mb-3 d-flex justify-content-between align-items-center">
                <div className="d-flex gap-1.5 align-items-center">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="terminal-title text-xs text-muted-soft">Secure Shell Session</span>
                <span className="text-xs text-green font-mono">ONLINE</span>
              </div>
              <div className="terminal-body font-mono text-sm text-green">
                {terminalLogs.map((log, idx) => {
                  let logClass = "text-green";
                  if (log.includes("[SUCCESS]")) logClass = "text-accent";
                  if (log.includes("[SECURE]")) logClass = "text-cyan";
                  if (log.includes("[DEBUG]")) logClass = "text-purple";
                  
                  return (
                    <div key={idx} className={`log-line mb-1.5 ${logClass}`}>
                      {log}
                    </div>
                  );
                })}
                {activeLogIndex < terminalLines.length && (
                  <div className="log-line text-green animate-blink">
                    &gt; _
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Contact Form */
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-control form-control-lg form-control-dark"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="form-control form-control-lg form-control-dark"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message"
                  className="form-control form-control-lg form-control-dark"
                  required
                ></textarea>
              </div>

              {status.text && (
                <div
                  className={`alert ${
                    status.type === "success" ? "alert-success" : "alert-danger"
                  } mb-4`}
                  role="alert"
                  style={{
                    background: status.type === "success" ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
                    borderColor: status.type === "success" ? "rgba(16, 185, 129, 0.3)" : "rgba(239, 68, 68, 0.3)",
                    color: status.type === "success" ? "#34d399" : "#f87171",
                    borderRadius: "10px",
                    fontSize: "0.95rem"
                  }}
                >
                  {status.text}
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="interactive-lift btn btn-primary btn-lg px-5 py-3 w-100"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
