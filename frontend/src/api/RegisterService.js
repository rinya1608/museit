export class RegisterService {
    static async sendFeedback(formData) {
        return await fetch('api/register', {
            method: "POST",
            body: formData
        }).then(res => {
            return res.text();
        });
    }
}