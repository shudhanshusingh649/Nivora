import React from "react";

import {
  ArrowRight,
  Check,
  Download,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

import BrandLogo from "../../../components/common/BrandLogo";

import { APP_CONFIG } from "../../../app/app.config";

import "../../../styles/landing.css";


export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    React.useState(false);


  const closeMenu = () => {
    setMobileMenuOpen(false);
  };


  const handleDownloadApp = () => {
    window.open(
      APP_CONFIG.appDownloadUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };


  return (
    <main className="zeevo-landing">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="zeevo-landing-background"
        aria-hidden="true"
      >
        <div className="zeevo-glow zeevo-glow-one" />

        <div className="zeevo-glow zeevo-glow-two" />

        <div className="zeevo-glow zeevo-glow-three" />

        <div className="zeevo-grid" />
      </div>


      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="zeevo-navbar">

        {/* LOGO */}

        <Link
          to="/"
          className="zeevo-navbar-logo"
          onClick={closeMenu}
          aria-label="ZEEVO Home"
        >
          <BrandLogo />
        </Link>


        {/* DESKTOP / MOBILE NAVIGATION */}

        <nav
          className={[
            "zeevo-nav",
            mobileMenuOpen
              ? "zeevo-nav-open"
              : "",
          ].join(" ")}
        >

          <a
            href="#home"
            className="
              zeevo-nav-link
              zeevo-nav-active
            "
            onClick={closeMenu}
          >
            Home
          </a>


          <a
            href="#features"
            className="zeevo-nav-link"
            onClick={closeMenu}
          >
            Features
          </a>


          <a
            href="#how-it-works"
            className="zeevo-nav-link"
            onClick={closeMenu}
          >
            How It Works
          </a>


          <a
            href="#about"
            className="zeevo-nav-link"
            onClick={closeMenu}
          >
            About
          </a>


          <a
            href="#contact"
            className="zeevo-nav-link"
            onClick={closeMenu}
          >
            Contact
          </a>

        </nav>


        {/* RIGHT ACTION */}

        <div className="zeevo-navbar-actions">

          {/* FIND YOUR SPACE REMOVED */}

          <Link
            to={APP_CONFIG.getStartedPath}
            className="zeevo-header-cta"
            onClick={closeMenu}
          >
            <span>
              Get Started
            </span>

            <ArrowRight size={17} />
          </Link>

        </div>


        {/* MOBILE MENU */}

        <button
          type="button"
          className="zeevo-mobile-menu"
          onClick={() =>
            setMobileMenuOpen(
              (current) => !current
            )
          }
          aria-label={
            mobileMenuOpen
              ? "Close navigation"
              : "Open navigation"
          }
        >
          {mobileMenuOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>

      </header>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        id="home"
        className="zeevo-hero"
      >

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div className="zeevo-hero-content">

          {/* BADGE */}

          <div className="zeevo-hero-badge">

            <span className="zeevo-badge-icon">
              <Sparkles size={14} />
            </span>

            <span>
              A smarter way to find your space
            </span>

          </div>


          {/* TITLE */}

          <h1 className="zeevo-hero-title">

            <span className="zeevo-title-white">
              Find a place
            </span>

            <span className="zeevo-title-green">
              that feels right.
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p className="zeevo-hero-description">

            ZEEVO is a modern living platform designed
            to help students, bachelors and families
            find spaces that fit their lifestyle,
            location, budget and everyday needs.

            <br />
            <br />

            Start by creating your profile. ZEEVO then
            understands who you are and shows a
            relevant experience based on your selected
            role and preferences.

          </p>


          {/* ACTIONS */}

          <div className="zeevo-hero-actions">

            {/* GET STARTED */}

            <Link
              to={APP_CONFIG.getStartedPath}
              className="zeevo-primary-cta"
            >
              <span>
                Get Started
              </span>

              <ArrowRight size={18} />
            </Link>


            {/* DOWNLOAD APP */}

            <button
              type="button"
              className="zeevo-download-button"
              onClick={handleDownloadApp}
            >

              <span className="zeevo-download-icon">

                <Download size={17} />

              </span>

              <span>
                Download App
              </span>

            </button>

          </div>


          {/* =================================================
              FEATURE HIGHLIGHTS
          ================================================== */}

          <div
            id="features"
            className="zeevo-trust-row"
          >

            {/* VERIFIED */}

            <div className="zeevo-trust-item">

              <div className="zeevo-trust-icon">

                <ShieldCheck size={17} />

              </div>

              <div className="zeevo-trust-text">

                <strong>
                  Verified Homes
                </strong>

                <span>
                  Safer discovery
                </span>

              </div>

            </div>


            <div className="zeevo-trust-divider" />


            {/* LOCATION */}

            <div className="zeevo-trust-item">

              <div className="zeevo-trust-icon">

                <MapPin size={17} />

              </div>

              <div className="zeevo-trust-text">

                <strong>
                  Location First
                </strong>

                <span>
                  Built around you
                </span>

              </div>

            </div>


            <div className="zeevo-trust-divider" />


            {/* ROLE BASED */}

            <div className="zeevo-trust-item">

              <div className="zeevo-trust-icon">

                <Users size={17} />

              </div>

              <div className="zeevo-trust-text">

                <strong>
                  Role Based
                </strong>

                <span>
                  Student · Bachelor · Family
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* ===================================================
            RIGHT VISUAL
        =================================================== */}

        <div className="zeevo-visual">

          {/* ORBITS */}

          <div className="zeevo-orbit zeevo-orbit-one" />

          <div className="zeevo-orbit zeevo-orbit-two" />


          {/* MAIN CARD */}

          <div className="zeevo-space-card">

            {/* CARD TOP */}

            <div className="zeevo-card-top">

              <div className="zeevo-card-title">

                <span>
                  ZEEVO
                </span>

                <strong>
                  YOUR NEXT SPACE
                </strong>

              </div>


              <div className="zeevo-live-status">

                <span />

                Live

              </div>

            </div>


            {/* LOGO */}

            <div className="zeevo-card-logo-area">

              <div className="zeevo-card-logo-glow" />

              <img
                src="/zeevo-logo.png"
                alt="ZEEVO — Find. Verify. Live."
                className="zeevo-card-logo"
                draggable="false"
              />

            </div>


            {/* DIVIDER */}

            <div className="zeevo-card-divider" />


            {/* CARD FOOTER */}

            <div className="zeevo-card-bottom">

              <div>

                <strong>
                  Built around you
                </strong>

                <span>
                  Personalised living experience
                </span>

              </div>


              {/* Arrow now starts onboarding */}

              <Link
                to={APP_CONFIG.getStartedPath}
                className="zeevo-card-arrow"
                aria-label="Get started with ZEEVO"
              >
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>


          {/* =================================================
              LOCATION CARD
          ================================================== */}

          <div
            className="
              zeevo-floating-card
              zeevo-location-card
            "
          >

            <div className="zeevo-floating-icon">

              <MapPin size={17} />

            </div>


            <div className="zeevo-floating-content">

              <strong>
                Location first
              </strong>

              <span>
                Your preferences shape discovery
              </span>

            </div>

          </div>


          {/* =================================================
              DESIGNED CARD
          ================================================== */}

          <div
            className="
              zeevo-floating-card
              zeevo-designed-card
            "
          >

            <div className="zeevo-floating-icon">

              <Check size={17} />

            </div>


            <div className="zeevo-floating-content">

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
          HOW IT WORKS
      ====================================================== */}

      <section
        id="how-it-works"
        className="zeevo-info-section"
      >

        <div className="zeevo-section-heading">

          <span>
            HOW IT WORKS
          </span>

          <h2>
            Your journey starts
            <br />
            with knowing you.
          </h2>

          <p>
            ZEEVO does not open every section to every
            person. Your experience is shaped from the
            information you provide during onboarding.
          </p>

        </div>


        <div className="zeevo-info-grid">

          {/* STEP 01 */}

          <article className="zeevo-info-card">

            <span className="zeevo-step-number">
              01
            </span>

            <h3>
              Register or login
            </h3>

            <p>
              Start your ZEEVO journey by signing in
              or creating your account before accessing
              the main living experience.
            </p>

          </article>


          {/* STEP 02 */}

          <article className="zeevo-info-card">

            <span className="zeevo-step-number">
              02
            </span>

            <h3>
              Tell us about you
            </h3>

            <p>
              Provide your personal information,
              current situation, location and other
              details that help shape your experience.
            </p>

          </article>


          {/* STEP 03 */}

          <article className="zeevo-info-card">

            <span className="zeevo-step-number">
              03
            </span>

            <h3>
              Choose your role
            </h3>

            <p>
              Select the profile that fits you, such as
              Student, Bachelor, Family or the relevant
              provider journey.
            </p>

          </article>


          {/* STEP 04 */}

          <article className="zeevo-info-card">

            <span className="zeevo-step-number">
              04
            </span>

            <h3>
              Get your experience
            </h3>

            <p>
              Once your role is selected, ZEEVO opens
              the relevant sections, questions and
              services for that specific journey.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="zeevo-about-section"
      >

        <div>

          <span className="zeevo-section-label">
            ABOUT ZEEVO
          </span>

          <h2>
            A living platform
            built around people.
          </h2>

        </div>


        <p>
          ZEEVO is being designed as a connected living
          platform where the experience changes according
          to the person using it. Students, bachelors and
          families can have different needs, so the
          platform is structured to keep their journeys
          relevant instead of showing the same experience
          to everyone.
          <br />
          <br />
          Property providers, PG and hostel owners, room
          owners, mess providers and hotel providers will
          have separate workflows and listing experiences
          as the platform grows.
        </p>

      </section>


      {/* =====================================================
          CONTACT / GET STARTED
      ====================================================== */}

      <section
        id="contact"
        className="zeevo-contact-section"
      >

        <div className="zeevo-contact-card">

          <div>

            <span className="zeevo-section-label">
              START YOUR JOURNEY
            </span>

            <h2>
              Tell ZEEVO what
              you need.
            </h2>

            <p>
              Create your profile first. Your relevant
              experience will open after onboarding.
            </p>

          </div>


          <div className="zeevo-contact-actions">

            <Link
              to={APP_CONFIG.getStartedPath}
              className="zeevo-contact-primary"
            >
              Get Started

              <ArrowRight size={17} />

            </Link>


            <button
              type="button"
              className="zeevo-contact-secondary"
              onClick={handleDownloadApp}
            >
              Download App

              <Download size={17} />

            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="zeevo-footer">

        <div className="zeevo-footer-brand">

          <BrandLogo compact />

          <span>
            FIND. VERIFY. LIVE.
          </span>

        </div>


        <span className="zeevo-footer-copy">
          © 2026 ZEEVO. All rights reserved.
        </span>


        <div className="zeevo-footer-links">

          <a href="#about">
            Privacy
          </a>

          <a href="#about">
            Terms
          </a>

          <a href="#contact">
            Help
          </a>

        </div>

      </footer>

    </main>
  );
}