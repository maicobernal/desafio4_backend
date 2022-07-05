const express = require('express')

const {Router} = express
const router = Router()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const Contenedor = require ('./carrito.js')

let stock = new Contenedor('productos.txt');

router.post('/form', async(req, res)=> {
    try{
    const nuevo = req.body
    const arraynuevo = []
    arraynuevo.push(nuevo)
    await stock.saveAll(arraynuevo)
    const check = await stock.getAll()
    res.send(check)
    }
    catch(err){
        res.send('Error en el proceso POST:' + err)
    }
}
)

router.put('/form', async (req, res)=> {
    try{
        const nuevo = req.body
        stock.modifyById(nuevo.id, nuevo)
        const check = await stock.getAll()  
        res.send(check)
    }
    catch(err){
        res.send('Error en el proceso PUT:' + err)
    }
    
}
)

router.delete('/form/:id', async (req, res)=> {
    try{
    const {id} = req.params
    stock.deleteById(id)
    const check = await stock.getAll()  
    res.send(check)
    }
    catch(err){
        res.send('Error en el proceso DELETE:' + err)
    }
}
)

router.get('/', async (req, res)=> {
    try{
    const productos = await stock.getAll();
    res.send(productos)
    }
    catch(err){
        res.send('Error en el proceso GET :' + err)
    }
    }
)

router.get('/:id', async (req, res)=> {
    try{
        const {id} = req.params
        if (id != 'random'){
        let productoById = await stock.getById(id);
        console.log(productoById)
        res.send(productoById)
        } else {
            let producto = await stock.getRandom()    
            res.send(producto)
        }
    }
    catch(err){
        res.send('Error en el proceso GET :' + err)
    }
}
)

router.use('/agregar',express.static(__dirname + '/public'))
router.use('/modificar',express.static(__dirname + '/public'))
router.use('/eliminar',express.static(__dirname + '/public'))


module.exports = router