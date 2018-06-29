const express = require('express');
const bodyParser = require('body-parser');
const port = 3009
const app = express ()
const massive = require ('massive')
require('dotenv').config()


//MiddleWare
app.use(bodyParser.json())
massive( process.env.CONNECTION_STRING)
.then(db =>{
    console.log('connected to the server')
    app.set('db', db)
})
.catch(err=>console.log(err))

//Controllers
const ctrl = require('./Controllers/basic_controller')

//Endpoints
app.get('/api/houses',ctrl.read)
app.post('/api/houses',ctrl.create)
app.put('/api/houses/:id',ctrl.update)
app.delete('/api/houses/:id',ctrl.delete)




app.listen(port, ()=>{console.log(`PORT: ${port}`)})