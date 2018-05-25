import { buildSpacingFromString } from "./spacing";

it("returns null if no padding provided", () => {
  const result = buildSpacingFromString();
  expect(result).toBeNull();
});

it("converts singlar directioned padding to valid direction css", () => {
  const result = buildSpacingFromString("bottom md");
  expect(result).toEqual("padding-bottom: 1rem");
});

it("converts padding to valid css", () => {
  const result = buildSpacingFromString("md");
  expect(result).toEqual("padding: 1rem");
});

it("converts double padding to vertical/horizontal css", () => {
  const result = buildSpacingFromString("md md");
  expect(result).toEqual("padding: 1rem 1rem");
});

it("converts full padding description valid rem", () => {
  const result = buildSpacingFromString("md md sm sm");
  expect(result).toEqual("padding: 1rem 1rem 0.75rem 0.75rem");
});

it("converts padding descriptiong with 0s to appropriate", () => {
  const result = buildSpacingFromString("md 0");
  expect(result).toEqual("padding: 1rem 0");
});
