const express = require('express')
//const moment = require('moment')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 8080
const server = app.listen(port,()=>{
        console.log('Servidor corriendo en el puerto: ' + server.address().port)
    })

server.on('error', (error)=>{
    console.log(`Error en el servidor ${error}`)
})

/* let visitas = 0

const hoy = moment(new Date());
const dia = hoy.format("MMM Do YY")
const hora = hoy.format("h:mm:ss a")
 */
const productos = require('./productos.js')

/* app.use((req, res, next) => {
    console.log('Hola')
    next();
}
) */

app.use ('/api/productos', productos)
app.use(express.static('public'));

/* app.get('/', (req, res)=>{
    visitas++
    
}) */
