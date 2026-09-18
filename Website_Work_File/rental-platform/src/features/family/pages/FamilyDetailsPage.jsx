import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "../../../components/layout/OnboardingLayout";
import StepHeader from "../../../components/common/StepHeader";

import FamilyDetailsForm from "../components/FamilyDetailsForm";

import { PATHS } from "../../../app/routes";

import {
  getOnboardingDraft,
  saveOnboardingDraft,
  completeUserProfile,
} from "../../authentication/auth.utils";

const defaultForm = {
  familySize: "",
  preferredCity: "",
  propertyType: "",
  moveTimeline: "",
  furnishedType: "",
  parking: "",
};

export default function FamilyDetailsPage() {
  const navigate = useNavigate();

  const savedDraft = getOnboardingDraft();

  const [form, setForm] = useState(
    savedDraft.roleDetails || defaultForm
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

  function handleFinish() {
    if (!form.familySize) {
      setError("Please enter your family size.");
      return;
    }

    if (!form.preferredCity.trim()) {
      setError("Please enter your preferred city.");
      return;
    }

    saveOnboardingDraft({
      ...savedDraft,
      role: "family",
      roleDetails: form,
    });

    completeUserProfile({
      ...savedDraft,
      role: "family",
      roleDetails: form,
    });

    navigate(PATHS.familyDashboard);
  }

  return (
    <OnboardingLayout
      step={4}
      onBack={() => navigate(PATHS.role)}
    >
      <StepHeader
        eyebrow="STEP 04"
        title="Let's understand your family needs."
        description="Tell us a little about the kind of home you are looking for."
      />

      <FamilyDetailsForm
        form={form}
        onChange={handleChange}
      />

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