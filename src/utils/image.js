export const SCREENSHOT_WIDTHS = [800, 1600];

export function optimized(src, width) {
  const path = src.replace(/^\//, '');
  return encodeURI(`/optimized/${path}-${width}.webp`);
}

export function srcSet(src, widths) {
  return widths.map((width) => `${optimized(src, width)} ${width}w`).join(', ');
}
