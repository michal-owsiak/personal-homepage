import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  gap: 16px;
  border: 1px;
  border-radius: 4px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.scienceBlue};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    box-shadow: 
      -2px -2px 0px 0px #8CC2FF, 
      2px 2px 0px 0px #8CC2FF, 
      -2px 2px 0px 0px #8CC2FF, 
      2px -2px 0px 0px #8CC2FF;
  }

  &:active {
    box-shadow: 0px 2px 0px 0px rgba(20, 70, 32, 0.20) inset;
  } 
`