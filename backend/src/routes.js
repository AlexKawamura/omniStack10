const { Router } = require('express');

const routes = Router();

// Tipos de Parâmetros (express):
// Query Params: request.query (filtros, ordenação, paginação);
// Route Params: request.params (indentificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Omnistack' });
});

module.exports = routes;