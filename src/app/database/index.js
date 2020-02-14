const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Register' , { useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
