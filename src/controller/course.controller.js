const express = require('express');
const router = require('express').Router();
// const { CourseSchema } = require("../schema/course.schema");
const { createCourse, getCourses } = require("../service/course.svc");

router.get("/", async(req, res) => {
    res.send(await getCourses());
});

router.post('/', async(req, res) => {
    const result = await createCourse(req.body);
    res.send(result);
});

module.exports = router;