import {
  StyledFooter,
  LetsTalk,
  MailLink,
  MailText,
  Caption,
  Socials,
} from "./styled";

const Footer = ({ mail, text }) => (
  <StyledFooter>
    <LetsTalk>Let's talk!</LetsTalk>
    <MailLink href={`mailto:${mail}`}>
      <MailText>{mail}</MailText>
    </MailLink>
    <Caption>{text}</Caption>
    <Socials />
  </StyledFooter>
);

export default Footer;