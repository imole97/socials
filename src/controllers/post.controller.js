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

    static getAll = async (req, res) => {
        const posts = await Post.find();

        res.status(200).json(posts);
    }

    static getOne = async (req, res) => {
        const { id } = req.params;

        const post = await Post.findOne({ _id: id })

        res.status(200).json(post)
    }

    static update = async (req, res) => {
        const { id } = req.params;

        if (!id) {
            return res.status(404).json('Post not found')
        }

        const post = await Post.findOne({ _id: id });
        const updatedPost = Object.assign(post, req.body);

        updatedPost.save();

        res.status(200).json(updatedPost);

    }  

    static delete = async (req, res) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json('Invalid request')
        }

        const post = await Post.findByIdAndDelete({ _id: id });

        if (!post) {
            return res.status(404).json('Post not found')
        }

        res.status(200).json('success')
    }
}

module.exports = PostController;