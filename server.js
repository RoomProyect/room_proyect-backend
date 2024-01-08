//Importo los modulos necesarios para el funcionamiento del servidor
const express = require( 'express' );
const cors = require( 'cors' );

//Creo una instancia de Express
const app = express();

/*-----------------------------------------------------------------------
Agrego los middlewares para utilizar
*express.urlencoded ->  Analizar los datos de las solicitudes codificadas en formato URL
*express.json -> Permite analizar el cuerpo de las solicitudes HTTP con formato JSON  
*Cors -> Permitir que el servidor responda a solicitudes desde dominios distintos al propio server
------------------------------------------------------------------------*/
app.use( express.urlencoded({ extended: true }) );
app.use( express.json() );
app.use( cors() );

//Crea rutas( temporal )
app.get( '/',( req,res ) => {
    res.send( 'Room-project' );
})

//Creo una costante con el numero del puerto que se va a utilizar para inicializar el servidor
const PORT = 3001;

app.listen( PORT,() => {
    console.log(`Server listen by port ${ PORT }`);
})