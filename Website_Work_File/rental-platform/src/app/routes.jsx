export const PATHS = {
  /* =======================================================
     MAIN
  ======================================================= */

  home: "/",

  login: "/login",

  /* =======================================================
     ONBOARDING
  ======================================================= */

  personal:
    "/onboarding/personal",

  profession:
    "/onboarding/profession",

  studentDetails:
    "/onboarding/student",

  bachelorDetails:
    "/onboarding/bachelor",

  familyDetails:
    "/onboarding/family",

  /* =======================================================
     OWNER
  ======================================================= */

  ownerAppOnly:
    "/owner/app-only",

  ownerDashboard:
    "/dashboard/owner",

  /* =======================================================
     DASHBOARDS
  ======================================================= */

  studentDashboard:
    "/dashboard/student",

  bachelorDashboard:
    "/dashboard/bachelor",

  familyDashboard:
    "/dashboard/family",

  /* =======================================================
     EXPLORE
  ======================================================= */

  explore:
    "/explore",
};

export const ROLE_DASHBOARD_PATHS = {
  student:
    PATHS.studentDashboard,

  bachelor:
    PATHS.bachelorDashboard,

  family:
    PATHS.familyDashboard,

  owner:
    PATHS.ownerAppOnly,
};