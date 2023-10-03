import { Frame, IconWrapper, SunIcon, StyledButton } from "./styled";
import { selectIsThemeDark, switchDarkTheme, switchLightTheme } from "../../../../../themeSlice";
import { useDispatch, useSelector } from "react-redux";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(selectIsThemeDark);

  const toggleTheme = () => {
    darkTheme ?
      dispatch(switchLightTheme()) : dispatch(switchDarkTheme());
  };

  return (
    <StyledButton onClick={toggleTheme}>
      <Frame />
      <IconWrapper dark={darkTheme}>
        <SunIcon />
      </IconWrapper>
    </StyledButton>
  );
};

export default ThemeButton;