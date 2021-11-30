import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div>
    My posts
    <div>
      <textarea></textarea>
      <button>Add Post</button>
    </div>
    <div className={s.posts}>
      <Post message='Hi, how are you?' likeCount='2' />
      <Post message="It's my first post!" likeCount='4' />
      <Post message='Hi!' likeCount='1' />
    </div>
  </div>
}

export default MyPosts;