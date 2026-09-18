import React from "react";
import { ArrowLeft } from "lucide-react";

import BrandLogo from "../common/BrandLogo";
import ProgressBar from "../common/ProgressBar";
import { APP_CONFIG } from "../../app/app.config";

export default function OnboardingLayout({
  step,
  total = 4,
  children,
  onBack,
  showBack = true,
}) {
  return (
    <div className="onboarding-page">
      <aside className="onboarding-aside">
        <div className="aside-top">
          <BrandLogo dark />
        </div>

        <div className="aside-content">
          <span className="aside-kicker">
            BUILD YOUR SPACE
          </span>

          <h2>
            A better place
            <br />
            starts with
            <br />
            <span>knowing you.</span>
          </h2>

          <p>
            Tell us a little about yourself.
            We will shape your experience around
            your lifestyle and living needs.
          </p>

          <div className="aside-points">
            <div>
              <span className="point-dot" />
              Personalised experience
            </div>

            <div>
              <span className="point-dot" />
              Role-based discovery
            </div>

            <div>
              <span className="point-dot" />
              Designed for real life
            </div>
          </div>
        </div>

        <div className="aside-footer">
          <span>{APP_CONFIG.footerText}</span>

          <span>
            © {new Date().getFullYear()}
          </span>
        </div>
      </aside>

      <main className="onboarding-main">
        <div className="onboarding-topbar">
          <BrandLogo />

          {showBack && (
            <button
              type="button"
              className="back-button"
              onClick={onBack}
            >
              <ArrowLeft size={18} />
              <span>Back</span>
            </button>
          )}
        </div>

        <div className="onboarding-content">
          <ProgressBar
            step={step}
            total={total}
          />

          <div className="onboarding-card">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}