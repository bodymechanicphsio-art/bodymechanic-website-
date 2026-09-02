import Link from "next/link";
import { Star } from "lucide-react";
import { CLINIC } from "@/lib/constants";

const REVIEW_AVATARS = [
  { initials: "SN", className: "bg-gradient-to-br from-pink-500 to-rose-400" },
  { initials: "ST", className: "bg-gradient-to-br from-purple-500 to-violet-400" },
  { initials: "AG", className: "bg-gradient-to-br from-fuchsia-500 to-pink-400" },
  { initials: "DS", className: "bg-gradient-to-br from-rose-500 to-orange-400" },
] as const;

function GoogleGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

interface GoogleReviewsBadgeProps {
  variant?: "hero" | "compact";
  className?: string;
  /** Live review summary from getGoogleReviews(). Falls back to hardcoded CLINIC.googleReviews when omitted. */
  rating?: number;
  count?: number;
}

/** Google-style review summary - links to Maps profile. */
export default function GoogleReviewsBadge({
  variant = "hero",
  className = "",
  rating: ratingProp,
  count: countProp,
}: GoogleReviewsBadgeProps) {
  const rating = ratingProp ?? CLINIC.googleReviews.rating;
  const count = countProp ?? CLINIC.googleReviews.count;
  const { url } = CLINIC.googleReviews;

  if (variant === "compact") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 text-sm font-sans hover:opacity-90 transition-opacity ${className}`}
      >
        <GoogleGlyph size={16} />
        <span className="flex items-center gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className="fill-amber-400 text-amber-400" strokeWidth={0} />
          ))}
        </span>
        <span className="text-text-1 font-semibold">{rating.toFixed(1)}</span>
        <span className="text-brand-pink font-medium">{count} reviews</span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex text-base transition-opacity hover:opacity-90 sm:text-[1.0625rem] group ${className}`}
      aria-label={`${rating} out of 5 stars, ${count} Google reviews - view on Google`}
    >
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2 shrink-0" aria-hidden="true">
          {REVIEW_AVATARS.map((avatar) => (
            <span
              key={avatar.initials}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white/20 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white ${avatar.className}`}
            >
              {avatar.initials}
            </span>
          ))}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <GoogleGlyph size={18} />
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} className="fill-amber-400 text-amber-400" strokeWidth={0} />
              ))}
            </div>
          </div>
          <p className="font-sans leading-snug">
            <span className="font-bold text-text-1">{rating.toFixed(1)}</span>
            <span className="text-text-2 mx-1.5">·</span>
            <span className="text-brand-pink font-semibold group-hover:underline">
              {count} Google reviews
            </span>
          </p>
        </div>
      </div>
    </a>
  );
}
