import React from "react";

export class WithState<StateShape> extends React.PureComponent<
  {
    initialState: StateShape;
    children: ((args: { state: StateShape; setState: any }) => any);
  },
  StateShape
> {
  state = this.props.initialState;

  boundSetState = (arg1, arg2) => {
    (this.setState as any)(arg1, () => {
      if (typeof arg2 === "function") arg2(this.state);
    });
  };

  render() {
    return this.props.children({
      state: this.state,
      setState: this.boundSetState
    });
  }
}
