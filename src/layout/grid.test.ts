import { buildVerticalSpacing, createColClass, createGridClass } from "./grid";

describe("grid classnames", () => {
  it("base grid definition", () => {
    const result = createGridClass();
    expect(result).toBe("cap-grid");
  });

  it("all the options for grid", () => {
    const result = createGridClass({ isContainer: true, isFixedColumns: true, isFluidRows: true });
    expect(result).toBe("cap-grid cap-container cap-grid--fixed-columns cap-grid--fluid-rows");
  });
});

describe("column classnames", () => {
  it("size defaults to 1", () => {
    const result = createColClass({});
    expect(result).toBe("cap-padding--horizontal cap-grid__col--xs--1");
  });

  it("basic size applies to xs and above (all breakpoints)", () => {
    const result = createColClass({ size: 1 });
    expect(result).toBe("cap-padding--horizontal cap-grid__col--xs--1");
  });

  it("object sizes applies classes for keyed sizes", () => {
    const result = createColClass({ size: { xs: 1, s: 2 } });
    expect(result).toBe("cap-padding--horizontal cap-grid__col--xs--1 cap-grid__col--s--2");
  });

  it("support for fraction syntax", () => {
    const result = createColClass({ size: "1/2" });
    expect(result).toBe("cap-padding--horizontal cap-grid__col--xs--6");
  });

  it("support for fraction syntax in object notation", () => {
    const result = createColClass({ size: { l: "1/2", s: "1/6" } });
    expect(result).toBe("cap-padding--horizontal cap-grid__col--l--6 cap-grid__col--s--2");
  });

  it("height object set classes for fixed height accross breakpoints", () => {
    const result = createColClass({ height: { xs: 1, s: 3 } });
    expect(result).toBe(
      "cap-padding--horizontal cap-grid__col--xs--1 cap-grid__height--xs--1 cap-grid__height--s--3"
    );
  });

  it("heights set classes for fixed height for all breakpoints", () => {
    const result = createColClass({ height: 1 });
    expect(result).toBe("cap-padding--horizontal cap-grid__col--xs--1 cap-grid__height--xs--1");
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
