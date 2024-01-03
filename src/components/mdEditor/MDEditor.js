import React, { useMemo, useState } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

// TODO: implement
const customMarkdownParser = () => {
    return "<strong>Currently working on this</strong>";
};

// I used react-simplemde which is very eazy to use but the docs is not clear so I had to use other resources
// to know how things work :)
function MDEditor({ id, onChange, value }) {
    const options = useMemo(() => {
        return {
            showIcons: ["code"],
            hideIcons: ["quote", "fullscreen", "image", "side-by-side"],

            previewRender: (plainText) => customMarkdownParser(plainText),
        };
    }, []);

    return (
        <>
            <SimpleMdeReact
                id={id}
                value={value}
                onChange={onChange}
                options={options}
            />
        </>
    );
}

export default MDEditor;
