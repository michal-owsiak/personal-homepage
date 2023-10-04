import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  column-count: 3;
  column-gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
    column-count: 1;
    margin: 0;
  }
`;

export const ListItem = styled.li`
  padding: 4px;
  display: block;
  &:before {
    background: ${({ theme }) => theme.color.mainBlue};
    content: "";
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    margin-right: 16px;
  };
`;