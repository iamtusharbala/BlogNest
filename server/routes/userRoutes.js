const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res) => {
    res.send("Hello World")
})



router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const user = await User.findOne({ email })
            if (user) {
                res.send("Login Successful")
            }
            else {
                res.send("Login Failed")
            }
        }

    } catch (error) {
        res.send("Login Failed")
    }
})


router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (username && email && password) {
            const user = new User({ username, email, password })
            await user.save()
            res.send("Registration Successful")
        }
    } catch (error) {
        res.send("Registration Failed")
    }
})

module.exports = router