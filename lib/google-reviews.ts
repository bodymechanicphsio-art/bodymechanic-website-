/**
 * Server-side Google Places (Places API New) fetcher for live review data.
 *
 * Falls back to the hardcoded CLINIC.googleReviews + TESTIMONIALS when either
 * env var is missing or the request fails — so the site never breaks on a
 * missing key or a bad Google response.
 *
 * Cached via Next.js ISR: `next: { revalidate: 3600 }` = one hour.
 * On Vercel, this means at most one API call per hour per region — safely
 * inside Google's free tier for the Places Details "Atmosphere" SKU.
 *
 * To activate:
 *   1. Enable the Places API (New) in Google Cloud Console.
 *   2. Create an API key restricted to the Places API.
 *   3. Look up the clinic's Place ID from the Google Maps URL.
 *   4. Add both to Vercel env vars:
 *        GOOGLE_PLACES_API_KEY=<key>
 *        GOOGLE_PLACE_ID=<place_id>
 *   5. Redeploy. Site auto-pulls fresh reviews at most once an hour.
 */

import "server-only";
import { CLINIC } from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/constants";
import type { Testimonial } from "@/lib/types";

const PLACES_API_URL = "https://places.googleapis.com/v1/places";
const REVALIDATE_SECONDS = 3600; // 1 hour

export interface GoogleReviewSummary {
  /** Average rating (0–5). */
  rating: number;
  /** Total number of ratings on the Google Business Profile. */
  totalCount: number;
  /** Deep-link to the Google Business Profile / Maps page. */
  url: string;
  /** Latest reviews (Google returns up to 5 most-relevant items). */
  reviews: Testimonial[];
  /** True when data came from the live Google API, false when fallback used. */
  live: boolean;
}

type PlacesReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
};

type PlacesDetailsResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesReview[];
};

function fallback(): GoogleReviewSummary {
  return {
    rating: CLINIC.googleReviews.rating,
    totalCount: CLINIC.googleReviews.count,
    url: CLINIC.googleReviews.url,
    reviews: [...TESTIMONIALS],
    live: false,
  };
}

/**
 * Fetch live Google reviews. Safe to call from any Server Component or
 * Route Handler. Never throws — always returns a usable summary.
 */
export async function getGoogleReviews(): Promise<GoogleReviewSummary> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallback();
  }

  try {
    const res = await fetch(`${PLACES_API_URL}/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "id,rating,userRatingCount,reviews",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.error(
        `[google-reviews] Places API returned ${res.status}: ${await res.text()}`,
      );
      return fallback();
    }

    const data = (await res.json()) as PlacesDetailsResponse;

    const liveReviews: Testimonial[] = (data.reviews ?? [])
      .filter((r) => (r.text?.text ?? r.originalText?.text)?.trim())
      .map((r) => ({
        name: r.authorAttribution?.displayName ?? "Google Reviewer",
        rating: Math.max(1, Math.min(5, Math.round(r.rating ?? 5))),
        text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
        condition: r.relativePublishTimeDescription ?? "Google Review",
      }));

    return {
      rating: data.rating ?? CLINIC.googleReviews.rating,
      totalCount: data.userRatingCount ?? CLINIC.googleReviews.count,
      url: CLINIC.googleReviews.url,
      reviews: liveReviews.length > 0 ? liveReviews : [...TESTIMONIALS],
      live: true,
    };
  } catch (err) {
    console.error("[google-reviews] fetch failed:", err);
    return fallback();
  }
}
