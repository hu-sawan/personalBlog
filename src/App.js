import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
// import Contact from "./pages/contact/Contact";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Post from "./pages/post/Post";
import { posts } from "./data/data";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
    /*
     * TODO:
     * work on contact section later
     * style the posts page
     * */

    /*
     * The main purpose of this website is to learn while building it, what I learnt:
     * - How to use react hooks
     * - How to use react-router
     * - How to deal with data properly and I learnt some backend technologies like node and express
     * - How to properly send and receive data from the backend using api calls
     * - I learnt how to use firebase and how to handle authentication
     * - I learnt how to use cloud storage and how to upload files to it
     * - I learnt how to use mongodb and how to connect it to the backend
     * - I learnt some best practices in web development
     * */
    return (
        <BrowserRouter basename="/personalBlog">
            <Nav />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/blog/" element={<Blog />} />
                <Route path="/blog/addPost" element={<LoginPage />} />
                <Route path="/blog/:postId" element={<Post posts={posts} />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
