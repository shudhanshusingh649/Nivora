import React from "react";

export default function ProgressBar({
  step,
  total = 4,
}) {
  const progress = (step / total) * 100;

  return (
    <div className="progress-wrapper">
      <div className="progress-meta">
        <span>Profile setup</span>

        <span>
          {step} / {total}
        </span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}