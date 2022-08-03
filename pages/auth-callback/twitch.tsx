import { Page } from "@components/Page";
import { TwitchAuthCallback } from "@pages/AuthCallback/twitch";
import { NextPage } from "next";
import React from "react";

const TwitchAuthCallbackPage: NextPage = () => {
    return (
        <Page>
            <TwitchAuthCallback />
        </Page>
    );
};

export default TwitchAuthCallbackPage;
