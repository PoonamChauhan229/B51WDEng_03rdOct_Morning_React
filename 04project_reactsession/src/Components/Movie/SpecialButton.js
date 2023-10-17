import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const SpecialButton = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <>
      {/* <button
        onClick={() => {
          setLike(like + 1);
         // console.log(like);
        }}
      >
        👍{like}
      </button>
      
      <button
        onClick={() => {
          setDisLike(dislike + 1);
        }}
      >
        👎{dislike}
      </button> */}

      {/* MUI */}
      <IconButton aria-label="add to favorites"
       onClick={() => {
        setLike(like + 1);
       // console.log(like);
      }}
      >
        <Badge badgeContent={like} color="secondary">
            <ThumbUpIcon color="success" sx={{m:0.5}}/>
            </Badge> 
        </IconButton>

        <IconButton aria-label="add to favorites"
        onClick={() => {
          setDisLike(dislike + 1);
        }}
        >
        <Badge badgeContent={dislike} color="secondary">
            <ThumbDownAltIcon color="error" sx={{m:0.5}}/>
            </Badge>        
        </IconButton>
    </>
  );
};
export default SpecialButton;
