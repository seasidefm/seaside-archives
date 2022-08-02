import { Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Head>
        <title>SeasideFM Archives</title>
        <meta name="description" content="Favorites and VODs for SeasideFM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        component={"main"}
        sx={{
          flex: 1,
        }}
      >
        Hello
      </Box>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Box>
  );
};

export default Home;
