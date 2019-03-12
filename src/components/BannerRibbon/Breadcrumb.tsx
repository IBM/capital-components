import { styled } from "../../support/theme";

/* istanbul ignore next */
const Breadcrumb = styled.a`
  ${({ theme }) => theme.fonts.styles.body};
  color: ${({ theme }) => theme.color.brand03};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default Breadcrumb;
