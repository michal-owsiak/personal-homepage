import styled from "styled-components";
import { ReactComponent as MessageIcon } from "../../../images/message.svg";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 66px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 398px;
  height: 398px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 133px;
    height: 133px;
  }
`

export const ThisIs = styled.h2`
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 auto 8px; 
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.color.mainText};
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 1.9px;
  margin: 12px auto 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 22px;
    margin: 0 auto 12px;
  }
`;

export const Bio = styled.p`
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
  margin: 0 auto 32px;
  word-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 17px;
    margin: 0 auto 24px;
  }
`;

export const Message = styled(MessageIcon)`
  height: 24px;
  width: 24px;
`;

export const MailLink = styled.a`
  display: inline-block;
  text-decoration: none;
`;