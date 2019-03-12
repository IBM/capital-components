import React from "react";
import Media from "react-media";
import { breakpoints } from "../../layout/mediaQueries";
import Col from "../Col";

/* istanbul ignore next */
const DropdownWrapper = props => (
  <Media query={{ maxWidth: breakpoints.s }}>
    {isMobile =>
      isMobile ? <div css="max-width: 100%;" {...props} /> : <Col size={2} {...props} />
    }
  </Media>
);

export default DropdownWrapper;
