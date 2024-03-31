const router = require('express').Router()

const User = require('../../models/user.js')

router.post('/',async (req,res) => {
    try {
        const {username, password} = req.body
        console.log(username,password)
        let x = '' 

        if(x)
            console.log(x)
        else 
            console.log('user not found')

    } catch(err) {
        console.log(err)
    }
})


module.exports = router;