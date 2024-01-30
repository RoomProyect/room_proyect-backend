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
            html: (`<!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Bienvenido a Roomvesta</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #ffffff;
                    }
            
                    #container {
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #f4f4f4;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
            
                    h1 {
                        color: #333333;
                    }
            
                    p {
                        color: #555555;
                    }
            
                    .button {
                        display: inline-block;
                        padding: 10px 20px;
                        margin: 15px 0;
                        font-size: 16px;
                        text-align: center;
                        text-decoration: none;
                        background-color: #4CAF50;
                        color: #ffffff;
                        border-radius: 5px;
                    }
            
                    .center {
                        width: 100%;
                    }
                </style>
            </head>
            <body>
                <div id="container">
                    <h1>Bienvenido a Roomvesta</h1>
                    <p>¡Hola ${name}!</p>
                    <p>Gracias por unirte a la comunidad de Roomvesta, donde puedes comprar y vender terrenos de manera fácil y segura.</p>
                    <p>Estamos emocionados de tenerte a bordo. ¡Comienza a explorar y descubrir las mejores oportunidades!</p>
                    <div class="center" style="padding-left: 38%;">
                        <a href="https://www.roomvesta.com" class="button">Ir a Roomvesta</a>
                    </div>
                    <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
                    <p>¡Gracias nuevamente y esperamos que tengas una excelente experiencia en Roomvesta!</p>
                    <p>Atentamente,<br>El equipo de Roomvesta</p>
                    <div class="center" style="padding-left: 45%;">
                        <a href="https://www.roomvesta.com">
                            <img src="./casaicono.png" alt="" style="width: 64px; height: 64px;">
                        </a>
                    </div>
                </div>
            </body>
            </html>`), // html body
          });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    verification_email_message
}