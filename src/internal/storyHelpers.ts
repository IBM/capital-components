import React from "react";
import PropTypes from "prop-types";

export class WithState<StateShape> extends React.PureComponent<
  {
    initialState: StateShape;
    children: ((args: { state: StateShape; setState: any }) => any);
  },
  StateShape
> {
  static propTypes = {
    initialState: PropTypes.object
  };
  state = this.props.initialState;

  boundSetState = (...args) => (this.setState as any)(...args);

  render() {
    return this.props.children({
      state: this.state,
      setState: this.boundSetState
    });
  }
}
