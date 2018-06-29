const express = require('express');
const bodyParser = require('body-parser');
const port = 3009
const app = express ()
const massive = require ('massive')
require('dotenv').config()


//MiddleWare
app.use(bodyParser.json())
massive( process.env.CONNECTION_STRING).then(db =>{app.set('db', db)}).catch(err=>console.log(err))

//Controllers

//Endpoints





app.listen(port, ()=>{console.log(`PORT: ${port}`)})