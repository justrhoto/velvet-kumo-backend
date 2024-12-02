const express = require('express');
const router = express.Router();

const Inventory = require('./models/Inventory');
const Etsy = require('./Etsy');

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
router.post('/inventory', async (req, res) => {
    const { name, quantity, location } = req.body;

    const inventory = new Inventory({
        name,
        quantity,
        location
    });

    try {
        const newInventory = await inventory.save();
        res.status(201).json(newInventory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Test Etsy API connection with a ping
router.get('/etsy/ping', async (req, res) => {
    try {
        const response = await Etsy.pingEtsy();
        res.json(response);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Return sample listing data
router.get('/etsy/listing', async (req, res) => {
    try {
        const fs = require('fs');
        const path = require('path');
        
        const listingPath = path.join(__dirname, 'samples', 'listing.json');
        const listing = JSON.parse(fs.readFileSync(listingPath, 'utf8'));
        
        res.json(listing);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;