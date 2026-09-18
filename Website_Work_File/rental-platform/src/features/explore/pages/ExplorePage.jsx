import React, { useMemo, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Filter,
  RotateCcw,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import BrandLogo from "../../../components/common/BrandLogo";

import {
  getUserProfile,
} from "../../authentication/auth.utils";

import {
  getStudentCategory,
} from "../explore.config";

import { PATHS } from "../../../app/routes";

export default function ExplorePage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const categoryId =
    searchParams.get("category") || "hostel";

  const category =
    getStudentCategory(categoryId);

  const profile = getUserProfile();

  const [filters, setFilters] = useState(
    {}
  );

  const [showFilters, setShowFilters] =
    useState(false);

  const [submittedFilters, setSubmittedFilters] =
    useState({});

  const Icon = category.icon;

  const activeFilterCount = useMemo(() => {
    return Object.values(filters).filter(
      (value) =>
        value !== undefined &&
        value !== null &&
        value !== ""
    ).length;
  }, [filters]);

  function handleFilterChange(id, value) {
    setFilters((current) => ({
      ...current,
      [id]: value,
    }));
  }

  function handleApply() {
    setSubmittedFilters(filters);
    setShowFilters(false);
  }

  function handleReset() {
    setFilters({});
    setSubmittedFilters({});
  }

  function handleBack() {
    if (profile?.role === "student") {
      navigate(PATHS.studentDashboard);
      return;
    }

    navigate(PATHS.home);
  }

  return (
    <div className="explore-page">
      <header className="explore-header">
        <div className="explore-header-inner">
          <BrandLogo />

          <button
            type="button"
            className="explore-back-button"
            onClick={handleBack}
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
        </div>
      </header>

      <main className="explore-content">
        <section className="explore-hero">
          <div className="explore-hero-icon">
            <Icon size={26} />
          </div>

          <div className="explore-hero-copy">
            <span className="explore-eyebrow">
              STUDENT DISCOVERY
            </span>

            <h1>
              Find your {category.title.toLowerCase()}.
            </h1>

            <p>
              {category.subtitle}
            </p>
          </div>
        </section>

        <section className="smart-search-card">
          <div className="smart-search-top">
            <div>
              <span className="section-eyebrow">
                SMART SEARCH
              </span>

              <h2>
                Tell us what you need.
              </h2>

              <p>
                Your preferences help narrow down
                relevant options instead of showing
                everything together.
              </p>
            </div>

            <button
              type="button"
              className="filter-toggle-button"
              onClick={() =>
                setShowFilters(
                  (current) => !current
                )
              }
            >
              <SlidersHorizontal size={17} />

              <span>
                Filters
              </span>

              {activeFilterCount > 0 && (
                <b>
                  {activeFilterCount}
                </b>
              )}
            </button>
          </div>

          <div className="filter-summary-row">
            {submittedFilters.location && (
              <FilterChip
                label={`Location: ${submittedFilters.location}`}
              />
            )}

            {submittedFilters.budget && (
              <FilterChip
                label={`Up to ₹${submittedFilters.budget}`}
              />
            )}

            {activeFilterCount === 0 && (
              <span className="filter-summary-empty">
                No preferences applied yet.
              </span>
            )}
          </div>

          <div
            className={`smart-search-body ${
              showFilters ? "open" : ""
            }`}
          >
            <div className="filter-grid">
              {category.filters.map(
                (filter) => (
                  <FilterField
                    key={filter.id}
                    filter={filter}
                    value={filters[filter.id] || ""}
                    onChange={
                      handleFilterChange
                    }
                  />
                )
              )}
            </div>

            <div className="filter-actions">
              <button
                type="button"
                className="reset-button"
                onClick={handleReset}
              >
                <RotateCcw size={16} />
                Reset
              </button>

              <button
                type="button"
                className="primary-button"
                onClick={handleApply}
              >
                <Search size={17} />
                <span>
                  Show Matching Options
                </span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        <section className="results-section">
          <div className="results-header">
            <div>
              <span className="section-eyebrow">
                DISCOVER
              </span>

              <h2>
                {submittedFilters.location ||
                  "Options around you"}
              </h2>
            </div>

            <span className="result-count">
              Based on your preferences
            </span>
          </div>

          <div className="results-empty">
            <div className="results-empty-icon">
              <Check size={22} />
            </div>

            <h3>
              Your search is ready.
            </h3>

            <p>
              Real listings will appear here once
              the listing database and backend are
              connected. The current screen is the
              reusable discovery layer for this
              category.
            </p>

            <div className="results-info">
              <Filter size={15} />

              <span>
                {activeFilterCount > 0
                  ? `${activeFilterCount} preferences selected`
                  : "Add location, budget, and filters to refine your search"}
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FilterField({
  filter,
  value,
  onChange,
}) {
  if (filter.type === "text") {
    return (
      <div className="explore-field">
        <label htmlFor={filter.id}>
          {filter.label}
        </label>

        <div className="field-with-prefix">
          {filter.prefix && (
            <span>
              {filter.prefix}
            </span>
          )}

          <input
            id={filter.id}
            type="text"
            value={value}
            onChange={(event) =>
              onChange(
                filter.id,
                event.target.value
              )
            }
            placeholder={filter.placeholder}
          />
        </div>
      </div>
    );
  }

  if (filter.type === "number") {
    return (
      <div className="explore-field">
        <label htmlFor={filter.id}>
          {filter.label}
        </label>

        <div className="field-with-prefix">
          {filter.prefix && (
            <span>
              {filter.prefix}
            </span>
          )}

          <input
            id={filter.id}
            type="number"
            min="0"
            value={value}
            onChange={(event) =>
              onChange(
                filter.id,
                event.target.value
              )
            }
            placeholder={filter.placeholder}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="explore-field">
      <label htmlFor={filter.id}>
        {filter.label}
      </label>

      <select
        id={filter.id}
        value={value}
        onChange={(event) =>
          onChange(
            filter.id,
            event.target.value
          )
        }
      >
        <option value="">
          Select preference
        </option>

        {filter.options.map(
          (option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          )
        )}
      </select>
    </div>
  );
}

function FilterChip({ label }) {
  return (
    <div className="filter-chip">
      <span>{label}</span>
    </div>
  );
}