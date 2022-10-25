import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function Likes({ count = 0, onClick = () => {} }) {
  const [currentUserLiked, setCurrentUserLike] = useState(false);

  return (
    <Button
      variant="text"
      onClick={() => {
        const likeState = !currentUserLiked;
        setCurrentUserLike(likeState);
        onClick(likeState);
      }}
    >
      {currentUserLiked ? (
        <FavoriteIcon fontSize="small" sx={{ color: "red" }} />
      ) : (
        <FavoriteBorderOutlinedIcon fontSize="small" sx={{ color: "red" }} />
      )}
      <Typography sx={{ marginLeft: 1 }}>{count + currentUserLiked}</Typography>
    </Button>
  );
}
