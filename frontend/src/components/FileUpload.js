import React, {useRef, useState} from 'react';
import FileService from "../api/FileService";
import FileUploadForm from "./ui/form/FileUploadForm";

const FileUpload = () => {
    const [blob, setBlob] = useState(null);
    const fileRef = useRef();

    async function getNewFile(formData) {
        try {
            const response = await FileService.sendAndGetFile(formData);
            setBlob(response);
        } catch (e) {
            console.log(e);
        }
    }

    function sendFile(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("file", fileRef.current.files[0]);
        getNewFile(formData);
    }


    return (
        <div>
            <FileUploadForm ref={fileRef} blob={blob} sendClick={(e) => sendFile(e)}/>
        </div>
    );
};

export default FileUpload;