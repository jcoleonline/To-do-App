const express = require('express');
const router = express.Router();
const { favorite } = require('../models');

router.get('/favorite', async (req, res) => {
    const favorites = await favorite.findAll();
    res.json(favorites);
});


module.exports = router;