import React, {useRef, useState} from 'react';
import FileService from "../../api/FileService";
import Loader from "../common/loader/Loader";
import FileUtils from "../../utils/FileUtils";
import FileUploaderForm from "./FileUploaderForm";
import FileUploaderConstants from "./FileUploaderConstants";
import localforage from "localforage";

const FileUpload = () => {
    const [blob, setBlob] = useState(null);
    const [isLoad, setLoad] = useState(false);
    const [isFile, setIsFile] = useState(false);
    const [fileName, setFileName] = useState("");
    const [downloadFileName, setDownloadFileName] = useState("");
    const [generatorStyleValue, setGeneratorStyleValue] = useState(FileUploaderConstants.generatorStyles[0]);
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
            setBlob(null)
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
            const oldFile = formData.get('file')
            const newFile = new File([response],`result-${oldFile.name}`, {lastModified: new Date().getTime(), type: oldFile.type})
            await localforage.setItem('sourceFile', oldFile)
            await localforage.setItem('processedFile', newFile)
            await localforage.setItem('editFile', newFile)
            setBlob(response);
            setDownloadFileName(`result_${fileName}`)
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
        formData.append("generatorStyle", generatorStyleValue.value)
        getNewFile(formData);
    }

    function onSelectGeneratorStyleChange(generatorStyle){
        setGeneratorStyleValue(generatorStyle)
    }


    return (
        <div>
            <FileUploaderForm ref={fileRef}
                              blob={blob}
                              isFile={isFile}
                              downloadFileName={downloadFileName}
                              fileName={fileName}
                              isLoad={isLoad}
                              chooseFile={chooseFile}
                              fileUploadHandler={fileUploadHandler}
                              sendFile={sendFile}
                              onSelectGeneratorStyleChange={onSelectGeneratorStyleChange}
                              generatorStyleValue={generatorStyleValue}
                              downloadFile={(e) => downloadFile(e, blob, downloadFileName)}/>
        </div>
    );
};

export default FileUpload;