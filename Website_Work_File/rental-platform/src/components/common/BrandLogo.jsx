import React from "react";
import { APP_CONFIG } from "../../app/app.config";

export default function BrandLogo({ dark = false }) {
  return (
    <div className={`brand-logo ${dark ? "brand-logo-dark" : ""}`}>
      <div className="brand-mark">
        {APP_CONFIG.shortName}
      </div>

      <div className="brand-copy">
        <span className="brand-name">
          {APP_CONFIG.name}
        </span>

        <span className="brand-tagline">
          {APP_CONFIG.footerText}
        </span>
      </div>
    </div>
  );
}