import { Link } from "react-router-dom";
import "./postCard.css";
import React from "react";

function PostCard({ postInfo }) {
    return (
        <Link to={`/blog/${postInfo.id}`}>
            <div className="post-card">
                <div className="media">
                    <div className="image">
                        <img src={postInfo.imageUrl} alt={`${postInfo.id}`} />
                    </div>
                    <div className="title">
                        <h3>{postInfo.title}</h3>
                    </div>
                </div>
                <div className="time">{postInfo.time}</div>
            </div>
        </Link>
    );
}

export default PostCard;
