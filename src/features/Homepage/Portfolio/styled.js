import styled from "styled-components";
import { ReactComponent as Icon } from "../../../images/github.svg";

export const StyledPortfolio = styled.div`
  margin: 0 auto 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 auto 48px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GitHubIcon = styled(Icon)`
  fill: ${({ theme }) => theme.color.mainBlue};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 32px;
    height: 32px;
  }
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.color.mainText};
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin: 12px auto 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const Subheader = styled.h2`
  color: ${({ theme }) => theme.color.mainText};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 17px;
  }
`;