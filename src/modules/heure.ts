export function getHour(lune: number, terre: number, soleil: number): string {
  let result = lune + terre;

  if (soleil === 1) {
    result -= terre;
  } else if (soleil === 2) {
    result += terre;
  }

  if (terre === 2) {
    result = 6;
  }

  if (lune === 1) {
    result -= 2;
  } else if (lune === 2) {
    result = Math.floor(result / 2);
  }

  if (result <= 2) {
    return "mortin";
  } else if (result <= 4) {
    return "aprenoon";
  } else if (result === 5) {
    return "soirning";
  } else {
    return "nuight";
  }
}
