const PostController = require('../controllers/post.controller');
// const postController = new PostController();

module.exports = router => {
    router.post('/posts', PostController.create)
    router.get('/posts', PostController.getAll)
    router.get('/posts/:id', PostController.getOne)
    router.patch('/posts/:id', PostController.update)
    router.delete('/posts/:id', PostController.delete)

    return router;
}