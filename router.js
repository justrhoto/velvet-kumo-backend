const express = require('express');
const router = express.Router();
const Inventory = require('./models/Inventory');

// Get all inventory items
router.get('/', async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.json(inventory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new inventory item
router.post('/', async (req, res) => {
    const inventory = new Inventory({
        name: req.body.name,
        quantity: req.body.quantity,
        location: req.body.location
    });

    try {
        const newInventory = await inventory.save();
        res.status(201).json(newInventory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// ... other endpoints for updating, deleting, etc.

module.exports = router;