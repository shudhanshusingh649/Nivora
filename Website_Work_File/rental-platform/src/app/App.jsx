import React from "react";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import {
  PATHS,
} from "./routes";

/* =========================================================
   AUTHENTICATION
========================================================= */

import LoginPage
  from "../features/authentication/pages/LoginPage";

/* =========================================================
   ONBOARDING
========================================================= */

import LandingPage
  from "../features/onboarding/pages/LandingPage";

import PersonalInfoPage
  from "../features/onboarding/pages/PersonalInfoPage";

import ProfessionPage
  from "../features/onboarding/pages/ProfessionPage";

/* =========================================================
   STUDENT
========================================================= */

import StudentDetailsPage
  from "../features/student/pages/StudentDetailsPage";

import StudentDashboard
  from "../features/student/pages/StudentDashboard";

/* =========================================================
   BACHELOR
========================================================= */

import BachelorDetailsPage
  from "../features/bachelor/pages/BachelorDetailsPage";

import BachelorDashboard
  from "../features/bachelor/pages/BachelorDashboard";

/* =========================================================
   FAMILY
========================================================= */

import FamilyDetailsPage
  from "../features/family/pages/FamilyDetailsPage";

import FamilyDashboard
  from "../features/family/pages/FamilyDashboard";

/* =========================================================
   OWNER
========================================================= */

import OwnerAppOnlyPage
  from "../features/owner/pages/OwnerAppOnlyPage";

/* =========================================================
   EXPLORE
========================================================= */

import ExplorePage
  from "../features/explore/pages/ExplorePage";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =====================================================
            LANDING
        ===================================================== */}

        <Route
          path={PATHS.home}
          element={<LandingPage />}
        />

        {/* =====================================================
            LOGIN
        ===================================================== */}

        <Route
          path={PATHS.login}
          element={<LoginPage />}
        />

        {/* =====================================================
            PERSONAL INFORMATION
        ===================================================== */}

        <Route
          path={PATHS.personal}
          element={<PersonalInfoPage />}
        />

        {/* =====================================================
            PROFESSION / MAIN SECTION
        ===================================================== */}

        <Route
          path={PATHS.profession}
          element={<ProfessionPage />}
        />

        {/* =====================================================
            STUDENT
        ===================================================== */}

        <Route
          path={PATHS.studentDetails}
          element={<StudentDetailsPage />}
        />

        <Route
          path={PATHS.studentDashboard}
          element={<StudentDashboard />}
        />

        {/* =====================================================
            BACHELOR
        ===================================================== */}

        <Route
          path={PATHS.bachelorDetails}
          element={<BachelorDetailsPage />}
        />

        <Route
          path={PATHS.bachelorDashboard}
          element={<BachelorDashboard />}
        />

        {/* =====================================================
            FAMILY
        ===================================================== */}

        <Route
          path={PATHS.familyDetails}
          element={<FamilyDetailsPage />}
        />

        <Route
          path={PATHS.familyDashboard}
          element={<FamilyDashboard />}
        />

        {/* =====================================================
            OWNER — WEBSITE APP GATE
        ===================================================== */}

        <Route
          path={PATHS.ownerAppOnly}
          element={<OwnerAppOnlyPage />}
        />

        {/* =====================================================
            EXPLORE
        ===================================================== */}

        <Route
          path={PATHS.explore}
          element={<ExplorePage />}
        />

        {/* =====================================================
            FALLBACK
        ===================================================== */}

        <Route
          path="*"
          element={<LandingPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}