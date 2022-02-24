const express = require('express');
const  connect  = require('../src/configs/db');
const app = express();

const productapiController = require('../src/controller/productapi.controller');
const homeController = require('../src/controller/home.controller')

app.use(express.json());
app.use('/products', productapiController);
app.use('/home', homeController);


app.set('view engine', 'ejs');
app.use(express.static("public"))

app.listen(4553, async() => {
    try {
        connect();
        console.log('Listening Port 4553');
    } catch(err) {
        console.log(err.message);
    }
})