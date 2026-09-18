import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "../../../components/layout/OnboardingLayout";
import StepHeader from "../../../components/common/StepHeader";
import OptionCard from "../../../components/common/OptionCard";

import {
  PLATFORM_SECTIONS,
  OWNER_LISTING_TYPES,
} from "../onboarding.config";

import {
  getOnboardingDraft,
  saveOnboardingDraft,
} from "../../authentication/auth.utils";

import { PATHS } from "../../../app/routes";

export default function ProfessionPage() {
  const navigate = useNavigate();

  const savedDraft = getOnboardingDraft();

  const [selectedSection, setSelectedSection] =
    useState(savedDraft.role || "");

  const [selectedOwnerType, setSelectedOwnerType] =
    useState(savedDraft.ownerListingType || "");

  const [error, setError] = useState("");

  function handleSectionChange(sectionId) {
    setSelectedSection(sectionId);
    setSelectedOwnerType("");
    setError("");
  }

  function handleOwnerTypeChange(typeId) {
    setSelectedOwnerType(typeId);
    setError("");
  }

  function handleContinue() {
    if (!selectedSection) {
      setError(
        "Please choose how you want to use the platform."
      );
      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Student
    |--------------------------------------------------------------------------
    */

    if (selectedSection === "student") {
      const studentDraft = {
        ...savedDraft,
        role: "student",
        ownerListingType: null,
        roleDetails: {},
      };

      saveOnboardingDraft(studentDraft);

      navigate(PATHS.studentDetails);
      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Bachelor
    |--------------------------------------------------------------------------
    */

    if (selectedSection === "bachelor") {
      const bachelorDraft = {
        ...savedDraft,
        role: "bachelor",
        ownerListingType: null,
        roleDetails: {},
      };

      saveOnboardingDraft(bachelorDraft);

      navigate(PATHS.bachelorDetails);
      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Family
    |--------------------------------------------------------------------------
    */

    if (selectedSection === "family") {
      const familyDraft = {
        ...savedDraft,
        role: "family",
        ownerListingType: null,
        roleDetails: {},
      };

      saveOnboardingDraft(familyDraft);

      navigate(PATHS.familyDetails);
      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Owner
    |--------------------------------------------------------------------------
    */

    if (selectedSection === "owner") {
      if (!selectedOwnerType) {
        setError(
          "Please choose what you want to list."
        );
        return;
      }

      const ownerDraft = {
        ...savedDraft,
        role: "owner",
        ownerListingType: selectedOwnerType,
        roleDetails: {},
      };

      saveOnboardingDraft(ownerDraft);

      navigate(PATHS.ownerDetails);
    }
  }

  function handleBack() {
    navigate(PATHS.personal);
  }

  return (
    <OnboardingLayout
      step={2}
      total={3}
      onBack={handleBack}
    >
      <StepHeader
        eyebrow="STEP 02"
        title="How will you use the platform?"
        description="Choose the section that best matches your purpose. Your choice will shape the experience you see next."
      />

      <div className="section-selection-grid">
        {PLATFORM_SECTIONS.map((section) => (
          <OptionCard
            key={section.id}
            icon={section.icon}
            title={section.title}
            description={section.description}
            selected={
              selectedSection === section.id
            }
            onClick={() =>
              handleSectionChange(section.id)
            }
          />
        ))}
      </div>

      {selectedSection === "owner" && (
        <div className="owner-selection-panel">
          <div className="dynamic-section-heading">
            <span>OWNER / PROVIDER</span>

            <h3>
              What would you like to list?
            </h3>

            <p>
              Each listing type will have its own
              fields, verification flow, and management
              section.
            </p>
          </div>

          <div className="owner-listing-grid">
            {OWNER_LISTING_TYPES.map(
              (listingType) => {
                const selected =
                  selectedOwnerType ===
                  listingType.id;

                return (
                  <button
                    key={listingType.id}
                    type="button"
                    className={`owner-listing-card ${
                      selected ? "selected" : ""
                    }`}
                    onClick={() =>
                      handleOwnerTypeChange(
                        listingType.id
                      )
                    }
                  >
                    <div className="owner-card-icon">
                      <listingType.icon
                        size={20}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="owner-card-copy">
                      <strong>
                        {listingType.title}
                      </strong>

                      <span>
                        {listingType.description}
                      </span>
                    </div>

                    <div className="owner-card-radio">
                      <span />
                    </div>
                  </button>
                );
              }
            )}
          </div>
        </div>
      )}

      {selectedSection &&
        selectedSection !== "owner" && (
          <div className="role-note">
            <div className="role-note-icon">
              <Check size={17} />
            </div>

            <div>
              <strong>
                Personalised section selected
              </strong>

              <span>
                Your next screen will contain only
                questions relevant to your selected
                section.
              </span>
            </div>
          </div>
        )}

      {selectedSection === "owner" &&
        selectedOwnerType && (
          <div className="role-note">
            <div className="role-note-icon">
              <Check size={17} />
            </div>

            <div>
              <strong>
                Listing type selected
              </strong>

              <span>
                Your owner flow will continue with
                fields specific to{" "}
                {getOwnerLabel(selectedOwnerType)}.
              </span>
            </div>
          </div>
        )}

      {error && (
        <div className="form-alert">
          {error}
        </div>
      )}

      <div className="form-actions">
        <button
          type="button"
          className="primary-button"
          onClick={handleContinue}
        >
          <span>Continue</span>

          <ArrowRight size={18} />
        </button>
      </div>
    </OnboardingLayout>
  );
}

function getOwnerLabel(listingType) {
  const found = OWNER_LISTING_TYPES.find(
    (item) => item.id === listingType
  );

  return found?.title || "your selected listing";
}