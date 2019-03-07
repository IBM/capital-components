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

enum TranslationKeys {
  close = "wfss-components.close"
}

const defaultTranslations: Record<TranslationKeys, (values: any) => string> = {
  [TranslationKeys.close]: () => "close"
};

const defaultTranslate = (arg: { id: TranslationKeys; values?: any }) =>
  defaultTranslations[arg.id](arg.values);

interface IState {
  resting: boolean;
  prevProps: IProps;
}

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  /** An overlay over the rest of the document to draw focus to this push navigation */
  showOverlay?: boolean;
  /** Occurs when user clicks on the overlay. Only used when showOverlay is true. */
  onOverlayClick?: React.MouseEventHandler<HTMLDivElement>;
  /** A classname to be applied to the animated element. Usuaully not used unless you know what you're doing. */
  outerClassName?: string;
  /** The max-width of the element */
  size?: keyof typeof sizeMapping | number;
  /** Whether or not to render a close button. */
  closable?: boolean;
  /** Callback for close button click. */
  onCloseClick?: React.MouseEventHandler<HTMLDivElement>;
  /** Position the element will animate from. Defaults to left. */
  position?: "left" | "right";
  /** Position of the close button. Also only valid when closable is true. Defaults to opposite of position */
  closePosition?: "left" | "right";
  /** When or not the element will try to take up the full screen or not. If this is supposed to be positioned under another element, probably set this to fasle. Defaults to false. */
  fullScreenMode?: boolean;
  /** Translation fucntion */
  translate?: typeof defaultTranslate;
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
      translate = defaultTranslate,
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
                    role="button"
                    description={translate({ id: TranslationKeys.close })}
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
