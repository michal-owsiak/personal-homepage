import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  column-count: 3;
  column-gap: 16px;
`;

export const ListItem = styled.li`
  padding: 4px;
  display: block;
  &:before {
    background: ${({ theme }) => theme.color.blueElements.mainBlue};
    content: "";
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    margin-right: 16px;
  };
`;