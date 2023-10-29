require("dotenv").config();
const express = require("express");

const routes = require('./src/routes')


const app = express();
let PORT = process.env.PORT || 8080

const fileUpload = require('express-fileupload')

app.use(fileUpload({
    useTempFiles:true
}))


// require("./db/connect_db.js");
app.use(express.json())

app.use(routes);


app.listen(PORT,()=>{
    console.log(`Listening on PORT - ${PORT}`)
})