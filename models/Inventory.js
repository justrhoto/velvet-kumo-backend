const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/velvetkumo')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model('Inventory', inventorySchema);