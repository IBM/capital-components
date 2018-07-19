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

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
