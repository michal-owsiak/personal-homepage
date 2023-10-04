import styled from "styled-components";

export const StyledProjects = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;