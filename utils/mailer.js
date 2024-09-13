const nodeMailer = require("nodemailer");
require('dotenv').config();
const mailHost = "smtp.gmail.com";
const mailPort = 587;

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;
const adminFirstName = process.env.ADMIN_FIRSTNAME;

/**
 * function that send mail
 * @param {*} to email
 * @param {*} subject string
 * @param {*} htmlContent string
 * @param {*} attachments [{ filename: "XXXX.docx", path: filePath }]
 * @returns 
 */
const sendMail = (to, subject, htmlContent, attachments = []) => {
    const transporter = nodeMailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false,
        auth: {
            user: adminEmail,
            pass: adminPassword,
        },
    });

    const options = {
        from: `${adminFirstName} <${adminEmail}>`,
        to: to,
        subject: subject,
        html: htmlContent,
        attachments
    };

    return transporter.sendMail(options);
};

module.exports = {
    sendMail: sendMail,
};