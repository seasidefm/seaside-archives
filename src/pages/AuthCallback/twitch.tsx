import { getApiHost } from "@core/http";
import { useUser } from "@core/state/user";
import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { AuthTypeIdentifier } from "./shared-types";

interface TwitchOAuthParams {
    code: string;
    scope: string;
    state: string;
}

export const TwitchAuthCallback: React.FC = () => {
    const { query } = useRouter();
    const { setUser } = useUser();
    const data = query as unknown as TwitchOAuthParams;

    useQuery(
        ["twitch-auth"],
        async () => {
            const payload: TwitchOAuthParams & AuthTypeIdentifier = {
                auth_type: "twitch",
                ...data,
            };
            return await fetch(`${getApiHost()}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }).then((res) => res.json());
        },
        {
            onSettled(data, error) {
                if (error) {
                    console.error(error);
                }

                if (data) {
                    setUser(data);
                }
            },
        }
    );

    return (
        <Box>
            <CircularProgress />
        </Box>
    );
};
