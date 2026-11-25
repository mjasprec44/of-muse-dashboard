import { fetchInfloww } from "./client";
import { InflowwResponse, Creator, ParamsType } from "./types";

export async function getAllCreators(): Promise<Creator[]> {
  const allCreators: Creator[] = [];

  let cursor: string | undefined;
  let hasMore = true;

  while (hasMore) {
    const params: ParamsType = {
      limit: 20,
      platformCode: "OnlyFans",
      cursor: "",
    };

    if (cursor !== undefined) {
      params.cursor = cursor;
    }

    const res = await fetchInfloww<InflowwResponse<Creator>>(
      "/all-creators",
      params,
    );

    const { list, hasMore: nextHasMore, cursor: nextCursor } = res.data;

    allCreators.push(...list);

    hasMore = nextHasMore;
    cursor = nextCursor ?? undefined;

    if (hasMore && cursor === undefined) {
      throw new Error(
        "Infloww pagination error: hasMore is true but cursor is missing.",
      );
    }
  }

  return allCreators;
}
