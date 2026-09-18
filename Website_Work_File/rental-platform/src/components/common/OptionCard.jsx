import React from "react";

export default function OptionCard({
  icon: Icon,
  title,
  description,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`option-card ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="option-icon">
        {Icon && (
          <Icon
            size={22}
            strokeWidth={1.8}
          />
        )}
      </div>

      <div className="option-content">
        <strong>{title}</strong>

        <span>{description}</span>
      </div>

      <div className="option-radio" aria-hidden="true">
        <span />
      </div>
    </button>
  );
}