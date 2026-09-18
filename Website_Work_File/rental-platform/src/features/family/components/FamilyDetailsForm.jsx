import FormField from "../../../components/forms/FormField";

export default function FamilyDetailsForm({
  form,
  onChange,
}) {
  return (
    <div className="form-grid two-columns">
      <FormField
        label="Family size"
        name="familySize"
        type="number"
        value={form.familySize}
        onChange={onChange}
        placeholder="Number of family members"
        min="1"
        max="20"
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
        <label htmlFor="propertyType">
          Preferred property
        </label>

        <select
          id="propertyType"
          name="propertyType"
          value={form.propertyType}
          onChange={onChange}
        >
          <option value="">Select property</option>
          <option value="1-bhk">1 BHK</option>
          <option value="2-bhk">2 BHK</option>
          <option value="3-bhk">3 BHK</option>
          <option value="4-bhk-plus">
            4 BHK or larger
          </option>
          <option value="house">Independent House</option>
          <option value="either">Flexible</option>
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
        <label htmlFor="furnishedType">
          Furnishing
        </label>

        <select
          id="furnishedType"
          name="furnishedType"
          value={form.furnishedType}
          onChange={onChange}
        >
          <option value="">Select preference</option>
          <option value="unfurnished">Unfurnished</option>
          <option value="semi-furnished">
            Semi Furnished
          </option>
          <option value="fully-furnished">
            Fully Furnished
          </option>
          <option value="either">Either</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="parking">
          Parking
        </label>

        <select
          id="parking"
          name="parking"
          value={form.parking}
          onChange={onChange}
        >
          <option value="">Select preference</option>
          <option value="required">Required</option>
          <option value="preferred">Preferred</option>
          <option value="not-important">
            Not important
          </option>
        </select>
      </div>
    </div>
  );
}