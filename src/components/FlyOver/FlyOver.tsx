import React from "react";
import Icon from "carbon-components-react/lib/components/Icon";
import { css, cx } from "emotion";
import { animated, interpolate, Spring, config } from "react-spring";
import { buildSpacing } from "../../layout/spacing";
import { context } from "../FlyOverProvider/FlyOverProvider";

import ReactDOM from "react-dom";

const sizeMapping = {
  xl: "560px",
  lg: "460px",
  md: "360px",
  sm: "200px"
};

interface IInternalProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "left" | "right";
  width?: "xl" | "l" | "md" | "sm" | string;
}

const FlyOverContainer = ({ position, width, className, ...otherProps }: IInternalProps) => {
  const cl = css`
    min-width: ${sizeMapping[width] || width};
    max-width: ${sizeMapping[width] || width};
    height: 100%;
    z-index: 70;
    ${buildSpacing("xl 2xl lg xl", "padding")};
  `;
  return <animated.div {...otherProps} className={cx(className, cl)} />;
};

export interface IProps extends IInternalProps {
  closable?: boolean;
  onCloseClick?: (Event) => void;
  show?: boolean;
}

interface IState {
  resting: boolean;
  prevProps: IProps;
}

export class FlyOver extends React.PureComponent<IProps, IState> {
  static defaultProps = {
    position: "left",
    width: "md",
    closable: true,
    show: true
  };

  state = {
    // Some internal state used to track when to totally hide the flyover element
    resting: false,
    prevProps: this.props // a slight hack to track prevProps in state.
  };

  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    const { prevProps } = prevState;
    const nextResting = prevProps.show === nextProps.show;
    return { resting: nextResting, prevProps: nextProps };
  }

  onRest = () => this.setState({ resting: true });

  onStart = () => this.setState({ resting: false });

  renderContent() {
    const { position, width, show, closable, onCloseClick, children, ...otherProps } = this.props;
    const offScreenPosition = position === "left" ? { x: -100 } : { x: 100 };
    const onScreenPosition = { x: 0 };
    if (this.state.resting && !show) {
      return null;
    }
    return (
      <Spring
        native
        from={show ? offScreenPosition : onScreenPosition}
        to={show ? onScreenPosition : offScreenPosition}
        onRest={this.onRest}
        onStart={this.onStart}
        config={{
          ...config,
          restSpeedThreshold: 0.001,
          overshootClamping: true
        }}
      >
        {({ x }) => {
          return (
            <FlyOverContainer
              position={position}
              width={width}
              {...otherProps}
              style={{ transform: interpolate([x], x => `translate3d(${x}%,0,0)`) }}
            >
              {closable && (
                <Icon
                  name="icon--close"
                  className={css`
                    top: 1rem;
                    ${position}: 1rem;
                    position: absolute;
                    cursor: pointer;
                  `}
                  height="12"
                  width="12"
                  onClick={onCloseClick}
                />
              )}
              {children}
            </FlyOverContainer>
          );
        }}
      </Spring>
    );
  }

  render() {
    return (
      <context.Consumer>
        {args => {
          const containerRef =
            this.props.position === "left" ? args.getLeftRef() : args.getRightRef();
          if (containerRef === null) return null;
          return ReactDOM.createPortal(this.renderContent(), containerRef);
        }}
      </context.Consumer>
    );
  }
}

export default FlyOver;
