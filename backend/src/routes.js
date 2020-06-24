// Bibliotecas
const { Router } = require('express'); // Facilitar rotas e requisições
const axios = require('axios'); // Fazer chamada para outras APIs (github)
const Dev = require('./models/Dev');

const routes = Router();

// Tipos de Parâmetros (express):
// Query Params: request.query (filtros, ordenação, paginação);
// Route Params: request.params (indentificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// Requisição
routes.post('/devs', );

module.exports = routes;