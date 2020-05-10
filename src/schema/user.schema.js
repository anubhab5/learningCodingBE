const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
    },
    duration: {
        type: Number,
        min: 0,
        required: true,
        default: 0,
    },
    progressStatus: {
        type: String,
        default: "Created", // Created Started Paused Completed Aborted Deleted
        required: true,
    },
    count: {
        type: Number,
        default: 0,
        required: true,
    },
    comment: {
        type: String,
        maxlength: 5000,
        default: "",
    },
});

module.exports.userSchema = userSchema;