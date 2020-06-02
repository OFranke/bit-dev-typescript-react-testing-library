import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { theme as chakraTheme, ITheme } from "@chakra-ui/core";

// we need to define the ITheme type here because otherwise bit build will fail
// for more info check https://stackoverflow.com/questions/43900035/ts4023-exported-variable-x-has-or-is-using-name-y-from-external-module-but
const theme: ITheme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
  },
  icons: {
    ...chakraTheme.icons,
  },
};


export const ThemeWrapper: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
};
