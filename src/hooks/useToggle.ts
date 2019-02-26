import { useState } from "react";

export default function useToggle(initialState: boolean) {
  const [state, setState] = useState(initialState);
  return [state, () => setState(prevState => !prevState)] as [boolean, () => void];
}
