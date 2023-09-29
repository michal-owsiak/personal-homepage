import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const StyledLogo = (Logo) => styled(Logo)`
  width: 48px;
  height: 48px;
  transition: 0.4s;

  &:hover {
    fill: ${({ theme }) => theme.color.scienceBlue};
  }
`;