import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 1216px;
  margin: 115px auto 0;
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const Wrapper = styled.div`
  padding-left: 66px;
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
  margin: 0;
  word-wrap: break-word;
`;