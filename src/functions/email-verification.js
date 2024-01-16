require('dotenv').config()
const { APP_PASS, EMAIL } = process.env

// Configuracion del transportador
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: APP_PASS,
  },
});


const verification_email_message = async (email, name) =>{
    try {
        // Para verificar si esta configurado correctamente
        await transporter.sendMail({
            from: '"Room Vesta" <roomvesta296@gmail.com>', // sender address
            to: email,
            subject: "Cuenta creada exitosamente", // Subject line
            text: "ACCOUNT VERIFICATED", // plain text body
            html: `<b>!Su cuenta a sido creada con exito¡</b><p>Felicitaciones ${name}, ahora forma parte de Room Vesta<p/>`, // html body
          });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    verification_email_message
}