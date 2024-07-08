const mongoose = require("mongoose");


const connect = () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/blog-nest")
            .then(console.log("Connected to DB"))
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect