import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "../../../components/layout/OnboardingLayout";
import StepHeader from "../../../components/common/StepHeader";

import StudentDetailsForm from "../components/StudentDetailsForm";

import { PATHS } from "../../../app/routes";

import {
  getOnboardingDraft,
  saveOnboardingDraft,
  completeUserProfile,
} from "../../authentication/auth.utils";

const defaultForm = {
  studyType: "",

  institutionName: "",
  course: "",
  studyYear: "",

  studyGoal: "",
  studyLocation: "",
  batch: "",

  preferredCity: "",
  moveTimeline: "",
  roomPreference: "",
  libraryPreference: "",
};

export default function StudentDetailsPage() {
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

  function handleStudyTypeChange(type) {
    setForm((current) => ({
      ...defaultForm,
      studyType: type,
      preferredCity: current.preferredCity || "",
      moveTimeline: current.moveTimeline || "",
      roomPreference: current.roomPreference || "",
    }));

    setError("");
  }

  function validate() {
    if (!form.studyType) {
      return "Please select how you are currently studying.";
    }

    if (!form.preferredCity.trim()) {
      return "Please enter your preferred city.";
    }

    if (form.studyType === "college") {
      if (!form.institutionName.trim()) {
        return "Please enter your college or university.";
      }

      if (!form.course.trim()) {
        return "Please enter your course or program.";
      }

      if (!form.studyYear) {
        return "Please select your current year.";
      }
    }

    if (form.studyType === "self-study") {
      if (!form.studyGoal.trim()) {
        return "Please enter your exam or study goal.";
      }

      if (!form.studyLocation.trim()) {
        return "Please enter your study location.";
      }
    }

    if (form.studyType === "coaching") {
      if (!form.institutionName.trim()) {
        return "Please enter your coaching or institute name.";
      }

      if (!form.studyGoal.trim()) {
        return "Please enter your exam or course.";
      }
    }

    if (form.studyType === "other") {
      if (!form.studyGoal.trim()) {
        return "Please describe what you are studying.";
      }
    }

    return "";
  }

  function handleFinish() {
    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    const updatedProfile = {
      ...savedDraft,
      role: "student",
      roleDetails: form,
    };

    saveOnboardingDraft(updatedProfile);

    completeUserProfile(updatedProfile);

    navigate(PATHS.studentDashboard);
  }

  function handleBack() {
    navigate(PATHS.role);
  }

  return (
    <OnboardingLayout
      step={4}
      onBack={handleBack}
    >
      <StepHeader
        eyebrow="STEP 04"
        title="Tell us about your student life."
        description="Your study setup helps us personalise the living experience around you."
      />

      <StudentDetailsForm
        form={form}
        onChange={handleChange}
        onStudyTypeChange={handleStudyTypeChange}
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