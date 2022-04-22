const express = require('express');
const app = express();
const path = require('path')

//path
const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.listen(3030, () => {
    console.log('Servidor corriendo en 3030')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req, res) => {
res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
    })