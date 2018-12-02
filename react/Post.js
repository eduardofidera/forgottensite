import React from 'react';

const Post = (props) => (
    <div className="post">
        <h1>{props.post.title}</h1>
        <p>{props.post.content}</p>
    </div>
);

export default Post;