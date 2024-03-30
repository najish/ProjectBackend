const router = require('express').Router()
const sessoin = require('express-session')

const User = require('../../models/user.js')

router.post('/',async (req,res) => {
    console.log(req.body)
    
    res.send('login post method')
})


module.exports = router;