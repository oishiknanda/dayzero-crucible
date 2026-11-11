import { getAmazonRoleTrack, type AmazonRole } from "../../data/amazonTracks";
import { getCompanyTrackData } from "../../data/companyTracks";
import { GOOGLE_TRACKS, normalizeGoogleRole } from "../../data/googleTracks";
import { ACCENTURE_TRACKS, normalizeACCENTURERole } from "../../data/accentureTracks";
import { ZOMATO_TRACKS, normalizeZOMATORole } from "../../data/zomatoTracks";

const FALLBACK_ROUND_SECONDS = 90 * 60;

export function getRoundNumber(roundSlug: string): number {
  const normalized = roundSlug.toLowerCase().replace(/_/g, "-");
  if (/(^|-)round-?1($|-)|^oa$|online-assessment/.test(normalized)) return 1;
  if (/(^|-)round-?2($|-)|technical-viva|dsa-deep-dive|^viva$/.test(normalized)) return 2;
  if (/(^|-)round-?3($|-)|^lld$|architecture/.test(normalized)) return 3;
  if (/(^|-)round-?4($|-)|bar-raiser/.test(normalized)) return 4;
  return 1;
}

export function parseDurationSeconds(duration: string | undefined): number | null {
  if (!duration) return null;
  const normalized = duration.toLowerCase();
  const hours = normalized.match(/(\d+(?:\.\d+)?)\s*(?:hours?|hrs?)/);
  const minutes = normalized.match(/(\d+(?:\.\d+)?)\s*(?:minutes?|mins?)/);
  const seconds = normalized.match(/(\d+(?:\.\d+)?)\s*(?:seconds?|secs?)/);
  const total = (hours ? Number(hours[1]) * 3600 : 0)
    + (minutes ? Number(minutes[1]) * 60 : 0)
    + (seconds ? Number(seconds[1]) : 0);
  return Number.isFinite(total) && total > 0 ? Math.round(total) : null;
}

export function getRoundDurationSeconds(companySlug: string, role: string, roundSlug: string): number {
  if (roundSlug.toLowerCase() === "round-debug" && ["google", "amazon"].includes(companySlug.toLowerCase())) return 60 * 60;
  const roundNumber = getRoundNumber(roundSlug);

  if (companySlug.toLowerCase() === "amazon") {
    const round = getAmazonRoleTrack(role as AmazonRole).rounds.find((candidate) => candidate.roundNumber === roundNumber);
    return round?.durationMinutes ? round.durationMinutes * 60 : FALLBACK_ROUND_SECONDS;
  }

  if (companySlug.toLowerCase() === "google") {
    const round = GOOGLE_TRACKS[normalizeGoogleRole(role)]?.rounds[roundNumber - 1];
    return round?.timeLimitMinutes ? round.timeLimitMinutes * 60 : FALLBACK_ROUND_SECONDS;
  }
  if (companySlug.toLowerCase() === "accenture") {
    const round = ACCENTURE_TRACKS[normalizeACCENTURERole(role)]?.rounds[roundNumber - 1];
    return round?.timeLimitMinutes ? round.timeLimitMinutes * 60 : FALLBACK_ROUND_SECONDS;
  }
  if (companySlug.toLowerCase() === "zomato") {
    const round = ZOMATO_TRACKS[normalizeZOMATORole(role)]?.rounds[roundNumber - 1];
    return round?.timeLimitMinutes ? round.timeLimitMinutes * 60 : FALLBACK_ROUND_SECONDS;
  }

  const company = getCompanyTrackData(companySlug);
  const selectedRole = company.roles[role] || Object.values(company.roles)[0];
  const duration = selectedRole?.rounds?.[roundNumber - 1]?.duration;
  return parseDurationSeconds(duration) ?? FALLBACK_ROUND_SECONDS;
}
