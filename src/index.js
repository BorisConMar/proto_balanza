//importar modulos
const express = require('express')
const rutas = require("./routes/index.js")
const db = require("./database/db")

// Test de conexion con base de datos

async function testConexion() {
    try {
        await db.authenticate();
        console.log('CONEXION CORRECTA.');
    } catch (error) {
        console.error('ERROR DE CONEXION: ', error);
    }
}
testConexion()

db.sync({ force: true });
console.log("Modelos migrados.");

//dexclaracion variables
const app = express()
const puerto = 3000
var host = "127.0.0.1";

rutas.adicionar(app);


app.get('/users', (req, res) => {
    res.send('<h1>hola usuario</h1>')
})

app.post('/users', (req, res) => {
    res.send('<h1>acceso mediante POST</h1>')
})

app.listen(puerto, host, () => {
    console.log(`Servidor iniciado en http://localhost:${puerto}`)
})