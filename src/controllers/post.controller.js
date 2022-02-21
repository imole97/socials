const Post = require('../models/post.model');

class PostController {
    static create = async (req, res) => {
        const { title, content } = req.body;

        const post = await Post.create({
            content, 
            title
        })

        res.status(201).json(post);
    }
}

module.exports = PostController;