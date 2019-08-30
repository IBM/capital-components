import { styled } from "../../support/theme";

/* istanbul ignore next */
const Breadcrumb = styled.a(
  ({ theme }) => theme.fonts.styles.bodyShort01,
  ({ theme }) => `
  color: ${theme.color.brand03};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`
);

export default Breadcrumb;
