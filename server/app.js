const express = require('express');

const morgan = require('morgan');

const app = express();

const authRoutes = require('./routes/authRoutes')
const userRoutes = require("./routes/userRoutes")
app.use(express.json())

app.use(morgan('dev'))
app.use((req, res, next)=>{
    console.log("Hello the middlweare is called")
    next()
})

app.get('/', (req, res)=>{
res.send("Hello from the server") 
})

app.use('/api/auth',authRoutes)
app.use('/api/user', userRoutes);

module.exports = app;