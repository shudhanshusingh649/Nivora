/* =========================================================
   ZEEVO APP CONFIGURATION
========================================================= */

export const APP_CONFIG = {
  /* -------------------------------------------------------
     BRAND
  ------------------------------------------------------- */

  name: "ZEEVO",

  shortName: "ZEEVO",

  tagline: "FIND. VERIFY. LIVE.",


  /* -------------------------------------------------------
     WEBSITE DESCRIPTION
  ------------------------------------------------------- */

  description:
    "ZEEVO is a modern living platform designed around your lifestyle, location, budget and everyday needs.",


  /* -------------------------------------------------------
     FOOTER
  ------------------------------------------------------- */

  footerText:
    "FIND. VERIFY. LIVE.",


  /* -------------------------------------------------------
     WEBSITE FLOW
  ------------------------------------------------------- */

  getStartedPath:
    "/onboarding/personal",


  /* -------------------------------------------------------
     MOBILE APP
     
     Temporary Google Play URL for testing.
     Later replace this with the real ZEEVO app link.
  ------------------------------------------------------- */

  appDownloadUrl:
    "https://play.google.com/store/",


  /* -------------------------------------------------------
     BRAND ASSET
     
     Main transparent ZEEVO logo is stored inside
     public/zeevo-logo.png
  ------------------------------------------------------- */

  logoPath:
    "/zeevo-logo.png",


  /* -------------------------------------------------------
     PRODUCT FLOW
  ------------------------------------------------------- */

  flow: {
    landing:
      "/",

    personalInfo:
      "/onboarding/personal",

    profession:
      "/onboarding/profession",

    role:
      "/onboarding/role",

    student:
      "/onboarding/student",

    bachelor:
      "/onboarding/bachelor",

    family:
      "/onboarding/family",

    owner:
      "/owner",
  },


  /* -------------------------------------------------------
     USER ROLES
  ------------------------------------------------------- */

  roles: {
    student: "student",

    bachelor: "bachelor",

    family: "family",

    owner: "owner",
  },


  /* -------------------------------------------------------
     PROPERTY / SERVICE CATEGORIES
  ------------------------------------------------------- */

  categories: {
    hostel: "hostel",

    pg: "pg",

    rentalFlat: "rental-flat",

    room: "room",

    flatmate: "flatmate",

    hotel: "hotel",

    mess: "mess",
  },
};


/* =========================================================
   LOCAL STORAGE KEYS
========================================================= */

export const STORAGE_KEYS = {
  onboardingDraft:
    "rental_platform_onboarding_draft",

  userProfile:
    "rental_platform_user_profile",

  selectedRole:
    "rental_platform_selected_role",

  selectedCategory:
    "rental_platform_selected_category",

  authUser:
    "rental_platform_auth_user",
};