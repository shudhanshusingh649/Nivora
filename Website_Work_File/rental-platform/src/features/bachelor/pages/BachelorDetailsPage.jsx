import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "../../../components/layout/OnboardingLayout";
import StepHeader from "../../../components/common/StepHeader";

import BachelorDetailsForm from "../components/BachelorDetailsForm";

import { PATHS } from "../../../app/routes";

import {
  getOnboardingDraft,
  saveOnboardingDraft,
  completeUserProfile,
} from "../../authentication/auth.utils";

const defaultForm = {
  workType: "",
  workLocation: "",
  preferredCity: "",
  moveTimeline: "",
  roomPreference: "",
  stayType: "",
};

export default function BachelorDetailsPage() {
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
    if (!form.workType.trim()) {
      setError("Please enter your profession or work.");
      return;
    }

    if (!form.preferredCity.trim()) {
      setError("Please enter your preferred city.");
      return;
    }

    saveOnboardingDraft({
      ...savedDraft,
      role: "bachelor",
      roleDetails: form,
    });

    completeUserProfile({
      ...savedDraft,
      role: "bachelor",
      roleDetails: form,
    });

    navigate(PATHS.bachelorDashboard);
  }

  return (
    <OnboardingLayout
      step={4}
      onBack={() => navigate(PATHS.role)}
    >
      <StepHeader
        eyebrow="STEP 04"
        title="Tell us about your lifestyle."
        description="A few details help us prepare a relevant experience for you."
      />

      <BachelorDetailsForm
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