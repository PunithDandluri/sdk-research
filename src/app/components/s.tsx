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

import {
  FingerprintJsServerApiClient,
  Region,
} from "@fingerprintjs/fingerprintjs-pro-server-api";

export const returnEventData = async (requestId: string) => {
  const client = new FingerprintJsServerApiClient({
    apiKey: process.env.NEXT_PUBLIC_FPJS_API_KEY || "", // Replace with your key
    region: Region.Global, // Replace with your region
  });

  // Get a specific fingerprinting event
  client.getEvent(requestId).then((event) => {
    return event;
  });
};
