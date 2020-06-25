// Bibliotecas
const mongoose = require('mongoose'); // Banco de Dados
const PointSchema = require('./utils/PointSchema');

// Model com as informações do Dev
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        Index: '2dsphere' // index em minúsculo causa um warning
    }
});

module.exports = mongoose.model('Dev', DevSchema);