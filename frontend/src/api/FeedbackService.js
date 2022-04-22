export class FeedbackService {
    static async sendFeedback(formData) {
        return await fetch('api/feedback', {
            method: "POST",
            body: formData
        }).then(res => {
            return res.ok;
        });
    }
}