import styled from "styled-components";

export const StyledFooter = styled.div`
  max-width: 420px;
`;

export const LetsTalk = styled.h2`
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 9px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  margin: 0 auto 18px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 auto 9px;
  }
`;

export const MailLink = styled.a`
  text-decoration: none;
`;

export const MailText = styled.p`
  color: ${({ theme }) => theme.color.mainText};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 1.6px;
  margin: 0 auto 18px;
  transition: 0.3s;

  &:hover{
    color: ${({ theme }) => theme.color.mainBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    margin: 0 auto 9px;
  }
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.color.mainText};
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  text-align: justify;
  margin-bottom: 42px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    margin-bottom: 30px;
  }
`;