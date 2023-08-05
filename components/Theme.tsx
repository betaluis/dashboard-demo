"use client"
import React, { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import Header from "./Header/Header";

const ColorModeContext = React.createContext({toggleColorMode: () => {}})

const Theme = ({ children }: { children: ReactNode }) => {

        const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
        const colorMode = React.useMemo(
            () => ({
                toggleColorMode: () => {
                    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
                },
            }),
            [],
        );

        const lightModeChosen = React.useMemo(
            () =>
                createTheme({
                    ...lightTheme
                }),
            [],
        );
        const darkModeChosen = React.useMemo(
            () =>
                createTheme({
                    ...darkTheme
                }),
            [],
        );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={mode === "dark" ? darkModeChosen : lightModeChosen}>
                <Header ColorModeContext={ColorModeContext}/>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default Theme
