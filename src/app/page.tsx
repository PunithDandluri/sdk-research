"use client";

import {
  useVisitorData,
  FingerprintJSPro,
  VisitorData,
} from "@fingerprintjs/fingerprintjs-pro-react";
import { getFingerprint } from "./components/s";
import { useEffect, useState } from "react";
import { GetResult } from "@fingerprintjs/fingerprintjs";

export default function VisitorDataPage() {
  const { data, error, isLoading } = useVisitorData();
  const [fingerprint, setFingerprint] = useState<GetResult | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchFingerprint = async () => {
      const fp = await getFingerprint();
      setFingerprint(fp);
    };

    fetchFingerprint();
  }, []);
  //check if data is instance of VisitorData
  console.log(typeof data);
  return (
    <div className="grid grid-cols-1 gap-5 items-center justify-center">
      <div>
        <h1>fingerprintjs pro</h1>
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
      <div>
        <h1>fingerprintjs open-source</h1>
        <div>
          <pre>{JSON.stringify(fingerprint, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
