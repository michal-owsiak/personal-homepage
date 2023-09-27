import Picture from "./Picture";
import { name, bio } from "../copy";
import {
  StyledHeader,
  Wrapper,
  ThisIs,
  Name,
  Bio,
  Button,
} from "./styled";

const Header = () => (
  <StyledHeader>
    <Picture />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
      <Button>Hire Me</Button>
    </div>
  </StyledHeader>
);

export default Header