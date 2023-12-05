const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    img : {
        type :String,
        required:true
    },
    title : {
        type :String,
        required:true
    },
    titleDescription : {
        type :String,
        required:true
    },
    date : {
        type :String,
        // required:true
    },
    description : {
        type :String,
        required:true
    },
    tags : {
        type :String,
        required:true
    },
}) 

const Blogs = mongoose.model('blog',schema);
module.exports = Blogs;