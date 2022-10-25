import * as React from "react";
import { useState } from "react";

import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import cardStyle from "../utils.js";

export default function Blog({ blog, key }) {
  return (
    <Card key={key} className="blog-card" sx={cardStyle} variant="outlined">
      <Typography variant="h5">My blog {blog.name}</Typography>
      <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
        {blog.content}
      </Typography>
    </Card>
  );
}
