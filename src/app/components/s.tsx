// utils/getFingerprint.js
import FingerprintJS from "@fingerprintjs/fingerprintjs";

// Function to get the device fingerprint
export const getFingerprint = async () => {
  // Load FingerprintJS
  const fp = await FingerprintJS.load();

  // Get the fingerprint object
  const result = await fp.get();

  // Get the visitor identifier
  return result;
};
