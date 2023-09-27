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
`