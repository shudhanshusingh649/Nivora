import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "../../../components/layout/OnboardingLayout";
import StepHeader from "../../../components/common/StepHeader";
import FormField from "../../../components/forms/FormField";

import { PATHS } from "../../../app/routes";

import {
  getOnboardingDraft,
  saveOnboardingDraft,
} from "../../authentication/auth.utils";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  city: "",
};

export default function PersonalInfoPage() {
  const navigate = useNavigate();

  const savedDraft = getOnboardingDraft();

  const [form, setForm] = useState(
    savedDraft.personalInfo || initialForm
  );

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  }

  function validate() {
    if (!form.firstName.trim()) {
      return "Please enter your first name.";
    }

    if (!form.email.trim()) {
      return "Please enter your email address.";
    }

    if (!form.phone.trim()) {
      return "Please enter your phone number.";
    }

    if (!form.city.trim()) {
      return "Please enter your city.";
    }

    return "";
  }

  function handleContinue() {
    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    const currentDraft = getOnboardingDraft();

    saveOnboardingDraft({
      ...currentDraft,
      personalInfo: form,
    });

    navigate(PATHS.profession);
  }

  function handleBack() {
    navigate(PATHS.home);
  }

  return (
    <OnboardingLayout
      step={1}
      onBack={handleBack}
    >
      <StepHeader
        eyebrow="STEP 01"
        title="Let's get to know you."
        description="Start with a few basic details. You can update them later."
      />

      <div className="form-grid two-columns">
        <FormField
          label="First name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="Your first name"
          required
          autoComplete="given-name"
        />

        <FormField
          label="Last name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Your last name"
          autoComplete="family-name"
        />

        <FormField
          label="Email address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          autoComplete="email"
        />

        <FormField
          label="Phone number"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="10 digit mobile number"
          required
          autoComplete="tel"
        />

        <FormField
          label="Age"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          placeholder="Your age"
          min="13"
          max="100"
        />

        <div className="form-field">
          <label htmlFor="gender">
            Gender
          </label>

          <select
            id="gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">
              Select gender
            </option>

            <option value="male">
              Male
            </option>

            <option value="female">
              Female
            </option>

            <option value="prefer-not-to-say">
              Prefer not to say
            </option>
          </select>
        </div>

        <div className="form-field full-width">
          <label htmlFor="city">
            Current city
            <span className="required-mark">*</span>
          </label>

          <input
            id="city"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="e.g. Patna, Delhi, Pune"
            required
            autoComplete="address-level2"
          />
        </div>
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
          onClick={handleContinue}
        >
          <span>Continue</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </OnboardingLayout>
  );
}