import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  gap: 16px;
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};
  border-radius: 4px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.color.buttonText};
  background: ${({ theme }) => theme.color.mainBlue};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.buttonHover};
  }

  &:active {
    box-shadow: ${({ theme }) => theme.shadow.buttonSelected};
  } 
`