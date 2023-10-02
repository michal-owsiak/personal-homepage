import { ReactComponent as GitHubLogo } from "./images/github_black.svg";
import { ReactComponent as FacebookLogo } from "./images/facebook_black.svg";
import { StyledLogo } from "./features/Footer/Socials/styled";

export const socials = [
  {
    id: 1,
    social: "GitHub",
    link: "https://github.com/michal-owsiak",
    Logo: StyledLogo(GitHubLogo),
  },
  {
    id: 2,
    social: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100079979666771",
    Logo: StyledLogo(FacebookLogo),
  },
];