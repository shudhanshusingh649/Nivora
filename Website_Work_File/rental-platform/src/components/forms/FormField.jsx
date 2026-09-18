import React from "react";

export default function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  min,
  max,
  error,
  autoComplete = "off",
}) {
  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}

        {required && (
          <span className="required-mark">
            *
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        autoComplete={autoComplete}
        className={error ? "input-error" : ""}
      />

      {error && (
        <span className="field-error">
          {error}
        </span>
      )}
    </div>
  );
}