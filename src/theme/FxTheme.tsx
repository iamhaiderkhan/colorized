"use client";

import * as React from "react";
import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
  useMemo
} from "react";
import { PaletteOptions, Theme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightPalette, darkPalette, FxThemeCreator } from ".";

export interface FxTheme {
  name: string;
  theme: Theme;
}

type FxThemeProvidersProps = {
  children: ReactNode;
  fxThemeDefault?: FxTheme;
};

export interface FxThemeProps {
  fxTheme: FxTheme;
  setFxTheme: Dispatch<SetStateAction<FxTheme>> | (() => {});
}

export const FxThemeContext = createContext<FxThemeProps>({} as FxThemeProps);

export interface FxThemeOptions {
  name: string;
  palette: PaletteOptions;
}

export const fxThemeOptions: FxThemeOptions[] = [
  {
    name: "light",
    palette: lightPalette
  },
  {
    name: "dark",
    palette: darkPalette
  }
];

const theme = FxThemeCreator(fxThemeOptions[0].palette, "light");

const appFxTheme = {
  name: fxThemeOptions[0].name,
  theme
};

export function FxThemeProvider({ children }: FxThemeProvidersProps) {
  const [fxTheme, setFxTheme] = useState<FxTheme>(appFxTheme);

  const value = useMemo(() =>
    ({ fxTheme, setFxTheme }), [fxTheme]);

  return (
    <FxThemeContext.Provider value={value}>
      <ThemeProvider theme={fxTheme?.theme}>{children}</ThemeProvider>
    </FxThemeContext.Provider>
  );
}
