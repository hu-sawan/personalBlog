import "./post.css";
import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../../components/pageNotFound/PageNotFound";

function Post({ posts }) {
    const { postId } = useParams();

    const post = posts.find((p) => p.id == postId);

    if (!post) return <PageNotFound />;

    return (
        <div className="post-page">
            <div>{post.title}</div>
            <div>{post.content}</div>
        </div>
    );
}

export default Post;
