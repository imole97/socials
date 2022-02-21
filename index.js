const express = require('express');
require('./src/config/mongoose');
const Route = require('./src/routes');

const app = express();
const port = 4000;
const router = express.Router();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', Route(router));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})