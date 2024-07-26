"use client";

import { JetBrains_Mono as JBMono } from "next/font/google";
import {
  createTheme,
  responsiveFontSizes,
  PaletteOptions
} from "@mui/material/styles";

const inter = JBMono({ subsets: ["latin"] });

export const lightPalette = {
  background: {
    default: "#f7f7f7"
  },
  text: {
    primary: "#2b3d4f",
    secondary: "#496a88"
  },
  primary: {
    main: "#2b3d4f",
    contrastText: "#f7f7f7",
    light: "#c5c9c7",
    dark: "#496a88"
  },
  secondary: {
    main: "#496a88",
    contrastText: "#f7f7f7",
    light: "#c5c9c7",
    dark: "#496a88"
  }
};

export const darkPalette = {
  background: {
    default: "#2b3d4f"
  },
  text: {
    primary: "#f7f7f7",
    secondary: "#f7f7f7"
  },
  primary: {
    main: "#c5c9c7",
    contrastText: "#2b3d4f",
    light: "#f7f7f7",
    dark: "#99a4a8"
  },
  secondary: {
    main: "#c5c9c7",
    contrastText: "#2b3d4f",
    light: "#f7f7f7",
    dark: "#f7f7f7"
  }
};

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      ...darkPalette
    },
    typography: {
      fontFamily: inter.style.fontFamily
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "24px"
          }
        }
      }
    }
  })
);

export const FxThemeCreator = (
  options: PaletteOptions,
  mode: "light" | "dark"
) =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        ...options
      },
      typography: {
        fontFamily: inter.style.fontFamily
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
              borderRadius: "24px"
            }
          }
        }
      }
    })
  );

export default theme;
