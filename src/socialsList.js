import { ReactComponent as GitHubLogo } from "./features/Footer/Socials/images/github_black.svg";
import { ReactComponent as FacebookLogo } from "./features/Footer/Socials/images/facebook_black.svg";
import { StyledLogo } from "./features/Footer/Socials/styled";

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