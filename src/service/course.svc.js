const mongoose = require("mongoose");
const { CourseSchema } = require("../schema/course.schema");

const Course = mongoose.model("course", CourseSchema);

async function createCourse(courseObj) {
    const courseToSave = new Course({
        courseName: courseObj.courseName,
        tags: courseObj.tags,
        authorName: courseObj.authorName,
        description: courseObj.description,
        price: courseObj.price,
        rating: courseObj.rating
    });

    const result = await courseToSave.save(courseObj);
    return result;
}

function getCourses() {
    return Course.find();
}

module.exports = {
    createCourse: createCourse,
    getCourses: getCourses
};