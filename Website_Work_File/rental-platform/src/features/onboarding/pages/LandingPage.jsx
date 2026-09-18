import React from "react";
import {
  ArrowRight,
  MapPinned,
  ShieldCheck,
  UsersRound,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import BrandLogo from "../../../components/common/BrandLogo";
import { APP_CONFIG } from "../../../app/app.config";
import { PATHS } from "../../../app/routes";

export default function LandingPage() {
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate(PATHS.personal);
  }

  return (
    <main className="landing-page">
      <div className="landing-background">
        <div className="landing-glow landing-glow-one" />
        <div className="landing-glow landing-glow-two" />
      </div>

      <nav className="landing-navbar">
        <BrandLogo dark />

        <div className="landing-nav-note">
          Designed around you
        </div>
      </nav>

      <section className="landing-hero">
        <div className="landing-copy">
          <div className="hero-badge">
            <Sparkles size={15} />
            <span>A smarter way to find your space</span>
          </div>

          <h1>
            Your next place,
            <br />
            <span>designed around you.</span>
          </h1>

          <p className="landing-description">
            {APP_CONFIG.description}
          </p>

          <button
            type="button"
            className="primary-button hero-button"
            onClick={handleGetStarted}
          >
            <span>Get Started</span>
            <ArrowRight size={19} />
          </button>

          <div className="landing-trust-row">
            <div>
              <ShieldCheck size={18} />
              <span>Personalised experience</span>
            </div>

            <div>
              <MapPinned size={18} />
              <span>Built around location</span>
            </div>

            <div>
              <UsersRound size={18} />
              <span>Made for every lifestyle</span>
            </div>
          </div>
        </div>

        <div className="landing-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="visual-card visual-main-card">
            <div className="visual-card-top">
              <span className="visual-label">
                YOUR SPACE
              </span>

              <span className="visual-status">
                PERSONAL
              </span>
            </div>

            <div className="visual-house">
              <div className="house-roof" />

              <div className="house-body">
                <div className="house-window" />
                <div className="house-window small" />
                <div className="house-door" />
              </div>
            </div>

            <div className="visual-card-bottom">
              <div>
                <strong>
                  Made for your next move
                </strong>

                <span>
                  A profile-first living experience
                </span>
              </div>

              <div className="visual-arrow">
                <ArrowRight size={17} />
              </div>
            </div>
          </div>

          <div className="floating-card floating-card-one">
            <MapPinned size={18} />

            <div>
              <strong>Location-first</strong>
              <span>
                Built around where you live
              </span>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <ShieldCheck size={18} />

            <div>
              <strong>Thoughtfully designed</strong>
              <span>
                Simple. Clear. Personal.
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <span>{APP_CONFIG.footerText}</span>

        <div>
          <span>Living</span>
          <span>Community</span>
          <span>Local</span>
        </div>
      </footer>
    </main>
  );
}