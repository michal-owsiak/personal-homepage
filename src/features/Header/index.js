import Picture from "./Picture"
import {
  StyledHeader,
  Wrapper,
  ThisIs,
  Name,
  Bio,
} from "./styled"

const Header = () => (
  <StyledHeader>
    <Picture />
    <Wrapper>
      <ThisIs>This is</ThisIs>
      <Name>Michał Owsiak</Name>
      <Bio>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Commodi ipsa inventore consequuntur sint qui voluptates
        aut tempore aliquid nulla modi unde nihil, doloribus magni omnis.
      </Bio>
    </Wrapper>
  </StyledHeader>
);

export default Header