// Bibliotecas
const { Router } = require('express'); // Facilitar rotas e requisições
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Tipos de Parâmetros (express):
// Query Params: request.query (filtros, ordenação, paginação);
// Route Params: request.params (indentificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// Requisição
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;