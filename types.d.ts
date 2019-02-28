declare module "*.md" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const contentSVG: {
    id: string;
    viewBox: string;
    content: string;
  };
  export default contentSVG;
}

declare namespace jest {
  interface Matchers<R> {
    toHaveTextContent: (htmlElement: string) => object;
    toBeInTheDOM: () => void;
    toHaveAttribute: (attr: string, attrValue?: any) => object;
  }

  interface Expect {
    toHaveTextContent: (htmlElement: string) => object;
    toBeInTheDOM: () => void;
    toHaveAttribute: (attr: string, attrValue?: any) => object;
  }
}
