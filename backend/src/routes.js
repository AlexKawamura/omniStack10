// Bibliotecas
const { Router } = require('express'); // Facilitar rotas e requisições
const DevControlleer = require('./controllers/DevController');

const routes = Router();

// Tipos de Parâmetros (express):
// Query Params: request.query (filtros, ordenação, paginação);
// Route Params: request.params (indentificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// Requisição
routes.post('/devs', DevControlleer.store);

module.exports = routes;