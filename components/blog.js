import * as React from "react";
import { useState } from "react";

import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import cardStyle from "../utils.js";

export default function Blog() {
  return (
    <Card className="blog-card" sx={cardStyle} variant="outlined">
      <Typography variant="h5">My blog</Typography>
      <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
    </Card>
  );
}
