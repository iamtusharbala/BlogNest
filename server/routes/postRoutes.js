const express = require("express");
const router = express.Router();
const Post = require("../models/post");


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).send(posts)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.post('/', async (req, res) => {
    try {
        const { title, content, author } = req.body
        const newPost = new Post({ title, content, author })
        await newPost.save()
        res.status(201).send(newPost)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { title, content, author } = req.body
        const post = await Post.findByIdAndUpdate(id, { title, content, author })
        if (!post) {
            return res.status(404).send("Post not found")
        }
        res.status(200).send(post)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findByIdAndDelete(id)
        res.status(200).send(post)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.all('*', (req, res) => {
    res.send("Page Not Found")
})

module.exports = router