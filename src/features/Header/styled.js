import styled from "styled-components";
import { ReactComponent as MessageIcon } from "../../images/message.svg";

export const StyledHeader = styled.header`
  margin: 115px auto 0;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
`;

export const ThisIs = styled.h2`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 1.9px;
  margin: 12px auto 35px;
`;

export const Bio = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
  margin: 0 auto 32px;
  word-wrap: break-word;
`;

export const Message = styled(MessageIcon)`
  height: 24px;
  width: 24px;
`;

export const MailLink = styled.a`
  display: inline-block;
  text-decoration: none;
`;