import { STORAGE_KEYS } from "../../app/app.config";

function safeParse(value, fallback = null) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.error("Storage parse error:", error);
    return fallback;
  }
}

export function getOnboardingDraft() {
  const data = localStorage.getItem(STORAGE_KEYS.onboardingDraft);
  return safeParse(data, {});
}

export function saveOnboardingDraft(data) {
  localStorage.setItem(
    STORAGE_KEYS.onboardingDraft,
    JSON.stringify(data)
  );
}

export function clearOnboardingDraft() {
  localStorage.removeItem(STORAGE_KEYS.onboardingDraft);
}

export function getUserProfile() {
  const data = localStorage.getItem(STORAGE_KEYS.userProfile);
  return safeParse(data, null);
}

export function saveUserProfile(profile) {
  localStorage.setItem(
    STORAGE_KEYS.userProfile,
    JSON.stringify(profile)
  );
}

export function completeUserProfile(data) {
  const previousDraft = getOnboardingDraft();

  const profile = {
    ...previousDraft,
    ...data,
    completed: true,
    updatedAt: new Date().toISOString(),
  };

  saveUserProfile(profile);
  clearOnboardingDraft();

  return profile;
}

export function createEditDraftFromProfile() {
  const profile = getUserProfile();

  if (!profile) {
    return {};
  }

  const editableDraft = {
    ...profile,
  };

  delete editableDraft.completed;
  delete editableDraft.updatedAt;

  saveOnboardingDraft(editableDraft);

  return editableDraft;
}

export function clearAllUserData() {
  localStorage.removeItem(STORAGE_KEYS.onboardingDraft);
  localStorage.removeItem(STORAGE_KEYS.userProfile);
}