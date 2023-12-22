import "./loginPage.css";
import React, { useEffect, useState } from "react";
import PostForm from "../postForm/PostForm";
import { auth } from "../../data/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function LoginPage() {
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );
        } catch {
            setError("Failed to log in");
        }

        setLoading(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setError("");
        }, 4000);
    }, [error]);

    if (currentUser) return <PostForm />;

    return (
        <div className="login-section container">
            <div className="form-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={`alert ${error ? "show" : null}`}>
                        {error}
                    </div>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                    />
                    <input
                        type="submit"
                        className="submit-btn"
                        disabled={loading}
                    />
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
