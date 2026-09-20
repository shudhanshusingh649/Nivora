export const APP_CONFIG = {
  name: "ZEEVO",

  shortName: "ZEEVO",

  tagline: "FIND. VERIFY. LIVE.",

  description:
    "ZEEVO is a modern living platform for students, bachelors and families to discover spaces that fit their lifestyle, location, budget and everyday needs.",

  extendedDescription:
    "ZEEVO starts with understanding you. After you create your profile, your selected role, location, lifestyle and preferences shape the living experience you see across the platform.",

  websiteDescription:
    "Discover relevant living spaces, understand what fits your needs and continue your complete living journey through the ZEEVO ecosystem.",

  logo: "/zeevo-logo.png",

  navigation: {
    home: "/",
    features: "#features",
    howItWorks: "#how-it-works",
    about: "#about",
    contact: "#contact",

    getStarted: "/login",

    downloadApp: "#download-app",
  },

  roles: {
    student: "Student",
    bachelor: "Bachelor",
    family: "Family",
    owner: "Owner",
  },

  categories: {
    residential: [
      "PG",
      "Hostel",
      "Rental Flat",
      "Room",
    ],

    student: [
      "PG",
      "Hostel",
      "Rental Flat",
      "Room",
      "Flatmate",
    ],

    bachelor: [
      "PG",
      "Hostel",
      "Rental Flat",
      "Room",
      "Flatmate",
    ],

    family: [
      "Family Rental",
    ],

    services: [
      "Hotel",
      "Mess",
      "Nearby Services",
    ],
  },
};

export const STORAGE_KEYS = {
  onboardingDraft:
    "zeevo_onboarding_draft",

  userProfile:
    "zeevo_user_profile",

  authSession:
    "zeevo_auth_session",

  authMethod:
    "zeevo_auth_method",
};