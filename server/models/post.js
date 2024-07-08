const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postModel = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    image: String,
    tags: [String],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Post", postModel)