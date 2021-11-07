const mongoose = require("mongoose")
const MovieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },

    year:{
        type: Number,
        required: true
    },

    director: {
        type: String,
        required: true
    },

    runtime: {
        type: Number,
        required: true
    },

    rating: {
        type: String,
        required: true
    }
})

//Crear el modelo a partir del esquema definido
module.exports = mongoose.model('movie', MovieSchema)