const axios = require('axios'); // Fazer chamada para outras APIs (github)
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

// Tratamento dos dados recebidos
module.exports = {
    // 'index': Listar todas as informações
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    // 'store': Cadastra as informações
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
        }
    
        return response.json(dev);
    },

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

    async delete(request, response) {
        
    }
}