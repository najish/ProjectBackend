const router = require('express').Router()
const {getStudent, getStudents, addStudent, editStudent, getStudentName} = require('../controllers/studentController')


router.get('/',getStudents)
router.get('/:studentId',getStudent)
router.post('/',addStudent)
router.put('/',editStudent)
router.get('/:StudentName',getStudentName)


module.exports = router;