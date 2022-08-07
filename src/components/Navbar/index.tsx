import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const TWITCH_REDIRECT = process.env.NEXT_PUBLIC_TWITCH_REDIRECT_URI;

export const Navbar: React.FC = () => {
    return (
        <AppBar variant="elevation">
            <Toolbar>
                <a href={TWITCH_REDIRECT}>Login with Twitch</a>
            </Toolbar>
        </AppBar>
    );
};
