import { createGridClass, createColClass, buildPaddingClasses } from "./grid";

describe("grid classnames", () => {
  it("base grid definition", () => {
    const result = createGridClass();
    expect(result).toBe("bx-grid");
  });

  it("all the options for grid", () => {
    const result = createGridClass({ isContainer: true, isFixedColumns: true, isFluidRows: true });
    expect(result).toBe("bx-grid bx-container bx-grid--fixed-columns bx-grid--fluid-rows");
  });
});

describe("column classnames", () => {
  it("size defaults to 1", () => {
    const result = createColClass({});
    expect(result).toBe("bx-grid__col--xs--1");
  });

  it("basic size applies to xs and above (all breakpoints)", () => {
    const result = createColClass({ size: 1 });
    expect(result).toBe("bx-grid__col--xs--1");
  });

  it("object sizes applies classes for keyed sizes", () => {
    const result = createColClass({ size: { xs: 1, s: 2 } });
    expect(result).toBe("bx-grid__col--xs--1 bx-grid__col--s--2");
  });

  it("support for fraction syntax", () => {
    const result = createColClass({ size: "1/2" });
    expect(result).toBe("bx-grid__col--xs--6");
  });

  it("support for fraction syntax in object notation", () => {
    const result = createColClass({ size: { lg: "1/2", s: "1/6" } });
    expect(result).toBe("bx-grid__col--lg--6 bx-grid__col--s--2");
  });

  it("height object set classes for fixed height accross breakpoints", () => {
    const result = createColClass({ height: { xs: 1, s: 3 } });
    expect(result).toBe("bx-grid__col--xs--1 bx-grid__height--xs--1 bx-grid__height--s--3");
  });

  it("heights set classes for fixed height for all breakpoints", () => {
    const result = createColClass({ height: 1 });
    expect(result).toBe("bx-grid__col--xs--1 bx-grid__height--xs--1");
  });
});

describe("custom padding classes", () => {
  it("returns undefined if none provided", () => {
    const result = buildPaddingClasses("none");
    expect(result).toBeUndefined();
  });

  it("horizontal basic class", () => {
    const result = buildPaddingClasses("horizontal");
    expect(result).toBe("bx-padding--horizontal");
  });

  it("all padding", () => {
    const result = buildPaddingClasses("all");
    expect(result).toBe("bx-padding");
  });

  it("specified direction", () => {
    const result = buildPaddingClasses(["top", "left"]);
    expect(result).toBe("bx-padding--top bx-padding--left");
  });
});
