import { useSelector } from "react-redux";
import { StyledThemeCaption } from "./styled";
import { selectIsThemeDark } from "../../../../theme/themeSlice";

const ThemeCaption = () => {
  const dark = useSelector(selectIsThemeDark);

  return (
    <StyledThemeCaption>
      Dark mode {dark ?  "on" : "off"}
    </StyledThemeCaption>
  );
};

export default ThemeCaption;
