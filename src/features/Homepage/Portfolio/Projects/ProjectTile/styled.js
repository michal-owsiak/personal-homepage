import styled from "styled-components"

export const StyledProjectTile = styled.div`
  background: ${({ theme }) => theme.color.background.sectionBackground};
  border: 6px solid ${({ theme }) => theme.color.borders.sectionBorder};
  border-radius: 4px;
  padding: 56px;
  transition: 0.3s;
  box-shadow: 
    0px 16px 58px 0px rgba(9, 10, 51, 0.03), 
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
  
  &:hover {
    border: 6px solid ${({ theme }) => theme.color.borders.hoverBorder};
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.color.textAndLogos.projectTitle};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.textAndLogos.secondaryText};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 24px auto;
`;