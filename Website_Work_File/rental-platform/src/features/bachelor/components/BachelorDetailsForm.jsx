import FormField from "../../../components/forms/FormField";

export default function BachelorDetailsForm({
  form,
  onChange,
}) {
  return (
    <div className="form-grid two-columns">
      <FormField
        label="Profession / Work"
        name="workType"
        value={form.workType}
        onChange={onChange}
        placeholder="e.g. Software Developer"
        required
      />

      <FormField
        label="Work location"
        name="workLocation"
        value={form.workLocation}
        onChange={onChange}
        placeholder="e.g. Bengaluru"
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
        <label htmlFor="moveTimeline">
          Move timeline
        </label>

        <select
          id="moveTimeline"
          name="moveTimeline"
          value={form.moveTimeline}
          onChange={onChange}
        >
          <option value="">Select timeline</option>
          <option value="immediately">Immediately</option>
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
          <option value="">Select preference</option>
          <option value="single">Single Room</option>
          <option value="shared">Shared Room</option>
          <option value="either">Either</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="stayType">
          Living arrangement
        </label>

        <select
          id="stayType"
          name="stayType"
          value={form.stayType}
          onChange={onChange}
        >
          <option value="">Select preference</option>
          <option value="alone">Living alone</option>
          <option value="flatmate">With flatmate</option>
          <option value="either">Either</option>
        </select>
      </div>
    </div>
  );
}