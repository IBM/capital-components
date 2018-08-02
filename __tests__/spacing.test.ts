import { buildSpacing } from "../src/layout/spacing";

it("returns null if no padding provided", () => {
  const result = buildSpacing();
  expect(result).toBeNull();
});

it("converts singlar directioned padding to valid direction css", () => {
  const result = buildSpacing("bottom md");
  expect(result).toEqual("padding-bottom: 1rem;");
});

it("converts multiple directioned paddings to valid direction css", () => {
  const result = buildSpacing("bottom md top md");
  expect(result).toEqual("padding-bottom: 1rem; padding-top: 1rem;");
});

it("converts padding to valid css", () => {
  const result = buildSpacing("md");
  expect(result).toEqual("padding: 1rem;");
});

it("converts double padding to vertical/horizontal css", () => {
  const result = buildSpacing("md md");
  expect(result).toEqual("padding: 1rem 1rem;");
});

it("converts full padding description valid rem", () => {
  const result = buildSpacing("md md sm sm");
  expect(result).toEqual("padding: 1rem 1rem 0.75rem 0.75rem;");
});

it("converts padding description with 0s to appropriate", () => {
  const result = buildSpacing("md 0");
  expect(result).toEqual("padding: 1rem 0;");
});

it("converts padding description with margin instead", () => {
  const result = buildSpacing("md 0", "margin");
  expect(result).toEqual("margin: 1rem 0;");
});

it("supports media queries", () => {
  const result = buildSpacing({ m: "md 0", l: "sm sm" }, "margin");
  expect(result).toEqual(
    expect.stringMatching(/@media \(min-width:992px\) {\s+margin: 1rem 0;\s+/)
  );
  expect(result).toEqual(
    expect.stringMatching(/@media \(min-width:1200px\) {\s+margin: 0.75rem 0.75rem;\s+/)
  );
});
