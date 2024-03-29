// ~/cours-nodejs/server/models/productModel.js

const mongoose = require("mongoose");

const productModel = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('products', productModel)