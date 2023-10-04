import { useSelector } from "react-redux";
import { StyledThemeCaption } from "./styled";
import { selectIsThemeDark } from "../../../../themes/themeSlice";

const ThemeCaption = () => {
  const darkTheme = useSelector(selectIsThemeDark);

  return (
    <StyledThemeCaption>
      Dark mode {darkTheme ?  "on" : "off"}
    </StyledThemeCaption>
  );
};

export default ThemeCaption;
