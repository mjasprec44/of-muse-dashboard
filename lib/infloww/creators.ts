import { fetchInfloww } from "./client";
import { InflowwResponse, CreatorDTO, BaseParams } from "./types";

const baseParams: BaseParams = {
  limit: 100,
  cursor: "",
  platformCode: "OnlyFans",
};

// 1. Create a generic pagination helper
async function fetchPaginatedCreators(
  endpoint: string,
  baseParams: BaseParams,
): Promise<CreatorDTO[]> {
  const allCreators: CreatorDTO[] = [];
  let cursor: string | undefined = undefined;
  let hasMore = true;

  while (hasMore) {
    // Create a fresh copy of params for each loop iteration
    const params: BaseParams = {
      ...baseParams,
    };

    // Only append cursor if it exists
    if (cursor) {
      params.cursor = cursor;
    }

    const res = await fetchInfloww<InflowwResponse<CreatorDTO>>(
      endpoint,
      params,
    );
    const { list, hasMore: nextHasMore, cursor: nextCursor } = res.data;

    allCreators.push(...list);

    hasMore = nextHasMore;
    cursor = nextCursor ?? undefined;

    // Safety check to prevent infinite loops
    if (hasMore && !cursor) {
      throw new Error(
        `Infloww pagination error on ${endpoint}: hasMore is true but cursor is missing.`,
      );
    }
  }

  return allCreators;
}

// 2. Use the helper for specific endpoints
export async function getConnectedCreators(): Promise<CreatorDTO[]> {
  return fetchPaginatedCreators("/creators", baseParams);
}

export async function getAllCreators(): Promise<CreatorDTO[]> {
  return fetchPaginatedCreators("/all-creators", baseParams);
}
