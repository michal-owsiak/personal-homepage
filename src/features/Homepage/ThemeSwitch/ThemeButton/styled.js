import styled from "styled-components";
import { ReactComponent as Sun } from "../../../../images/sun_icon.svg";
import { ReactComponent as SwitchIcon } from "../../../../images/bg.svg";

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
`;

export const SunIcon = styled(Sun)`
  path {
    fill: ${({ theme }) => theme.color.switchIcon}
  }
`;

export const Frame = styled(SwitchIcon)`
  path {
    fill: ${({ theme }) => theme.color.switchBackground};
    stroke: ${({ theme }) => theme.color.switchBorder}
  }
`;

export const IconWrapper = styled.div`
  background: ${({ theme }) => theme.color.secondaryText};
  border-radius: 50%;
  padding: 3px;
  margin: 3px;
  display: flex;
  position: absolute;
  transition: transform 0.3s;
  transform: translateX(
    ${props => (props.dark ? "22px" : "0")}
  );
`;