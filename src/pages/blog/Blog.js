import "./blog.css";
import React from "react";
import { useState, useEffect } from "react";
import { posts } from "../../data/data";
import PostCard from "../../components/postCard/PostCard";
import LoadPage from "../../components/loadPage/LoadPage";

function Blog() {
    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         setLoading(true);

    //         const response = await fetch("http://localhost:3001/api/posts");
    //         const data = await response.json();
    //         setPosts(data);

    //         setLoading(false);
    //     };

    //     fetchPosts();
    // }, []);

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
