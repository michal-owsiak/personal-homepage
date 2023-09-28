import { ReactComponent as GitHubLogo } from "./images/github_black.svg";
import { ReactComponent as FacebookLogo } from "./images/facebook_black.svg";
import { StyledLogo } from "./styled";

export const socials = [
  {
    social: "GitHub",
    link: "https://github.com/michal-owsiak",
    Logo: StyledLogo(GitHubLogo),
  },
  {
    social: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100079979666771",
    Logo: StyledLogo(FacebookLogo),
  },
];