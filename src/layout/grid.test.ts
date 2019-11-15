import { buildVerticalSpacing, createColClass, createGridClass } from "./grid";

describe("grid classnames", () => {
  it("base grid definition", () => {
    const result = createGridClass();
    expect(result).toBe("bx--grid");
  });

  it("all the options for grid", () => {
    const result = createGridClass({ isCondensed: true });
    expect(result).toBe("bx--grid bx--grid--condensed");
  });
});

describe("column classnames", () => {
  it("basic col takes any room it needs", () => {
    const result = createColClass({});
    expect(result).toBe("bx--col");
  });

  it("basic size applies to sm and above (all breakpoints)", () => {
    const result = createColClass({ size: 1 });
    expect(result).toBe("bx--col-sm-1 bx--col-md-1 bx--col-lg-1 bx--col-xlg-1 bx--col-max-1");
  });

  it("object sizes applies classes for keyed sizes", () => {
    const result = createColClass({ size: { sm: 1, md: 2 } });
    expect(result).toBe("bx--col-sm-1 bx--col-md-2");
  });
});

describe("custom vertical padding classes", () => {
  it("returns undefined if empty provided", () => {
    const result = buildVerticalSpacing();
    expect(result).toBeNull();
  });

  it("singular specified direction", () => {
    const result = buildVerticalSpacing("top md");
    expect(result).toBe("padding-top: 1rem;");
  });

  it("all vertical padding", () => {
    const result = buildVerticalSpacing("md");
    expect(result).toBe("padding-top: 1rem; padding-bottom: 1rem;");
  });

  it("specified direction", () => {
    const result = buildVerticalSpacing("md xl");
    expect(result).toBe("padding-top: 1rem; padding-bottom: 2rem;");
  });

  it("throws if invalid string provided", () => {
    expect(() => buildVerticalSpacing("something md xl")).toThrow();
  });

  it("allows non-standard values", () => {
    const result = buildVerticalSpacing("md 0");
    expect(result).toBe("padding-top: 1rem; padding-bottom: 0;");
  });
});

it("replace padding with margin", () => {
  expect(buildVerticalSpacing("md xl", "margin")).toBe("margin-top: 1rem; margin-bottom: 2rem;");
});
