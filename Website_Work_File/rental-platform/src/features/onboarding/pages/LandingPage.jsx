import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { APP_CONFIG } from "../../../app/app.config";

import "../../../styles/landing.css";

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 2 1.4 6.6L20 10l-6.6 1.4L12 18l-1.4-6.6L4 10l6.6-1.4L12 2Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  function handleGetStarted() {
    setMobileMenuOpen(false);
    navigate("/login");
  }

  function handleDownload() {
    setMobileMenuOpen(false);

    const target =
      APP_CONFIG.navigation.downloadApp;

    if (target.startsWith("#")) {
      const element =
        document.getElementById(
          target.substring(1)
        );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    window.location.href = target;
  }

  function scrollToSection(id) {
    setMobileMenuOpen(false);

    const element =
      document.getElementById(id);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function scrollHome() {
    setMobileMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="landing-page">
      <div className="landing-background">
        <div className="landing-glow landing-glow-one" />
        <div className="landing-glow landing-glow-two" />
        <div className="landing-grid" />
      </div>

      <header className="landing-header">
        <div className="landing-header-inner">
          <button
            type="button"
            className="landing-logo-button"
            onClick={scrollHome}
            aria-label="ZEEVO home"
          >
            <span className="landing-logo-wrap">
              <img
                src={APP_CONFIG.logo}
                alt="ZEEVO"
                className="landing-logo"
              />
            </span>
          </button>

          <nav className="landing-nav">
            <button
              type="button"
              className="landing-nav-link active"
              onClick={scrollHome}
            >
              Home
            </button>

            <button
              type="button"
              className="landing-nav-link"
              onClick={() =>
                scrollToSection("features")
              }
            >
              Features
            </button>

            <button
              type="button"
              className="landing-nav-link"
              onClick={() =>
                scrollToSection(
                  "how-it-works"
                )
              }
            >
              How It Works
            </button>

            <button
              type="button"
              className="landing-nav-link"
              onClick={() =>
                scrollToSection("about")
              }
            >
              About
            </button>

            <button
              type="button"
              className="landing-nav-link"
              onClick={() =>
                scrollToSection("contact")
              }
            >
              Contact
            </button>
          </nav>

          <div className="landing-header-actions">
            <button
              type="button"
              className="landing-header-cta"
              onClick={handleGetStarted}
            >
              Get Started
              <ArrowIcon />
            </button>

            <button
              type="button"
              className="landing-mobile-menu-button"
              onClick={() =>
                setMobileMenuOpen(
                  (current) => !current
                )
              }
              aria-label="Open navigation"
            >
              {mobileMenuOpen ? (
                <CloseIcon />
              ) : (
                <MenuIcon />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="landing-mobile-menu">
            <button
              type="button"
              onClick={scrollHome}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection("features")
              }
            >
              Features
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection(
                  "how-it-works"
                )
              }
            >
              How It Works
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection("about")
              }
            >
              About
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection("contact")
              }
            >
              Contact
            </button>

            <button
              type="button"
              className="mobile-menu-start"
              onClick={handleGetStarted}
            >
              Start with ZEEVO
              <ArrowIcon />
            </button>
          </div>
        )}
      </header>

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="landing-hero">
          <div className="landing-hero-content">
            <div className="landing-badge">
              <SparkIcon />

              <span>
                A smarter way to find your
                space
              </span>
            </div>

            <h1 className="landing-title">
              Find a place
              <span>
                that feels right.
              </span>
            </h1>

            <p className="landing-description">
              ZEEVO is a modern living
              platform designed to help
              students, bachelors and
              families discover spaces that
              fit their lifestyle, preferred
              location, budget and everyday
              needs.
            </p>

            <p className="landing-description secondary">
              Create your profile once.
              ZEEVO then understands your
              selected role and preferences
              and shows a relevant living
              experience after you sign in.
            </p>

            <div className="landing-actions">
              <button
                type="button"
                className="landing-primary-button"
                onClick={handleGetStarted}
              >
                Get Started
                <ArrowIcon />
              </button>

              <button
                type="button"
                className="landing-secondary-button"
                onClick={handleDownload}
              >
                <DownloadIcon />
                Download App
              </button>
            </div>

            <div className="landing-trust-list">
              <div className="landing-trust-item">
                <span className="landing-icon-box">
                  <ShieldIcon />
                </span>

                <span>
                  <strong>
                    Verified-first
                  </strong>

                  <small>
                    Safer discovery
                  </small>
                </span>
              </div>

              <div className="landing-trust-divider" />

              <div className="landing-trust-item">
                <span className="landing-icon-box">
                  <LocationIcon />
                </span>

                <span>
                  <strong>
                    Location-first
                  </strong>

                  <small>
                    Built around you
                  </small>
                </span>
              </div>

              <div className="landing-trust-divider" />

              <div className="landing-trust-item">
                <span className="landing-icon-box">
                  <UsersIcon />
                </span>

                <span>
                  <strong>
                    Role-based
                  </strong>

                  <small>
                    Student · Bachelor ·
                    Family
                  </small>
                </span>
              </div>
            </div>
          </div>

          <div className="landing-visual">
            <div className="landing-orbit landing-orbit-one" />
            <div className="landing-orbit landing-orbit-two" />

            <div className="landing-showcase">
              <div className="landing-showcase-header">
                <div>
                  <span className="landing-showcase-label">
                    ZEEVO
                  </span>

                  <strong>
                    YOUR NEXT SPACE
                  </strong>
                </div>

                <span className="landing-live">
                  <i />
                  Live
                </span>
              </div>

              <div className="landing-logo-stage">
                <div className="landing-logo-backplate">
                  <img
                    src={APP_CONFIG.logo}
                    alt="ZEEVO official logo"
                    className="landing-main-logo"
                  />
                </div>
              </div>

              <div className="landing-showcase-footer">
                <div>
                  <strong>
                    Built around you
                  </strong>

                  <span>
                    Spaces, services and
                    everyday essentials
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleGetStarted}
                  aria-label="Get started"
                >
                  <ArrowIcon />
                </button>
              </div>
            </div>

            <div className="landing-floating-card landing-location-card">
              <span className="landing-floating-icon">
                <LocationIcon />
              </span>

              <div>
                <strong>
                  Location first
                </strong>

                <span>
                  Your preferences shape
                  discovery
                </span>
              </div>
            </div>

            <div className="landing-floating-card landing-personal-card">
              <span className="landing-floating-icon check">
                ✓
              </span>

              <div>
                <strong>
                  Personalised experience
                </strong>

                <span>
                  Simple. Clear. Relevant.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURES
        ====================================================== */}

        <section
          id="features"
          className="landing-section"
        >
          <div className="landing-section-heading">
            <span>FEATURES</span>

            <h2>
              More than a listing
              <br />
              platform.
            </h2>

            <p>
              ZEEVO connects discovery,
              personal preferences and the
              living services around a user
              into a role-based experience.
            </p>
          </div>

          <div className="landing-feature-grid">
            <article className="landing-feature-card">
              <span className="landing-feature-number">
                01
              </span>

              <div className="landing-feature-icon">
                <UsersIcon />
              </div>

              <h3>
                Role-based discovery
              </h3>

              <p>
                Students, bachelors and
                families follow different
                journeys, so each section
                remains relevant to the user.
              </p>
            </article>

            <article className="landing-feature-card">
              <span className="landing-feature-number">
                02
              </span>

              <div className="landing-feature-icon">
                <LocationIcon />
              </div>

              <h3>
                Location-aware experience
              </h3>

              <p>
                Preferred locations,
                nearby areas and useful
                services become part of the
                discovery experience.
              </p>
            </article>

            <article className="landing-feature-card">
              <span className="landing-feature-number">
                03
              </span>

              <div className="landing-feature-icon">
                <ShieldIcon />
              </div>

              <h3>
                Verified-first ecosystem
              </h3>

              <p>
                The product is designed
                around relevant listings,
                verification workflows and
                safer discovery.
              </p>
            </article>

            <article className="landing-feature-card">
              <span className="landing-feature-number">
                04
              </span>

              <div className="landing-feature-icon">
                <SearchIcon />
              </div>

              <h3>
                Smart search
              </h3>

              <p>
                Location, budget, room type
                and user-specific preferences
                can shape the results shown to
                each person.
              </p>
            </article>

            <article className="landing-feature-card">
              <span className="landing-feature-number">
                05
              </span>

              <div className="landing-feature-icon">
                <UsersIcon />
              </div>

              <h3>
                Flatmate connection
              </h3>

              <p>
                Compatible flatmate
                requirements and connection
                workflows can become part of
                the living journey.
              </p>
            </article>

            <article className="landing-feature-card">
              <span className="landing-feature-number">
                06
              </span>

              <div className="landing-feature-icon">
                <LocationIcon />
              </div>

              <h3>
                Nearby essentials
              </h3>

              <p>
                Relevant places such as
                messes, libraries, pharmacies,
                hospitals and transport can
                connect with property discovery.
              </p>
            </article>
          </div>
        </section>

        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}

        <section
          id="how-it-works"
          className="landing-section landing-section-dark"
        >
          <div className="landing-section-heading">
            <span>
              HOW IT WORKS
            </span>

            <h2>
              One profile.
              <br />
              A relevant journey.
            </h2>

            <p>
              ZEEVO does not show every
              section to every user. Your
              profile, profession and selected
              role determine which experience
              becomes relevant.
            </p>
          </div>

          <div className="landing-flow">
            <div className="landing-flow-step">
              <span>01</span>

              <strong>
                Sign in
              </strong>

              <p>
                Continue through mobile OTP,
                Google or email.
              </p>
            </div>

            <div className="landing-flow-line" />

            <div className="landing-flow-step">
              <span>02</span>

              <strong>
                Tell us about you
              </strong>

              <p>
                Add your basic information,
                profession and location.
              </p>
            </div>

            <div className="landing-flow-line" />

            <div className="landing-flow-step">
              <span>03</span>

              <strong>
                Choose your experience
              </strong>

              <p>
                Student, Bachelor or Family
                determines the relevant flow.
              </p>
            </div>

            <div className="landing-flow-line" />

            <div className="landing-flow-step">
              <span>04</span>

              <strong>
                Discover
              </strong>

              <p>
                Explore relevant spaces,
                flatmates and nearby services.
              </p>
            </div>
          </div>

          <div className="landing-role-strip">
            <div>
              <span>STUDENT</span>
              <strong>
                PG + Hostel · Flats · Rooms
                · Flatmates
              </strong>
            </div>

            <div>
              <span>BACHELOR</span>
              <strong>
                PG + Hostel · Flats · Rooms
                · Flatmates
              </strong>
            </div>

            <div>
              <span>FAMILY</span>
              <strong>
                Family-focused rental homes
              </strong>
            </div>
          </div>
        </section>

        {/* =====================================================
            APP SECTION
        ====================================================== */}

        <section
          id="download-app"
          className="landing-section"
        >
          <div className="landing-app-card">
            <div className="landing-app-copy">
              <span>
                ZEEVO MOBILE APP
              </span>

              <h2>
                Continue your living
                journey on the app.
              </h2>

              <p>
                The website introduces ZEEVO
                and helps users begin their
                journey. The mobile app is
                designed for the deeper
                experience, including owner-side
                listing submission and other
                platform interactions.
              </p>

              <button
                type="button"
                className="landing-primary-button"
                onClick={() =>
                  scrollToSection("contact")
                }
              >
                Get the ZEEVO App
                <ArrowIcon />
              </button>
            </div>

            <div className="landing-app-points">
              <div>
                <span>01</span>
                <strong>
                  Find relevant spaces
                </strong>
                <p>
                  Explore according to your
                  selected experience.
                </p>
              </div>

              <div>
                <span>02</span>
                <strong>
                  Connect your journey
                </strong>
                <p>
                  Continue with property,
                  flatmate and service
                  experiences.
                </p>
              </div>

              <div>
                <span>03</span>
                <strong>
                  Owner listing
                </strong>
                <p>
                  Owners use the mobile app
                  for listing registration and
                  submission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ====================================================== */}

        <section
          id="about"
          className="landing-section landing-about-section"
        >
          <div className="landing-section-heading">
            <span>ABOUT ZEEVO</span>

            <h2>
              Built around how
              <br />
              people actually live.
            </h2>
          </div>

          <div className="landing-about-grid">
            <div className="landing-about-intro">
              <div className="landing-about-logo">
                <img
                  src={APP_CONFIG.logo}
                  alt="ZEEVO"
                />
              </div>

              <strong>
                FIND. VERIFY. LIVE.
              </strong>
            </div>

            <div className="landing-about-content">
              <p>
                ZEEVO is a modern living
                platform built around the idea
                that finding a place should
                start with understanding the
                person looking for it.
              </p>

              <p>
                A student may need a hostel,
                PG, room, rental flat, flatmate
                and nearby study essentials.
                A bachelor may have a different
                set of living preferences. A
                family may need an entirely
                different rental experience.
              </p>

              <p>
                Instead of showing everything
                to everyone, ZEEVO uses the
                user's profile and selected
                experience to make the journey
                more relevant.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ====================================================== */}

        <section
          id="contact"
          className="landing-section"
        >
          <div className="landing-contact-card">
            <div>
              <span>
                GET STARTED
              </span>

              <h2>
                Your next place starts
                with knowing what you need.
              </h2>

              <p>
                Create your ZEEVO profile
                and begin with the experience
                that fits you.
              </p>
            </div>

            <button
              type="button"
              className="landing-primary-button"
              onClick={handleGetStarted}
            >
              Start with ZEEVO
              <ArrowIcon />
            </button>
          </div>
        </section>
      </main>

      {/* =======================================================
          FOOTER
      ======================================================== */}

      <footer className="landing-footer">
        <div className="landing-footer-brand">
          <span className="footer-logo-wrap">
            <img
              src={APP_CONFIG.logo}
              alt="ZEEVO"
            />
          </span>

          <div>
            <strong>
              © 2026 ZEEVO
            </strong>

            <span>
              {APP_CONFIG.tagline}
            </span>
          </div>
        </div>

        <div className="landing-footer-links">
          <button type="button">
            Privacy
          </button>

          <button type="button">
            Terms
          </button>

          <button
            type="button"
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Help
          </button>
        </div>
      </footer>
    </div>
  );
}