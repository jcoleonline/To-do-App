const express = require('express');
const router = express.Router();
const { completed } = require('../models');

router.get('/completed', async (req, res) => {
    const completeds = await completed.findAll();
    res.json(completeds);
});


module.exports = router;