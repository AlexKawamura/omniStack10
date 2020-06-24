module.exports = {
    async store(request, response) {
        // Variável para receber o json vindo pela requisição
        const { github_username, techs, latitude, longitude } = request.body;
    
        // Busca e espera a API retornar os dados do usuário no Github
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
        // Recebe os dados da resposta da API, se não existir o 'name' é atribuido o login no lugar
        const { name = login, avatar_url, bio } = apiResponse.data;
    
        // Percorre string e separa por ',' e remove espaçamento (.trim)
        const techsArray = techs.split(',').map(tech => tech.trim());
    
        // Variável para receber a localização
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
    
        // Cria um Dev com os dados recebidos anteriormente
        const dev = await Dev.create({
           github_username,
           name,
           avatar_url,
           bio,
           techs: techsArray,
           location,
        });
    
        return response.json(dev);
    }
}