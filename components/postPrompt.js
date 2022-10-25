import * as React from "react";
import { useState } from "react";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { auth, firestore, googleAuthProvider } from "../lib/firebase";
import firebase from "firebase/compat/app";

import cardStyle from "../utils.js";

const postBlog = async (content) => {
  const res = await firestore.collection("blogs").add({
    author: "Anon Amouse",
    content: content,
    // "post-time": new firebase.firestore.Timestamp(Date()),
  });
  // Commit both docs together as a batch write.
};

export default function PostPrompt({ label, onSubmit = console.log }) {
  return (
    <Card className="blog-card" sx={cardStyle} variant="outlined">
      <form action="something" onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          label={label}
          variant="outlined"
          multiline
          fullWidth
        />
        <Button
          variant="contained"
          sx={{ marginY: 1, marginTop: 2, float: "right" }}
          onClick={() => {
            postBlog("Does this work lmao");
          }}
        >
          Post
        </Button>
      </form>
    </Card>
  );
}
