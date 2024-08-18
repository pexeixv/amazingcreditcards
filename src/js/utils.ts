export const numberArray = (n: number) =>
  Array.from({ length: n }, (_, index) => index) as Array<Number>;

const roundToStarRating = (rating: number): number =>
  Math.round(Math.max(1, Math.min(5, rating)) * 2) / 2;
