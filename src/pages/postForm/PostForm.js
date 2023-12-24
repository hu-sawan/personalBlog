import "./postForm.css";
import React, { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import { storage } from "../../data/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import LoadPage from "../../components/loadPage/LoadPage";

// will be used as the id for the post
// declared here in order to not get updated each time the state will change
const postid = nanoid();

function PostForm() {
    const [loading, setLoading] = useState(false);

    // to handle errors more efficiently
    const [error, setError] = useState("");

    // will restructure in the backend and add time
    const [formData, setFormData] = useState({
        _id: postid,
        title: "",
        content: "",
        author: "",
        facebook: "",
        linkedin: "",
        youtube: "",
        imageUrl: "",
    });
    // used to prevent sending the data to the backend on mount since we only want to send it when
    // the image is uploaded to the storage and we get the link
    const isMounted = useRef(false);

    // send the image to the cloud storage and return the link
    const sendImageToStorage = async (field) => {
        const file = field?.files[0];

        // if no file was submitted
        if (!file) {
            setError("Image was not submitted!");
            return;
        }

        // get the file extension, type is in the form of image/png or any other type
        const typeArray = file.type.split("/");
        const fileExtentsion = typeArray[typeArray.length - 1];

        // create a reference to the storage
        const storageRef = ref(storage, `posts/${postid}.${fileExtentsion}`);

        setLoading(true);

        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);

        if (!downloadURL) {
            setError("Image was not uploaded!");
            return;
        }

        return downloadURL;
    };

    const handleImage = async (field) => {
        try {
            const downloadURL = await sendImageToStorage(field);

            if (!downloadURL) return;

            setFormData((prevData) => {
                return {
                    ...prevData,
                    imageUrl: downloadURL,
                };
            });
        } catch (e) {
            console.log(e);
        }
    };

    const sendDataToApi = async () => {
        try {
            console.log(formData);
            const res = await fetch("http://localhost:3001/api/addPost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (res.ok) console.log("post sent successfully");
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const sendData = async () => {
            await sendDataToApi();

            // only reload the page if there is no error
            if (!error) {
                window.location.reload();
            }
        };
        if (isMounted.current) {
            sendData();
        } else {
            isMounted.current = true;
        }
    }, [formData.imageUrl]);

    /**
     * problems I faced and how I solved them:
     * since the proccess of uploading the image to the storage is async I faced a weired behaviour from the setter of
     * the formData which is that that I was not able to force the handleImage function to wait for the setFormData to finish
     * updating the state and then send the data to the api because the setFormData is async and I can't use await with it
     * and because of that the api request was sent before the state was updated and the imageUrl was still empty.
     *
     * how I solved it:
     * I updated handle submit to only handle the image uploading proccess and then I created a new function called sendDataToApi
     * which I used useEffect to call it after the imageUrl is updated and then I used the isMounted ref to prevent sending the data
     * to the api on mount else it will send the data twice on the first time will be empty and the second time will be with the imageUrl.
     * */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        /**
         * I can target the index directly but this appraoch will allow changing
         * the order of the file input in the form
         * */
        for (const child of e.target)
            if (child.type === "file") await handleImage(child);

        /*
            TODO: Try to find a way to reset the form after submitting the data without the need to reload the page
            ! FIX: check if this is working
            ! it is leading to uncosistency between the id assigned to the image name in the 
            ! starage and the id assigned to the document after being sent to the database
        setFormData({
            _id: nanoid(),
            title: "",
            content: "",
            author: "",
            facebook: "",
            linkedin: "",
            youtube: "",
            imageUrl: "",
        }); */
    };

    const handleChange = (e) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <>
            {loading && <LoadPage isActive={loading} />}
            <div className="post-form-section">
                <div className="container">
                    <h2>Add Post</h2>
                    {error && <div className="alert">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <input
                            value={formData.title}
                            type="text"
                            name="title"
                            placeholder="Enter post title"
                            onChange={handleChange}
                        />
                        <input
                            value={formData.author}
                            type="text"
                            name="author"
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
