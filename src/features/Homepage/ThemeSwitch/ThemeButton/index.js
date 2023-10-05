import { Frame, IconWrapper, SunIcon, StyledButton } from "./styled";
import { selectIsThemeDark, toggleTheme } from "../../../../theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const dark = useSelector(selectIsThemeDark);

  return (
    <StyledButton onClick={() => dispatch(toggleTheme())}>
      <Frame />
        <IconWrapper dark={dark}>
          <SunIcon />
        </IconWrapper>
    </StyledButton>
  );
};

export default ThemeButton;