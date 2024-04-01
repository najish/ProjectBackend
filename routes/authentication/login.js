const router = require('express').Router()

const User = require('../../models/user.js')
const bcrypt = require('bcrypt')

router.post('/',async (req,res) => {
    try {
        const {username, password} = req.body
        console.log(username,password)
        const user = await User.findOne({
            where: {
                username: username
            }
        })

        if(!user) {

            res.send("user or password is invalid")
        }
        const valid = await bcrypt.compare(password,user.password)
        if(!valid) {
            res.send('password not matched')
        }
        res.send(user)

    } catch(err) {
        console.log(err)
    }

})


module.exports = router;