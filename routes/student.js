const express = require('express');
const studentcontroller =require('../controllers/studentcontroller')
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.get('/', (req, res) => {
    res.render('home');
})
router.post('/add/student', (req, res) => {
    studentcontroller.addStudent(req,res)
    
})
router.get('/students', (req, res) => {
    studentcontroller.getStudents(req,res)
})
module.exports = router;