import styled from "styled-components";

export const Image = styled.img`
  border-radius: 50%;
  width: 398px;
  height: 398px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 133px;
    height: 133px;
  }
`