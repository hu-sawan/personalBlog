import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Post from "./pages/post/Post";
import PostForm from "./pages/postForm/PostForm";
import { posts } from "./data/data";

function App() {
    return (
        <BrowserRouter basename="/personalBlog">
            <Nav />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/blog/" element={<Blog />} />
                <Route path="/blog/:postId" element={<Post posts={posts} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
