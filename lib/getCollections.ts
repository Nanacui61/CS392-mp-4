"use server";

import type { MuseumRecord } from "@/types";

const HARVARD_API_KEY = process.env.HARVARD_API_KEY;

export default async function getCollection(
  query: string
): Promise<{ records: MuseumRecord[]; info: any } | undefined | null> {
  try {
    if (!query) return undefined;

    const res = await fetch(
      `https://api.harvardartmuseums.org/object?apikey=${HARVARD_API_KEY}&q=${encodeURIComponent(query)}`
    );

    if (res.status === 429) {
      return null; // too many requests
    } else if (!res.ok) {
      return undefined;
    }

    const jsonRes = await res.json();

    return {
      records: jsonRes.records,
      info: jsonRes.info, 
    };
  } catch (error) {
    console.error("Error occurred while fetching collection:", error);
    return undefined;
  }
}
