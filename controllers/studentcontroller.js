const Student = require('../models/Student');

async function addStudent(req, res) {
     try {
         console.log(req.body);
         let student = new Student(req.body);
         await student.save();
         res.render("studentInsert")
     } catch (error) {
         console.log(error);
     }
}
async function getStudents(req,res) {
    try {
        let students = await Student.find({});
        res.render('studentlist', {
            students: students
        });
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    addStudent,
    getStudents
}