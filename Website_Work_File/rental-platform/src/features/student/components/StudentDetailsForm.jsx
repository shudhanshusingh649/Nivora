import React from "react";

import {
  STUDENT_STUDY_TYPES,
} from "../student.config";

import FormField from "../../../components/forms/FormField";

export default function StudentDetailsForm({
  form,
  onChange,
  onStudyTypeChange,
}) {
  const studyType = form.studyType;

  return (
    <div className="student-details-form">
      <div className="student-type-section">
        <div className="student-section-heading">
          <span className="mini-eyebrow">
            YOUR STUDY SETUP
          </span>

          <h3>
            How are you currently studying?
          </h3>

          <p>
            Choose the option that best matches your
            current learning journey.
          </p>
        </div>

        <div className="study-type-grid">
          {STUDENT_STUDY_TYPES.map((type) => {
            const selected =
              studyType === type.id;

            return (
              <button
                key={type.id}
                type="button"
                className={`study-type-card ${
                  selected ? "selected" : ""
                }`}
                onClick={() =>
                  onStudyTypeChange(type.id)
                }
              >
                <div className="study-type-indicator">
                  <span />
                </div>

                <div className="study-type-content">
                  <strong>{type.title}</strong>

                  <span>
                    {type.description}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {!studyType && (
        <div className="study-empty-state">
          Select your study setup to continue.
        </div>
      )}

      {studyType === "college" && (
        <div className="dynamic-form-section">
          <div className="dynamic-section-heading">
            <span>COLLEGE / UNIVERSITY</span>

            <p>
              Tell us about your current academic
              setup.
            </p>
          </div>

          <div className="form-grid two-columns">
            <FormField
              label="College / University"
              name="institutionName"
              value={form.institutionName}
              onChange={onChange}
              placeholder="e.g. IIT Patna"
              required
            />

            <FormField
              label="Course / Program"
              name="course"
              value={form.course}
              onChange={onChange}
              placeholder="e.g. B.Sc. Computer Science"
              required
            />

            <div className="form-field">
              <label htmlFor="studyYear">
                Current year
                <span className="required-mark">
                  *
                </span>
              </label>

              <select
                id="studyYear"
                name="studyYear"
                value={form.studyYear}
                onChange={onChange}
              >
                <option value="">
                  Select year
                </option>

                <option value="1">
                  1st Year
                </option>

                <option value="2">
                  2nd Year
                </option>

                <option value="3">
                  3rd Year
                </option>

                <option value="4">
                  4th Year
                </option>

                <option value="other">
                  Other
                </option>
              </select>
            </div>

            <FormField
              label="Preferred city"
              name="preferredCity"
              value={form.preferredCity}
              onChange={onChange}
              placeholder="Where do you want to live?"
              required
            />

            <div className="form-field">
              <label htmlFor="moveTimeline">
                When are you planning to move?
              </label>

              <select
                id="moveTimeline"
                name="moveTimeline"
                value={form.moveTimeline}
                onChange={onChange}
              >
                <option value="">
                  Select timeline
                </option>

                <option value="immediately">
                  Immediately
                </option>

                <option value="within-30-days">
                  Within 30 days
                </option>

                <option value="1-3-months">
                  1–3 months
                </option>

                <option value="3-plus-months">
                  3+ months
                </option>

                <option value="just-exploring">
                  Just exploring
                </option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="roomPreference">
                Preferred living type
              </label>

              <select
                id="roomPreference"
                name="roomPreference"
                value={form.roomPreference}
                onChange={onChange}
              >
                <option value="">
                  Select preference
                </option>

                <option value="single">
                  Single Room
                </option>

                <option value="shared">
                  Shared Room
                </option>

                <option value="either">
                  Either
                </option>
              </select>
            </div>
          </div>
        </div>
      )}

      {studyType === "self-study" && (
        <div className="dynamic-form-section">
          <div className="dynamic-section-heading">
            <span>SELF STUDY / EXAM PREPARATION</span>

            <p>
              We will use this information later to
              personalise your nearby living needs.
            </p>
          </div>

          <div className="form-grid two-columns">
            <FormField
              label="Exam / Study Goal"
              name="studyGoal"
              value={form.studyGoal}
              onChange={onChange}
              placeholder="e.g. UPSC, GATE, SSC CGL"
              required
            />

            <FormField
              label="Study Location"
              name="studyLocation"
              value={form.studyLocation}
              onChange={onChange}
              placeholder="e.g. Patna"
              required
            />

            <FormField
              label="Preferred city"
              name="preferredCity"
              value={form.preferredCity}
              onChange={onChange}
              placeholder="Where do you want to live?"
              required
            />

            <div className="form-field">
              <label htmlFor="libraryPreference">
                Library preference
              </label>

              <select
                id="libraryPreference"
                name="libraryPreference"
                value={form.libraryPreference}
                onChange={onChange}
              >
                <option value="">
                  Select preference
                </option>

                <option value="essential">
                  Very Important
                </option>

                <option value="preferred">
                  Preferred
                </option>

                <option value="not-important">
                  Not Important
                </option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="roomPreference">
                Preferred living type
              </label>

              <select
                id="roomPreference"
                name="roomPreference"
                value={form.roomPreference}
                onChange={onChange}
              >
                <option value="">
                  Select preference
                </option>

                <option value="single">
                  Single Room
                </option>

                <option value="shared">
                  Shared Room
                </option>

                <option value="either">
                  Either
                </option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="moveTimeline">
                Move timeline
              </label>

              <select
                id="moveTimeline"
                name="moveTimeline"
                value={form.moveTimeline}
                onChange={onChange}
              >
                <option value="">
                  Select timeline
                </option>

                <option value="immediately">
                  Immediately
                </option>

                <option value="within-30-days">
                  Within 30 days
                </option>

                <option value="1-3-months">
                  1–3 months
                </option>

                <option value="3-plus-months">
                  3+ months
                </option>
              </select>
            </div>
          </div>
        </div>
      )}

      {studyType === "coaching" && (
        <div className="dynamic-form-section">
          <div className="dynamic-section-heading">
            <span>COACHING / INSTITUTE</span>

            <p>
              Add your coaching and preparation details.
            </p>
          </div>

          <div className="form-grid two-columns">
            <FormField
              label="Coaching / Institute"
              name="institutionName"
              value={form.institutionName}
              onChange={onChange}
              placeholder="e.g. Career Point"
              required
            />

            <FormField
              label="Exam / Course"
              name="studyGoal"
              value={form.studyGoal}
              onChange={onChange}
              placeholder="e.g. JEE, NEET, UPSC"
              required
            />

            <FormField
              label="Batch / Program"
              name="batch"
              value={form.batch}
              onChange={onChange}
              placeholder="e.g. Morning Batch"
            />

            <FormField
              label="Preferred city"
              name="preferredCity"
              value={form.preferredCity}
              onChange={onChange}
              placeholder="Where do you want to live?"
              required
            />

            <div className="form-field">
              <label htmlFor="roomPreference">
                Preferred living type
              </label>

              <select
                id="roomPreference"
                name="roomPreference"
                value={form.roomPreference}
                onChange={onChange}
              >
                <option value="">
                  Select preference
                </option>

                <option value="single">
                  Single Room
                </option>

                <option value="shared">
                  Shared Room
                </option>

                <option value="either">
                  Either
                </option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="moveTimeline">
                Move timeline
              </label>

              <select
                id="moveTimeline"
                name="moveTimeline"
                value={form.moveTimeline}
                onChange={onChange}
              >
                <option value="">
                  Select timeline
                </option>

                <option value="immediately">
                  Immediately
                </option>

                <option value="within-30-days">
                  Within 30 days
                </option>

                <option value="1-3-months">
                  1–3 months
                </option>
              </select>
            </div>
          </div>
        </div>
      )}

      {studyType === "other" && (
        <div className="dynamic-form-section">
          <div className="dynamic-section-heading">
            <span>OTHER LEARNING</span>

            <p>
              Tell us about your current learning situation.
            </p>
          </div>

          <div className="form-grid two-columns">
            <FormField
              label="What are you studying?"
              name="studyGoal"
              value={form.studyGoal}
              onChange={onChange}
              placeholder="Describe your study or learning goal"
              required
            />

            <FormField
              label="Preferred city"
              name="preferredCity"
              value={form.preferredCity}
              onChange={onChange}
              placeholder="Where do you want to live?"
              required
            />

            <div className="form-field">
              <label htmlFor="roomPreference">
                Preferred living type
              </label>

              <select
                id="roomPreference"
                name="roomPreference"
                value={form.roomPreference}
                onChange={onChange}
              >
                <option value="">
                  Select preference
                </option>

                <option value="single">
                  Single Room
                </option>

                <option value="shared">
                  Shared Room
                </option>

                <option value="either">
                  Either
                </option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="moveTimeline">
                Move timeline
              </label>

              <select
                id="moveTimeline"
                name="moveTimeline"
                value={form.moveTimeline}
                onChange={onChange}
              >
                <option value="">
                  Select timeline
                </option>

                <option value="immediately">
                  Immediately
                </option>

                <option value="within-30-days">
                  Within 30 days
                </option>

                <option value="1-3-months">
                  1–3 months
                </option>

                <option value="just-exploring">
                  Just exploring
                </option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}