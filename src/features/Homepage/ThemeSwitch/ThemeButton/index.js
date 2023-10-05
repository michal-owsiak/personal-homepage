import { Frame, IconWrapper, SunIcon, StyledButton } from "./styled";
import { selectIsThemeDark, toggleTheme } from "../../../../theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(selectIsThemeDark);

  return (
    <StyledButton onClick={() => dispatch(toggleTheme())}>
      <Frame />
        <IconWrapper dark={darkTheme}>
          <SunIcon />
        </IconWrapper>
    </StyledButton>
  );
};

export default ThemeButton;