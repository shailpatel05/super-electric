const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    sku: {
        type: String,
        required: false,
        unique: false
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    stock: {
        type: Number,
        required: false,
        default: 0
    },
    price: {
        type: Number,
        required: false,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;