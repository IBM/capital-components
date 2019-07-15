import { useState, useCallback } from "react";

export default function useToggle(initialState: boolean) {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => {
    setState(prevState => !prevState);
  }, [setState]);
  return [state, toggle] as [boolean, () => void];
}
