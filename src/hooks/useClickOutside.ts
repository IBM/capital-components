import { RefObject, useEffect } from "react";

export default function(ref: RefObject<HTMLElement>, handler: (event: MouseEvent) => void) {
  useEffect(
    () => {
      const handleDocumentClick = (event: MouseEvent) => {
        if (
          ref.current &&
          (ref.current.ownerDocument === event.target ||
            ref.current.ownerDocument.body.contains(event.target as Node))
        ) {
          if (ref.current.contains && !ref.current.contains(event.target as Node)) {
            handler(event);
          }
        }
      };
      document.addEventListener("click", handleDocumentClick);
      return () => {
        document.removeEventListener("click", handleDocumentClick);
      };
    },
    [!handler]
  );
}
