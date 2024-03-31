const router = require('express').Router()
const User = require('../models/user.js')
const session = require('express-session')
const data = require('../models/dummy.js')
const bcrypt = require('bcrypt')

sessionOption = {
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: false,
    name: 'userId',
}
router.get('/',async (req,res) => {
    try {
        const users = await User.findAll()
        if(users) return res.json(users)
        throw new Error('Unable to fetch request')
    } catch(err) {
        console.error(err);
        return res.send(err)
    }
})

router.get('/:userId',async (req,res) => {
    try {
        const userId = req.params.userId
        console.log(userId)

        User.findByPk(userId).then((data) => {
            if(data) {

                console.log('data fetched')
                return res.json(data)
            }
            else {
                console.log('faidflafa')
                throw new Error('failed to fetch')
            }
        }).catch(err => {
            console.log('failed to fetch')
            return res.send(err)
        })
    } catch(err) {
        console.error(err)
        return res.send(err)
    }
    
})


router.post('/',async (req,res) => {

    try {
        const data = req.body
        const {password} = data
        const salt = bcrypt.genSaltSync(10)
        const hash = await bcrypt.hashSync(password,salt)
        data.password = hash
        const user = await User.create(data)
        if(user) return res.send('user created')
        throw new Error('failed to created a recored: user')   
    } catch(err) {
        console.error(err);
        return res.send('error while creating resourcees')
    }
    
})




module.exports = router