const router = require('express').Router()
const  {getUser,getUsers, addUser, findUserByUsername, findUserByEmail} = require('../controllers/userController.js')

router.get('/username',findUserByUsername)
router.get('/email',findUserByEmail)
router.get('/',getUsers);
router.get('/:userId',getUsers);
router.post('/',addUser);



module.exports = router