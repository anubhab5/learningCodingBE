const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true,
    },
    tags: [{
        type: String
    }],
    authorName: {
        type: String,
        minlength: 5,
        maxlength: 15
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    price: {
        type: Number,
        min: 10,
        max: 99,
        required: true
    },
    description: {
        type: String,
        minlength: 0,
        maxlength: 10000
    }

});

module.exports.CourseSchema = CourseSchema;