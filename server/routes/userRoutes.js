const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const user = await User.findOne({ email })
            if (user) {
                res.status(200).send("Login Successful")
            } else {
                res.status(401).send("Login Failed")
            }
        }

    } catch (error) {
        res.status(500).send("Login Failed")
    }
})


router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (username && email && password) {
            const user = new User({ username, email, password })
            await user.save()
            res.status(201).send("Registration Successful")
        }
    } catch (error) {
        res.status(500).send("Registration Failed")
    }
})


router.all('*', (req, res) => {
    res.send("Page Not Found")
})

module.exports = router