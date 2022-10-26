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

const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

const postBlog = async (content) => {
  const res = await firestore.collection("blogs").add({
    author: "Anon Amouse",
    content: content ? content : "No content :(",
    "post-time": serverTimestamp(),
  });
  // Commit both docs together as a batch write.
};

export default function PostPrompt({ label, onSubmit = console.log }) {
  const [blogContent, setBlogContent] = useState("");

  return (
    <Card className="blog-card" sx={cardStyle} variant="outlined">
      <form action="something" onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          label={label}
          variant="outlined"
          onChange={(textField) => {
            setBlogContent(textField.target.value);
          }}
          value={blogContent}
          multiline
          fullWidth
        />
        <Button
          variant="contained"
          sx={{ marginY: 1, marginTop: 2, float: "right" }}
          onClick={() => {
            return new Promise(async (resolve, reject) => {
              resolve(await postBlog(blogContent));
              // resolve();
            }).then(() => {
              onSubmit(blogContent); // TODO: Is this a race condition?
              setBlogContent("");
            });
          }}
        >
          Post
        </Button>
      </form>
    </Card>
  );
}
