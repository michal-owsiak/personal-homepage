import portrait from "../../../images/portrait.jpg"
import Button from "../../../common/Button";
import {
  Wrapper,
  Image,
  Hello,
  Name,
  Bio,
  Message,
  MailLink,
} from "./styled";
import { name, bio, mail } from "../../../common/data";
import ThemeSwitch from "../ThemeSwitch";

const Header = () => (
  <>
    <ThemeSwitch />
    <Wrapper>
      <div>
        <Image src={portrait} alt="Portrait" />
      </div>
      <div>
        <Hello>Hello, I'm</Hello>
        <Name>{name}</Name>
        <Bio>{bio}</Bio>
        <MailLink href={`mailto:${mail}`}>
          <Button icon={<Message />} caption="Mail Me" />
        </MailLink>
      </div>
    </Wrapper>
  </>
);

export default Header;