import { getHour } from "../modules/heure";
import { describe, expect, it } from "vitest";

describe("getHour", () => {
  it("should return 'mortin' when the result is less than or equal to 2", () => {
    expect(getHour(1, 1, 1)).toBe("mortin");
    expect(getHour(2, 1, 1)).toBe("mortin");
    expect(getHour(1, 1, 2)).toBe("mortin");
  });

  it("should return 'aprenoon' when the result is less than or equal to 4", () => {
    expect(getHour(1, 2, 1)).toBe("aprenoon");
    expect(getHour(2, 2, 1)).toBe("aprenoon");
  });
  it("should return 'aprenoon' when the result is 4", () => {
    expect(getHour(1, 2, 2)).toBe("aprenoon");
  });

  it("should return 'soirning' when the result is less than or equal to 5", () => {
    expect(getHour(1, 2, 2)).toBe("soirning");
  });

  it("should return 'nuight' when the result is greater than 5", () => {
    expect(getHour(1, 2, 2)).toBe("aprenoon");
    expect(getHour(2, 2, 1)).toBe("nuight");
  });

  it("should return 'nuight' when the result is greater than 5", () => {
    expect(getHour(2, 2, 2)).toBe("nuight");
  });

  it("should apply the power of the moon cadran correctly", () => {
    expect(getHour(1, 1, 1)).toBe("mortin");
    expect(getHour(2, 2, 1)).toBe("aprenoon");
  });

  it("should apply the power of the earth cadran correctly", () => {
    expect(getHour(1, 2, 1)).toBe("aprenoon");
    expect(getHour(2, 2, 1)).toBe("nuight");
  });

  it("should apply the power of the sun cadran correctly", () => {
    expect(getHour(1, 1, 1)).toBe("mortin");
    expect(getHour(1, 1, 2)).toBe("mortin");
    expect(getHour(1, 2, 1)).toBe("aprenoon");
    expect(getHour(1, 2, 2)).toBe("aprenoon");
    expect(getHour(1, 2, 2)).toBe("soirning");
  });
});
