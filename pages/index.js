import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Blog from "../components/blog";
import PostPrompt from "../components/postPrompt";
import { useContext, useState } from "react";
import { useEffect } from "react";

import { firestore } from "../lib/firebase";

const getBlogs = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let barsSnapshot = await firestore.collection("blogs").get();
      resolve(barsSnapshot.docs.map((doc) => doc.data()));
    } catch (e) {
      reject([]);
    }
  });
};

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // TODO: get our data
    getBlogs().then((blogs) => {
      console.log("blogsss", blogs);
      setBlogs(blogs);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Hyde's amazing and innovative blogging platform!</title>
        <meta
          name="description"
          content="Custom React page with a simple Firebase backend to show off that I can make a webpage"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AppBar>
          <Toolbar color="primary">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Chris's Amazing Blog Platform
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <PostPrompt label="What's on your mind?" />
          {blogs.map((blog, blogIndex) => (
            <Blog blog={blog} key={blogIndex} />
          ))}
        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
