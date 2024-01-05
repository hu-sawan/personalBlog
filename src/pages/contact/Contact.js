import "./contact.css";
import React, { useState, useRef, useEffect } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    let nameRef = useRef(null);

    const handleChange = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.id]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        // TODO: handle submit logic
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    return (
        <section className="contact-section">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h1 className="contact-title">Contact</h1>
                <p>Enter your details and I will contact you directly</p>
                <input
                    ref={nameRef}
                    onchange={handleChange}
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Name"
                />
                <input
                    onchange={handleChange}
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Email"
                />
                <textarea
                    onchange={handleChange}
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Message"
                ></textarea>
                <input type="submit" value="Send" className="btn" />
            </form>
        </section>
    );
}

export default Contact;
