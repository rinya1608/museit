import FileUtils from "../utils/FileUtils";

export default class FileService{
    static async sendAndGetFile(formData){
        return  await fetch("api/upload/file",{
            method: "POST",
            body: formData
        }).then((res) => {
            if (res.ok){
                return res.blob().then((blob) => {return blob});
            }
            else{
                throw `service ${res.url} return message: ${res.statusText}`;
            }
        })
    }

}