import styled from "styled-components";
import { ReactComponent as Icon } from "../../../images/github.svg";

export const StyledPortfolio = styled.div`
  margin: 0 auto 90px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 auto 36px;
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
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 24px;
    height: 24px;
  }
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.color.mainText};
  font-size: 23px;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin: 9px auto 6px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Subheader = styled.h2`
  color: ${({ theme }) => theme.color.mainText};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;
  margin: 0 0 18px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;