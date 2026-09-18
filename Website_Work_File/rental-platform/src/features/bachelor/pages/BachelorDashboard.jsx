import {
  ArrowRight,
  LogOut,
  Pencil,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

import BrandLogo from "../../../components/common/BrandLogo";
import { PATHS } from "../../../app/routes";

import {
  getUserProfile,
  createEditDraftFromProfile,
  clearAllUserData,
} from "../../authentication/auth.utils";

import { BACHELOR_DASHBOARD } from "../bachelor.config";

export default function BachelorDashboard() {
  const navigate = useNavigate();
  const profile = getUserProfile();

  if (!profile?.completed || profile.role !== "bachelor") {
    return <Navigate to={PATHS.home} replace />;
  }

  const personalInfo = profile.personalInfo || {};
  const roleDetails = profile.roleDetails || {};

  function handleEdit() {
    createEditDraftFromProfile();
    navigate(PATHS.personal);
  }

  function handleLogout() {
    clearAllUserData();
    navigate(PATHS.home);
  }

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <BrandLogo />

        <div className="dashboard-actions">
          <button
            type="button"
            className="icon-text-button"
            onClick={handleEdit}
          >
            <Pencil size={16} />
            Edit profile
          </button>

          <button
            type="button"
            className="icon-only-button"
            onClick={handleLogout}
            aria-label="Reset profile"
          >
            <LogOut size={18} />
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="dashboard-hero">
          <div>
            <div className="dashboard-kicker">
              <BriefcaseBusiness size={16} />
              BACHELOR EXPERIENCE
            </div>

            <h1>
              Welcome,
              <br />
              <span>{personalInfo.firstName || "there"}.</span>
            </h1>

            <p>
              {BACHELOR_DASHBOARD.subtitle}
            </p>
          </div>

          <div className="profile-mini-card">
            <div className="profile-mini-avatar">
              {(personalInfo.firstName || "U")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div>
              <strong>
                {personalInfo.firstName || "User"}{" "}
                {personalInfo.lastName || ""}
              </strong>

              <span>
                {personalInfo.city || "Location not added"}
              </span>

              <span>
                {roleDetails.workType ||
                  "Bachelor profile"}
              </span>
            </div>
          </div>
        </section>

        <section className="phase-banner">
          <div className="phase-banner-icon">
            <Sparkles size={19} />
          </div>

          <div>
            <strong>
              Your personalised experience is ready.
            </strong>

            <span>
              Search, listings, maps, nearby services,
              chat and flatmate features will be introduced
              phase by phase.
            </span>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                YOUR EXPERIENCE
              </span>

              <h2>{BACHELOR_DASHBOARD.title}</h2>
            </div>

            <span className="phase-label">
              Coming in Phase 2+
            </span>
          </div>

          <div className="dashboard-grid">
            {BACHELOR_DASHBOARD.categories.map(
              (category, index) => (
                <article
                  className={`dashboard-tile tile-${index + 1}`}
                  key={category.id}
                >
                  <div className="tile-number">
                    0{index + 1}
                  </div>

                  <div className="tile-content">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>

                  <div className="tile-arrow">
                    <ArrowRight size={18} />
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        <section className="future-note">
          <span>
            Future property pages will show relevant nearby
            services within approximately 2 km, including
            messes, pharmacy, transport, markets and more.
          </span>
        </section>
      </main>
    </div>
  );
}