declare module "*.md" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: {
    id: string;
    viewBox: string;
    content: string;
  };
  export default content;
}
