import { socials } from "../../../socialsList";
import { Wrapper } from "./styled";

const Socials = () => (
  <Wrapper>
    {socials.map(({ social, link, Logo }) => (
      <a
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