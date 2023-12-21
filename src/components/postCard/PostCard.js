import { Link } from "react-router-dom";
import "./postCard.css";
import React from "react";

function PostCard({ postInfo }) {
    const dateObj = new Date(postInfo.time);

    const formattedDate = dateObj.toLocaleString("en-US");

    return (
        <Link to={`/blog/${postInfo._id}`}>
            <div className="post-card">
                <div className="media">
                    <div className="image">
                        <img src={postInfo.imageUrl} alt={`${postInfo._id}`} />
                    </div>
                    <div className="title">
                        <h3>{postInfo.title}</h3>
                    </div>
                </div>
                <div className="time">{formattedDate}</div>
            </div>
        </Link>
    );
}

export default PostCard;
