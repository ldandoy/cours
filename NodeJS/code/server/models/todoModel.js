// ~/cours-nodejs/server/models/todoModel.js

const mongoose = require("mongoose");

const todoModel = new mongoose.Schema({
    nom: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('todos', todoModel)