import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  column-count: 3;
  padding: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    column-count: 1;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) and 
    (max-width: ${({ theme }) => theme.breakpoints.smallScreen}) {
      column-count: 2;
    }
`;

export const ListItem = styled.li`
  padding: 3px;
  display: block;
  line-height: 1.4;
  font-size: 13px;
  &:before {
    background: ${({ theme }) => theme.color.mainBlue};
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-right: 12px;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;