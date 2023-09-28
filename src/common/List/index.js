import { StyledList, ListItem } from "./styled";

const List = ({ content }) => (
  <StyledList>
    {content.map((item) => (
      <ListItem key={item}>
        {item}
      </ListItem>
    ))}
  </StyledList>
);
export default List;