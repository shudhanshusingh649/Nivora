import React from "react";

import {
  ArrowRight,
  LogOut,
  Pencil,
  GraduationCap,
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
  STUDENT_DASHBOARD,
} from "../student.config";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const profile = getUserProfile();

  if (
    !profile?.completed ||
    profile.role !== "student"
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
            title="Reset profile"
          >
            <LogOut size={18} />
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="dashboard-hero">
          <div className="dashboard-hero-copy">
            <div className="dashboard-kicker">
              <GraduationCap size={16} />

              <span>
                STUDENT EXPERIENCE
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
              {STUDENT_DASHBOARD.subtitle}
            </p>
          </div>

          <div className="profile-mini-card">
            <div className="profile-mini-avatar">
              {(personalInfo.firstName ||
                "U")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div>
              <strong>
                {personalInfo.firstName ||
                  "User"}{" "}
                {personalInfo.lastName || ""}
              </strong>

              <span>
                {personalInfo.city ||
                  "Location not added"}
              </span>

              <span>
                {getStudySummary(
                  roleDetails
                )}
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
              Your personalised experience
              is ready.
            </strong>

            <span>
              Search, listings, property
              details, maps, nearby services,
              chat and flatmate features will be
              added phase by phase.
            </span>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                YOUR EXPERIENCE
              </span>

              <h2>
                {STUDENT_DASHBOARD.title}
              </h2>
            </div>

            <span className="phase-label">
              Phase 2+
            </span>
          </div>

          <div className="dashboard-grid">
            {STUDENT_DASHBOARD.categories.map(
              (category, index) => (
                <article
                  className={`dashboard-tile tile-${
                    index + 1
                  }`}
                  key={category.id}
                >
                  <div className="tile-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <div className="tile-content">
                    <h3>
                      {category.title}
                    </h3>

                    <p>
                      {category.description}
                    </p>
                  </div>

                  <div className="tile-arrow">
                    <ArrowRight size={18} />
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        <section className="dashboard-info-grid">
          <div className="future-note">
            <span className="future-note-label">
              YOUR STUDY PROFILE
            </span>

            <strong>
              {getStudyTitle(roleDetails)}
            </strong>

            <span>
              {getStudyDescription(
                roleDetails
              )}
            </span>
          </div>

          <div className="future-note">
            <span className="future-note-label">
              COMING NEXT
            </span>

            <strong>
              Smarter nearby discovery
            </strong>

            <span>
              Selected properties will later
              connect with relevant services
              within approximately 2 km,
              including messes, libraries,
              pharmacies, hospitals and
              transport.
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

function getStudyTitle(roleDetails) {
  if (!roleDetails?.studyType) {
    return "Student profile";
  }

  if (roleDetails.studyType === "college") {
    return (
      roleDetails.institutionName ||
      "College / University"
    );
  }

  if (roleDetails.studyType === "self-study") {
    return (
      roleDetails.studyGoal ||
      "Self Study / Exam Preparation"
    );
  }

  if (roleDetails.studyType === "coaching") {
    return (
      roleDetails.institutionName ||
      "Coaching / Institute"
    );
  }

  return "Other Learning";
}

function getStudyDescription(roleDetails) {
  if (!roleDetails?.studyType) {
    return "Your student preferences will appear here.";
  }

  if (roleDetails.studyType === "college") {
    return (
      roleDetails.course ||
      "Academic profile"
    );
  }

  if (roleDetails.studyType === "self-study") {
    return roleDetails.studyLocation
      ? `Preparing around ${roleDetails.studyLocation}`
      : "Independent preparation";
  }

  if (roleDetails.studyType === "coaching") {
    return (
      roleDetails.studyGoal ||
      "Coaching-based preparation"
    );
  }

  return (
    roleDetails.studyGoal ||
    "Personal learning journey"
  );
}

function getStudySummary(roleDetails) {
  if (!roleDetails?.studyType) {
    return "Student profile";
  }

  if (roleDetails.studyType === "college") {
    return (
      roleDetails.course ||
      "College student"
    );
  }

  if (roleDetails.studyType === "self-study") {
    return (
      roleDetails.studyGoal ||
      "Self study"
    );
  }

  if (roleDetails.studyType === "coaching") {
    return (
      roleDetails.studyGoal ||
      "Coaching student"
    );
  }

  return "Student";
}