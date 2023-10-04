import Picture from "./Picture";
import Button from "../../../common/Button";
import {
  Wrapper,
  ThisIs,
  Name,
  Bio,
  Message,
  MailLink,
} from "./styled";
import { name, bio, mail } from "../../../common/copy";
import ThemeSwitch from "../ThemeSwitch";

const Header = () => (
  <>
    <ThemeSwitch />
    <Wrapper>
      <div><Picture /></div>
      <div>
        <ThisIs>This is</ThisIs>
        <Name>{name}</Name>
        <Bio>{bio}</Bio>
        <MailLink href={`mailto:${mail}`}>
          <Button icon={<Message />} caption="Hire Me" />
        </MailLink>
      </div>
    </Wrapper>
  </>
);

export default Header;