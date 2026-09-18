export const PATHS = {
  home: "/",

  personal: "/onboarding/personal",

  /*
  |--------------------------------------------------------------------------
  | Main platform section selection
  |--------------------------------------------------------------------------
  */

  profession: "/onboarding/profession",

  /*
  |--------------------------------------------------------------------------
  | User details
  |--------------------------------------------------------------------------
  */

  studentDetails: "/onboarding/student",
  bachelorDetails: "/onboarding/bachelor",
  familyDetails: "/onboarding/family",

  /*
  |--------------------------------------------------------------------------
  | Owner flow
  |--------------------------------------------------------------------------
  */

  ownerDetails: "/onboarding/owner",

  /*
  |--------------------------------------------------------------------------
  | Dashboards
  |--------------------------------------------------------------------------
  */

  studentDashboard: "/dashboard/student",
  bachelorDashboard: "/dashboard/bachelor",
  familyDashboard: "/dashboard/family",
  ownerDashboard: "/dashboard/owner",
};

export const ROLE_DASHBOARD_PATHS = {
  student: PATHS.studentDashboard,
  bachelor: PATHS.bachelorDashboard,
  family: PATHS.familyDashboard,
  owner: PATHS.ownerDashboard,
};