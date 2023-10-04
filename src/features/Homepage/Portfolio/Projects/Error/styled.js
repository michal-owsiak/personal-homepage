import styled from "styled-components";
import { ReactComponent as WarningIcon } from "../../../../../images/error_icon.svg"

export const ErrorImage = styled(WarningIcon)`
  display: flex;
  margin: 64px auto 0;
  width: 48px;
  height: 48px;

  path {
    stroke: ${({ theme }) => theme.color.mainText};
  }
`;

export const ErrorHeader = styled.h1`
  color: ${({ theme }) => theme.color.mainText};
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.color.secondaryText};
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 32px auto;
  max-width: 420px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Link = styled.a`
  display: inline-block;
  text-decoration: none;
`;