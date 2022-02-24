const PostController = require('../controllers/post.controller');
const CommentController = require('../controllers/comment.controller');

module.exports = router => {
    router.post('/posts', PostController.create)
    router.get('/posts', PostController.getAll)
    router.get('/posts/:id', PostController.getOne)
    router.patch('/posts/:id', PostController.update)
    router.delete('/posts/:id', PostController.delete)

    router.post('/comments', CommentController.create);
    router.get('/comments', CommentController.getAll)

    return router;
}