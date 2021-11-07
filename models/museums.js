const mongoose = require("mongoose")

const MuseumSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },

    location:{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    cost: {
        type: Number,
        required: true
    }
})

//Crear el modelo a partir del esquema definido
module.exports = mongoose.model('museum', MuseumSchema)