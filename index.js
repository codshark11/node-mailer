const fs = require("fs");
const path = require("path");
const mailer = require("./utils/mailer");

let count = 0;
const subject = "Urgent Assistance Request";

async function main() {
    const content = fs.readFileSync("./email.html", 'utf8');
    const jsonsInDir = fs.readdirSync("./contacts").filter(file => path.extname(file) === '.json');

    console.log("Batch sending starts...")
    
    for (const file of jsonsInDir) {
        const fileData = fs.readFileSync(path.join('./contacts', file));
        const profileList = JSON.parse(fileData.toString());
        for (const profile of profileList) {
            const email = profile.email;
            const firstName = profile.first_name;
            const body = `<div dir="ltr"><p>Hi, ${firstName}.</p>${content}</div>`;

            await mailer.sendMail(email, subject, body);
            count = count + 1;
            console.log(`email[${count}] sent to `, profile.email)
        }
    }
    
    console.log("Batch sending finished~!")
}

/**
 * execute main()
 */
main()
