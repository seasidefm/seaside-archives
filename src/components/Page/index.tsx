import React, { useMemo } from "react";
import Head from "next/head";
import {
    Box,
    createTheme,
    CssBaseline,
    ThemeProvider,
    useMediaQuery,
} from "@mui/material";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import styles from "../../../styles/Home.module.css";
import { Navbar } from "@components/Navbar";
import { UserContextProvider } from "@core/state/user";

const queryClient = new QueryClient();

export const Page = ({ children }: React.PropsWithChildren) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? "dark" : "light",
                },
            }),
        [prefersDarkMode]
    );

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <UserContextProvider>
                    <CssBaseline />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100vh",
                        }}
                    >
                        <Head>
                            <title>SeasideFM Archives</title>
                            <meta
                                name="description"
                                content="Favorites and VODs for SeasideFM"
                            />
                            <link rel="icon" href="/favicon.ico" />
                        </Head>

                        <Navbar />

                        <Box
                            component={"main"}
                            sx={{
                                flex: 1,
                            }}
                        >
                            {children}
                        </Box>

                        <footer className={styles.footer}>
                            <a
                                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Copyright 2022 SeasideFM
                            </a>
                        </footer>
                    </Box>
                </UserContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
};
