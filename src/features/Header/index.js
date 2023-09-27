import Picture from "./Picture";
import Button from "./Button"
import {
  StyledHeader,
  ThisIs,
  Name,
  Bio,
  Message,
} from "./styled";
import { name, bio } from "../copy";

const Header = () => (
  <StyledHeader>
    <Picture />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
      <Button 
        icon={<Message />}
        caption={"Hire Me"} />
    </div>
  </StyledHeader>
);

export default Header