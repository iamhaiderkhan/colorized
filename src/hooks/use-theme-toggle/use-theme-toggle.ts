import * as React from "react";
import { FxThemeContext, fxThemeOptions } from "@/theme/FxTheme";
import { FxThemeCreator } from "@/theme";

export const useThemeToggle = () => {
  const { fxTheme, setFxTheme } = React.useContext(FxThemeContext);
  const handlerSetFxThemeMode = (mode: number) => {
    setFxTheme({
      name: fxThemeOptions[mode].name,
      theme: FxThemeCreator(
        fxThemeOptions[mode].palette,
        mode ? "dark" : "light"
      )
    });
  };
  return {
    themeToggle: handlerSetFxThemeMode,
    selectedTheme: fxTheme,
    setTheme: setFxTheme
  };
};
