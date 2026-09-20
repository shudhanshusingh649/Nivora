import React, {
  useState,
} from "react";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Users,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import BrandLogo from "../../../components/common/BrandLogo";

import {
  PATHS,
} from "../../../app/routes";

const OPTIONS = [
  {
    id: "student",

    title: "Student",

    description:
      "For college students, exam aspirants, self-learners, and coaching students.",

    icon: GraduationCap,
  },

  {
    id: "bachelor",

    title: "Bachelor",

    description:
      "For independent or working bachelors looking for PGs, rooms, flats and flatmates.",

    icon: BriefcaseBusiness,
  },

  {
    id: "family",

    title: "Family",

    description:
      "For families looking for suitable rental homes and family-friendly spaces.",

    icon: Users,
  },

  {
    id: "owner",

    title: "Owner / Provider",

    description:
      "For property and service providers. Listing registration happens through the Nivora app.",

    icon: Building2,
  },
];

export default function ProfessionPage() {
  const navigate = useNavigate();

  const [selected, setSelected] =
    useState("");

  const [error, setError] =
    useState("");

  function handleSelect(value) {
    setSelected(value);

    setError("");
  }

  function handleContinue() {
    if (!selected) {
      setError(
        "Please select an option to continue."
      );

      return;
    }

    switch (selected) {
      case "student":
        navigate(
          PATHS.studentDetails
        );
        break;

      case "bachelor":
        navigate(
          PATHS.bachelorDetails
        );
        break;

      case "family":
        navigate(
          PATHS.familyDetails
        );
        break;

      case "owner":
        navigate(
          PATHS.ownerAppOnly
        );
        break;

      default:
        break;
    }
  }

  return (
    <main className="role-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="role-page-header">

        <BrandLogo />

        <button
          type="button"
          className="role-back-button"
          onClick={() =>
            navigate(
              PATHS.personal
            )
          }
        >
          Back
        </button>

      </header>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="role-page-main">

        <div className="role-page-intro">

          <span>
            STEP 02
          </span>

          <h1>
            What do you do?
          </h1>

          <p>
            Choose the option that best
            represents how you currently
            study, live, work, or provide
            a service.
          </p>

        </div>

        {/* ===================================================
            OPTIONS
        =================================================== */}

        <div className="role-options">

          {OPTIONS.map(
            (option) => {
              const Icon =
                option.icon;

              const isSelected =
                selected ===
                option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  className={
                    isSelected
                      ? "role-option active"
                      : "role-option"
                  }
                  onClick={() =>
                    handleSelect(
                      option.id
                    )
                  }
                >

                  <div className="role-option-icon">
                    <Icon
                      size={21}
                    />
                  </div>

                  <div className="role-option-content">

                    <strong>
                      {option.title}
                    </strong>

                    <span>
                      {
                        option.description
                      }
                    </span>

                  </div>

                  <div
                    className={
                      isSelected
                        ? "role-radio selected"
                        : "role-radio"
                    }
                  >
                    {isSelected && (
                      <span />
                    )}
                  </div>

                </button>
              );
            }
          )}

        </div>

        {/* ===================================================
            INFO
        =================================================== */}

        <div className="role-page-info">

          <span className="role-info-mark">
            ✓
          </span>

          <div>

            <strong>
              Your experience stays relevant
            </strong>

            <p>
              Your choice decides which
              questions, categories and
              recommendations you see next.
            </p>

          </div>

        </div>

        {/* ===================================================
            ERROR
        =================================================== */}

        {error && (
          <div className="role-error">
            {error}
          </div>
        )}

        {/* ===================================================
            CONTINUE
        =================================================== */}

        <div className="role-action">

          <button
            type="button"
            className="role-continue-button"
            onClick={
              handleContinue
            }
          >
            <span>
              Continue
            </span>

            <ArrowRight size={18} />
          </button>

        </div>

      </section>

    </main>
  );
}