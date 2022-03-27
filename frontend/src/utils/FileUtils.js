export default class FileUtils{

    static downloadFileFromBlob(blob, filename){
        const url = window.URL.createObjectURL(
            new Blob([blob]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
            'download',
            filename,
        );

        document.body.appendChild(link);

        link.click();
        link.parentNode.removeChild(link);
    }

    static isAllowedFileType(fileName, allowedFileTypes){
        return allowedFileTypes.some((type) => fileName.endsWith(type));
    }
}