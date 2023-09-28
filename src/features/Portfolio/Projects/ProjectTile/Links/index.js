import { 
  Wrapper,
  Title,
  Link,
} from "./styled";

const Links = ({ demoLink, codeLink }) => (
  <>
    <Wrapper>
      <Title>Demo:&nbsp;</Title>
      <Link>{demoLink}</Link>
    </Wrapper>
    <Wrapper>
      <Title>Code:&nbsp;</Title>
      <Link>{codeLink}</Link>
    </Wrapper>
  </>
);

export default Links;