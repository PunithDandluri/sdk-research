"use client";

import {
  useVisitorData,
  FingerprintJSPro,
  VisitorData,
} from "@fingerprintjs/fingerprintjs-pro-react";
import { getFingerprint, returnEventData } from "./components/s";
import { useEffect, useState } from "react";
import { GetResult } from "@fingerprintjs/fingerprintjs";

export default function VisitorDataPage() {
  const { data, error, isLoading } = useVisitorData({
    extendedResult: true,
    tag: "visitor-data",
    ignoreCache: true,
    linkedId: "visitor-data",
  });
  console.log(data);
  console.log(useVisitorData);
  const [fingerprint, setFingerprint] = useState<GetResult | undefined>(
    undefined
  );
  const [finalData, setFinalData] = useState<any>();
  useEffect(() => {
    const fetchEventData = async () => {
      if (data?.requestId) {
        const eventData = await returnEventData(data.requestId);
        console.log(eventData);
        let temp: any = data;
        temp.eventData = eventData;
        setFinalData(temp);
      }
    };
    fetchEventData();
  }, [data]);
  useEffect(() => {
    const fetchFingerprint = async () => {
      const fp = await getFingerprint();
      setFingerprint(fp);
    };

    fetchFingerprint();
  }, []);
  console.log(typeof data);
  return (
    <div className="grid grid-cols-1 gap-5 items-center justify-center">
      <div>
        <h1>fingerprintjs pro full details</h1>
        <div></div>
      </div>
      <div>
        <h1>fingerprintjs pro</h1>
        <div>
          <pre>{JSON.stringify(finalData, null, 2)}</pre>
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
