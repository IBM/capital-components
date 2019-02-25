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
