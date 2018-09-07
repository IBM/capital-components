import React from "react";
import { Flex } from "../../primitives/elements";
import { styled } from "../../support/theme";
import { animated, interpolate, Spring, config } from "react-spring";
import { css, cx } from "emotion";

const PUSH_WIDTH = 320;

const Wrapper = ({ children, ...otherProps }) => (
  <Flex
    direction="column"
    cssWithTheme={({ theme }) => `
          right: 0;
          position: absolute;
          width: ${PUSH_WIDTH}px;
          height: 100%;
          background-color: ${theme.color.nav02};
          z-index: ${theme.layers.FlyOver};
        `}
    {...otherProps}
  >
    {children}
  </Flex>
);

const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: ${({ theme }) => theme.layers.FlyOver - 1};
`;

// This works as long as there are no custom props.
const AnimatedOverlay = Overlay.withComponent(animated.div);

interface IState {
  resting: boolean;
  prevProps: IProps;
}

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  showOverlay?: boolean;
  onOverlayClick?: React.MouseEventHandler<HTMLDivElement>;
  outerClassName?: string;
}

class PushOver extends React.PureComponent<IProps & { innerRef: React.Ref<any> }, IState> {
  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    const { prevProps } = prevState;
    const nextResting = prevProps.isOpen === nextProps.isOpen;
    return { resting: prevState.resting && nextResting, prevProps: nextProps };
  }

  state = {
    // Some internal state used to track when to totally hide the flyover element
    resting: !this.props.isOpen,
    prevProps: this.props // a slight hack to track prevProps in state.
  };

  onRest = () => {
    this.setState({ resting: true });
  };

  onStart = () => {
    this.setState({ resting: false });
  };

  render() {
    const { isOpen, onOverlayClick, showOverlay, children, outerClassName, ...rest } = this.props;
    const offScreenPosition = {
      width: 0,
      overlayColor: "#00000000"
    };
    const onScreenPosition = {
      width: PUSH_WIDTH,
      overlayColor: "#00000066"
    };
    if (this.state.resting && !isOpen) {
      return null;
    }
    return (
      <Spring
        native
        from={isOpen ? offScreenPosition : onScreenPosition}
        to={isOpen ? onScreenPosition : offScreenPosition}
        onRest={this.onRest}
        onStart={this.onStart}
        config={{
          ...config,
          restSpeedThreshold: 0.001,
          overshootClamping: true
        }}
      >
        {({ width, overlayColor }) => (
          <React.Fragment>
            {showOverlay && (
              <AnimatedOverlay
                onClick={onOverlayClick}
                style={{
                  backgroundColor: overlayColor
                }}
              />
            )}
            <animated.div
              className={cx(
                css`
                  position: relative;
                  height: 100vh;
                `,
                outerClassName
              )}
              style={{
                width: interpolate([width], xInternal => `${xInternal}px`),
                minWidth: interpolate([width], xInternal => `${xInternal}px`),
                position: "relative"
              }}
            >
              <Wrapper {...rest}>{children}</Wrapper>
            </animated.div>
          </React.Fragment>
        )}
      </Spring>
    );
  }
}

const PushOverWithRef = React.forwardRef<HTMLDivElement, IProps>((props, ref) => (
  <PushOver {...props} innerRef={ref} />
));

export default PushOverWithRef;
