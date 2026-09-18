import {
  GraduationCap,
  BriefcaseBusiness,
  Users,
  Building2,
  Home,
  BedDouble,
  Utensils,
  Hotel,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| Main user sections
|--------------------------------------------------------------------------
*/

export const PLATFORM_SECTIONS = [
  {
    id: "student",
    title: "Student",
    description:
      "For students looking for a suitable place to live, study, and manage everyday needs.",
    icon: GraduationCap,
  },
  {
    id: "bachelor",
    title: "Bachelor",
    description:
      "For bachelors looking for flexible living options, rooms, flats, and compatible flatmates.",
    icon: BriefcaseBusiness,
  },
  {
    id: "family",
    title: "Family",
    description:
      "For families looking for comfortable and suitable rental homes.",
    icon: Users,
  },
  {
    id: "owner",
    title: "Owner / Provider",
    description:
      "List your property, accommodation, mess, or hotel on the platform.",
    icon: Building2,
  },
];

/*
|--------------------------------------------------------------------------
| Owner listing sections
|--------------------------------------------------------------------------
|
| PG + Hostel are intentionally combined at this selection level.
| Their detailed listing forms can still be different later.
|
*/

export const OWNER_LISTING_TYPES = [
  {
    id: "pg-hostel",
    title: "PG & Hostel",
    description:
      "List PG accommodation or hostel spaces.",
    icon: BedDouble,
    group: "accommodation",
  },
  {
    id: "rental-flat",
    title: "Rental Flat",
    description:
      "List flats and homes available for rent.",
    icon: Home,
    group: "residential",
  },
  {
    id: "room",
    title: "Room",
    description:
      "List private or shared rooms.",
    icon: BedDouble,
    group: "residential",
  },
  {
    id: "mess",
    title: "Mess",
    description:
      "List your mess and meal service.",
    icon: Utensils,
    group: "service",
  },
  {
    id: "hotel",
    title: "Hotel",
    description:
      "List hotels and short-stay accommodation.",
    icon: Hotel,
    group: "service",
  },
];

/*
|--------------------------------------------------------------------------
| Profession
|--------------------------------------------------------------------------
|
| Profession is still useful information, but it is no longer the
| main routing decision. The platform section determines the experience.
|
*/

export const PROFESSIONS = [
  {
    id: "student",
    label: "Student",
    description:
      "Currently studying or preparing for an academic goal.",
    icon: GraduationCap,
  },
  {
    id: "working-professional",
    label: "Working Professional",
    description:
      "Working full-time, part-time, or remotely.",
    icon: BriefcaseBusiness,
  },
  {
    id: "business",
    label: "Business / Entrepreneur",
    description:
      "Running a business or working independently.",
    icon: Building2,
  },
  {
    id: "other",
    label: "Other",
    description:
      "Something else that describes your current situation.",
    icon: Users,
  },
];

/*
|--------------------------------------------------------------------------
| Legacy compatibility
|--------------------------------------------------------------------------
|
| We keep this export temporarily so existing imports don't break.
| It can be removed once the old RoleSelectionPage is deleted.
|
*/

export const LIVING_ROLES = [
  {
    id: "student",
    label: "Student",
    title: "Student",
    description:
      "Student living and study-focused experience.",
    icon: GraduationCap,
  },
  {
    id: "bachelor",
    label: "Bachelor",
    title: "Bachelor",
    description:
      "Flexible living experience for bachelors.",
    icon: BriefcaseBusiness,
  },
  {
    id: "family",
    label: "Family",
    title: "Family",
    description:
      "Family-focused rental experience.",
    icon: Users,
  },
];

export function getSectionLabel(section) {
  const found = PLATFORM_SECTIONS.find(
    (item) => item.id === section
  );

  return found?.title || "User";
}

export function getOwnerListingLabel(listingType) {
  const found = OWNER_LISTING_TYPES.find(
    (item) => item.id === listingType
  );

  return found?.title || "Listing";
}