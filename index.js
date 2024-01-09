//Importo los modulos necesarios para el funcionamiento del servidor
const server = require( './src/server' );
const mongoose = require( 'mongoose' );
require('dotenv').config();

//mongodb connection
mongoose
.connect( process.env.MONGODB_URI )
.then( () => console.log( 'Connected to MongoDB Atlas' ) )
.catch( ( error ) => console.error( error ) )

//Creo una costante con el numero del puerto que se va a utilizar para inicializar el servidor
const PORT = process.env.PORT || 3001;

server.listen( PORT,() => {
    console.log(`Server listen by port ${ PORT }`);
})