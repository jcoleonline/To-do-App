const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});


module.exports = router;