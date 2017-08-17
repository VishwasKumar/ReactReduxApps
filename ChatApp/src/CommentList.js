import React from 'react';
import {Comment} from "./Comment";
import {addComment} from "./action";

export function CommentList(props) {
    const { comments } = props;
    return (
        <div>
            {comments.map(({ id, author, text }) => (
                <Comment id={id} author={author}>
                    {text}
                </Comment>
            ))}
            <input type='text' id="author" placeholder='Name'/>
            <input type='text' id="text" placeholder='Comment..'/>
            <button onSubmit={addComment("vishwas", "test")}>Post</button>
        </div>
    );
}