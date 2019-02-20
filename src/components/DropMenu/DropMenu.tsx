import { sizes as fontSizes, weights as fontWeights } from "../../layout/font";
import { styled } from "../../support/theme";

export const DropMenu: React.SFC<React.HTMLAttributes<HTMLDivElement>> = styled("div")`
  background-color: ${({ theme }) => theme.color.nav01};
  width: 300px;
  color: ${({ theme }) => theme.color.inverse01};
  font-size: ${fontSizes[1]};
  line-height: ${fontSizes[1]};
  font-weight: ${fontWeights.light};
` as any;

export default DropMenu;
