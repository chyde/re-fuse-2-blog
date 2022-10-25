import * as React from "react";
import { useState } from "react";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import cardStyle from "../utils.js";

export default function PostPrompt() {
  console.log(cardStyle);
  return (
    <Card className="blog-card" sx={cardStyle} variant="outlined">
      <TextField
        id="outlined-basic"
        label="What's on your mind?"
        variant="outlined"
        multiline
        fullWidth
      />
      <Button variant="contained" sx={{ marginY: 1, float: "right" }}>
        Post
      </Button>
    </Card>
  );
}
