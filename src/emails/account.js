const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'
sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'eoyewole508@stu.ui.edu.ng',
        subject: 'Welcome to the App!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
        html: '<p>Welcome Again</p><p>Pls do not reply this email. Thank You</p><i>From Admin, Emmanuel Olusola Oyewole</i>'
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'eoyewole508@stu.ui.edu.ng',
        subject: `GoodBye ${name}`,
        text: `GoodBye, ${name}. Thank You For Using This App`,
        html: '<p>You can still use this app further</p><p>Pls do not reply this email. Thank You</p><i>From Admin, Emmanuel Olusola Oyewole</i>'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
