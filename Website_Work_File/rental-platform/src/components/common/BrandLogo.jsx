import React from "react";

export default function BrandLogo({
  compact = false,
  className = "",
}) {
  return (
    <div
      className={[
        "zeevo-brand",
        compact ? "zeevo-brand-compact" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src="/zeevo-logo.png"
        alt="ZEEVO — Find. Verify. Live."
        className="zeevo-brand-image"
        draggable="false"
      />
    </div>
  );
}