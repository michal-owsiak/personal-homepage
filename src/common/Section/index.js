import {
  StyledSection,
  Title,
  Content,
} from "./styled";

const Section = ({ title, content }) => (
  <StyledSection>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </StyledSection>
);

export default Section;