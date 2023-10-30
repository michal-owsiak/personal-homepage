import styled from "styled-components";
import { ReactComponent as MessageIcon } from "../../../images/message.svg";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100px;
    height: 100px;
  }
`

export const Hello = styled.h2`
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 9px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 auto 6px; 
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.color.mainText};
  font-size: 29px;
  font-weight: 900;
  letter-spacing: 1.9px;
  margin: 9px auto 22px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
    margin: 0 auto 9px;
  }
`;

export const Bio = styled.p`
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 1px;
  text-align: justify;
  margin: 0 auto 26px;
  word-wrap: break-word;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    margin: 0 auto 18px;
  }
`;

export const Message = styled(MessageIcon)`
  height: 18px;
  width: 18px;
`;

export const MailLink = styled.a`
  display: inline-block;
  text-decoration: none;
`;