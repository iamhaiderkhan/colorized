"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {
  useTheme,
  useMediaQuery,
  ToggleButtonGroup,
  ToggleButton
} from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeToggle } from "@/hooks/use-theme-toggle";

export const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { selectedTheme, themeToggle } = useThemeToggle();

  const activeLightTheme = () => themeToggle(0);
  const activeDarkTheme = () => themeToggle(1);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isMobile ? "space-around" : "space-between",
        alignItems: "center",
        py: 2,
        gap: isMobile ? 1 : 2,
        position: isMobile ? "sticky" : undefined,
        backgroundColor: theme.palette.background.default,
        zIndex: 1000,
        top: isMobile ? 0 : undefined
      }}
    >
      <Box>
        <Typography variant="h6" fontWeight="bold">
          Nextjs-Typescript-MUI-Redux-Toolkit-Template
        </Typography>
        <Divider orientation="horizontal" flexItem />
        <Typography variant="caption">
          Setup Nextjs, MUI, Redux-Toolkit, ESLint, Prettier, and Husky with
          Typescript
        </Typography>
      </Box>
      <Box>
        {isMobile ? (
          <ToggleButtonGroup size="small">
            {selectedTheme.name === "light" ? (
              <ToggleButton value={0} onClick={activeDarkTheme}>
                <LightModeIcon />
              </ToggleButton>
            ) : null}

            {selectedTheme.name === "dark" ? (
              <ToggleButton value={1} onClick={activeLightTheme}>
                <DarkModeIcon />
              </ToggleButton>
            ) : null}
          </ToggleButtonGroup>
        ) : (
          <ToggleButtonGroup size="small">
            <ToggleButton
              disabled={selectedTheme.name === "light"}
              value={0}
              onClick={activeLightTheme}
            >
              <LightModeIcon />
            </ToggleButton>
            <ToggleButton
              disabled={selectedTheme.name === "dark"}
              value={1}
              onClick={activeDarkTheme}
            >
              <DarkModeIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        )}
      </Box>
    </Box>
  );
};
