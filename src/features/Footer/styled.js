import styled from "styled-components";

export const StyledFooter = styled.div`
  max-width: 670px;
  margin: 0 0 109px;
`;

export const LetsTalk = styled.h2`
  color: ${({ theme }) => theme.color.slateGray};
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
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1.6px;
  margin: 0 0 24px;
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
`;

export const Socials = styled.div`

`;