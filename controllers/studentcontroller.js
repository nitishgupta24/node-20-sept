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
async function getStudentForEdit(req, res) {
    try {
        let id = req.params.id;
        console.log(id);
        let student = await Student.findOne({ _id: id });
          console.log("Student: " + student);
    // res.send(student);
    res.render("studentforupdate", { student: student });
  } catch (err) {
    console.error("Something went wrong!!", err);
  }
}
async function updateStudent(req, res) {
    try {
        let id = req.params.id;
        let student = await Student.findOne({ _id: id });
        console.log(student, 'student');
        student.rollNo = req.body.rollNo;
        student.firstName = req.body.firstName;
        student.lastName = req.body.lastName;
        student.fatherName = req.body.fatherName;
        student.adharCardNo = req.body.adharCardNo;
        student.mobileNo = req.body.mobileNo;
        await student.save();
        let students = await Student.find({});
        res.render('studentlist', {
            students: students
        })
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = {
    addStudent,
    getStudents,
    getStudentForEdit,
    updateStudent
}