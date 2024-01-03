import "./post.css";
import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../../components/pageNotFound/PageNotFound";
import Social from "../../components/social/Social";
import ReactMarkdown from "react-markdown";

function Post({ posts }) {
    const { postId } = useParams();

    const post = posts.find((p) => p._id === postId);

    if (!post) return <PageNotFound />;

    const facebookColor = "#3b5998",
        linkedinColor = "#0077b5",
        youtubeColor = "#ff0000",
        // githubColor = "#000000",
        facebookBackgroundColor = "#3b599852",
        linkedinBackgroundColor = "#0077b552",
        youtubeBackgroundColor = "#ff000052";
    // githubBackgroundColor = "#00000052";

    return (
        <div className="container">
            <div className="post-page">
                <div className="post">
                    <div className="post-header">
                        <div className="post-image">
                            <img src={post.imageUrl} alt={post.title} />
                        </div>
                        <div className="post-social">
                            <div className="social-links">
                                {post.socialMedia.facebook && (
                                    <Social
                                        platform="facebook"
                                        link={post.socialMedia.facebook}
                                        color={facebookColor}
                                        backgroundColor={
                                            facebookBackgroundColor
                                        }
                                    />
                                )}
                                {post.socialMedia.linkedin && (
                                    <Social
                                        platform="linkedin"
                                        link={post.socialMedia.linkedin}
                                        color={linkedinColor}
                                        backgroundColor={
                                            linkedinBackgroundColor
                                        }
                                    />
                                )}
                                {post.socialMedia.youtube && (
                                    <Social
                                        platform="youtube"
                                        link={post.socialMedia.youtube}
                                        color={youtubeColor}
                                        backgroundColor={youtubeBackgroundColor}
                                    />
                                )}
                            </div>
                            <div className="post-author">{post.writer}</div>
                        </div>
                    </div>
                    <div className="post-content">
                        <h1 className="post-title">{post.title}</h1>
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                        <div className="post-info">
                            <span className="post-author">{post.writer}</span>
                            <span className="post-date">
                                {new Date(post.time).toDateString()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
