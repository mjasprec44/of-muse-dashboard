import { fetchInfloww } from "./client";
import { InflowwResponse, LinkDTO, LinkQueryParams } from "./types";

export async function getTrackingLinks(): Promise<LinkDTO[]> {
  const allLinks: LinkDTO[] = [];

  let cursor: string | undefined;
  let hasMore = true;

  while (hasMore) {
    const params: LinkQueryParams = {
      limit: 100,
      platformCode: "OnlyFans",
      cursor: "",
      creatorId: "2472251878866987",
      linkType: "TRACKING",
      startTime: "2026-11-01T00:00:00Z",
      endTime: "2026-11-27T23:59:59Z",
      status: "ACTIVE",
    };

    if (cursor !== undefined) {
      params.cursor = cursor;
    }

    const res = await fetchInfloww<InflowwResponse<LinkDTO>>("/links", params);

    const { list, hasMore: nextHasMore, cursor: nextCursor } = res.data;

    allLinks.push(...list);

    hasMore = nextHasMore;
    cursor = nextCursor ?? undefined;

    if (hasMore && cursor === undefined) {
      throw new Error(
        "Infloww pagination error: hasMore is true but cursor is missing.",
      );
    }
  }

  return allLinks;
}
