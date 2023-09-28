import Picture from "./Picture";
import Button from "./Button"
import {
  StyledHeader,
  ThisIs,
  Name,
  Bio,
  Message,
  MailLink,
} from "./styled";
import { name, bio, mail } from "../../copy";

const Header = () => (
  <StyledHeader>
    <Picture />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
      <MailLink href={`mailto:${mail}`}>
        <Button icon={<Message />} caption="Hire Me" />
      </MailLink>
    </div>
  </StyledHeader>
);

export default Header