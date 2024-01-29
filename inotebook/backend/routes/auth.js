const express = require("express");
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
//create a user using : POST "/api/auth/createuser". No login required
router.post('/createuser', [
    body("name", "Enter a Valid Name").isLength({ min: 4 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast of 5 character").isLength({ min: 4, max: 12 }),
], async (req, res) => {
    // if there are errors return bad req and errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ result: result.array });
    }

    try {
        // check whether the user with this email exists already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with same email exists already" })
        }

        //create a new user
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })

        res.json(user);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send("Some error occured");
    }

})

module.exports = router;