import { useState } from "react";

const SpecialButton = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setLike(like + 1);
          console.log(like);
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
      </button>
    </>
  );
};
export default SpecialButton;
