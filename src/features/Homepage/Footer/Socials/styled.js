import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 18px;
`;

export const StyledLogo = (Logo) => styled(Logo)`
  fill: ${({ theme }) => theme.color.mainText};
  width: 36px;
  height: 36px;
  transition: 0.3s;

  &:hover {
    fill: ${({ theme }) => theme.color.mainBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 24px;
    height: 24px;
  }
`;