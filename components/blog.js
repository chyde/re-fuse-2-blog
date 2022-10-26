import * as React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import cardStyle from "../utils.js";
import Likes from "./likes";

export default function Blog({ blog, key }) {
  const PostDatetime = blog["post-time"]?.toDate
    ? blog["post-time"].toDate().toString()
    : "No date";
  return (
    <Card key={key} className="blog-card" sx={cardStyle} variant="outlined">
      <Box sx={{ fontSize: "small", marginY: 1 }}>
        <Typography variant="h5">{blog.author}</Typography>
        <Typography variant="p">{PostDatetime}</Typography>
      </Box>

      <Typography variant="p" sx={{ flexGrow: 1, paddingY: 1 }}>
        {blog.content}
      </Typography>
      <Box sx={{ fontSize: "small", marginY: 1 }}>
        <Likes count={2} />
      </Box>
    </Card>
  );
}
