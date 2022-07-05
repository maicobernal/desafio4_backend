const express = require('express')
const moment = require('moment')
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

let visitas = 0

const hoy = moment(new Date());
const dia = hoy.format("MMM Do YY")
const hora = hoy.format("h:mm:ss a")

/* const frontpage = `<h1>Mercado Virtual de Pulgas</h1>\n
<h2>Ofertas de elementos obsoletos informáticos</h2>
<p>Para ver los productos disponibles, haga click <a href="/api/productos">aquí</a></p>\n
<p>Elegir un producto al azar: <a href = "/api/productos/random">Voy a tener suerte</a></p>\n
<p><a href = "/api/productos/agregar/agregar.html">Agregar nuevo producto</a></p>\n
<p><a href = "/api/productos/modificar/modificar.html">Modificar producto</a></p>\n
<p><a href = "/api/productos/eliminar/eliminar.html">Eliminar producto</a></p>\n
<p>Usted es el visitante número ${visitas}</p>\n
<p>Hoy es ${dia} y son las ${hora} </p>\n`
 */

const productos = require('./productos.js')

/* app.use((req, res, next) => {
    console.log('Hola')
    next();
}
) */

app.use ('/api/productos', productos)
app.use(express.static('public'));

app.get('/', (req, res)=>{
    visitas++
    
})
