import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px 115px;
`;

export const ListItem = styled.li`
  &:before {
    background: ${({ theme }) => theme.color.scienceBlue};
    content: "";
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    margin-right: 16px;
  };
`;