import {
  StyledSection,
  Header,
  Title,
  Content,
} from "./styled";

const Section = ({title, content}) => (
  <StyledSection>
    <Header>
      <Title>{title}</Title>
    </Header>
    <Content>{content}</Content>
  </StyledSection>
);

export default Section;