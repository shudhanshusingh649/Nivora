import React, { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Smartphone,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import BrandLogo from "../../../components/common/BrandLogo";

import { PATHS } from "../../../app/routes";

export default function LoginPage() {
  const navigate = useNavigate();

  const [method, setMethod] = useState("email");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [phone, setPhone] = useState("");

  const [otpSent, setOtpSent] = useState(false);

  const [otp, setOtp] = useState("");

  const [error, setError] = useState("");

  function clearError() {
    setError("");
  }

  function handleEmailSubmit(event) {
    event.preventDefault();

    clearError();

    if (!email.trim()) {
      setError(
        "Please enter your email address."
      );
      return;
    }

    if (!password.trim()) {
      setError(
        "Please enter your password."
      );
      return;
    }

    /*
     * Temporary frontend navigation.
     * Real authentication will be connected
     * after the mobile app auth/backend stack
     * is confirmed.
     */

    navigate(PATHS.personal);
  }

  function handleSendOtp() {
    clearError();

    if (!phone.trim()) {
      setError(
        "Please enter your mobile number."
      );
      return;
    }

    setOtpSent(true);
  }

  function handleVerifyOtp(event) {
    event.preventDefault();

    clearError();

    if (!otp.trim()) {
      setError(
        "Please enter the OTP."
      );
      return;
    }

    /*
     * Temporary frontend navigation.
     */

    navigate(PATHS.personal);
  }

  function handleGoogleLogin() {
    clearError();

    /*
     * Temporary frontend navigation.
     * Real Google login will be connected later.
     */

    navigate(PATHS.personal);
  }

  function handleBack() {
    navigate(PATHS.home);
  }

  return (
    <main className="auth-page">
      <div className="auth-shell">

        {/* LEFT SIDE */}
        <section className="auth-showcase">
          <div className="auth-showcase-logo">
            <BrandLogo dark />
          </div>

          <div className="auth-showcase-content">
            <span className="auth-eyebrow">
              WELCOME TO NIVORA
            </span>

            <h1>
              Start with you.
              <br />
              <span>
                We’ll handle the rest.
              </span>
            </h1>

            <p>
              Sign in once and keep your profile,
              preferences, and living journey
              connected with Nivora.
            </p>

            <div className="auth-trust-list">

              <div>
                <span className="trust-check">
                  ✓
                </span>

                <span>
                  Personalised experience
                </span>
              </div>

              <div>
                <span className="trust-check">
                  ✓
                </span>

                <span>
                  Secure account access
                </span>
              </div>

              <div>
                <span className="trust-check">
                  ✓
                </span>

                <span>
                  One profile for your journey
                </span>
              </div>

            </div>
          </div>

          <div className="auth-showcase-footer">
            Find. Connect. Live.
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="auth-card-side">
          <div className="auth-card">

            <button
              type="button"
              className="auth-back-button"
              onClick={handleBack}
            >
              <ArrowLeft size={15} />

              <span>
                Back
              </span>
            </button>

            <div className="auth-card-heading">

              <span className="auth-mini-label">
                ACCOUNT ACCESS
              </span>

              <h2>
                Welcome back.
              </h2>

              <p>
                Sign in to continue your
                Nivora experience.
              </p>

            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="google-button"
              onClick={handleGoogleLogin}
            >
              <span className="google-mark">
                G
              </span>

              <span>
                Continue with Google
              </span>
            </button>

            <div className="auth-divider">
              <span />
              <small>OR</small>
              <span />
            </div>

            {/* METHOD SELECTOR */}
            <div className="auth-method-tabs">

              <button
                type="button"
                className={
                  method === "email"
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setMethod("email");
                  clearError();
                }}
              >
                <Mail size={16} />

                <span>
                  Email
                </span>
              </button>

              <button
                type="button"
                className={
                  method === "mobile"
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setMethod("mobile");
                  clearError();
                }}
              >
                <Smartphone size={16} />

                <span>
                  Mobile
                </span>
              </button>

            </div>

            {/* EMAIL LOGIN */}
            {method === "email" && (
              <form
                className="auth-form"
                onSubmit={handleEmailSubmit}
              >

                <label>
                  Email address

                  <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(
                        event.target.value
                      )
                    }
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>

                <label>
                  Password

                  <input
                    type="password"
                    value={password}
                    onChange={(event) =>
                      setPassword(
                        event.target.value
                      )
                    }
                    placeholder="Your password"
                    autoComplete="current-password"
                  />
                </label>

                <button
                  type="submit"
                  className="auth-primary-button"
                >
                  <span>
                    Continue
                  </span>

                  <ArrowRight size={17} />
                </button>

              </form>
            )}

            {/* MOBILE LOGIN */}
            {method === "mobile" && (
              <form
                className="auth-form"
                onSubmit={handleVerifyOtp}
              >

                <label>
                  Mobile number

                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(
                        event.target.value
                      )
                    }
                    placeholder="+91 9876543210"
                    autoComplete="tel"
                    disabled={otpSent}
                  />
                </label>

                {!otpSent && (
                  <button
                    type="button"
                    className="auth-primary-button"
                    onClick={handleSendOtp}
                  >
                    <span>
                      Send OTP
                    </span>

                    <ArrowRight size={17} />
                  </button>
                )}

                {otpSent && (
                  <>
                    <label>
                      Verification code

                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        value={otp}
                        onChange={(event) =>
                          setOtp(
                            event.target.value
                          )
                        }
                        placeholder="Enter OTP"
                        autoComplete="one-time-code"
                      />
                    </label>

                    <button
                      type="submit"
                      className="auth-primary-button"
                    >
                      <span>
                        Verify & Continue
                      </span>

                      <ArrowRight size={17} />
                    </button>
                  </>
                )}

              </form>
            )}

            {/* ERROR */}
            {error && (
              <div className="auth-alert error">
                {error}
              </div>
            )}

            <div className="auth-security-note">
              Your account will be connected
              with your Nivora profile.
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}