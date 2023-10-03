const colors = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    mercury: "#E5E5E5",
    athensGray: "#F1F2F4",
    slateGray: "#6E7E91",
    doveGray: "#6E6E6E",
    shipGray: "#414142",
    mineShaft: "#252525",
    heavyMetal: "#313131",
    cornflowerBlue: "#4296F8",
    haveflockBlue: "#4187D7",
    tropicalBlue: "#CDE0F7",
    dodgerBlue: "#2188FF",
    azure: "#35669E",
    scienceBlue: "#0366D6",
};

export const lightTheme = {
  color: {
    textAndLogos: {
      mainText: colors.mineShaft,
      secondaryText: colors.slateGray,
      projectTitle: colors.scienceBlue,
      buttonText: colors.white
    },
    background: {
      mainBackground: colors.whiteLilac,
      sectionBackground: colors.white,
    },
    blueElements: {
      mainBlue: colors.scienceBlue,
      linkUnderline: colors.tropicalBlue,
    },
    borders: {
      sectionBorder: colors.athensGray,
      hoverBorder: colors.tropicalBlue,
      buttonBorder: colors.haveflockBlue,
      headerDivider: colors.mercury,
    },
    themeSwitch: {
      background: colors.mercury,
      border: colors.slateGray,
      icon: colors.white,
    },
  },
  shadow: {
    buttonHover: 
      "-2px -2px 0px 0px #8CC2FF, 2px 2px 0px 0px #8CC2FF, -2px 2px 0px 0px #8CC2FF, 2px -2px 0px 0px #8CC2FF",
    buttonSelected:
      "0px 2px 0px 0px rgba(20, 70, 32, 0.20) inset",
  },
};

export const darkTheme = {
  color: {
    textAndLogos: {
      mainText: colors.white,
      secondaryText: colors.white,
      projectTitle: colors.white,
      buttonText: colors.white,
    },
    background: {
      mainBackground: colors.mineShaft,
      sectionBackground: colors.heavyMetal,
    },
    blueElements: {
      mainBlue: colors.dodgerBlue,
      linkUnderline: colors.cornflowerBlue,
    },
    borders: {
      sectionBorder: colors.shipGray,
      hoverBorder: colors.azure,
      buttonBorder: colors.cornflowerBlue,
      headerDivider: colors.mercury,
    },
    themeSwitch: {
      background: colors.doveGray,
      border: colors.white,
      icon: colors.mineShaft,
    },
  },
  shadow: {
    buttonHover:
      "-2px -2px 0px 0px #6D93BE, 2px 2px 0px 0px #6D93BE, -2px 2px 0px 0px #6D93BE, 2px -2px 0px 0px #6D93BE",
    buttonSelected:
      "0px 2px 0px 0px rgba(20, 70, 32, 0.20) inset",
  },
};