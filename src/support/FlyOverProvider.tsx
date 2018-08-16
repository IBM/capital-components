import React from "react";

export const flyOverContext = React.createContext<{
  renderFlyOver: (arg: React.ReactNode) => void;
}>({
  renderFlyOver: null
});

export default class FlyOverProvider extends React.PureComponent<{}, { flyOver: React.ReactNode }> {
  state = {
    flyOver: null
  };

  renderFlyOver = (newFlyOver: React.ReactNode) => {
    this.setState({
      flyOver: newFlyOver
    });
  };
  render() {
    return (
      <flyOverContext.Provider value={{ renderFlyOver: this.renderFlyOver }}>
        {this.state.flyOver}
        {this.props.children}
      </flyOverContext.Provider>
    );
  }
}
