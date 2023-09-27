import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 1216px;
  margin: 115px auto 0;
  display: grid;
  grid-template-columns: auto 1fr;
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

export const Button = styled.button`
  border: 1px;
  border-radius: 4px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.scienceBlue};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
`