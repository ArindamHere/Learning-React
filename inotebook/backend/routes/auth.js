const express = require("express");
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const JWT_SECRET = "ArindamHere";

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

        //adding a salt and hash fxn to the password and then store it in the DB
        const salt = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password, salt);

        //create a new user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);

        res.json(authtoken);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send("Some error occured");
    }

})

module.exports = router;