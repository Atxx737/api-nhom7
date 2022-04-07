const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')

const userController = require('./controllers/user.controller')

const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb+srv://yoyoo:123@cluster0.2ndwh.mongodb.net/nhom7?retryWrites=true&w=majority'

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send("Hello"))

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/users', userController.getUsers);

mongoose.connect(MONGODB_URI).then(() => {
    console.log('Mongodb connected!')
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`)
    })
})
