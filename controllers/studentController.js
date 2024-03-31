const Student = require('../models/student.js')
const getStudent = async (req,res) => {
    const studentId = req.params.studentId

    const student = await Student.findByPk(studentId)
    if(student) {
        return res.send(student)
    }
    return res.send('get student')
}


const getStudents = async (req,res) => {
    const students = await Student.findAll()
    if(students) {
        return res.json(students)
    } else {
        res.send('get students')
    } 
}


const addStudent = async (req,res) => {
    const model = req.body
    const student = Student.create(model)
    if(student) {
        return res.send(student)
    } else {
        res.send('add student')
    }   
}   

const getStudentName = async (req,res) => {
    Student.findOne({
        where: {StudentName: req.params.StudentName}
    }).then(student => {
        if(student) {
            res.send(student)
        } else {
            res.send('student not found')
        }
    }).catch(err => console.log(err))
}


const editStudent = () => {
    res.send('edit student')
}


module.exports = {getStudent, getStudents, editStudent, addStudent, getStudentName}