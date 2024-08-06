import nodemailer from "nodemailer";

//send email
const sendingMail = async ({ from, to, subject, text }) => {
    try {
        let mailOptions = ({
            from,
            to,
            subject,
            text
        })

        const Transporter = nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            },
        });

        return await Transporter.sendMail(mailOptions)
    }
    catch (error) {
        console.log(error)
    }
}
 export default sendingMail;