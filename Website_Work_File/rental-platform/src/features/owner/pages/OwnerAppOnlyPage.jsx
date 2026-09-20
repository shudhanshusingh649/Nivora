import React from "react";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Download,
  Smartphone,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import BrandLogo from "../../../components/common/BrandLogo";

import { PATHS } from "../../../app/routes";

const ANDROID_APP_URL =
  import.meta.env.VITE_ANDROID_APP_URL || "";

const IOS_APP_URL =
  import.meta.env.VITE_IOS_APP_URL || "";

export default function OwnerAppOnlyPage() {
  const navigate = useNavigate();

  const androidAvailable =
    Boolean(ANDROID_APP_URL);

  const iosAvailable =
    Boolean(IOS_APP_URL);

  return (
    <main className="owner-app-page">

      {/* HEADER */}
      <header className="owner-app-header">

        <BrandLogo />

        <button
          type="button"
          className="auth-back-button"
          onClick={() =>
            navigate(PATHS.home)
          }
        >
          <ArrowLeft size={15} />

          <span>
            Back
          </span>
        </button>

      </header>

      {/* MAIN CONTENT */}
      <section className="owner-app-main">

        <div className="owner-app-badge">
          <Building2 size={16} />

          OWNER / PROVIDER
        </div>

        <div className="owner-app-icon">
          <Smartphone size={27} />
        </div>

        <h1>
          Listing is available
          <br />

          <span>
            through the Nivora App.
          </span>
        </h1>

        <p className="owner-app-description">
          Owners and service providers need the
          Nivora mobile app to create and manage
          property and service listings.
        </p>

        {/* LISTING TYPES */}
        <div className="owner-app-reasons">

          <div>
            <CheckCircle2 size={17} />

            <span>
              PG & Hostel
            </span>
          </div>

          <div>
            <CheckCircle2 size={17} />

            <span>
              Rental Flat & Room
            </span>
          </div>

          <div>
            <CheckCircle2 size={17} />

            <span>
              Mess & Hotel
            </span>
          </div>

          <div>
            <CheckCircle2 size={17} />

            <span>
              Verification & listing management
            </span>
          </div>

        </div>

        {/* DOWNLOAD BUTTONS */}
        <div className="owner-download-grid">

          {/* ANDROID */}
          <a
            href={
              androidAvailable
                ? ANDROID_APP_URL
                : undefined
            }
            className={
              androidAvailable
                ? "download-card"
                : "download-card disabled"
            }
            target={
              androidAvailable
                ? "_blank"
                : undefined
            }
            rel="noreferrer"
          >
            <div className="download-card-icon">
              <Download size={19} />
            </div>

            <div>
              <small>
                DOWNLOAD ON
              </small>

              <strong>
                Android
              </strong>
            </div>

            <ArrowRight size={17} />
          </a>

          {/* IOS */}
          <a
            href={
              iosAvailable
                ? IOS_APP_URL
                : undefined
            }
            className={
              iosAvailable
                ? "download-card"
                : "download-card disabled"
            }
            target={
              iosAvailable
                ? "_blank"
                : undefined
            }
            rel="noreferrer"
          >
            <div className="download-card-icon">
              <Download size={19} />
            </div>

            <div>
              <small>
                DOWNLOAD ON
              </small>

              <strong>
                iPhone / iOS
              </strong>
            </div>

            <ArrowRight size={17} />
          </a>

        </div>

        {/* LINK NOTICE */}
        {!androidAvailable &&
          !iosAvailable && (
            <div className="owner-app-notice">
              App download links will be added
              here when the Nivora app is published.
            </div>
          )}

        {/* RETURN */}
        <button
          type="button"
          className="owner-app-secondary-button"
          onClick={() =>
            navigate(PATHS.home)
          }
        >
          Return to Nivora
        </button>

      </section>
    </main>
  );
}