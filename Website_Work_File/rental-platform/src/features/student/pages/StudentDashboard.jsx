import React from "react";

import {
  ArrowRight,
  BedDouble,
  Building2,
  Home,
  LogOut,
  MapPinned,
  Pencil,
  Sparkles,
  UsersRound,
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

const CATEGORY_ICONS = {
  hostel: BedDouble,
  pg: Building2,
  "rental-flat": Home,
  room: BedDouble,
  flatmate: UsersRound,
  nearby: MapPinned,
};

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

  function handleCategoryClick(
    categoryId
  ) {
    navigate(
      `/explore?category=${encodeURIComponent(
        categoryId
      )}&role=student`
    );
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
        <section className="dashboard-hero student-dashboard-hero">
          <div className="dashboard-hero-copy">
            <div className="dashboard-kicker">
              <Sparkles size={16} />

              <span>
                STUDENT EXPERIENCE
              </span>
            </div>

            <h1>
              Find a space
              <br />
              <span>
                that fits your life.
              </span>
            </h1>

            <p>
              Explore accommodation and everyday
              living options around your study,
              budget, and lifestyle needs.
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

        <section className="student-dashboard-intro">
          <div>
            <span className="section-eyebrow">
              START EXPLORING
            </span>

            <h2>
              What are you looking for?
            </h2>

            <p>
              Choose one category. We will ask only
              the questions relevant to that category.
            </p>
          </div>

          <div className="smart-search-badge">
            <Sparkles size={15} />
            Smart Search
          </div>
        </section>

        <section className="dashboard-grid student-category-grid">
          {STUDENT_DASHBOARD.categories.map(
            (category, index) => {
              const Icon =
                CATEGORY_ICONS[category.id] ||
                Home;

              return (
                <button
                  type="button"
                  className={`student-category-card student-category-${index + 1}`}
                  key={category.id}
                  onClick={() =>
                    handleCategoryClick(
                      category.id
                    )
                  }
                >
                  <div className="category-card-top">
                    <span className="category-number">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <div className="category-icon">
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>

                  <div className="category-card-content">
                    <h3>
                      {category.title}
                    </h3>

                    <p>
                      {category.description}
                    </p>
                  </div>

                  <div className="category-card-footer">
                    <span>
                      Explore options
                    </span>

                    <div className="category-arrow">
                      <ArrowRight size={17} />
                    </div>
                  </div>
                </button>
              );
            }
          )}
        </section>

        <section className="student-personalisation">
          <div className="personalisation-icon">
            <MapPinned size={20} />
          </div>

          <div>
            <span className="section-eyebrow">
              BUILT AROUND YOUR NEEDS
            </span>

            <h3>
              Your search becomes more specific
              as you tell us more.
            </h3>

            <p>
              Location, monthly budget, room type,
              food preference, furnishing, move-in
              date, flatmate preferences and other
              category-specific filters will be
              used to refine your results.
            </p>
          </div>
        </section>
      </main>
    </div>
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