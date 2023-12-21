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
     * The main purpose of this website is to learn the following:
     * - How to use React and get known to it
     * - I had built a backend server using node and this helped me alot to learn how to
     *   handle data betweeen front and backend using apis
     * - I learnt how to use firebase
     * - In addition to that I learnt how to use mongoDB
     * - And also refreshed my memory on js and learnt some best practices
     **/
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
