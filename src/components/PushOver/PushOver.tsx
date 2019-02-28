import { Icon } from "carbon-components-react";
import { css, cx } from "emotion";
import React from "react";
import { animated, config, interpolate, Spring } from "react-spring";
import { Flex } from "../../primitives/elements";
import { styled } from "../../support/theme";

const sizeMapping = {
  xl: 560,
  lg: 460,
  md: 360,
  sm: 200
};

const inversePosition = (position: "left" | "right") => (position === "left" ? "right" : "left");

const Wrapper = ({ size, position, ...otherProps }) => (
  <Flex
    direction="column"
    cssWithTheme={({ theme }) => `
          ${inversePosition(position)}: 0;
          position: absolute;
          width: ${size}px;
          height: 100%;
          z-index: ${theme.layers.FlyOver};
        `}
    {...otherProps}
  />
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
  isOpen?: boolean;
  showOverlay?: boolean;
  onOverlayClick?: React.MouseEventHandler<HTMLDivElement>;
  outerClassName?: string;
  size?: keyof typeof sizeMapping | number;
  closable?: boolean;
  onCloseClick?: React.MouseEventHandler<HTMLDivElement>;
  position?: "left" | "right";
  closePosition?: "left" | "right";
  listMode?: boolean;
  fullScreenMode?: boolean;
}

class PushOver extends React.PureComponent<IProps & { innerRef: React.Ref<any> }, IState> {
  public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    const { prevProps } = prevState;
    const nextResting = prevProps.isOpen === nextProps.isOpen;
    return { resting: prevState.resting && nextResting, prevProps: nextProps };
  }

  public state = {
    // Some internal state used to track when to totally hide the flyover element
    resting: !this.props.isOpen,
    prevProps: this.props // a slight hack to track prevProps in state.
  };

  public onRest = () => {
    /* istanbul ignore next */
    this.setState({ resting: true });
  };

  public onStart = () => {
    this.setState({ resting: false });
  };

  public render() {
    const {
      isOpen,
      onOverlayClick,
      showOverlay,
      children,
      outerClassName,
      size,
      closable,
      onCloseClick,
      position = "left",
      closePosition = inversePosition(position),
      /**
       * By fedault, pushOver takes 100% of the screen height (as long as it's placed at the top).
       * If you need push over to sit somewhere other than the top level, set this to false
       */
      fullScreenMode = true,
      ...rest
    } = this.props;
    const offScreenPosition = {
      width: 0,
      overlayColor: "#00000000"
    };
    const sizeInternal = sizeMapping[size] || size || sizeMapping.md;
    const onScreenPosition = {
      width: sizeInternal,
      overlayColor: "#00000066"
    };

    /* istanbul ignore if */
    if (this.state.resting && !isOpen) {
      return null;
    }
    return (
      <Spring
        native={true}
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
                  ${fullScreenMode ? "height: 100vh;" : ""};
                `,
                outerClassName
              )}
              style={{
                width: interpolate([width], xInternal => `${xInternal}px`),
                minWidth: interpolate([width], xInternal => `${xInternal}px`),
                position: "relative",
                overflow: position === "right" ? "hidden" : "visible"
              }}
            >
              <Wrapper size={sizeInternal} position={position} {...rest}>
                {children}
                {closable && (
                  <Icon
                    name="icon--close"
                    className={css`
                      top: 1rem;
                      ${closePosition}: 1rem;
                      position: absolute;
                      cursor: pointer;
                    `}
                    height="12"
                    width="12"
                    onClick={onCloseClick}
                  />
                )}
              </Wrapper>
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
