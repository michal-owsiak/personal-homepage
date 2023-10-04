import styled from "styled-components";

export const StyledThemeCaption = styled.div`
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
`;