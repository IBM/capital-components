import { RefObject, useEffect } from "react";

const isEventOutsideElement = (ref: RefObject<HTMLElement>, event: MouseEvent) => {
  if (
    ref.current &&
    (ref.current.ownerDocument === event.target ||
      ref.current.ownerDocument.body.contains(event.target as Node))
  ) {
    if (ref.current.contains && !ref.current.contains(event.target as Node)) {
      return true;
    }
  }
  return false;
};

export default function(
  ref: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const refs = Array.isArray(ref) ? ref : [ref];
      const anyElement = refs.find(r => isEventOutsideElement(r, event));
      if (anyElement) {
        handler(event);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [!handler]);
}
