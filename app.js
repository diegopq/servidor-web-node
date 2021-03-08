const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT;


//carga todos los parciales del directorio especificado
hbs.registerPartials(__dirname + '/views/partials', (err) => {
    if (err) { console.log(`Ocurrio un error al cargar los parciales ${err}`) };
 });

//se indica que usara hbs para renderizar el contenido de la pagina
app.set('view engine', 'hbs');

// Servir contenido estatico, se le indica el path del contenido estatico
 app.use(express.static('public'));

//indica que hacer cuando sea una peticion get a /
app.get('/', (req, res) => {
    //res.sendFile(__dirname + '/public/index.html');
    //para mostrar un archivo hbs se usa el metodo render
    //el segundo parametro son los argumentos 
    res.render('home', {
        nombre: 'Diego Padilla',
        titulo: 'Curso Node'
    });
});


//envia un archivo html
app.get('/generic', (req, res) => {
    // res.sendFile(__dirname + '/public/generic.html');
    res.render('generic', {
        nombre: 'Diego Padilla',
        titulo: 'Curso Node'
    });
});

app.get('/elements', (req, res) => {
    // res.sendFile(__dirname + '/public/elements.html');
    res.render('elements', {
        nombre: 'Diego Padilla',
        titulo: 'Curso Node'
    });
});

//cualquier ruta que no este definida va a caer aqui
app.get('*', (req, res) => {
    res.status(404).send('Pagina no encontrada');
});

//indica en que puerto escuchar
app.listen(port, () => {
    console.log('corriendo en ' + port);
});