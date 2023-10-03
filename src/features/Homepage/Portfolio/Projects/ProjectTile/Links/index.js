import {
  Wrapper,
  Title,
  Link,
} from "./styled";

const Links = ({ demoLink, codeLink }) => (
  <>
    <Wrapper>
      <Title>Demo:&nbsp;</Title>
      <Link
        href={demoLink}
        target="_blank"
        rel="noreferrer"
      >
        {demoLink}
      </Link>
    </Wrapper>
    <Wrapper>
      <Title>Code:&nbsp;</Title>
      <Link
        href={codeLink}
        target="_blank"
        rel="noreferrer"
      >
        {codeLink}
      </Link>
    </Wrapper>
  </>
);

export default Links;