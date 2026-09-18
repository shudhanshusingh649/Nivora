import React from "react";

export default function StepHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="step-header">
      {eyebrow && (
        <span className="eyebrow">
          {eyebrow}
        </span>
      )}

      <h1>{title}</h1>

      {description && (
        <p className="step-description">
          {description}
        </p>
      )}
    </div>
  );
}