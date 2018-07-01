import React from "react";
import styled from "react-emotion";
import Icon from "carbon-components-react/es/components/Icon";
import { css } from "emotion";

const sizeMapping = {
  xl: "560px",
  lg: "460px",
  md: "360px",
  sm: "200px"
};

interface IInternalProps {
  position?: "left" | "right";
  width?: "xl" | "l" | "md" | "sm" | string;
}

const FlyOverInternal = styled("div")<IInternalProps>`
  min-width: ${(props: IInternalProps) => sizeMapping[props.width] || props.width};
  max-width: ${(props: IInternalProps) => sizeMapping[props.width] || props.width};
  height: 100%;
  position: absolute;
  z-index: 70;
  ${(props: IInternalProps) => (props.position === "right" ? "right: 0;" : null)};
  padding: 2.25rem 1rem 1rem 1rem;
`;

interface IProps extends IInternalProps, React.HTMLAttributes<HTMLDivElement> {
  closable?: boolean;
  onCloseClick?: (Event) => void;
}

const FlyOver = ({
  position = "left",
  width = "md",
  closable = true,
  onCloseClick,
  children,
  ...otherProps
}: IProps) => (
  <FlyOverInternal position={position} width={width} {...otherProps}>
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

export default FlyOver;
