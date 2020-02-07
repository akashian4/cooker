const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var db = mongoose.connect("mongodb://localhost:27017/cooker", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
 });

require('../Models/Models');

module.exports.db = db;