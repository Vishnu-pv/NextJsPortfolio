import { EmailTemplate } from '../../components/EmailTemplate'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
    try {
        const { email, message } = JSON.parse(req.body)
        const data = await resend.sendEmail({
            from: email,
            to: 'vishnupv00143@gmail.com',
            subject: "🎉New submission to your contact form!",
            react: EmailTemplate({ email, message })
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
};

