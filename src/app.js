const express = require("express");
const app = express();
const { connectToDB } = require("./service/connecttion.svc");
const course = require("./controller/course.controller");

connectToDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome To The Leaning Coding ...")
});

app.use("/api/courses", course);

app.listen(4000, () => {
    console.log(`Server started on port  4000`);
});