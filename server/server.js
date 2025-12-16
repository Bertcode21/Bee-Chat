const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = require('./app')
const dbconfig = require('./config/dbconfig')


const Port = process.env.Port || 5000;

app.listen(Port, ()  =>{
    console.log("Server is running on Port: "+ Port);
})