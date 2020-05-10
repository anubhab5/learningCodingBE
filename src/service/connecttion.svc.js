const mongoose = require('mongoose');

async function connectToDB() {
    mongoose.connect("mongodb://localhost/learningcoding", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Conected to learningCoding database"))
        .catch(() => console.log("Error Occured"));
}

module.exports.connectToDB = connectToDB;