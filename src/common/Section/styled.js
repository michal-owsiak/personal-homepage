import styled from "styled-components";

export const StyledSection = styled.div`
  background: ${({theme}) => theme.color.sectionBackground};
  box-shadow: 0px 16px 58px rgba(8.71, 10.40, 51, 0.03);
  margin: 47px auto 54px;
  padding: 24px;
  border-radius: 4px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 12px;
    margin: 36px auto 38px;
  }
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.color.mainText};
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin: 0 auto 24px;
  padding-bottom: 11px;
  border-bottom: 1px solid ${({theme}) => theme.color.headerDivider};
  word-wrap: break-word;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    padding-bottom: 9px;
    margin: 0 auto 9px;
  }
`;

export const Content = styled.div`
  color: ${({theme}) => theme.color.secondaryText};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  word-wrap: break-word;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 11px;
    letter-spacing: 0.7px;
    line-height: normal;
  }
`;