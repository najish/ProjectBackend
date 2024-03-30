const router = require('express').Router()
const sessoin = require('express-session')
router.post('/',(req,res) => {
    console.log('middleware2');
    res.send('middleware2');
})


module.exports = router;