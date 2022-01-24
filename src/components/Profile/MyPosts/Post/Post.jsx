import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://cdn.fishki.net/upload/post/2017/08/31/2369705/85d34bc647863504e68a16322fa2b68e.jpg' />
      { props.message }
      <div>
        <span>
          👍{ props.likesCount }
        </span>
      </div>
    </div>
  )
}

export default Post;