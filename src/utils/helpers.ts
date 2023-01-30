export function formatMilliseconds(ms: number): number[] {
  let totalSeconds = ms / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor((totalSeconds % 86400) / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = Math.floor(totalSeconds % 60);
  return [days, hours, minutes, seconds];
}

export function padWithLeadingZeros(num: number, length: number): string {
  return String(num).padStart(length, "0");
}
