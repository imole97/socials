const express = require('express');
require('./src/config/mongoose');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const port = 4000;

const posts = [
    {
        id: 1,
        title: 'I can move a mountain',
        content: 'Do am if e sure for you'
    },
    {
        id: 2,
        title: 'I can dance for africa',
        content: 'Do am if e sure for you'
    },
    {
        id: 3,
        title: 'I can drink pepper soup with fork',
        content: 'Do am if e sure for you'
    }
]

app.get('/', (req, res) => {
    res.json('I have a father');
})

app.get('/posts', (req,res) => {
    res.json(posts)
})

app.post('/posts', (req, res) => {
    console.log({ query: req.query});
    console.log(req.body)
    res.json('test')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})