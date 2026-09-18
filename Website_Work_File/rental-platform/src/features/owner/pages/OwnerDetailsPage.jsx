import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "../../../components/layout/OnboardingLayout";
import StepHeader from "../../../components/common/StepHeader";
import FormField from "../../../components/forms/FormField";

import {
  getOnboardingDraft,
  completeUserProfile,
} from "../../authentication/auth.utils";

import {
  OWNER_LISTING_TYPES,
  getOwnerListingLabel,
} from "../../onboarding/onboarding.config";

import { PATHS } from "../../../app/routes";

const initialForm = {
  providerName: "",
  businessName: "",
  city: "",
  contactPreference: "",
};

export default function OwnerDetailsPage() {
  const navigate = useNavigate();

  const savedDraft = getOnboardingDraft();

  const [form, setForm] = useState(
    savedDraft.roleDetails || initialForm
  );

  const [error, setError] = useState("");

  const listingType =
    savedDraft.ownerListingType || "";

  const listingLabel =
    getOwnerListingLabel(listingType);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  }

  function validate() {
    if (!listingType) {
      return "Please select a listing type.";
    }

    if (!form.providerName.trim()) {
      return "Please enter your name.";
    }

    if (!form.city.trim()) {
      return "Please enter the city.";
    }

    if (!form.contactPreference) {
      return "Please select a contact preference.";
    }

    return "";
  }

  function handleFinish() {
    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    const profile = {
      ...savedDraft,
      role: "owner",
      ownerListingType: listingType,
      roleDetails: form,
    };

    completeUserProfile(profile);

    navigate(PATHS.ownerDashboard);
  }

  function handleBack() {
    navigate(PATHS.profession);
  }

  return (
    <OnboardingLayout
      step={3}
      total={3}
      onBack={handleBack}
    >
      <StepHeader
        eyebrow="STEP 03"
        title="Let's set up your provider profile."
        description={`You selected ${listingLabel}. Detailed listing information and verification will be collected in the dedicated listing flow.`}
      />

      <div className="selected-owner-summary">
        <span>SELECTED LISTING TYPE</span>

        <strong>
          {listingLabel}
        </strong>
      </div>

      <div className="form-grid two-columns">
        <FormField
          label="Your name"
          name="providerName"
          value={form.providerName}
          onChange={handleChange}
          placeholder="Owner / provider name"
          required
        />

        <FormField
          label="Business / property name"
          name="businessName"
          value={form.businessName}
          onChange={handleChange}
          placeholder="Optional"
        />

        <FormField
          label="City"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="e.g. Patna"
          required
        />

        <div className="form-field">
          <label htmlFor="contactPreference">
            Preferred contact
            <span className="required-mark">*</span>
          </label>

          <select
            id="contactPreference"
            name="contactPreference"
            value={form.contactPreference}
            onChange={handleChange}
          >
            <option value="">
              Select preference
            </option>

            <option value="phone">
              Phone
            </option>

            <option value="whatsapp">
              WhatsApp
            </option>

            <option value="both">
              Phone + WhatsApp
            </option>
          </select>
        </div>
      </div>

      <div className="owner-flow-note">
        <strong>
          Your listing type stays separate.
        </strong>

        <span>
          {listingLabel} will have its own listing
          form, verification fields, media requirements,
          and future management section.
        </span>
      </div>

      {error && (
        <div className="form-alert">
          {error}
        </div>
      )}

      <div className="form-actions">
        <button
          type="button"
          className="primary-button"
          onClick={handleFinish}
        >
          <span>Complete Profile</span>

          <ArrowRight size={18} />
        </button>
      </div>
    </OnboardingLayout>
  );
}