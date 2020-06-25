const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        // Query para procura por devs com Filtros
        const devs = await Dev.find({
            techs: {
                $in: techsArray, // operador lógico do mongodb para filtrar por valores iguais
            },
            location: {
                $near: { // operador para filtrar pelos valores mais próximos
                    $geometry: { // operador para especificar as coordenadas
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000, // define uma distância máxima para filtrar
                },
            },
        });

        return response.json({ devs });
    }
}