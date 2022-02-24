const Comment = require('../models/comment.model');

// instruction
// clone the repository
// run `git remote remove origin`
// then you can add your remote repository 

class CommentController {
    static create = async (req, res) => {
        try {
            const { content } = req.body;

            const comment = await Comment.create({
                content
            });

            res.status(201).json(comment)
        } catch(error) {
            res.status(500).json('Server error')
        }
    }

    static getAll = async (req, res) => {
        try {
            // const query = req.query;
            // console.log(query)
            const comment = await Comment.find();

            res.status(200).json(comment)
        } catch (error) {
            res.status(500).json('Server error') 
        }
    }

    // getOne
    static getOne = async (req, res) => {
        try{
            const comment = await Comment.findById(req.params.id)
            if (comment == null){
                return res.status(404).json({message: 'cannot find comment'})
            }
            res.status(200).json(comment)
        }catch(err){
            res.status(500).json({message: err.message})
        }
    }

    // update
    static update = async (req, res) => {
        const comment = await Comment.findById(req.params.id)
        if(req.body.content !== null){
            comment.content = req.body.content
        }
        try{
            const updatedComment = await comment.save()
            res.json(updatedComment)
        }catch(err) {
            res.status(400).json({message: err.message})
        }
    }

    // delete
    static delete = async (req, res) => {
        const {id} = req.params
        if (!id) {
            return res.status(400).json('Invalid request')
        }

        const comment = await Comment.findByIdAndDelete(id)
        
        if(!comment) {
            return res.status(404).json('comment not found')
        }

        try{
            res.json('comment already deleted')
        }catch(err){
            res.status(500).json({message: err.message})
        }
    }
}

module.exports = CommentController;