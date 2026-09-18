import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { APP_CONFIG } from "./app.config";
import { PATHS } from "./routes";

/*
|--------------------------------------------------------------------------
| Onboarding
|--------------------------------------------------------------------------
*/

import LandingPage from "../features/onboarding/pages/LandingPage";
import PersonalInfoPage from "../features/onboarding/pages/PersonalInfoPage";
import ProfessionPage from "../features/onboarding/pages/ProfessionPage";

/*
|--------------------------------------------------------------------------
| Student
|--------------------------------------------------------------------------
*/

import StudentDetailsPage from "../features/student/pages/StudentDetailsPage";
import StudentDashboard from "../features/student/pages/StudentDashboard";

/*
|--------------------------------------------------------------------------
| Bachelor
|--------------------------------------------------------------------------
*/

import BachelorDetailsPage from "../features/bachelor/pages/BachelorDetailsPage";
import BachelorDashboard from "../features/bachelor/pages/BachelorDashboard";

/*
|--------------------------------------------------------------------------
| Family
|--------------------------------------------------------------------------
*/

import FamilyDetailsPage from "../features/family/pages/FamilyDetailsPage";
import FamilyDashboard from "../features/family/pages/FamilyDashboard";

/*
|--------------------------------------------------------------------------
| Owner
|--------------------------------------------------------------------------
*/

import OwnerDetailsPage from "../features/owner/pages/OwnerDetailsPage";
import OwnerDashboard from "../features/owner/pages/OwnerDashboard";

/*
|--------------------------------------------------------------------------
| Explore
|--------------------------------------------------------------------------
*/

import ExplorePage from "../features/explore/pages/ExplorePage";

export default function App() {
  useEffect(() => {
    document.title = `${APP_CONFIG.name} — ${APP_CONFIG.tagline}`;
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* =========================================================
            LANDING
        ========================================================= */}

        <Route
          path={PATHS.home}
          element={<LandingPage />}
        />

        {/* =========================================================
            ONBOARDING
        ========================================================= */}

        <Route
          path={PATHS.personal}
          element={<PersonalInfoPage />}
        />

        <Route
          path={PATHS.profession}
          element={<ProfessionPage />}
        />

        {/* =========================================================
            STUDENT
        ========================================================= */}

        <Route
          path={PATHS.studentDetails}
          element={<StudentDetailsPage />}
        />

        <Route
          path={PATHS.studentDashboard}
          element={<StudentDashboard />}
        />

        {/* =========================================================
            BACHELOR
        ========================================================= */}

        <Route
          path={PATHS.bachelorDetails}
          element={<BachelorDetailsPage />}
        />

        <Route
          path={PATHS.bachelorDashboard}
          element={<BachelorDashboard />}
        />

        {/* =========================================================
            FAMILY
        ========================================================= */}

        <Route
          path={PATHS.familyDetails}
          element={<FamilyDetailsPage />}
        />

        <Route
          path={PATHS.familyDashboard}
          element={<FamilyDashboard />}
        />

        {/* =========================================================
            OWNER
        ========================================================= */}

        <Route
          path={PATHS.ownerDetails}
          element={<OwnerDetailsPage />}
        />

        <Route
          path={PATHS.ownerDashboard}
          element={<OwnerDashboard />}
        />

        {/* =========================================================
            EXPLORE
        ========================================================= */}

        <Route
          path={PATHS.explore}
          element={<ExplorePage />}
        />

        {/* =========================================================
            FALLBACK
        ========================================================= */}

        <Route
          path="*"
          element={<LandingPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}