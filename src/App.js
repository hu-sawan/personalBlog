import React, { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import { posts } from "./data/data";
import LoadPage from "./components/loadPage/LoadPage";
const Home = lazy(() => import("./pages/home/Home"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const LoginPage = lazy(() => import("./pages/loginPage/LoginPage"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Post = lazy(() => import("./pages/post/Post"));

function App() {
    /*
     * TODO:
     * work on contact section later
     * check and improve the performance of the website
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
            <Suspense fallback={<LoadPage />}>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/blog/" element={<Blog />} />
                    <Route path="/blog/addPost" element={<LoginPage />} />
                    <Route
                        path="/blog/:postId"
                        element={<Post posts={posts} />}
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
