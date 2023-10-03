import styled from "styled-components"

export const StyledProjectTile = styled.div`
  background: ${({ theme }) => theme.color.white};
  border: 6px solid ${({ theme }) => theme.color.athensGray};
  border-radius: 4px;
  padding: 56px;
  box-shadow: 
    0px 16px 58px 0px rgba(9, 10, 51, 0.03), 
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.color.scienceBlue};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 24px auto;
`;