import styled from "styled-components"

export const StyledProjectTile = styled.div`
  background: ${({ theme }) => theme.color.sectionBackground};
  border: 5px solid ${({ theme }) => theme.color.sectionBorder};
  border-radius: 4px;
  padding: 42px;
  transition: 0.3s;
  box-shadow: 
    0px 16px 58px 0px rgba(9, 10, 51, 0.03), 
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
  
  &:hover {
    border: 5px solid ${({ theme }) => theme.color.hoverBorder};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 18px;
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.color.projectTitle};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.2px;
  margin: 0;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.9px;
  margin: 18px auto;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    line-height: normal;
    margin: 12px 0;
    font-size: 12px;
  }
`;