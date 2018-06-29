const express = require('express');
const bodyParser = require('body-parser');
const port = 3009
const app = express ()
app.use(bodyParser.json())
massive( process.env.CONNECTION_STRING).then(db =>{app.set('db', db)}).catch(err=>console.log(err)) //process.env.VARIABLE_NAME is basically variables we don't want to see or push to github. they are put on .env file which is put on our .gitignore fie.








app.listen(port, ()=>{console.log(`my port is port ${port}`)})