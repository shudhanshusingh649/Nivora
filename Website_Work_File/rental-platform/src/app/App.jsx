import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { APP_CONFIG } from "./app.config";
import { PATHS } from "./routes";

import LandingPage from "../features/onboarding/pages/LandingPage";
import PersonalInfoPage from "../features/onboarding/pages/PersonalInfoPage";
import ProfessionPage from "../features/onboarding/pages/ProfessionPage";

import StudentDetailsPage from "../features/student/pages/StudentDetailsPage";
import BachelorDetailsPage from "../features/bachelor/pages/BachelorDetailsPage";
import FamilyDetailsPage from "../features/family/pages/FamilyDetailsPage";

import StudentDashboard from "../features/student/pages/StudentDashboard";
import BachelorDashboard from "../features/bachelor/pages/BachelorDashboard";
import FamilyDashboard from "../features/family/pages/FamilyDashboard";

import OwnerDetailsPage from "../features/owner/pages/OwnerDetailsPage";
import OwnerDashboard from "../features/owner/pages/OwnerDashboard";

export default function App() {
  useEffect(() => {
    document.title = `${APP_CONFIG.name} — ${APP_CONFIG.tagline}`;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PATHS.home}
          element={<LandingPage />}
        />

        <Route
          path={PATHS.personal}
          element={<PersonalInfoPage />}
        />

        <Route
          path={PATHS.profession}
          element={<ProfessionPage />}
        />

        <Route
          path={PATHS.studentDetails}
          element={<StudentDetailsPage />}
        />

        <Route
          path={PATHS.bachelorDetails}
          element={<BachelorDetailsPage />}
        />

        <Route
          path={PATHS.familyDetails}
          element={<FamilyDetailsPage />}
        />

        <Route
          path={PATHS.ownerDetails}
          element={<OwnerDetailsPage />}
        />

        <Route
          path={PATHS.studentDashboard}
          element={<StudentDashboard />}
        />

        <Route
          path={PATHS.bachelorDashboard}
          element={<BachelorDashboard />}
        />

        <Route
          path={PATHS.familyDashboard}
          element={<FamilyDashboard />}
        />

        <Route
          path={PATHS.ownerDashboard}
          element={<OwnerDashboard />}
        />

        <Route
          path="*"
          element={<LandingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}