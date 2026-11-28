import { NextResponse } from "next/server";
import { fetchInfloww } from "@/lib/infloww/client";
import { TransactionParams, TransactionResponse } from "@/lib/infloww/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const creatorId = searchParams.get("creatorId");
  const startTime = searchParams.get("startTime");
  const endTime = searchParams.get("endTime");
  const cursor = searchParams.get("cursor");

  // 1. Validate required parameters
  if (!creatorId || !startTime || !endTime) {
    return NextResponse.json(
      { error: "Missing required parameters: creatorId, startTime, endTime" },
      { status: 400 },
    );
  }

  try {
    // 2. Build the params for Infloww
    const params: TransactionParams = {
      creatorId,
      startTime,
      endTime,
      limit: 100, // Fetch max amount per page
      platformCode: "OnlyFans", // Default, but good to be explicit
      cursor: "",
    };

    if (cursor) {
      params.cursor = cursor;
    }

    // 3. Fetch from Infloww using your existing wrapper
    const data = await fetchInfloww<TransactionResponse>(
      "/transaction-perf/details",
      params,
    );

    // 4. Return the data to the frontend
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch sales data:", error);
    return NextResponse.json(
      { error: "Failed to fetch sales data from Infloww" },
      { status: 500 },
    );
  }
}
