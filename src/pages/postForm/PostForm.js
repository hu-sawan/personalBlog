import "./postForm.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { storage } from "../../data/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import LoadPage from "../../components/loadPage/LoadPage";

const postid = nanoid();

function PostForm() {
    const [loading, setLoading] = useState(false);
    // will restructure in the backend and add time
    const [formData, setFormData] = useState({
        _id: postid,
        title: "",
        content: "",
        writer: "",
        facebook: "",
        linkedin: "",
        youtube: "",
        imageUrl: "",
    });

    const sendImageToStorage = async (field) => {
        const file = field?.files[0];

        if (!file) {
            throw new Error("Image was not submitted!");
        }

        const typeArray = file.type.split("/");
        const fileExtentsion = typeArray[typeArray.length - 1];

        const storageRef = ref(storage, `posts/${postid}.${fileExtentsion}`);

        setLoading(true);
        console.log("loading set true");
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);

        if (!downloadURL) throw new Error("Image was not uploaded!");

        // .then(async (snapshot) => {
        //     // important to get the downloadURL after the upload to store it in the db
        //     console.log("entring getDownloadURL");
        //     await getDownloadURL(snapshot.ref).then((downloadURL) => {
        //         console.log("downloadURL", downloadURL);
        //         setFormData((prevData) => {
        //             return { ...prevData, imageUrl: downloadURL };
        //         });
        //     });
        // })
        // .catch((error) => {
        //     console.log("error thrown");
        //     throw error;
        // });
        console.log("image sent successfully from image function");
        setLoading(false);
        return downloadURL;
    };

    const sendDataToApi = async (formData) => {
        try {
            const res = await fetch("http://localhost:3001/api/addPost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (res.ok) window.alert("post sent successfully");
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (e) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value,
            };
        });
    };

    // after submitting the form add image to cloud storage to get the link and send the final data to
    // the backend
    // TODO: handle errors
    const handleSubmit = async (e) => {
        e.preventDefault();
        // search for the file input
        /*
         * I can target the index directly but this appraoch will allow changing
         * the order of the file input in the form
         * */
        let imageUrl;
        for (const child of e.target)
            if (child.type === "file")
                imageUrl = await sendImageToStorage(child);
        // Asynchronous problems try to solve
        console.log(imageUrl);

        setFormData((prevData) => {
            console.log("setting image url");
            return { ...prevData, imageUrl: imageUrl };
        });

        console.log("image sent successfully", formData);

        await sendDataToApi(formData);

        // FIX: temporarly
        // window.location.reload();

        /* 
            ! FIX: check if this is working
            ! it is leading to uncosistency between the id assigned to the image name in the 
            ! starage and the id assigned to the document after being sent to the database
        setFormData({
            _id: nanoid(),
            title: "",
            content: "",
            writer: "",
            facebook: "",
            linkedin: "",
            youtube: "",
            imageUrl: "",
        }); */
    };

    return (
        <>
            {loading && <LoadPage isActive={loading} />}
            <div className="post-form-section">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <input
                            value={formData.title}
                            type="text"
                            name="title"
                            placeholder="Enter post title"
                            onChange={handleChange}
                        />
                        <input
                            value={formData.writer}
                            type="text"
                            name="writer"
                            placeholder="Enter your name"
                            onChange={handleChange}
                        />
                        <input
                            value={formData.facebook}
                            type="text"
                            name="facebook"
                            placeholder="Enter facebook url"
                            onChange={handleChange}
                        />
                        <input
                            value={formData.linkedin}
                            type="text"
                            name="linkedin"
                            placeholder="Enter linkedin url"
                            onChange={handleChange}
                        />
                        <input
                            value={formData.youtube}
                            type="text"
                            name="youtube"
                            placeholder="Enter youtube url"
                            onChange={handleChange}
                        />
                        <textarea
                            name="content"
                            placeholder="enter post content"
                            onChange={handleChange}
                            value={formData.content}
                        />
                        <input type="file" required={true} />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default PostForm;
