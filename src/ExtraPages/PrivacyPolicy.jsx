import { useState, useEffect } from "react";

const sections = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Information We Collect",
    type: "list",
    content: [
      "Name, phone number, and email address",
      "Travel preferences and enquiry details",
      "Website usage data (cookies & analytics)",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
    title: "How We Use Your Information",
    type: "list",
    content: [
      "To respond to your enquiries promptly",
      "To provide tailored travel services",
      "To improve our website and overall experience",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Sharing of Information",
    type: "text",
    content:
      "We do not sell your personal data. We may share it with trusted partners — such as hotels and drivers — strictly for booking purposes.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Data Security",
    type: "text",
    content:
      "We implement appropriate technical and organizational measures to protect your data. While we strive for the highest standards, no system can be guaranteed 100% secure.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    title: "Cookies",
    type: "text",
    content:
      "Our website may use cookies to enhance your browsing experience and analyze traffic patterns to help us serve you better.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Your Rights",
    type: "text",
    content:
      "You may request access to, correction of, or deletion of your personal data at any time by reaching out to us directly.",
  },
];

export default function PrivacyPolicy() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f1e2e 0%, #1a3245 50%, #0d2337 100%)",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#e8dcc8",
      padding: "0 0 80px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle ambient glows */}
      <div style={{
        position: "fixed", width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
        top: -150, right: -150, pointerEvents: "none",
      }} />
      <div style={{
        position: "fixed", width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
        bottom: -100, left: -100, pointerEvents: "none",
      }} />

      {/* Gold top bar */}
      <div style={{
        background: "linear-gradient(90deg, #c9a84c 0%, #e8c96d 50%, #c9a84c 100%)",
        height: "5px", width: "100%",
      }} />

      <div style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "0 24px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>

        {/* Home button */}
        <div style={{ paddingTop: "36px" }}>
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#c9a84c",
              textDecoration: "none",
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: "600",
              padding: "8px 16px",
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "4px",
              background: "rgba(201,168,76,0.07)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(201,168,76,0.18)";
              e.currentTarget.style.borderColor = "#c9a84c";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(201,168,76,0.07)";
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </a>
        </div>

        {/* Header */}
        <header style={{ textAlign: "center", padding: "52px 0 44px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: "64px", height: "64px", borderRadius: "50%",
            border: "2px solid #c9a84c", marginBottom: "24px",
            background: "rgba(201,168,76,0.1)", color: "#c9a84c",
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="30" height="30">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>

          <div style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            fontSize: "11px", letterSpacing: "0.25em",
            textTransform: "uppercase", color: "#c9a84c",
            marginBottom: "10px", fontWeight: "600",
          }}>
            Loveland Holidays
          </div>

          <h1 style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: "normal", margin: "0 0 14px 0",
            color: "#f5ead6", letterSpacing: "0.02em", lineHeight: 1.2,
          }}>
            Privacy Policy
          </h1>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "14px", color: "rgba(201,168,76,0.6)",
          }}>
            <div style={{ height: "1px", width: "48px", background: "rgba(201,168,76,0.4)" }} />
            <span style={{ fontSize: "13px", fontFamily: "'Trebuchet MS', sans-serif", letterSpacing: "0.05em" }}>
              Effective Date: April 29, 2026
            </span>
            <div style={{ height: "1px", width: "48px", background: "rgba(201,168,76,0.4)" }} />
          </div>

          <p style={{
            marginTop: "24px", fontSize: "16px", lineHeight: "1.75",
            color: "rgba(232,220,200,0.75)",
            maxWidth: "520px", margin: "24px auto 0",
          }}>
            At Loveland Holidays, your trust is our compass. Here's how we handle your personal information with care.
          </p>
        </header>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.2)" }} />
          <div style={{ width: "6px", height: "6px", background: "#c9a84c", transform: "rotate(45deg)", flexShrink: 0 }} />
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.2)" }} />
        </div>

        {/* Intro card */}
        <div style={{
          display: "flex", gap: "20px", alignItems: "flex-start",
          padding: "24px 28px", borderRadius: "8px", marginBottom: "32px",
          background: "rgba(201,168,76,0.08)",
          border: "1px solid rgba(201,168,76,0.3)",
        }}>
          <div style={{
            flexShrink: 0, width: "42px", height: "42px", borderRadius: "8px",
            background: "rgba(201,168,76,0.15)", display: "flex",
            alignItems: "center", justifyContent: "center", color: "#c9a84c", marginTop: "2px",
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <circle cx="12" cy="15" r="2" />
            </svg>
          </div>
          <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.75", color: "rgba(232,220,200,0.82)" }}>
            Loveland Holidays ("we", "our", "us") respects your privacy and is committed to protecting your personal data throughout every step of your journey with us.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
          {sections.map((section, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex", gap: "20px", alignItems: "flex-start",
                padding: "24px 28px", borderRadius: "8px",
                border: `1px solid ${hovered === i ? "rgba(201,168,76,0.45)" : "rgba(255,255,255,0.07)"}`,
                background: hovered === i ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.03)",
                transition: "all 0.25s ease",
                cursor: "default",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${0.1 + i * 0.07}s`,
              }}
            >
              {/* Icon */}
              <div style={{
                flexShrink: 0, width: "42px", height: "42px", borderRadius: "8px",
                background: hovered === i ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#c9a84c", transition: "background 0.25s ease", marginTop: "2px",
              }}>
                {section.icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h2 style={{
                  margin: "0 0 10px 0", fontSize: "18px",
                  fontWeight: "normal", color: "#f5ead6", letterSpacing: "0.01em",
                }}>
                  {section.title}
                </h2>

                {section.type === "list" ? (
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {section.content.map((item, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "15px", color: "rgba(232,220,200,0.7)", lineHeight: "1.65" }}>
                        <span style={{
                          width: "6px", height: "6px", borderRadius: "50%",
                          background: "#c9a84c", flexShrink: 0, marginTop: "7px",
                        }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.72", color: "rgba(232,220,200,0.7)" }}>
                    {section.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.2)" }} />
          <div style={{ width: "6px", height: "6px", background: "#c9a84c", transform: "rotate(45deg)", flexShrink: 0 }} />
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.2)" }} />
        </div>

        {/* Contact */}
        <div style={{
          padding: "32px 36px", borderRadius: "8px",
          background: "rgba(201,168,76,0.08)",
          border: "1px solid rgba(201,168,76,0.3)",
          display: "flex", flexWrap: "wrap", gap: "28px",
          alignItems: "center", justifyContent: "space-between",
          marginBottom: "36px",
        }}>
          <div style={{ flex: "1 1 200px" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px",
            }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "8px",
                background: "rgba(201,168,76,0.15)", display: "flex",
                alignItems: "center", justifyContent: "center", color: "#c9a84c",
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 style={{
                margin: 0, fontSize: "20px", fontWeight: "normal",
                color: "#f5ead6", letterSpacing: "0.01em",
              }}>
                Get in Touch
              </h3>
            </div>
            <p style={{ margin: 0, fontSize: "14px", color: "rgba(232,220,200,0.6)", lineHeight: "1.6" }}>
              For any privacy-related queries or requests, we're just a message away.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              {
                href: "mailto:contact@lovelandholidays.com",
                label: "contact@lovelandholidays.com",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
              },
              {
                href: "tel:+917591999499",
                label: "+91 7591 999 499",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l1.07-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
                  </svg>
                ),
              },
            ].map(({ href, label, icon }, i) => (
              <a
                key={i}
                href={href}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  color: "#c9a84c", textDecoration: "none",
                  fontSize: "14px", fontFamily: "'Trebuchet MS', sans-serif",
                  padding: "10px 18px", borderRadius: "4px",
                  border: "1px solid rgba(201,168,76,0.3)",
                  background: "rgba(201,168,76,0.07)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(201,168,76,0.18)";
                  e.currentTarget.style.borderColor = "#c9a84c";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(201,168,76,0.07)";
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                }}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p style={{
          textAlign: "center", fontSize: "12px",
          color: "rgba(232,220,200,0.35)",
          fontFamily: "'Trebuchet MS', sans-serif", letterSpacing: "0.06em",
        }}>
          © {new Date().getFullYear()} Loveland Holidays. All rights reserved.
        </p>
      </div>
    </div>
  );
}