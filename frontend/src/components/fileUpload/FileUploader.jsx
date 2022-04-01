import React, {useRef, useState} from 'react';
import FileService from "../../api/FileService";
import Loader from "../common/loader/Loader";
import FileUtils from "../../utils/FileUtils";
import classes from "./FileUploader.module.css";
import FileUploaderForm from "./FileUploaderForm";
import FileUploaderConstants from "./FileUploaderConstants";

const FileUpload = () => {
    const [blob, setBlob] = useState(null);
    const [isLoad, setLoad] = useState(false);
    const [isFile, setIsFile] = useState(false);
    const [fileName, setFileName] = useState("");
    const fileRef = useRef();

    function fileUploadHandler(e) {
        setIsFile(false);
        let fileName = e.target.files[0].name;
        if (!FileUtils.isAllowedFileType(fileName, FileUploaderConstants.allowedFileType)) {
            e.target.value = null;
            setFileName("Файл с таким типом недопустим.");
        } else {
            setIsFile(true);
            setFileName(fileName);
        }
    }

    function chooseFile(e) {
        e.preventDefault();
        fileRef.current.click();
    }

    function downloadFile(e, blob, filename) {
        e.preventDefault();
        FileUtils.downloadFileFromBlob(blob, filename)
    }

    async function getNewFile(formData) {
        try {
            setLoad(true)
            const response = await FileService.sendAndGetFile(formData);
            setBlob(response);
        } catch (e) {
            console.log(e);
        } finally {
            setLoad(false)
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
            {
                isLoad ? <Loader/> :
                    <div className={classes.fileUploadFormWrap}>
                        <div>
                            Файл: {fileName}
                        </div>
                        <FileUploaderForm ref={fileRef}
                                          blob={blob}
                                          isFile={isFile}
                                          chooseFile={chooseFile}
                                          fileUploadHandler={fileUploadHandler}
                                          sendFile={sendFile}
                                          downloadFile={(e) => downloadFile(e, blob, fileName)} />
                        <div className={classes.feedback}>
                            <a className={classes.feedback_link} href={"https://t.me/+fsdwBE3o6_o0YmJi"}>Give feedback in Telegram</a>
                        </div>
                    </div>
            }
        </div>
    );
};

export default FileUpload;