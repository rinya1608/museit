export class LoginService {
    static async sendFeedback(formData) {
        return await fetch('api2/login', {
            method: "POST",
            body: formData
        }).then(res => {
            return res.text();
        });
    }
}