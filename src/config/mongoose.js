const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/social-service-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('DB connected successfully'));