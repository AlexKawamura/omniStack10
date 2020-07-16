const axios = require('axios'); // Fazer chamada para outras APIs (github)
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

// Tratamento dos dados recebidos
module.exports = {
    // 'index': Listar todos os Devs
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    // 'store': Cadastra um Dev
    async store(request, response) {
        // Variável para receber o json vindo pela requisição
        const { github_username, techs, latitude, longitude } = request.body;

        // Procura no banco se Dev já foi cadastrado
        let dev = await Dev.findOne({ github_username });

        // Caso já exista não é cadastrado
        if (!dev) {
            // Busca e espera a API retornar os dados do usuário no Github
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
                
            // Recebe os dados da resposta da API, se não existir o 'name' é atribuido o login no lugar
            const { name = login, avatar_url, bio } = apiResponse.data;

            // Percorre string e separa por ',' e remove espaçamento (.trim)
            const techsArray = parseStringAsArray(techs);

            // Variável para receber a localização
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            // Cria um Dev com os dados recebidos anteriormente
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });

            // Filtrar as conexões que estão há 10km de distância e que o novo dev tenha pelo menos uma das tecnologias filtradas
            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray,
            )

            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }
    
        return response.json(dev);
    },

    // 'update': Atualiza um Dev
    async update(request, response) {
        const { github_username, techs, name, bio, avatar_url, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (dev) {
            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.updateOne({
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }

        return response.json(dev);
    },

    // 'delete': Deleta um Dev
    async delete(request, response) {
        const { github_username } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (dev) {
            dev = await Dev.deleteOne({
                github_username,
            });
        }

        return response.json(dev);
    }
}