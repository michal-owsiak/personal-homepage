import styled from "styled-components";
import { ReactComponent as WarningIcon } from "../../../../../images/error_icon.svg"

export const ErrorImage = styled(WarningIcon)`
  display: flex;
  margin: 48px auto 0;
  width: 36px;
  height: 36px;

  path {
    stroke: ${({ theme }) => theme.color.mainText};
  }
`;

export const ErrorHeader = styled.h1`
  color: ${({ theme }) => theme.color.mainText};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.color.secondaryText};
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 24px auto;
  max-width: 315px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Link = styled.a`
  display: inline-block;
  text-decoration: none;
`;