import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  gap: 9px;
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};
  border-radius: 4px;
  padding: 9px 12px;
  color: ${({ theme }) => theme.color.buttonText};
  background: ${({ theme }) => theme.color.mainBlue};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.2;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.buttonHover};
  }

  &:active {
    box-shadow: ${({ theme }) => theme.shadow.buttonSelected};
  } 
`