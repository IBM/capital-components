import { weights as fontWeights } from "../../layout/font";
import { styled } from "../../support/theme";

export const DropMenu: React.SFC<React.HTMLAttributes<HTMLDivElement>> = styled("div")`
  background-color: ${({ theme }) => theme.color.ui05};
  width: 300px;
  color: ${({ theme }) => theme.color.inverse01};

  font-weight: ${fontWeights.light};
` as any;

export default DropMenu;
