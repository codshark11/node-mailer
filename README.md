# Node Mailer

## How to use

1. Install npm packages
```
npm install
```

2. Define Admin email and password in `.env` file
```
ADMIN_EMAIL=admin_email@gmail.com
ADMIN_PASSWORD=admin_password
ADMIN_FIRSTNAME=admin_first_name
SUBJECT=subject
```
3. Modify `email.html` for email content
```
<p>I hope this message finds you well.</p>
<p>Thank you for considering my request. I look forward to hearing from you soon.</p>
<div dir="ltr">
    Best Regards<br>
    <span style="font-family:Arial;font-size:13px"><b>ADMIN</b></span><br>
</div>
```