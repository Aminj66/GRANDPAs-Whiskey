const express = require('express');
const router = express.Router();

const products = [
    { id: 1, name: 'Whiskey A', price: 50 },
    { id: 2, name: 'Whiskey B', price: 60 }
];

router.get('/', (req, res) => {
    res.json(products);
});

module.exports = router;
