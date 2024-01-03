import "./blog.css";
import React from "react";
import { posts } from "../../data/data";
import PostCard from "../../components/postCard/PostCard";

function Blog() {
    console.log(posts);
    return (
        <section className="blog-section">
            <div className="container">
                <h1>Featured Posts: </h1>
                {posts.length === 0 ? (
                    <p>No posts to show</p>
                ) : (
                    <div className="posts-list">
                        {posts.map((post) => (
                            <PostCard key={post._id} postInfo={post} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Blog;
