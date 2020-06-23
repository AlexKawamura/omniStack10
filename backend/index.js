const express = require('express');

const app = express();

// Especifica para o express a utilização de json nas requisições
app.use(express.json());

// Tipos de Parâmetros (express):
// Query Params: request.query (filtros, ordenação, paginação);
// Route Params: request.params (indentificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Omnistack' });
});

// Porta: 3333
app.listen(3333);