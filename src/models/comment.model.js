const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const Comment = model('Comment', commentSchema);

module.exports = Comment