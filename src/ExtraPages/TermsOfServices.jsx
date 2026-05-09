import { useState } from "react";

const sections = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Bookings",
    body: "All bookings are subject to availability and confirmation. Prices may vary depending on season and demand.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    title: "Payments",
    body: "Payments must be made as per agreed terms. Failure to pay may result in cancellation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6l-1 14H6L5 6" />
        <path d="M10 11v6M14 11v6" />
        <path d="M9 6V4h6v2" />
      </svg>
    ),
    title: "Cancellations & Refunds",
    body: "Cancellation policies vary by package. Refunds (if applicable) will be processed as per agreement.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Travel Responsibility",
    body: "We act as facilitators and are not liable for delays, accidents, or unforeseen circumstances beyond our control.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: "Changes",
    body: "We reserve the right to modify itineraries due to weather, safety, or operational reasons.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "User Conduct",
    body: "Users must provide accurate information and behave respectfully during travel.",
  },
];

export default function TermsOfService() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f1e2e 0%, #1a3245 50%, #0d2337 100%)",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#e8dcc8",
      padding: "0 0 80px 0",
    }}>
      {/* Decorative top wave */}
      <div style={{
        background: "linear-gradient(90deg, #c9a84c 0%, #e8c96d 50%, #c9a84c 100%)",
        height: "5px",
        width: "100%",
      }} />

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>

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
              transition: "all 0.2s ease",
              background: "rgba(201,168,76,0.07)",
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
          {/* Logo mark */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            border: "2px solid #c9a84c",
            marginBottom: "24px",
            background: "rgba(201,168,76,0.1)",
            color: "#c9a84c",
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="30" height="30">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>

          <div style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#c9a84c",
            marginBottom: "10px",
            fontWeight: "600",
          }}>
            Loveland Holidays
          </div>

          <h1 style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: "normal",
            margin: "0 0 14px 0",
            color: "#f5ead6",
            letterSpacing: "0.02em",
            lineHeight: 1.2,
          }}>
            Terms of Service
          </h1>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            color: "rgba(201,168,76,0.6)",
          }}>
            <div style={{ height: "1px", width: "48px", background: "rgba(201,168,76,0.4)" }} />
            <span style={{ fontSize: "13px", fontFamily: "'Trebuchet MS', sans-serif", letterSpacing: "0.05em" }}>
              Effective Date: 29-04-2026
            </span>
            <div style={{ height: "1px", width: "48px", background: "rgba(201,168,76,0.4)" }} />
          </div>

          <p style={{
            marginTop: "24px",
            fontSize: "16px",
            lineHeight: "1.75",
            color: "rgba(232,220,200,0.75)",
            maxWidth: "520px",
            margin: "24px auto 0",
          }}>
            By using Loveland Holidays services, you agree to the following terms.
            Please read them carefully before proceeding.
          </p>
        </header>

        {/* Divider */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "40px",
        }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.2)" }} />
          <div style={{ width: "6px", height: "6px", background: "#c9a84c", transform: "rotate(45deg)", flexShrink: 0 }} />
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.2)" }} />
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {sections.map((section, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                padding: "24px 28px",
                borderRadius: "8px",
                border: `1px solid ${hovered === i ? "rgba(201,168,76,0.45)" : "rgba(255,255,255,0.07)"}`,
                background: hovered === i
                  ? "rgba(201,168,76,0.08)"
                  : "rgba(255,255,255,0.03)",
                transition: "all 0.25s ease",
                cursor: "default",
              }}
            >
              {/* Icon */}
              <div style={{
                flexShrink: 0,
                width: "42px",
                height: "42px",
                borderRadius: "8px",
                background: hovered === i ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#c9a84c",
                transition: "background 0.25s ease",
                marginTop: "2px",
              }}>
                {section.icon}
              </div>

              {/* Text */}
              <div>
                <h2 style={{
                  margin: "0 0 8px 0",
                  fontSize: "18px",
                  fontWeight: "normal",
                  color: "#f5ead6",
                  letterSpacing: "0.01em",
                }}>
                  {section.title}
                </h2>
                <p style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: "1.72",
                  color: "rgba(232,220,200,0.7)",
                }}>
                  {section.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div style={{
          marginTop: "40px",
          padding: "32px 36px",
          borderRadius: "8px",
          background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.05) 100%)",
          border: "1px solid rgba(201,168,76,0.3)",
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
        }}>
          <div style={{
            flexShrink: 0,
            width: "42px",
            height: "42px",
            borderRadius: "8px",
            background: "rgba(201,168,76,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#c9a84c",
            marginTop: "2px",
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <h2 style={{
              margin: "0 0 14px 0",
              fontSize: "18px",
              fontWeight: "normal",
              color: "#f5ead6",
            }}>
              Contact Us
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="mailto:contact@lovelandholidays.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#c9a84c",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontFamily: "'Trebuchet MS', sans-serif",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                contact@lovelandholidays.com
              </a>
              <a
                href="tel:+917591999499"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#c9a84c",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontFamily: "'Trebuchet MS', sans-serif",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l1.07-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
                </svg>
                +91 7591 999 499
              </a>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p style={{
          textAlign: "center",
          marginTop: "48px",
          fontSize: "12px",
          color: "rgba(232,220,200,0.35)",
          fontFamily: "'Trebuchet MS', sans-serif",
          letterSpacing: "0.06em",
        }}>
          © {new Date().getFullYear()} Loveland Holidays. All rights reserved.
        </p>
      </div>
    </div>
  );
}