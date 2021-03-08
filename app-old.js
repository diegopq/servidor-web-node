const http = require('http');

//crear servidor, request es lo que pide el cliente, response el lo que el servidor va a enviar
http.createServer((request, response) => {

    // response.writeHead(404);
    // response.write('404');

    //se indica que ya se termino de escribir la respuesta
    response.end();

})
    //se indica en que puerto va a escuchar
    .listen(8080);

    console.log('Escuchando en el puerto 8080');