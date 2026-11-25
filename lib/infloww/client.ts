import { ParamsType } from "./types";

const config = {
  apiKey: process.env.INFLOWW_API_KEY,
  agencyOid: process.env.AGENCY_OID,
};

if (!config.apiKey || !config.agencyOid) {
  throw new Error("Missing Infloww API credentials.");
}

const INFLOWW_API_KEY: string = config.apiKey;
const AGENCY_OID: string = config.agencyOid;

export async function fetchInfloww<T>(
  endpoint: string,
  params?: ParamsType,
): Promise<T> {
  const url = new URL(`https://openapi.infloww.com/v1${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: INFLOWW_API_KEY,
      "x-oid": AGENCY_OID,
    },
    next: { revalidate: 60 }, // Cache for 60 seconds
  });

  if (!res.ok) {
    // Grab the request ID per the docs if it fails
    const requestId = res.headers.get("x-request-id") || "unknown";
    const errorBody = await res.text();

    throw new Error(
      `Infloww API Error [${res.status}]: ${errorBody} (Request ID: ${requestId})`,
    );
  }

  return res.json();
}
