import { StyledButton } from "./styled"

const Button = ({ icon, caption }) => (
  <StyledButton>
    {icon} {caption}
  </StyledButton>
);

export default Button;