import styled from "styled-components";

export const StyledFooter = styled.div`
  max-width: 670px;
`;

export const LetsTalk = styled.h2`
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  margin: 0 0 24px;
`;

export const MailLink = styled.a`
  text-decoration: none;
`;

export const MailText = styled.p`
  color: ${({ theme }) => theme.color.mainText};
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1.6px;
  margin: 0 0 24px;
  transition: 0.4s;

  &:hover{
    color: ${({ theme }) => theme.color.mainBlue};
  }
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.color.mainText};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin-bottom: 56px;
`;