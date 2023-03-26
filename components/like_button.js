import { useState } from 'react';

function LikeButton({ likes, setLikes }) {
  function handleLikeBtnClick() {
    setLikes(++likes);
  }

  return (
    <button onClick={handleLikeBtnClick}>Like ({likes})</button>
  );
}

export default LikeButton
