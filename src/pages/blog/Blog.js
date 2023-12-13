import "./blog.css";
import React from "react";
import { posts } from "../../data/posts";
import PostCard from "../../components/postCard/PostCard";
function Blog() {
    return (
        <section className="blog-section">
            <div className="container">
                <h1>Featured Posts: </h1>
                <div className="posts-list">
                    {posts.map((post) => (
                        <PostCard postInfo={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;
