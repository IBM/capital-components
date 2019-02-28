import { buildAlignment } from "./alignment";

describe("flex alignment", () => {
  test("will align on all axii", () => {
    const result = buildAlignment("row", "center");
    expect(result).toBe("justify-content: center; align-items: center");

    expect(buildAlignment("row", "flex-start")).toBe(
      "justify-content: flex-start; align-items: flex-start"
    );
  });

  test("with direction row", () => {
    const result = buildAlignment("row", "center flex-start");
    expect(result).toBe("align-items: center; justify-content: flex-start");

    expect(buildAlignment("row", "flex-start center")).toBe(
      "align-items: flex-start; justify-content: center"
    );
  });

  test("with direction column", () => {
    const result = buildAlignment("column", "center flex-start");
    expect(result).toBe("justify-content: center; align-items: flex-start");

    expect(buildAlignment("column", "flex-start center")).toBe(
      "justify-content: flex-start; align-items: center"
    );
  });

  test("with horizontal specification and direction row", () => {
    const result = buildAlignment("row", "horizontal center");
    expect(result).toBe("justify-content: center");
  });

  test("with vertical specification and direction row", () => {
    const result = buildAlignment("row", "vertical center");
    expect(result).toBe("align-items: center");
  });

  test("with horizontal specification and direction column", () => {
    const result = buildAlignment("column", "horizontal center");
    expect(result).toBe("align-items: center");
  });

  test("with vertical specification and direction column", () => {
    const result = buildAlignment("column", "vertical center");
    expect(result).toBe("justify-content: center");
  });

  test("supports media queries", () => {
    const result = buildAlignment("column", { m: "vertical center", l: "horizontal center" });
    expect(result).toEqual(
      expect.stringMatching(/@media \(min-width:992px\) {\s+justify-content: center;\s+/)
    );
    expect(result).toEqual(
      expect.stringMatching(/@media \(min-width:1200px\) {\s+align-items: center;\s+/)
    );
  });

  test("throws with invalid description", () => {
    expect(() => {
      buildAlignment("row", "center center center");
    }).toThrowError("Invalid alignment provided.");
  });
});
