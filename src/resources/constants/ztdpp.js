/**
 * Domain constants boilerplate.
 */

export const ROLE_SUPER_ADMIN = "super-admin";
export const ROLE_USER = "user";

export const ROLES = {
  SUPER_ADMIN: ROLE_SUPER_ADMIN,
  USER: ROLE_USER,
};

export const VERDICTS = {
  trusted: { label: "Trusted", tone: "success", description: "Verified and valid." },
  warning: { label: "Warning", tone: "warning", description: "Potential issues detected." },
  untrusted: { label: "Untrusted", tone: "danger", description: "Verification failed." },
};

export const ORIGINS = {
  standard: { label: "Standard", short: "Std", tone: "neutral" },
};

export const CLASSIFICATIONS = {
  default: ORIGINS.standard,
};

export const SOURCE_TYPES = [];
export const PROVENANCE_ACTIONS = [];
export const ACTION_LABELS = {};
export const API_SCOPES = [];
export const MATCH_LABELS = {};

export const SEVERITY_TONES = {
  critical: "danger",
  warning: "warning",
  positive: "success",
  info: "info",
};

export function aiSignalLabel(label) {
  return label ? String(label).replace(/_/g, " ") : "Unknown";
}
