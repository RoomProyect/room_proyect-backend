//Importo los modulos necesarios para el funcionamiento del servidor
const server = require( './src/server' );

//Creo una costante con el numero del puerto que se va a utilizar para inicializar el servidor
const PORT = 3001;

server.listen( PORT,() => {
    console.log(`Server listen by port ${ PORT }`);
})