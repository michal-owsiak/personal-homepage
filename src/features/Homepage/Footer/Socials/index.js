import { socials } from "../../../../common/socialsList";
import { Wrapper } from "./styled";

const Socials = () => (
  <Wrapper>
    {socials.map(({ id, social, link, Logo }) => (
      <a
        key={id}
        href={link}
        title={social}
        target="_blank"
        rel="noreferrer"
      >
        <Logo />
      </a>
    ))}
  </Wrapper>
);

export default Socials;