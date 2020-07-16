// Biblioteca
const express = require('express'); // Facilitar rotas e requisiçoes
const mongoose = require('mongoose'); // Banco de Dados
const cors = require('cors');
const http = require('http');
const routes = require('./routes'); // Pasta com rotas
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://alex:1war9p9ten7@cluster0-t28up.mongodb.net/omnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
// Especifica para o express a utilização de json, deve ser específicado antes das rotas 
app.use(express.json());
// Usar rotas do arquivo route.js
app.use(routes);

// Porta: 2222
server.listen(2222);