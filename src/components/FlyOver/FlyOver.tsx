import React from "react";
import Icon from "carbon-components-react/lib/components/Icon";
import { css, cx } from "emotion";
import { Transition, animated, interpolate, Spring } from "react-spring";

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

const FlyOverInternal = ({ position, width, className, ...otherProps }: IInternalProps) => {
  const cl = css`
    min-width: ${sizeMapping[width] || width};
    max-width: ${sizeMapping[width] || width};
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 70;
    ${position === "right" ? "right: 0;" : null};
    padding: 2.25rem 1rem 1rem 1rem;
  `;
  return <animated.div {...otherProps} className={cx(className, cl)} />;
};

export interface IProps extends IInternalProps {
  closable?: boolean;
  onCloseClick?: (Event) => void;
  show?: boolean;
}

export class FlyOver extends React.PureComponent<IProps, { destroyed: boolean }> {
  static defaultProps = {
    position: "left",
    width: "md",
    closable: true,
    show: true
  };

  state = {
    destroyed: false
  };

  resetAnimating = () => !this.props.show && this.setState({ destroyed: true });

  onStart = () => this.setState({ destroyed: false });

  render() {
    const { position, width, show, closable, onCloseClick, children, ...otherProps } = this.props;
    const offScreenPosition = position === "left" ? { x: -100 } : { x: 100 };
    const onScreenPosition = { x: 0 };
    if (this.state.destroyed) {
      return null;
    }
    return (
      <Spring
        native
        from={show ? offScreenPosition : onScreenPosition}
        to={show ? onScreenPosition : offScreenPosition}
        onRest={this.resetAnimating}
        onStart={this.onStart}
      >
        {({ x }) => {
          return (
            <FlyOverInternal
              key="flyover"
              position={position}
              width={width}
              {...otherProps}
              style={{ transform: interpolate([x], x => `translate3d(${x}%,0,0)`) }}
            >
              {closable && (
                <Icon
                  name="icon--close"
                  className={css`
                    top: 0.5rem;
                    ${position === "left" ? "right: 0.5rem" : "left: 0.5rem"};
                    position: absolute;
                    padding: 0.5rem;
                    cursor: pointer;
                  `}
                  height="32"
                  width="32"
                  onClick={onCloseClick}
                />
              )}
              {children}
            </FlyOverInternal>
          );
        }}
      </Spring>
    );
  }
}

export default FlyOver;
