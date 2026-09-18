import React from "react";
import {
  Building2,
  LogOut,
  Pencil,
  Sparkles,
} from "lucide-react";
import {
  Navigate,
  useNavigate,
} from "react-router-dom";

import BrandLogo from "../../../components/common/BrandLogo";

import { PATHS } from "../../../app/routes";

import {
  getUserProfile,
  createEditDraftFromProfile,
  clearAllUserData,
} from "../../authentication/auth.utils";

import {
  getOwnerListingLabel,
} from "../../onboarding/onboarding.config";

export default function OwnerDashboard() {
  const navigate = useNavigate();

  const profile = getUserProfile();

  if (
    !profile?.completed ||
    profile.role !== "owner"
  ) {
    return (
      <Navigate
        to={PATHS.home}
        replace
      />
    );
  }

  const personalInfo =
    profile.personalInfo || {};

  const roleDetails =
    profile.roleDetails || {};

  const listingLabel =
    getOwnerListingLabel(
      profile.ownerListingType
    );

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

            <span>
              Edit profile
            </span>
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
          <div className="dashboard-hero-copy">
            <div className="dashboard-kicker">
              <Building2 size={16} />

              <span>
                OWNER / PROVIDER
              </span>
            </div>

            <h1>
              Welcome,
              <br />

              <span>
                {personalInfo.firstName ||
                  "there"}
                .
              </span>
            </h1>

            <p>
              Your provider profile is ready.
              Your selected listing type is kept
              separate from other categories.
            </p>
          </div>

          <div className="profile-mini-card">
            <div className="profile-mini-avatar">
              {(personalInfo.firstName ||
                "O")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div>
              <strong>
                {personalInfo.firstName ||
                  "Owner"}{" "}
                {personalInfo.lastName || ""}
              </strong>

              <span>
                {roleDetails.city ||
                  personalInfo.city ||
                  "Location not added"}
              </span>

              <span>
                {listingLabel}
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
              Listing management is being built
              separately.
            </strong>

            <span>
              The next phases will add the specific
              form, photos/videos, location,
              verification, approval, and listing
              management for {listingLabel}.
            </span>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                YOUR PROVIDER SPACE
              </span>

              <h2>
                {listingLabel}
              </h2>
            </div>

            <span className="phase-label">
              Phase 2+
            </span>
          </div>

          <div className="dashboard-info-grid">
            <div className="future-note">
              <span className="future-note-label">
                LISTING TYPE
              </span>

              <strong>
                {listingLabel}
              </strong>

              <span>
                This category will have its own
                dedicated listing workflow.
              </span>
            </div>

            <div className="future-note">
              <span className="future-note-label">
                FUTURE WORKFLOW
              </span>

              <strong>
                Create → Verify → Publish
              </strong>

              <span>
                Your listing will later move through
                submission, review, verification,
                approval, and live status.
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}