const express = require("express");
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
//create a user using : POST "/api/auth".
router.post('/', [
    body("name", "Enter a Valid Name").isLength({ min: 4 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast of 5 character").isLength({ min: 4, max: 12 }),
], (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ result: result.array });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    }).then(user => res.json(user))
        .catch(err => {
            console.log(err)
            res.send({ error: 'Please enter a unique Value for email', message: err.message })
        })

})

module.exports = router;