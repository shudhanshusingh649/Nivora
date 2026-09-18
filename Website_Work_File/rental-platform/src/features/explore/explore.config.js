import {
  BedDouble,
  Building2,
  Home,
  UsersRound,
  MapPinned,
} from "lucide-react";

export const STUDENT_EXPLORE_CATEGORIES = {
  hostel: {
    id: "hostel",
    title: "Hostels",
    subtitle:
      "Find student-friendly hostels around your preferred location.",
    icon: BedDouble,

    filters: [
      {
        id: "location",
        label: "Preferred location",
        type: "text",
        placeholder: "e.g. Patna, Boring Road",
      },
      {
        id: "budget",
        label: "Maximum monthly budget",
        type: "number",
        placeholder: "e.g. 8000",
        prefix: "₹",
      },
      {
        id: "sharing",
        label: "Room sharing",
        type: "select",
        options: [
          "Any",
          "Single",
          "2 Sharing",
          "3 Sharing",
          "4 Sharing",
        ],
      },
      {
        id: "gender",
        label: "Suitable for",
        type: "select",
        options: [
          "Any",
          "Male",
          "Female",
        ],
      },
      {
        id: "food",
        label: "Food / Mess",
        type: "select",
        options: [
          "Any",
          "Required",
          "Preferred",
          "Not Required",
        ],
      },
      {
        id: "attachedBathroom",
        label: "Attached bathroom",
        type: "select",
        options: [
          "Any",
          "Yes",
          "No",
        ],
      },
      {
        id: "ac",
        label: "Air conditioning",
        type: "select",
        options: [
          "Any",
          "Required",
          "Preferred",
          "Not Required",
        ],
      },
    ],
  },

  pg: {
    id: "pg",
    title: "PG",
    subtitle:
      "Discover PGs that fit your budget, lifestyle, and preferred location.",
    icon: Building2,

    filters: [
      {
        id: "location",
        label: "Preferred location",
        type: "text",
        placeholder: "e.g. Patna, Delhi",
      },
      {
        id: "budget",
        label: "Maximum monthly budget",
        type: "number",
        placeholder: "e.g. 10000",
        prefix: "₹",
      },
      {
        id: "roomType",
        label: "Room type",
        type: "select",
        options: [
          "Any",
          "Single",
          "Double",
          "Triple",
          "Shared",
        ],
      },
      {
        id: "gender",
        label: "Suitable for",
        type: "select",
        options: [
          "Any",
          "Male",
          "Female",
          "Co-living",
        ],
      },
      {
        id: "food",
        label: "Food included",
        type: "select",
        options: [
          "Any",
          "Required",
          "Preferred",
          "Not Required",
        ],
      },
      {
        id: "furnished",
        label: "Furnishing",
        type: "select",
        options: [
          "Any",
          "Fully Furnished",
          "Semi Furnished",
          "Unfurnished",
        ],
      },
      {
        id: "attachedBathroom",
        label: "Attached bathroom",
        type: "select",
        options: [
          "Any",
          "Yes",
          "No",
        ],
      },
    ],
  },

  "rental-flat": {
    id: "rental-flat",
    title: "Rental Flats",
    subtitle:
      "Find rental homes based on budget, BHK, furnishing, and location.",
    icon: Home,

    filters: [
      {
        id: "location",
        label: "Preferred location",
        type: "text",
        placeholder: "e.g. Patna, Pune",
      },
      {
        id: "budget",
        label: "Maximum monthly rent",
        type: "number",
        placeholder: "e.g. 18000",
        prefix: "₹",
      },
      {
        id: "bhk",
        label: "BHK",
        type: "select",
        options: [
          "Any",
          "1 BHK",
          "2 BHK",
          "3 BHK",
          "4 BHK+",
        ],
      },
      {
        id: "furnished",
        label: "Furnishing",
        type: "select",
        options: [
          "Any",
          "Fully Furnished",
          "Semi Furnished",
          "Unfurnished",
        ],
      },
      {
        id: "lease",
        label: "Lease preference",
        type: "select",
        options: [
          "Any",
          "Short Term",
          "6+ Months",
          "12+ Months",
        ],
      },
      {
        id: "parking",
        label: "Parking",
        type: "select",
        options: [
          "Any",
          "Required",
          "Preferred",
          "Not Required",
        ],
      },
      {
        id: "deposit",
        label: "Maximum security deposit",
        type: "number",
        placeholder: "e.g. 30000",
        prefix: "₹",
      },
    ],
  },

  room: {
    id: "room",
    title: "Rooms",
    subtitle:
      "Find private or shared rooms that fit your daily living needs.",
    icon: BedDouble,

    filters: [
      {
        id: "location",
        label: "Preferred location",
        type: "text",
        placeholder: "e.g. Patna",
      },
      {
        id: "budget",
        label: "Maximum monthly budget",
        type: "number",
        placeholder: "e.g. 7000",
        prefix: "₹",
      },
      {
        id: "roomType",
        label: "Room type",
        type: "select",
        options: [
          "Any",
          "Private",
          "Shared",
        ],
      },
      {
        id: "gender",
        label: "Suitable for",
        type: "select",
        options: [
          "Any",
          "Male",
          "Female",
        ],
      },
      {
        id: "bathroom",
        label: "Bathroom",
        type: "select",
        options: [
          "Any",
          "Attached",
          "Common",
        ],
      },
      {
        id: "furnished",
        label: "Furnishing",
        type: "select",
        options: [
          "Any",
          "Fully Furnished",
          "Semi Furnished",
          "Unfurnished",
        ],
      },
    ],
  },

  flatmate: {
    id: "flatmate",
    title: "Flatmates",
    subtitle:
      "Find compatible flatmates based on location, budget, habits, and move-in plans.",
    icon: UsersRound,

    filters: [
      {
        id: "location",
        label: "Preferred location",
        type: "text",
        placeholder: "Where do you want to live?",
      },
      {
        id: "budget",
        label: "Maximum monthly budget",
        type: "number",
        placeholder: "e.g. 10000",
        prefix: "₹",
      },
      {
        id: "genderPreference",
        label: "Preferred flatmate",
        type: "select",
        options: [
          "Any",
          "Male",
          "Female",
        ],
      },
      {
        id: "moveIn",
        label: "Move-in timeline",
        type: "select",
        options: [
          "Any",
          "Immediately",
          "Within 30 days",
          "1–3 Months",
          "3+ Months",
        ],
      },
      {
        id: "foodPreference",
        label: "Food preference",
        type: "select",
        options: [
          "Any",
          "Vegetarian",
          "Non Vegetarian",
          "Eggetarian",
        ],
      },
      {
        id: "smoking",
        label: "Smoking",
        type: "select",
        options: [
          "Any",
          "No",
          "Occasionally",
          "Yes",
        ],
      },
      {
        id: "pets",
        label: "Pets",
        type: "select",
        options: [
          "Any",
          "No Pets",
          "Pets Allowed",
        ],
      },
      {
        id: "lifestyle",
        label: "Lifestyle",
        type: "select",
        options: [
          "Any",
          "Quiet",
          "Social",
          "Balanced",
        ],
      },
    ],
  },

  nearby: {
    id: "nearby",
    title: "Nearby Services",
    subtitle:
      "Explore useful places around your selected property.",
    icon: MapPinned,

    filters: [
      {
        id: "location",
        label: "Location",
        type: "text",
        placeholder: "Enter an area or location",
      },
      {
        id: "radius",
        label: "Search radius",
        type: "select",
        options: [
          "1 km",
          "2 km",
          "3 km",
          "5 km",
        ],
      },
      {
        id: "service",
        label: "Service type",
        type: "select",
        options: [
          "All",
          "Mess",
          "Library",
          "Hospital",
          "Pharmacy",
          "Transport",
          "Market",
          "ATM",
          "Grocery",
          "Coaching",
        ],
      },
    ],
  },
};

export function getStudentCategory(categoryId) {
  return (
    STUDENT_EXPLORE_CATEGORIES[categoryId] ||
    STUDENT_EXPLORE_CATEGORIES.hostel
  );
}