import styled from "styled-components";
import { ReactComponent as Sun } from "../../../../../images/sun_icon.svg";
import { ReactComponent as SwitchIcon } from "../../../../../images/bg.svg";

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
`;

export const SunIcon = styled(Sun)`
`;

export const Frame = styled(SwitchIcon)`
`;

export const IconWrapper = styled.div`
  background: ${({ theme }) => theme.color.slateGray};
  border-radius: 50%;
  padding: 3px;
  margin: 3px;
  display: flex;
  position: absolute;
`;