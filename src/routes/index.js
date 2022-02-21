const PostController = require('../controllers/post.controller');
// const postController = new PostController();

module.exports = router => {
    router.post('/posts', PostController.create)

    return router;
}